/// <mls fileReference="_102049_/l5/petShop/todoBackend.defs.ts" enhancement="_blank"/>

export const petShopTodoBackend = {
  "schemaVersion": "2026-07-02-layer-todo",
  "moduleName": "petShop",
  "layer": "backend",
  "updatedAt": "2026-07-18T23:22:18.668Z",
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
      "ownerId": "createReservation",
      "title": "Criar pedido de reserva",
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
      "title": "Atualizar status da reserva",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/updateReservationStatus.defs.ts",
      "pageId": "reservationLifecycle",
      "commandName": "updateReservationStatus",
      "bffName": "petShop.reservationLifecycle.updateReservationStatus",
      "capabilityId": "reservationLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseCatalog",
      "title": "Buscar e filtrar produtos do catálogo",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/browseCatalog.defs.ts",
      "pageId": "browseCatalog",
      "commandName": "browseCatalog",
      "bffName": "petShop.browseCatalog.browseCatalog",
      "capabilityId": "browseCatalog"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewProductDetail",
      "title": "Visualizar detalhes do produto",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/viewProductDetail.defs.ts",
      "pageId": "viewProductDetail",
      "commandName": "viewProductDetail",
      "bffName": "petShop.viewProductDetail.viewProductDetail",
      "capabilityId": "viewProductDetail"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryReservation",
      "title": "Consultar reserva pelo identificador",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/queryReservation.defs.ts",
      "pageId": "queryReservation",
      "commandName": "queryReservation",
      "bffName": "petShop.queryReservation.queryReservation",
      "capabilityId": "queryReservation"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseProducts",
      "title": "Listar produtos para gestão",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/browseProducts.defs.ts",
      "pageId": "browseProducts",
      "commandName": "browseProducts",
      "bffName": "petShop.browseProducts.browseProducts",
      "capabilityId": "browseProducts"
    },
    {
      "ownerType": "operation",
      "ownerId": "createProduct",
      "title": "Cadastrar produto",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/createProduct.defs.ts",
      "pageId": "createProduct",
      "commandName": "createProduct",
      "bffName": "petShop.createProduct.createProduct",
      "capabilityId": "createProduct"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateProduct",
      "title": "Editar produto",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/updateProduct.defs.ts",
      "pageId": "updateProduct",
      "commandName": "updateProduct",
      "bffName": "petShop.updateProduct.updateProduct",
      "capabilityId": "updateProduct"
    },
    {
      "ownerType": "operation",
      "ownerId": "deleteProduct",
      "title": "Excluir produto",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/deleteProduct.defs.ts",
      "pageId": "deleteProduct",
      "commandName": "deleteProduct",
      "bffName": "petShop.deleteProduct.deleteProduct",
      "capabilityId": "deleteProduct"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseReservations",
      "title": "Visualizar painel de reservas",
      "status": "toCreate",
      "defPath": "l4/petShop/operations/browseReservations.defs.ts",
      "pageId": "browseReservations",
      "commandName": "browseReservations",
      "bffName": "petShop.browseReservations.browseReservations",
      "capabilityId": "browseReservations"
    }
  ]
} as const;

export default petShopTodoBackend;
