/// <mls fileReference="_102049_/l2/petShop/web/contracts/adoptionGallery.test.ts" enhancement="_blank"/>

import type { PetShopBrowseAdoptablePetsInput, PetShopBrowseAdoptablePetsOutput, PetShopBrowseAdoptablePetsOutputItem, PetShopExpressAdoptionInterestInput, PetShopExpressAdoptionInterestOutput, PetShopViewAdoptablePetDetailsInput, PetShopViewAdoptablePetDetailsOutput, PetShopViewAdoptablePetDetailsOutputItem } from './adoptionGallery.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseAdoptablePetsInput = {};
type ExpectedPetShopBrowseAdoptablePetsOutputItem = {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
};
type ExpectedPetShopBrowseAdoptablePetsOutput = { items: ExpectedPetShopBrowseAdoptablePetsOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopViewAdoptablePetDetailsInput = {
  adoptablePetId: string;
};
type ExpectedPetShopViewAdoptablePetDetailsOutputItem = {
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
};
type ExpectedPetShopViewAdoptablePetDetailsOutput = ExpectedPetShopViewAdoptablePetDetailsOutputItem;
type ExpectedPetShopExpressAdoptionInterestInput = {
  adoptablePetId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
};
type ExpectedPetShopExpressAdoptionInterestOutput = {
  adoptionInterestId: string;
  status: "registered" | "completed" | "cancelled";
  adoptablePetId: string;
  customerName: string;
  createdAt: string;
};

type _PetShopBrowseAdoptablePetsInput = Assert<Equal<PetShopBrowseAdoptablePetsInput, ExpectedPetShopBrowseAdoptablePetsInput>>;
type _PetShopBrowseAdoptablePetsOutputItem = Assert<Equal<PetShopBrowseAdoptablePetsOutputItem, ExpectedPetShopBrowseAdoptablePetsOutputItem>>;
type _PetShopBrowseAdoptablePetsOutput = Assert<Equal<PetShopBrowseAdoptablePetsOutput, ExpectedPetShopBrowseAdoptablePetsOutput>>;
type _PetShopViewAdoptablePetDetailsInput = Assert<Equal<PetShopViewAdoptablePetDetailsInput, ExpectedPetShopViewAdoptablePetDetailsInput>>;
type _PetShopViewAdoptablePetDetailsOutputItem = Assert<Equal<PetShopViewAdoptablePetDetailsOutputItem, ExpectedPetShopViewAdoptablePetDetailsOutputItem>>;
type _PetShopViewAdoptablePetDetailsOutput = Assert<Equal<PetShopViewAdoptablePetDetailsOutput, ExpectedPetShopViewAdoptablePetDetailsOutput>>;
type _PetShopExpressAdoptionInterestInput = Assert<Equal<PetShopExpressAdoptionInterestInput, ExpectedPetShopExpressAdoptionInterestInput>>;
type _PetShopExpressAdoptionInterestOutput = Assert<Equal<PetShopExpressAdoptionInterestOutput, ExpectedPetShopExpressAdoptionInterestOutput>>;

export {};