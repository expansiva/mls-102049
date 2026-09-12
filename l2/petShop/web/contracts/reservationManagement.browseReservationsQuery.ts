/// <mls fileReference="_102049_/l2/petShop/web/contracts/reservationManagement.browseReservationsQuery.ts" enhancement="_blank"/>

// GENERATED from l4 bffCall — do not edit (bffCall browseReservationsQuery, query; Output kind=array; route petShop.reservationManagement.browseReservationsQuery).

export interface BrowseReservationsQueryInput {
  searchTerm?: string;
  statusFilter?: string;
  page?: number;
  pageSize?: number;
}

export interface BrowseReservationsQueryOutput {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
}

export const browseReservationsQueryRoute = 'petShop.reservationManagement.browseReservationsQuery' as const;
