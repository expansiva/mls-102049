/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateOrderInput, CafeFlowCreateOrderOutput, CafeFlowSettleOrderInput, CafeFlowSettleOrderOutput } from './ws-attendant-pos.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowCreateOrderInput = {
  orderType: "dineIn" | "takeout";
  status: "pending" | "inKitchen" | "preparing" | "ready" | "delivered" | "cancelled";
  total: number;
};
type ExpectedCafeFlowCreateOrderOutput = {
  id: string;
};
type ExpectedCafeFlowSettleOrderInput = {
  status: "pending" | "inKitchen" | "preparing" | "ready" | "delivered" | "cancelled";
};
type ExpectedCafeFlowSettleOrderOutput = {
  id: string;
};

type _CafeFlowCreateOrderInput = Assert<Equal<CafeFlowCreateOrderInput, ExpectedCafeFlowCreateOrderInput>>;
type _CafeFlowCreateOrderOutput = Assert<Equal<CafeFlowCreateOrderOutput, ExpectedCafeFlowCreateOrderOutput>>;
type _CafeFlowSettleOrderInput = Assert<Equal<CafeFlowSettleOrderInput, ExpectedCafeFlowSettleOrderInput>>;
type _CafeFlowSettleOrderOutput = Assert<Equal<CafeFlowSettleOrderOutput, ExpectedCafeFlowSettleOrderOutput>>;

export {};