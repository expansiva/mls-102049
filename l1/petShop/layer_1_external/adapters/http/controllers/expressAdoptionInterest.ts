/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/expressAdoptionInterest.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { expressAdoptionInterest, type ExpressAdoptionInterestInput } from '/_102049_/l1/petShop/layer_2_application/usecases/expressAdoptionInterest.js';

export const petShopExpressAdoptionInterestHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<ExpressAdoptionInterestInput>;

  if (!params.adoptablePetId) {
    throw new AppError('VALIDATION_ERROR', 'adoptablePetId is required', 400, { field: 'adoptablePetId' });
  }
  if (!params.customerName || params.customerName.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'customerName is required', 400, { field: 'customerName' });
  }
  if (!params.customerEmail || params.customerEmail.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'customerEmail is required', 400, { field: 'customerEmail' });
  }

  const input: ExpressAdoptionInterestInput = {
    adoptablePetId: params.adoptablePetId,
    customerName: params.customerName,
    customerEmail: params.customerEmail,
    customerPhone: params.customerPhone,
  };

  const result = await expressAdoptionInterest(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.expressAdoptionInterest.expressAdoptionInterest', handler: petShopExpressAdoptionInterestHandler },
];
