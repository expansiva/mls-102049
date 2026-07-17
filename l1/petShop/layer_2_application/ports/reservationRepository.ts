/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/reservationRepository.ts" enhancement="_blank"/>
import type { Reservation, ReservationStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/reservation.js';

export interface ReservationFilter {
customerId?: string;
status?: ReservationStatus;
}

export interface IReservationRepository {
getById(id: string): Promise<Reservation>;
list(filter: ReservationFilter): Promise<Reservation[]>;
save(reservation: Reservation): Promise<void>;
findByCustomerId(customerId: string): Promise<Reservation[]>;
findByStatus(status: ReservationStatus): Promise<Reservation[]>;
}
