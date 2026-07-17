/// <mls fileReference="_102049_/l2/petShop/web/contracts/productManagement.ts" enhancement="_blank"/>

export interface PetShopBrowseProductsInput {
  searchTerm?: string;
  petTypeId?: string;
  categoryId?: string;
  priceMin?: number;
  priceMax?: number;
  status?: "available" | "unavailable";
  highlighted?: boolean;
}

export interface PetShopBrowseProductsOutputItem {
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

export type PetShopBrowseProductsOutput = PetShopBrowseProductsOutputItem[];

export interface PetShopCreateProductInput {
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: "available" | "unavailable";
}

export interface PetShopCreateProductOutput {
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
}

export interface PetShopUpdateProductInput {
  productId: string;
  name?: string;
  description?: string;
  price?: number;
  petTypeId?: string;
  categoryId?: string;
  highlighted?: boolean;
  status?: "available" | "unavailable";
}

export interface PetShopUpdateProductOutput {
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
}

export interface PetShopSetProductHighlightsInput {
  productIds: string[];
  highlighted: boolean;
}

export interface PetShopSetProductHighlightsProduct {
  productId: string;
  name: string;
  highlighted: boolean;
  status: string;
}

export interface PetShopSetProductHighlightsOutput {
  updatedCount: number;
  products: PetShopSetProductHighlightsProduct[];
}
