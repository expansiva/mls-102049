/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/serviceRepository.ts" enhancement="_blank"/>
import type { Service, ServiceStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';

export type ServiceId = string;
export type ServiceType = string;

export interface ServiceFilter {
  serviceId?: ServiceId;
  status?: ServiceStatus;
  name?: string;
}

export interface IServiceRepository {
  getById(id: ServiceId): Promise<Service | null>;
  list(filter?: ServiceFilter): Promise<Service[]>;
  save(service: Service): Promise<void>;
  findByType(type: ServiceType): Promise<Service[]>;
  findActive(): Promise<Service[]>;
}
