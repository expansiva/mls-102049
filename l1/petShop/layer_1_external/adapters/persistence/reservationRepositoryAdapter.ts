/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/reservationRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IReservationRepository,
  ReservationFilter,
  DateRange,
} from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type {
  Reservation,
  ReservationItem,
} from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

interface ReservationRow {
  reservation_id: string;
  status: string;
  payment_id: string | null;
  created_at: string;
  details: string | null;
}

interface ReservationDetails {
  customerName: string;
  customerPhone: string;
  expiresAt: string;
  confirmedAt: string | null;
  fulfilledAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  updatedAt: string;
  items: ReservationItem[];
}

function toRow(reservation: Reservation): ReservationRow {
  const details: ReservationDetails = {
    customerName: reservation.customerName,
    customerPhone: reservation.customerPhone,
    expiresAt: reservation.expiresAt,
    confirmedAt: reservation.confirmedAt,
    fulfilledAt: reservation.fulfilledAt,
    cancelledAt: reservation.cancelledAt,
    cancellationReason: reservation.cancellationReason,
    updatedAt: reservation.updatedAt,
    items: reservation.items,
  };
  return {
    reservation_id: reservation.reservationId,
    status: reservation.status,
    payment_id: reservation.paymentId,
    created_at: reservation.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: ReservationRow): ReservationDetails {
  try {
    return JSON.parse(row.details ?? '{}') as ReservationDetails;
  } catch {
    return {
      customerName: '',
      customerPhone: '',
      expiresAt: row.created_at,
      confirmedAt: null,
      fulfilledAt: null,
      cancelledAt: null,
      cancellationReason: null,
      updatedAt: row.created_at,
      items: [],
    };
  }
}

function toDomain(row: ReservationRow): Reservation {
  const d = parseDetails(row);
  return {
    reservationId: row.reservation_id,
    customerName: d.customerName,
    customerPhone: d.customerPhone,
    status: row.status as Reservation['status'],
    expiresAt: d.expiresAt,
    confirmedAt: d.confirmedAt,
    fulfilledAt: d.fulfilledAt,
    cancelledAt: d.cancelledAt,
    cancellationReason: d.cancellationReason,
    paymentId: row.payment_id,
    items: d.items ?? [],
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createReservationRepositoryAdapter(ctx: RequestContext): IReservationRepository {
  const getTable = () => ctx.data.moduleData.getTable<ReservationRow>('reservation');

  return {
    async getById(id) {
      const row = await (await getTable()).findOne({ where: { reservation_id: id } });
      if (!row) throw new AppError('NOT_FOUND', `Reservation ${id} not found`, 404, { reservationId: id });
      return toDomain(row);
    },

    async list(filter: ReservationFilter) {
      const where: Partial<ReservationRow> = {};
      if (filter?.status) where.status = filter.status;
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
      } else {
        await repo.insert({ record: toRow(reservation) });
      }
    },

    async listByPeriod(period: DateRange) {
      const rows = await (await getTable()).findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const fromMs = Date.parse(period.from);
      const toMs = Date.parse(period.to);
      return rows
        .map(toDomain)
        .filter((reservation) => {
          const createdMs = Date.parse(reservation.createdAt);
          if (Number.isNaN(createdMs)) return false;
          if (!Number.isNaN(fromMs) && createdMs < fromMs) return false;
          if (!Number.isNaN(toMs) && createdMs > toMs) return false;
          return true;
        });
    },

    async existsById(id) {
      const row = await (await getTable()).findOne({ where: { reservation_id: id } });
      return row != null;
    },
  };
}
