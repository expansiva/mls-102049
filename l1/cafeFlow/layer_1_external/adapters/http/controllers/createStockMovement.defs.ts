/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockMovement.defs.ts" enhancement="_blank"/>

export const createStockMovementController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createStockMovement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "orderLifecycle",
    "controllerName": "CreateStockMovementController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateStockMovementHandler",
        "command": "createStockMovement",
        "usecaseRef": "createStockMovement",
        "inputTypeName": "CreateStockMovementInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "stockItemId",
            "fieldRef": "StockMovementEvent.stockItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Item de estoque (insumo) selecionado para baixa"
          },
          {
            "inputId": "quantity",
            "fieldRef": "StockMovementEvent.quantity",
            "required": true,
            "source": "userInput",
            "description": "Quantidade consumida do insumo"
          },
          {
            "inputId": "reason",
            "fieldRef": "StockMovementEvent.reason",
            "required": true,
            "source": "userInput",
            "description": "Motivo da movimentação de estoque"
          },
          {
            "inputId": "movementType",
            "fieldRef": "StockMovementEvent.movementType",
            "required": true,
            "source": "userInput",
            "description": "Tipo da movimentação (baixa ou reposição)"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.stockItemId",
            "source": "selectedEntity",
            "originRef": "StockItem.stockItemId",
            "description": "Identificador do item de estoque selecionado na interface pelo cook"
          },
          {
            "targetRef": "StockMovementEvent.stockMovementEventId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "UUID gerado automaticamente pelo sistema para o evento"
          },
          {
            "targetRef": "StockMovementEvent.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data/hora de criação atribuída automaticamente"
          },
          {
            "targetRef": "StockMovementEvent.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data/hora de atualização atribuída automaticamente"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Comando para registrar um evento de baixa de estoque de um insumo consumido durante o preparo",
          "entity": "StockMovementEvent",
          "pagination": "none",
          "selection": "none",
          "output": [
            "StockMovementEvent"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.orderLifecycle.createStockMovement",
        "handlerName": "cafeFlowCreateStockMovementHandler"
      }
    ]
  }
} as const;

export default createStockMovementController;

export const pipeline = [
  {
    "id": "createStockMovement__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockMovement.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockMovement.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/createStockMovement.d.ts"
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
