/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseServices.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IServiceRepository, ServiceFilter } from '/_102049_/l1/petShop/layer_2_application/ports/serviceRepository.js';
import type { Service, ServiceStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';
import { isValidServiceStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';

export interface BrowseServicesInput { 
  status?: string;
}

export interface BrowseServicesItem {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: string;
  deactivatedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BrowseServicesOutput {
  services: BrowseServicesItem[];
}

export async function browseServices(
  ctx: RequestContext,
  input: BrowseServicesInput,
): Promise<BrowseServicesOutput> {
  const services = resolveRepository<IServiceRepository>(ctx, 'Service');

  const filter: ServiceFilter = {};

  if (input.status !== undefined && input.status !== null && input.status !== '') {
    if (!isValidServiceStatus(input.status)) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Invalid status filter: "${input.status}". Must be "active" or "inactive".`,
        400,
        { field: 'status', value: input.status },
      );
    }
    filter.status = input.status as ServiceStatus;
  }

  const allServices: Service[] = await services.list(filter);

  const projected: BrowseServicesItem[] = allServices.map((svc) => ({
    serviceId: svc.serviceId,
    name: svc.name,
    description: svc.description,
    estimatedDurationMinutes: svc.estimatedDurationMinutes,
    price: svc.price,
    status: svc.status,
    deactivatedAt: svc.deactivatedAt,
    createdAt: svc.createdAt,
    updatedAt: svc.updatedAt,
  }));

  return { services: projected };
}
