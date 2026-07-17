/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateProduct.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateProduct, type UpdateProductInput } from '/_102049_/l1/petShop/layer_2_application/usecases/updateProduct.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/updateProduct.js';

export const petShopUpdateProductHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<UpdateProductInput>;

  // productId is the only required client boundary field (source: selectedEntity).
  if (!params.productId) {
    throw new AppError('VALIDATION_ERROR', 'productId is required', 400, { field: 'productId' });
  }

  // Build an EXPLICIT input with only the client-supplied fields.
  // updatedAt is resolved by the usecase (systemDefault) — NOT forwarded here.
  const input: UpdateProductInput = {
    productId: params.productId,
    ...(params.name !== undefined ? { name: params.name } : {}),
    ...(params.description !== undefined ? { description: params.description } : {}),
    ...(params.price !== undefined ? { price: params.price } : {}),
    ...(params.petTypeId !== undefined ? { petTypeId: params.petTypeId } : {}),
    ...(params.categoryId !== undefined ? { categoryId: params.categoryId } : {}),
    ...(params.highlighted !== undefined ? { highlighted: params.highlighted } : {}),
    ...(params.status !== undefined ? { status: params.status } : {}),
  };

  const result = await updateProduct(ctx, input);

  // outputSource 'dto': the adapter owns the wire shape via the single projection point toDto.
  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.updateProduct.updateProduct', handler: petShopUpdateProductHandler },
];
