/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/paymentRepository.ts" enhancement="_blank"/>
import type { Payment } from '/_102049_/l1/petShop/layer_3_domain/entities/payment.js';

export type PaymentEvent = Payment;

export interface IPaymentRepository {
append(record: PaymentEvent): Promise<void>;
listByOwnerId(ownerId: string): Promise<PaymentEvent[]>;
listByPeriod(from: Date, to: Date): Promise<PaymentEvent[]>;
}
