/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.ts" enhancement="_blank"/>
import type { ServiceBooking, ServiceBookingStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.js';

export type ServiceBookingId = string;
export type CustomerId = string;

export interface DateRange {
  from: string;
  to: string;
}

export interface ServiceBookingFilter {
  serviceBookingId?: ServiceBookingId;
  serviceId?: string;
  operatorId?: string;
  shiftId?: string;
  status?: ServiceBookingStatus;
  bookingDate?: string;
}

export interface IServiceBookingRepository {
  getById(id: ServiceBookingId): Promise<ServiceBooking | null>;
  list(filter: ServiceBookingFilter): Promise<ServiceBooking[]>;
  save(booking: ServiceBooking): Promise<void>;
  findByCustomerId(customerId: CustomerId): Promise<ServiceBooking[]>;
  findByPeriod(period: DateRange): Promise<ServiceBooking[]>;
}
