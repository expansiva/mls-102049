# E6 — Journey map: petShop

- module: `petShop`
- workspaces: 4 / landings: 2 / edges: 4
- generatedAt: 2026-07-16T21:35:24.968Z
- Consolidated navigation map derived from workflows/operations stories (view, not source).

## Workspaces by actor

### cliente

- `productCatalog` (operation, Product): Catálogo de Produtos — Navegar pelos produtos em destaque e pelo catálogo completo, buscando e filtrando para encontrar produtos de interesse.
  - operations: `viewHighlights`, `browseCatalog`, `searchProducts`, `filterProducts`, `viewProductDetails`
- `myReservations` (workflow, Reservation) — workflow `reservationLifecycle`: Minhas Reservas — Gerenciar reservas: visualizar reservas ativas, criar novas reservas e cancelar reservas existentes dentro do prazo.
  - operations: `createReservation`, `cancelReservation`, `viewMyReservations`

### loja

- `reservationManagement` (workflow, Reservation) — workflow `reservationLifecycle`: Gestão de Reservas — Acompanhar reservas recebidas, atualizar status, registrar pagamentos presenciais e expirar reservas vencidas.
  - operations: `listReservations`, `updateReservationStatus`, `payInStore`, `expireReservations`
- `productManagement` (entityManagement, Product): Gestão de Produtos — Manter o catálogo de produtos: cadastrar, editar, definir disponibilidade e configurar destaques da página inicial.
  - operations: `browseProducts`, `createProduct`, `updateProduct`, `setProductHighlights`

## Landings

- cliente → `productCatalog` — O cliente inicia na página inicial explorando produtos em destaque e o catálogo completo.
- loja → `reservationManagement` — A loja inicia o dia acompanhando as reservas recebidas para separar produtos e atender clientes.

## Navigation edges (advisory)

- `productCatalog` → `myReservations` via `createReservation` — Cliente seleciona produtos no catálogo e cria uma reserva.
- `myReservations` → `productCatalog` via `createReservation` — Cliente volta ao catálogo para adicionar mais produtos à reserva.
- `myReservations` → `reservationManagement` via `createReservation` — Reserva criada pelo cliente aparece na lista de reservas da loja para separação.
- `reservationManagement` → `myReservations` via `updateReservationStatus` — Loja atualiza o status da reserva e o cliente vê a mudança em suas reservas.
