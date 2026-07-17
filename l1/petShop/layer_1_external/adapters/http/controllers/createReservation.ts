/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createReservation.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createReservation, type CreateReservationInput } from '/_102049_/l1/petShop/layer_2_application/usecases/createReservation.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/createReservation.js';

export const petShopCreateReservationHandler: BffHandler = async ({ request, ctx }) => {
const params = (request.params ?? {}) as Partial<CreateReservationInput>;
if (!params.items) {
throw new AppError('VALIDATION_ERROR', 'items is required', 400, { field: 'items' });
}
const input: CreateReservationInput = {
items: params.items,
};
const result = await createReservation(ctx, input);
return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
{ key: 'petShop.reservationLifecycle.createReservation', handler: petShopCreateReservationHandler },
];
