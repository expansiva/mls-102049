/// <mls fileReference="_102049_/l2/petShop/web/contracts/adoptionGallery.ts" enhancement="_blank"/>

export interface PetShopBrowseAdoptablePetsInput {}

export interface PetShopBrowseAdoptablePetsOutputItem {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
}

export interface PetShopBrowseAdoptablePetsOutput {
  items: PetShopBrowseAdoptablePetsOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopViewAdoptablePetDetailsInput {
  adoptablePetId: string;
}

export interface PetShopViewAdoptablePetDetailsOutputItem {
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
}

export type PetShopViewAdoptablePetDetailsOutput = PetShopViewAdoptablePetDetailsOutputItem;

export interface PetShopExpressAdoptionInterestInput {
  adoptablePetId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
}

export interface PetShopExpressAdoptionInterestOutput {
  adoptionInterestId: string;
  status: "registered" | "completed" | "cancelled";
  adoptablePetId: string;
  customerName: string;
  createdAt: string;
}
