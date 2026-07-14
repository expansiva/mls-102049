/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.ts" enhancement="_blank"/>

export type ServiceBookingStatus = 'confirmed' | 'inProgress' | 'completed' | 'cancelled';

export interface ServiceBooking {
  serviceBookingId: string;
  serviceId: string;
  operatorId: string;
  shiftId: string;
  customerName: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  status: ServiceBookingStatus;
  notes: string | null;
  completedAt: string | null;
  cancelledAt: string | null;
  cancelReason: string | null;
  createdAt: string;
  updatedAt: string;
}

export const SERVICE_BOOKING_STATUS_TRANSITIONS: Record<ServiceBookingStatus, ServiceBookingStatus[]> = {
  confirmed: ['inProgress', 'cancelled'],
  inProgress: ['completed', 'cancelled'],
  completed: [],
  cancelled: [],
};

export function canTransitionServiceBooking(
  from: ServiceBookingStatus,
  to: ServiceBookingStatus,
): boolean {
  return SERVICE_BOOKING_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function isValidServiceBookingStatus(status: string): status is ServiceBookingStatus {
  return status === 'confirmed' || status === 'inProgress' || status === 'completed' || status === 'cancelled';
}

/**
 * bookingDate must be between Monday and Saturday (inclusive).
 * Expects an ISO date string (YYYY-MM-DD).
 */
export function isBookingDateWithinOperatingDays(bookingDate: string): boolean {
  const date = new Date(bookingDate + 'T00:00:00');
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  return dayOfWeek >= 1 && dayOfWeek <= 6;
}

/**
 * bookingTime must be within store operating hours (09:00 to 18:00).
 * Expects a time string in HH:mm format.
 */
export function isBookingTimeWithinOperatingHours(bookingTime: string): boolean {
  const match = /^(\d{2}):(\d{2})$/.exec(bookingTime);
  if (!match) {
    return false;
  }
  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const totalMinutes = hours * 60 + minutes;
  const openingMinutes = 9 * 60; // 09:00
  const closingMinutes = 18 * 60; // 18:00
  return totalMinutes >= openingMinutes && totalMinutes <= closingMinutes;
}

/**
 * When status is 'completed', completedAt must be set.
 */
export function serviceBookingCompletedRequiresCompletedAt(
  booking: Pick<ServiceBooking, 'status' | 'completedAt'>,
): boolean {
  if (booking.status === 'completed') {
    return booking.completedAt !== null;
  }
  return true;
}

/**
 * When status is 'cancelled', cancelledAt and cancelReason must be set.
 */
export function serviceBookingCancelledRequiresCancellationFields(
  booking: Pick<ServiceBooking, 'status' | 'cancelledAt' | 'cancelReason'>,
): boolean {
  if (booking.status === 'cancelled') {
    return booking.cancelledAt !== null && booking.cancelReason !== null && booking.cancelReason.trim().length > 0;
  }
  return true;
}

/**
 * completedAt and cancelledAt are mutually exclusive.
 */
export function serviceBookingCompletionAndCancellationAreMutuallyExclusive(
  booking: Pick<ServiceBooking, 'completedAt' | 'cancelledAt'>,
): boolean {
  return !(booking.completedAt !== null && booking.cancelledAt !== null);
}

/**
 * updatedAt must be greater than or equal to createdAt.
 */
export function serviceBookingUpdatedAtIsValid(
  booking: Pick<ServiceBooking, 'createdAt' | 'updatedAt'>,
): boolean {
  return booking.updatedAt >= booking.createdAt;
}

/**
 * Validates all invariants for a ServiceBooking entity.
 * Returns an array of error messages (empty if valid).
 */
export function validateServiceBookingInvariants(booking: ServiceBooking): string[] {
  const errors: string[] = [];

  if (!isValidServiceBookingStatus(booking.status)) {
    errors.push("status must be 'confirmed', 'inProgress', 'completed', or 'cancelled'");
  }

  if (!isBookingDateWithinOperatingDays(booking.bookingDate)) {
    errors.push('bookingDate must be between Monday and Saturday');
  }

  if (!isBookingTimeWithinOperatingHours(booking.bookingTime)) {
    errors.push('bookingTime must be within store operating hours (09:00 to 18:00)');
  }

  if (!serviceBookingCompletedRequiresCompletedAt(booking)) {
    errors.push("when status is 'completed', completedAt must be set");
  }

  if (!serviceBookingCancelledRequiresCancellationFields(booking)) {
    errors.push("when status is 'cancelled', cancelledAt and cancelReason must be set");
  }

  if (!serviceBookingCompletionAndCancellationAreMutuallyExclusive(booking)) {
    errors.push('completedAt and cancelledAt are mutually exclusive');
  }

  if (!serviceBookingUpdatedAtIsValid(booking)) {
    errors.push('updatedAt must be greater than or equal to createdAt');
  }

  return errors;
}
