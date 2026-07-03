/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEventRepositoryAdapter.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IOrderStatusEventRepository, DateRange } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.js';
import type { OrderStatusEvent, OrderStatusEventStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

interface OrderStatusEventRow {
  order_status_event_id: string;
  order_id: string;
  status: string;
  previous_status: string | null;
  created_at: string;
  details: string | null;
}

interface OrderStatusEventDetails {
  updatedAt: string;
}

function toRow(event: OrderStatusEvent): OrderStatusEventRow {
  const details: OrderStatusEventDetails = {
    updatedAt: event.updatedAt,
  };
  return {
    order_status_event_id: event.orderStatusEventId,
    order_id: event.orderId,
    status: event.status,
    previous_status: event.previousStatus,
    created_at: event.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OrderStatusEventRow): OrderStatusEventDetails {
  try {
    return JSON.parse(row.details ?? '{}') as OrderStatusEventDetails;
  } catch {
    return { updatedAt: row.created_at };
  }
}

function toDomain(row: OrderStatusEventRow): OrderStatusEvent {
  const d = parseDetails(row);
  return {
    orderStatusEventId: row.order_status_event_id,
    orderId: row.order_id,
    status: row.status as OrderStatusEventStatus,
    previousStatus: (row.previous_status ?? null) as OrderStatusEventStatus | null,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createOrderStatusEventRepositoryAdapter(ctx: RequestContext): IOrderStatusEventRepository {
  const getTable = () => ctx.data.moduleData.getTable<OrderStatusEventRow>('order_status_event');

  return {
    async append(event: OrderStatusEvent): Promise<void> {
      const repo = await getTable();
      await repo.insert({ record: toRow(event) });
    },

    async listByOwnerId(ownerId: string): Promise<OrderStatusEvent[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { order_id: ownerId },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async listByPeriod(period: DateRange): Promise<OrderStatusEvent[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows
        .filter((row) => row.created_at >= period.from && row.created_at <= period.to)
        .map(toDomain);
    },
  };
}
