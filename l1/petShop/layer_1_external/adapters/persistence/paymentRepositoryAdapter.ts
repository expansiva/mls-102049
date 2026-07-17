/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/paymentRepositoryAdapter.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IPaymentRepository, PaymentEvent } from '/_102049_/l1/petShop/layer_2_application/ports/paymentRepository.js';
import type { Payment } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';

interface PaymentRow {
payment_id: string;
reservation_id: string;
payment_method: string;
status: string;
created_at: string;
details: string | null;
}

interface PaymentDetails {
amount: number;
voidedAt: string | null;
voidReason: string | null;
}

function toRow(payment: Payment): PaymentRow {
const details: PaymentDetails = {
amount: payment.amount,
voidedAt: payment.voidedAt,
voidReason: payment.voidReason,
};
return {
payment_id: payment.paymentId,
reservation_id: payment.reservationId,
payment_method: payment.paymentMethod,
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
voidedAt: null,
voidReason: null,
};
}
}

function toDomain(row: PaymentRow): Payment {
const details = parseDetails(row);
return {
paymentId: row.payment_id,
reservationId: row.reservation_id,
amount: details.amount,
paymentMethod: row.payment_method as Payment['paymentMethod'],
status: row.status as Payment['status'],
voidedAt: details.voidedAt,
voidReason: details.voidReason,
createdAt: row.created_at,
};
}

export function createPaymentRepositoryAdapter(ctx: RequestContext): IPaymentRepository {
const getTable = () => ctx.data.moduleData.getTable<PaymentRow>('payment');
return {
async append(record: PaymentEvent): Promise<void> {
await (await getTable()).insert({ record: toRow(record) });
},
async listByOwnerId(ownerId: string): Promise<PaymentEvent[]> {
const rows = await (await getTable()).findMany({
where: { reservation_id: ownerId },
orderBy: { field: 'created_at', direction: 'asc' },
});
return rows.map(toDomain);
},
async listByPeriod(from: Date, to: Date): Promise<PaymentEvent[]> {
const fromMs = from.getTime();
const toMs = to.getTime();
const rows = await (await getTable()).findMany({
orderBy: { field: 'created_at', direction: 'asc' },
});
return rows
.filter((row) => {
const createdMs = new Date(row.created_at).getTime();
return createdMs >= fromMs && createdMs <= toMs;
})
.map(toDomain);
},
};
}
