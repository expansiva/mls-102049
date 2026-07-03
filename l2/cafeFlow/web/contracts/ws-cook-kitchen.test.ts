/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateStockMovementInput, CafeFlowCreateStockMovementOutput, CafeFlowUpdateKitchenStatusInput, CafeFlowUpdateKitchenStatusOutput } from './ws-cook-kitchen.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowUpdateKitchenStatusInput = {
  status: "criado" | "em preparo" | "pronto" | "entregue" | "cancelado";
  previousStatus?: "criado" | "em preparo" | "pronto" | "entregue" | "cancelado";
};
type ExpectedCafeFlowUpdateKitchenStatusOutput = {
  orderStatusEventId: string;
};
type ExpectedCafeFlowCreateStockMovementInput = {
  movementType: "baixa" | "reposicao";
  quantity: number;
  reason: string;
};
type ExpectedCafeFlowCreateStockMovementOutput = {
  stockMovementEventId: string;
};

type _CafeFlowUpdateKitchenStatusInput = Assert<Equal<CafeFlowUpdateKitchenStatusInput, ExpectedCafeFlowUpdateKitchenStatusInput>>;
type _CafeFlowUpdateKitchenStatusOutput = Assert<Equal<CafeFlowUpdateKitchenStatusOutput, ExpectedCafeFlowUpdateKitchenStatusOutput>>;
type _CafeFlowCreateStockMovementInput = Assert<Equal<CafeFlowCreateStockMovementInput, ExpectedCafeFlowCreateStockMovementInput>>;
type _CafeFlowCreateStockMovementOutput = Assert<Equal<CafeFlowCreateStockMovementOutput, ExpectedCafeFlowCreateStockMovementOutput>>;

export {};