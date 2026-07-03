/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.ts" enhancement="_blank"/>
export type OrderStatusEventStatus = 'criado' | 'em preparo' | 'pronto' | 'entregue' | 'cancelado';

export interface OrderStatusEvent {
  orderStatusEventId: string;
  orderId: string;
  status: OrderStatusEventStatus;
  previousStatus: OrderStatusEventStatus | null;
  createdAt: string;
  updatedAt: string;
}
