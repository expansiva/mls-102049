/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseServiceCatalog.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IServiceRepository } from '/_102049_/l1/petShop/layer_2_application/ports/serviceRepository';
import type { Service } from '/_102049_/l1/petShop/layer_3_domain/entities/service';

export interface BrowseServiceCatalogInput {
  page?: number;
  pageSize?: number;
}

export interface BrowseServiceCatalogItem {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
}

export interface BrowseServiceCatalogOutput {
  items: BrowseServiceCatalogItem[];
  page: number;
  pageSize: number;
  total: number;
}

export async function browseServiceCatalog(
  ctx: RequestContext,
  input: BrowseServiceCatalogInput,
): Promise<BrowseServiceCatalogOutput> {
  const services = resolveRepository<IServiceRepository>(ctx, 'Service');

  // Rule activeServicesOnlyListed: only active services are listed
  const activeServices = await services.findActive();

  const page = Math.max(1, input.page ?? 1);
  const pageSize = Math.max(1, input.pageSize ?? (activeServices.length || 1));
  const offset = (page - 1) * pageSize;
  const paged = activeServices.slice(offset, offset + pageSize);

  const items: BrowseServiceCatalogItem[] = paged.map((service: Service) => ({
    serviceId: service.serviceId,
    name: service.name,
    description: service.description,
    estimatedDurationMinutes: service.estimatedDurationMinutes,
    price: service.price,
  }));

  return {
    items,
    page,
    pageSize,
    total: activeServices.length,
  };
}
