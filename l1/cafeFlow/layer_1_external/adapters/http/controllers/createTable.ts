/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createTable.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createTable, type CreateTableInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/createTable.js';

export const cafeFlowCreateTableHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateTableInput;

  if (!input || !input.number || input.number.trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'number is required', 400, { field: 'number' });
  }

  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await createTable(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.createTable.createTable', handler: cafeFlowCreateTableHandler },
];
