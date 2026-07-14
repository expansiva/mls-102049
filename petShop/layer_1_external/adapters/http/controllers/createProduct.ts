/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createProduct.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createProduct, type CreateProductInput } from '/_102049_/l1/petShop/layer_2_application/usecases/createProduct.js';

export const petShopCreateProductHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<CreateProductInput>;

  // Validate only genuine client inputs (source: userInput)
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

  // Build an explicit input with only the client fields — systemDefault fields
  // (productId, status, createdAt, updatedAt) are resolved inside the usecase.
  const input: CreateProductInput = {
    name: params.name,
    description: params.description,
    price: params.price,
    imageUrl: params.imageUrl,
    productCategoryId: params.productCategoryId,
    featured: params.featured,
  };

  const result = await createProduct(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.createProduct.createProduct', handler: petShopCreateProductHandler },
];
