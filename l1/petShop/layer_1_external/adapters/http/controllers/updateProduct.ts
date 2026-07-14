/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateProduct.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateProduct, type UpdateProductInput } from '/_102049_/l1/petShop/layer_2_application/usecases/updateProduct.js';

export const petShopUpdateProductHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<UpdateProductInput>;

  // Validate required client boundary fields (selectedEntity + userInput sources)
  if (!params.productId) {
    throw new AppError('VALIDATION_ERROR', 'productId is required', 400, { field: 'productId' });
  }
  if (!params.name) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (params.price === undefined || params.price === null) {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }
  if (!params.productCategoryId) {
    throw new AppError('VALIDATION_ERROR', 'productCategoryId is required', 400, { field: 'productCategoryId' });
  }
  if (params.featured === undefined || params.featured === null) {
    throw new AppError('VALIDATION_ERROR', 'featured is required', 400, { field: 'featured' });
  }
  if (!params.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  // Build explicit input with only client boundary fields — updatedAt is resolved by the usecase (systemDefault)
  const input: UpdateProductInput = {
    productId: params.productId,
    name: params.name,
    description: params.description,
    price: params.price,
    imageUrl: params.imageUrl,
    productCategoryId: params.productCategoryId,
    featured: params.featured,
    status: params.status,
  };

  const result = await updateProduct(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.updateProduct.updateProduct', handler: petShopUpdateProductHandler },
];
