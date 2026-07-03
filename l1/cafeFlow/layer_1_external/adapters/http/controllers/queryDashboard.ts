/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryDashboard.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryDashboard, type QueryDashboardInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/queryDashboard.js';

export const cafeFlowQueryDashboardHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as QueryDashboardInput;

  if (!input || !input.shiftId) {
    throw new AppError('VALIDATION_ERROR', 'shiftId is required', 400, { field: 'shiftId' });
  }

  const result = await queryDashboard(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.dailyShiftLifecycle.queryDashboard', handler: cafeFlowQueryDashboardHandler },
];
