/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewProductDetails.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export const petShopViewProductDetailsHandler: BffHandler = async ({ request }) => {
  const params = (request.params ?? {}) as { productId?: unknown };

  if (!params.productId) {
    throw new AppError('VALIDATION_ERROR', 'productId is required', 400, { field: 'productId' });
  }

  return ok(null);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.viewProductDetails.viewProductDetails', handler: petShopViewProductDetailsHandler },
];
