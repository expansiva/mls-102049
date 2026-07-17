/// <mls fileReference="_102049_/l2/petShop/web/contracts/productCatalog.test.ts" enhancement="_blank"/>

import type { PetShopBrowseCatalogInput, PetShopBrowseCatalogOutput, PetShopFilterProductsInput, PetShopFilterProductsOutput, PetShopFilterProductsOutputItem, PetShopSearchProductsInput, PetShopSearchProductsOutput, PetShopSearchProductsOutputItem, PetShopViewHighlightsInput, PetShopViewHighlightsOutput, PetShopViewHighlightsOutputItem, PetShopViewProductDetailsInput, PetShopViewProductDetailsOutput } from './productCatalog.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopViewHighlightsInput = {};
type ExpectedPetShopViewHighlightsOutputItem = {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
};
type ExpectedPetShopViewHighlightsOutput = ExpectedPetShopViewHighlightsOutputItem[];
type ExpectedPetShopBrowseCatalogInput = {
  searchTerm?: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
};
type ExpectedPetShopBrowseCatalogOutput = {
  products: {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  petTypeName?: string;
  categoryId: string;
  categoryName?: string;
  highlighted: boolean;
  status: string;
}[];
  total: number;
  page: number;
  pageSize: number;
};
type ExpectedPetShopSearchProductsInput = {
  searchTerm: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
};
type ExpectedPetShopSearchProductsOutputItem = {
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
};
type ExpectedPetShopSearchProductsOutput = ExpectedPetShopSearchProductsOutputItem[];
type ExpectedPetShopFilterProductsInput = {
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
};
type ExpectedPetShopFilterProductsOutputItem = {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
};
type ExpectedPetShopFilterProductsOutput = ExpectedPetShopFilterProductsOutputItem[];
type ExpectedPetShopViewProductDetailsInput = {
  productId: string;
};
type ExpectedPetShopViewProductDetailsOutput = {
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

type _PetShopViewHighlightsInput = Assert<Equal<PetShopViewHighlightsInput, ExpectedPetShopViewHighlightsInput>>;
type _PetShopViewHighlightsOutputItem = Assert<Equal<PetShopViewHighlightsOutputItem, ExpectedPetShopViewHighlightsOutputItem>>;
type _PetShopViewHighlightsOutput = Assert<Equal<PetShopViewHighlightsOutput, ExpectedPetShopViewHighlightsOutput>>;
type _PetShopBrowseCatalogInput = Assert<Equal<PetShopBrowseCatalogInput, ExpectedPetShopBrowseCatalogInput>>;
type _PetShopBrowseCatalogOutput = Assert<Equal<PetShopBrowseCatalogOutput, ExpectedPetShopBrowseCatalogOutput>>;
type _PetShopSearchProductsInput = Assert<Equal<PetShopSearchProductsInput, ExpectedPetShopSearchProductsInput>>;
type _PetShopSearchProductsOutputItem = Assert<Equal<PetShopSearchProductsOutputItem, ExpectedPetShopSearchProductsOutputItem>>;
type _PetShopSearchProductsOutput = Assert<Equal<PetShopSearchProductsOutput, ExpectedPetShopSearchProductsOutput>>;
type _PetShopFilterProductsInput = Assert<Equal<PetShopFilterProductsInput, ExpectedPetShopFilterProductsInput>>;
type _PetShopFilterProductsOutputItem = Assert<Equal<PetShopFilterProductsOutputItem, ExpectedPetShopFilterProductsOutputItem>>;
type _PetShopFilterProductsOutput = Assert<Equal<PetShopFilterProductsOutput, ExpectedPetShopFilterProductsOutput>>;
type _PetShopViewProductDetailsInput = Assert<Equal<PetShopViewProductDetailsInput, ExpectedPetShopViewProductDetailsInput>>;
type _PetShopViewProductDetailsOutput = Assert<Equal<PetShopViewProductDetailsOutput, ExpectedPetShopViewProductDetailsOutput>>;

export {};
