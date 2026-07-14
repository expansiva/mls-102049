/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/order.ts" enhancement="_blank"/>
export type OrderStatus = 'registered' | 'completed' | 'cancelled';

export interface OrderItem {
  orderItemId: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  orderId: string;
  status: OrderStatus;
  customerName: string;
  customerPhone: string | null;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  items: OrderItem[];
}

export const ORDER_STATUS_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  registered: ['completed', 'cancelled'],
  completed: [],
  cancelled: [],
};

export function canTransitionOrder(from: OrderStatus, to: OrderStatus): boolean {
  return ORDER_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function orderRequiresItem(order: Pick<Order, 'items'>): boolean {
  return order.items.length > 0;
}

export function recomputeOrderTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

export function orderHasItems(order: Pick<Order, 'items'>): boolean {
  return order.items.length > 0;
}

export function isCompletedInvariantValid(order: Pick<Order, 'status' | 'completedAt'>): boolean {
  if (order.status === 'completed') {
    return order.completedAt !== null;
  }
  return true;
}

export function isCancelledInvariantValid(
  order: Pick<Order, 'status' | 'cancelledAt' | 'cancellationReason'>,
): boolean {
  if (order.status === 'cancelled') {
    return order.cancelledAt !== null && order.cancellationReason !== null;
  }
  return true;
}

export function areCompletionAndCancellationMutuallyExclusive(
  order: Pick<Order, 'completedAt' | 'cancelledAt'>,
): boolean {
  return !(order.completedAt !== null && order.cancelledAt !== null);
}

export function canCompleteOrCancel(order: Pick<Order, 'items'>): boolean {
  return order.items.length > 0;
}

export function isUpdatedAtValid(order: Pick<Order, 'createdAt' | 'updatedAt'>): boolean {
  return order.updatedAt >= order.createdAt;
}

export function validateOrderInvariants(order: Order): string[] {
  const violations: string[] = [];

  if (!['registered', 'completed', 'cancelled'].includes(order.status)) {
    violations.push('status must be registered, completed, or cancelled');
  }

  if (!orderRequiresItem(order)) {
    violations.push('an order must have at least one OrderItem');
  }

  if (!isCompletedInvariantValid(order)) {
    violations.push('when status is completed, completedAt must be set');
  }

  if (!isCancelledInvariantValid(order)) {
    violations.push('when status is cancelled, cancelledAt and cancellationReason must be set');
  }

  if (!areCompletionAndCancellationMutuallyExclusive(order)) {
    violations.push('completedAt and cancelledAt are mutually exclusive');
  }

  if (['completed', 'cancelled'].includes(order.status) && !canCompleteOrCancel(order)) {
    violations.push('order cannot be completed or cancelled if it has no items');
  }

  if (!isUpdatedAtValid(order)) {
    violations.push('updatedAt must be greater than or equal to createdAt');
  }

  return violations;
}
