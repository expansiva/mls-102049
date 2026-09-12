/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { IPaymentRepository } from '/_102049_/l1/petShop/layer_2_application/ports/paymentRepository.js';
import type { Payment } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';
import type { Reservation, ReservationStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import { canTransitionReservation } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

const RESERVATION_STATUSES: ReservationStatus[] = ['pending', 'confirmed', 'fulfilled', 'cancelled'];

export interface UpdateReservationStatusInput {
  reservationId: string;
  newStatus: string;
  cancellationReason?: string;
  paymentId?: string;
}

export interface UpdateReservationStatusOutput {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: string;
  expiresAt: string;
  confirmedAt?: string;
  fulfilledAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
  paymentId?: string;
  updatedAt: string;
}

function isReservationStatus(value: string): value is ReservationStatus {
  return (RESERVATION_STATUSES as string[]).includes(value);
}

function toOutput(reservation: Reservation): UpdateReservationStatusOutput {
  return {
    reservationId: reservation.reservationId,
    customerName: reservation.customerName,
    customerPhone: reservation.customerPhone,
    status: reservation.status,
    expiresAt: reservation.expiresAt,
    confirmedAt: reservation.confirmedAt ?? undefined,
    fulfilledAt: reservation.fulfilledAt ?? undefined,
    cancelledAt: reservation.cancelledAt ?? undefined,
    cancellationReason: reservation.cancellationReason ?? undefined,
    paymentId: reservation.paymentId ?? undefined,
    updatedAt: reservation.updatedAt,
  };
}

export async function updateReservationStatus(
  ctx: RequestContext,
  input: UpdateReservationStatusInput,
): Promise<UpdateReservationStatusOutput> {
  const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');
  const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');

  const reservation = await reservations.getById(input.reservationId);
  const now = ctx.clock.nowIso();

  // rule: reservationStatuses
  if (!isReservationStatus(input.newStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'reservationStatuses: newStatus must be one of pending|confirmed|fulfilled|cancelled.',
      400,
      { ruleId: 'reservationStatuses', newStatus: input.newStatus },
    );
  }

  const newStatus: ReservationStatus = input.newStatus;
  if (!canTransitionReservation(reservation.status, newStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `reservationStatuses: transition from '${reservation.status}' to '${newStatus}' is not allowed.`,
      400,
      {
        ruleId: 'reservationStatuses',
        from: reservation.status,
        to: newStatus,
      },
    );
  }

  if (newStatus === 'cancelled') {
    if (input.cancellationReason == null || input.cancellationReason.trim().length === 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'reservationStatuses: cancellationReason is required when cancelling a reservation.',
        400,
        { ruleId: 'reservationStatuses', newStatus },
      );
    }
  }

  if (newStatus === 'fulfilled') {
    if (input.paymentId == null || input.paymentId.trim().length === 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'reservationStatuses: paymentId is required when fulfilling a reservation.',
        400,
        { ruleId: 'reservationStatuses', newStatus },
      );
    }
  }

  // rule: reservationValidity24h
  const expiresMs = Date.parse(reservation.expiresAt);
  const nowMs = Date.parse(now);
  const isExpired = !Number.isNaN(expiresMs) && !Number.isNaN(nowMs) && expiresMs < nowMs;
  if (isExpired && newStatus !== 'cancelled') {
    throw new AppError(
      'VALIDATION_ERROR',
      'reservationValidity24h: expired reservations may only be cancelled.',
      400,
      {
        ruleId: 'reservationValidity24h',
        expiresAt: reservation.expiresAt,
        newStatus,
      },
    );
  }

  reservation.status = newStatus;
  reservation.updatedAt = now;

  if (newStatus === 'confirmed') {
    reservation.confirmedAt = now;
  } else if (newStatus === 'fulfilled') {
    reservation.fulfilledAt = now;
    reservation.paymentId = input.paymentId ?? null;
  } else if (newStatus === 'cancelled') {
    reservation.cancelledAt = now;
    reservation.cancellationReason = input.cancellationReason ?? null;
  }

  let paymentEvent: Payment | null = null;
  if (newStatus === 'fulfilled' && reservation.paymentId != null) {
    paymentEvent = {
      paymentId: reservation.paymentId,
      reservationId: reservation.reservationId,
      amount: 0,
      method: 'cash',
      status: 'posted',
      receivedBy: ctx.sessionContext.actorId ?? ctx.sessionContext.actorSession?.actorId ?? 'system',
      voidedAt: null,
      voidReason: null,
      createdAt: now,
    };
  }

  await ctx.data.runInTransaction(async () => {
    await reservations.save(reservation);
    if (paymentEvent != null) {
      await payments.append(paymentEvent);
    }
  });

  return toOutput(reservation);
}
