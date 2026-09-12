/// <mls fileReference="_102049_/l4/petShop/contracts/reservationManagement.processPaymentCommand.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102049_/l4/petShop/workspaces/reservationManagement.defs.ts — DO NOT EDIT.
// Contract of record: bffCall processPaymentCommand (command); Output kind=object; route petShop.reservationManagement.processPaymentCommand.

export interface ProcessPaymentCommandInput {
  reservationId: string;
  method: string;
}

export interface ProcessPaymentCommandOutput {
  paymentId: string;
  reservationId: string;
  amount: number;
  method: string;
  status: string;
  receivedBy: string;
  createdAt: string;
  reservationStatus: string;
}

export const processPaymentCommandRoute = 'petShop.reservationManagement.processPaymentCommand' as const;
