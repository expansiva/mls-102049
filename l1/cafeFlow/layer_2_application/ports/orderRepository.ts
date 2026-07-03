/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.ts" enhancement="_blank"/>
import type { Order, OrderStatus, OrderType } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';

/** Branded alias for the Order aggregate identifier. */
export type OrderId = string;

/** Branded alias for a Customer identifier (indexed FK on the order table). */
export type CustomerId = string;

/** Filter for listing orders — carries only indexed / queryable fields. */
export interface OrderFilter {
  shiftId?: string;
  status?: OrderStatus;
  tableId?: string | null;
  orderType?: OrderType;
  customerId?: string;
}

export interface IOrderRepository {
  /** Retrieve an order by its unique identifier; throws NOT_FOUND when absent. */
  getById(id: OrderId): Promise<Order>;

  /** List orders matching the given filter. */
  list(filter?: OrderFilter): Promise<Order[]>;

  /** Persist the given order aggregate (upsert root + embedded members). */
  save(order: Order): Promise<void>;

  /** Domain finder: retrieve orders by customer. */
  findByCustomerId(customerId: CustomerId): Promise<Order[]>;

  /** Domain finder: retrieve orders by status. */
  findByStatus(status: OrderStatus): Promise<Order[]>;
}
