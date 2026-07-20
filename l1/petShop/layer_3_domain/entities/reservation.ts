/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/reservation.ts" enhancement="_blank"/>
export type ReservationStatus = 'pending' | 'confirmed' | 'fulfilled' | 'cancelled';

export interface ReservationItem {
  reservationItemId: string;
  reservationId: string;
  productId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface Reservation {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: ReservationStatus;
  expiresAt: string;
  confirmedAt: string | null;
  fulfilledAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  paymentId: string | null;
  items: ReservationItem[];
  createdAt: string;
  updatedAt: string;
}

export const RESERVATION_STATUS_TRANSITIONS: Record<ReservationStatus, ReservationStatus[]> = {
  pending: ['confirmed', 'cancelled'],
  confirmed: ['fulfilled', 'cancelled'],
  fulfilled: [],
  cancelled: [],
};

export function canTransitionReservation(from: ReservationStatus, to: ReservationStatus): boolean {
  return RESERVATION_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

/** expiresAt must be exactly 24 hours after createdAt */
export function reservationExpiresAtIsValid(
  reservation: Pick<Reservation, 'createdAt' | 'expiresAt'>,
): boolean {
  const createdMs = Date.parse(reservation.createdAt);
  const expiresMs = Date.parse(reservation.expiresAt);
  if (Number.isNaN(createdMs) || Number.isNaN(expiresMs)) {
    return false;
  }
  const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;
  return expiresMs - createdMs === TWENTY_FOUR_HOURS_MS;
}

/** status='confirmed' implies confirmedAt is set */
export function reservationConfirmedImpliesTimestamp(
  reservation: Pick<Reservation, 'status' | 'confirmedAt'>,
): boolean {
  if (reservation.status !== 'confirmed') {
    return true;
  }
  return reservation.confirmedAt != null && reservation.confirmedAt.length > 0;
}

/** status='fulfilled' implies fulfilledAt is set and paymentId is set */
export function reservationFulfilledImpliesTimestampAndPayment(
  reservation: Pick<Reservation, 'status' | 'fulfilledAt' | 'paymentId'>,
): boolean {
  if (reservation.status !== 'fulfilled') {
    return true;
  }
  return (
    reservation.fulfilledAt != null &&
    reservation.fulfilledAt.length > 0 &&
    reservation.paymentId != null &&
    reservation.paymentId.length > 0
  );
}

/** status='cancelled' implies cancelledAt is set and cancellationReason is set */
export function reservationCancelledImpliesTimestampAndReason(
  reservation: Pick<Reservation, 'status' | 'cancelledAt' | 'cancellationReason'>,
): boolean {
  if (reservation.status !== 'cancelled') {
    return true;
  }
  return (
    reservation.cancelledAt != null &&
    reservation.cancelledAt.length > 0 &&
    reservation.cancellationReason != null &&
    reservation.cancellationReason.length > 0
  );
}

/** confirmedAt, fulfilledAt, cancelledAt (when present) must be on or after createdAt */
export function reservationLifecycleTimestampsOnOrAfterCreatedAt(
  reservation: Pick<Reservation, 'createdAt' | 'confirmedAt' | 'fulfilledAt' | 'cancelledAt'>,
): boolean {
  const createdMs = Date.parse(reservation.createdAt);
  if (Number.isNaN(createdMs)) {
    return false;
  }
  const timestamps = [reservation.confirmedAt, reservation.fulfilledAt, reservation.cancelledAt];
  for (const ts of timestamps) {
    if (ts == null || ts.length === 0) {
      continue;
    }
    const ms = Date.parse(ts);
    if (Number.isNaN(ms) || ms < createdMs) {
      return false;
    }
  }
  return true;
}

/** fulfilledAt and cancelledAt are mutually exclusive */
export function reservationFulfilledAndCancelledAreMutuallyExclusive(
  reservation: Pick<Reservation, 'fulfilledAt' | 'cancelledAt'>,
): boolean {
  const hasFulfilled = reservation.fulfilledAt != null && reservation.fulfilledAt.length > 0;
  const hasCancelled = reservation.cancelledAt != null && reservation.cancelledAt.length > 0;
  return !(hasFulfilled && hasCancelled);
}

export function reservationRequiresItem(reservation: Pick<Reservation, 'items'>): boolean {
  return reservation.items.length > 0;
}
