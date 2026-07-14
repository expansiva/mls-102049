/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseServiceCatalog.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseServiceCatalog, type BrowseServiceCatalogInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseServiceCatalog.js';

export const petShopBrowseServiceCatalogHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<BrowseServiceCatalogInput>;

  const input: BrowseServiceCatalogInput = {
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await browseServiceCatalog(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseServiceCatalog.browseServiceCatalog', handler: petShopBrowseServiceCatalogHandler },
];
