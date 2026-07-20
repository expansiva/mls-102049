/// <mls fileReference="_102049_/l4/petShop/journeys/manageReservations.defs.ts" enhancement="_blank"/>

export const manageReservationsJourney = {
  "journeyId": "manageReservations",
  "actorId": "atendente",
  "title": "Confirmar e atender reservas de clientes",
  "goal": "Garantir que cada reserva recebida seja confirmada, preparada e entregue ao cliente na retirada",
  "steps": [
    "Visualizar reservas pendentes",
    "Confirmar uma reserva",
    "Preparar os produtos da reserva",
    "Identificar o cliente na chegada à loja",
    "Cancelar reservas não retiradas dentro do prazo"
  ],
  "outcome": "As reservas confirmadas são preparadas e entregues aos clientes na retirada; reservas expiradas são canceladas.",
  "operationIds": [
    "browseReservations",
    "updateReservationStatus",
    "processPayment"
  ],
  "workspaceId": "reservationManagement"
} as const;

export default manageReservationsJourney;
