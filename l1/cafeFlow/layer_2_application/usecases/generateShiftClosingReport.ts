/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/generateShiftClosingReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IShiftRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.js';
import type { IOrderRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IOrderItemRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.js';
import type { Shift } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shift.js';
import type { Order, OrderStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { OrderItem } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';

export interface GenerateShiftClosingReportInput {
  shiftId: string;
}

export interface GenerateShiftClosingReportOutput {
  shiftId: string;
  status: string;
  openedAt: string;
  closedAt: string;
  totalOrders: number;
  dineInOrders: number;
  takeoutOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  grossRevenue: number;
  netRevenue: number;
  totalOrderItems: number;
}

const TERMINAL_ORDER_STATUSES: OrderStatus[] = ['delivered', 'cancelled'];

/**
 * Rule: shiftClosingRequiresSettledOrders
 * Every order belonging to the shift must be in a terminal status
 * (delivered or cancelled). If any order is still pending/inKitchen/preparing/ready,
 * the shift closing report cannot be generated.
 */
function assertAllOrdersSettled(orders: Order[]): void {
  const unsettled = orders.filter((o) => !TERMINAL_ORDER_STATUSES.includes(o.status));
  if (unsettled.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'shiftClosingRequiresSettledOrders: existem pedidos não finalizados no turno.',
      400,
      {
        ruleId: 'shiftClosingRequiresSettledOrders',
        unsettledOrderIds: unsettled.map((o) => o.id),
        unsettledStatuses: unsettled.map((o) => o.status),
      },
    );
  }
}

export async function generateShiftClosingReport(
  ctx: RequestContext,
  input: GenerateShiftClosingReportInput,
): Promise<GenerateShiftClosingReportOutput> {
  const shifts = resolveRepository<IShiftRepository>(ctx, 'Shift');
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const orderItems = resolveRepository<IOrderItemRepository>(ctx, 'OrderItem');

  // 1–3. Load the shift and validate it is closed.
  const shift: Shift = await shifts.getById(input.shiftId);
  if (shift.status !== 'closed') {
    throw new AppError(
      'VALIDATION_ERROR',
      `O turno ${input.shiftId} não está fechado (status atual: ${shift.status}).`,
      400,
      { shiftId: input.shiftId, currentStatus: shift.status },
    );
  }

  // 4. Load all orders for the shift.
  const shiftOrders: Order[] = await orders.list({ shiftId: input.shiftId });

  // 5. Apply rule: all orders must be settled.
  assertAllOrdersSettled(shiftOrders);

  // 6. Load OrderItems for every order and count them.
  let totalOrderItems = 0;
  for (const order of shiftOrders) {
    const items: OrderItem[] = await orderItems.list({ orderId: order.id });
    totalOrderItems += items.length;
  }

  // 7. Aggregate orders by type and status.
  const dineInOrders = shiftOrders.filter((o) => o.orderType === 'dineIn').length;
  const takeoutOrders = shiftOrders.filter((o) => o.orderType === 'takeout').length;
  const deliveredOrders = shiftOrders.filter((o) => o.status === 'delivered').length;
  const cancelledOrders = shiftOrders.filter((o) => o.status === 'cancelled').length;

  // 8. Gross revenue = sum of totals of delivered orders.
  const grossRevenue = shiftOrders
    .filter((o) => o.status === 'delivered')
    .reduce((sum, o) => sum + o.total, 0);

  // 9. Net revenue = gross revenue minus cancelled orders' totals.
  const cancelledTotal = shiftOrders
    .filter((o) => o.status === 'cancelled')
    .reduce((sum, o) => sum + o.total, 0);
  const netRevenue = grossRevenue - cancelledTotal;

  // 10–11. Return consolidated report.
  return {
    shiftId: shift.shiftId,
    status: shift.status,
    openedAt: shift.openedAt,
    closedAt: shift.closedAt ?? '',
    totalOrders: shiftOrders.length,
    dineInOrders,
    takeoutOrders,
    deliveredOrders,
    cancelledOrders,
    grossRevenue,
    netRevenue,
    totalOrderItems,
  };
}
