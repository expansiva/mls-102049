/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/payment.ts" enhancement="_blank"/>
export type PaymentMethod = 'cash' | 'creditCard' | 'debitCard' | 'pix';
export type PaymentStatus = 'posted' | 'voided';

export interface Payment {
  paymentId: string;
  reservationId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  receivedBy: string;
  voidedAt: string | null;
  voidReason: string | null;
  createdAt: string;
}

export const PAYMENT_STATUS_TRANSITIONS: Record<PaymentStatus, PaymentStatus[]> = {
  posted: ['voided'],
  voided: [],
};

export function canTransitionPayment(from: PaymentStatus, to: PaymentStatus): boolean {
  return PAYMENT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}
