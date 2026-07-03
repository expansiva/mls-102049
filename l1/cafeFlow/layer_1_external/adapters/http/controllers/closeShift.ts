/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/closeShift.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { closeShift, type CloseShiftInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/closeShift.js';

export const cafeFlowCloseShiftHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CloseShiftInput;

  if (!input || !input.shiftId) {
    throw new AppError('VALIDATION_ERROR', 'shiftId is required', 400, { field: 'shiftId' });
  }

  const result = await closeShift(ctx, input);

  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.dailyShiftLifecycle.closeShift', handler: cafeFlowCloseShiftHandler },
];
