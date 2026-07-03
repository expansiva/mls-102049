/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateComboRule.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateComboRule, type UpdateComboRuleInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/updateComboRule.js';

export const cafeFlowUpdateComboRuleHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateComboRuleInput;

  if (!input || !input.comboRuleId) {
    throw new AppError('VALIDATION_ERROR', 'comboRuleId is required', 400, { field: 'comboRuleId' });
  }
  if (!input.name) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (input.priceDifference === undefined || input.priceDifference === null) {
    throw new AppError('VALIDATION_ERROR', 'priceDifference is required', 400, { field: 'priceDifference' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateComboRule(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.updateComboRule.updateComboRule', handler: cafeFlowUpdateComboRuleHandler },
];
