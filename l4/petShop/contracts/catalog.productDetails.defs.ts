/// <mls fileReference="_102049_/l4/petShop/contracts/catalog.productDetails.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102049_/l4/petShop/workspaces/catalog.defs.ts — DO NOT EDIT.
// Contract of record: bffCall productDetails (query); Output kind=object; route petShop.catalog.productDetails.

export interface ProductDetailsInput {
  productId: string;
}

export interface ProductDetailsOutput {
  productId: string;
  name: string;
  price: number;
  isFeatured: boolean;
  categoryId: string;
  categoryName: string;
  petTypeId: string;
  petTypeName: string;
  createdAt: string;
  updatedAt: string;
}

export const productDetailsRoute = 'petShop.catalog.productDetails' as const;
