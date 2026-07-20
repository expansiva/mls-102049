/// <mls fileReference="_102049_/l5/petShop/todoFrontend.defs.ts" enhancement="_blank"/>

export const petShopTodoFrontend = {
  "schemaVersion": "2026-07-02-layer-todo",
  "moduleName": "petShop",
  "layer": "frontend",
  "updatedAt": "2026-07-19T20:07:28.867Z",
  "owners": [
    {
      "ownerType": "workflow",
      "ownerId": "reservationLifecycle",
      "title": "Ciclo de vida da reserva",
      "status": "toCreate",
      "defPath": "l4/petShop/workflows/reservationLifecycle.defs.ts",
      "pageId": "reservationLifecycle",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseFeaturedProducts",
      "title": "Visualizar produtos em destaque na vitrine",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/browseFeaturedProducts.defs.ts",
      "pageId": "browseFeaturedProducts",
      "commandName": "browseFeaturedProducts",
      "bffName": "petShop.browseFeaturedProducts.browseFeaturedProducts",
      "capabilityId": "browseFeaturedProducts"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseProducts",
      "title": "Pesquisar e filtrar produtos no catálogo",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/browseProducts.defs.ts",
      "pageId": "browseProducts",
      "commandName": "browseProducts",
      "bffName": "petShop.browseProducts.browseProducts",
      "capabilityId": "browseProducts"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewProductDetails",
      "title": "Visualizar detalhes do produto",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/viewProductDetails.defs.ts",
      "pageId": "viewProductDetails",
      "commandName": "viewProductDetails",
      "bffName": "petShop.viewProductDetails.viewProductDetails",
      "capabilityId": "viewProductDetails"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseReservations",
      "title": "Visualizar reservas pendentes e localizar cliente",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/browseReservations.defs.ts",
      "pageId": "browseReservations",
      "commandName": "browseReservations",
      "bffName": "petShop.browseReservations.browseReservations",
      "capabilityId": "browseReservations"
    },
    {
      "ownerType": "operation",
      "ownerId": "createReservation",
      "title": "Reservar produtos para retirada na loja",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/createReservation.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "createReservation",
      "bffName": "petShop.reservationLifecycle.createReservation",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateReservationStatus",
      "title": "Confirmar ou cancelar reserva",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/updateReservationStatus.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "updateReservationStatus",
      "bffName": "petShop.reservationLifecycle.updateReservationStatus",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "processPayment",
      "title": "Receber pagamento presencial e encerrar reserva",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/processPayment.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "processPayment",
      "bffName": "petShop.reservationLifecycle.processPayment",
      "capabilityId": "reservationLifecycle"
    }
  ]
} as const;

export default petShopTodoFrontend;
