/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/service.ts" enhancement="_blank"/>
export type ServiceStatus = 'active' | 'inactive';

export interface Service {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: ServiceStatus;
  deactivatedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export const SERVICE_STATUS_VALUES: ServiceStatus[] = ['active', 'inactive'];

export function isValidServiceStatus(value: string): value is ServiceStatus {
  return SERVICE_STATUS_VALUES.includes(value as ServiceStatus);
}

export function serviceHasPositiveDuration(service: Pick<Service, 'estimatedDurationMinutes'>): boolean {
  return service.estimatedDurationMinutes > 0;
}

export function serviceHasNonNegativePrice(service: Pick<Service, 'price'>): boolean {
  return service.price >= 0;
}

export function isServiceActive(service: Pick<Service, 'status'>): boolean {
  return service.status === 'active';
}

export function isServiceInactive(service: Pick<Service, 'status'>): boolean {
  return service.status === 'inactive';
}

export function serviceStatusInvariantConsistent(
  service: Pick<Service, 'status' | 'deactivatedAt'>,
): boolean {
  if (service.status === 'inactive') {
    return service.deactivatedAt !== null;
  }
  if (service.status === 'active') {
    return service.deactivatedAt === null;
  }
  return false;
}

export function serviceUpdatedAtIsValid(
  service: Pick<Service, 'createdAt' | 'updatedAt'>,
): boolean {
  return service.updatedAt >= service.createdAt;
}

export function validateServiceInvariants(service: Service): string[] {
  const violations: string[] = [];

  if (!isValidServiceStatus(service.status)) {
    violations.push("status must be 'active' or 'inactive'");
  }

  if (!serviceHasPositiveDuration(service)) {
    violations.push('estimatedDurationMinutes must be a positive number');
  }

  if (!serviceHasNonNegativePrice(service)) {
    violations.push('price must be a non-negative monetary value');
  }

  if (!serviceStatusInvariantConsistent(service)) {
    if (service.status === 'inactive') {
      violations.push('when status is inactive, deactivatedAt must be set');
    }
    if (service.status === 'active') {
      violations.push('when status is active, deactivatedAt must be null');
    }
  }

  if (!serviceUpdatedAtIsValid(service)) {
    violations.push('updatedAt must be greater than or equal to createdAt');
  }

  return violations;
}
