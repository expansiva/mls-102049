/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/catalog.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseFeaturedProducts, type BrowseFeaturedProductsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseFeaturedProducts.js';
import { browseProducts, type BrowseProductsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseProducts.js';
import { viewProductDetails, type ViewProductDetailsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.js';
import { createReservation, type CreateReservationInput } from '/_102049_/l1/petShop/layer_2_application/usecases/createReservation.js';

const ALLOWED: readonly string[] = ['petShop:cliente'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) { ctx.log.info('bff.actor.no-scope', { route, allowed }); return null; }
  if (scope.some((s) => allowed.includes(s))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

export const catalogFeaturedProductsHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'petShop.catalog.featuredProducts');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    categoryId?: string;
    petTypeId?: string;
    name?: string;
    priceMin?: number;
    priceMax?: number;
    page?: number;
    pageSize?: number;
  };
  const input: BrowseFeaturedProductsInput = {
    categoryId: params.categoryId,
    petTypeId: params.petTypeId,
    name: params.name,
    priceMin: params.priceMin,
    priceMax: params.priceMax,
    page: params.page,
    pageSize: params.pageSize,
  };
  const result = await browseFeaturedProducts(ctx, input);
  const items = (result.items ?? []).map((row) => ({
    productId: row.productId,
    name: row.name,
    price: row.price,
    isFeatured: row.isFeatured,
    categoryId: row.categoryId,
    petTypeId: row.petTypeId,
  }));
  return ok(items);
};

export const catalogBrowseCatalogHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'petShop.catalog.browseCatalog');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    searchName?: string;
    petTypeId?: string;
    categoryId?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: number;
    pageSize?: number;
  };
  const input: BrowseProductsInput = {
    searchName: params.searchName,
    petTypeId: params.petTypeId,
    categoryId: params.categoryId,
    minPrice: params.minPrice,
    maxPrice: params.maxPrice,
    page: params.page,
    pageSize: params.pageSize,
  };
  const result = await browseProducts(ctx, input);
  const items = (result.items ?? []).map((row) => ({
    productId: row.productId,
    name: row.name,
    price: row.price,
    isFeatured: row.isFeatured,
    categoryId: row.categoryId,
    categoryName: row.categoryName,
    petTypeId: row.petTypeId,
    petTypeName: row.petTypeName,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }));
  return ok({ items, total: result.total, page: result.page, pageSize: result.pageSize });
};

export const catalogProductDetailsHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'petShop.catalog.productDetails');
  if (denial) return denial;
  const params = (request.params ?? {}) as { productId?: string };
  if (!params.productId) {
    throw new AppError('VALIDATION_ERROR', 'productId is required', 400, { field: 'productId' });
  }
  const input: ViewProductDetailsInput = {
    productId: params.productId,
  };
  const result = await viewProductDetails(ctx, input);
  return ok({
    productId: result.productId,
    name: result.name,
    price: result.price,
    isFeatured: result.isFeatured,
    categoryId: result.categoryId,
    categoryName: result.categoryName,
    petTypeId: result.petTypeId,
    petTypeName: result.petTypeName,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const catalogReserveProductHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'petShop.catalog.reserveProduct');
  if (denial) return denial;
  const params = (request.params ?? {}) as {
    customerName?: string;
    customerPhone?: string;
    productId?: string;
    quantity?: number;
  };
  if (!params.customerName) {
    throw new AppError('VALIDATION_ERROR', 'customerName is required', 400, { field: 'customerName' });
  }
  if (!params.customerPhone) {
    throw new AppError('VALIDATION_ERROR', 'customerPhone is required', 400, { field: 'customerPhone' });
  }
  if (!params.productId) {
    throw new AppError('VALIDATION_ERROR', 'productId is required', 400, { field: 'productId' });
  }
  if (params.quantity === undefined || params.quantity === null) {
    throw new AppError('VALIDATION_ERROR', 'quantity is required', 400, { field: 'quantity' });
  }
  const input: CreateReservationInput = {
    customerName: params.customerName,
    customerPhone: params.customerPhone,
    productId: params.productId,
    quantity: params.quantity,
  };
  const result = await createReservation(ctx, input);
  return ok({
    reservationId: result.reservationId,
    customerName: result.customerName,
    customerPhone: result.customerPhone,
    status: result.status,
    expiresAt: result.expiresAt,
    createdAt: result.createdAt,
    items: result.items,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.catalog.featuredProducts', handler: catalogFeaturedProductsHandler },
  { key: 'petShop.catalog.browseCatalog', handler: catalogBrowseCatalogHandler },
  { key: 'petShop.catalog.productDetails', handler: catalogProductDetailsHandler },
  { key: 'petShop.catalog.reserveProduct', handler: catalogReserveProductHandler },
];
