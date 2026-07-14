/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseOperators.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseOperators, type BrowseOperatorsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseOperators.js';

export const petShopBrowseOperatorsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<BrowseOperatorsInput>;

  // Only activeFilter is a genuine client boundary input (source: userInput).
  // actorId is resolved from ctx.sessionContext.actorSession inside the usecase.
  const input: BrowseOperatorsInput = {
    activeFilter: params.activeFilter,
  };

  const result = await browseOperators(ctx, input);
  return ok(result.operators);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseOperators.browseOperators', handler: petShopBrowseOperatorsHandler },
];
