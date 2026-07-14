/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceManagement.ts" enhancement="_blank"/>

export interface PetShopBrowseServicesInput {
  statusFilter?: "active" | "inactive";
}

export interface PetShopBrowseServicesOutputItem {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: "active" | "inactive";
  deactivatedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface PetShopBrowseServicesOutput {
  items: PetShopBrowseServicesOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopCreateServiceInput {
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
}

export interface PetShopCreateServiceOutput {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: "active" | "inactive";
  createdAt: string;
}

export interface PetShopUpdateServiceInput {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: "active" | "inactive";
}

export interface PetShopUpdateServiceOutput {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: "active" | "inactive";
  deactivatedAt: string;
  updatedAt: string;
}
