/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/completeServiceExecution.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IServiceBookingRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.js';
import type { ServiceBooking } from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';
import { canTransitionServiceBooking } from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';

export interface CompleteServiceExecutionInput {
  serviceBookingId: string;
}

export interface CompleteServiceExecutionOutput {
  serviceBookingId: string;
  status: string;
  completedAt: string;
}

export async function completeServiceExecution(
  ctx: RequestContext,
  input: CompleteServiceExecutionInput,
): Promise<CompleteServiceExecutionOutput> {
  const operatorId = ctx.sessionContext.actorId ?? null;
  const now = ctx.clock.nowIso();

  const bookings = resolveRepository<IServiceBookingRepository>(ctx, 'ServiceBooking');

  const booking = await bookings.getById(input.serviceBookingId);
  if (!booking) {
    throw new AppError(
      'NOT_FOUND',
      `ServiceBooking not found: ${input.serviceBookingId}`,
      404,
      { serviceBookingId: input.serviceBookingId },
    );
  }

  // Rule: onlyAssignedOperatorCanComplete
  if (operatorId === null || booking.operatorId !== operatorId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'onlyAssignedOperatorCanComplete: only the operator assigned to this booking can complete it.',
      400,
      { ruleId: 'onlyAssignedOperatorCanComplete', bookingOperatorId: booking.operatorId, resolvedOperatorId: operatorId },
    );
  }

  // Validate current status is 'inProgress'
  if (booking.status !== 'inProgress') {
    throw new AppError(
      'VALIDATION_ERROR',
      `ServiceBooking is not in a completable state (current status: ${booking.status}).`,
      400,
      { currentStatus: booking.status, expectedStatus: 'inProgress' },
    );
  }

  // Domain transition check
  if (!canTransitionServiceBooking(booking.status, 'completed')) {
    throw new AppError(
      'CONFLICT',
      `Cannot transition ServiceBooking from '${booking.status}' to 'completed'.`,
      409,
      { from: booking.status, to: 'completed' },
    );
  }

  // Rule: paymentInStoreOnly — inline guard; no payment/billing port is invoked.
  // Payment is handled in-store only; this usecase must NOT call any payment or billing port.
  const paymentInStoreOnlyRuleId = 'paymentInStoreOnly';

  const updatedBooking: ServiceBooking = {
    ...booking,
    status: 'completed',
    completedAt: now,
    updatedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await bookings.save(updatedBooking);
  });

  return {
    serviceBookingId: updatedBooking.serviceBookingId,
    status: updatedBooking.status,
    completedAt: updatedBooking.completedAt as string,
  };
}
