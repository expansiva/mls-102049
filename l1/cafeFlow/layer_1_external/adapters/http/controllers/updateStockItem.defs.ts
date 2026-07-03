/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateStockItem.defs.ts" enhancement="_blank"/>

export const updateStockItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateStockItem",
    "controllerName": "UpdateStockItemController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateStockItemHandler",
        "command": "updateStockItem",
        "usecaseRef": "updateStockItem",
        "inputTypeName": "UpdateStockItemInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "stockItemId",
            "fieldRef": "StockItem.stockItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador único do item de estoque a ser editado"
          },
          {
            "inputId": "name",
            "fieldRef": "StockItem.name",
            "required": true,
            "source": "userInput",
            "description": "Nome do insumo"
          },
          {
            "inputId": "unitOfMeasure",
            "fieldRef": "StockItem.unitOfMeasure",
            "required": true,
            "source": "userInput",
            "description": "Unidade de medida do insumo (ex: kg, unidade, litro)"
          },
          {
            "inputId": "minimumQuantity",
            "fieldRef": "StockItem.minimumQuantity",
            "required": true,
            "source": "userInput",
            "description": "Quantidade mínima para alerta de estoque baixo"
          },
          {
            "inputId": "status",
            "fieldRef": "StockItem.status",
            "required": true,
            "source": "userInput",
            "description": "Status do item de estoque (active ou inactive)"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.stockItemId",
            "source": "selectedEntity",
            "originRef": "StockItem.stockItemId",
            "description": "ID do item de estoque obtido da entidade selecionada no journey"
          },
          {
            "targetRef": "StockItem.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora da última atualização definida automaticamente pelo sistema"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Atualiza os dados cadastrais de um item de estoque previamente selecionado",
          "entity": "StockItem"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateStockItem.updateStockItem",
        "handlerName": "cafeFlowUpdateStockItemHandler"
      }
    ]
  }
} as const;

export default updateStockItemController;

export const pipeline = [
  {
    "id": "updateStockItem__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateStockItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateStockItem.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.d.ts"
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
