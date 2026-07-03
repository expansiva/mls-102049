/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/settleOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IOrderStatusEventRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.js';
import type { Order, OrderStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canTransitionOrder, validateOrderShiftReference } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { OrderStatusEvent, OrderStatusEventStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

export interface SettleOrderInput {
  orderId: string;
}

export interface SettleOrderOutput {
  orderId: string;
  status: string;
  updatedAt: string;
  orderStatusEventId: string;
}

/** Maps an OrderStatus to the corresponding OrderStatusEventStatus (PT labels). */
function mapToEventStatus(status: OrderStatus): OrderStatusEventStatus {
  switch (status) {
    case 'pending':
      return 'criado';
    case 'inKitchen':
    case 'preparing':
      return 'em preparo';
    case 'ready':
      return 'pronto';
    case 'delivered':
      return 'entregue';
    case 'cancelled':
      return 'cancelado';
    default:
      return 'criado';
  }
}

export async function settleOrder(ctx: RequestContext, input: SettleOrderInput): Promise<SettleOrderOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const orderStatusEvents = resolveRepository<IOrderStatusEventRepository>(ctx, 'OrderStatusEvent');

  // 2. Load the Order aggregate by orderId
  const order: Order = await orders.getById(input.orderId);

  // 3. Validate orderRequiresOpenShift: ensure the order references a valid shift
  if (!validateOrderShiftReference(order)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'orderRequiresOpenShift: o pedido deve referenciar um turno válido e em aberto.',
      400,
      { ruleId: 'orderRequiresOpenShift', shiftId: order.shiftId },
    );
  }

  // 4. Capture previous status for the history event
  const previousStatus: OrderStatus = order.status;

  // 5. Validate the state transition to 'delivered'
  if (!canTransitionOrder(previousStatus, 'delivered')) {
    throw new AppError(
      'CONFLICT',
      `Não é possível finalizar o pedido no status "${previousStatus}". Transição para "delivered" não permitida.`,
      409,
      { ruleId: 'orderStatusTransition', from: previousStatus, to: 'delivered' },
    );
  }

  const now = ctx.clock.nowIso();

  // 6. Apply the transition and update timestamp
  const updatedOrder: Order = {
    ...order,
    status: 'delivered',
    updatedAt: now,
  };

  // 7. Generate orderStatusEventId
  const orderStatusEventId = ctx.idGenerator.newId();

  // 8. Build the OrderStatusEvent record
  const event: OrderStatusEvent = {
    orderStatusEventId,
    orderId: order.id,
    status: 'entregue',
    previousStatus: mapToEventStatus(previousStatus),
    createdAt: now,
    updatedAt: now,
  };

  // 9 & 10. Persist Order update and append OrderStatusEvent in the same transaction
  await ctx.data.runInTransaction(async () => {
    await orders.save(updatedOrder);
    await orderStatusEvents.append(event);
  });

  // 11. Return confirmation
  return {
    orderId: order.id,
    status: 'delivered',
    updatedAt: now,
    orderStatusEventId,
  };
}
