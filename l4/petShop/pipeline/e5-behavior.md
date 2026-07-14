# E5 — Workflows & Operations: petShop

- module: `petShop`
- workflows: 1 / operations: 30
- generatedAt: 2026-07-13T19:57:17.129Z

## Workflows

### serviceBookingLifecycle — Ciclo de vida do agendamento de serviço

- actor: cliente, operador — trigger: Cliente confirma o agendamento de um serviço para data e horário disponíveis, criando o registro vinculado a um operador do turno correspondente.
- states: 3 (confirmed → inProgress → completed)
- transitions: 2
- operations: createServiceBooking, startServiceExecution, completeServiceExecution

## Operations

| operationId | kind | entity | actor | bffName |
| --- | --- | --- | --- | --- |
| createServiceBooking | create | ServiceBooking | cliente | `petShop.serviceBookingLifecycle.createServiceBooking` |
| startServiceExecution | update | ServiceBooking | operador | `petShop.serviceBookingLifecycle.startServiceExecution` |
| completeServiceExecution | update | ServiceBooking | operador | `petShop.serviceBookingLifecycle.completeServiceExecution` |
| browseHomePage | view | Product | cliente | `petShop.browseHomePage.browseHomePage` |
| browseProductCatalog | query | Product | cliente | `petShop.browseProductCatalog.browseProductCatalog` |
| viewProductDetails | view | Product | cliente | `petShop.viewProductDetails.viewProductDetails` |
| placeStorePickupOrder | create | Order | cliente | `petShop.placeStorePickupOrder.placeStorePickupOrder` |
| browseServiceCatalog | query | Service | cliente | `petShop.browseServiceCatalog.browseServiceCatalog` |
| browseAdoptablePets | query | AdoptablePet | cliente | `petShop.browseAdoptablePets.browseAdoptablePets` |
| viewAdoptablePetDetails | view | AdoptablePet | cliente | `petShop.viewAdoptablePetDetails.viewAdoptablePetDetails` |
| expressAdoptionInterest | create | AdoptionInterest | cliente | `petShop.expressAdoptionInterest.expressAdoptionInterest` |
| viewOperatorSchedule | query | ServiceBooking | operador | `petShop.viewOperatorSchedule.viewOperatorSchedule` |
| viewServiceBookingDetails | view | ServiceBooking | operador | `petShop.viewServiceBookingDetails.viewServiceBookingDetails` |
| browseProducts | query | Product | admin | `petShop.browseProducts.browseProducts` |
| createProduct | create | Product | admin | `petShop.createProduct.createProduct` |
| updateProduct | update | Product | admin | `petShop.updateProduct.updateProduct` |
| browseServices | query | Service | admin | `petShop.browseServices.browseServices` |
| createService | create | Service | admin | `petShop.createService.createService` |
| updateService | update | Service | admin | `petShop.updateService.updateService` |
| browseAdoptablePetsAdmin | query | AdoptablePet | admin | `petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin` |
| createAdoptablePet | create | AdoptablePet | admin | `petShop.createAdoptablePet.createAdoptablePet` |
| updateAdoptablePet | update | AdoptablePet | admin | `petShop.updateAdoptablePet.updateAdoptablePet` |
| browseOperators | query | Operator | admin | `petShop.browseOperators.browseOperators` |
| createOperator | create | Operator | admin | `petShop.createOperator.createOperator` |
| updateOperator | update | Operator | admin | `petShop.updateOperator.updateOperator` |
| browseShifts | query | Shift | admin | `petShop.browseShifts.browseShifts` |
| createShift | create | Shift | admin | `petShop.createShift.createShift` |
| updateShift | update | Shift | admin | `petShop.updateShift.updateShift` |
| assignOperatorToShift | create | ShiftAssignment | admin | `petShop.assignOperatorToShift.assignOperatorToShift` |
| reviewSchedulingCapacity | query | ShiftAssignment | admin | `petShop.reviewSchedulingCapacity.reviewSchedulingCapacity` |
