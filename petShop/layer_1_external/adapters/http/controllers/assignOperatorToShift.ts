/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/assignOperatorToShift.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { assignOperatorToShift, type AssignOperatorToShiftInput } from '/_102049_/l1/petShop/layer_2_application/usecases/assignOperatorToShift.js';

export const petShopAssignOperatorToShiftHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<AssignOperatorToShiftInput>;

  if (!params.operatorId) {
    throw new AppError('VALIDATION_ERROR', 'operatorId is required', 400, { field: 'operatorId' });
  }
  if (!params.shiftId) {
    throw new AppError('VALIDATION_ERROR', 'shiftId is required', 400, { field: 'shiftId' });
  }

  const input: AssignOperatorToShiftInput = {
    operatorId: params.operatorId,
    shiftId: params.shiftId,
  };

  const result = await assignOperatorToShift(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.assignOperatorToShift.assignOperatorToShift', handler: petShopAssignOperatorToShiftHandler },
];
