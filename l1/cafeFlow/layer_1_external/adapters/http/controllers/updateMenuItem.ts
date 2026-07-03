/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateMenuItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateMenuItem, type UpdateMenuItemInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.js';

export const cafeFlowUpdateMenuItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateMenuItemInput;

  if (!input || !input.menuItemId) {
    throw new AppError('VALIDATION_ERROR', 'menuItemId is required', 400, { field: 'menuItemId' });
  }
  if (!input.name) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!input.category) {
    throw new AppError('VALIDATION_ERROR', 'category is required', 400, { field: 'category' });
  }
  if (input.price === undefined || input.price === null) {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateMenuItem(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.updateMenuItem.updateMenuItem', handler: cafeFlowUpdateMenuItemHandler },
];
