/// <mls fileReference="_102049_/l4/operations/queryStockItems.defs.ts" enhancement="_blank"/>

export const operationQueryStockItems = {
  "operationId": "queryStockItems",
  "title": "Consultar itens de estoque",
  "actor": "manager",
  "entity": "StockItem",
  "kind": "query",
  "reads": [
    "StockItem"
  ],
  "writes": [],
  "rulesApplied": [
    "lowStockAlert"
  ],
  "story": {
    "actor": "manager",
    "goal": "Listar e buscar insumos cadastrados",
    "soThat": "O gerente encontre insumos para ajuste e reposição",
    "steps": [
      "Acessar a tela de gerenciamento de estoque",
      "Filtrar por nome ou categoria",
      "Visualizar resultados"
    ],
    "outcome": "Lista de insumos exibida"
  },
  "accessPattern": {
    "kind": "list",
    "description": "Lista paginada de itens de estoque com filtros opcionais por nome e status para consulta e seleção de insumos",
    "entity": "StockItem",
    "keyField": "StockItem.stockItemId",
    "filters": [
      "StockItem.name",
      "StockItem.status"
    ],
    "sort": [
      "StockItem.name",
      "StockItem.createdAt"
    ],
    "pagination": "optional",
    "selection": "single",
    "output": [
      "StockItem.stockItemId",
      "StockItem.name",
      "StockItem.unitOfMeasure",
      "StockItem.minimumQuantity",
      "StockItem.status",
      "StockItem.createdAt",
      "StockItem.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "nameFilter",
      "fieldRef": "StockItem.name",
      "required": false,
      "source": "userInput",
      "description": "Termo para filtrar pelo nome do insumo"
    },
    {
      "inputId": "statusFilter",
      "fieldRef": "StockItem.status",
      "required": false,
      "source": "userInput",
      "description": "Status para filtrar os itens de estoque"
    }
  ],
  "contextResolution": [],
  "acceptanceAssertions": [
    "A consulta de itens de estoque não requer digitação de identificador técnico",
    "O gerente pode filtrar os resultados por nome e status do insumo",
    "A operação retorna uma lista paginada de itens de estoque cadastrados",
    "O gerente seleciona um item da lista para prosseguir com ajuste ou reposição"
  ],
  "capability": {
    "capabilityId": "manageStockItems",
    "title": "Gerenciar itens de estoque",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "queryStockItems",
  "commandName": "queryStockItems",
  "bffName": "cafeFlow.queryStockItems.queryStockItems"
} as const;

export default operationQueryStockItems;
