/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/completeServiceExecution.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { completeServiceExecution, type CompleteServiceExecutionInput } from '/_102049_/l1/petShop/layer_2_application/usecases/completeServiceExecution.js';

export const petShopCompleteServiceExecutionHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<CompleteServiceExecutionInput>;

  // Only serviceBookingId is a genuine client boundary input (source: selectedEntity).
  // operatorId (actorSession) and completedAt (systemDefault) are resolved inside the usecase from ctx.
  if (!params.serviceBookingId) {
    throw new AppError('VALIDATION_ERROR', 'serviceBookingId is required', 400, { field: 'serviceBookingId' });
  }

  const input: CompleteServiceExecutionInput = {
    serviceBookingId: params.serviceBookingId,
  };

  const result = await completeServiceExecution(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.serviceBookingLifecycle.completeServiceExecution', handler: petShopCompleteServiceExecutionHandler },
];
