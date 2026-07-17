/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/expireReservations.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { expireReservations, type ExpireReservationsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/expireReservations.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/expireReservations.js';

export const petShopExpireReservationsHandler: BffHandler = async ({ ctx }) => {
  // All input contract fields (currentTimestamp, actorId) are resolved from systemDefault and
  // actorSession respectively — they are NOT client boundary inputs. The usecase resolves them
  // from ctx.clock and ctx.sessionContext, so the controller sends an empty input.
  const input: ExpireReservationsInput = {};

  const result = await expireReservations(ctx, input);

  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.reservationLifecycle.expireReservations', handler: petShopExpireReservationsHandler },
];
