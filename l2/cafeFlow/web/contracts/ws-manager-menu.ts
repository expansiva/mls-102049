/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.ts" enhancement="_blank"/>

export interface CafeFlowQueryMenuItemsInput {
  menuItemId?: string;
  name?: string;
  category?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowQueryMenuItemsOutputItem {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  description: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowQueryMenuItemsOutput = CafeFlowQueryMenuItemsOutputItem[];

export interface CafeFlowCreateMenuItemInput {
  name: string;
  category: string;
  price: number;
  description?: string;
  status: "active" | "inactive";
}

export interface CafeFlowCreateMenuItemOutput {
  menuItemId: string;
}

export interface CafeFlowUpdateMenuItemInput {
  name: string;
  category: string;
  price: number;
  description?: string;
  status: "active" | "inactive";
}

export interface CafeFlowUpdateMenuItemOutput {
  menuItemId: string;
}

export interface CafeFlowDeleteMenuItemInput {
  menuItemId?: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  status: "active" | "inactive";
}

export interface CafeFlowDeleteMenuItemOutput {
  menuItemId: string;
}
