/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockItems.defs.ts" enhancement="_blank"/>

export const queryStockItemsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "queryStockItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "queryStockItems",
    "controllerName": "QueryStockItemsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowQueryStockItemsHandler",
        "command": "queryStockItems",
        "usecaseRef": "queryStockItems",
        "inputTypeName": "QueryStockItemsInput",
        "kind": "query",
        "inputContract": [
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
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.queryStockItems.queryStockItems",
        "handlerName": "cafeFlowQueryStockItemsHandler"
      }
    ]
  }
} as const;

export default queryStockItemsController;

export const pipeline = [
  {
    "id": "queryStockItems__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockItems.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockItems.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockItems.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
