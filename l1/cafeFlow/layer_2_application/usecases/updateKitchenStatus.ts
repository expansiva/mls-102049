/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateKitchenStatus.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IOrderStatusEventRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.js';
import type { Order, OrderStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canTransitionOrder } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { OrderStatusEvent, OrderStatusEventStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

const ALLOWED_KITCHEN_STATUSES: OrderStatusEventStatus[] = [
  'criado',
  'em preparo',
  'pronto',
  'entregue',
  'cancelado',
];

/** Maps kitchen status (OrderStatusEventStatus) to the Order aggregate status. */
const KITCHEN_TO_ORDER_STATUS: Record<OrderStatusEventStatus, OrderStatus> = {
  'criado': 'pending',
  'em preparo': 'preparing',
  'pronto': 'ready',
  'entregue': 'delivered',
  'cancelado': 'cancelled',
};

/** Maps the Order aggregate status back to the kitchen status (OrderStatusEventStatus). */
const ORDER_TO_KITCHEN_STATUS: Record<OrderStatus, OrderStatusEventStatus> = {
  'pending': 'criado',
  'inKitchen': 'criado',
  'preparing': 'em preparo',
  'ready': 'pronto',
  'delivered': 'entregue',
  'cancelled': 'cancelado',
};

export interface UpdateKitchenStatusInput {
  orderId: string;
  status: string;
}

export interface UpdateKitchenStatusOutput {
  orderStatusEventId: string;
  orderId: string;
  previousStatus: string | null;
  status: string;
  createdAt: string;
}

export async function updateKitchenStatus(
  ctx: RequestContext,
  input: UpdateKitchenStatusInput,
): Promise<UpdateKitchenStatusOutput> {
  // 1. Validate that status is one of the allowed kitchen status values.
  if (!ALLOWED_KITCHEN_STATUSES.includes(input.status as OrderStatusEventStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Status inválido: "${input.status}". Valores permitidos: ${ALLOWED_KITCHEN_STATUSES.join(', ')}.`,
      400,
      { ruleId: 'validate-status-enum', status: input.status },
    );
  }

  const kitchenStatus = input.status as OrderStatusEventStatus;
  const newOrderStatus = KITCHEN_TO_ORDER_STATUS[kitchenStatus];

  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const events = resolveRepository<IOrderStatusEventRepository>(ctx, 'OrderStatusEvent');

    // 2. Load the Order to obtain its current status.
    const order = await orders.getById(input.orderId);

    // 3. Extract previousStatus from the loaded Order's status.
    const previousKitchenStatus: OrderStatusEventStatus | null =
      ORDER_TO_KITCHEN_STATUS[order.status] ?? null;

    // 4. Validate the status transition is allowed by the domain.
    if (!canTransitionOrder(order.status, newOrderStatus)) {
      throw new AppError(
        'CONFLICT',
        `Transição de status não permitida: ${order.status} → ${newOrderStatus}.`,
        409,
        { ruleId: 'validate-status-transition', from: order.status, to: newOrderStatus },
      );
    }

    // 5. Update the Order's status and persist.
    const now = ctx.clock.nowIso();
    const updatedOrder: Order = {
      ...order,
      status: newOrderStatus,
      updatedAt: now,
    };
    await orders.save(updatedOrder);

    // 6. Build and append the OrderStatusEvent (immutable history).
    const orderStatusEventId = ctx.idGenerator.newId();
    const event: OrderStatusEvent = {
      orderStatusEventId,
      orderId: input.orderId,
      status: kitchenStatus,
      previousStatus: previousKitchenStatus,
      createdAt: now,
      updatedAt: now,
    };
    await events.append(event);

    // 7. Return the output.
    return {
      orderStatusEventId,
      orderId: input.orderId,
      previousStatus: previousKitchenStatus,
      status: kitchenStatus,
      createdAt: now,
    };
  });
}
