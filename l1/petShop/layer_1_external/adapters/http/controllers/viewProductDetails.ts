/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewProductDetails.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewProductDetails, type ViewProductDetailsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewProductDetails.js';

export const petShopViewProductDetailsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<ViewProductDetailsInput>;

  if (!params.productId) {
    throw new AppError('VALIDATION_ERROR', 'productId is required', 400, { field: 'productId' });
  }

  const input: ViewProductDetailsInput = {
    productId: params.productId,
  };

  const result = await viewProductDetails(ctx, input);

  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.viewProductDetails.viewProductDetails', handler: petShopViewProductDetailsHandler },
];
