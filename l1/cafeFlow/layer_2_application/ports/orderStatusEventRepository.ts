/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.ts" enhancement="_blank"/>
import type { OrderStatusEvent } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

export interface DateRange {
  from: string;
  to: string;
}

export interface IOrderStatusEventRepository {
  /** Append an order status event (immutable — no update or delete). */
  append(event: OrderStatusEvent): Promise<void>;
  /** Read finder: list events by order. */
  listByOwnerId(ownerId: string): Promise<OrderStatusEvent[]>;
  /** Read finder: list events within a period. */
  listByPeriod(period: DateRange): Promise<OrderStatusEvent[]>;
}
