# E6 — Journey map: petShop

- module: `petShop`
- workspaces: 2 / landings: 2 / edges: 1
- generatedAt: 2026-07-19T20:07:28.484Z
- Consolidated navigation map derived from workflows/operations stories (view, not source).

## Workspaces by actor

### cliente

- `catalog` (workflow, Product) — workflow `reservationLifecycle`: Catálogo de produtos — O cliente navega pela vitrine e pelo catálogo, visualiza detalhes dos produtos e reserva itens para retirada na loja
  - bffCall `featuredProducts` [query] uses browseFeaturedProducts `petShop.catalog.featuredProducts`
  - bffCall `browseCatalog` [query] uses browseProducts `petShop.catalog.browseCatalog`
  - bffCall `productDetails` [query] uses viewProductDetails `petShop.catalog.productDetails`
  - bffCall `reserveProduct` [command] uses createReservation `petShop.catalog.reserveProduct`
  - section `vitrine` — O cliente visualiza produtos em destaque na vitrine inicial do pet shop
    - [primarySurface] `featuredProducts`
    - [filterControl] `featuredProducts`
  - section `catalogo` — O cliente pesquisa e filtra todos os produtos disponíveis no catálogo completo
    - [primarySurface] `browseCatalog`
    - [filterControl] `browseCatalog`
  - section `detalheReserva` — O cliente visualiza os detalhes do produto selecionado e reserva para retirada na loja
    - [primarySurface] `productDetails`
    - [contextualAction] `reserveProduct`

### atendente

- `reservationManagement` (workflow, Reservation) — workflow `reservationLifecycle`: Gestão de reservas — O atendente visualiza reservas pendentes, confirma ou cancela e recebe o pagamento presencial na retirada
  - bffCall `browseReservationsQuery` [query] uses browseReservations `petShop.reservationManagement.browseReservationsQuery`
  - bffCall `updateReservationStatusCommand` [command] uses updateReservationStatus `petShop.reservationManagement.updateReservationStatusCommand`
  - bffCall `processPaymentCommand` [command] uses processPayment `petShop.reservationManagement.processPaymentCommand`
  - section `reservationList` — O atendente visualiza, filtra e atua sobre as reservas pendentes dos clientes
    - [primarySurface] `browseReservationsQuery`
    - [filterControl] `browseReservationsQuery`
    - [contextualAction] `updateReservationStatusCommand`
    - [contextualAction] `processPaymentCommand`

## Landings

- cliente → `catalog` — O cliente começa navegando pela vitrine de produtos em destaque na página inicial
- atendente → `reservationManagement` — O atendente inicia o dia visualizando a lista de reservas pendentes

## Navigation edges (advisory)

- `catalog` → `reservationManagement` via `createReservation` — A reserva criada pelo cliente aparece na lista de reservas do atendente para confirmação e preparo
