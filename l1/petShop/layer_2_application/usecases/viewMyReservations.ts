/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewMyReservations.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { Reservation, ReservationStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

export interface ViewMyReservationsInput {}

export interface ViewMyReservationsItem {
  productId: string;
  quantity: number;
}

export interface ViewMyReservationsEntry {
  reservationId: string;
  status: string;
  expiresAt: string;
  createdAt: string;
  confirmedAt?: string;
  readyAt?: string;
  items: ViewMyReservationsItem[];
}

export type ViewMyReservationsOutput = ViewMyReservationsEntry[];

const ALLOWED_STATUSES: ReadonlySet<ReservationStatus> = new Set<ReservationStatus>([
  'draft',
  'active',
  'ready',
  'delivered',
  'expired',
  'cancelled',
]);

export async function viewMyReservations(
  ctx: RequestContext,
  _input: ViewMyReservationsInput,
): Promise<ViewMyReservationsOutput> {
  const actorId = ctx.sessionContext.actorId;
  if (!actorId) {
    throw new AppError(
      'UNAUTHORIZED',
      'Authentication is required to view reservations.',
      401,
      { ruleId: 'reservationRequiresAuthentication' },
    );
  }

  const reservationPort = resolveRepository<IReservationRepository>(ctx, 'Reservation');

  const reservations = await reservationPort.findByCustomerId(actorId);

  const entries: ViewMyReservationsEntry[] = [];

  for (const reservation of reservations) {
    // rule: reservationStatusReflectsStage — skip reservations with unknown status and log a warning
    if (!ALLOWED_STATUSES.has(reservation.status)) {
      ctx.log.error('reservationStatusReflectsStage: skipping reservation with unknown status', {
        reservationId: reservation.reservationId,
        status: reservation.status,
      });
      continue;
    }

    const items: ViewMyReservationsItem[] = (reservation.reservationItems ?? []).map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));

    const entry: ViewMyReservationsEntry = {
      reservationId: reservation.reservationId,
      status: reservation.status,
      expiresAt: reservation.expiresAt,
      createdAt: reservation.createdAt,
      items,
    };

    if (reservation.confirmedAt) {
      entry.confirmedAt = reservation.confirmedAt;
    }
    if (reservation.readyAt) {
      entry.readyAt = reservation.readyAt;
    }

    entries.push(entry);
  }

  // Sort by createdAt descending (rule: reservationStatusReflectsStage ensures only valid stages are returned)
  entries.sort((a, b) => {
    const aMs = Date.parse(a.createdAt);
    const bMs = Date.parse(b.createdAt);
    if (Number.isNaN(aMs) || Number.isNaN(bMs)) {
      return 0;
    }
    return bMs - aMs;
  });

  return entries;
}
