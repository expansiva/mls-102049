/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryDashboard.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IShiftRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.js';
import type { IOrderRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IOrderItemRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.js';
import type { IStockLevelRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.js';
import type { Shift } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shift.js';
import type { Order, OrderStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { StockLevel } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

export interface QueryDashboardInput {
  shiftId: string;
}

export interface ShiftDashboardAggregation {
  shiftId: string;
  shiftStatus: string;
  openedAt: string;
  closedAt: string;
  totalOrders: number;
  totalRevenue: number;
  pendingOrdersCount: number;
  preparingOrdersCount: number;
  readyOrdersCount: number;
  deliveredOrdersCount: number;
  cancelledOrdersCount: number;
  lowStockCount: number;
}

export async function queryDashboard(
  ctx: RequestContext,
  input: QueryDashboardInput,
): Promise<ShiftDashboardAggregation> {
  const shifts = resolveRepository<IShiftRepository>(ctx, 'Shift');
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const orderItems = resolveRepository<IOrderItemRepository>(ctx, 'OrderItem');
  const stockLevels = resolveRepository<IStockLevelRepository>(ctx, 'StockLevel');

  // Step 2: Load the shift by shiftId; validate it exists (getById throws NOT_FOUND)
  const shift = await shifts.getById(input.shiftId);

  // Step 3: Validate orderRequiresOpenShift — shift must be 'open' for real-time dashboard
  if (shift.status !== 'open') {
    throw new AppError(
      'VALIDATION_ERROR',
      'orderRequiresOpenShift: o turno deve estar aberto para exibir dados em tempo real no dashboard.',
      400,
      { ruleId: 'orderRequiresOpenShift', shiftId: input.shiftId, shiftStatus: shift.status },
    );
  }

  // Step 4: Load all orders for the shift
  const shiftOrders: Order[] = await orders.list({ shiftId: input.shiftId });

  // Step 5: Load order items for each order (detail enrichment)
  for (const order of shiftOrders) {
    await orderItems.findByOrderId(order.id);
  }

  // Step 6 & 7: Group orders by status, calculate counters and totalRevenue
  let pendingOrdersCount = 0;
  let preparingOrdersCount = 0;
  let readyOrdersCount = 0;
  let deliveredOrdersCount = 0;
  let cancelledOrdersCount = 0;
  let totalRevenue = 0;

  for (const order of shiftOrders) {
    switch (order.status) {
      case 'pending':
        pendingOrdersCount++;
        break;
      case 'inKitchen':
      case 'preparing':
        preparingOrdersCount++;
        break;
      case 'ready':
        readyOrdersCount++;
        totalRevenue += order.total;
        break;
      case 'delivered':
        deliveredOrdersCount++;
        totalRevenue += order.total;
        break;
      case 'cancelled':
        cancelledOrdersCount++;
        break;
    }
  }

  // Step 8 & 9: Load stock levels and check each against MDM StockItem minimumQuantity
  const allStockLevels: StockLevel[] = await stockLevels.list();
  let lowStockCount = 0;

  for (const sl of allStockLevels) {
    const doc = await ctx.data.mdmDocument.get({ mdmId: sl.stockItemId });
    if (!doc) {
      continue;
    }
    const stockItemDetails = doc.details as { minimumQuantity?: number } & Record<string, unknown>;
    const minimumQuantity = stockItemDetails.minimumQuantity ?? 0;
    if (sl.currentQuantity < minimumQuantity) {
      lowStockCount++;
    }
  }

  // Step 10: Build and return the aggregation
  return {
    shiftId: shift.shiftId,
    shiftStatus: shift.status,
    openedAt: shift.openedAt,
    closedAt: shift.closedAt ?? '',
    totalOrders: shiftOrders.length,
    totalRevenue,
    pendingOrdersCount,
    preparingOrdersCount,
    readyOrdersCount,
    deliveredOrdersCount,
    cancelledOrdersCount,
    lowStockCount,
  };
}
