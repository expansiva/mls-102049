/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockItem.defs.ts" enhancement="_blank"/>

export const createStockItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createStockItem",
    "controllerName": "CreateStockItemController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateStockItemHandler",
        "command": "createStockItem",
        "usecaseRef": "createStockItem",
        "inputTypeName": "CreateStockItemInput",
        "kind": "create",
        "inputContract": [
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
          }
        ],
        "contextResolution": [
          {
            "targetRef": "StockItem.stockItemId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "Identificador único gerado automaticamente pelo sistema"
          },
          {
            "targetRef": "StockItem.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora de criação do registro"
          },
          {
            "targetRef": "StockItem.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora da última atualização do registro"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Criação de um novo item de estoque (insumo) com nome, unidade de medida e quantidade mínima",
          "entity": "StockItem",
          "pagination": "none",
          "selection": "none",
          "output": [
            "StockItem.stockItemId",
            "StockItem.name",
            "StockItem.unitOfMeasure",
            "StockItem.minimumQuantity",
            "StockItem.status"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createStockItem.createStockItem",
        "handlerName": "cafeFlowCreateStockItemHandler"
      }
    ]
  }
} as const;

export default createStockItemController;

export const pipeline = [
  {
    "id": "createStockItem__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockItem.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/createStockItem.d.ts"
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
