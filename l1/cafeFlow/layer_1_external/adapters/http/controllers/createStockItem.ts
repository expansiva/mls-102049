/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createStockItem, type CreateStockItemInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/createStockItem.js';

export const cafeFlowCreateStockItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateStockItemInput;

  if (!input || !input.name || input.name.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!input.unitOfMeasure || input.unitOfMeasure.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'unitOfMeasure is required', 400, { field: 'unitOfMeasure' });
  }
  if (input.minimumQuantity == null || typeof input.minimumQuantity !== 'number' || isNaN(input.minimumQuantity)) {
    throw new AppError('VALIDATION_ERROR', 'minimumQuantity is required and must be a number', 400, { field: 'minimumQuantity' });
  }

  const result = await createStockItem(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.createStockItem.createStockItem', handler: cafeFlowCreateStockItemHandler },
];
