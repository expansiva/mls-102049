/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/operatorRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IOperatorRepository, OperatorFilter } from '/_102049_/l1/petShop/layer_2_application/ports/operatorRepository.js';
import type { Operator } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';

interface OperatorRow {
  operator_id: string;
  created_at: string;
  details: string | null;
}

interface OperatorDetails {
  name: string;
  email: string | null;
  phone: string | null;
  active: boolean;
  updated_at: string;
}

function toRow(operator: Operator): OperatorRow {
  const details: OperatorDetails = {
    name: operator.name,
    email: operator.email,
    phone: operator.phone,
    active: operator.active,
    updated_at: operator.updatedAt,
  };
  return {
    operator_id: operator.operatorId,
    created_at: operator.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OperatorRow): OperatorDetails {
  try {
    return JSON.parse(row.details ?? '{}') as OperatorDetails;
  } catch {
    return {
      name: '',
      email: null,
      phone: null,
      active: true,
      updated_at: row.created_at,
    };
  }
}

function toDomain(row: OperatorRow): Operator {
  const d = parseDetails(row);
  return {
    operatorId: row.operator_id,
    name: d.name,
    email: d.email ?? null,
    phone: d.phone ?? null,
    active: d.active,
    createdAt: row.created_at,
    updatedAt: d.updated_at ?? row.created_at,
  };
}

export function createOperatorRepositoryAdapter(ctx: RequestContext): IOperatorRepository {
  const getTable = () => ctx.data.moduleData.getTable<OperatorRow>('operator');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { operator_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter?: OperatorFilter) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      let operators = rows.map(toDomain);
      if (filter?.active !== undefined) {
        operators = operators.filter((op) => op.active === filter.active);
      }
      if (filter?.name) {
        const q = filter.name.toLowerCase();
        operators = operators.filter((op) => op.name.toLowerCase().includes(q));
      }
      return operators;
    },

    async save(operator) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { operator_id: operator.operatorId } });
      if (existing) {
        await repo.update({ where: { operator_id: operator.operatorId }, patch: toRow(operator) });
      } else {
        await repo.insert({ record: toRow(operator) });
      }
    },

    async findByEmail(email) {
      const repo = await getTable();
      const rows = await repo.findMany();
      const match = rows.find((row) => {
        const d = parseDetails(row);
        return d.email !== null && d.email.toLowerCase() === email.toLowerCase();
      });
      return match ? toDomain(match) : null;
    },

    async findActive() {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows
        .map(toDomain)
        .filter((op) => op.active);
    },
  };
}
