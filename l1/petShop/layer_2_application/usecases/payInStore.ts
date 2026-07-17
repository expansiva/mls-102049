/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/payInStore.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IPaymentRepository } from '/_102049_/l1/petShop/layer_2_application/ports/paymentRepository.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { Payment, PaymentMethod } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';
import {
reservationPaymentRequiresDelivered,
reservationRequiresCancelledAt,
reservationRequiresConfirmedAt,
reservationRequiresDeliveredAt,
reservationRequiresExpiredAt,
reservationRequiresReadyAt,
} from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import type { Reservation } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

export interface PayInStoreInput {
reservationId: string;
paymentMethod: string;
paymentAmount: number;
}

export interface PayInStoreOutput {
reservationId: string;
status: string;
deliveredAt: string;
paymentId: string;
updatedAt: string;
}

const VALID_PAYMENT_METHODS: PaymentMethod[] = ['cash', 'creditCard', 'debitCard', 'pix'];

function isPaymentMethod(value: string): value is PaymentMethod {
return VALID_PAYMENT_METHODS.includes(value as PaymentMethod);
}

function assertReservationStatusReflectsStage(reservation: Reservation): void {
const valid =
reservationRequiresConfirmedAt(reservation) &&
reservationRequiresReadyAt(reservation) &&
reservationRequiresDeliveredAt(reservation) &&
reservationRequiresExpiredAt(reservation) &&
reservationRequiresCancelledAt(reservation) &&
reservationPaymentRequiresDelivered(reservation);
if (!valid) {
throw new AppError(
'VALIDATION_ERROR',
'reservationStatusReflectsStage: status does not align with timestamps/payment.',
400,
{ ruleId: 'reservationStatusReflectsStage' },
);
}
}

export async function payInStore(
ctx: RequestContext,
input: PayInStoreInput,
): Promise<PayInStoreOutput> {
const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');
const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');
const now = ctx.clock.nowIso();
let reservation: Reservation;
try {
reservation = await reservations.getById(input.reservationId);
} catch {
throw new AppError(
'VALIDATION_ERROR',
'pickupRequiresValidReservation: reservation not found.',
400,
{ ruleId: 'pickupRequiresValidReservation' },
);
}
if (
reservation.status !== 'ready' ||
reservation.cancelledAt !== null ||
reservation.expiredAt !== null ||
reservation.deliveredAt !== null
) {
throw new AppError(
'VALIDATION_ERROR',
'pickupRequiresValidReservation: reservation is not eligible for pickup.',
400,
{ ruleId: 'pickupRequiresValidReservation' },
);
}
const nowMs = Date.parse(now);
const expiresMs = Date.parse(reservation.expiresAt);
const twentyFourHoursMs = 24 * 60 * 60 * 1000;
if (
Number.isNaN(expiresMs) ||
Number.isNaN(nowMs) ||
nowMs > expiresMs ||
expiresMs - nowMs > twentyFourHoursMs
) {
throw new AppError(
'VALIDATION_ERROR',
'reservationExpiresIn24Hours: reservation expired or outside pickup window.',
400,
{ ruleId: 'reservationExpiresIn24Hours' },
);
}
if (!isPaymentMethod(input.paymentMethod)) {
throw new AppError('VALIDATION_ERROR', 'paymentMethod inválido.', 400, {
paymentMethod: input.paymentMethod,
});
}
const payment: Payment = {
paymentId: ctx.idGenerator.newId(),
reservationId: reservation.reservationId,
amount: input.paymentAmount,
paymentMethod: input.paymentMethod,
status: 'posted',
voidedAt: null,
voidReason: null,
createdAt: now,
};
const updatedReservation: Reservation = {
...reservation,
paymentId: payment.paymentId,
deliveredAt: now,
status: 'delivered',
updatedAt: now,
};
assertReservationStatusReflectsStage(updatedReservation);
await ctx.data.runInTransaction(async (runtime) => {
const txCtx: RequestContext = { ...ctx, data: runtime };
const reservationsTx = resolveRepository<IReservationRepository>(txCtx, 'Reservation');
const paymentsTx = resolveRepository<IPaymentRepository>(txCtx, 'Payment');
await paymentsTx.append(payment);
await reservationsTx.save(updatedReservation);
});
return {
reservationId: updatedReservation.reservationId,
status: updatedReservation.status,
deliveredAt: updatedReservation.deliveredAt ?? now,
paymentId: updatedReservation.paymentId ?? payment.paymentId,
updatedAt: updatedReservation.updatedAt,
};
}
