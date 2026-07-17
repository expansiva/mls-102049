/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/expireReservations.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { IPaymentRepository } from '/_102049_/l1/petShop/layer_2_application/ports/paymentRepository.js';
import type { Reservation } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';
import type { Payment } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';

export interface ExpireReservationsInput {}

export interface ExpiredReservationSummary {
reservationId: string;
status: string;
expiredAt: string;
}

export interface ExpireReservationsOutput {
expiredCount: number;
expiredReservations: ExpiredReservationSummary[];
productsReleased: number;
}

export async function expireReservations(
ctx: RequestContext,
input: ExpireReservationsInput,
): Promise<ExpireReservationsOutput> {
void input;
const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');
const products = resolveRepository<IProductRepository>(ctx, 'Product');
const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');
const now = ctx.clock.nowIso();
const actorId = ctx.sessionContext.actorId ?? null;

const activeReservations = await reservations.findByStatus('active');
const readyReservations = await reservations.findByStatus('ready');
const activeReadyReservations = [...activeReservations, ...readyReservations];
const nowMs = Date.parse(now);
const expiredCandidates = activeReadyReservations.filter((reservation) => {
const expiresMs = Date.parse(reservation.expiresAt);
return Number.isFinite(expiresMs) && expiresMs < nowMs; // rule: reservationExpiresIn24Hours
});

if (expiredCandidates.length === 0) {
return {
expiredCount: 0,
expiredReservations: [],
productsReleased: 0,
};
}

const previousStatusById = new Map(expiredCandidates.map((reservation) => [
reservation.reservationId,
reservation.status,
]));

const updatedReservations: Reservation[] = expiredCandidates.map((reservation) => ({
...reservation,
status: 'expired',
expiredAt: now,
updatedAt: now, // rule: reservationStatusReflectsStage
}));

const expiredReservationIds = new Set(updatedReservations.map((reservation) => reservation.reservationId));
const remainingReservations = activeReadyReservations.filter(
(reservation) => !expiredReservationIds.has(reservation.reservationId),
);
const remainingProductIds = new Set<string>();
for (const reservation of remainingReservations) {
for (const item of reservation.reservationItems) {
remainingProductIds.add(item.productId);
}
}

const expiredItems = updatedReservations.flatMap((reservation) => reservation.reservationItems);
const affectedProductIds = [...new Set(expiredItems.map((item) => item.productId))];
const affectedProducts = await Promise.all(
affectedProductIds.map((productId) => products.getById(productId)),
);

const updatedProducts: Product[] = [];
let productsReleased = 0;
for (const product of affectedProducts) {
const heldByOther = remainingProductIds.has(product.productId);
if (!heldByOther && product.status !== 'available') {
updatedProducts.push({
...product,
status: 'available',
updatedAt: now, // rule: expiredReservationRestoresAvailability
});
productsReleased += 1;
}
}

const paymentEvents: Payment[] = [];
for (const reservation of updatedReservations) {
if (!reservation.paymentId) {
continue;
}
const history = await payments.listByOwnerId(reservation.reservationId);
const latest = history.reduce<Payment | null>((current, candidate) => {
if (!current) {
return candidate;
}
return Date.parse(candidate.createdAt) >= Date.parse(current.createdAt) ? candidate : current;
}, null);
const voidReason = JSON.stringify({
reservationId: reservation.reservationId,
paymentId: reservation.paymentId,
previousStatus: previousStatusById.get(reservation.reservationId) ?? 'unknown',
newStatus: 'expired',
expiredAt: now,
actorId,
timestamp: now,
});
paymentEvents.push({
paymentId: reservation.paymentId,
reservationId: reservation.reservationId,
amount: latest?.amount ?? 0,
paymentMethod: latest?.paymentMethod ?? 'cash',
status: latest?.status ?? 'posted',
voidedAt: latest?.voidedAt ?? null,
voidReason,
createdAt: now,
});
}

await ctx.data.runInTransaction(async (tx) => {
const txCtx: RequestContext = { ...ctx, data: tx };
const reservationsTx = resolveRepository<IReservationRepository>(txCtx, 'Reservation');
const productsTx = resolveRepository<IProductRepository>(txCtx, 'Product');
const paymentsTx = resolveRepository<IPaymentRepository>(txCtx, 'Payment');

for (const reservation of updatedReservations) {
await reservationsTx.save(reservation);
}
for (const product of updatedProducts) {
await productsTx.save(product);
}
for (const event of paymentEvents) {
await paymentsTx.append(event);
}
});

const expiredReservations: ExpiredReservationSummary[] = updatedReservations.map((reservation) => ({
reservationId: reservation.reservationId,
status: reservation.status,
expiredAt: reservation.expiredAt ?? now,
}));

return {
expiredCount: updatedReservations.length,
expiredReservations,
productsReleased,
};
}
