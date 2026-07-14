/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.ts" enhancement="_blank"/>
export type AdoptablePetStatus = 'available' | 'unavailable';

export interface AdoptablePet {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: AdoptablePetStatus;
  createdAt: string;
  updatedAt: string;
}

export const ADOPTABLE_PET_STATUS_TRANSITIONS: Record<AdoptablePetStatus, AdoptablePetStatus[]> = {
  available: ['unavailable'],
  unavailable: ['available'],
};

export function canTransitionAdoptablePetStatus(
  from: AdoptablePetStatus,
  to: AdoptablePetStatus,
): boolean {
  return ADOPTABLE_PET_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function adoptablePetAgeIsValid(age: number): boolean {
  return typeof age === 'number' && age >= 0;
}

export function adoptablePetStatusIsValid(status: string): status is AdoptablePetStatus {
  return status === 'available' || status === 'unavailable';
}

export function adoptablePetIsVisibleInGallery(pet: Pick<AdoptablePet, 'status'>): boolean {
  return pet.status === 'available';
}

export function adoptablePetTimestampsAreValid(
  pet: Pick<AdoptablePet, 'createdAt' | 'updatedAt'>,
): boolean {
  return pet.updatedAt >= pet.createdAt;
}

export function validateAdoptablePetInvariants(pet: AdoptablePet): string[] {
  const violations: string[] = [];
  if (!adoptablePetAgeIsValid(pet.age)) {
    violations.push('age must be a non-negative number');
  }
  if (!adoptablePetStatusIsValid(pet.status)) {
    violations.push("status must be 'available' or 'unavailable'");
  }
  if (!adoptablePetTimestampsAreValid(pet)) {
    violations.push('updatedAt must be greater than or equal to createdAt');
  }
  return violations;
}
