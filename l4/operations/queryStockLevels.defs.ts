/// <mls fileReference="_102049_/l4/operations/queryStockLevels.defs.ts" enhancement="_blank"/>

export const operationQueryStockLevels = {
  "operationId": "queryStockLevels",
  "title": "Consultar níveis de estoque",
  "actor": "manager",
  "entity": "StockLevel",
  "kind": "query",
  "reads": [
    "StockLevel",
    "StockItem",
    "StockLevel.currentQuantity",
    "StockLevel.lastMovementAt",
    "StockLevel.stockItemId"
  ],
  "writes": [],
  "rulesApplied": [
    "stockDecrementOnPreparing",
    "lowStockAlert"
  ],
  "story": {
    "actor": "manager",
    "goal": "Visualizar níveis atuais de estoque e alertas de estoque baixo",
    "soThat": "O gerente saiba quais insumos precisam de reposição antes do pico",
    "steps": [
      "Acessar a tela de controle de estoque",
      "Visualizar níveis e itens abaixo do mínimo",
      "Identificar itens que precisam reposição"
    ],
    "outcome": "Níveis de estoque e alertas exibidos"
  },
  "accessPattern": {
    "kind": "list",
    "description": "Lista paginada dos níveis atuais de estoque, incluindo alertas de estoque baixo para reposição",
    "entity": "StockLevel",
    "filters": [],
    "sort": [],
    "pagination": "optional",
    "selection": "none",
    "output": [
      "StockLevel.stockLevelId",
      "StockLevel.stockItemId",
      "StockLevel.currentQuantity",
      "StockLevel.lastMovementAt"
    ]
  },
  "inputs": [],
  "contextResolution": [],
  "acceptanceAssertions": [
    "Abrir a lista de níveis de estoque não requer digitação de identificador técnico",
    "A operação retorna a quantidade atual e a data da última movimentação de cada item",
    "Itens com estoque abaixo do mínimo são identificáveis na lista",
    "A consulta é somente leitura e não altera o estado do estoque"
  ],
  "capability": {
    "capabilityId": "manageStockAdjustment",
    "title": "Ajustar e repor estoque",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "queryStockLevels",
  "commandName": "queryStockLevels",
  "bffName": "cafeFlow.queryStockLevels.queryStockLevels"
} as const;

export default operationQueryStockLevels;
