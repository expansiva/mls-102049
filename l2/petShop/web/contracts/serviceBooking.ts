/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceBooking.ts" enhancement="_blank"/>

export interface PetShopBrowseServiceCatalogInput {}

export interface PetShopBrowseServiceCatalogOutputItem {
  serviceId: string;
  name: string;
  description: string;
  estimatedDurationMinutes: number;
  price: number;
}

export interface PetShopBrowseServiceCatalogOutput {
  items: PetShopBrowseServiceCatalogOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopCreateServiceBookingInput {
  serviceId: string;
  customerName: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  notes?: string;
}

export interface PetShopCreateServiceBookingOutput {
  serviceBookingId: string;
  serviceId: string;
  operatorId: string;
  shiftId: string;
  bookingDate: string;
  bookingTime: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  customerName: string;
}
