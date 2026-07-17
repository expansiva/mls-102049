/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createProduct.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createProduct, type CreateProductInput } from '/_102049_/l1/petShop/layer_2_application/usecases/createProduct.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/createProduct.js';

export const petShopCreateProductHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<CreateProductInput>;

  if (!params.name || !params.name.trim()) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (params.price === undefined || params.price === null) {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }
  if (!params.petTypeId || !params.petTypeId.trim()) {
    throw new AppError('VALIDATION_ERROR', 'petTypeId is required', 400, { field: 'petTypeId' });
  }
  if (!params.categoryId || !params.categoryId.trim()) {
    throw new AppError('VALIDATION_ERROR', 'categoryId is required', 400, { field: 'categoryId' });
  }
  if (typeof params.highlighted !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'highlighted is required', 400, { field: 'highlighted' });
  }
  if (!params.status || !params.status.trim()) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: CreateProductInput = {
    name: params.name,
    description: params.description,
    price: params.price,
    petTypeId: params.petTypeId,
    categoryId: params.categoryId,
    highlighted: params.highlighted,
    status: params.status,
  };

  const result = await createProduct(ctx, input);

  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.createProduct.createProduct', handler: petShopCreateProductHandler },
];
