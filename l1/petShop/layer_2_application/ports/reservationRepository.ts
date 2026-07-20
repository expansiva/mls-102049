/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/reservationRepository.ts" enhancement="_blank"/>
import type { Reservation, ReservationStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

export type ReservationId = string;

export interface DateRange {
  from: string;
  to: string;
}

export interface ReservationFilter {
  status?: ReservationStatus;
}

export interface IReservationRepository {
  getById(id: ReservationId): Promise<Reservation>; // throws NOT_FOUND
  list(filter: ReservationFilter): Promise<Reservation[]>;
  save(reservation: Reservation): Promise<void>; // upsert the whole aggregate
  listByPeriod(period: DateRange): Promise<Reservation[]>;
  existsById(id: ReservationId): Promise<boolean>;
}
