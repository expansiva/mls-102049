/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.ts" enhancement="_blank"/>

export type OrderItemStatus = 'pending' | 'preparing' | 'ready' | 'delivered';

export interface OrderItem {
  orderItemId: string;
  orderId: string;
  menuItemId: string;
  quantity: number;
  unitPrice: number;
  itemTotal: number;
  substitutionsApplied: string | null;
  status: OrderItemStatus;
  createdAt: string;
  updatedAt: string;
}

export const ORDER_ITEM_STATUS_TRANSITIONS: Record<OrderItemStatus, OrderItemStatus[]> = {
  pending: ['preparing'],
  preparing: ['ready'],
  ready: ['delivered'],
  delivered: [],
};

export function canTransitionOrderItemStatus(
  from: OrderItemStatus,
  to: OrderItemStatus,
): boolean {
  return ORDER_ITEM_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function orderItemQuantityIsValid(quantity: number): boolean {
  return quantity > 0;
}

export function orderItemUnitPriceIsValid(unitPrice: number): boolean {
  return unitPrice >= 0;
}

export function orderItemTotalIsConsistent(
  quantity: number,
  unitPrice: number,
  itemTotal: number,
): boolean {
  // Without substitution adjustments the total equals quantity × unitPrice.
  // When substitutions are applied the total may differ, so we allow a tolerance
  // of ±10% to account for combo/substitution adjustments.
  const expected = quantity * unitPrice;
  if (expected === 0) {
    return itemTotal === 0;
  }
  const tolerance = Math.abs(expected) * 0.1;
  return Math.abs(itemTotal - expected) <= tolerance;
}

export function validateOrderItem(item: Pick<OrderItem, 'quantity' | 'unitPrice' | 'itemTotal'>): boolean {
  return (
    orderItemQuantityIsValid(item.quantity) &&
    orderItemUnitPriceIsValid(item.unitPrice) &&
    orderItemTotalIsConsistent(item.quantity, item.unitPrice, item.itemTotal)
  );
}

export function computeOrderItemTotal(quantity: number, unitPrice: number): number {
  return quantity * unitPrice;
}
