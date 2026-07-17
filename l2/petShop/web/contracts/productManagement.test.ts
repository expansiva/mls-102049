/// <mls fileReference="_102049_/l2/petShop/web/contracts/productManagement.test.ts" enhancement="_blank"/>

import type { PetShopBrowseProductsInput, PetShopBrowseProductsOutput, PetShopBrowseProductsOutputItem, PetShopCreateProductInput, PetShopCreateProductOutput, PetShopSetProductHighlightsInput, PetShopSetProductHighlightsOutput, PetShopUpdateProductInput, PetShopUpdateProductOutput } from './productManagement.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseProductsInput = {
  searchTerm?: string;
  petTypeId?: string;
  categoryId?: string;
  priceMin?: number;
  priceMax?: number;
  status?: "available" | "unavailable";
  highlighted?: boolean;
};
type ExpectedPetShopBrowseProductsOutputItem = {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  petTypeName: string;
  categoryId: string;
  categoryName: string;
  highlighted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
};
type ExpectedPetShopBrowseProductsOutput = ExpectedPetShopBrowseProductsOutputItem[];
type ExpectedPetShopCreateProductInput = {
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: "available" | "unavailable";
};
type ExpectedPetShopCreateProductOutput = {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
};
type ExpectedPetShopUpdateProductInput = {
  productId: string;
  name?: string;
  description?: string;
  price?: number;
  petTypeId?: string;
  categoryId?: string;
  highlighted?: boolean;
  status?: "available" | "unavailable";
};
type ExpectedPetShopUpdateProductOutput = {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
};
type ExpectedPetShopSetProductHighlightsInput = {
  productIds: string[];
  highlighted: boolean;
};
type ExpectedPetShopSetProductHighlightsOutput = {
  updatedCount: number;
  products: {
  productId: string;
  name: string;
  highlighted: boolean;
  status: string;
}[];
};

type _PetShopBrowseProductsInput = Assert<Equal<PetShopBrowseProductsInput, ExpectedPetShopBrowseProductsInput>>;
type _PetShopBrowseProductsOutputItem = Assert<Equal<PetShopBrowseProductsOutputItem, ExpectedPetShopBrowseProductsOutputItem>>;
type _PetShopBrowseProductsOutput = Assert<Equal<PetShopBrowseProductsOutput, ExpectedPetShopBrowseProductsOutput>>;
type _PetShopCreateProductInput = Assert<Equal<PetShopCreateProductInput, ExpectedPetShopCreateProductInput>>;
type _PetShopCreateProductOutput = Assert<Equal<PetShopCreateProductOutput, ExpectedPetShopCreateProductOutput>>;
type _PetShopUpdateProductInput = Assert<Equal<PetShopUpdateProductInput, ExpectedPetShopUpdateProductInput>>;
type _PetShopUpdateProductOutput = Assert<Equal<PetShopUpdateProductOutput, ExpectedPetShopUpdateProductOutput>>;
type _PetShopSetProductHighlightsInput = Assert<Equal<PetShopSetProductHighlightsInput, ExpectedPetShopSetProductHighlightsInput>>;
type _PetShopSetProductHighlightsOutput = Assert<Equal<PetShopSetProductHighlightsOutput, ExpectedPetShopSetProductHighlightsOutput>>;

export {};
