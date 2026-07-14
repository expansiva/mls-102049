/// <mls fileReference="_102049_/l2/petShop/web/contracts/homePage.test.ts" enhancement="_blank"/>

import type { PetShopBrowseHomePageInput, PetShopBrowseHomePageOutput, PetShopBrowseHomePageOutputItem } from './homePage.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseHomePageInput = {};
type ExpectedPetShopBrowseHomePageOutputItem = {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
};
type ExpectedPetShopBrowseHomePageOutput = { items: ExpectedPetShopBrowseHomePageOutputItem[]; total: number; page?: number; pageSize?: number; };

type _PetShopBrowseHomePageInput = Assert<Equal<PetShopBrowseHomePageInput, ExpectedPetShopBrowseHomePageInput>>;
type _PetShopBrowseHomePageOutputItem = Assert<Equal<PetShopBrowseHomePageOutputItem, ExpectedPetShopBrowseHomePageOutputItem>>;
type _PetShopBrowseHomePageOutput = Assert<Equal<PetShopBrowseHomePageOutput, ExpectedPetShopBrowseHomePageOutput>>;

export {};