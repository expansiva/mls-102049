/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceBooking.test.ts" enhancement="_blank"/>

import type { PetShopBrowseServiceCatalogInput, PetShopBrowseServiceCatalogOutput, PetShopBrowseServiceCatalogOutputItem, PetShopCreateServiceBookingInput, PetShopCreateServiceBookingOutput } from './serviceBooking.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseServiceCatalogInput = {};
type ExpectedPetShopBrowseServiceCatalogOutputItem = {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
};
type ExpectedPetShopBrowseServiceCatalogOutput = { items: ExpectedPetShopBrowseServiceCatalogOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopCreateServiceBookingInput = {
  serviceId: string;
  customerName: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  notes?: string;
};
type ExpectedPetShopCreateServiceBookingOutput = {
  serviceBookingId: string;
  serviceId: string;
  operatorId: string;
  shiftId: string;
  bookingDate: string;
  bookingTime: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  customerName: string;
};

type _PetShopBrowseServiceCatalogInput = Assert<Equal<PetShopBrowseServiceCatalogInput, ExpectedPetShopBrowseServiceCatalogInput>>;
type _PetShopBrowseServiceCatalogOutputItem = Assert<Equal<PetShopBrowseServiceCatalogOutputItem, ExpectedPetShopBrowseServiceCatalogOutputItem>>;
type _PetShopBrowseServiceCatalogOutput = Assert<Equal<PetShopBrowseServiceCatalogOutput, ExpectedPetShopBrowseServiceCatalogOutput>>;
type _PetShopCreateServiceBookingInput = Assert<Equal<PetShopCreateServiceBookingInput, ExpectedPetShopCreateServiceBookingInput>>;
type _PetShopCreateServiceBookingOutput = Assert<Equal<PetShopCreateServiceBookingOutput, ExpectedPetShopCreateServiceBookingOutput>>;

export {};