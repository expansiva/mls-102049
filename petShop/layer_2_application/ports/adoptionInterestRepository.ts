/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/adoptionInterestRepository.ts" enhancement="_blank"/>
import type {
  AdoptionInterest,
  AdoptionInterestStatus,
} from '/_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.js';

export type AdoptionInterestId = string;
export type AdopterId = string;
export type AdoptablePetId = string;

export interface AdoptionInterestFilter {
  status?: AdoptionInterestStatus;
  adoptablePetId?: AdoptablePetId;
  customerEmail?: string;
}

export interface IAdoptionInterestRepository {
  getById(id: AdoptionInterestId): Promise<AdoptionInterest | null>;
  list(filter?: AdoptionInterestFilter): Promise<AdoptionInterest[]>;
  save(interest: AdoptionInterest): Promise<void>;
  findByAdopterId(adopterId: AdopterId): Promise<AdoptionInterest[]>;
  findByPetId(petId: AdoptablePetId): Promise<AdoptionInterest[]>;
}
