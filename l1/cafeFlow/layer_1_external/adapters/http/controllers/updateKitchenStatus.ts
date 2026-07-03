/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateKitchenStatus.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateKitchenStatus, type UpdateKitchenStatusInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/updateKitchenStatus.js';

export const cafeFlowUpdateKitchenStatusHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateKitchenStatusInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }

  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateKitchenStatus(ctx, input);

  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.orderLifecycle.updateKitchenStatus', handler: cafeFlowUpdateKitchenStatusHandler },
];
