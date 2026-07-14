/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateAdoptablePet.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IAdoptablePetRepository } from '/_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.js';
import type { AdoptablePet, AdoptablePetStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';
import {
  adoptablePetAgeIsValid,
  adoptablePetStatusIsValid,
  canTransitionAdoptablePetStatus,
  validateAdoptablePetInvariants,
} from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';

export interface UpdateAdoptablePetInput {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: string;
}

export interface UpdateAdoptablePetOutput {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: string;
  updatedAt: string;
}

const PLATFORM_STORAGE_DOMAIN_PATTERN = /^https:\/\/storage\.[a-z0-9.-]+\//i;

function isValidPlatformStorageUrl(url: string): boolean {
  return PLATFORM_STORAGE_DOMAIN_PATTERN.test(url);
}

export async function updateAdoptablePet(
  ctx: RequestContext,
  input: UpdateAdoptablePetInput,
): Promise<UpdateAdoptablePetOutput> {
  const pets = resolveRepository<IAdoptablePetRepository>(ctx, 'AdoptablePet');

  // 1. Load the AdoptablePet aggregate by adoptablePetId
  const pet = await pets.getById(input.adoptablePetId);
  if (!pet) {
    throw new AppError(
      'NOT_FOUND',
      `AdoptablePet not found: ${input.adoptablePetId}`,
      404,
      { adoptablePetId: input.adoptablePetId },
    );
  }

  // 2. Validate status is one of 'available' or 'unavailable'
  if (!adoptablePetStatusIsValid(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      "status must be 'available' or 'unavailable'",
      400,
      { ruleId: 'onlyAvailablePetsShownInGallery', status: input.status },
    );
  }

  const newStatus = input.status as AdoptablePetStatus;

  // Check status transition is allowed
  if (!canTransitionAdoptablePetStatus(pet.status, newStatus)) {
    throw new AppError(
      'CONFLICT',
      `Cannot transition status from '${pet.status}' to '${newStatus}'`,
      409,
      { ruleId: 'onlyAvailablePetsShownInGallery', from: pet.status, to: newStatus },
    );
  }

  // 3. Validate photoUrl is a platform storage URL
  if (!isValidPlatformStorageUrl(input.photoUrl)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'photoUrl must reference the platform media storage domain',
      400,
      { ruleId: 'petImageUsesPlatformStorage', photoUrl: input.photoUrl },
    );
  }

  // 4. Validate required fields
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'name must be a non-empty string',
      400,
      { field: 'name' },
    );
  }

  if (!adoptablePetAgeIsValid(input.age)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'age must be a non-negative number',
      400,
      { field: 'age', age: input.age },
    );
  }

  if (!input.description || input.description.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'description must be a non-empty string',
      400,
      { field: 'description' },
    );
  }

  // 5. Set updatedAt server-side
  const now = ctx.clock.nowIso();

  // 6. Apply updated fields to the loaded aggregate
  const updatedPet: AdoptablePet = {
    ...pet,
    name: input.name,
    age: input.age,
    description: input.description,
    photoUrl: input.photoUrl,
    status: newStatus,
    updatedAt: now,
  };

  // Validate domain invariants
  const violations = validateAdoptablePetInvariants(updatedPet);
  if (violations.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      `AdoptablePet invariant violations: ${violations.join(', ')}`,
      400,
      { violations },
    );
  }

  // 7. Save inside a single transaction
  await ctx.data.runInTransaction(async () => {
    await pets.save(updatedPet);
  });

  // 8. Return the updated aggregate fields
  return {
    adoptablePetId: updatedPet.adoptablePetId,
    name: updatedPet.name,
    age: updatedPet.age,
    description: updatedPet.description,
    photoUrl: updatedPet.photoUrl,
    status: updatedPet.status,
    updatedAt: updatedPet.updatedAt,
  };
}
