/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateTableInput, CafeFlowCreateTableOutput, CafeFlowDeleteTableInput, CafeFlowDeleteTableOutput, CafeFlowQueryTablesInput, CafeFlowQueryTablesOutput, CafeFlowQueryTablesOutputItem, CafeFlowUpdateTableInput, CafeFlowUpdateTableOutput } from './ws-manager-tables.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowQueryTablesInput = {
  tableId?: string;
  name?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowQueryTablesOutputItem = {
  tableId: string;
  number: string;
  name: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowQueryTablesOutput = ExpectedCafeFlowQueryTablesOutputItem[];
type ExpectedCafeFlowCreateTableInput = {
  number: string;
  name?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowCreateTableOutput = {
  tableId: string;
};
type ExpectedCafeFlowUpdateTableInput = {
  number: string;
  name?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowUpdateTableOutput = {
  tableId: string;
};
type ExpectedCafeFlowDeleteTableInput = {
  tableId?: string;
  number: string;
  name?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowDeleteTableOutput = {
  tableId: string;
};

type _CafeFlowQueryTablesInput = Assert<Equal<CafeFlowQueryTablesInput, ExpectedCafeFlowQueryTablesInput>>;
type _CafeFlowQueryTablesOutputItem = Assert<Equal<CafeFlowQueryTablesOutputItem, ExpectedCafeFlowQueryTablesOutputItem>>;
type _CafeFlowQueryTablesOutput = Assert<Equal<CafeFlowQueryTablesOutput, ExpectedCafeFlowQueryTablesOutput>>;
type _CafeFlowCreateTableInput = Assert<Equal<CafeFlowCreateTableInput, ExpectedCafeFlowCreateTableInput>>;
type _CafeFlowCreateTableOutput = Assert<Equal<CafeFlowCreateTableOutput, ExpectedCafeFlowCreateTableOutput>>;
type _CafeFlowUpdateTableInput = Assert<Equal<CafeFlowUpdateTableInput, ExpectedCafeFlowUpdateTableInput>>;
type _CafeFlowUpdateTableOutput = Assert<Equal<CafeFlowUpdateTableOutput, ExpectedCafeFlowUpdateTableOutput>>;
type _CafeFlowDeleteTableInput = Assert<Equal<CafeFlowDeleteTableInput, ExpectedCafeFlowDeleteTableInput>>;
type _CafeFlowDeleteTableOutput = Assert<Equal<CafeFlowDeleteTableOutput, ExpectedCafeFlowDeleteTableOutput>>;

export {};