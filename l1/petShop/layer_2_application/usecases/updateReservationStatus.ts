/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Reservation, ReservationStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface UpdateReservationStatusInput {
  reservationId: string;
  status: string;
  cancelReason?: string;
  paymentId?: string;
}

export interface UpdateReservationStatusOutput {
  reservationId: string;
  status: string;
  readyAt: string | null;
  deliveredAt: string | null;
  cancelledAt: string | null;
  cancelReason: string | null;
  paymentId: string | null;
  updatedAt: string;
}

const ALLOWED_TARGET_STATUSES: ReadonlySet<string> = new Set(['ready', 'delivered', 'cancelled']);

/**
 * rule: storeCanMarkReservationReady
 * The store can only mark a reservation as ready when the reservation is currently active.
 */
function storeCanMarkReservationReady(reservation: Reservation): boolean {
  return reservation.status === 'active';
}

/**
 * rule: reservationStatusReflectsStage
 * The requested status must be one of the valid lifecycle transitions: ready, delivered, or cancelled.
 */
function reservationStatusReflectsStage(requestedStatus: string): boolean {
  return ALLOWED_TARGET_STATUSES.has(requestedStatus);
}

/**
 * rule: onlyActiveReservationsCanBeCancelled
 * A reservation may only be cancelled when its current status is active.
 */
function onlyActiveReservationsCanBeCancelled(reservation: Reservation): boolean {
  return reservation.status === 'active';
}

/**
 * rule: pickupRequiresValidReservation
 * Delivery (pickup) requires the reservation to be in ready status and not yet expired.
 */
function pickupRequiresValidReservation(reservation: Reservation, now: string): boolean {
  if (reservation.status !== 'ready') {
    return false;
  }
  const nowMs = Date.parse(now);
  const expiresMs = Date.parse(reservation.expiresAt);
  if (Number.isNaN(nowMs) || Number.isNaN(expiresMs)) {
    return false;
  }
  return nowMs <= expiresMs;
}

export async function updateReservationStatus(
  ctx: RequestContext,
  input: UpdateReservationStatusInput,
): Promise<UpdateReservationStatusOutput> {
  const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  // rule: reservationStatusReflectsStage
  if (!reservationStatusReflectsStage(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'reservationStatusReflectsStage: status must be one of ready, delivered, or cancelled.',
      400,
      { ruleId: 'reservationStatusReflectsStage', status: input.status },
    );
  }

  const reservation = await reservations.getById(input.reservationId);
  if (!reservation) {
    throw new AppError('NOT_FOUND', `Reservation not found: ${input.reservationId}`, 404, {
      reservationId: input.reservationId,
    });
  }

  const now = ctx.clock.nowIso();
  const targetStatus = input.status as ReservationStatus;

  let updatedReservation: Reservation;

  if (targetStatus === 'ready') {
    // rule: storeCanMarkReservationReady
    if (!storeCanMarkReservationReady(reservation)) {
      throw new AppError(
        'CONFLICT',
        'storeCanMarkReservationReady: only an active reservation can be marked ready.',
        409,
        { ruleId: 'storeCanMarkReservationReady', currentStatus: reservation.status },
      );
    }
    updatedReservation = {
      ...reservation,
      status: 'ready',
      readyAt: now,
      updatedAt: now,
    };
  } else if (targetStatus === 'delivered') {
    // rule: pickupRequiresValidReservation
    if (!pickupRequiresValidReservation(reservation, now)) {
      throw new AppError(
        'CONFLICT',
        'pickupRequiresValidReservation: reservation must be ready and not expired to be delivered.',
        409,
        { ruleId: 'pickupRequiresValidReservation', currentStatus: reservation.status, now, expiresAt: reservation.expiresAt },
      );
    }
    if (!input.paymentId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'paymentId is required when marking a reservation as delivered.',
        400,
        { field: 'paymentId' },
      );
    }
    updatedReservation = {
      ...reservation,
      status: 'delivered',
      deliveredAt: now,
      paymentId: input.paymentId,
      updatedAt: now,
    };
  } else if (targetStatus === 'cancelled') {
    // rule: onlyActiveReservationsCanBeCancelled
    if (!onlyActiveReservationsCanBeCancelled(reservation)) {
      throw new AppError(
        'CONFLICT',
        'onlyActiveReservationsCanBeCancelled: only an active reservation can be cancelled.',
        409,
        { ruleId: 'onlyActiveReservationsCanBeCancelled', currentStatus: reservation.status },
      );
    }
    if (!input.cancelReason) {
      throw new AppError(
        'VALIDATION_ERROR',
        'cancelReason is required when cancelling a reservation.',
        400,
        { field: 'cancelReason' },
      );
    }
    updatedReservation = {
      ...reservation,
      status: 'cancelled',
      cancelledAt: now,
      cancelReason: input.cancelReason,
      updatedAt: now,
    };
  } else {
    throw new AppError(
      'VALIDATION_ERROR',
      `Unsupported status transition: ${input.status}`,
      400,
      { status: input.status },
    );
  }

  // Collect productIds from reservation items for cancellation availability restore
  const productIds = (reservation.reservationItems ?? []).map((item) => item.productId);

  await ctx.data.runInTransaction(async () => {
    // Persist reservation changes
    await reservations.save(updatedReservation);

    // rule: cancellationRestoresAvailability
    if (targetStatus === 'cancelled' && productIds.length > 0) {
      for (const productId of productIds) {
        const product = await products.getById(productId);
        if (product && product.status !== 'available') {
          const restoredProduct: Product = {
            ...product,
            status: 'available', // rule: cancellationRestoresAvailability
            updatedAt: now,
          };
          await products.save(restoredProduct);
        }
      }
    }
  });

  return {
    reservationId: updatedReservation.reservationId,
    status: updatedReservation.status,
    readyAt: updatedReservation.readyAt,
    deliveredAt: updatedReservation.deliveredAt,
    cancelledAt: updatedReservation.cancelledAt,
    cancelReason: updatedReservation.cancelReason,
    paymentId: updatedReservation.paymentId,
    updatedAt: updatedReservation.updatedAt,
  };
}
