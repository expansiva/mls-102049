/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.ts" enhancement="_blank"/>

export interface CafeFlowUpdateKitchenStatusInput {
  status: "criado" | "em preparo" | "pronto" | "entregue" | "cancelado";
  previousStatus?: "criado" | "em preparo" | "pronto" | "entregue" | "cancelado";
}

export interface CafeFlowUpdateKitchenStatusOutput {
  orderStatusEventId: string;
}

export interface CafeFlowCreateStockMovementInput {
  movementType: "baixa" | "reposicao";
  quantity: number;
  reason: string;
}

export interface CafeFlowCreateStockMovementOutput {
  stockMovementEventId: string;
}
