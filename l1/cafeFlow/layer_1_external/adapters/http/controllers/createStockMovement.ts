/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockMovement.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createStockMovement, type CreateStockMovementInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/createStockMovement.js';

export const cafeFlowCreateStockMovementHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateStockMovementInput;

  if (!input || !input.stockItemId) {
    throw new AppError('VALIDATION_ERROR', 'stockItemId is required', 400, { field: 'stockItemId' });
  }
  if (input.quantity === undefined || input.quantity === null) {
    throw new AppError('VALIDATION_ERROR', 'quantity is required', 400, { field: 'quantity' });
  }
  if (!input.reason) {
    throw new AppError('VALIDATION_ERROR', 'reason is required', 400, { field: 'reason' });
  }
  if (!input.movementType) {
    throw new AppError('VALIDATION_ERROR', 'movementType is required', 400, { field: 'movementType' });
  }

  const result = await createStockMovement(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.orderLifecycle.createStockMovement', handler: cafeFlowCreateStockMovementHandler },
];
