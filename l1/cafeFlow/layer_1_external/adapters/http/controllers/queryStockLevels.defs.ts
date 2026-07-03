/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockLevels.defs.ts" enhancement="_blank"/>

export const queryStockLevelsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "queryStockLevels",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "queryStockLevels",
    "controllerName": "QueryStockLevelsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowQueryStockLevelsHandler",
        "command": "queryStockLevels",
        "usecaseRef": "queryStockLevels",
        "inputTypeName": "QueryStockLevelsInput",
        "kind": "query",
        "inputContract": [],
        "contextResolution": [],
        "accessPattern": {
          "kind": "list",
          "description": "Lista paginada dos níveis atuais de estoque, incluindo alertas de estoque baixo para reposição",
          "entity": "StockLevel",
          "pagination": "optional",
          "selection": "none",
          "output": [
            "StockLevel.stockLevelId",
            "StockLevel.stockItemId",
            "StockLevel.currentQuantity",
            "StockLevel.lastMovementAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.queryStockLevels.queryStockLevels",
        "handlerName": "cafeFlowQueryStockLevelsHandler"
      }
    ]
  }
} as const;

export default queryStockLevelsController;

export const pipeline = [
  {
    "id": "queryStockLevels__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockLevels.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryStockLevels.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockLevels.d.ts"
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
