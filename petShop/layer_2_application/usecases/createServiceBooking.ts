/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createServiceBooking.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IServiceBookingRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.js';
import type { IServiceRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceRepository.js';
import type { IShiftAssignmentRepository } from '/_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.js';
import type { IOperatorRepository } from '/_102049_/l1/petShop/layer_2_application/ports/operatorRepository.js';
import type { ServiceBooking } from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';
import {
  isBookingDateWithinOperatingDays,
  isBookingTimeWithinOperatingHours,
} from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';
import { isServiceActive } from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';
import type { Operator } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';
import { operatorCanBeAllocated } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';

export interface CreateServiceBookingInput {
  serviceId: string;
  customerName: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  notes?: string;
}

export interface CreateServiceBookingOutput {
  serviceBookingId: string;
  serviceId: string;
  operatorId: string;
  shiftId: string;
  bookingDate: string;
  bookingTime: string;
  status: string;
  customerName: string;
}

const DAY_OF_WEEK_FLAGS: Record<number, string> = {
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

export async function createServiceBooking(
  ctx: RequestContext,
  input: CreateServiceBookingInput,
): Promise<CreateServiceBookingOutput> {
  // ── Step 1: RULE businessHoursForScheduling ──
  if (!isBookingDateWithinOperatingDays(input.bookingDate)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'businessHoursForScheduling: bookingDate must be between Monday and Saturday.',
      400,
      { ruleId: 'businessHoursForScheduling' },
    );
  }
  if (!isBookingTimeWithinOperatingHours(input.bookingTime)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'businessHoursForScheduling: bookingTime must be within store operating hours (09:00 to 18:00).',
      400,
      { ruleId: 'businessHoursForScheduling' },
    );
  }

  // ── Step 2: Load Service by serviceId ──
  const services = resolveRepository<IServiceRepository>(ctx, 'Service');
  const service = await services.getById(input.serviceId);
  if (!service || !isServiceActive(service)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Service not found or inactive: ${input.serviceId}`,
      400,
      { serviceId: input.serviceId },
    );
  }

  // ── Step 3: List active Shifts from MDM and find matching shift ──
  const dayOfWeek = new Date(input.bookingDate + 'T00:00:00').getDay();
  const dayFlag = DAY_OF_WEEK_FLAGS[dayOfWeek];
  if (!dayFlag) {
    throw new AppError(
      'VALIDATION_ERROR',
      'businessHoursForScheduling: no shift configured for this day of week.',
      400,
      { ruleId: 'businessHoursForScheduling' },
    );
  }

  const shiftListResult = await ctx.mdm.collection.listByType({ type: 'petShop.Shift' });
  const shiftEntities = await ctx.mdm.collection.getMany({
    mdmIds: shiftListResult.items.map((s) => s.mdmId),
  });

  const matchingShift = shiftEntities.find((entity) => {
    const details = entity.details as unknown as Record<string, unknown>;
    if (details['active'] !== true) return false;
    if (details[dayFlag] !== true) return false;
    const startTime = details['startTime'] as string | undefined;
    const endTime = details['endTime'] as string | undefined;
    if (!startTime || !endTime) return false;
    return input.bookingTime >= startTime && input.bookingTime <= endTime;
  });

  if (!matchingShift) {
    throw new AppError(
      'VALIDATION_ERROR',
      'businessHoursForScheduling: no shift available for the selected date and time.',
      400,
      { ruleId: 'businessHoursForScheduling' },
    );
  }

  const shiftId = matchingShift.mdmId;

  // ── Step 4: Load ShiftAssignments for the resolved shiftId ──
  const shiftAssignments = resolveRepository<IShiftAssignmentRepository>(ctx, 'ShiftAssignment');
  const assignments = await shiftAssignments.list({ shiftId });
  const operatorIds = assignments.map((a) => a.operatorId);

  if (operatorIds.length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'noBookingWithoutAvailableOperator: no operators assigned to the shift.',
      400,
      { ruleId: 'noBookingWithoutAvailableOperator' },
    );
  }

  // ── Step 5: Load Operators and filter to active ──
  const operators = resolveRepository<IOperatorRepository>(ctx, 'Operator');
  const operatorResults = await Promise.all(
    operatorIds.map((id) => operators.getById(id)),
  );
  const activeOperators = operatorResults.filter(
    (op): op is Operator => op !== null && operatorCanBeAllocated(op),
  );

  if (activeOperators.length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'noBookingWithoutAvailableOperator: no active operators available for the shift.',
      400,
      { ruleId: 'noBookingWithoutAvailableOperator' },
    );
  }

  // ── Step 6: Count existing confirmed ServiceBookings for the shift ──
  const serviceBookings = resolveRepository<IServiceBookingRepository>(ctx, 'ServiceBooking');
  const confirmedBookings = await serviceBookings.list({ shiftId, status: 'confirmed' });

  // ── Step 7: RULE schedulingCapacityByOperators ──
  if (confirmedBookings.length >= activeOperators.length) {
    throw new AppError(
      'VALIDATION_ERROR',
      'schedulingCapacityByOperators: no capacity available for this shift.',
      400,
      { ruleId: 'schedulingCapacityByOperators' },
    );
  }

  // ── Step 8: RULE noBookingWithoutAvailableOperator — select first active operator ──
  const assignedOperatorId = activeOperators[0].operatorId;

  // ── Step 9: RULE paymentInStoreOnly — no payment or transaction record created ──

  // ── Steps 10–11: Build and save the ServiceBooking inside a transaction ──
  const now = ctx.clock.nowIso();
  const serviceBookingId = ctx.idGenerator.newId();

  const booking: ServiceBooking = {
    serviceBookingId,
    serviceId: input.serviceId,
    operatorId: assignedOperatorId,
    shiftId,
    customerName: input.customerName,
    customerPhone: input.customerPhone,
    bookingDate: input.bookingDate,
    bookingTime: input.bookingTime,
    status: 'confirmed',
    notes: input.notes ?? null,
    completedAt: null,
    cancelledAt: null,
    cancelReason: null,
    createdAt: now,
    updatedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await serviceBookings.save(booking);
  });

  // ── Step 12: Return the created ServiceBooking projection ──
  return {
    serviceBookingId: booking.serviceBookingId,
    serviceId: booking.serviceId,
    operatorId: booking.operatorId,
    shiftId: booking.shiftId,
    bookingDate: booking.bookingDate,
    bookingTime: booking.bookingTime,
    status: booking.status,
    customerName: booking.customerName,
  };
}
