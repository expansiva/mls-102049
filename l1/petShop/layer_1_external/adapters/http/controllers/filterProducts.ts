/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/filterProducts.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { filterProducts, type FilterProductsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/filterProducts.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/filterProducts.js';

export const petShopFilterProductsHandler: BffHandler = async ({ request, ctx }) => {
const params = (request.params ?? {}) as Partial<FilterProductsInput>;

const input: FilterProductsInput = {
petTypeId: params.petTypeId,
categoryId: params.categoryId,
minPrice: params.minPrice,
maxPrice: params.maxPrice,
};

const result = await filterProducts(ctx, input);
return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
{ key: 'petShop.filterProducts.filterProducts', handler: petShopFilterProductsHandler },
];
