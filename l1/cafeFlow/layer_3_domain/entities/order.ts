/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/order.ts" enhancement="_blank"/>

export type OrderType = 'dineIn' | 'takeout';

export type OrderStatus =
  | 'pending'
  | 'inKitchen'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'cancelled';

export interface Order {
  id: string;
  orderType: OrderType;
  tableId: string | null;
  shiftId: string;
  status: OrderStatus;
  total: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Valid status transitions for an Order.
 * pending → inKitchen → preparing → ready → delivered
 * cancelled can be reached from any non-delivered, non-cancelled state.
 */
export const ORDER_STATUS_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  pending: ['inKitchen', 'cancelled'],
  inKitchen: ['preparing', 'cancelled'],
  preparing: ['ready', 'cancelled'],
  ready: ['delivered', 'cancelled'],
  delivered: [],
  cancelled: [],
};

/** Returns true when the transition from `from` to `to` is allowed. */
export function canTransitionOrder(from: OrderStatus, to: OrderStatus): boolean {
  return ORDER_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

/**
 * Invariant: If orderType is dineIn then tableId must be non-null.
 * If orderType is takeout then tableId must be null.
 */
export function validateOrderTableAssignment(order: Pick<Order, 'orderType' | 'tableId'>): boolean {
  if (order.orderType === 'dineIn') {
    return order.tableId !== null;
  }
  if (order.orderType === 'takeout') {
    return order.tableId === null;
  }
  return false;
}

/** Invariant: total must be greater than or equal to zero. */
export function validateOrderTotal(order: Pick<Order, 'total'>): boolean {
  return order.total >= 0;
}

/**
 * Invariant: shiftId must reference an open Shift at the time of order creation.
 * This is a cross-entity invariant — the pure domain entity cannot verify the Shift state,
 * so this helper only checks that a shiftId is present. The application layer must
 * additionally confirm the Shift is open.
 */
export function validateOrderShiftReference(order: Pick<Order, 'shiftId'>): boolean {
  return order.shiftId !== null && order.shiftId.length > 0;
}

/** Runs all pure invariants for the Order aggregate and returns the first violation message, or null. */
export function validateOrderInvariants(order: Pick<Order, 'orderType' | 'tableId' | 'total' | 'shiftId'>): string | null {
  if (!validateOrderTableAssignment(order)) {
    if (order.orderType === 'dineIn') {
      return 'Dine-in orders must have a non-null tableId.';
    }
    if (order.orderType === 'takeout') {
      return 'Takeout orders must have a null tableId.';
    }
    return 'Invalid orderType.';
  }
  if (!validateOrderTotal(order)) {
    return 'Order total must be greater than or equal to zero.';
  }
  if (!validateOrderShiftReference(order)) {
    return 'Order must reference a valid shiftId.';
  }
  return null;
}
