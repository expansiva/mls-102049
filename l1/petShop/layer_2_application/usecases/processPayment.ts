/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/processPayment.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { IPaymentRepository } from '/_102049_/l1/petShop/layer_2_application/ports/paymentRepository.js';
import type { Reservation } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import { canTransitionReservation } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import type { Payment, PaymentMethod } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';

const IN_STORE_PAYMENT_METHODS: readonly PaymentMethod[] = ['cash', 'creditCard', 'debitCard', 'pix'];

export interface ProcessPaymentInput {
  reservationId: string;
  method: string;
}

export interface ProcessPaymentOutput {
  paymentId: string;
  reservationId: string;
  amount: number;
  method: string;
  status: string;
  receivedBy: string;
  createdAt: string;
  reservationStatus: string;
}

function isInStorePaymentMethod(method: string): method is PaymentMethod {
  return (IN_STORE_PAYMENT_METHODS as readonly string[]).includes(method);
}

export async function processPayment(
  ctx: RequestContext,
  input: ProcessPaymentInput,
): Promise<ProcessPaymentOutput> {
  const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');
  const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');

  // rule: inStorePaymentOnly
  if (!isInStorePaymentMethod(input.method)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'inStorePaymentOnly: method must be one of cash|creditCard|debitCard|pix.',
      400,
      { ruleId: 'inStorePaymentOnly', method: input.method },
    );
  }

  const receivedBy = ctx.sessionContext.actorId;
  // rule: paymentRequiresReceipt
  if (receivedBy == null || receivedBy.length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'paymentRequiresReceipt: logged attendant (actorId) is required to confirm in-store payment.',
      400,
      { ruleId: 'paymentRequiresReceipt' },
    );
  }

  const reservation = await reservations.getById(input.reservationId);

  if (reservation.status !== 'confirmed') {
    throw new AppError(
      'VALIDATION_ERROR',
      `Reservation is not eligible for payment (status=${reservation.status}). Only confirmed reservations can be paid.`,
      400,
      {
        reservationId: reservation.reservationId,
        status: reservation.status,
      },
    );
  }

  if (!canTransitionReservation(reservation.status, 'fulfilled')) {
    throw new AppError(
      'CONFLICT',
      `Cannot transition reservation from ${reservation.status} to fulfilled.`,
      409,
      {
        reservationId: reservation.reservationId,
        from: reservation.status,
        to: 'fulfilled',
      },
    );
  }

  const items = reservation.items ?? [];
  if (items.length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'totalFromPricesAndQuantities: reservation has no items to price.',
      400,
      { ruleId: 'totalFromPricesAndQuantities', reservationId: reservation.reservationId },
    );
  }

  const productIds = [...new Set(items.map((item) => item.productId).filter((id) => id.length > 0))];
  const products = await ctx.mdm.collection.getMany({ mdmIds: productIds });
  const productById = new Map(products.map((p) => [p.mdmId, p]));

  // rule: totalFromPricesAndQuantities
  let amount = 0;
  for (const item of items) {
    const product = productById.get(item.productId);
    if (!product) {
      throw new AppError(
        'NOT_FOUND',
        `totalFromPricesAndQuantities: product not found for item: ${item.productId}`,
        404,
        { ruleId: 'totalFromPricesAndQuantities', productId: item.productId },
      );
    }
    const details = product.details as unknown as Record<string, unknown>;
    const moduleNs = details['petShop'] as Record<string, unknown> | undefined;
    const rawPrice =
      (typeof details['price'] === 'number' ? details['price'] : undefined) ??
      (moduleNs && typeof moduleNs['price'] === 'number' ? moduleNs['price'] : undefined);
    if (typeof rawPrice !== 'number' || Number.isNaN(rawPrice)) {
      throw new AppError(
        'VALIDATION_ERROR',
        `totalFromPricesAndQuantities: product missing price: ${item.productId}`,
        400,
        { ruleId: 'totalFromPricesAndQuantities', productId: item.productId },
      );
    }
    amount += item.quantity * rawPrice;
  }

  const now = ctx.clock.nowIso();
  const paymentId = ctx.idGenerator.newId();
  const payment: Payment = {
    paymentId,
    reservationId: reservation.reservationId,
    amount,
    method: input.method,
    status: 'posted',
    receivedBy,
    voidedAt: null,
    voidReason: null,
    createdAt: now,
  };

  const updated: Reservation = {
    ...reservation,
    status: 'fulfilled',
    paymentId,
    fulfilledAt: now,
    updatedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await payments.append(payment);
    await reservations.save(updated);
  });

  return {
    paymentId: payment.paymentId,
    reservationId: payment.reservationId,
    amount: payment.amount,
    method: payment.method,
    status: payment.status,
    receivedBy: payment.receivedBy,
    createdAt: payment.createdAt,
    reservationStatus: updated.status,
  };
}
