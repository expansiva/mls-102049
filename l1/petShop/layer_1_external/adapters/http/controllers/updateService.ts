/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateService.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateService, type UpdateServiceInput } from '/_102049_/l1/petShop/layer_2_application/usecases/updateService.js';

export const petShopUpdateServiceHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<UpdateServiceInput>;

  if (!params.serviceId) {
    throw new AppError('VALIDATION_ERROR', 'serviceId is required', 400, { field: 'serviceId' });
  }
  if (!params.name) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!params.description) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (params.estimatedDurationMinutes === undefined || params.estimatedDurationMinutes === null) {
    throw new AppError('VALIDATION_ERROR', 'estimatedDurationMinutes is required', 400, { field: 'estimatedDurationMinutes' });
  }
  if (params.price === undefined || params.price === null) {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }
  if (!params.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: UpdateServiceInput = {
    serviceId: params.serviceId,
    name: params.name,
    description: params.description,
    estimatedDurationMinutes: params.estimatedDurationMinutes,
    price: params.price,
    status: params.status,
  };

  const result = await updateService(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.updateService.updateService', handler: petShopUpdateServiceHandler },
];
