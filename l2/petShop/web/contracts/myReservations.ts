/// <mls fileReference="_102049_/l2/petShop/web/contracts/myReservations.ts" enhancement="_blank"/>

export interface PetShopCreateReservationInput {
  items: string;
}

export interface PetShopCreateReservationItem {
  reservationItemId: string;
  productId: string;
  quantity: number;
}

export interface PetShopCreateReservationOutput {
  reservationId: string;
  customerId: string;
  status: string;
  confirmedAt: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  items: PetShopCreateReservationItem[];
}

export interface PetShopCancelReservationInput {
  reservationId: string;
  cancelReason?: string;
}

export interface PetShopCancelReservationRestoredProduct {
  productId: string;
  available: boolean;
}

export interface PetShopCancelReservationOutput {
  reservationId: string;
  status: string;
  cancelledAt: string;
  cancelReason?: string;
  updatedAt: string;
  restoredProducts: PetShopCancelReservationRestoredProduct[];
}

export interface PetShopViewMyReservationsInput {
}

export interface PetShopViewMyReservationsItem {
  productId: string;
  quantity: number;
}

export interface PetShopViewMyReservationsOutputItem {
  reservationId: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  confirmedAt?: string;
  readyAt?: string;
  items: PetShopViewMyReservationsItem[];
}

export type PetShopViewMyReservationsOutput = PetShopViewMyReservationsOutputItem[];
