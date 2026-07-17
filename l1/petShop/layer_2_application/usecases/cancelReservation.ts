/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/cancelReservation.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Reservation } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface CancelReservationInput {
  reservationId: string;
  cancelReason?: string;
}

export interface RestoredProduct {
  productId: string;
  available: boolean;
}

export interface CancelReservationOutput {
  reservationId: string;
  status: string;
  cancelledAt: string;
  cancelReason?: string;
  updatedAt: string;
  restoredProducts: RestoredProduct[];
}

export async function cancelReservation(
  ctx: RequestContext,
  input: CancelReservationInput,
): Promise<CancelReservationOutput> {
  const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  const reservation = await reservations.getById(input.reservationId);

  // rule: reservationRequiresAuthentication
  if (!ctx.sessionContext.actorId || ctx.sessionContext.actorId !== reservation.customerId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'reservationRequiresAuthentication: the authenticated actor must be the reservation owner.',
      400,
      { ruleId: 'reservationRequiresAuthentication' },
    );
  }

  // rule: onlyActiveReservationsCanBeCancelled
  if (reservation.status !== 'active' && reservation.status !== 'ready') {
    throw new AppError(
      'CONFLICT',
      'onlyActiveReservationsCanBeCancelled: reservation is not in an active or ready state.',
      409,
      { ruleId: 'onlyActiveReservationsCanBeCancelled', currentStatus: reservation.status },
    );
  }

  const now = ctx.clock.nowIso();

  // rule: reservationStatusReflectsStage — transition to 'cancelled' with cancelledAt set
  const updatedReservation: Reservation = {
    ...reservation,
    status: 'cancelled',
    cancelledAt: now,
    cancelReason: input.cancelReason ?? null,
    updatedAt: now,
  };

  // Collect unique productIds from embedded reservation items
  const productIds = (reservation.reservationItems ?? []).map((item) => item.productId);
  const uniqueProductIds = [...new Set(productIds)];

  // Load products to restore their availability
  const loadedProducts = await Promise.all(uniqueProductIds.map((id) => products.getById(id)));

  const restoredProducts: RestoredProduct[] = [];

  await ctx.data.runInTransaction(async () => {
    await reservations.save(updatedReservation);

    // rule: cancellationRestoresAvailability — set each reserved product back to available
    for (const product of loadedProducts) {
      const updatedProduct: Product = {
        ...product,
        status: 'available',
        updatedAt: now,
      };
      await products.save(updatedProduct);
      restoredProducts.push({
        productId: product.productId,
        available: true,
      });
    }
  });

  return {
    reservationId: updatedReservation.reservationId,
    status: updatedReservation.status,
    cancelledAt: updatedReservation.cancelledAt as string,
    cancelReason: updatedReservation.cancelReason ?? undefined,
    updatedAt: updatedReservation.updatedAt,
    restoredProducts,
  };
}
