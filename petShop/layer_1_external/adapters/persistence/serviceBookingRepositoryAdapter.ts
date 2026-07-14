/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBookingRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IServiceBookingRepository, ServiceBookingFilter, DateRange } from '/_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.js';
import type { ServiceBooking, ServiceBookingStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';

interface ServiceBookingRow {
  service_booking_id: string;
  service_id: string;
  operator_id: string;
  shift_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface ServiceBookingDetails {
  customer_name: string;
  customer_phone: string;
  booking_date: string;
  booking_time: string;
  notes: string | null;
  completed_at: string | null;
  cancelled_at: string | null;
  cancel_reason: string | null;
  updated_at: string;
}

function toRow(booking: ServiceBooking): ServiceBookingRow {
  const details: ServiceBookingDetails = {
    customer_name: booking.customerName,
    customer_phone: booking.customerPhone,
    booking_date: booking.bookingDate,
    booking_time: booking.bookingTime,
    notes: booking.notes,
    completed_at: booking.completedAt,
    cancelled_at: booking.cancelledAt,
    cancel_reason: booking.cancelReason,
    updated_at: booking.updatedAt,
  };
  return {
    service_booking_id: booking.serviceBookingId,
    service_id: booking.serviceId,
    operator_id: booking.operatorId,
    shift_id: booking.shiftId,
    status: booking.status,
    created_at: booking.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: ServiceBookingRow): ServiceBookingDetails {
  try {
    return JSON.parse(row.details ?? '{}') as ServiceBookingDetails;
  } catch {
    return {
      customer_name: '',
      customer_phone: '',
      booking_date: '',
      booking_time: '',
      notes: null,
      completed_at: null,
      cancelled_at: null,
      cancel_reason: null,
      updated_at: row.created_at,
    };
  }
}

function toDomain(row: ServiceBookingRow): ServiceBooking {
  const d = parseDetails(row);
  return {
    serviceBookingId: row.service_booking_id,
    serviceId: row.service_id,
    operatorId: row.operator_id,
    shiftId: row.shift_id,
    customerName: d.customer_name,
    customerPhone: d.customer_phone,
    bookingDate: d.booking_date,
    bookingTime: d.booking_time,
    status: row.status as ServiceBookingStatus,
    notes: d.notes,
    completedAt: d.completed_at,
    cancelledAt: d.cancelled_at,
    cancelReason: d.cancel_reason,
    createdAt: row.created_at,
    updatedAt: d.updated_at,
  };
}

export function createServiceBookingRepositoryAdapter(ctx: RequestContext): IServiceBookingRepository {
  const getTable = () => ctx.data.moduleData.getTable<ServiceBookingRow>('service_booking');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { service_booking_id: id } });
      if (!row) throw new AppError('NOT_FOUND', `ServiceBooking ${id} not found`, 404, { serviceBookingId: id });
      return toDomain(row);
    },

    async list(filter?: ServiceBookingFilter) {
      const repo = await getTable();
      const where: Partial<ServiceBookingRow> = {};
      if (filter?.serviceId) where.service_id = filter.serviceId;
      if (filter?.operatorId) where.operator_id = filter.operatorId;
      if (filter?.shiftId) where.shift_id = filter.shiftId;
      if (filter?.status) where.status = filter.status;
      if (filter?.serviceBookingId) where.service_booking_id = filter.serviceBookingId;

      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });

      let results = rows.map(toDomain);

      if (filter?.bookingDate) {
        results = results.filter((b) => b.bookingDate === filter.bookingDate);
      }

      return results;
    },

    async save(booking) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { service_booking_id: booking.serviceBookingId } });
      if (existing) {
        await repo.update({ where: { service_booking_id: booking.serviceBookingId }, patch: toRow(booking) });
      } else {
        await repo.insert({ record: toRow(booking) });
      }
    },

    async findByCustomerId(customerId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const all = rows.map(toDomain);
      // No dedicated customerId column; customer_phone is the closest customer identifier.
      return all.filter((b) => b.customerPhone === customerId);
    },

    async findByPeriod(period: DateRange) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const all = rows.map(toDomain);
      return all.filter((b) => b.bookingDate >= period.from && b.bookingDate <= period.to);
    },
  };
}
