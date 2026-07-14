/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/startServiceExecution.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { startServiceExecution, type StartServiceExecutionInput } from '/_102049_/l1/petShop/layer_2_application/usecases/startServiceExecution.js';

export const petShopStartServiceExecutionHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<StartServiceExecutionInput>;

  if (!params.serviceBookingId) {
    throw new AppError('VALIDATION_ERROR', 'serviceBookingId is required', 400, { field: 'serviceBookingId' });
  }

  const input: StartServiceExecutionInput = {
    serviceBookingId: params.serviceBookingId,
  };

  const result = await startServiceExecution(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.serviceBookingLifecycle.startServiceExecution', handler: petShopStartServiceExecutionHandler },
];
