/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/orderRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IOrderRepository, OrderFilter } from '/_102049_/l1/petShop/layer_2_application/ports/orderRepository.js';
import type { Order, OrderItem, OrderStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/order.js';

interface OrderRow {
  order_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface OrderDetails {
  customerId: string;
  customerName: string;
  customerPhone: string | null;
  updatedAt: string;
  completedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  items: OrderItem[];
}

function toRow(order: Order): OrderRow {
  const customerId = (order as unknown as { customerId?: string }).customerId ?? '';
  const details: OrderDetails = {
    customerId,
    customerName: order.customerName,
    customerPhone: order.customerPhone,
    updatedAt: order.updatedAt,
    completedAt: order.completedAt,
    cancelledAt: order.cancelledAt,
    cancellationReason: order.cancellationReason,
    items: order.items,
  };
  return {
    order_id: order.orderId,
    status: order.status,
    created_at: order.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OrderRow): OrderDetails {
  try {
    return JSON.parse(row.details ?? '{}') as OrderDetails;
  } catch {
    return {
      customerId: '',
      customerName: '',
      customerPhone: null,
      updatedAt: row.created_at,
      completedAt: null,
      cancelledAt: null,
      cancellationReason: null,
      items: [],
    };
  }
}

function toDomain(row: OrderRow): Order {
  const d = parseDetails(row);
  return {
    orderId: row.order_id,
    status: row.status as OrderStatus,
    customerName: d.customerName,
    customerPhone: d.customerPhone,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
    completedAt: d.completedAt,
    cancelledAt: d.cancelledAt,
    cancellationReason: d.cancellationReason,
    items: d.items ?? [],
  };
}

export function createOrderRepositoryAdapter(ctx: RequestContext): IOrderRepository {
  const getTable = () => ctx.data.moduleData.getTable<OrderRow>('order');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { order_id: id } });
      if (!row) throw new AppError('NOT_FOUND', `Order ${id} not found`, 404, { orderId: id });
      return toDomain(row);
    },

    async list(filter?: OrderFilter) {
      const repo = await getTable();
      const where: Partial<OrderRow> = {};
      if (filter?.status) where.status = filter.status;

      if (filter?.customerId) {
        const rows = await repo.findMany({ where, orderBy: { field: 'created_at', direction: 'desc' } });
        return rows
          .map(toDomain)
          .filter((order) => {
            const d = parseDetails(rows.find((r) => r.order_id === order.orderId)!);
            return d.customerId === filter.customerId;
          });
      }

      const rows = await repo.findMany({ where, orderBy: { field: 'created_at', direction: 'desc' } });
      return rows.map(toDomain);
    },

    async save(order) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { order_id: order.orderId } });
      if (existing) {
        await repo.update({ where: { order_id: order.orderId }, patch: toRow(order) });
      } else {
        await repo.insert({ record: toRow(order) });
      }
    },

    async findByCustomerId(customerId) {
      const repo = await getTable();
      const rows = await repo.findMany({ orderBy: { field: 'created_at', direction: 'desc' } });
      return rows
        .filter((row) => parseDetails(row).customerId === customerId)
        .map(toDomain);
    },

    async findByStatus(status) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
