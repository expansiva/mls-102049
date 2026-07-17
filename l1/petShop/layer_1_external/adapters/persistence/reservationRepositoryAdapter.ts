/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/reservationRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IReservationRepository, ReservationFilter } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { Reservation, ReservationItem } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

interface ReservationRow {
reservation_id: string;
customer_id: string;
status: string;
payment_id: string | null;
created_at: string;
details: string | null;
}

interface ReservationDetails {
confirmedAt: string | null;
expiresAt: string;
readyAt: string | null;
deliveredAt: string | null;
expiredAt: string | null;
cancelledAt: string | null;
cancelReason: string | null;
updatedAt: string;
reservationItems: ReservationItem[];
}

function toRow(reservation: Reservation): ReservationRow {
const details: ReservationDetails = {
confirmedAt: reservation.confirmedAt,
expiresAt: reservation.expiresAt,
readyAt: reservation.readyAt,
deliveredAt: reservation.deliveredAt,
expiredAt: reservation.expiredAt,
cancelledAt: reservation.cancelledAt,
cancelReason: reservation.cancelReason,
updatedAt: reservation.updatedAt,
reservationItems: reservation.reservationItems,
};
return {
reservation_id: reservation.reservationId,
customer_id: reservation.customerId,
status: reservation.status,
payment_id: reservation.paymentId,
created_at: reservation.createdAt,
details: JSON.stringify(details),
};
}

function fallbackDetails(row: ReservationRow): ReservationDetails {
return {
confirmedAt: null,
expiresAt: row.created_at,
readyAt: null,
deliveredAt: null,
expiredAt: null,
cancelledAt: null,
cancelReason: null,
updatedAt: row.created_at,
reservationItems: [],
};
}

function parseDetails(row: ReservationRow): ReservationDetails {
if (!row.details) {
return fallbackDetails(row);
}
try {
return JSON.parse(row.details) as ReservationDetails;
} catch {
return fallbackDetails(row);
}
}

function toDomain(row: ReservationRow): Reservation {
const details = parseDetails(row);
return {
reservationId: row.reservation_id,
customerId: row.customer_id,
status: row.status as Reservation['status'],
confirmedAt: details.confirmedAt,
expiresAt: details.expiresAt,
readyAt: details.readyAt,
deliveredAt: details.deliveredAt,
expiredAt: details.expiredAt,
cancelledAt: details.cancelledAt,
cancelReason: details.cancelReason,
paymentId: row.payment_id,
reservationItems: details.reservationItems ?? [],
createdAt: row.created_at,
updatedAt: details.updatedAt,
};
}

export function createReservationRepositoryAdapter(ctx: RequestContext): IReservationRepository {
const getTable = () => ctx.data.moduleData.getTable<ReservationRow>('reservation');
return {
async getById(id) {
const row = await (await getTable()).findOne({ where: { reservation_id: id } });
if (!row) {
throw new AppError('NOT_FOUND', `Reservation ${id} not found`, 404, { id });
}
return toDomain(row);
},
async list(filter: ReservationFilter) {
const where: Partial<ReservationRow> = {};
if (filter?.customerId) {
where.customer_id = filter.customerId;
}
if (filter?.status) {
where.status = filter.status;
}
const rows = await (await getTable()).findMany({
where,
orderBy: { field: 'created_at', direction: 'desc' },
});
return rows.map(toDomain);
},
async save(reservation) {
const repo = await getTable();
const existing = await repo.findOne({ where: { reservation_id: reservation.reservationId } });
if (existing) {
await repo.update({ where: { reservation_id: reservation.reservationId }, patch: toRow(reservation) });
return;
}
await repo.insert({ record: toRow(reservation) });
},
async findByCustomerId(customerId) {
const rows = await (await getTable()).findMany({
where: { customer_id: customerId },
orderBy: { field: 'created_at', direction: 'desc' },
});
return rows.map(toDomain);
},
async findByStatus(status) {
const rows = await (await getTable()).findMany({
where: { status },
orderBy: { field: 'created_at', direction: 'desc' },
});
return rows.map(toDomain);
},
};
}
