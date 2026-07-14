/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/orderRepository.ts" enhancement="_blank"/>
import type { Order, OrderStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/order.js';

export type OrderId = string;
export type CustomerId = string;

export interface OrderFilter {
  status?: OrderStatus;
  customerId?: CustomerId;
}

export interface IOrderRepository {
  getById(id: OrderId): Promise<Order | null>;
  list(filter?: OrderFilter): Promise<Order[]>;
  save(order: Order): Promise<void>;
  findByCustomerId(customerId: CustomerId): Promise<Order[]>;
  findByStatus(status: OrderStatus): Promise<Order[]>;
}
