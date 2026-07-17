/// <mls fileReference="_102049_/l2/petShop/web/contracts/myReservations.test.ts" enhancement="_blank"/>

import type { PetShopCancelReservationInput, PetShopCancelReservationOutput, PetShopCreateReservationInput, PetShopCreateReservationOutput, PetShopViewMyReservationsInput, PetShopViewMyReservationsOutput, PetShopViewMyReservationsOutputItem } from './myReservations.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopCreateReservationInput = {
  items: string;
};
type ExpectedPetShopCreateReservationOutput = {
  reservationId: string;
  customerId: string;
  status: string;
  confirmedAt: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  items: {
  reservationItemId: string;
  productId: string;
  quantity: number;
}[];
};
type ExpectedPetShopCancelReservationInput = {
  reservationId: string;
  cancelReason?: string;
};
type ExpectedPetShopCancelReservationOutput = {
  reservationId: string;
  status: string;
  cancelledAt: string;
  cancelReason?: string;
  updatedAt: string;
  restoredProducts: {
  productId: string;
  available: boolean;
}[];
};
type ExpectedPetShopViewMyReservationsInput = {};
type ExpectedPetShopViewMyReservationsOutputItem = {
  reservationId: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  confirmedAt?: string;
  readyAt?: string;
  items: {
  productId: string;
  quantity: number;
}[];
};
type ExpectedPetShopViewMyReservationsOutput = ExpectedPetShopViewMyReservationsOutputItem[];

type _PetShopCreateReservationInput = Assert<Equal<PetShopCreateReservationInput, ExpectedPetShopCreateReservationInput>>;
type _PetShopCreateReservationOutput = Assert<Equal<PetShopCreateReservationOutput, ExpectedPetShopCreateReservationOutput>>;
type _PetShopCancelReservationInput = Assert<Equal<PetShopCancelReservationInput, ExpectedPetShopCancelReservationInput>>;
type _PetShopCancelReservationOutput = Assert<Equal<PetShopCancelReservationOutput, ExpectedPetShopCancelReservationOutput>>;
type _PetShopViewMyReservationsInput = Assert<Equal<PetShopViewMyReservationsInput, ExpectedPetShopViewMyReservationsInput>>;
type _PetShopViewMyReservationsOutputItem = Assert<Equal<PetShopViewMyReservationsOutputItem, ExpectedPetShopViewMyReservationsOutputItem>>;
type _PetShopViewMyReservationsOutput = Assert<Equal<PetShopViewMyReservationsOutput, ExpectedPetShopViewMyReservationsOutput>>;

export {};
