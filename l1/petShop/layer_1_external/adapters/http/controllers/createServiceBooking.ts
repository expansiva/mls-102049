/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createServiceBooking.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createServiceBooking, type CreateServiceBookingInput } from '/_102049_/l1/petShop/layer_2_application/usecases/createServiceBooking.js';

export const petShopCreateServiceBookingHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<CreateServiceBookingInput>;

  if (!params.serviceId) {
    throw new AppError('VALIDATION_ERROR', 'serviceId is required', 400, { field: 'serviceId' });
  }
  if (!params.customerName) {
    throw new AppError('VALIDATION_ERROR', 'customerName is required', 400, { field: 'customerName' });
  }
  if (!params.customerPhone) {
    throw new AppError('VALIDATION_ERROR', 'customerPhone is required', 400, { field: 'customerPhone' });
  }
  if (!params.bookingDate) {
    throw new AppError('VALIDATION_ERROR', 'bookingDate is required', 400, { field: 'bookingDate' });
  }
  if (!params.bookingTime) {
    throw new AppError('VALIDATION_ERROR', 'bookingTime is required', 400, { field: 'bookingTime' });
  }

  const input: CreateServiceBookingInput = {
    serviceId: params.serviceId,
    customerName: params.customerName,
    customerPhone: params.customerPhone,
    bookingDate: params.bookingDate,
    bookingTime: params.bookingTime,
    notes: params.notes,
  };

  const result = await createServiceBooking(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.serviceBookingLifecycle.createServiceBooking', handler: petShopCreateServiceBookingHandler },
];
