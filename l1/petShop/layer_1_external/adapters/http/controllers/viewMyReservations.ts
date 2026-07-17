/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewMyReservations.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewMyReservations, type ViewMyReservationsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/viewMyReservations.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewMyReservations.js';

export const petShopViewMyReservationsHandler: BffHandler = async ({ ctx }) => {
  // No client boundary inputs — customerId is resolved from actorSession inside the usecase.
  const input: ViewMyReservationsInput = {};
  const result = await viewMyReservations(ctx, input);
  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.viewMyReservations.viewMyReservations', handler: petShopViewMyReservationsHandler },
];
