/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.test.ts" enhancement="_blank"/>

import type { CafeFlowAdjustStockLevelInput, CafeFlowAdjustStockLevelOutput, CafeFlowQueryStockLevelsInput, CafeFlowQueryStockLevelsOutput, CafeFlowQueryStockLevelsOutputItem } from './ws-manager-stock-adjustment.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowQueryStockLevelsInput = {
  stockItemId?: string;
  lastMovementAt?: string;
};
type ExpectedCafeFlowQueryStockLevelsOutputItem = {
  stockItemId: string;
  currentQuantity: number;
  lastMovementAt: string;
};
type ExpectedCafeFlowQueryStockLevelsOutput = ExpectedCafeFlowQueryStockLevelsOutputItem[];
type ExpectedCafeFlowAdjustStockLevelInput = {
  currentQuantity: number;
  lastMovementAt: string;
};
type ExpectedCafeFlowAdjustStockLevelOutput = {
  stockLevelId: string;
};

type _CafeFlowQueryStockLevelsInput = Assert<Equal<CafeFlowQueryStockLevelsInput, ExpectedCafeFlowQueryStockLevelsInput>>;
type _CafeFlowQueryStockLevelsOutputItem = Assert<Equal<CafeFlowQueryStockLevelsOutputItem, ExpectedCafeFlowQueryStockLevelsOutputItem>>;
type _CafeFlowQueryStockLevelsOutput = Assert<Equal<CafeFlowQueryStockLevelsOutput, ExpectedCafeFlowQueryStockLevelsOutput>>;
type _CafeFlowAdjustStockLevelInput = Assert<Equal<CafeFlowAdjustStockLevelInput, ExpectedCafeFlowAdjustStockLevelInput>>;
type _CafeFlowAdjustStockLevelOutput = Assert<Equal<CafeFlowAdjustStockLevelOutput, ExpectedCafeFlowAdjustStockLevelOutput>>;

export {};