/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.ts" enhancement="_blank"/>

export interface CafeFlowQueryStockLevelsInput {
  stockItemId?: string;
  lastMovementAt?: string;
}

export interface CafeFlowQueryStockLevelsOutputItem {
  stockItemId: string;
  currentQuantity: number;
  lastMovementAt: string;
}

export type CafeFlowQueryStockLevelsOutput = CafeFlowQueryStockLevelsOutputItem[];

export interface CafeFlowAdjustStockLevelInput {
  currentQuantity: number;
  lastMovementAt: string;
}

export interface CafeFlowAdjustStockLevelOutput {
  stockLevelId: string;
}
