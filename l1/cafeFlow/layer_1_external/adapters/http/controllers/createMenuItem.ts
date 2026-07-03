/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createMenuItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createMenuItem, type CreateMenuItemInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.js';

export const cafeFlowCreateMenuItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateMenuItemInput;

  if (!input || !input.name || input.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!input.category || input.category.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'category is required', 400, { field: 'category' });
  }
  if (input.price === undefined || input.price === null) {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await createMenuItem(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.createMenuItem.createMenuItem', handler: cafeFlowCreateMenuItemHandler },
];
