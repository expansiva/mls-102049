/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewOperatorSchedule.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewOperatorSchedule, type ViewOperatorScheduleInput } from '/_102049_/l1/petShop/layer_2_application/usecases/viewOperatorSchedule.js';

export const petShopViewOperatorScheduleHandler: BffHandler = async ({ ctx }) => {
  // operatorId is resolved from ctx.sessionContext.actorSession.actorId inside the usecase
  // (source: actorSession — not a public client boundary input). The Input type is empty.
  const input: ViewOperatorScheduleInput = {};
  const result = await viewOperatorSchedule(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.viewOperatorSchedule.viewOperatorSchedule', handler: petShopViewOperatorScheduleHandler },
];
