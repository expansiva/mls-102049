/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createOperator.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createOperator, type CreateOperatorInput } from '/_102049_/l1/petShop/layer_2_application/usecases/createOperator.js';

export const petShopCreateOperatorHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<CreateOperatorInput>;

  if (!params.name || params.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }

  if (typeof params.active !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'active is required', 400, { field: 'active' });
  }

  const input: CreateOperatorInput = {
    name: params.name,
    email: params.email,
    phone: params.phone,
    active: params.active,
  };

  const result = await createOperator(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.createOperator.createOperator', handler: petShopCreateOperatorHandler },
];
