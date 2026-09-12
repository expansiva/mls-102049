/// <mls fileReference="_102049_/l4/petShop/contracts/reservationManagement.browseReservationsQuery.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102049_/l4/petShop/workspaces/reservationManagement.defs.ts — DO NOT EDIT.
// Contract of record: bffCall browseReservationsQuery (query); Output kind=list; route petShop.reservationManagement.browseReservationsQuery.

export interface BrowseReservationsQueryInput {
  searchTerm?: string;
  statusFilter?: string;
  page?: number;
  pageSize?: number;
}

export interface BrowseReservationsQueryItem {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
}

export type BrowseReservationsQueryOutput = BrowseReservationsQueryItem[];

export const browseReservationsQueryRoute = 'petShop.reservationManagement.browseReservationsQuery' as const;
