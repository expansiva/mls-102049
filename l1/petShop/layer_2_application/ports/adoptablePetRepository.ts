/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.ts" enhancement="_blank"/>
import type {
  AdoptablePet,
  AdoptablePetStatus,
} from '/_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.js';

export type AdoptablePetId = string;

export type Species = string;

export interface AdoptablePetFilter {
  status?: AdoptablePetStatus;
  species?: Species;
}

export interface IAdoptablePetRepository {
  getById(id: AdoptablePetId): Promise<AdoptablePet | null>;
  list(filter?: AdoptablePetFilter): Promise<AdoptablePet[]>;
  save(pet: AdoptablePet): Promise<void>;
  findAvailable(): Promise<AdoptablePet[]>;
  findBySpecies(species: Species): Promise<AdoptablePet[]>;
}
