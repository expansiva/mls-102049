/// <mls fileReference="_102049_/l2/petShop/web/contracts/productCatalog.ts" enhancement="_blank"/>

export interface PetShopViewHighlightsInput {
}

export interface PetShopViewHighlightsOutputItem {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
}

export type PetShopViewHighlightsOutput = PetShopViewHighlightsOutputItem[];

export interface PetShopBrowseCatalogInput {
  searchTerm?: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface PetShopBrowseCatalogProduct {
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
}

export interface PetShopBrowseCatalogOutput {
  products: PetShopBrowseCatalogProduct[];
  total: number;
  page: number;
  pageSize: number;
}

export interface PetShopSearchProductsInput {
  searchTerm: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface PetShopSearchProductsOutputItem {
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
}

export type PetShopSearchProductsOutput = PetShopSearchProductsOutputItem[];

export interface PetShopFilterProductsInput {
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface PetShopFilterProductsOutputItem {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
}

export type PetShopFilterProductsOutput = PetShopFilterProductsOutputItem[];

export interface PetShopViewProductDetailsInput {
  productId: string;
}

export interface PetShopViewProductDetailsOutput {
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
}
