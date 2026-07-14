/// <mls fileReference="_102049_/l2/petShop/web/contracts/operatorSchedule.ts" enhancement="_blank"/>

export interface PetShopViewOperatorScheduleInput {}

export interface PetShopViewOperatorScheduleOutputItem {
  serviceBookingId: string;
  serviceId: string;
  customerName: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  notes: string;
}

export interface PetShopViewOperatorScheduleOutput {
  items: PetShopViewOperatorScheduleOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopViewServiceBookingDetailsInput {
  serviceBookingId: string;
}

export interface PetShopViewServiceBookingDetailsOutputItem {
  serviceBookingId: string;
  serviceId: string;
  operatorId: string;
  shiftId: string;
  customerName: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  notes: string;
  completedAt: string;
  cancelledAt: string;
  cancelReason: string;
  createdAt: string;
  updatedAt: string;
}

export type PetShopViewServiceBookingDetailsOutput = PetShopViewServiceBookingDetailsOutputItem;
