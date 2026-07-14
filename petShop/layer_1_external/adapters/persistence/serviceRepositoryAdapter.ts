/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IServiceRepository, ServiceFilter } from '/_102049_/l1/petShop/layer_2_application/ports/serviceRepository.js';
import type { Service, ServiceStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/service.js';

interface ServiceRow {
  service_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface ServiceDetails {
  name: string;
  description: string;
  estimated_duration_minutes: number;
  price: number;
  deactivated_at: string | null;
  updated_at: string;
}

function toRow(service: Service): ServiceRow {
  const details: ServiceDetails = {
    name: service.name,
    description: service.description,
    estimated_duration_minutes: service.estimatedDurationMinutes,
    price: service.price,
    deactivated_at: service.deactivatedAt,
    updated_at: service.updatedAt,
  };
  return {
    service_id: service.serviceId,
    status: service.status,
    created_at: service.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: ServiceRow): ServiceDetails {
  try {
    return JSON.parse(row.details ?? '{}') as ServiceDetails;
  } catch {
    return {
      name: '',
      description: '',
      estimated_duration_minutes: 0,
      price: 0,
      deactivated_at: null,
      updated_at: row.created_at,
    };
  }
}

function toDomain(row: ServiceRow): Service {
  const d = parseDetails(row);
  return {
    serviceId: row.service_id,
    name: d.name,
    description: d.description,
    estimatedDurationMinutes: d.estimated_duration_minutes,
    price: d.price,
    status: row.status as ServiceStatus,
    deactivatedAt: d.deactivated_at,
    createdAt: row.created_at,
    updatedAt: d.updated_at,
  };
}

export function createServiceRepositoryAdapter(ctx: RequestContext): IServiceRepository {
  const getTable = () => ctx.data.moduleData.getTable<ServiceRow>('service');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { service_id: id } });
      if (!row) throw new AppError('NOT_FOUND', `Service ${id} not found`, 404, { serviceId: id });
      return toDomain(row);
    },

    async list(filter?: ServiceFilter) {
      const repo = await getTable();
      const where: Partial<ServiceRow> = {};
      if (filter?.serviceId) where.service_id = filter.serviceId;
      if (filter?.status) where.status = filter.status;
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      let services = rows.map(toDomain);
      if (filter?.name) {
        const lower = filter.name.toLowerCase();
        services = services.filter((s) => s.name.toLowerCase().includes(lower));
      }
      return services;
    },

    async save(service) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { service_id: service.serviceId } });
      if (existing) {
        await repo.update({ where: { service_id: service.serviceId }, patch: toRow(service) });
      } else {
        await repo.insert({ record: toRow(service) });
      }
    },

    async findByType(type) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const lower = type.toLowerCase();
      return rows
        .map(toDomain)
        .filter((s) => s.name.toLowerCase().includes(lower));
    },

    async findActive() {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status: 'active' },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
