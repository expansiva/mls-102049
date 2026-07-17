/// <mls fileReference="_102049_/l2/petShop/web/contracts/reservationManagement.ts" enhancement="_blank"/>

export interface PetShopListReservationsInput {
  status?: "draft" | "active" | "ready" | "delivered" | "expired" | "cancelled";
}

export interface PetShopListReservationsItem {
  reservationItemId: string;
  productId: string;
  quantity: number;
}

export interface PetShopListReservationsOutputItem {
  reservationId: string;
  customerId: string;
  status: string;
  confirmedAt?: string;
  expiresAt: string;
  readyAt?: string;
  deliveredAt?: string;
  createdAt: string;
  updatedAt: string;
  items: PetShopListReservationsItem[];
}

export type PetShopListReservationsOutput = PetShopListReservationsOutputItem[];

export interface PetShopUpdateReservationStatusInput {
  reservationId: string;
  status: "draft" | "active" | "ready" | "delivered" | "expired" | "cancelled";
  cancelReason?: string;
  paymentId?: string;
}

export interface PetShopUpdateReservationStatusOutput {
  reservationId: string;
  status: string;
  readyAt?: string;
  deliveredAt?: string;
  cancelledAt?: string;
  cancelReason?: string;
  paymentId?: string;
  updatedAt: string;
}

export interface PetShopPayInStoreInput {
  reservationId: string;
  paymentMethod: unknown;
  paymentAmount: number;
}

export interface PetShopPayInStoreOutput {
  reservationId: string;
  status: string;
  deliveredAt: string;
  paymentId: string;
  updatedAt: string;
}

export interface PetShopExpireReservationsInput {}

export interface PetShopExpireReservation {
  reservationId: string;
  status: string;
  expiredAt: string;
}

export interface PetShopExpireReservationsOutput {
  expiredCount: number;
  expiredReservations: PetShopExpireReservation[];
  productsReleased: number;
}
