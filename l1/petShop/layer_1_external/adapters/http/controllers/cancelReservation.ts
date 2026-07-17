/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/cancelReservation.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { cancelReservation, type CancelReservationInput } from '/_102049_/l1/petShop/layer_2_application/usecases/cancelReservation.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/cancelReservation.js';

export const petShopCancelReservationHandler: BffHandler = async ({ request, ctx }) => {
const params = (request.params ?? {}) as Partial<CancelReservationInput>;
if (!params.reservationId) {
throw new AppError('VALIDATION_ERROR', 'reservationId is required', 400, { field: 'reservationId' });
}
const input: CancelReservationInput = {
reservationId: params.reservationId,
cancelReason: params.cancelReason,
};
const result = await cancelReservation(ctx, input);
return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
{ key: 'petShop.reservationLifecycle.cancelReservation', handler: petShopCancelReservationHandler },
];
