/// <mls fileReference="_102049_/l4/petShop/journeys/petShopJourneys.defs.ts" enhancement="_blank"/>

export const petShopJourneys = {
  "moduleName": "petShop",
  "note": "Consolidated navigation map derived from workflows/operations stories (view, not source).",
  "workspaces": [
    {
      "workspaceId": "productCatalog",
      "title": "Catálogo de Produtos",
      "actor": "cliente",
      "kind": "operation",
      "entity": "Product",
      "operationIds": [
        "viewHighlights",
        "browseCatalog",
        "searchProducts",
        "filterProducts",
        "viewProductDetails"
      ],
      "purpose": "Navegar pelos produtos em destaque e pelo catálogo completo, buscando e filtrando para encontrar produtos de interesse."
    },
    {
      "workspaceId": "myReservations",
      "title": "Minhas Reservas",
      "actor": "cliente",
      "kind": "workflow",
      "entity": "Reservation",
      "operationIds": [
        "createReservation",
        "cancelReservation",
        "viewMyReservations"
      ],
      "purpose": "Gerenciar reservas: visualizar reservas ativas, criar novas reservas e cancelar reservas existentes dentro do prazo.",
      "workflowId": "reservationLifecycle"
    },
    {
      "workspaceId": "reservationManagement",
      "title": "Gestão de Reservas",
      "actor": "loja",
      "kind": "workflow",
      "entity": "Reservation",
      "operationIds": [
        "listReservations",
        "updateReservationStatus",
        "payInStore",
        "expireReservations"
      ],
      "purpose": "Acompanhar reservas recebidas, atualizar status, registrar pagamentos presenciais e expirar reservas vencidas.",
      "workflowId": "reservationLifecycle"
    },
    {
      "workspaceId": "productManagement",
      "title": "Gestão de Produtos",
      "actor": "loja",
      "kind": "entityManagement",
      "entity": "Product",
      "operationIds": [
        "browseProducts",
        "createProduct",
        "updateProduct",
        "setProductHighlights"
      ],
      "purpose": "Manter o catálogo de produtos: cadastrar, editar, definir disponibilidade e configurar destaques da página inicial."
    }
  ],
  "landings": [
    {
      "actorId": "cliente",
      "workspaceId": "productCatalog",
      "reason": "O cliente inicia na página inicial explorando produtos em destaque e o catálogo completo."
    },
    {
      "actorId": "loja",
      "workspaceId": "reservationManagement",
      "reason": "A loja inicia o dia acompanhando as reservas recebidas para separar produtos e atender clientes."
    }
  ],
  "navigationEdges": [
    {
      "from": "productCatalog",
      "to": "myReservations",
      "operationId": "createReservation",
      "description": "Cliente seleciona produtos no catálogo e cria uma reserva."
    },
    {
      "from": "myReservations",
      "to": "productCatalog",
      "operationId": "createReservation",
      "description": "Cliente volta ao catálogo para adicionar mais produtos à reserva."
    },
    {
      "from": "myReservations",
      "to": "reservationManagement",
      "operationId": "createReservation",
      "description": "Reserva criada pelo cliente aparece na lista de reservas da loja para separação."
    },
    {
      "from": "reservationManagement",
      "to": "myReservations",
      "operationId": "updateReservationStatus",
      "description": "Loja atualiza o status da reserva e o cliente vê a mudança em suas reservas."
    }
  ]
} as const;

export default petShopJourneys;
