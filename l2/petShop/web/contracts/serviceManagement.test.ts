/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceManagement.test.ts" enhancement="_blank"/>

import type { PetShopBrowseServicesInput, PetShopBrowseServicesOutput, PetShopBrowseServicesOutputItem, PetShopCreateServiceInput, PetShopCreateServiceOutput, PetShopUpdateServiceInput, PetShopUpdateServiceOutput } from './serviceManagement.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseServicesInput = {
  statusFilter?: "active" | "inactive";
};
type ExpectedPetShopBrowseServicesOutputItem = {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: "active" | "inactive";
  deactivatedAt: string;
  createdAt: string;
  updatedAt: string;
};
type ExpectedPetShopBrowseServicesOutput = { items: ExpectedPetShopBrowseServicesOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopCreateServiceInput = {
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
};
type ExpectedPetShopCreateServiceOutput = {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: "active" | "inactive";
  createdAt: string;
};
type ExpectedPetShopUpdateServiceInput = {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: "active" | "inactive";
};
type ExpectedPetShopUpdateServiceOutput = {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
  status: "active" | "inactive";
  deactivatedAt: string;
  updatedAt: string;
};

type _PetShopBrowseServicesInput = Assert<Equal<PetShopBrowseServicesInput, ExpectedPetShopBrowseServicesInput>>;
type _PetShopBrowseServicesOutputItem = Assert<Equal<PetShopBrowseServicesOutputItem, ExpectedPetShopBrowseServicesOutputItem>>;
type _PetShopBrowseServicesOutput = Assert<Equal<PetShopBrowseServicesOutput, ExpectedPetShopBrowseServicesOutput>>;
type _PetShopCreateServiceInput = Assert<Equal<PetShopCreateServiceInput, ExpectedPetShopCreateServiceInput>>;
type _PetShopCreateServiceOutput = Assert<Equal<PetShopCreateServiceOutput, ExpectedPetShopCreateServiceOutput>>;
type _PetShopUpdateServiceInput = Assert<Equal<PetShopUpdateServiceInput, ExpectedPetShopUpdateServiceInput>>;
type _PetShopUpdateServiceOutput = Assert<Equal<PetShopUpdateServiceOutput, ExpectedPetShopUpdateServiceOutput>>;

export {};