/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseAdoptablePets.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IAdoptablePetRepository } from '/_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.js';
import { adoptablePetIsVisibleInGallery } from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';

export interface BrowseAdoptablePetsItem {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
}

export interface BrowseAdoptablePetsOutput {
  items: BrowseAdoptablePetsItem[];
  total: number;
}

export async function browseAdoptablePets(
  ctx: RequestContext,
): Promise<BrowseAdoptablePetsOutput> {
  const pets = resolveRepository<IAdoptablePetRepository>(ctx, 'AdoptablePet');
  const availablePets = await pets.findAvailable();
  const items = availablePets
    .filter(adoptablePetIsVisibleInGallery)
    .map((pet) => ({
      adoptablePetId: pet.adoptablePetId,
      name: pet.name,
      age: pet.age,
      description: pet.description,
      photoUrl: pet.photoUrl,
    }));

  return {
    items,
    total: items.length,
  };
}
