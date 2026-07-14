/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProductCatalog.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseProductCatalog, type BrowseProductCatalogInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseProductCatalog.js';

export const petShopBrowseProductCatalogHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<BrowseProductCatalogInput>;

  // Only client boundary fields (userInput): searchName and productCategoryId.
  // status=active is a systemDefault resolved inside the usecase — not sent by the client.
  const input: BrowseProductCatalogInput = {
    searchName: params.searchName,
    productCategoryId: params.productCategoryId,
  };

  const result = await browseProductCatalog(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseProductCatalog.browseProductCatalog', handler: petShopBrowseProductCatalogHandler },
];
