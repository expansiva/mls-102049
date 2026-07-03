/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.ts" enhancement="_blank"/>

export interface CafeFlowQueryComboRulesInput {
  comboRuleId?: string;
  menuItemId?: string;
  name?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowQueryComboRulesOutputItem {
  comboRuleId: string;
  menuItemId: string;
  name: string;
  description: string;
  priceDifference: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowQueryComboRulesOutput = CafeFlowQueryComboRulesOutputItem[];

export interface CafeFlowCreateComboRuleInput {
  name: string;
  description?: string;
  priceDifference: number;
  status: "active" | "inactive";
}

export interface CafeFlowCreateComboRuleOutput {
  comboRuleId: string;
}

export interface CafeFlowUpdateComboRuleInput {
  name: string;
  description?: string;
  priceDifference: number;
  status: "active" | "inactive";
}

export interface CafeFlowUpdateComboRuleOutput {
  comboRuleId: string;
}

export interface CafeFlowDeleteComboRuleInput {
  comboRuleId?: string;
  menuItemId?: string;
  name: string;
  description?: string;
  priceDifference: number;
  status: "active" | "inactive";
}

export interface CafeFlowDeleteComboRuleOutput {
  comboRuleId: string;
}
