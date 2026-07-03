/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-stock-adjustment.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-stock-adjustment",
  "pageName": "Controle e Ajuste de Estoque",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryStockLevels",
    "operation:adjustStockLevel"
  ],
  "operationIds": [
    "queryStockLevels",
    "adjustStockLevel"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-manager-stock-adjustment",
    "workspaceKind": "entityManagement",
    "actor": "manager",
    "entity": "StockLevel",
    "owners": [
      {
        "kind": "operation",
        "id": "queryStockLevels",
        "defPath": "_102049_/l4/operations/queryStockLevels.defs.ts"
      },
      {
        "kind": "operation",
        "id": "adjustStockLevel",
        "defPath": "_102049_/l4/operations/adjustStockLevel.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryStockLevels",
          "commandName": "queryStockLevels",
          "steps": [
            "Acessar a tela de controle de estoque",
            "Visualizar níveis e itens abaixo do mínimo",
            "Identificar itens que precisam reposição"
          ]
        },
        {
          "operationId": "adjustStockLevel",
          "commandName": "adjustStockLevel",
          "steps": [
            "Localizar o insumo com nível de estoque",
            "Informar quantidade de reposição ou ajuste",
            "Registrar motivo do ajuste",
            "Salvar alteração"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.defs.ts",
    "tsPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-adjustment.defs.ts",
    "layoutId": "ws-manager-stock-adjustment.layout"
  },
  "states": [
    {
      "stateKey": "ui.ws-manager-stock-adjustment.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-adjustment.action.queryStockLevels.status",
      "name": "queryStockLevelsState",
      "kind": "actionStatus",
      "actionRef": "queryStockLevels",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId",
      "name": "queryStockLevelsStockItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockLevels",
        "direction": "input",
        "field": "stockItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt",
      "name": "queryStockLevelsLastMovementAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockLevels",
        "direction": "input",
        "field": "lastMovementAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-adjustment.data.queryStockLevels",
      "name": "queryStockLevelsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryStockLevels",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.ws-manager-stock-adjustment.action.adjustStockLevel.status",
      "name": "adjustStockLevelState",
      "kind": "actionStatus",
      "actionRef": "adjustStockLevel",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity",
      "name": "adjustStockLevelCurrentQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "adjustStockLevel",
        "direction": "input",
        "field": "currentQuantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt",
      "name": "adjustStockLevelLastMovementAt",
      "kind": "input",
      "contractRef": {
        "commandName": "adjustStockLevel",
        "direction": "input",
        "field": "lastMovementAt"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "queryStockLevels",
      "kind": "query",
      "commandRef": "queryStockLevels",
      "routeKey": "cafeFlow.queryStockLevels.queryStockLevels",
      "purpose": "Consultar níveis de estoque",
      "methodName": "loadQueryStockLevels",
      "handlerName": "handleQueryStockLevelsClick",
      "inputStateKeys": [
        "ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId",
        "ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt"
      ],
      "outputStateKeys": [
        "ui.ws-manager-stock-adjustment.data.queryStockLevels"
      ],
      "statusStateKey": "ui.ws-manager-stock-adjustment.action.queryStockLevels.status"
    },
    {
      "actionId": "adjustStockLevel",
      "kind": "command",
      "commandRef": "adjustStockLevel",
      "routeKey": "cafeFlow.adjustStockLevel.adjustStockLevel",
      "purpose": "Ajustar e repor estoque",
      "methodName": "adjustStockLevel",
      "handlerName": "handleAdjustStockLevelClick",
      "inputStateKeys": [
        "ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity",
        "ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-stock-adjustment.action.adjustStockLevel.status"
    },
    {
      "actionId": "set.queryStockLevelsStockItemId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId",
      "methodName": "setQueryStockLevelsStockItemId",
      "handlerName": "handleQueryStockLevelsStockItemIdChange"
    },
    {
      "actionId": "set.queryStockLevelsLastMovementAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt",
      "methodName": "setQueryStockLevelsLastMovementAt",
      "handlerName": "handleQueryStockLevelsLastMovementAtChange"
    },
    {
      "actionId": "set.adjustStockLevelCurrentQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity",
      "methodName": "setAdjustStockLevelCurrentQuantity",
      "handlerName": "handleAdjustStockLevelCurrentQuantityChange"
    },
    {
      "actionId": "set.adjustStockLevelLastMovementAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt",
      "methodName": "setAdjustStockLevelLastMovementAt",
      "handlerName": "handleAdjustStockLevelLastMovementAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryStockLevels",
      "stateKey": "ui.ws-manager-stock-adjustment.data.queryStockLevels"
    }
  ],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en"
    ]
  },
  "i18n": {
    "ws-manager-stock-adjustment.section.stockAdjustment.title": "Controle e Ajuste de Estoque",
    "ws-manager-stock-adjustment.organism.queryStockLevels.title": "Consultar níveis de estoque",
    "ws-manager-stock-adjustment.organism.adjustStockLevel.title": "Ajustar e repor estoque",
    "ws-manager-stock-adjustment.intention.queryStockLevels.title": "Níveis de estoque",
    "ws-manager-stock-adjustment.intention.adjustStockLevel.title": "Ajuste de estoque",
    "ws-manager-stock-adjustment.intention.review.title": "Resumo do ajuste",
    "ws-manager-stock-adjustment.field.stockItemId.label": "Item de estoque",
    "ws-manager-stock-adjustment.field.stockItemId.filterLabel": "Filtrar por item de estoque",
    "ws-manager-stock-adjustment.field.currentQuantity.label": "Quantidade atual",
    "ws-manager-stock-adjustment.field.lastMovementAt.label": "Última movimentação",
    "ws-manager-stock-adjustment.field.lastMovementAt.filterLabel": "Filtrar por última movimentação",
    "ws-manager-stock-adjustment.action.queryStockLevels.label": "Consultar níveis",
    "ws-manager-stock-adjustment.action.adjustStockLevel.label": "Salvar ajuste"
  },
  "automation": {
    "statePrefix": "ui.ws-manager-stock-adjustment",
    "stateKeys": [
      "ui.ws-manager-stock-adjustment.status",
      "ui.ws-manager-stock-adjustment.action.queryStockLevels.status",
      "ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId",
      "ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt",
      "ui.ws-manager-stock-adjustment.data.queryStockLevels",
      "ui.ws-manager-stock-adjustment.action.adjustStockLevel.status",
      "ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity",
      "ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt"
    ],
    "actionIds": [
      "queryStockLevels",
      "adjustStockLevel",
      "set.queryStockLevelsStockItemId",
      "set.queryStockLevelsLastMovementAt",
      "set.adjustStockLevelCurrentQuantity",
      "set.adjustStockLevelLastMovementAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "ws-manager-stock-adjustment__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-stock-adjustment.ts",
    "defPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-stock-adjustment.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "ws-manager-stock-adjustment__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
