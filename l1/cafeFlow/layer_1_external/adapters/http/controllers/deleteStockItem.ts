/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteStockItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { deleteStockItem, type DeleteStockItemInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.js';

export const cafeFlowDeleteStockItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DeleteStockItemInput;

  if (!input || !input.stockItemId) {
    throw new AppError('VALIDATION_ERROR', 'stockItemId is required', 400, { field: 'stockItemId' });
  }

  const result = await deleteStockItem(ctx, input);

  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.deleteStockItem.deleteStockItem', handler: cafeFlowDeleteStockItemHandler },
];
