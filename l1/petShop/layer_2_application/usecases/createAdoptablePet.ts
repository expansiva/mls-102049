/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createAdoptablePet.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IAdoptablePetRepository } from '/_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.js';
import type { AdoptablePet } from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';
import {
  adoptablePetAgeIsValid,
  adoptablePetIsVisibleInGallery,
  validateAdoptablePetInvariants,
} from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';
export interface CreateAdoptablePetInput {
  name: string;
  age: number;
  description: string;
  photoUrl: string;
}
export interface CreateAdoptablePetOutput {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: string;
  createdAt: string;
}
const PLATFORM_MEDIA_BASE_URL = 'https://media.';
function validatePhotoUrl(photoUrl: string): void {
  if (!photoUrl || !photoUrl.startsWith(PLATFORM_MEDIA_BASE_URL)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'petImageUsesPlatformStorage: a foto do pet deve estar hospedada no armazenamento de mídia da plataforma (URL iniciando com https://media.).',
      400,
      { ruleId: 'petImageUsesPlatformStorage', photoUrl },
    );
  }
}
export async function createAdoptablePet(
  ctx: RequestContext,
  input: CreateAdoptablePetInput,
): Promise<CreateAdoptablePetOutput> {
  // 1. Validate required user inputs
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'O nome do pet é obrigatório.', 400, { field: 'name' });
  }
  if (!adoptablePetAgeIsValid(input.age)) {
    throw new AppError('VALIDATION_ERROR', 'A idade do pet deve ser um número não-negativo.', 400, { field: 'age' });
  }
  if (!input.description || input.description.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'A descrição do pet é obrigatória.', 400, { field: 'description' });
  }
  if (!input.photoUrl || input.photoUrl.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'A URL da foto do pet é obrigatória.', 400, { field: 'photoUrl' });
  }
  // 2. Apply rule petImageUsesPlatformStorage
  validatePhotoUrl(input.photoUrl);
  // 3. Resolve system defaults
  const now = ctx.clock.nowIso();
  const adoptablePetId = ctx.idGenerator.newId();
  // 4. Build the AdoptablePet aggregate
  // Rule onlyAvailablePetsShownInGallery: new pets are created with status 'available'
  // so they appear in the public gallery immediately.
  const pet: AdoptablePet = {
    adoptablePetId,
    name: input.name,
    age: input.age,
    description: input.description,
    photoUrl: input.photoUrl,
    status: 'available',
    createdAt: now,
    updatedAt: now,
  };
  // Enforce rule onlyAvailablePetsShownInGallery: the created pet must be visible in the gallery.
  if (!adoptablePetIsVisibleInGallery(pet)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'onlyAvailablePetsShownInGallery: o pet deve ser criado com status "available" para aparecer na galeria pública.',
      400,
      { ruleId: 'onlyAvailablePetsShownInGallery', status: pet.status },
    );
  }
  // Validate domain invariants
  const violations = validateAdoptablePetInvariants(pet);
  if (violations.length > 0) {
    throw new AppError('VALIDATION_ERROR', `Violações de invariantes: ${violations.join(', ')}`, 400, { violations });
  }
  // 5. Persist inside a single transaction
  await ctx.data.runInTransaction(async () => {
    const repo = resolveRepository<IAdoptablePetRepository>(ctx, 'AdoptablePet');
    await repo.save(pet);
  });
  // 6. Return projected output fields
  return {
    adoptablePetId: pet.adoptablePetId,
    name: pet.name,
    age: pet.age,
    description: pet.description,
    photoUrl: pet.photoUrl,
    status: pet.status,
    createdAt: pet.createdAt,
  };
}
