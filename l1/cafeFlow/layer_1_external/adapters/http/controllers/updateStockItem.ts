/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateStockItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateStockItem, type UpdateStockItemInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.js';

export const cafeFlowUpdateStockItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateStockItemInput;

  if (!input || !input.stockItemId) {
    throw new AppError('VALIDATION_ERROR', 'stockItemId is required', 400, { field: 'stockItemId' });
  }
  if (!input.name) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!input.unitOfMeasure) {
    throw new AppError('VALIDATION_ERROR', 'unitOfMeasure is required', 400, { field: 'unitOfMeasure' });
  }
  if (input.minimumQuantity === undefined || input.minimumQuantity === null) {
    throw new AppError('VALIDATION_ERROR', 'minimumQuantity is required', 400, { field: 'minimumQuantity' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateStockItem(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.updateStockItem.updateStockItem', handler: cafeFlowUpdateStockItemHandler },
];
