/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.ts" enhancement="_blank"/>
export type StockMovementType = 'baixa' | 'reposicao';

export interface StockMovementEvent {
  stockMovementEventId: string;
  stockItemId: string;
  movementType: StockMovementType;
  quantity: number;
  reason: string;
  createdAt: string;
  updatedAt: string;
}
