/// <mls fileReference="_102049_/l2/petShop/web/contracts/homePage.ts" enhancement="_blank"/>

export interface PetShopBrowseHomePageInput {}

export interface PetShopBrowseHomePageOutputItem {
  productId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productCategoryId: string;
  featured: boolean;
  status: "active" | "inactive";
}

export interface PetShopBrowseHomePageOutput {
  items: PetShopBrowseHomePageOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}
