/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IShiftRepository, ShiftFilter, ShiftId, EmployeeId, DateRange } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.js';
import type { Shift, ShiftStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shift.js';

interface ShiftRow {
  shift_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface ShiftDetails {
  openedAt: string;
  closedAt: string | null;
  updatedAt: string;
}

function toRow(shift: Shift): ShiftRow {
  const details: ShiftDetails = {
    openedAt: shift.openedAt,
    closedAt: shift.closedAt,
    updatedAt: shift.updatedAt,
  };
  return {
    shift_id: shift.shiftId,
    status: shift.status,
    created_at: shift.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: ShiftRow): ShiftDetails {
  try {
    return JSON.parse(row.details ?? '{}') as ShiftDetails;
  } catch {
    return { openedAt: row.created_at, closedAt: null, updatedAt: row.created_at };
  }
}

function toDomain(row: ShiftRow): Shift {
  const d = parseDetails(row);
  return {
    shiftId: row.shift_id,
    status: row.status as ShiftStatus,
    openedAt: d.openedAt,
    closedAt: d.closedAt,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createShiftRepositoryAdapter(ctx: RequestContext): IShiftRepository {
  const getTable = () => ctx.data.moduleData.getTable<ShiftRow>('shift');

  return {
    async getById(id: ShiftId): Promise<Shift> {
      const repo = await getTable();
      const row = await repo.findOne({ where: { shift_id: id } });
      if (!row) throw new AppError('NOT_FOUND', `Shift ${id} not found`, 404, { shiftId: id });
      return toDomain(row);
    },

    async list(filter?: ShiftFilter): Promise<Shift[]> {
      const repo = await getTable();
      const where: Partial<ShiftRow> = {};
      if (filter?.status) where.status = filter.status;
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      let shifts = rows.map(toDomain);
      // openedAt lives in the JSONB details column, so filter in memory.
      if (filter?.openedFrom) {
        shifts = shifts.filter((s) => s.openedAt >= filter.openedFrom!);
      }
      if (filter?.openedTo) {
        shifts = shifts.filter((s) => s.openedAt <= filter.openedTo!);
      }
      return shifts;
    },

    async save(shift: Shift): Promise<void> {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { shift_id: shift.shiftId } });
      if (existing) {
        await repo.update({ where: { shift_id: shift.shiftId }, patch: toRow(shift) });
      } else {
        await repo.insert({ record: toRow(shift) });
      }
    },

    async findByEmployeeId(_employeeId: EmployeeId): Promise<Shift[]> {
      // The Shift aggregate has no employee association; shifts are global operational periods.
      return [];
    },

    async findByPeriod(period: DateRange): Promise<Shift[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      const shifts = rows.map(toDomain);
      // openedAt is in the JSONB details column, so filter in memory.
      return shifts.filter((s) => s.openedAt >= period.from && s.openedAt <= period.to);
    },
  };
}
