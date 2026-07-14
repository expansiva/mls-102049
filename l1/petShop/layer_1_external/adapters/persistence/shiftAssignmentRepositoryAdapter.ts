/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignmentRepositoryAdapter.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IShiftAssignmentRepository, ShiftAssignmentFilter } from '/_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.js';
import type { ShiftAssignment } from '/_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.js';

interface ShiftAssignmentRow {
  shift_assignment_id: string;
  operator_id: string;
  shift_id: string;
  created_at: string;
  details: string | null;
}

interface ShiftAssignmentDetails {
  updatedAt: string;
}

function toRow(assignment: ShiftAssignment): ShiftAssignmentRow {
  const details: ShiftAssignmentDetails = {
    updatedAt: assignment.updatedAt,
  };
  return {
    shift_assignment_id: assignment.shiftAssignmentId,
    operator_id: assignment.operatorId,
    shift_id: assignment.shiftId,
    created_at: assignment.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: ShiftAssignmentRow): ShiftAssignmentDetails {
  try {
    return JSON.parse(row.details ?? '{}') as ShiftAssignmentDetails;
  } catch {
    return { updatedAt: row.created_at };
  }
}

function toDomain(row: ShiftAssignmentRow): ShiftAssignment {
  const d = parseDetails(row);
  return {
    shiftAssignmentId: row.shift_assignment_id,
    operatorId: row.operator_id,
    shiftId: row.shift_id,
    createdAt: row.created_at,
    updatedAt: d.updatedAt ?? row.created_at,
  };
}

/**
 * Bulk-loads Shift MDM entities for the given shift ids and returns a map of
 * shiftId → shift date (ISO local date string). Uses getMany (no loop calls).
 */
async function resolveShiftDates(
  ctx: RequestContext,
  shiftIds: string[],
): Promise<Map<string, string>> {
  const uniqueIds = [...new Set(shiftIds)];
  if (uniqueIds.length === 0) {
    return new Map();
  }
  const shifts = await ctx.mdm.collection.getMany({ mdmIds: uniqueIds });
  const dateMap = new Map<string, string>();
  for (const shift of shifts) {
    const details = shift.details as unknown as Record<string, unknown>;
    const shiftDate = details.date as string | undefined;
    if (shiftDate) {
      dateMap.set(shift.mdmId, shiftDate);
    }
  }
  return dateMap;
}

export function createShiftAssignmentRepositoryAdapter(
  ctx: RequestContext,
): IShiftAssignmentRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<ShiftAssignmentRow>('shift_assignment');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { shift_assignment_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter?: ShiftAssignmentFilter) {
      const where: Partial<ShiftAssignmentRow> = {};
      if (filter?.operatorId) where.operator_id = filter.operatorId;
      if (filter?.shiftId) where.shift_id = filter.shiftId;

      let rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });

      if (filter?.date) {
        const shiftDateMap = await resolveShiftDates(
          ctx,
          rows.map((r) => r.shift_id),
        );
        rows = rows.filter((r) => shiftDateMap.get(r.shift_id) === filter.date);
      }

      return rows.map(toDomain);
    },

    async save(assignment) {
      const repo = await getTable();
      const existing = await repo.findOne({
        where: { shift_assignment_id: assignment.shiftAssignmentId },
      });
      if (existing) {
        await repo.update({
          where: { shift_assignment_id: assignment.shiftAssignmentId },
          patch: toRow(assignment),
        });
      } else {
        await repo.insert({ record: toRow(assignment) });
      }
    },

    async findByOperatorId(operatorId) {
      const rows = await (await getTable()).findMany({
        where: { operator_id: operatorId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findByDate(date) {
      const rows = await (await getTable()).findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      if (rows.length === 0) return [];

      const shiftDateMap = await resolveShiftDates(
        ctx,
        rows.map((r) => r.shift_id),
      );
      return rows
        .filter((r) => shiftDateMap.get(r.shift_id) === date)
        .map(toDomain);
    },
  };
}
