/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/listReservations.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { Reservation, ReservationStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

export interface ListReservationsInput {
status?: string;
}

export interface ListReservationsItemItem {
reservationItemId: string;
productId: string;
quantity: number;
}

export interface ListReservationsItem {
reservationId: string;
customerId: string;
status: string;
confirmedAt?: string;
expiresAt: string;
readyAt?: string;
deliveredAt?: string;
createdAt: string;
updatedAt: string;
items: ListReservationsItemItem[];
}

export interface ListReservationsOutput extends Array<ListReservationsItem> {}

function resolveEffectiveStatus(reservation: Reservation, nowIso: string): ReservationStatus {
if (reservation.deliveredAt) {
// rule: reservationStatusReflectsStage
return 'delivered';
}
if (reservation.readyAt && !reservation.deliveredAt) {
// rule: reservationStatusReflectsStage
return 'ready';
}
if (reservation.status === 'active' && !reservation.readyAt) {
const expiresMs = Date.parse(reservation.expiresAt);
const nowMs = Date.parse(nowIso);
if (!Number.isNaN(expiresMs) && !Number.isNaN(nowMs) && expiresMs < nowMs) {
// rule: reservationStatusReflectsStage
return 'expired';
}
}
return reservation.status;
}

export async function listReservations(
ctx: RequestContext,
input: ListReservationsInput,
): Promise<ListReservationsOutput> {
const reservationsRepo = resolveRepository<IReservationRepository>(ctx, 'Reservation');
const filter = input.status ? { status: input.status as ReservationStatus } : {};
const reservations = await reservationsRepo.list(filter);
const nowIso = ctx.clock.nowIso();
return reservations
.map((reservation) => ({
reservationId: reservation.reservationId,
customerId: reservation.customerId,
status: resolveEffectiveStatus(reservation, nowIso),
confirmedAt: reservation.confirmedAt ?? undefined,
expiresAt: reservation.expiresAt,
readyAt: reservation.readyAt ?? undefined,
deliveredAt: reservation.deliveredAt ?? undefined,
createdAt: reservation.createdAt,
updatedAt: reservation.updatedAt,
items: (reservation.reservationItems ?? []).map((item) => ({
reservationItemId: item.reservationItemId,
productId: item.productId,
quantity: item.quantity,
})),
}))
.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}
