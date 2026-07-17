/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/payInStore.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { payInStore, type PayInStoreInput } from '/_102049_/l1/petShop/layer_2_application/usecases/payInStore.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/payInStore.js';

export const petShopPayInStoreHandler: BffHandler = async ({ request, ctx }) => {
const params = (request.params ?? {}) as Partial<PayInStoreInput>;

if (!params.reservationId) {
throw new AppError('VALIDATION_ERROR', 'reservationId is required', 400, { field: 'reservationId' });
}
if (!params.paymentMethod) {
throw new AppError('VALIDATION_ERROR', 'paymentMethod is required', 400, { field: 'paymentMethod' });
}
if (params.paymentAmount === undefined || params.paymentAmount === null) {
throw new AppError('VALIDATION_ERROR', 'paymentAmount is required', 400, { field: 'paymentAmount' });
}

const input: PayInStoreInput = {
reservationId: params.reservationId,
paymentMethod: params.paymentMethod,
paymentAmount: params.paymentAmount,
};

const result = await payInStore(ctx, input);
return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
{ key: 'petShop.reservationLifecycle.payInStore', handler: petShopPayInStoreHandler },
];
