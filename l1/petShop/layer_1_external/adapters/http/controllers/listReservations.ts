/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/listReservations.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listReservations, type ListReservationsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/listReservations.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/listReservations.js';

export const petShopListReservationsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<ListReservationsInput>;

  // Only 'status' is a genuine client boundary input (source: userInput, optional).
  // actorSession.actorId is resolved inside the usecase from ctx — not forwarded here.
  const input: ListReservationsInput = {
    status: params.status,
  };

  const result = await listReservations(ctx, input);

  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.listReservations.listReservations', handler: petShopListReservationsHandler },
];
