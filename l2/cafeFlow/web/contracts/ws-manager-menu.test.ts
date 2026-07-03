/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateMenuItemInput, CafeFlowCreateMenuItemOutput, CafeFlowDeleteMenuItemInput, CafeFlowDeleteMenuItemOutput, CafeFlowQueryMenuItemsInput, CafeFlowQueryMenuItemsOutput, CafeFlowQueryMenuItemsOutputItem, CafeFlowUpdateMenuItemInput, CafeFlowUpdateMenuItemOutput } from './ws-manager-menu.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowQueryMenuItemsInput = {
  menuItemId?: string;
  name?: string;
  category?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowQueryMenuItemsOutputItem = {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  description: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowQueryMenuItemsOutput = ExpectedCafeFlowQueryMenuItemsOutputItem[];
type ExpectedCafeFlowCreateMenuItemInput = {
  name: string;
  category: string;
  price: number;
  description?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowCreateMenuItemOutput = {
  menuItemId: string;
};
type ExpectedCafeFlowUpdateMenuItemInput = {
  name: string;
  category: string;
  price: number;
  description?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowUpdateMenuItemOutput = {
  menuItemId: string;
};
type ExpectedCafeFlowDeleteMenuItemInput = {
  menuItemId?: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowDeleteMenuItemOutput = {
  menuItemId: string;
};

type _CafeFlowQueryMenuItemsInput = Assert<Equal<CafeFlowQueryMenuItemsInput, ExpectedCafeFlowQueryMenuItemsInput>>;
type _CafeFlowQueryMenuItemsOutputItem = Assert<Equal<CafeFlowQueryMenuItemsOutputItem, ExpectedCafeFlowQueryMenuItemsOutputItem>>;
type _CafeFlowQueryMenuItemsOutput = Assert<Equal<CafeFlowQueryMenuItemsOutput, ExpectedCafeFlowQueryMenuItemsOutput>>;
type _CafeFlowCreateMenuItemInput = Assert<Equal<CafeFlowCreateMenuItemInput, ExpectedCafeFlowCreateMenuItemInput>>;
type _CafeFlowCreateMenuItemOutput = Assert<Equal<CafeFlowCreateMenuItemOutput, ExpectedCafeFlowCreateMenuItemOutput>>;
type _CafeFlowUpdateMenuItemInput = Assert<Equal<CafeFlowUpdateMenuItemInput, ExpectedCafeFlowUpdateMenuItemInput>>;
type _CafeFlowUpdateMenuItemOutput = Assert<Equal<CafeFlowUpdateMenuItemOutput, ExpectedCafeFlowUpdateMenuItemOutput>>;
type _CafeFlowDeleteMenuItemInput = Assert<Equal<CafeFlowDeleteMenuItemInput, ExpectedCafeFlowDeleteMenuItemInput>>;
type _CafeFlowDeleteMenuItemOutput = Assert<Equal<CafeFlowDeleteMenuItemOutput, ExpectedCafeFlowDeleteMenuItemOutput>>;

export {};