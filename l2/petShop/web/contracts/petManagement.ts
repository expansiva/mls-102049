/// <mls fileReference="_102049_/l2/petShop/web/contracts/petManagement.ts" enhancement="_blank"/>

export interface PetShopBrowseAdoptablePetsAdminInput {
  statusFilter?: "available" | "unavailable";
}

export interface PetShopBrowseAdoptablePetsAdminOutputItem {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
  createdAt: string;
  updatedAt: string;
}

export interface PetShopBrowseAdoptablePetsAdminOutput {
  items: PetShopBrowseAdoptablePetsAdminOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopCreateAdoptablePetInput {
  name: string;
  age: number;
  description: string;
  photoUrl: string;
}

export interface PetShopCreateAdoptablePetOutput {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
  createdAt: string;
}

export interface PetShopUpdateAdoptablePetInput {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
}

export interface PetShopUpdateAdoptablePetOutput {
  adoptablePetId: string;
  name: string;
  age: number;
  description: string;
  photoUrl: string;
  status: "available" | "unavailable";
  updatedAt: string;
}
