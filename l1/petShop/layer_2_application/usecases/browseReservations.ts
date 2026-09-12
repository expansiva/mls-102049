/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseReservations.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { Reservation, ReservationStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

const RESERVATION_STATUSES: readonly ReservationStatus[] = [
  'pending',
  'confirmed',
  'fulfilled',
  'cancelled',
];

export interface BrowseReservationsInput {
  searchTerm?: string;
  statusFilter?: string;
  page?: number;
  pageSize?: number;
}

export interface BrowseReservationsItem {
  reservationId: string;
  customerName: string;
  customerPhone: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface BrowseReservationsOutput {
  items: BrowseReservationsItem[];
}

function isReservationStatus(value: string): value is ReservationStatus {
  return (RESERVATION_STATUSES as readonly string[]).includes(value);
}

function projectReservation(reservation: Reservation): BrowseReservationsItem {
  // rule: reservationValidity24h — surface stored expiresAt (createdAt + 24h); do not invent another window
  return {
    reservationId: reservation.reservationId,
    customerName: reservation.customerName,
    customerPhone: reservation.customerPhone,
    status: reservation.status,
    expiresAt: reservation.expiresAt,
    createdAt: reservation.createdAt,
    updatedAt: reservation.updatedAt,
  };
}

export async function browseReservations(
  ctx: RequestContext,
  input: BrowseReservationsInput,
): Promise<BrowseReservationsOutput> {
  // actorSession resolved for audit context only; not required as input
  void ctx.sessionContext.actorId;

  const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');

  let statusFilter: ReservationStatus | undefined;
  if (input.statusFilter != null && input.statusFilter.length > 0) {
    // rule: reservationStatuses
    if (!isReservationStatus(input.statusFilter)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'reservationStatuses: statusFilter must be one of pending|confirmed|fulfilled|cancelled.',
        400,
        { ruleId: 'reservationStatuses', statusFilter: input.statusFilter },
      );
    }
    statusFilter = input.statusFilter;
  }

  const loaded = await reservations.list(statusFilter ? { status: statusFilter } : {});

  // rule: reservationStatuses — keep only canonical statuses
  let filtered = loaded.filter((r) => isReservationStatus(r.status));

  if (statusFilter) {
    filtered = filtered.filter((r) => r.status === statusFilter);
  }

  const searchTerm = input.searchTerm?.trim().toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter((r) => {
      const name = r.customerName.toLowerCase();
      const phone = r.customerPhone.toLowerCase();
      const id = r.reservationId.toLowerCase();
      return name.includes(searchTerm) || phone.includes(searchTerm) || id.includes(searchTerm);
    });
  }

  filtered = [...filtered].sort((a, b) => {
    const aMs = Date.parse(a.createdAt);
    const bMs = Date.parse(b.createdAt);
    return (Number.isNaN(bMs) ? 0 : bMs) - (Number.isNaN(aMs) ? 0 : aMs);
  });

  const page = input.page != null && input.page > 0 ? input.page : 1;
  const pageSize =
    input.pageSize != null && input.pageSize > 0 ? input.pageSize : filtered.length || 1;
  const offset = (page - 1) * pageSize;
  const pageItems = filtered.slice(offset, offset + pageSize);

  return {
    items: pageItems.map(projectReservation),
  };
}
