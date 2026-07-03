/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.ts" enhancement="_blank"/>
import type { OrderItem, OrderItemStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';

export interface OrderItemFilter {
  orderId?: string;
  menuItemId?: string;
  status?: OrderItemStatus;
}

export interface IOrderItemRepository {
  /** Retrieve an order item by its unique identifier. Throws NOT_FOUND when absent. */
  getById(id: string): Promise<OrderItem>;
  /** List order items matching the given filter. */
  list(filter?: OrderItemFilter): Promise<OrderItem[]>;
  /** Persist the given order item aggregate (upsert). */
  save(orderItem: OrderItem): Promise<void>;
  /** Domain finder: retrieve items belonging to an order. */
  findByOrderId(orderId: string): Promise<OrderItem[]>;
}
