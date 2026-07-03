/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-cook-kitchen.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-cook-kitchen",
  "pageName": "Cozinha – Fila de Tickets e Baixa de Estoque",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:kitchenTicketFlow",
    "operation:updateKitchenStatus",
    "operation:createStockMovement"
  ],
  "operationIds": [
    "updateKitchenStatus",
    "createStockMovement"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-cook-kitchen",
    "workspaceKind": "workflow",
    "workflowId": "kitchenTicketFlow",
    "actor": "cook",
    "entity": "",
    "owners": [
      {
        "kind": "workflow",
        "id": "kitchenTicketFlow",
        "defPath": "_102049_/l4/workflows/kitchenTicketFlow.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateKitchenStatus",
        "defPath": "_102049_/l4/operations/updateKitchenStatus.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createStockMovement",
        "defPath": "_102049_/l4/operations/createStockMovement.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Cozinheiro visualiza a fila de tickets recebidos do POS",
        "Inicia o preparo atualizando o status do ticket",
        "Dá baixa nos insumos utilizados no estoque",
        "Marca o ticket como pronto para retirada"
      ],
      "operations": [
        {
          "operationId": "updateKitchenStatus",
          "commandName": "updateKitchenStatus",
          "steps": [
            "Visualizar ticket na fila de cozinha",
            "Atualizar status seguindo a sequência: recebido → em preparo → pronto",
            "Confirmar a mudança de status"
          ]
        },
        {
          "operationId": "createStockMovement",
          "commandName": "createStockMovement",
          "steps": [
            "Identificar insumos consumidos pelo item preparado",
            "Registrar movimentação de saída no estoque",
            "Sistema verifica se há alerta de estoque baixo"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.defs.ts",
    "tsPath": "_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-cook-kitchen.defs.ts",
    "layoutId": "ws-cook-kitchen.layout"
  },
  "states": [
    {
      "stateKey": "ui.ws-cook-kitchen.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.action.updateKitchenStatus.status",
      "name": "updateKitchenStatusState",
      "kind": "actionStatus",
      "actionRef": "updateKitchenStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.status",
      "name": "updateKitchenStatusStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateKitchenStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus",
      "name": "updateKitchenStatusPreviousStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateKitchenStatus",
        "direction": "input",
        "field": "previousStatus"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.action.createStockMovement.status",
      "name": "createStockMovementState",
      "kind": "actionStatus",
      "actionRef": "createStockMovement",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.movementType",
      "name": "createStockMovementMovementType",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockMovement",
        "direction": "input",
        "field": "movementType"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.quantity",
      "name": "createStockMovementQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockMovement",
        "direction": "input",
        "field": "quantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.reason",
      "name": "createStockMovementReason",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockMovement",
        "direction": "input",
        "field": "reason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.layout.col-order-id",
      "name": "LayoutColOrderId",
      "kind": "layoutState",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.layout.col-order-type",
      "name": "LayoutColOrderType",
      "kind": "layoutState",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.layout.col-table-id",
      "name": "LayoutColTableId",
      "kind": "layoutState",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.layout.col-total",
      "name": "LayoutColTotal",
      "kind": "layoutState",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-cook-kitchen.layout.col-created-at",
      "name": "LayoutColCreatedAt",
      "kind": "layoutState",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "updateKitchenStatus",
      "kind": "command",
      "commandRef": "updateKitchenStatus",
      "routeKey": "cafeFlow.orderLifecycle.updateKitchenStatus",
      "purpose": "Atualizar status de cozinha",
      "methodName": "updateKitchenStatus",
      "handlerName": "handleUpdateKitchenStatusClick",
      "inputStateKeys": [
        "ui.ws-cook-kitchen.input.updateKitchenStatus.status",
        "ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-cook-kitchen.action.updateKitchenStatus.status"
    },
    {
      "actionId": "createStockMovement",
      "kind": "command",
      "commandRef": "createStockMovement",
      "routeKey": "cafeFlow.orderLifecycle.createStockMovement",
      "purpose": "Dar baixa no estoque",
      "methodName": "createStockMovement",
      "handlerName": "handleCreateStockMovementClick",
      "inputStateKeys": [
        "ui.ws-cook-kitchen.input.createStockMovement.movementType",
        "ui.ws-cook-kitchen.input.createStockMovement.quantity",
        "ui.ws-cook-kitchen.input.createStockMovement.reason"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-cook-kitchen.action.createStockMovement.status"
    },
    {
      "actionId": "set.updateKitchenStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.status",
      "methodName": "setUpdateKitchenStatusStatus",
      "handlerName": "handleUpdateKitchenStatusStatusChange"
    },
    {
      "actionId": "set.updateKitchenStatusPreviousStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus",
      "methodName": "setUpdateKitchenStatusPreviousStatus",
      "handlerName": "handleUpdateKitchenStatusPreviousStatusChange"
    },
    {
      "actionId": "set.createStockMovementMovementType",
      "kind": "stateSetter",
      "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.movementType",
      "methodName": "setCreateStockMovementMovementType",
      "handlerName": "handleCreateStockMovementMovementTypeChange"
    },
    {
      "actionId": "set.createStockMovementQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.quantity",
      "methodName": "setCreateStockMovementQuantity",
      "handlerName": "handleCreateStockMovementQuantityChange"
    },
    {
      "actionId": "set.createStockMovementReason",
      "kind": "stateSetter",
      "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.reason",
      "methodName": "setCreateStockMovementReason",
      "handlerName": "handleCreateStockMovementReasonChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en"
    ]
  },
  "i18n": {
    "ws-cook-kitchen.section.kitchenQueue.title": "Cozinha – Fila de Tickets e Baixa de Estoque",
    "ws-cook-kitchen.organism.updateKitchenStatus.title": "Atualizar status de cozinha",
    "ws-cook-kitchen.organism.createStockMovement.title": "Dar baixa no estoque",
    "ws-cook-kitchen.intent.ticketQueue.title": "Fila de tickets da cozinha",
    "ws-cook-kitchen.intent.startPreparation.title": "Iniciar preparo",
    "ws-cook-kitchen.intent.markReady.title": "Marcar como pronto",
    "ws-cook-kitchen.intent.stockMovement.title": "Baixa de estoque",
    "ws-cook-kitchen.field.orderId": "Pedido",
    "ws-cook-kitchen.field.orderType": "Tipo",
    "ws-cook-kitchen.field.tableId": "Mesa",
    "ws-cook-kitchen.field.orderStatus": "Status",
    "ws-cook-kitchen.field.total": "Total",
    "ws-cook-kitchen.field.createdAt": "Criado em",
    "ws-cook-kitchen.field.previousStatus": "Status anterior",
    "ws-cook-kitchen.field.status": "Novo status",
    "ws-cook-kitchen.action.updateKitchenStatus": "Atualizar status",
    "ws-cook-kitchen.action.markReady": "Confirmar pronto",
    "ws-cook-kitchen.field.movementType": "Tipo de movimentação",
    "ws-cook-kitchen.field.quantity": "Quantidade",
    "ws-cook-kitchen.field.reason": "Motivo",
    "ws-cook-kitchen.action.createStockMovement": "Registrar baixa"
  },
  "automation": {
    "statePrefix": "ui.ws-cook-kitchen",
    "stateKeys": [
      "ui.ws-cook-kitchen.status",
      "ui.ws-cook-kitchen.action.updateKitchenStatus.status",
      "ui.ws-cook-kitchen.input.updateKitchenStatus.status",
      "ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus",
      "ui.ws-cook-kitchen.action.createStockMovement.status",
      "ui.ws-cook-kitchen.input.createStockMovement.movementType",
      "ui.ws-cook-kitchen.input.createStockMovement.quantity",
      "ui.ws-cook-kitchen.input.createStockMovement.reason",
      "ui.ws-cook-kitchen.layout.col-order-id",
      "ui.ws-cook-kitchen.layout.col-order-type",
      "ui.ws-cook-kitchen.layout.col-table-id",
      "ui.ws-cook-kitchen.layout.col-total",
      "ui.ws-cook-kitchen.layout.col-created-at"
    ],
    "actionIds": [
      "updateKitchenStatus",
      "createStockMovement",
      "set.updateKitchenStatusStatus",
      "set.updateKitchenStatusPreviousStatus",
      "set.createStockMovementMovementType",
      "set.createStockMovementQuantity",
      "set.createStockMovementReason"
    ]
  }
};

export const pipeline = [
  {
    "id": "ws-cook-kitchen__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/cafeFlow/web/shared/ws-cook-kitchen.ts",
    "defPath": "_102049_/l2/cafeFlow/web/shared/ws-cook-kitchen.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "ws-cook-kitchen__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
