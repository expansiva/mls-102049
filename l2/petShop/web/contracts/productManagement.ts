/// <mls fileReference="_102049_/l2/petShop/web/contracts/productManagement.ts" enhancement="_blank"/>

export interface PetShopBrowseProductsInput {
  searchName?: string;
  filterStatus?: "active" | "inactive";
  filterProductCategoryId?: string;
  filterFeatured?: boolean;
}

export interface PetShopBrowseProductsOutputItem {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export interface PetShopBrowseProductsOutput {
  items: PetShopBrowseProductsOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopCreateProductInput {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  productCategoryId: string;
  featured: boolean;
}

export interface PetShopCreateProductOutput {
  productId: string;
  name: string;
  price: number;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
  createdAt: string;
}

export interface PetShopUpdateProductInput {
  productId: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
}

export interface PetShopUpdateProductOutput {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
  updatedAt: string;
}
