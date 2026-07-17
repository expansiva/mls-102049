/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProducts.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseProducts, type BrowseProductsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseProducts.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/browseProducts.js';

export const petShopBrowseProductsHandler: BffHandler = async ({ request, ctx }) => {
const params = (request.params ?? {}) as Partial<BrowseProductsInput>;
const input: BrowseProductsInput = {
searchTerm: params.searchTerm,
petTypeId: params.petTypeId,
categoryId: params.categoryId,
priceMin: params.priceMin,
priceMax: params.priceMax,
status: params.status,
highlighted: params.highlighted,
};
const result = await browseProducts(ctx, input);
return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
{ key: 'petShop.browseProducts.browseProducts', handler: petShopBrowseProductsHandler },
];
