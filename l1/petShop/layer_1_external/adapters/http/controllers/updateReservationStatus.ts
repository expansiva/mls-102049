/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateReservationStatus.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateReservationStatus, type UpdateReservationStatusInput } from '/_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/updateReservationStatus.js';

export const petShopUpdateReservationStatusHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<UpdateReservationStatusInput>;

  if (!params.reservationId) {
    throw new AppError('VALIDATION_ERROR', 'reservationId is required', 400, { field: 'reservationId' });
  }
  if (!params.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: UpdateReservationStatusInput = {
    reservationId: params.reservationId,
    status: params.status,
    cancelReason: params.cancelReason,
    paymentId: params.paymentId,
  };

  const result = await updateReservationStatus(ctx, input);

  return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.reservationLifecycle.updateReservationStatus', handler: petShopUpdateReservationStatusHandler },
];
