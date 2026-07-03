/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createOrder.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createOrder, type CreateOrderInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/createOrder.js';

export const cafeFlowCreateOrderHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateOrderInput;

  if (!input || !input.orderType) {
    throw new AppError('VALIDATION_ERROR', 'orderType is required', 400, { field: 'orderType' });
  }

  if (!input.items || !Array.isArray(input.items) || input.items.length === 0) {
    throw new AppError('VALIDATION_ERROR', 'items is required and must be a non-empty array', 400, { field: 'items' });
  }

  const result = await createOrder(ctx, input);

  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.orderLifecycle.createOrder', handler: cafeFlowCreateOrderHandler },
];
