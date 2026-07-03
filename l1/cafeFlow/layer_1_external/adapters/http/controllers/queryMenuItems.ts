/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryMenuItems.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryMenuItems, type QueryMenuItemsInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/queryMenuItems.js';

export const cafeFlowQueryMenuItemsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<QueryMenuItemsInput>;

  const input: QueryMenuItemsInput = {
    categoryFilter: params.categoryFilter,
    nameFilter: params.nameFilter,
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await queryMenuItems(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.queryMenuItems.queryMenuItems', handler: cafeFlowQueryMenuItemsHandler },
];
