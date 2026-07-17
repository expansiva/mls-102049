/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createReservation.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IReservationRepository } from '/_102049_/l1/petShop/layer_2_application/ports/reservationRepository.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Reservation, ReservationItem } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import { reservationExpiresAfterConfirmedAt, reservationRequiresConfirmedAt } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface CreateReservationItemInput {
productId: string;
quantity: number;
}

export interface CreateReservationInput {
items: CreateReservationItemInput[];
}

export interface CreateReservationOutputItem {
reservationItemId: string;
productId: string;
quantity: number;
}

export interface CreateReservationOutput {
reservationId: string;
customerId: string;
status: string;
confirmedAt: string;
expiresAt: string;
createdAt: string;
updatedAt: string;
items: CreateReservationOutputItem[];
}

function addHoursIso(iso: string, hours: number): string {
const baseMs = Date.parse(iso);
return new Date(baseMs + hours * 60 * 60 * 1000).toISOString();
}

async function loadProducts(products: IProductRepository, productIds: string[]): Promise<Product[]> {
const results: Product[] = [];
for (const productId of productIds) {
try {
const product = await products.getById(productId);
results.push(product);
} catch {
// ignore here, caller will handle missing ids
}
}
return results;
}

export async function createReservation(
ctx: RequestContext,
input: CreateReservationInput,
): Promise<CreateReservationOutput> {
const actorId = ctx.sessionContext.actorId;
if (!actorId) {
throw new AppError(
'VALIDATION_ERROR',
'reservationRequiresAuthentication: actorId is required to create a reservation.',
400,
{ ruleId: 'reservationRequiresAuthentication' },
);
}

const reservations = resolveRepository<IReservationRepository>(ctx, 'Reservation');
const productsRepo = resolveRepository<IProductRepository>(ctx, 'Product');

const productIds = [...new Set((input.items ?? []).map((item) => item.productId))];
const products = await loadProducts(productsRepo, productIds);
const productsById = new Map(products.map((product) => [product.productId, product]));
const missingIds = productIds.filter((productId) => !productsById.has(productId));
if (missingIds.length > 0) {
throw new AppError(
'VALIDATION_ERROR',
'Produtos informados não foram encontrados.',
400,
{ missingIds },
);
}

const unavailable = products.filter((product) => product.status !== 'available');
if (unavailable.length > 0) {
throw new AppError(
'VALIDATION_ERROR',
'Produtos indisponíveis para reserva.',
400,
{ productIds: unavailable.map((product) => product.productId) },
);
}

const now = ctx.clock.nowIso();
const reservationId = ctx.idGenerator.newId();
const reservationItems: ReservationItem[] = (input.items ?? []).map((item) => ({
reservationItemId: ctx.idGenerator.newId(),
reservationId,
productId: item.productId,
quantity: item.quantity,
createdAt: now,
updatedAt: now,
}));

const confirmedAt = now; // rule: reservationStatusReflectsStage
const expiresAt = addHoursIso(now, 24); // rule: reservationExpiresIn24Hours

const reservation: Reservation = {
reservationId,
customerId: actorId,
status: 'active',
confirmedAt,
expiresAt,
readyAt: null,
deliveredAt: null,
expiredAt: null,
cancelledAt: null,
cancelReason: null,
paymentId: null,
reservationItems,
createdAt: now,
updatedAt: now,
};

if (!reservationRequiresConfirmedAt(reservation)) {
throw new AppError(
'VALIDATION_ERROR',
'reservationStatusReflectsStage: confirmedAt é obrigatório para status ativo.',
400,
{ ruleId: 'reservationStatusReflectsStage' },
);
}

if (!reservationExpiresAfterConfirmedAt({ confirmedAt: reservation.confirmedAt, expiresAt: reservation.expiresAt })) {
throw new AppError(
'VALIDATION_ERROR',
'reservationExpiresIn24Hours: expiresAt precisa ser 24h após confirmedAt.',
400,
{ ruleId: 'reservationExpiresIn24Hours' },
);
}

await ctx.data.runInTransaction(async (tx) => {
const txCtx = { ...ctx, data: tx };
const reservationsTx = resolveRepository<IReservationRepository>(txCtx, 'Reservation');
await reservationsTx.save(reservation);
// Modeling gap: Payment audit event requires domain fields not available in this usecase input.
});

return {
reservationId: reservation.reservationId,
customerId: reservation.customerId,
status: reservation.status,
confirmedAt: reservation.confirmedAt ?? now,
expiresAt: reservation.expiresAt,
createdAt: reservation.createdAt,
updatedAt: reservation.updatedAt,
items: reservation.reservationItems.map((item) => ({
reservationItemId: item.reservationItemId,
productId: item.productId,
quantity: item.quantity,
})),
};
}
