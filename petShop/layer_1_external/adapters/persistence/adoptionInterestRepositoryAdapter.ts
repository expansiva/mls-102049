/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterestRepositoryAdapter.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IAdoptionInterestRepository,
  AdoptionInterestFilter,
} from '/_102049_/l1/petShop/layer_2_application/ports/adoptionInterestRepository.js';
import type {
  AdoptionInterest,
  AdoptionInterestStatus,
} from '/_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.js';

interface AdoptionInterestRow {
  adoption_interest_id: string;
  adoptable_pet_id: string;
  status: string;
  operator_id: string | null;
  created_at: string;
  details: string | null;
}

interface AdoptionInterestDetails {
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  verification_notes: string | null;
  completed_at: string | null;
  cancelled_at: string | null;
  cancellation_reason: string | null;
  updated_at: string;
}

function toRow(interest: AdoptionInterest): AdoptionInterestRow {
  const details: AdoptionInterestDetails = {
    customer_name: interest.customerName,
    customer_email: interest.customerEmail,
    customer_phone: interest.customerPhone,
    verification_notes: interest.verificationNotes,
    completed_at: interest.completedAt,
    cancelled_at: interest.cancelledAt,
    cancellation_reason: interest.cancellationReason,
    updated_at: interest.updatedAt,
  };
  return {
    adoption_interest_id: interest.adoptionInterestId,
    adoptable_pet_id: interest.adoptablePetId,
    status: interest.status,
    operator_id: interest.operatorId,
    created_at: interest.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: AdoptionInterestRow): AdoptionInterestDetails {
  try {
    return JSON.parse(row.details ?? '{}') as AdoptionInterestDetails;
  } catch {
    return {
      customer_name: '',
      customer_email: '',
      customer_phone: null,
      verification_notes: null,
      completed_at: null,
      cancelled_at: null,
      cancellation_reason: null,
      updated_at: row.created_at,
    };
  }
}

function toDomain(row: AdoptionInterestRow): AdoptionInterest {
  const d = parseDetails(row);
  return {
    adoptionInterestId: row.adoption_interest_id,
    adoptablePetId: row.adoptable_pet_id,
    customerName: d.customer_name,
    customerEmail: d.customer_email,
    customerPhone: d.customer_phone ?? null,
    status: row.status as AdoptionInterestStatus,
    operatorId: row.operator_id,
    verificationNotes: d.verification_notes ?? null,
    completedAt: d.completed_at ?? null,
    cancelledAt: d.cancelled_at ?? null,
    cancellationReason: d.cancellation_reason ?? null,
    createdAt: row.created_at,
    updatedAt: d.updated_at ?? row.created_at,
  };
}

export function createAdoptionInterestRepositoryAdapter(
  ctx: RequestContext,
): IAdoptionInterestRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<AdoptionInterestRow>('adoption_interest');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { adoption_interest_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter?: AdoptionInterestFilter) {
      const repo = await getTable();
      const where: Partial<AdoptionInterestRow> = {};
      if (filter?.status) where.status = filter.status;
      if (filter?.adoptablePetId) where.adoptable_pet_id = filter.adoptablePetId;

      let rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });

      if (filter?.customerEmail) {
        rows = rows.filter(
          (row) => parseDetails(row).customer_email === filter.customerEmail,
        );
      }

      return rows.map(toDomain);
    },

    async save(interest) {
      const repo = await getTable();
      const existing = await repo.findOne({
        where: { adoption_interest_id: interest.adoptionInterestId },
      });
      if (existing) {
        await repo.update({
          where: { adoption_interest_id: interest.adoptionInterestId },
          patch: toRow(interest),
        });
      } else {
        await repo.insert({ record: toRow(interest) });
      }
    },

    async findByAdopterId(adopterId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows
        .filter((row) => parseDetails(row).customer_email === adopterId)
        .map(toDomain);
    },

    async findByPetId(petId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { adoptable_pet_id: petId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
