/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProducts.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseProducts, type BrowseProductsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseProducts.js';

export const petShopBrowseProductsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<BrowseProductsInput>;

  // Only genuine client inputs (source: userInput) are read from params.
  // actorSession.actorId and actorSession.scope are resolved inside the usecase from ctx.
  const input: BrowseProductsInput = {
    searchName: params.searchName,
    filterStatus: params.filterStatus,
    filterProductCategoryId: params.filterProductCategoryId,
    filterFeatured: params.filterFeatured,
  };

  const result = await browseProducts(ctx, input);
  return ok(result.products);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseProducts.browseProducts', handler: petShopBrowseProductsHandler },
];
