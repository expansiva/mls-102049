/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateComboRuleInput, CafeFlowCreateComboRuleOutput, CafeFlowDeleteComboRuleInput, CafeFlowDeleteComboRuleOutput, CafeFlowQueryComboRulesInput, CafeFlowQueryComboRulesOutput, CafeFlowQueryComboRulesOutputItem, CafeFlowUpdateComboRuleInput, CafeFlowUpdateComboRuleOutput } from './ws-manager-combo-rules.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowQueryComboRulesInput = {
  comboRuleId?: string;
  menuItemId?: string;
  name?: string;
  status?: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowQueryComboRulesOutputItem = {
  comboRuleId: string;
  menuItemId: string;
  name: string;
  description: string;
  priceDifference: number;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowQueryComboRulesOutput = ExpectedCafeFlowQueryComboRulesOutputItem[];
type ExpectedCafeFlowCreateComboRuleInput = {
  name: string;
  description?: string;
  priceDifference: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowCreateComboRuleOutput = {
  comboRuleId: string;
};
type ExpectedCafeFlowUpdateComboRuleInput = {
  name: string;
  description?: string;
  priceDifference: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowUpdateComboRuleOutput = {
  comboRuleId: string;
};
type ExpectedCafeFlowDeleteComboRuleInput = {
  comboRuleId?: string;
  menuItemId?: string;
  name: string;
  description?: string;
  priceDifference: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowDeleteComboRuleOutput = {
  comboRuleId: string;
};

type _CafeFlowQueryComboRulesInput = Assert<Equal<CafeFlowQueryComboRulesInput, ExpectedCafeFlowQueryComboRulesInput>>;
type _CafeFlowQueryComboRulesOutputItem = Assert<Equal<CafeFlowQueryComboRulesOutputItem, ExpectedCafeFlowQueryComboRulesOutputItem>>;
type _CafeFlowQueryComboRulesOutput = Assert<Equal<CafeFlowQueryComboRulesOutput, ExpectedCafeFlowQueryComboRulesOutput>>;
type _CafeFlowCreateComboRuleInput = Assert<Equal<CafeFlowCreateComboRuleInput, ExpectedCafeFlowCreateComboRuleInput>>;
type _CafeFlowCreateComboRuleOutput = Assert<Equal<CafeFlowCreateComboRuleOutput, ExpectedCafeFlowCreateComboRuleOutput>>;
type _CafeFlowUpdateComboRuleInput = Assert<Equal<CafeFlowUpdateComboRuleInput, ExpectedCafeFlowUpdateComboRuleInput>>;
type _CafeFlowUpdateComboRuleOutput = Assert<Equal<CafeFlowUpdateComboRuleOutput, ExpectedCafeFlowUpdateComboRuleOutput>>;
type _CafeFlowDeleteComboRuleInput = Assert<Equal<CafeFlowDeleteComboRuleInput, ExpectedCafeFlowDeleteComboRuleInput>>;
type _CafeFlowDeleteComboRuleOutput = Assert<Equal<CafeFlowDeleteComboRuleOutput, ExpectedCafeFlowDeleteComboRuleOutput>>;

export {};