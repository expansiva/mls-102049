/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createAdoptablePet.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createAdoptablePet, type CreateAdoptablePetInput } from '/_102049_/l1/petShop/layer_2_application/usecases/createAdoptablePet.js';

export const petShopCreateAdoptablePetHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<CreateAdoptablePetInput>;

  if (!params.name || params.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (params.age === undefined || params.age === null) {
    throw new AppError('VALIDATION_ERROR', 'age is required', 400, { field: 'age' });
  }
  if (!params.description || params.description.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (!params.photoUrl || params.photoUrl.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'photoUrl is required', 400, { field: 'photoUrl' });
  }

  const input: CreateAdoptablePetInput = {
    name: params.name,
    age: params.age,
    description: params.description,
    photoUrl: params.photoUrl,
  };

  const result = await createAdoptablePet(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.createAdoptablePet.createAdoptablePet', handler: petShopCreateAdoptablePetHandler },
];
