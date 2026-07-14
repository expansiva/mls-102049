/// <mls fileReference="_102049_/l4/petShop/journeys/petShopJourneys.defs.ts" enhancement="_blank"/>

export const petShopJourneys = {
  "moduleName": "petShop",
  "note": "Consolidated navigation map derived from workflows/operations stories (view, not source).",
  "workspaces": [
    {
      "workspaceId": "homePage",
      "title": "Página inicial",
      "actor": "cliente",
      "kind": "operation",
      "entity": "Product",
      "operationIds": [
        "browseHomePage"
      ],
      "purpose": "O cliente visualiza produtos em destaque, serviços oferecidos e a seção de adoção ao acessar o site"
    },
    {
      "workspaceId": "productCatalog",
      "title": "Catálogo de produtos e pedido para retirada",
      "actor": "cliente",
      "kind": "operation",
      "entity": "Product",
      "operationIds": [
        "browseProductCatalog",
        "viewProductDetails",
        "placeStorePickupOrder"
      ],
      "purpose": "O cliente navega no catálogo, vê detalhes dos produtos e finaliza o pedido para retirada na loja"
    },
    {
      "workspaceId": "serviceBooking",
      "title": "Agendamento de serviço",
      "actor": "cliente",
      "kind": "workflow",
      "entity": "ServiceBooking",
      "operationIds": [
        "browseServiceCatalog",
        "createServiceBooking"
      ],
      "purpose": "O cliente consulta os serviços oferecidos e agenda um horário disponível para o seu pet",
      "workflowId": "serviceBookingLifecycle"
    },
    {
      "workspaceId": "adoptionGallery",
      "title": "Galeria de adoção",
      "actor": "cliente",
      "kind": "operation",
      "entity": "AdoptablePet",
      "operationIds": [
        "browseAdoptablePets",
        "viewAdoptablePetDetails",
        "expressAdoptionInterest"
      ],
      "purpose": "O cliente navega na galeria de pets, vê detalhes e manifesta interesse em adoção"
    },
    {
      "workspaceId": "operatorSchedule",
      "title": "Agenda de serviços do turno",
      "actor": "operador",
      "kind": "operation",
      "entity": "ServiceBooking",
      "operationIds": [
        "viewOperatorSchedule",
        "viewServiceBookingDetails"
      ],
      "purpose": "O operador consulta os agendamentos do seu turno e revisa os detalhes de cada atendimento"
    },
    {
      "workspaceId": "serviceExecution",
      "title": "Execução de serviço agendado",
      "actor": "operador",
      "kind": "workflow",
      "entity": "ServiceBooking",
      "operationIds": [
        "startServiceExecution",
        "completeServiceExecution"
      ],
      "purpose": "O operador inicia e conclui o atendimento do serviço agendado",
      "workflowId": "serviceBookingLifecycle"
    },
    {
      "workspaceId": "productManagement",
      "title": "Gestão de produtos",
      "actor": "admin",
      "kind": "entityManagement",
      "entity": "Product",
      "operationIds": [
        "browseProducts",
        "createProduct",
        "updateProduct"
      ],
      "purpose": "O administrador cadastra, edita produtos e define produtos em destaque no catálogo"
    },
    {
      "workspaceId": "serviceManagement",
      "title": "Gestão de serviços",
      "actor": "admin",
      "kind": "entityManagement",
      "entity": "Service",
      "operationIds": [
        "browseServices",
        "createService",
        "updateService"
      ],
      "purpose": "O administrador cadastra, edita e ativa/desativa serviços oferecidos pelo pet shop"
    },
    {
      "workspaceId": "petManagement",
      "title": "Gestão de pets para adoção",
      "actor": "admin",
      "kind": "entityManagement",
      "entity": "AdoptablePet",
      "operationIds": [
        "browseAdoptablePetsAdmin",
        "createAdoptablePet",
        "updateAdoptablePet"
      ],
      "purpose": "O administrador cadastra, edita pets e controla a disponibilidade para adoção"
    },
    {
      "workspaceId": "operatorManagement",
      "title": "Gestão de operadores",
      "actor": "admin",
      "kind": "entityManagement",
      "entity": "Operator",
      "operationIds": [
        "browseOperators",
        "createOperator",
        "updateOperator"
      ],
      "purpose": "O administrador cadastra e edita operadores disponíveis para alocação em turnos"
    },
    {
      "workspaceId": "shiftManagement",
      "title": "Gestão de turnos",
      "actor": "admin",
      "kind": "entityManagement",
      "entity": "Shift",
      "operationIds": [
        "browseShifts",
        "createShift",
        "updateShift"
      ],
      "purpose": "O administrador cria e edita turnos de trabalho com horários e dias da semana"
    },
    {
      "workspaceId": "schedulingCapacity",
      "title": "Alocação e capacidade de atendimento",
      "actor": "admin",
      "kind": "operation",
      "entity": "ShiftAssignment",
      "operationIds": [
        "assignOperatorToShift",
        "reviewSchedulingCapacity"
      ],
      "purpose": "O administrador aloca operadores em turnos e revisa a capacidade de agendamento disponível"
    }
  ],
  "landings": [
    {
      "actorId": "cliente",
      "workspaceId": "homePage",
      "reason": "O cliente inicia sua jornada acessando a página inicial para ver produtos em destaque, serviços e pets para adoção"
    },
    {
      "actorId": "operador",
      "workspaceId": "operatorSchedule",
      "reason": "O operador começa o dia consultando sua agenda de serviços do turno"
    },
    {
      "actorId": "admin",
      "workspaceId": "operatorManagement",
      "reason": "O administrador inicia gerenciando operadores antes de definir turnos e alocar capacidade"
    }
  ],
  "navigationEdges": [
    {
      "from": "homePage",
      "to": "productCatalog",
      "operationId": "browseHomePage",
      "description": "Cliente decide explorar o catálogo de produtos a partir da página inicial"
    },
    {
      "from": "homePage",
      "to": "serviceBooking",
      "operationId": "browseHomePage",
      "description": "Cliente decide agendar um serviço a partir da página inicial"
    },
    {
      "from": "homePage",
      "to": "adoptionGallery",
      "operationId": "browseHomePage",
      "description": "Cliente decide ver pets disponíveis para adoção a partir da página inicial"
    },
    {
      "from": "serviceBooking",
      "to": "operatorSchedule",
      "operationId": "createServiceBooking",
      "description": "Agendamento criado pelo cliente aparece na agenda do operador do turno correspondente"
    },
    {
      "from": "operatorSchedule",
      "to": "serviceExecution",
      "operationId": "viewServiceBookingDetails",
      "description": "Operador revisa os detalhes do atendimento e inicia a execução do serviço"
    },
    {
      "from": "operatorManagement",
      "to": "shiftManagement",
      "operationId": "createOperator",
      "description": "Após cadastrar operadores, o administrador define os turnos de trabalho"
    },
    {
      "from": "shiftManagement",
      "to": "schedulingCapacity",
      "operationId": "updateShift",
      "description": "Após definir turnos, o administrador aloca operadores e revisa a capacidade de atendimento"
    }
  ]
} as const;

export default petShopJourneys;
