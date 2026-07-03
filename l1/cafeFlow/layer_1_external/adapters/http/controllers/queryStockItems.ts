/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockItems.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryStockItems, type QueryStockItemsInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockItems.js';

export const cafeFlowQueryStockItemsHandler: BffHandler = async ({ request, ctx }) => {
  const input = (request.params ?? {}) as QueryStockItemsInput;

  // Boundary validation — both filters are optional, no required fields.
  if (input.nameFilter !== undefined && typeof input.nameFilter !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'nameFilter must be a string', 400, { field: 'nameFilter' });
  }
  if (input.statusFilter !== undefined && typeof input.statusFilter !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'statusFilter must be a string', 400, { field: 'statusFilter' });
  }

  const result = await queryStockItems(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.queryStockItems.queryStockItems', handler: cafeFlowQueryStockItemsHandler },
];
