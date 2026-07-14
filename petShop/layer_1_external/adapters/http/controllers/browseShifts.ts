/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseShifts.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseShifts, type BrowseShiftsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseShifts.js';

export const petShopBrowseShiftsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<BrowseShiftsInput>;

  // Only activeFilter is a genuine client boundary input (source: userInput).
  // actorId is resolved from the actor session inside the usecase — not forwarded here.
  const input: BrowseShiftsInput = {
    activeFilter: params.activeFilter,
  };

  const result = await browseShifts(ctx, input);
  return ok(result.shifts);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseShifts.browseShifts', handler: petShopBrowseShiftsHandler },
];
