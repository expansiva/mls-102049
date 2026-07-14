/// <mls fileReference="_102049_/l2/petShop/web/contracts/petManagement.test.ts" enhancement="_blank"/>

import type { PetShopBrowseAdoptablePetsAdminInput, PetShopBrowseAdoptablePetsAdminOutput, PetShopBrowseAdoptablePetsAdminOutputItem, PetShopCreateAdoptablePetInput, PetShopCreateAdoptablePetOutput, PetShopUpdateAdoptablePetInput, PetShopUpdateAdoptablePetOutput } from './petManagement.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseAdoptablePetsAdminInput = {
  statusFilter?: "available" | "unavailable";
};
type ExpectedPetShopBrowseAdoptablePetsAdminOutputItem = {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
  createdAt: string;
  updatedAt: string;
};
type ExpectedPetShopBrowseAdoptablePetsAdminOutput = { items: ExpectedPetShopBrowseAdoptablePetsAdminOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopCreateAdoptablePetInput = {
  name: string;
  age: number;
  description: string;
  photoUrl: string;
};
type ExpectedPetShopCreateAdoptablePetOutput = {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
  createdAt: string;
};
type ExpectedPetShopUpdateAdoptablePetInput = {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
};
type ExpectedPetShopUpdateAdoptablePetOutput = {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
  updatedAt: string;
};

type _PetShopBrowseAdoptablePetsAdminInput = Assert<Equal<PetShopBrowseAdoptablePetsAdminInput, ExpectedPetShopBrowseAdoptablePetsAdminInput>>;
type _PetShopBrowseAdoptablePetsAdminOutputItem = Assert<Equal<PetShopBrowseAdoptablePetsAdminOutputItem, ExpectedPetShopBrowseAdoptablePetsAdminOutputItem>>;
type _PetShopBrowseAdoptablePetsAdminOutput = Assert<Equal<PetShopBrowseAdoptablePetsAdminOutput, ExpectedPetShopBrowseAdoptablePetsAdminOutput>>;
type _PetShopCreateAdoptablePetInput = Assert<Equal<PetShopCreateAdoptablePetInput, ExpectedPetShopCreateAdoptablePetInput>>;
type _PetShopCreateAdoptablePetOutput = Assert<Equal<PetShopCreateAdoptablePetOutput, ExpectedPetShopCreateAdoptablePetOutput>>;
type _PetShopUpdateAdoptablePetInput = Assert<Equal<PetShopUpdateAdoptablePetInput, ExpectedPetShopUpdateAdoptablePetInput>>;
type _PetShopUpdateAdoptablePetOutput = Assert<Equal<PetShopUpdateAdoptablePetOutput, ExpectedPetShopUpdateAdoptablePetOutput>>;

export {};