/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/searchProducts.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { searchProducts, type SearchProductsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/searchProducts.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/searchProducts.js';

export const petShopSearchProductsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<SearchProductsInput>;

  if (!params.searchTerm || typeof params.searchTerm !== 'string' || params.searchTerm.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'searchTerm is required', 400, { field: 'searchTerm' });
  }

  const input: SearchProductsInput = {
    searchTerm: params.searchTerm,
    petTypeId: params.petTypeId,
    categoryId: params.categoryId,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
  };

  const result = await searchProducts(ctx, input);

  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.searchProducts.searchProducts', handler: petShopSearchProductsHandler },
];
