/// <mls fileReference="_102049_/l2/petShop/web/contracts/reservationManagement.processPaymentCommand.ts" enhancement="_blank"/>

// GENERATED from l4 bffCall — do not edit (bffCall processPaymentCommand, command; Output kind=object; route petShop.reservationManagement.processPaymentCommand).

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
