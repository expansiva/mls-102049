/// <mls fileReference="_102049_/l2/petShop/web/contracts/catalog.featuredProducts.ts" enhancement="_blank"/>

// GENERATED from l4 bffCall — do not edit (bffCall featuredProducts, query; Output kind=array; route petShop.catalog.featuredProducts).

export interface FeaturedProductsInput {
  categoryId?: string;
  petTypeId?: string;
  name?: string;
  priceMin?: number;
  priceMax?: number;
  page?: number;
  pageSize?: number;
}

export interface FeaturedProductsOutput {
  productId: string;
  name: string;
  price: number;
  isFeatured: boolean;
  categoryId: string;
  petTypeId: string;
}

export const featuredProductsRoute = 'petShop.catalog.featuredProducts' as const;
