/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.ts" enhancement="_blank"/>

export interface CafeFlowCreateOrderInput {
  orderType: "dineIn" | "takeout";
  status: "pending" | "inKitchen" | "preparing" | "ready" | "delivered" | "cancelled";
  total: number;
}

export interface CafeFlowCreateOrderOutput {
  id: string;
}

export interface CafeFlowSettleOrderInput {
  status: "pending" | "inKitchen" | "preparing" | "ready" | "delivered" | "cancelled";
}

export interface CafeFlowSettleOrderOutput {
  id: string;
}
