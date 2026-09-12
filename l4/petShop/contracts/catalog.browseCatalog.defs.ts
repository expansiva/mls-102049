/// <mls fileReference="_102049_/l4/petShop/contracts/catalog.browseCatalog.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102049_/l4/petShop/workspaces/catalog.defs.ts — DO NOT EDIT.
// Contract of record: bffCall browseCatalog (query); Output kind=paginated; route petShop.catalog.browseCatalog.

export interface BrowseCatalogInput {
  searchName?: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
}

export interface BrowseCatalogItemsItem {
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

export interface BrowseCatalogOutput {
  items: BrowseCatalogItemsItem[];
  total: number;
  page: number;
  pageSize: number;
}

export const browseCatalogRoute = 'petShop.catalog.browseCatalog' as const;
