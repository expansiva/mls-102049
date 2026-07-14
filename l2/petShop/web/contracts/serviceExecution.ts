/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceExecution.ts" enhancement="_blank"/>

export interface PetShopStartServiceExecutionInput {
  serviceBookingId: string;
}

export interface PetShopStartServiceExecutionOutput {
  serviceBookingId: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  updatedAt: string;
}

export interface PetShopCompleteServiceExecutionInput {
  serviceBookingId: string;
}

export interface PetShopCompleteServiceExecutionOutput {
  serviceBookingId: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  completedAt: string;
}
