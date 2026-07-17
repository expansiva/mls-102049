/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseCatalog.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseCatalog, type BrowseCatalogInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseCatalog.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/browseCatalog.js';

export const petShopBrowseCatalogHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<Record<string, unknown>>;

  // Boundary validation — only genuine client inputs (source: userInput).
  const searchTerm = typeof params.searchTerm === 'string' ? params.searchTerm : undefined;
  const petTypeId = typeof params.petTypeId === 'string' ? params.petTypeId : undefined;
  const categoryId = typeof params.categoryId === 'string' ? params.categoryId : undefined;
  const minPrice = typeof params.minPrice === 'number' ? params.minPrice : undefined;
  const maxPrice = typeof params.maxPrice === 'number' ? params.maxPrice : undefined;

  // Pagination is required by the usecase; read from params with sensible defaults.
  const rawPage = typeof params.page === 'number' ? params.page : undefined;
  const rawPageSize = typeof params.pageSize === 'number' ? params.pageSize : undefined;
  const page = rawPage ?? 1;
  const pageSize = rawPageSize ?? 20;

  if (page < 1) {
    throw new AppError('VALIDATION_ERROR', 'page must be >= 1', 400, { field: 'page' });
  }
  if (pageSize < 1) {
    throw new AppError('VALIDATION_ERROR', 'pageSize must be >= 1', 400, { field: 'pageSize' });
  }

  const input: BrowseCatalogInput = {
    searchTerm,
    petTypeId,
    categoryId,
    minPrice,
    maxPrice,
    page,
    pageSize,
  };

  const result = await browseCatalog(ctx, input);
  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseCatalog.browseCatalog', handler: petShopBrowseCatalogHandler },
];
