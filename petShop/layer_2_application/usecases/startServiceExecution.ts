/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/startServiceExecution.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IServiceBookingRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.js';
import type { IOperatorRepository } from '/_102049_/l1/petShop/layer_2_application/ports/operatorRepository.js';
import type { ServiceBooking } from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';
import { canTransitionServiceBooking } from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';
import type { Operator } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';
import { operatorCanBeAllocated } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';

export interface StartServiceExecutionInput {
  serviceBookingId: string;
}

export interface StartServiceExecutionOutput {
  serviceBookingId: string;
  status: string;
  updatedAt: string;
}

export async function startServiceExecution(
  ctx: RequestContext,
  input: StartServiceExecutionInput,
): Promise<StartServiceExecutionOutput> {
  // Step 1: Resolve operatorId from session context (not a public input)
  const operatorId = ctx.sessionContext.actorId;
  if (!operatorId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Operator identity not found in session context.',
      400,
      { ruleId: 'onlyAssignedOperatorCanComplete' },
    );
  }

  // Step 2: Resolve system timestamp (not a public input)
  const now = ctx.clock.nowIso();

  const bookings = resolveRepository<IServiceBookingRepository>(ctx, 'ServiceBooking');
  const operators = resolveRepository<IOperatorRepository>(ctx, 'Operator');

  // Step 3–4: Load ServiceBooking and validate existence
  const booking = await bookings.getById(input.serviceBookingId);
  if (!booking) {
    throw new AppError('NOT_FOUND', 'ServiceBooking not found.', 404, {
      serviceBookingId: input.serviceBookingId,
    });
  }

  // Step 5: Validate booking status is 'confirmed'
  if (booking.status !== 'confirmed') {
    throw new AppError(
      'VALIDATION_ERROR',
      `ServiceBooking must be in confirmed status to start execution; current status: ${booking.status}`,
      400,
      { currentStatus: booking.status },
    );
  }

  // Step 6: Apply rule onlyAssignedOperatorCanComplete
  if (booking.operatorId !== operatorId) {
    throw new AppError(
      'FORBIDDEN',
      'Only the assigned operator can start this service booking.',
      403,
      {
        ruleId: 'onlyAssignedOperatorCanComplete',
        bookingOperatorId: booking.operatorId,
        resolvedOperatorId: operatorId,
      },
    );
  }

  // Step 7: Apply rule operatorSeesOnlyAssignedShiftBookings
  const operator = await operators.getById(operatorId);
  if (!operator) {
    throw new AppError('NOT_FOUND', 'Operator not found.', 404, { operatorId });
  }
  if (!operatorCanBeAllocated(operator)) {
    throw new AppError(
      'FORBIDDEN',
      'Operator is not active and cannot start service execution.',
      403,
      {
        ruleId: 'operatorSeesOnlyAssignedShiftBookings',
        operatorId,
      },
    );
  }

  // Modeling gap: The Operator entity has no shiftId field, so we cannot verify
  // that the operator is allocated to the same shift as the booking (booking.shiftId).
  // This sub-check is skipped until the Operator model includes shift allocation data.

  // Step 8: Validate domain transition confirmed -> inProgress
  if (!canTransitionServiceBooking(booking.status, 'inProgress')) {
    throw new AppError(
      'CONFLICT',
      `Cannot transition ServiceBooking from '${booking.status}' to 'inProgress'.`,
      409,
      { from: booking.status, to: 'inProgress' },
    );
  }

  // Step 9: Build updated booking with new status and timestamp
  const updatedBooking: ServiceBooking = {
    ...booking,
    status: 'inProgress',
    updatedAt: now,
  };

  // Step 10: Save inside a transaction
  await ctx.data.runInTransaction(async () => {
    await bookings.save(updatedBooking);
  });

  // Step 11: Return output
  return {
    serviceBookingId: updatedBooking.serviceBookingId,
    status: updatedBooking.status,
    updatedAt: updatedBooking.updatedAt,
  };
}
