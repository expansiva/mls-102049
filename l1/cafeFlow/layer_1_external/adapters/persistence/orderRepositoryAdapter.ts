/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IOrderRepository, OrderFilter, OrderId, CustomerId } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, OrderStatus, OrderType } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { MdmEntityIndexRecord } from '/_102034_/l1/mdm/module.js';

interface OrderRow {
  id: string;
  order_type: string;
  table_id: string | null;
  shift_id: string | null;
  status: string;
  created_at: string;
  details: string | null;
}

interface OrderDetails {
  total: number;
  updatedAt: string;
  customerId?: string;
}

function toRow(order: Order): OrderRow {
  const details: OrderDetails = {
    total: order.total,
    updatedAt: order.updatedAt,
  };
  return {
    id: order.id,
    order_type: order.orderType,
    table_id: order.tableId,
    shift_id: order.shiftId,
    status: order.status,
    created_at: order.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OrderRow): OrderDetails {
  try {
    return JSON.parse(row.details ?? '{}') as OrderDetails;
  } catch {
    return { total: 0, updatedAt: row.created_at };
  }
}

function toDomain(row: OrderRow): Order {
  const d = parseDetails(row);
  return {
    id: row.id,
    orderType: row.order_type as OrderType,
    tableId: row.table_id,
    shiftId: row.shift_id ?? '',
    status: row.status as OrderStatus,
    total: d.total,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createOrderRepositoryAdapter(ctx: RequestContext): IOrderRepository {
  const getTable = () => ctx.data.moduleData.getTable<OrderRow>('order');

  /**
   * Resolve a Table entity from the 102034 MDM runtime by its mdmId.
   * Tables are master data managed in the shared platform (no local table).
   */
  async function resolveTableMdm(tableMdmId: string): Promise<MdmEntityIndexRecord | null> {
    return ctx.data.mdmEntityIndex.findOne({
      where: { mdmId: tableMdmId, subtype: 'AssetGeneric' } as Partial<MdmEntityIndexRecord>,
    });
  }

  return {
    async getById(id: OrderId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { id } });
      if (!row) throw new AppError('NOT_FOUND', `Order ${id} not found`, 404, { id });
      return toDomain(row);
    },

    async list(filter?: OrderFilter) {
      const repo = await getTable();

      // customerId lives in details JSONB — fetch all and filter in memory when present
      if (filter?.customerId) {
        const rows = await repo.findMany({ orderBy: { field: 'created_at', direction: 'desc' } });
        return rows
          .filter(row => parseDetails(row).customerId === filter.customerId)
          .filter(row => {
            if (filter.shiftId && row.shift_id !== filter.shiftId) return false;
            if (filter.status && row.status !== filter.status) return false;
            if (filter.tableId !== undefined && row.table_id !== (filter.tableId ?? null)) return false;
            if (filter.orderType && row.order_type !== filter.orderType) return false;
            return true;
          })
          .map(toDomain);
      }

      const where: Partial<OrderRow> = {};
      if (filter?.shiftId) where.shift_id = filter.shiftId;
      if (filter?.status) where.status = filter.status;
      if (filter?.tableId !== undefined) where.table_id = filter.tableId ?? null;
      if (filter?.orderType) where.order_type = filter.orderType;
      const rows = await repo.findMany({ where, orderBy: { field: 'created_at', direction: 'desc' } });
      return rows.map(toDomain);
    },

    async save(order: Order) {
      // Validate table reference via MDM when present (Table is master data in 102034)
      if (order.tableId) {
        const tableRecord = await resolveTableMdm(order.tableId);
        if (!tableRecord) {
          throw new AppError('VALIDATION_ERROR', `Table ${order.tableId} not found in MDM`, 400, { tableId: order.tableId });
        }
      }

      const repo = await getTable();
      const existing = await repo.findOne({ where: { id: order.id } });
      if (existing) {
        await repo.update({ where: { id: order.id }, patch: toRow(order) });
      } else {
        await repo.insert({ record: toRow(order) });
      }
    },

    async findByCustomerId(customerId: CustomerId) {
      const repo = await getTable();
      const rows = await repo.findMany({ orderBy: { field: 'created_at', direction: 'desc' } });
      return rows
        .filter(row => parseDetails(row).customerId === customerId)
        .map(toDomain);
    },

    async findByStatus(status: OrderStatus) {
      const repo = await getTable();
      const rows = await repo.findMany({ where: { status }, orderBy: { field: 'created_at', direction: 'desc' } });
      return rows.map(toDomain);
    },
  };
}
