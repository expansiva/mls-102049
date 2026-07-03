/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryComboRules.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryComboRules, type QueryComboRulesInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/queryComboRules.js';

export const cafeFlowQueryComboRulesHandler: BffHandler = async ({ request, ctx }) => {
  const input = (request.params ?? {}) as QueryComboRulesInput;

  // Boundary validation: status, if provided, must be a non-empty string
  if (input.status !== undefined && input.status !== null) {
    if (typeof input.status !== 'string' || input.status.trim() === '') {
      throw new AppError('VALIDATION_ERROR', 'status must be a non-empty string when provided', 400, { field: 'status' });
    }
  }

  // Boundary validation: nameContains, if provided, must be a non-empty string
  if (input.nameContains !== undefined && input.nameContains !== null) {
    if (typeof input.nameContains !== 'string' || input.nameContains.trim() === '') {
      throw new AppError('VALIDATION_ERROR', 'nameContains must be a non-empty string when provided', 400, { field: 'nameContains' });
    }
  }

  const result = await queryComboRules(ctx, input);
  return ok(result.rules);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.queryComboRules.queryComboRules', handler: cafeFlowQueryComboRulesHandler },
];
