/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteComboRule.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { deleteComboRule, type DeleteComboRuleInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/deleteComboRule.js';

export const cafeFlowDeleteComboRuleHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DeleteComboRuleInput;

  if (!input || !input.comboRuleId) {
    throw new AppError('VALIDATION_ERROR', 'comboRuleId is required', 400, { field: 'comboRuleId' });
  }

  const result = await deleteComboRule(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.deleteComboRule.deleteComboRule', handler: cafeFlowDeleteComboRuleHandler },
];
