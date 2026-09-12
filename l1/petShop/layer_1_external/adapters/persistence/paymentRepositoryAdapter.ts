/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/paymentRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  DateRange,
  IPaymentRepository,
  PaymentEvent,
  ReservationId,
} from '/_102049_/l1/petShop/layer_2_application/ports/paymentRepository.js';
import type { Payment } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';

interface PaymentRow {
  payment_id: string;
  reservation_id: string;
  method: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface PaymentDetails {
  amount: number;
  receivedBy: string;
  voidedAt: string | null;
  voidReason: string | null;
}

function toRow(payment: Payment): PaymentRow {
  const details: PaymentDetails = {
    amount: payment.amount,
    receivedBy: payment.receivedBy,
    voidedAt: payment.voidedAt,
    voidReason: payment.voidReason,
  };
  return {
    payment_id: payment.paymentId,
    reservation_id: payment.reservationId,
    method: payment.method,
    status: payment.status,
    created_at: payment.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: PaymentRow): PaymentDetails {
  try {
    return JSON.parse(row.details ?? '{}') as PaymentDetails;
  } catch {
    return {
      amount: 0,
      receivedBy: '',
      voidedAt: null,
      voidReason: null,
    };
  }
}

function toDomain(row: PaymentRow): Payment {
  const d = parseDetails(row);
  return {
    paymentId: row.payment_id,
    reservationId: row.reservation_id,
    amount: d.amount,
    method: row.method as Payment['method'],
    status: row.status as Payment['status'],
    receivedBy: d.receivedBy,
    voidedAt: d.voidedAt,
    voidReason: d.voidReason,
    createdAt: row.created_at,
  };
}

export function createPaymentRepositoryAdapter(ctx: RequestContext): IPaymentRepository {
  const getTable = () => ctx.data.moduleData.getTable<PaymentRow>('payment');

  return {
    async append(record: PaymentEvent) {
      await (await getTable()).insert({ record: toRow(record) });
    },

    async listByOwnerId(ownerId: ReservationId) {
      const rows = await (await getTable()).findMany({
        where: { reservation_id: ownerId },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async listByPeriod(period: DateRange) {
      const rows = await (await getTable()).findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows
        .filter((row) => row.created_at >= period.from && row.created_at <= period.to)
        .map(toDomain);
    },
  };
}
