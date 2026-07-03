/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEventRepositoryAdapter.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IStockMovementEventRepository, DateRange, StockLevelId } from '/_102049_/l1/cafeFlow/layer_2_application/ports/stockMovementEventRepository.js';
import type { StockMovementEvent, StockMovementType } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.js';

interface StockMovementEventRow {
  stock_movement_event_id: string;
  stock_item_id: string;
  movement_type: string;
  created_at: string;
  details: string | null;
}

interface StockMovementEventDetails {
  quantity: number;
  reason: string;
  updated_at: string;
}

function toRow(event: StockMovementEvent): StockMovementEventRow {
  const details: StockMovementEventDetails = {
    quantity: event.quantity,
    reason: event.reason,
    updated_at: event.updatedAt,
  };
  return {
    stock_movement_event_id: event.stockMovementEventId,
    stock_item_id: event.stockItemId,
    movement_type: event.movementType,
    created_at: event.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: StockMovementEventRow): StockMovementEventDetails {
  try {
    return JSON.parse(row.details ?? '{}') as StockMovementEventDetails;
  } catch {
    return { quantity: 0, reason: '', updated_at: row.created_at };
  }
}

function toDomain(row: StockMovementEventRow): StockMovementEvent {
  const d = parseDetails(row);
  return {
    stockMovementEventId: row.stock_movement_event_id,
    stockItemId: row.stock_item_id,
    movementType: row.movement_type as StockMovementType,
    quantity: d.quantity,
    reason: d.reason,
    createdAt: row.created_at,
    updatedAt: d.updated_at,
  };
}

export function createStockMovementEventRepositoryAdapter(ctx: RequestContext): IStockMovementEventRepository {
  const getTable = () => ctx.data.moduleData.getTable<StockMovementEventRow>('stock_movement_event');

  return {
    async append(event: StockMovementEvent): Promise<void> {
      const repo = await getTable();
      await repo.insert({ record: toRow(event) });
    },

    async listByPeriod(period: DateRange): Promise<StockMovementEvent[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows
        .filter((row) => row.created_at >= period.from && row.created_at <= period.to)
        .map(toDomain);
    },

    async listByStockLevelId(stockLevelId: StockLevelId): Promise<StockMovementEvent[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { stock_item_id: stockLevelId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
