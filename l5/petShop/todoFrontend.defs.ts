/// <mls fileReference="_102049_/l5/petShop/todoFrontend.defs.ts" enhancement="_blank"/>

export const petShopTodoFrontend = {
  "schemaVersion": "2026-07-02-layer-todo",
  "moduleName": "petShop",
  "layer": "frontend",
  "updatedAt": "2026-07-17T01:14:35.158Z",
  "owners": [
    {
      "ownerType": "workflow",
      "ownerId": "reservationLifecycle",
      "title": "Ciclo de vida da reserva",
      "status": "done",
      "defPath": "l4/workflows/reservationLifecycle.defs.ts",
      "pageId": "reservationLifecycle",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "createReservation",
      "title": "Criar reserva",
      "status": "done",
      "defPath": "l4/operations/createReservation.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "createReservation",
      "bffName": "petShop.reservationLifecycle.createReservation",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "cancelReservation",
      "title": "Cancelar reserva",
      "status": "done",
      "defPath": "l4/operations/cancelReservation.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "cancelReservation",
      "bffName": "petShop.reservationLifecycle.cancelReservation",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateReservationStatus",
      "title": "Atualizar status da reserva",
      "status": "done",
      "defPath": "l4/operations/updateReservationStatus.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "updateReservationStatus",
      "bffName": "petShop.reservationLifecycle.updateReservationStatus",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "payInStore",
      "title": "Registrar pagamento presencial",
      "status": "done",
      "defPath": "l4/operations/payInStore.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "payInStore",
      "bffName": "petShop.reservationLifecycle.payInStore",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "expireReservations",
      "title": "Expirar reservas vencidas",
      "status": "done",
      "defPath": "l4/operations/expireReservations.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "expireReservations",
      "bffName": "petShop.reservationLifecycle.expireReservations",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewHighlights",
      "title": "Visualizar produtos em destaque",
      "status": "done",
      "defPath": "l4/operations/viewHighlights.defs.ts",
      "pageId": "viewHighlights",
      "commandName": "viewHighlights",
      "bffName": "petShop.viewHighlights.viewHighlights",
      "capabilityId": "viewHighlights"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseCatalog",
      "title": "Navegar pelo catálogo completo",
      "status": "done",
      "defPath": "l4/operations/browseCatalog.defs.ts",
      "pageId": "browseCatalog",
      "commandName": "browseCatalog",
      "bffName": "petShop.browseCatalog.browseCatalog",
      "capabilityId": "browseCatalog"
    },
    {
      "ownerType": "operation",
      "ownerId": "searchProducts",
      "title": "Buscar produtos por nome",
      "status": "done",
      "defPath": "l4/operations/searchProducts.defs.ts",
      "pageId": "searchProducts",
      "commandName": "searchProducts",
      "bffName": "petShop.searchProducts.searchProducts",
      "capabilityId": "searchProducts"
    },
    {
      "ownerType": "operation",
      "ownerId": "filterProducts",
      "title": "Filtrar produtos por tipo de pet, categoria e faixa de valor",
      "status": "done",
      "defPath": "l4/operations/filterProducts.defs.ts",
      "pageId": "filterProducts",
      "commandName": "filterProducts",
      "bffName": "petShop.filterProducts.filterProducts",
      "capabilityId": "filterProducts"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewProductDetails",
      "title": "Ver detalhes de um produto",
      "status": "done",
      "defPath": "l4/operations/viewProductDetails.defs.ts",
      "pageId": "viewProductDetails",
      "commandName": "viewProductDetails",
      "bffName": "petShop.viewProductDetails.viewProductDetails",
      "capabilityId": "viewProductDetails"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewMyReservations",
      "title": "Visualizar minhas reservas",
      "status": "done",
      "defPath": "l4/operations/viewMyReservations.defs.ts",
      "pageId": "viewMyReservations",
      "commandName": "viewMyReservations",
      "bffName": "petShop.viewMyReservations.viewMyReservations",
      "capabilityId": "viewMyReservations"
    },
    {
      "ownerType": "operation",
      "ownerId": "listReservations",
      "title": "Listar reservas recebidas",
      "status": "done",
      "defPath": "l4/operations/listReservations.defs.ts",
      "pageId": "listReservations",
      "commandName": "listReservations",
      "bffName": "petShop.listReservations.listReservations",
      "capabilityId": "listReservations"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseProducts",
      "title": "Listar produtos do catálogo",
      "status": "done",
      "defPath": "l4/operations/browseProducts.defs.ts",
      "pageId": "browseProducts",
      "commandName": "browseProducts",
      "bffName": "petShop.browseProducts.browseProducts",
      "capabilityId": "browseProducts"
    },
    {
      "ownerType": "operation",
      "ownerId": "createProduct",
      "title": "Cadastrar produto",
      "status": "done",
      "defPath": "l4/operations/createProduct.defs.ts",
      "pageId": "createProduct",
      "commandName": "createProduct",
      "bffName": "petShop.createProduct.createProduct",
      "capabilityId": "createProduct"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateProduct",
      "title": "Editar produto",
      "status": "done",
      "defPath": "l4/operations/updateProduct.defs.ts",
      "pageId": "updateProduct",
      "commandName": "updateProduct",
      "bffName": "petShop.updateProduct.updateProduct",
      "capabilityId": "updateProduct"
    },
    {
      "ownerType": "operation",
      "ownerId": "setProductHighlights",
      "title": "Definir produtos em destaque",
      "status": "done",
      "defPath": "l4/operations/setProductHighlights.defs.ts",
      "pageId": "setProductHighlights",
      "commandName": "setProductHighlights",
      "bffName": "petShop.setProductHighlights.setProductHighlights",
      "capabilityId": "setProductHighlights"
    }
  ]
} as const;

export default petShopTodoFrontend;
