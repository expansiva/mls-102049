/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewServiceBookingDetails.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export const petShopViewServiceBookingDetailsHandler: BffHandler = async ({ request }) => {
  const params = (request.params ?? {}) as { serviceBookingId?: unknown };

  // Only routeParam-sourced fields are client boundary inputs.
  // operatorId (actorSession) is resolved inside the usecase from ctx.sessionContext.
  if (!params.serviceBookingId) {
    throw new AppError('VALIDATION_ERROR', 'serviceBookingId is required', 400, { field: 'serviceBookingId' });
  }

  return ok(null);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.viewServiceBookingDetails.viewServiceBookingDetails', handler: petShopViewServiceBookingDetailsHandler },
];
