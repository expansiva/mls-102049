/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/paymentRepository.ts" enhancement="_blank"/>
import type { Payment } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';

/** Domain payment record treated as an immutable payment event in the append-only stream. */
export type PaymentEvent = Payment;

export type ReservationId = string;

export interface DateRange {
  from: string;
  to: string;
}

export interface IPaymentRepository {
  /** Append a payment event to the append-only event stream */
  append(record: PaymentEvent): Promise<void>;
  /** Read finder: list payment events for the owning reservation */
  listByOwnerId(ownerId: ReservationId): Promise<PaymentEvent[]>;
  /** Read finder: list payment events that occurred within the given period */
  listByPeriod(period: DateRange): Promise<PaymentEvent[]>;
}
