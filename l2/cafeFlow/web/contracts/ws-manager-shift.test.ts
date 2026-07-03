/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.test.ts" enhancement="_blank"/>

import type { CafeFlowCloseShiftInput, CafeFlowCloseShiftOutput, CafeFlowGenerateShiftClosingReportInput, CafeFlowGenerateShiftClosingReportOutput, CafeFlowGenerateShiftClosingReportOutputItem, CafeFlowOpenShiftInput, CafeFlowOpenShiftOutput, CafeFlowQueryDashboardInput, CafeFlowQueryDashboardOutput, CafeFlowQueryDashboardOutputItem } from './ws-manager-shift.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowOpenShiftInput = {
  status: "open" | "closed";
  openedAt: string;
  closedAt?: string;
};
type ExpectedCafeFlowOpenShiftOutput = {
  shiftId: string;
};
type ExpectedCafeFlowQueryDashboardInput = {
  shiftId?: string;
  status?: "open" | "closed";
  openedAt?: string;
  closedAt?: string;
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowQueryDashboardOutputItem = {
  shiftId: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt: string;
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowQueryDashboardOutput = ExpectedCafeFlowQueryDashboardOutputItem[];
type ExpectedCafeFlowCloseShiftInput = {
  status: "open" | "closed";
  closedAt?: string;
};
type ExpectedCafeFlowCloseShiftOutput = {
  shiftId: string;
};
type ExpectedCafeFlowGenerateShiftClosingReportInput = {
  shiftId?: string;
  status?: "open" | "closed";
  openedAt?: string;
  closedAt?: string;
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowGenerateShiftClosingReportOutputItem = {
  shiftId: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt: string;
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowGenerateShiftClosingReportOutput = ExpectedCafeFlowGenerateShiftClosingReportOutputItem[];

type _CafeFlowOpenShiftInput = Assert<Equal<CafeFlowOpenShiftInput, ExpectedCafeFlowOpenShiftInput>>;
type _CafeFlowOpenShiftOutput = Assert<Equal<CafeFlowOpenShiftOutput, ExpectedCafeFlowOpenShiftOutput>>;
type _CafeFlowQueryDashboardInput = Assert<Equal<CafeFlowQueryDashboardInput, ExpectedCafeFlowQueryDashboardInput>>;
type _CafeFlowQueryDashboardOutputItem = Assert<Equal<CafeFlowQueryDashboardOutputItem, ExpectedCafeFlowQueryDashboardOutputItem>>;
type _CafeFlowQueryDashboardOutput = Assert<Equal<CafeFlowQueryDashboardOutput, ExpectedCafeFlowQueryDashboardOutput>>;
type _CafeFlowCloseShiftInput = Assert<Equal<CafeFlowCloseShiftInput, ExpectedCafeFlowCloseShiftInput>>;
type _CafeFlowCloseShiftOutput = Assert<Equal<CafeFlowCloseShiftOutput, ExpectedCafeFlowCloseShiftOutput>>;
type _CafeFlowGenerateShiftClosingReportInput = Assert<Equal<CafeFlowGenerateShiftClosingReportInput, ExpectedCafeFlowGenerateShiftClosingReportInput>>;
type _CafeFlowGenerateShiftClosingReportOutputItem = Assert<Equal<CafeFlowGenerateShiftClosingReportOutputItem, ExpectedCafeFlowGenerateShiftClosingReportOutputItem>>;
type _CafeFlowGenerateShiftClosingReportOutput = Assert<Equal<CafeFlowGenerateShiftClosingReportOutput, ExpectedCafeFlowGenerateShiftClosingReportOutput>>;

export {};