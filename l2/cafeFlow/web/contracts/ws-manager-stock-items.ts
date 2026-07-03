/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.ts" enhancement="_blank"/>

export interface CafeFlowQueryStockItemsInput {
  stockItemId?: string;
  name?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowQueryStockItemsOutputItem {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowQueryStockItemsOutput = CafeFlowQueryStockItemsOutputItem[];

export interface CafeFlowCreateStockItemInput {
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: "active" | "inactive";
}

export interface CafeFlowCreateStockItemOutput {
  stockItemId: string;
}

export interface CafeFlowUpdateStockItemInput {
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: "active" | "inactive";
}

export interface CafeFlowUpdateStockItemOutput {
  stockItemId: string;
}

export interface CafeFlowDeleteStockItemInput {
  stockItemId?: string;
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: "active" | "inactive";
}

export interface CafeFlowDeleteStockItemOutput {
  stockItemId: string;
}
