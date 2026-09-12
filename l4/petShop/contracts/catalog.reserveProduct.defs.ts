/// <mls fileReference="_102049_/l4/petShop/contracts/catalog.reserveProduct.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102049_/l4/petShop/workspaces/catalog.defs.ts — DO NOT EDIT.
// Contract of record: bffCall reserveProduct (command); Output kind=object; route petShop.catalog.reserveProduct.

export interface ReserveProductInput {
  customerName: string;
  customerPhone: string;
  productId: string;
  quantity: number;
}

export interface ReserveProductItemsItem {
  productId: string;
  productName: string;
  quantity: number;
}

export interface ReserveProductOutput {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  items: ReserveProductItemsItem[];
}

export const reserveProductRoute = 'petShop.catalog.reserveProduct' as const;
