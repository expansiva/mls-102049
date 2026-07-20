/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createReservation.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { IPaymentRepository } from '/_102049_/l1/petShop/layer_2_application/ports/paymentRepository.js';
import type { Reservation, ReservationItem } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import { reservationExpiresAtIsValid } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import type { Payment } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';

export interface CreateReservationInput {
  customerName: string;
  customerPhone: string;
  productId: string;
  quantity: number;
}

export interface CreateReservationOutputItem {
  productId: string;
  productName: string;
  quantity: number;
}

export interface CreateReservationOutput {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  items: CreateReservationOutputItem[];
}

function addTwentyFourHours(iso: string): string {
  const ms = Date.parse(iso);
  const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;
  return new Date(ms + TWENTY_FOUR_HOURS_MS).toISOString();
}

export async function createReservation(
  ctx: RequestContext,
  input: CreateReservationInput,
): Promise<CreateReservationOutput> {
  const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');
  const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');

  const customerName = (input.customerName ?? '').trim();
  const customerPhone = (input.customerPhone ?? '').trim();
  // rule: reservationRequiresContact
  if (!customerName || !customerPhone) {
    throw new AppError(
      'VALIDATION_ERROR',
      'reservationRequiresContact: customerName and customerPhone are required.',
      400,
      { ruleId: 'reservationRequiresContact' },
    );
  }

  if (typeof input.quantity !== 'number' || !Number.isFinite(input.quantity) || input.quantity <= 0) {
    throw new AppError('VALIDATION_ERROR', 'quantity must be a positive number.', 400, {
      quantity: input.quantity,
    });
  }

  const productEntity = await ctx.mdm.entity.get({ mdmId: input.productId });
  if (!productEntity) {
    throw new AppError('NOT_FOUND', `MDM record not found: ${input.productId}`, 404, {
      mdmId: input.productId,
    });
  }
  const productDetails = productEntity.details as unknown as { name?: string };
  const productName = productDetails.name ?? productEntity.index.name ?? '';

  const now = ctx.clock.nowIso();
  const reservationId = ctx.idGenerator.newId();
  // rule: reservationValidity24h
  const expiresAt = addTwentyFourHours(now);

  const item: ReservationItem = {
    reservationItemId: ctx.idGenerator.newId(),
    reservationId,
    productId: input.productId,
    quantity: input.quantity,
    createdAt: now,
    updatedAt: now,
  };

  // rule: reservationStatuses
  const reservation: Reservation = {
    reservationId,
    customerName,
    customerPhone,
    status: 'pending',
    expiresAt,
    confirmedAt: null,
    fulfilledAt: null,
    cancelledAt: null,
    cancellationReason: null,
    paymentId: null,
    items: [item],
    createdAt: now,
    updatedAt: now,
  };

  if (!reservationExpiresAtIsValid(reservation)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'reservationValidity24h: expiresAt must be exactly 24 hours after createdAt.',
      400,
      { ruleId: 'reservationValidity24h' },
    );
  }

  const auditPayment: Payment = {
    paymentId: ctx.idGenerator.newId(),
    reservationId,
    amount: 0,
    method: 'cash',
    status: 'posted',
    receivedBy: ctx.sessionContext.actorId ?? 'system',
    voidedAt: null,
    voidReason: null,
    createdAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await reservations.save(reservation);
    await payments.append(auditPayment);
  });

  return {
    reservationId: reservation.reservationId,
    customerName: reservation.customerName,
    customerPhone: reservation.customerPhone,
    status: reservation.status,
    expiresAt: reservation.expiresAt,
    createdAt: reservation.createdAt,
    items: [
      {
        productId: item.productId,
        productName,
        quantity: item.quantity,
      },
    ],
  };
}
