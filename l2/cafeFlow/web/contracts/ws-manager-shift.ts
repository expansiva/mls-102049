/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.ts" enhancement="_blank"/>

export interface CafeFlowOpenShiftInput {
  status: "open" | "closed";
  openedAt: string;
  closedAt?: string;
}

export interface CafeFlowOpenShiftOutput {
  shiftId: string;
}

export interface CafeFlowQueryDashboardInput {
  shiftId?: string;
  status?: "open" | "closed";
  openedAt?: string;
  closedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowQueryDashboardOutputItem {
  shiftId: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt: string;
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowQueryDashboardOutput = CafeFlowQueryDashboardOutputItem[];

export interface CafeFlowCloseShiftInput {
  status: "open" | "closed";
  closedAt?: string;
}

export interface CafeFlowCloseShiftOutput {
  shiftId: string;
}

export interface CafeFlowGenerateShiftClosingReportInput {
  shiftId?: string;
  status?: "open" | "closed";
  openedAt?: string;
  closedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowGenerateShiftClosingReportOutputItem {
  shiftId: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt: string;
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowGenerateShiftClosingReportOutput = CafeFlowGenerateShiftClosingReportOutputItem[];
