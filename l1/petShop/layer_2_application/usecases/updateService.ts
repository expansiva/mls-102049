/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateService.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IServiceRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceRepository.js';
import type { IServiceBookingRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.js';
import type { Service, ServiceStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';
import {
  isValidServiceStatus,
  serviceHasPositiveDuration,
  serviceHasNonNegativePrice,
  serviceStatusInvariantConsistent,
  validateServiceInvariants,
} from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';

export interface UpdateServiceInput {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: string;
}

export interface UpdateServiceOutput {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: string;
  deactivatedAt: string | null;
  updatedAt: string;
}

export async function updateService(
  ctx: RequestContext,
  input: UpdateServiceInput,
): Promise<UpdateServiceOutput> {
  const services = resolveRepository<IServiceRepository>(ctx, 'Service');
  // ServiceBooking port is available for read-only verification if needed,
  // but per rule deactivatingServiceDoesNotCancelBookings, no booking mutations occur.
  resolveRepository<IServiceBookingRepository>(ctx, 'ServiceBooking');

  // 1. Load the Service aggregate by serviceId
  const existing = await services.getById(input.serviceId);
  if (!existing) {
    throw new AppError(
      'NOT_FOUND',
      `Service not found: ${input.serviceId}`,
      404,
      { serviceId: input.serviceId },
    );
  }

  // 2. Validate that status is one of 'active' or 'inactive'
  if (!isValidServiceStatus(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `status must be 'active' or 'inactive', received: ${input.status}`,
      400,
      { ruleId: 'activeServicesOnlyListed', field: 'status', value: input.status },
    );
  }

  const newStatus = input.status as ServiceStatus;
  const now = ctx.clock.nowIso();

  // 3. Apply field updates
  const updatedService: Service = {
    ...existing,
    name: input.name,
    description: input.description,
    estimatedDurationMinutes: input.estimatedDurationMinutes,
    price: input.price,
    status: newStatus,
    updatedAt: now,
  };

  // 5. Handle deactivatedAt based on status transition
  if (newStatus === 'inactive' && existing.status === 'active') {
    // Transitioning from active to inactive — set deactivatedAt
    updatedService.deactivatedAt = now;
  } else if (newStatus === 'inactive' && existing.deactivatedAt === null) {
    // Was already inactive but deactivatedAt was null — set it now
    updatedService.deactivatedAt = now;
  } else if (newStatus === 'active') {
    // Reactivating — clear deactivatedAt
    updatedService.deactivatedAt = null;
  } else {
    // Staying inactive — preserve existing deactivatedAt
    updatedService.deactivatedAt = existing.deactivatedAt;
  }

  // Validate domain invariants
  if (!serviceHasPositiveDuration(updatedService)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'estimatedDurationMinutes must be a positive number',
      400,
      { ruleId: 'serviceHasPositiveDuration' },
    );
  }
  if (!serviceHasNonNegativePrice(updatedService)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'price must be a non-negative monetary value',
      400,
      { ruleId: 'serviceHasNonNegativePrice' },
    );
  }
  if (!serviceStatusInvariantConsistent(updatedService)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Service status invariant is inconsistent: deactivatedAt must match status',
      400,
      { ruleId: 'serviceStatusInvariantConsistent' },
    );
  }

  const invariantViolations = validateServiceInvariants(updatedService);
  if (invariantViolations.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Service invariant violations: ${invariantViolations.join('; ')}`,
      400,
      { violations: invariantViolations },
    );
  }

  // 6. Rule deactivatingServiceDoesNotCancelBookings:
  // When status transitions to 'inactive', do NOT query, modify, or cancel any ServiceBooking records.
  // Bookings with status 'confirmed' remain untouched. No action needed here.

  // 7. Rule activeServicesOnlyListed:
  // Enforced on the listing/read path. When reactivating (status 'active'),
  // the status field itself drives the listing filter. No additional mutation needed.

  // 8. Save the updated Service inside a transaction
  await ctx.data.runInTransaction(async () => {
    await services.save(updatedService);
  });

  // 9. Return the projected output fields
  return {
    serviceId: updatedService.serviceId,
    name: updatedService.name,
    description: updatedService.description,
    estimatedDurationMinutes: updatedService.estimatedDurationMinutes,
    price: updatedService.price,
    status: updatedService.status,
    deactivatedAt: updatedService.deactivatedAt,
    updatedAt: updatedService.updatedAt,
  };
}
