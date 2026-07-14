/// <mls fileReference="_102049_/l2/petShop/web/contracts/productCatalog.ts" enhancement="_blank"/>

export interface PetShopBrowseProductCatalogInput {
  searchName?: string;
  productCategoryId?: string;
}

export interface PetShopBrowseProductCatalogOutputItem {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
}

export interface PetShopBrowseProductCatalogOutput {
  items: PetShopBrowseProductCatalogOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopViewProductDetailsInput {
  productId: string;
}

export interface PetShopViewProductDetailsOutputItem {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
}

export type PetShopViewProductDetailsOutput = PetShopViewProductDetailsOutputItem;

export interface PetShopPlaceStorePickupOrderInput {
  customerName: string;
  customerPhone?: string;
}

export interface PetShopPlaceStorePickupOrderOutput {
  orderId: string;
  status: "registered" | "completed" | "cancelled";
  customerName: string;
  customerPhone: string;
  createdAt: string;
}
