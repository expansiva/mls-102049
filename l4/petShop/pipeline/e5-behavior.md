# E5 — Workflows & Operations: petShop

- module: `petShop`
- workflows: 1 / operations: 7
- generatedAt: 2026-07-19T20:05:16.727Z

## Workflows

### reservationLifecycle — Ciclo de vida da reserva

- actor: atendente, cliente — trigger: Cliente cria uma reserva de produtos para retirada presencial na loja, gerando uma reserva com status pendente.
- states: 4 (pending → confirmed → fulfilled → cancelled)
- transitions: 4
- operations: createReservation, updateReservationStatus, processPayment

## Operations

| operationId | kind | entity | actor | bffName |
| --- | --- | --- | --- | --- |
| browseFeaturedProducts | query | Product | cliente | `petShop.browseFeaturedProducts.browseFeaturedProducts` |
| browseProducts | query | Product | cliente | `petShop.browseProducts.browseProducts` |
| viewProductDetails | view | Product | cliente | `petShop.viewProductDetails.viewProductDetails` |
| browseReservations | query | Reservation | atendente | `petShop.browseReservations.browseReservations` |
| createReservation | create | Reservation | cliente | `petShop.reservationLifecycle.createReservation` |
| updateReservationStatus | update | Reservation | atendente | `petShop.reservationLifecycle.updateReservationStatus` |
| processPayment | create | Payment | atendente | `petShop.reservationLifecycle.processPayment` |
