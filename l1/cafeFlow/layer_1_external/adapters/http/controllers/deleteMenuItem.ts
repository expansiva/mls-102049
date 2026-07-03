/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteMenuItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { deleteMenuItem, type DeleteMenuItemInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.js';

export const cafeFlowDeleteMenuItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DeleteMenuItemInput;

  if (!input || !input.menuItemId) {
    throw new AppError('VALIDATION_ERROR', 'menuItemId is required', 400, { field: 'menuItemId' });
  }

  const result = await deleteMenuItem(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.deleteMenuItem.deleteMenuItem', handler: cafeFlowDeleteMenuItemHandler },
];
