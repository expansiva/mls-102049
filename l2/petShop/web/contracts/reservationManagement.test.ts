/// <mls fileReference="_102049_/l2/petShop/web/contracts/reservationManagement.test.ts" enhancement="_blank"/>

import type { PetShopExpireReservationsInput, PetShopExpireReservationsOutput, PetShopListReservationsInput, PetShopListReservationsOutput, PetShopListReservationsOutputItem, PetShopPayInStoreInput, PetShopPayInStoreOutput, PetShopUpdateReservationStatusInput, PetShopUpdateReservationStatusOutput } from './reservationManagement.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopListReservationsInput = {
  status?: "draft" | "active" | "ready" | "delivered" | "expired" | "cancelled";
};
type ExpectedPetShopListReservationsOutputItem = {
  reservationId: string;
  customerId: string;
  status: string;
  confirmedAt?: string;
  expiresAt: string;
  readyAt?: string;
  deliveredAt?: string;
  createdAt: string;
  updatedAt: string;
  items: {
  reservationItemId: string;
  productId: string;
  quantity: number;
}[];
};
type ExpectedPetShopListReservationsOutput = ExpectedPetShopListReservationsOutputItem[];
type ExpectedPetShopUpdateReservationStatusInput = {
  reservationId: string;
  status: "draft" | "active" | "ready" | "delivered" | "expired" | "cancelled";
  cancelReason?: string;
  paymentId?: string;
};
type ExpectedPetShopUpdateReservationStatusOutput = {
  reservationId: string;
  status: string;
  readyAt?: string;
  deliveredAt?: string;
  cancelledAt?: string;
  cancelReason?: string;
  paymentId?: string;
  updatedAt: string;
};
type ExpectedPetShopPayInStoreInput = {
  reservationId: string;
  paymentMethod: unknown;
  paymentAmount: number;
};
type ExpectedPetShopPayInStoreOutput = {
  reservationId: string;
  status: string;
  deliveredAt: string;
  paymentId: string;
  updatedAt: string;
};
type ExpectedPetShopExpireReservationsInput = {};
type ExpectedPetShopExpireReservationsOutput = {
  expiredCount: number;
  expiredReservations: {
  reservationId: string;
  status: string;
  expiredAt: string;
}[];
  productsReleased: number;
};

type _PetShopListReservationsInput = Assert<Equal<PetShopListReservationsInput, ExpectedPetShopListReservationsInput>>;
type _PetShopListReservationsOutputItem = Assert<Equal<PetShopListReservationsOutputItem, ExpectedPetShopListReservationsOutputItem>>;
type _PetShopListReservationsOutput = Assert<Equal<PetShopListReservationsOutput, ExpectedPetShopListReservationsOutput>>;
type _PetShopUpdateReservationStatusInput = Assert<Equal<PetShopUpdateReservationStatusInput, ExpectedPetShopUpdateReservationStatusInput>>;
type _PetShopUpdateReservationStatusOutput = Assert<Equal<PetShopUpdateReservationStatusOutput, ExpectedPetShopUpdateReservationStatusOutput>>;
type _PetShopPayInStoreInput = Assert<Equal<PetShopPayInStoreInput, ExpectedPetShopPayInStoreInput>>;
type _PetShopPayInStoreOutput = Assert<Equal<PetShopPayInStoreOutput, ExpectedPetShopPayInStoreOutput>>;
type _PetShopExpireReservationsInput = Assert<Equal<PetShopExpireReservationsInput, ExpectedPetShopExpireReservationsInput>>;
type _PetShopExpireReservationsOutput = Assert<Equal<PetShopExpireReservationsOutput, ExpectedPetShopExpireReservationsOutput>>;

export {};
