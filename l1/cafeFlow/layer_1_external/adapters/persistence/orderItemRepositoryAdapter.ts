/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItemRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IOrderItemRepository, OrderItemFilter } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.js';
import type { OrderItem, OrderItemStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';
import type { MdmEntityIndexRecord } from '/_102034_/l1/mdm/module.js';

interface OrderItemRow {
  order_item_id: string;
  order_id: string;
  menu_item_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface OrderItemDetails {
  quantity: number;
  unitPrice: number;
  itemTotal: number;
  substitutionsApplied: string | null;
  updatedAt: string;
}

function toRow(item: OrderItem): OrderItemRow {
  const details: OrderItemDetails = {
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    itemTotal: item.itemTotal,
    substitutionsApplied: item.substitutionsApplied,
    updatedAt: item.updatedAt,
  };
  return {
    order_item_id: item.orderItemId,
    order_id: item.orderId,
    menu_item_id: item.menuItemId,
    status: item.status,
    created_at: item.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OrderItemRow): OrderItemDetails {
  try {
    return JSON.parse(row.details ?? '{}') as OrderItemDetails;
  } catch {
    return {
      quantity: 0,
      unitPrice: 0,
      itemTotal: 0,
      substitutionsApplied: null,
      updatedAt: row.created_at,
    };
  }
}

function toDomain(row: OrderItemRow): OrderItem {
  const d = parseDetails(row);
  return {
    orderItemId: row.order_item_id,
    orderId: row.order_id,
    menuItemId: row.menu_item_id,
    quantity: d.quantity,
    unitPrice: d.unitPrice,
    itemTotal: d.itemTotal,
    substitutionsApplied: d.substitutionsApplied ?? null,
    status: row.status as OrderItemStatus,
    createdAt: row.created_at,
    updatedAt: d.updatedAt ?? row.created_at,
  };
}

export function createOrderItemRepositoryAdapter(ctx: RequestContext): IOrderItemRepository {
  const getTable = () => ctx.data.moduleData.getTable<OrderItemRow>('order_item');

  /**
   * Resolve a MenuItem from the 102034 MDM runtime by its mdmId.
   * MenuItem records are indexed in mdmEntityIndex with subtype 'MenuItem'.
   */
  async function resolveMenuItem(menuItemId: string): Promise<MdmEntityIndexRecord | null> {
    const row = await ctx.data.mdmEntityIndex.findOne({
      where: { mdmId: menuItemId } as Partial<MdmEntityIndexRecord>,
    });
    return row;
  }

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { order_item_id: id } });
      if (!row) {
        throw new AppError('NOT_FOUND', `OrderItem ${id} not found`, 404, { orderItemId: id });
      }
      return toDomain(row);
    },

    async list(filter?: OrderItemFilter) {
      const repo = await getTable();
      const where: Partial<OrderItemRow> = {};
      if (filter?.orderId) where.order_id = filter.orderId;
      if (filter?.menuItemId) where.menu_item_id = filter.menuItemId;
      if (filter?.status) where.status = filter.status;
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async save(orderItem) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { order_item_id: orderItem.orderItemId } });
      if (existing) {
        await repo.update({
          where: { order_item_id: orderItem.orderItemId },
          patch: toRow(orderItem),
        });
      } else {
        await repo.insert({ record: toRow(orderItem) });
      }
    },

    async findByOrderId(orderId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { order_id: orderId },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },
  };
}
