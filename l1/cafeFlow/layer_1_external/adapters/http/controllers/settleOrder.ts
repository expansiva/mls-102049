/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/settleOrder.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { settleOrder, type SettleOrderInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/settleOrder.js';

export const cafeFlowSettleOrderHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as SettleOrderInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }

  const result = await settleOrder(ctx, input);

  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.orderLifecycle.settleOrder', handler: cafeFlowSettleOrderHandler },
];
