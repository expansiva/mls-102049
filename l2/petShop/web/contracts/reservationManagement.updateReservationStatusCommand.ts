/// <mls fileReference="_102049_/l2/petShop/web/contracts/reservationManagement.updateReservationStatusCommand.ts" enhancement="_blank"/>

// GENERATED from l4 bffCall — do not edit (bffCall updateReservationStatusCommand, command; Output kind=object; route petShop.reservationManagement.updateReservationStatusCommand).

export interface UpdateReservationStatusCommandInput {
  reservationId: string;
  newStatus: string;
  cancellationReason?: string;
  paymentId?: string;
}

export interface UpdateReservationStatusCommandOutput {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: string;
  expiresAt: string;
  confirmedAt: string;
  fulfilledAt: string;
  cancelledAt: string;
  cancellationReason: string;
  paymentId: string;
  updatedAt: string;
}

export const updateReservationStatusCommandRoute = 'petShop.reservationManagement.updateReservationStatusCommand' as const;
