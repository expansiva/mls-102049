/// <mls fileReference="_102049_/l5/petShop/todoBackend.defs.ts" enhancement="_blank"/>

export const petShopTodoBackend = {
  "schemaVersion": "2026-07-02-layer-todo",
  "moduleName": "petShop",
  "layer": "backend",
  "updatedAt": "2026-07-13T23:20:16.458Z",
  "owners": [
    {
      "ownerType": "workflow",
      "ownerId": "serviceBookingLifecycle",
      "title": "Ciclo de vida do agendamento de serviço",
      "status": "inProgress",
      "defPath": "l4/workflows/serviceBookingLifecycle.defs.ts",
      "pageId": "serviceBookingLifecycle",
      "capabilityId": "serviceBookingLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "createServiceBooking",
      "title": "Agendar serviço",
      "status": "inProgress",
      "defPath": "l4/operations/createServiceBooking.defs.ts",
      "pageId": "serviceBookingLifecycle",
      "commandName": "createServiceBooking",
      "bffName": "petShop.serviceBookingLifecycle.createServiceBooking",
      "capabilityId": "serviceBookingLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "startServiceExecution",
      "title": "Iniciar atendimento do serviço",
      "status": "inProgress",
      "defPath": "l4/operations/startServiceExecution.defs.ts",
      "pageId": "serviceBookingLifecycle",
      "commandName": "startServiceExecution",
      "bffName": "petShop.serviceBookingLifecycle.startServiceExecution",
      "capabilityId": "serviceBookingLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "completeServiceExecution",
      "title": "Concluir serviço agendado",
      "status": "inProgress",
      "defPath": "l4/operations/completeServiceExecution.defs.ts",
      "pageId": "serviceBookingLifecycle",
      "commandName": "completeServiceExecution",
      "bffName": "petShop.serviceBookingLifecycle.completeServiceExecution",
      "capabilityId": "serviceBookingLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseHomePage",
      "title": "Explorar página inicial",
      "status": "inProgress",
      "defPath": "l4/operations/browseHomePage.defs.ts",
      "pageId": "browseHomePage",
      "commandName": "browseHomePage",
      "bffName": "petShop.browseHomePage.browseHomePage",
      "capabilityId": "browseHomePage"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseProductCatalog",
      "title": "Navegar no catálogo de produtos",
      "status": "inProgress",
      "defPath": "l4/operations/browseProductCatalog.defs.ts",
      "pageId": "browseProductCatalog",
      "commandName": "browseProductCatalog",
      "bffName": "petShop.browseProductCatalog.browseProductCatalog",
      "capabilityId": "browseProductCatalog"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewProductDetails",
      "title": "Ver detalhes do produto",
      "status": "inProgress",
      "defPath": "l4/operations/viewProductDetails.defs.ts",
      "pageId": "viewProductDetails",
      "commandName": "viewProductDetails",
      "bffName": "petShop.viewProductDetails.viewProductDetails",
      "capabilityId": "viewProductDetails"
    },
    {
      "ownerType": "operation",
      "ownerId": "placeStorePickupOrder",
      "title": "Finalizar pedido para retirada na loja",
      "status": "inProgress",
      "defPath": "l4/operations/placeStorePickupOrder.defs.ts",
      "pageId": "placeStorePickupOrder",
      "commandName": "placeStorePickupOrder",
      "bffName": "petShop.placeStorePickupOrder.placeStorePickupOrder",
      "capabilityId": "placeStorePickupOrder"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseServiceCatalog",
      "title": "Ver serviços oferecidos",
      "status": "inProgress",
      "defPath": "l4/operations/browseServiceCatalog.defs.ts",
      "pageId": "browseServiceCatalog",
      "commandName": "browseServiceCatalog",
      "bffName": "petShop.browseServiceCatalog.browseServiceCatalog",
      "capabilityId": "browseServiceCatalog"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseAdoptablePets",
      "title": "Navegar na galeria de adoção",
      "status": "inProgress",
      "defPath": "l4/operations/browseAdoptablePets.defs.ts",
      "pageId": "browseAdoptablePets",
      "commandName": "browseAdoptablePets",
      "bffName": "petShop.browseAdoptablePets.browseAdoptablePets",
      "capabilityId": "browseAdoptablePets"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewAdoptablePetDetails",
      "title": "Ver detalhes do pet para adoção",
      "status": "inProgress",
      "defPath": "l4/operations/viewAdoptablePetDetails.defs.ts",
      "pageId": "viewAdoptablePetDetails",
      "commandName": "viewAdoptablePetDetails",
      "bffName": "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails",
      "capabilityId": "viewAdoptablePetDetails"
    },
    {
      "ownerType": "operation",
      "ownerId": "expressAdoptionInterest",
      "title": "Manifestar interesse em adoção",
      "status": "inProgress",
      "defPath": "l4/operations/expressAdoptionInterest.defs.ts",
      "pageId": "expressAdoptionInterest",
      "commandName": "expressAdoptionInterest",
      "bffName": "petShop.expressAdoptionInterest.expressAdoptionInterest",
      "capabilityId": "expressAdoptionInterest"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewOperatorSchedule",
      "title": "Consultar agenda de serviços do turno",
      "status": "inProgress",
      "defPath": "l4/operations/viewOperatorSchedule.defs.ts",
      "pageId": "viewOperatorSchedule",
      "commandName": "viewOperatorSchedule",
      "bffName": "petShop.viewOperatorSchedule.viewOperatorSchedule",
      "capabilityId": "viewOperatorSchedule"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewServiceBookingDetails",
      "title": "Revisar detalhes do atendimento",
      "status": "inProgress",
      "defPath": "l4/operations/viewServiceBookingDetails.defs.ts",
      "pageId": "viewServiceBookingDetails",
      "commandName": "viewServiceBookingDetails",
      "bffName": "petShop.viewServiceBookingDetails.viewServiceBookingDetails",
      "capabilityId": "viewServiceBookingDetails"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseProducts",
      "title": "Listar produtos cadastrados",
      "status": "inProgress",
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
      "status": "inProgress",
      "defPath": "l4/operations/createProduct.defs.ts",
      "pageId": "createProduct",
      "commandName": "createProduct",
      "bffName": "petShop.createProduct.createProduct",
      "capabilityId": "createProduct"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateProduct",
      "title": "Editar produto e definir destaque",
      "status": "inProgress",
      "defPath": "l4/operations/updateProduct.defs.ts",
      "pageId": "updateProduct",
      "commandName": "updateProduct",
      "bffName": "petShop.updateProduct.updateProduct",
      "capabilityId": "updateProduct"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseServices",
      "title": "Listar serviços cadastrados",
      "status": "inProgress",
      "defPath": "l4/operations/browseServices.defs.ts",
      "pageId": "browseServices",
      "commandName": "browseServices",
      "bffName": "petShop.browseServices.browseServices",
      "capabilityId": "browseServices"
    },
    {
      "ownerType": "operation",
      "ownerId": "createService",
      "title": "Cadastrar serviço",
      "status": "inProgress",
      "defPath": "l4/operations/createService.defs.ts",
      "pageId": "createService",
      "commandName": "createService",
      "bffName": "petShop.createService.createService",
      "capabilityId": "createService"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateService",
      "title": "Editar e ativar/desativar serviço",
      "status": "inProgress",
      "defPath": "l4/operations/updateService.defs.ts",
      "pageId": "updateService",
      "commandName": "updateService",
      "bffName": "petShop.updateService.updateService",
      "capabilityId": "updateService"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseAdoptablePetsAdmin",
      "title": "Listar pets para adoção cadastrados",
      "status": "inProgress",
      "defPath": "l4/operations/browseAdoptablePetsAdmin.defs.ts",
      "pageId": "browseAdoptablePetsAdmin",
      "commandName": "browseAdoptablePetsAdmin",
      "bffName": "petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin",
      "capabilityId": "browseAdoptablePetsAdmin"
    },
    {
      "ownerType": "operation",
      "ownerId": "createAdoptablePet",
      "title": "Cadastrar pet para adoção",
      "status": "inProgress",
      "defPath": "l4/operations/createAdoptablePet.defs.ts",
      "pageId": "createAdoptablePet",
      "commandName": "createAdoptablePet",
      "bffName": "petShop.createAdoptablePet.createAdoptablePet",
      "capabilityId": "createAdoptablePet"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateAdoptablePet",
      "title": "Editar pet e controlar disponibilidade",
      "status": "inProgress",
      "defPath": "l4/operations/updateAdoptablePet.defs.ts",
      "pageId": "updateAdoptablePet",
      "commandName": "updateAdoptablePet",
      "bffName": "petShop.updateAdoptablePet.updateAdoptablePet",
      "capabilityId": "updateAdoptablePet"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseOperators",
      "title": "Listar operadores cadastrados",
      "status": "inProgress",
      "defPath": "l4/operations/browseOperators.defs.ts",
      "pageId": "browseOperators",
      "commandName": "browseOperators",
      "bffName": "petShop.browseOperators.browseOperators",
      "capabilityId": "browseOperators"
    },
    {
      "ownerType": "operation",
      "ownerId": "createOperator",
      "title": "Cadastrar operador",
      "status": "inProgress",
      "defPath": "l4/operations/createOperator.defs.ts",
      "pageId": "createOperator",
      "commandName": "createOperator",
      "bffName": "petShop.createOperator.createOperator",
      "capabilityId": "createOperator"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateOperator",
      "title": "Editar operador",
      "status": "inProgress",
      "defPath": "l4/operations/updateOperator.defs.ts",
      "pageId": "updateOperator",
      "commandName": "updateOperator",
      "bffName": "petShop.updateOperator.updateOperator",
      "capabilityId": "updateOperator"
    },
    {
      "ownerType": "operation",
      "ownerId": "browseShifts",
      "title": "Listar turnos de trabalho",
      "status": "inProgress",
      "defPath": "l4/operations/browseShifts.defs.ts",
      "pageId": "browseShifts",
      "commandName": "browseShifts",
      "bffName": "petShop.browseShifts.browseShifts",
      "capabilityId": "browseShifts"
    },
    {
      "ownerType": "operation",
      "ownerId": "createShift",
      "title": "Criar turno de trabalho",
      "status": "inProgress",
      "defPath": "l4/operations/createShift.defs.ts",
      "pageId": "createShift",
      "commandName": "createShift",
      "bffName": "petShop.createShift.createShift",
      "capabilityId": "createShift"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateShift",
      "title": "Editar turno de trabalho",
      "status": "inProgress",
      "defPath": "l4/operations/updateShift.defs.ts",
      "pageId": "updateShift",
      "commandName": "updateShift",
      "bffName": "petShop.updateShift.updateShift",
      "capabilityId": "updateShift"
    },
    {
      "ownerType": "operation",
      "ownerId": "assignOperatorToShift",
      "title": "Alocar operador em turno",
      "status": "inProgress",
      "defPath": "l4/operations/assignOperatorToShift.defs.ts",
      "pageId": "assignOperatorToShift",
      "commandName": "assignOperatorToShift",
      "bffName": "petShop.assignOperatorToShift.assignOperatorToShift",
      "capabilityId": "assignOperatorToShift"
    },
    {
      "ownerType": "operation",
      "ownerId": "reviewSchedulingCapacity",
      "title": "Revisar capacidade de atendimento",
      "status": "inProgress",
      "defPath": "l4/operations/reviewSchedulingCapacity.defs.ts",
      "pageId": "reviewSchedulingCapacity",
      "commandName": "reviewSchedulingCapacity",
      "bffName": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
      "capabilityId": "reviewSchedulingCapacity"
    }
  ]
} as const;

export default petShopTodoBackend;
