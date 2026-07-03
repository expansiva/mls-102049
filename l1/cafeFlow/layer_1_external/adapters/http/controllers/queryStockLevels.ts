/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockLevels.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryStockLevels, type QueryStockLevelsInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockLevels.js';

export const cafeFlowQueryStockLevelsHandler: BffHandler = async ({ request, ctx }) => {
  const input = (request.params ?? {}) as QueryStockLevelsInput;
  const result = await queryStockLevels(ctx, input);
  return ok(result.stockLevels);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.queryStockLevels.queryStockLevels', handler: cafeFlowQueryStockLevelsHandler },
];
