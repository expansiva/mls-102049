/// <mls fileReference="_102049_/l4/petShop/contracts/reservationManagement.updateReservationStatusCommand.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102049_/l4/petShop/workspaces/reservationManagement.defs.ts — DO NOT EDIT.
// Contract of record: bffCall updateReservationStatusCommand (command); Output kind=object; route petShop.reservationManagement.updateReservationStatusCommand.

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
