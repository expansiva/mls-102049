/// <mls fileReference="_102049_/l2/petShop/web/contracts/catalog.productDetails.ts" enhancement="_blank"/>

// GENERATED from l4 bffCall — do not edit (bffCall productDetails, query; Output kind=object; route petShop.catalog.productDetails).

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
