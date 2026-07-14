/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewOperatorSchedule.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IServiceBookingRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.js';
import type { ServiceBooking } from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';

export interface ViewOperatorScheduleInput {}

export interface ViewOperatorScheduleItem {
  serviceBookingId: string;
  serviceId: string;
  customerName: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  status: string;
  notes?: string | null;
}

export interface ViewOperatorScheduleOutput {
  bookings: ViewOperatorScheduleItem[];
}

export async function viewOperatorSchedule(
  ctx: RequestContext,
  _input: ViewOperatorScheduleInput,
): Promise<ViewOperatorScheduleOutput> {
  const bookingsRepo = resolveRepository<IServiceBookingRepository>(ctx, 'ServiceBooking');

  // Step 1: Resolve operatorId from session context (actorSession) — not a public input.
  const operatorId = ctx.sessionContext.actorSession.actorId;
  if (!operatorId) {
    // No authenticated operator in session — return empty list per rule operatorSeesOnlyAssignedShiftBookings.
    return { bookings: [] };
  }

  // Step 2: Load all ServiceBooking entries filtered by operatorId (rule: operatorSeesOnlyAssignedShiftBookings).
  const allBookings = await bookingsRepo.list({ operatorId });

  // Step 3: Filter only confirmed bookings (rule: operatorScheduleShowsConfirmedOnly).
  const confirmedBookings = allBookings.filter(
    (b) => String(b.status) === 'confirmed',
  );

  // Step 4: Sort by bookingDate asc, then bookingTime asc.
  const sorted = [...confirmedBookings].sort((a, b) => {
    const dateCmp = a.bookingDate.localeCompare(b.bookingDate);
    if (dateCmp !== 0) return dateCmp;
    return a.bookingTime.localeCompare(b.bookingTime);
  });

  // Step 5: Project fields.
  const projected: ViewOperatorScheduleItem[] = sorted.map((b: ServiceBooking) => ({
    serviceBookingId: b.serviceBookingId,
    serviceId: b.serviceId,
    customerName: b.customerName,
    customerPhone: b.customerPhone,
    bookingDate: b.bookingDate,
    bookingTime: b.bookingTime,
    status: b.status,
    notes: b.notes,
  }));

  // Step 6: Return the projected list.
  return { bookings: projected };
}
