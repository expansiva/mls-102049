/// <mls fileReference="_102049_/l4/petShop/contracts/catalog.featuredProducts.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102049_/l4/petShop/workspaces/catalog.defs.ts — DO NOT EDIT.
// Contract of record: bffCall featuredProducts (query); Output kind=list; route petShop.catalog.featuredProducts.

export interface FeaturedProductsInput {
  categoryId?: string;
  petTypeId?: string;
  name?: string;
  priceMin?: number;
  priceMax?: number;
  page?: number;
  pageSize?: number;
}

export interface FeaturedProductsItem {
  productId: string;
  name: string;
  price: number;
  isFeatured: boolean;
  categoryId: string;
  petTypeId: string;
}

export type FeaturedProductsOutput = FeaturedProductsItem[];

export const featuredProductsRoute = 'petShop.catalog.featuredProducts' as const;
