# E5 — Workflows & Operations: petShop

- module: `petShop`
- workflows: 1 / operations: 16
- generatedAt: 2026-07-16T21:34:32.721Z

## Workflows

### reservationLifecycle — Ciclo de vida da reserva

- actor: cliente, loja — trigger: Cliente confirma uma reserva de produtos para retirada na loja física
- states: 6 (draft → active → ready → delivered → expired → cancelled)
- transitions: 7
- operations: createReservation, cancelReservation, updateReservationStatus, payInStore, expireReservations

## Operations

| operationId | kind | entity | actor | bffName |
| --- | --- | --- | --- | --- |
| createReservation | create | Reservation | cliente | `petShop.reservationLifecycle.createReservation` |
| cancelReservation | update | Reservation | cliente | `petShop.reservationLifecycle.cancelReservation` |
| updateReservationStatus | update | Reservation | loja | `petShop.reservationLifecycle.updateReservationStatus` |
| payInStore | update | Reservation | loja | `petShop.reservationLifecycle.payInStore` |
| expireReservations | update | Reservation | loja | `petShop.reservationLifecycle.expireReservations` |
| viewHighlights | view | Product | cliente | `petShop.viewHighlights.viewHighlights` |
| browseCatalog | query | Product | cliente | `petShop.browseCatalog.browseCatalog` |
| searchProducts | query | Product | cliente | `petShop.searchProducts.searchProducts` |
| filterProducts | query | Product | cliente | `petShop.filterProducts.filterProducts` |
| viewProductDetails | view | Product | cliente | `petShop.viewProductDetails.viewProductDetails` |
| viewMyReservations | query | Reservation | cliente | `petShop.viewMyReservations.viewMyReservations` |
| listReservations | query | Reservation | loja | `petShop.listReservations.listReservations` |
| browseProducts | query | Product | loja | `petShop.browseProducts.browseProducts` |
| createProduct | create | Product | loja | `petShop.createProduct.createProduct` |
| updateProduct | update | Product | loja | `petShop.updateProduct.updateProduct` |
| setProductHighlights | update | Product | loja | `petShop.setProductHighlights.setProductHighlights` |
