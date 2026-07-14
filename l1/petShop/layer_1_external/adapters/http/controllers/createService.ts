/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createService.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createService, type CreateServiceInput } from '/_102049_/l1/petShop/layer_2_application/usecases/createService.js';

export const petShopCreateServiceHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<CreateServiceInput>;

  if (!params.name || params.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!params.description || params.description.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (params.estimatedDurationMinutes === undefined || params.estimatedDurationMinutes === null) {
    throw new AppError('VALIDATION_ERROR', 'estimatedDurationMinutes is required', 400, { field: 'estimatedDurationMinutes' });
  }
  if (params.price === undefined || params.price === null) {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }

  const input: CreateServiceInput = {
    name: params.name,
    description: params.description,
    estimatedDurationMinutes: params.estimatedDurationMinutes,
    price: params.price,
  };

  const result = await createService(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.createService.createService', handler: petShopCreateServiceHandler },
];
