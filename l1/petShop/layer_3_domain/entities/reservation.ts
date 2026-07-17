/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/reservation.ts" enhancement="_blank"/>
export type ReservationStatus = 'draft' | 'active' | 'ready' | 'delivered' | 'expired' | 'cancelled';

export interface ReservationItem {
reservationItemId: string;
reservationId: string;
productId: string;
quantity: number;
createdAt: string;
updatedAt: string;
}

export interface Reservation {
reservationId: string;
customerId: string;
status: ReservationStatus;
confirmedAt: string | null;
expiresAt: string;
readyAt: string | null;
deliveredAt: string | null;
expiredAt: string | null;
cancelledAt: string | null;
cancelReason: string | null;
paymentId: string | null;
reservationItems: ReservationItem[];
createdAt: string;
updatedAt: string;
}

export function reservationRequiresConfirmedAt(input: Pick<Reservation, 'status' | 'confirmedAt'>): boolean {
if (input.status === 'draft') {
return true;
}
return typeof input.confirmedAt === 'string' && input.confirmedAt.length > 0;
}

export function reservationRequiresReadyAt(input: Pick<Reservation, 'status' | 'readyAt'>): boolean {
if (input.status !== 'ready' && input.status !== 'delivered') {
return true;
}
return typeof input.readyAt === 'string' && input.readyAt.length > 0;
}

export function reservationRequiresDeliveredAt(input: Pick<Reservation, 'status' | 'deliveredAt'>): boolean {
if (input.status !== 'delivered') {
return true;
}
return typeof input.deliveredAt === 'string' && input.deliveredAt.length > 0;
}

export function reservationRequiresExpiredAt(input: Pick<Reservation, 'status' | 'expiredAt'>): boolean {
if (input.status !== 'expired') {
return true;
}
return typeof input.expiredAt === 'string' && input.expiredAt.length > 0;
}

export function reservationRequiresCancelledAt(input: Pick<Reservation, 'status' | 'cancelledAt'>): boolean {
if (input.status !== 'cancelled') {
return true;
}
return typeof input.cancelledAt === 'string' && input.cancelledAt.length > 0;
}

export function reservationPaymentRequiresDelivered(input: Pick<Reservation, 'status' | 'paymentId'>): boolean {
if (input.paymentId === null) {
return true;
}
return input.status === 'delivered';
}

export function reservationExpiresAfterConfirmedAt(input: Pick<Reservation, 'confirmedAt' | 'expiresAt'>): boolean {
if (!input.confirmedAt) {
return false;
}
const confirmedMs = Date.parse(input.confirmedAt);
const expiresMs = Date.parse(input.expiresAt);
if (Number.isNaN(confirmedMs) || Number.isNaN(expiresMs)) {
return false;
}
const twentyFourHoursMs = 24 * 60 * 60 * 1000;
return expiresMs - confirmedMs === twentyFourHoursMs;
}
