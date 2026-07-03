/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEventRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IShiftStatusEventRepository, DateRange } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.js';
import type { ShiftStatusEvent, ShiftStatusEventType } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.js';

interface ShiftStatusEventRow {
  shift_status_event_id: string;
  shift_id: string;
  event_type: string;
  created_at: string;
  details: string | null;
}

interface ShiftStatusEventDetails {
  consolidatedTotal: number;
  recordedAt: string;
  updatedAt: string;
}

function toRow(event: ShiftStatusEvent): ShiftStatusEventRow {
  const details: ShiftStatusEventDetails = {
    consolidatedTotal: event.consolidatedTotal,
    recordedAt: event.recordedAt,
    updatedAt: event.updatedAt,
  };
  return {
    shift_status_event_id: event.shiftStatusEventId,
    shift_id: event.shiftId,
    event_type: event.eventType,
    created_at: event.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: ShiftStatusEventRow): ShiftStatusEventDetails {
  try {
    return JSON.parse(row.details ?? '{}') as ShiftStatusEventDetails;
  } catch {
    return {
      consolidatedTotal: 0,
      recordedAt: row.created_at,
      updatedAt: row.created_at,
    };
  }
}

function toDomain(row: ShiftStatusEventRow): ShiftStatusEvent {
  const d = parseDetails(row);
  return {
    shiftStatusEventId: row.shift_status_event_id,
    shiftId: row.shift_id,
    eventType: row.event_type as ShiftStatusEventType,
    consolidatedTotal: d.consolidatedTotal,
    recordedAt: d.recordedAt,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createShiftStatusEventRepositoryAdapter(ctx: RequestContext): IShiftStatusEventRepository {
  const getTable = () => ctx.data.moduleData.getTable<ShiftStatusEventRow>('shift_status_event');

  return {
    async append(event: ShiftStatusEvent): Promise<void> {
      const repo = await getTable();
      await repo.insert({ record: toRow(event) });
    },

    async listByOwnerId(ownerId: string): Promise<ShiftStatusEvent[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { shift_id: ownerId },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async listByPeriod(period: DateRange): Promise<ShiftStatusEvent[]> {
      const repo = await getTable();
      const allRows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return allRows
        .filter((row) => row.created_at >= period.from && row.created_at <= period.to)
        .map(toDomain);
    },
  };
}
