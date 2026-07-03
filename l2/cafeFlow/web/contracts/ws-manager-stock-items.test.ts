/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateStockItemInput, CafeFlowCreateStockItemOutput, CafeFlowDeleteStockItemInput, CafeFlowDeleteStockItemOutput, CafeFlowQueryStockItemsInput, CafeFlowQueryStockItemsOutput, CafeFlowQueryStockItemsOutputItem, CafeFlowUpdateStockItemInput, CafeFlowUpdateStockItemOutput } from './ws-manager-stock-items.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowQueryStockItemsInput = {
  stockItemId?: string;
  name?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowQueryStockItemsOutputItem = {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowQueryStockItemsOutput = ExpectedCafeFlowQueryStockItemsOutputItem[];
type ExpectedCafeFlowCreateStockItemInput = {
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowCreateStockItemOutput = {
  stockItemId: string;
};
type ExpectedCafeFlowUpdateStockItemInput = {
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowUpdateStockItemOutput = {
  stockItemId: string;
};
type ExpectedCafeFlowDeleteStockItemInput = {
  stockItemId?: string;
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowDeleteStockItemOutput = {
  stockItemId: string;
};

type _CafeFlowQueryStockItemsInput = Assert<Equal<CafeFlowQueryStockItemsInput, ExpectedCafeFlowQueryStockItemsInput>>;
type _CafeFlowQueryStockItemsOutputItem = Assert<Equal<CafeFlowQueryStockItemsOutputItem, ExpectedCafeFlowQueryStockItemsOutputItem>>;
type _CafeFlowQueryStockItemsOutput = Assert<Equal<CafeFlowQueryStockItemsOutput, ExpectedCafeFlowQueryStockItemsOutput>>;
type _CafeFlowCreateStockItemInput = Assert<Equal<CafeFlowCreateStockItemInput, ExpectedCafeFlowCreateStockItemInput>>;
type _CafeFlowCreateStockItemOutput = Assert<Equal<CafeFlowCreateStockItemOutput, ExpectedCafeFlowCreateStockItemOutput>>;
type _CafeFlowUpdateStockItemInput = Assert<Equal<CafeFlowUpdateStockItemInput, ExpectedCafeFlowUpdateStockItemInput>>;
type _CafeFlowUpdateStockItemOutput = Assert<Equal<CafeFlowUpdateStockItemOutput, ExpectedCafeFlowUpdateStockItemOutput>>;
type _CafeFlowDeleteStockItemInput = Assert<Equal<CafeFlowDeleteStockItemInput, ExpectedCafeFlowDeleteStockItemInput>>;
type _CafeFlowDeleteStockItemOutput = Assert<Equal<CafeFlowDeleteStockItemOutput, ExpectedCafeFlowDeleteStockItemOutput>>;

export {};