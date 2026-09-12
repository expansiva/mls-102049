/// <mls fileReference="_102049_/l2/petShop/web/contracts/catalog.browseCatalog.ts" enhancement="_blank"/>

// GENERATED from l4 bffCall — do not edit (bffCall browseCatalog, query; Output kind=paginated; route petShop.catalog.browseCatalog).

export interface BrowseCatalogInput {
  searchName?: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
}

export interface BrowseCatalogOutput {
  items: { productId: string; name: string; price: number; isFeatured: boolean; categoryId: string; categoryName: string; petTypeId: string; petTypeName: string; createdAt: string; updatedAt: string }[];
  total: number;
  page: number;
  pageSize: number;
}

export const browseCatalogRoute = 'petShop.catalog.browseCatalog' as const;
