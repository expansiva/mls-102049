/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateOperator.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateOperator, type UpdateOperatorInput } from '/_102049_/l1/petShop/layer_2_application/usecases/updateOperator.js';

export const petShopUpdateOperatorHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<UpdateOperatorInput>;

  if (!params.operatorId || params.operatorId.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'operatorId is required', 400, { field: 'operatorId' });
  }
  if (!params.name || params.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (params.active === undefined || params.active === null) {
    throw new AppError('VALIDATION_ERROR', 'active is required', 400, { field: 'active' });
  }

  const input: UpdateOperatorInput = {
    operatorId: params.operatorId,
    name: params.name,
    email: params.email,
    phone: params.phone,
    active: params.active,
  };

  const result = await updateOperator(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.updateOperator.updateOperator', handler: petShopUpdateOperatorHandler },
];
