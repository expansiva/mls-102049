/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewAdoptablePetDetails.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IAdoptablePetRepository } from '/_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.js';
import type { AdoptablePet } from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';
import { adoptablePetIsVisibleInGallery } from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';

export interface ViewAdoptablePetDetailsInput {
  adoptablePetId: string;
}

export interface ViewAdoptablePetDetailsOutput {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: string;
}

export async function viewAdoptablePetDetails(
  ctx: RequestContext,
  input: ViewAdoptablePetDetailsInput,
): Promise<ViewAdoptablePetDetailsOutput | null> {
  const pets = resolveRepository<IAdoptablePetRepository>(ctx, 'AdoptablePet');

  // Step 1: Load the AdoptablePet aggregate by adoptablePetId.
  const pet: AdoptablePet | null = await pets.getById(input.adoptablePetId);

  // Step 2: If no aggregate is found, return an empty result (not-found).
  if (!pet) {
    return null;
  }

  // Step 3: Apply rule 'onlyAvailablePetsShownInGallery' — unavailable pets are never exposed.
  if (!adoptablePetIsVisibleInGallery(pet)) {
    return null;
  }

  // Step 4 & 5: Project fields and return the output.
  return {
    adoptablePetId: pet.adoptablePetId,
    name: pet.name,
    age: pet.age,
    description: pet.description,
    photoUrl: pet.photoUrl,
    status: pet.status,
  };
}
