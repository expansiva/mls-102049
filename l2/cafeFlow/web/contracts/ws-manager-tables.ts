/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.ts" enhancement="_blank"/>

export interface CafeFlowQueryTablesInput {
  tableId?: string;
  name?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowQueryTablesOutputItem {
  tableId: string;
  number: string;
  name: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowQueryTablesOutput = CafeFlowQueryTablesOutputItem[];

export interface CafeFlowCreateTableInput {
  number: string;
  name?: string;
  status: "active" | "inactive";
}

export interface CafeFlowCreateTableOutput {
  tableId: string;
}

export interface CafeFlowUpdateTableInput {
  number: string;
  name?: string;
  status: "active" | "inactive";
}

export interface CafeFlowUpdateTableOutput {
  tableId: string;
}

export interface CafeFlowDeleteTableInput {
  tableId?: string;
  number: string;
  name?: string;
  status: "active" | "inactive";
}

export interface CafeFlowDeleteTableOutput {
  tableId: string;
}
