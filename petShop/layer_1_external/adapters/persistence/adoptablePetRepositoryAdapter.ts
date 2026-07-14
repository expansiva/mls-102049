/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePetRepositoryAdapter.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IAdoptablePetRepository,
  AdoptablePetFilter,
  Species,
} from '/_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.js';
import type {
  AdoptablePet,
  AdoptablePetStatus,
} from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';

interface AdoptablePetRow {
  adoptable_pet_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface AdoptablePetDetails {
  name: string;
  age: number;
  description: string;
  photo_url: string;
  species: string;
  updated_at: string;
}

function toRow(pet: AdoptablePet): AdoptablePetRow {
  const details: AdoptablePetDetails = {
    name: pet.name,
    age: pet.age,
    description: pet.description,
    photo_url: pet.photoUrl,
    species: '',
    updated_at: pet.updatedAt,
  };
  return {
    adoptable_pet_id: pet.adoptablePetId,
    status: pet.status,
    created_at: pet.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: AdoptablePetRow): AdoptablePetDetails {
  try {
    const parsed = JSON.parse(row.details ?? '{}') as Partial<AdoptablePetDetails>;
    return {
      name: parsed.name ?? '',
      age: parsed.age ?? 0,
      description: parsed.description ?? '',
      photo_url: parsed.photo_url ?? '',
      species: parsed.species ?? '',
      updated_at: parsed.updated_at ?? row.created_at,
    };
  } catch {
    return {
      name: '',
      age: 0,
      description: '',
      photo_url: '',
      species: '',
      updated_at: row.created_at,
    };
  }
}

function toDomain(row: AdoptablePetRow): AdoptablePet {
  const d = parseDetails(row);
  return {
    adoptablePetId: row.adoptable_pet_id,
    name: d.name,
    age: d.age,
    description: d.description,
    photoUrl: d.photo_url,
    status: row.status as AdoptablePetStatus,
    createdAt: row.created_at,
    updatedAt: d.updated_at,
  };
}

export function createAdoptablePetRepositoryAdapter(
  ctx: RequestContext,
): IAdoptablePetRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<AdoptablePetRow>('adoptable_pet');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { adoptable_pet_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter?: AdoptablePetFilter) {
      const repo = await getTable();
      const where: Partial<AdoptablePetRow> = {};
      if (filter?.status) {
        where.status = filter.status;
      }
      let rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      if (filter?.species) {
        rows = rows.filter(
          (r) => parseDetails(r).species === (filter.species as Species),
        );
      }
      return rows.map(toDomain);
    },

    async save(pet: AdoptablePet) {
      const repo = await getTable();
      const existing = await repo.findOne({
        where: { adoptable_pet_id: pet.adoptablePetId },
      });
      if (existing) {
        await repo.update({
          where: { adoptable_pet_id: pet.adoptablePetId },
          patch: toRow(pet),
        });
      } else {
        await repo.insert({ record: toRow(pet) });
      }
    },

    async findAvailable() {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status: 'available' },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findBySpecies(species: Species) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows
        .filter((r) => parseDetails(r).species === species)
        .map(toDomain);
    },
  };
}
