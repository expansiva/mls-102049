/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-attendant-pos.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-attendant-pos",
  "pageName": "POS – Lançamento e Finalização de Pedidos",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:orderLifecycle",
    "operation:createOrder",
    "operation:settleOrder"
  ],
  "operationIds": [
    "createOrder",
    "settleOrder"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-attendant-pos",
    "workspaceKind": "workflow",
    "workflowId": "orderLifecycle",
    "actor": "attendant",
    "entity": "",
    "owners": [
      {
        "kind": "workflow",
        "id": "orderLifecycle",
        "defPath": "_102049_/l4/workflows/orderLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createOrder",
        "defPath": "_102049_/l4/operations/createOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "settleOrder",
        "defPath": "_102049_/l4/operations/settleOrder.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Atendente lança o pedido no POS informando mesa e itens do cardápio",
        "Pedido é enviado para a cozinha como ticket",
        "Cozinheiro atualiza status de preparação conforme sequência de cozinha",
        "Estoque é decrementado automaticamente ao preparar",
        "Atendente finaliza o pedido quando entregue e/ou pago"
      ],
      "operations": [
        {
          "operationId": "createOrder",
          "commandName": "createOrder",
          "steps": [
            "Selecionar a mesa ou informar número",
            "Adicionar itens do cardápio ao pedido",
            "Aplicar regras de combo e substituições se aplicável",
            "Confirmar e enviar o pedido para a cozinha"
          ]
        },
        {
          "operationId": "settleOrder",
          "commandName": "settleOrder",
          "steps": [
            "Verificar que o pedido está marcado como pronto pela cozinha",
            "Confirmar entrega ou pagamento",
            "Marcar pedido como finalizado"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.defs.ts",
    "tsPath": "_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-attendant-pos.defs.ts",
    "layoutId": "ws-attendant-pos.layout"
  },
  "states": [
    {
      "stateKey": "ui.ws-attendant-pos.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-attendant-pos.action.createOrder.status",
      "name": "createOrderState",
      "kind": "actionStatus",
      "actionRef": "createOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-attendant-pos.input.createOrder.orderType",
      "name": "createOrderOrderType",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "orderType"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-attendant-pos.input.createOrder.status",
      "name": "createOrderStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-attendant-pos.input.createOrder.total",
      "name": "createOrderTotal",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "total"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-attendant-pos.action.settleOrder.status",
      "name": "settleOrderState",
      "kind": "actionStatus",
      "actionRef": "settleOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-attendant-pos.input.settleOrder.status",
      "name": "settleOrderStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "settleOrder",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createOrder",
      "kind": "command",
      "commandRef": "createOrder",
      "routeKey": "cafeFlow.orderLifecycle.createOrder",
      "purpose": "Lançar pedido no POS",
      "methodName": "createOrder",
      "handlerName": "handleCreateOrderClick",
      "inputStateKeys": [
        "ui.ws-attendant-pos.input.createOrder.orderType",
        "ui.ws-attendant-pos.input.createOrder.status",
        "ui.ws-attendant-pos.input.createOrder.total"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-attendant-pos.action.createOrder.status"
    },
    {
      "actionId": "settleOrder",
      "kind": "command",
      "commandRef": "settleOrder",
      "routeKey": "cafeFlow.orderLifecycle.settleOrder",
      "purpose": "Finalizar pedido",
      "methodName": "settleOrder",
      "handlerName": "handleSettleOrderClick",
      "inputStateKeys": [
        "ui.ws-attendant-pos.input.settleOrder.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-attendant-pos.action.settleOrder.status"
    },
    {
      "actionId": "set.createOrderOrderType",
      "kind": "stateSetter",
      "stateKey": "ui.ws-attendant-pos.input.createOrder.orderType",
      "methodName": "setCreateOrderOrderType",
      "handlerName": "handleCreateOrderOrderTypeChange"
    },
    {
      "actionId": "set.createOrderStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-attendant-pos.input.createOrder.status",
      "methodName": "setCreateOrderStatus",
      "handlerName": "handleCreateOrderStatusChange"
    },
    {
      "actionId": "set.createOrderTotal",
      "kind": "stateSetter",
      "stateKey": "ui.ws-attendant-pos.input.createOrder.total",
      "methodName": "setCreateOrderTotal",
      "handlerName": "handleCreateOrderTotalChange"
    },
    {
      "actionId": "set.settleOrderStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-attendant-pos.input.settleOrder.status",
      "methodName": "setSettleOrderStatus",
      "handlerName": "handleSettleOrderStatusChange"
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
    "ws-attendant-pos.section.main.title": "POS – Lançamento e Finalização de Pedidos",
    "ws-attendant-pos.organism.createOrder.title": "Lançar pedido no POS",
    "ws-attendant-pos.organism.settleOrder.title": "Finalizar pedido",
    "ws-attendant-pos.createOrder.step.selectTable.title": "Selecionar mesa ou informar número",
    "ws-attendant-pos.createOrder.step.addItems.title": "Adicionar itens do cardápio ao pedido",
    "ws-attendant-pos.createOrder.step.applyCombos.title": "Aplicar regras de combo e substituições",
    "ws-attendant-pos.createOrder.step.confirmSend.title": "Confirmar e enviar pedido para a cozinha",
    "ws-attendant-pos.settleOrder.step.verifyReady.title": "Verificar pedido pronto pela cozinha",
    "ws-attendant-pos.settleOrder.step.confirmDelivery.title": "Confirmar entrega ou pagamento",
    "ws-attendant-pos.settleOrder.step.finalize.title": "Marcar pedido como finalizado",
    "ws-attendant-pos.field.orderType.label": "Modalidade do pedido",
    "ws-attendant-pos.field.status.label": "Status do pedido",
    "ws-attendant-pos.field.total.label": "Total do pedido",
    "ws-attendant-pos.action.createOrder.label": "Enviar pedido para a cozinha",
    "ws-attendant-pos.action.settleOrder.label": "Finalizar pedido"
  },
  "automation": {
    "statePrefix": "ui.ws-attendant-pos",
    "stateKeys": [
      "ui.ws-attendant-pos.status",
      "ui.ws-attendant-pos.action.createOrder.status",
      "ui.ws-attendant-pos.input.createOrder.orderType",
      "ui.ws-attendant-pos.input.createOrder.status",
      "ui.ws-attendant-pos.input.createOrder.total",
      "ui.ws-attendant-pos.action.settleOrder.status",
      "ui.ws-attendant-pos.input.settleOrder.status"
    ],
    "actionIds": [
      "createOrder",
      "settleOrder",
      "set.createOrderOrderType",
      "set.createOrderStatus",
      "set.createOrderTotal",
      "set.settleOrderStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "ws-attendant-pos__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/cafeFlow/web/shared/ws-attendant-pos.ts",
    "defPath": "_102049_/l2/cafeFlow/web/shared/ws-attendant-pos.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "ws-attendant-pos__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
