/// <mls fileReference="_102049_/l2/petShop/web/contracts/operatorSchedule.test.ts" enhancement="_blank"/>

import type { PetShopViewOperatorScheduleInput, PetShopViewOperatorScheduleOutput, PetShopViewOperatorScheduleOutputItem, PetShopViewServiceBookingDetailsInput, PetShopViewServiceBookingDetailsOutput, PetShopViewServiceBookingDetailsOutputItem } from './operatorSchedule.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopViewOperatorScheduleInput = {};
type ExpectedPetShopViewOperatorScheduleOutputItem = {
  serviceBookingId: string;
  serviceId: string;
  customerName: string;
  customerPhone: string;
  bookingDate: string;
  bookingTime: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  notes: string;
};
type ExpectedPetShopViewOperatorScheduleOutput = { items: ExpectedPetShopViewOperatorScheduleOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopViewServiceBookingDetailsInput = {
  serviceBookingId: string;
};
type ExpectedPetShopViewServiceBookingDetailsOutputItem = {
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
};
type ExpectedPetShopViewServiceBookingDetailsOutput = ExpectedPetShopViewServiceBookingDetailsOutputItem;

type _PetShopViewOperatorScheduleInput = Assert<Equal<PetShopViewOperatorScheduleInput, ExpectedPetShopViewOperatorScheduleInput>>;
type _PetShopViewOperatorScheduleOutputItem = Assert<Equal<PetShopViewOperatorScheduleOutputItem, ExpectedPetShopViewOperatorScheduleOutputItem>>;
type _PetShopViewOperatorScheduleOutput = Assert<Equal<PetShopViewOperatorScheduleOutput, ExpectedPetShopViewOperatorScheduleOutput>>;
type _PetShopViewServiceBookingDetailsInput = Assert<Equal<PetShopViewServiceBookingDetailsInput, ExpectedPetShopViewServiceBookingDetailsInput>>;
type _PetShopViewServiceBookingDetailsOutputItem = Assert<Equal<PetShopViewServiceBookingDetailsOutputItem, ExpectedPetShopViewServiceBookingDetailsOutputItem>>;
type _PetShopViewServiceBookingDetailsOutput = Assert<Equal<PetShopViewServiceBookingDetailsOutput, ExpectedPetShopViewServiceBookingDetailsOutput>>;

export {};