/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewAdoptablePetDetails.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import '/_102049_/l1/petShop/layer_1_external/adapters/persistence/registerRepositories.js';
import { viewAdoptablePetDetails, type ViewAdoptablePetDetailsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/viewAdoptablePetDetails.js';

export const petShopViewAdoptablePetDetailsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<ViewAdoptablePetDetailsInput>;

  if (!params.adoptablePetId) {
    throw new AppError('VALIDATION_ERROR', 'adoptablePetId is required', 400, { field: 'adoptablePetId' });
  }

  const input: ViewAdoptablePetDetailsInput = {
    adoptablePetId: params.adoptablePetId,
  };

  const result = await viewAdoptablePetDetails(ctx, input);

  if (!result) {
    throw new AppError('NOT_FOUND', 'Adoptable pet not found or not available', 404, { adoptablePetId: input.adoptablePetId });
  }

  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.viewAdoptablePetDetails.viewAdoptablePetDetails', handler: petShopViewAdoptablePetDetailsHandler },
];
