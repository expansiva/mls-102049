/// <mls fileReference="_102049_/l2/petShop/web/contracts/catalog.reserveProduct.ts" enhancement="_blank"/>

// GENERATED from l4 bffCall — do not edit (bffCall reserveProduct, command; Output kind=object; route petShop.catalog.reserveProduct).

export interface ReserveProductInput {
  customerName: string;
  customerPhone: string;
  productId: string;
  quantity: number;
}

export interface ReserveProductOutput {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  items: { productId: string; productName: string; quantity: number }[];
}

export const reserveProductRoute = 'petShop.catalog.reserveProduct' as const;
