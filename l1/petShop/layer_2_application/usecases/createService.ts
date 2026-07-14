/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createService.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IServiceRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceRepository.js';
import type { Service } from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';
import {
  serviceHasPositiveDuration,
  serviceHasNonNegativePrice,
  validateServiceInvariants,
} from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';

export interface CreateServiceInput {
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
}

export interface CreateServiceOutput {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: string;
  createdAt: string;
}

export async function createService(
  ctx: RequestContext,
  input: CreateServiceInput,
): Promise<CreateServiceOutput> {
  // 1. Validate inputs
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'name must be a non-empty string.',
      400,
      { ruleId: 'activeServicesOnlyListed', field: 'name' },
    );
  }
  if (!input.description || input.description.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'description must be a non-empty string.',
      400,
      { ruleId: 'activeServicesOnlyListed', field: 'description' },
    );
  }
  if (!Number.isInteger(input.estimatedDurationMinutes) || !serviceHasPositiveDuration({ estimatedDurationMinutes: input.estimatedDurationMinutes })) {
    throw new AppError(
      'VALIDATION_ERROR',
      'estimatedDurationMinutes must be a positive integer.',
      400,
      { ruleId: 'activeServicesOnlyListed', field: 'estimatedDurationMinutes' },
    );
  }
  if (typeof input.price !== 'number' || !serviceHasNonNegativePrice({ price: input.price })) {
    throw new AppError(
      'VALIDATION_ERROR',
      'price must be a non-negative number.',
      400,
      { ruleId: 'activeServicesOnlyListed', field: 'price' },
    );
  }

  const now = ctx.clock.nowIso();

  // 2-5. Build the Service aggregate
  const service: Service = {
    serviceId: ctx.idGenerator.newId(),
    name: input.name,
    description: input.description,
    estimatedDurationMinutes: input.estimatedDurationMinutes,
    price: input.price,
    status: 'active',
    deactivatedAt: null,
    createdAt: now,
    updatedAt: now,
  };

  // Validate domain invariants
  const violations = validateServiceInvariants(service);
  if (violations.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Service invariant violations: ${violations.join('; ')}`,
      400,
      { ruleId: 'activeServicesOnlyListed', violations },
    );
  }

  // 6. Persist inside a single transaction
  await ctx.data.runInTransaction(async () => {
    const services = resolveRepository<IServiceRepository>(ctx, 'Service');
    await services.save(service);
  });

  // 7. Return the created service projection
  return {
    serviceId: service.serviceId,
    name: service.name,
    description: service.description,
    estimatedDurationMinutes: service.estimatedDurationMinutes,
    price: service.price,
    status: service.status,
    createdAt: service.createdAt,
  };
}
