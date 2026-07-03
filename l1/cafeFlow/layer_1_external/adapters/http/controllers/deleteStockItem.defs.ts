/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteStockItem.defs.ts" enhancement="_blank"/>

export const deleteStockItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "deleteStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "deleteStockItem",
    "controllerName": "DeleteStockItemController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowDeleteStockItemHandler",
        "command": "deleteStockItem",
        "usecaseRef": "deleteStockItem",
        "inputTypeName": "DeleteStockItemInput",
        "kind": "delete",
        "inputContract": [
          {
            "inputId": "stockItemId",
            "fieldRef": "StockItem.stockItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador único do item de estoque a ser removido"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.stockItemId",
            "source": "selectedEntity",
            "originRef": "StockItem.stockItemId",
            "description": "O id do item de estoque é obtido da entidade selecionada na jornada de localização"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Exclui um item de estoque previamente selecionado do cadastro",
          "entity": "StockItem",
          "selection": "none"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.deleteStockItem.deleteStockItem",
        "handlerName": "cafeFlowDeleteStockItemHandler"
      }
    ]
  }
} as const;

export default deleteStockItemController;

export const pipeline = [
  {
    "id": "deleteStockItem__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteStockItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteStockItem.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.d.ts"
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
