/// <mls fileReference="_102049_/l2/petShop/web/contracts/productCatalog.test.ts" enhancement="_blank"/>

import type { PetShopBrowseProductCatalogInput, PetShopBrowseProductCatalogOutput, PetShopBrowseProductCatalogOutputItem, PetShopPlaceStorePickupOrderInput, PetShopPlaceStorePickupOrderOutput, PetShopViewProductDetailsInput, PetShopViewProductDetailsOutput, PetShopViewProductDetailsOutputItem } from './productCatalog.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseProductCatalogInput = {
  searchName?: string;
  productCategoryId?: string;
};
type ExpectedPetShopBrowseProductCatalogOutputItem = {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
};
type ExpectedPetShopBrowseProductCatalogOutput = { items: ExpectedPetShopBrowseProductCatalogOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopViewProductDetailsInput = {
  productId: string;
};
type ExpectedPetShopViewProductDetailsOutputItem = {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
};
type ExpectedPetShopViewProductDetailsOutput = ExpectedPetShopViewProductDetailsOutputItem;
type ExpectedPetShopPlaceStorePickupOrderInput = {
  customerName: string;
  customerPhone?: string;
};
type ExpectedPetShopPlaceStorePickupOrderOutput = {
  orderId: string;
  status: "registered" | "completed" | "cancelled";
  customerName: string;
  customerPhone: string;
  createdAt: string;
};

type _PetShopBrowseProductCatalogInput = Assert<Equal<PetShopBrowseProductCatalogInput, ExpectedPetShopBrowseProductCatalogInput>>;
type _PetShopBrowseProductCatalogOutputItem = Assert<Equal<PetShopBrowseProductCatalogOutputItem, ExpectedPetShopBrowseProductCatalogOutputItem>>;
type _PetShopBrowseProductCatalogOutput = Assert<Equal<PetShopBrowseProductCatalogOutput, ExpectedPetShopBrowseProductCatalogOutput>>;
type _PetShopViewProductDetailsInput = Assert<Equal<PetShopViewProductDetailsInput, ExpectedPetShopViewProductDetailsInput>>;
type _PetShopViewProductDetailsOutputItem = Assert<Equal<PetShopViewProductDetailsOutputItem, ExpectedPetShopViewProductDetailsOutputItem>>;
type _PetShopViewProductDetailsOutput = Assert<Equal<PetShopViewProductDetailsOutput, ExpectedPetShopViewProductDetailsOutput>>;
type _PetShopPlaceStorePickupOrderInput = Assert<Equal<PetShopPlaceStorePickupOrderInput, ExpectedPetShopPlaceStorePickupOrderInput>>;
type _PetShopPlaceStorePickupOrderOutput = Assert<Equal<PetShopPlaceStorePickupOrderOutput, ExpectedPetShopPlaceStorePickupOrderOutput>>;

export {};