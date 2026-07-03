/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTable.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateTable, type UpdateTableInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/updateTable.js';

export const cafeFlowUpdateTableHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateTableInput;

  if (!input || !input.tableId) {
    throw new AppError('VALIDATION_ERROR', 'tableId is required', 400, { field: 'tableId' });
  }
  if (!input.number) {
    throw new AppError('VALIDATION_ERROR', 'number is required', 400, { field: 'number' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateTable(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.updateTable.updateTable', handler: cafeFlowUpdateTableHandler },
];
