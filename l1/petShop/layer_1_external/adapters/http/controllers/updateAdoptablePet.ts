/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateAdoptablePet.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateAdoptablePet, type UpdateAdoptablePetInput } from '/_102049_/l1/petShop/layer_2_application/usecases/updateAdoptablePet.js';

export const petShopUpdateAdoptablePetHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<UpdateAdoptablePetInput>;

  // Validate only genuine client boundary inputs (selectedEntity + userInput).
  // updatedAt is systemDefault — resolved inside the usecase, NOT sent by the client.

  if (!params.adoptablePetId) {
    throw new AppError('VALIDATION_ERROR', 'adoptablePetId is required', 400, { field: 'adoptablePetId' });
  }
  if (!params.name || params.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (params.age === undefined || params.age === null) {
    throw new AppError('VALIDATION_ERROR', 'age is required', 400, { field: 'age' });
  }
  if (!params.description || params.description.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (!params.photoUrl) {
    throw new AppError('VALIDATION_ERROR', 'photoUrl is required', 400, { field: 'photoUrl' });
  }
  if (!params.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: UpdateAdoptablePetInput = {
    adoptablePetId: params.adoptablePetId,
    name: params.name,
    age: params.age,
    description: params.description,
    photoUrl: params.photoUrl,
    status: params.status,
  };

  const result = await updateAdoptablePet(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.updateAdoptablePet.updateAdoptablePet', handler: petShopUpdateAdoptablePetHandler },
];
