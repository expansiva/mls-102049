/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const adjustStockLevelController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "adjustStockLevel",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "adjustStockLevel",
    "controllerName": "AdjustStockLevelController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowAdjustStockLevelHandler",
        "command": "adjustStockLevel",
        "usecaseRef": "adjustStockLevel",
        "inputTypeName": "AdjustStockLevelInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "stockLevelId",
            "fieldRef": "StockLevel.stockLevelId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do nível de estoque selecionado para ajuste"
          },
          {
            "inputId": "movement",
            "fieldRef": "StockMovementEvent",
            "required": true,
            "source": "userInput",
            "description": "Dados da movimentação de ajuste ou reposição (quantidade, motivo e tipo)"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.stockLevelId",
            "source": "selectedEntity",
            "originRef": "StockLevel.stockLevelId",
            "description": "Identificador do nível de estoque obtido da entidade selecionada na jornada"
          },
          {
            "targetRef": "StockLevel.lastMovementAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Timestamp da última movimentação definido automaticamente pelo sistema"
          },
          {
            "targetRef": "StockLevel.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Timestamp da última atualização definido automaticamente pelo sistema"
          },
          {
            "targetRef": "StockMovementEvent.stockItemId",
            "source": "selectedEntity",
            "originRef": "StockLevel.stockItemId",
            "description": "Item de estoque referenciado obtido do nível de estoque selecionado"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Comando para ajustar ou repor a quantidade de um nível de estoque específico, registrando a movimentação correspondente",
          "entity": "StockLevel"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.adjustStockLevel.adjustStockLevel",
        "handlerName": "cafeFlowAdjustStockLevelHandler"
      }
    ]
  }
} as const;

export default adjustStockLevelController;

export const pipeline = [
  {
    "id": "adjustStockLevel__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/adjustStockLevel.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/adjustStockLevel.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.d.ts"
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
