/// <mls fileReference="_102049_/l2/petShop/web/contracts/productManagement.test.ts" enhancement="_blank"/>

import type { PetShopBrowseProductsInput, PetShopBrowseProductsOutput, PetShopBrowseProductsOutputItem, PetShopCreateProductInput, PetShopCreateProductOutput, PetShopUpdateProductInput, PetShopUpdateProductOutput } from './productManagement.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseProductsInput = {
  searchName?: string;
  filterStatus?: "active" | "inactive";
  filterProductCategoryId?: string;
  filterFeatured?: boolean;
};
type ExpectedPetShopBrowseProductsOutputItem = {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedPetShopBrowseProductsOutput = { items: ExpectedPetShopBrowseProductsOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopCreateProductInput = {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  productCategoryId: string;
  featured: boolean;
};
type ExpectedPetShopCreateProductOutput = {
  productId: string;
  name: string;
  price: number;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
  createdAt: string;
};
type ExpectedPetShopUpdateProductInput = {
  productId: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
};
type ExpectedPetShopUpdateProductOutput = {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
  updatedAt: string;
};

type _PetShopBrowseProductsInput = Assert<Equal<PetShopBrowseProductsInput, ExpectedPetShopBrowseProductsInput>>;
type _PetShopBrowseProductsOutputItem = Assert<Equal<PetShopBrowseProductsOutputItem, ExpectedPetShopBrowseProductsOutputItem>>;
type _PetShopBrowseProductsOutput = Assert<Equal<PetShopBrowseProductsOutput, ExpectedPetShopBrowseProductsOutput>>;
type _PetShopCreateProductInput = Assert<Equal<PetShopCreateProductInput, ExpectedPetShopCreateProductInput>>;
type _PetShopCreateProductOutput = Assert<Equal<PetShopCreateProductOutput, ExpectedPetShopCreateProductOutput>>;
type _PetShopUpdateProductInput = Assert<Equal<PetShopUpdateProductInput, ExpectedPetShopUpdateProductInput>>;
type _PetShopUpdateProductOutput = Assert<Equal<PetShopUpdateProductOutput, ExpectedPetShopUpdateProductOutput>>;

export {};