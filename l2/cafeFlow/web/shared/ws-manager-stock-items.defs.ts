/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-stock-items.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-stock-items",
  "pageName": "Gestão de Insumos de Estoque",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryStockItems",
    "operation:createStockItem",
    "operation:updateStockItem",
    "operation:deleteStockItem"
  ],
  "operationIds": [
    "queryStockItems",
    "createStockItem",
    "updateStockItem",
    "deleteStockItem"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-manager-stock-items",
    "workspaceKind": "entityManagement",
    "actor": "manager",
    "entity": "StockItem",
    "owners": [
      {
        "kind": "operation",
        "id": "queryStockItems",
        "defPath": "_102049_/l4/operations/queryStockItems.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createStockItem",
        "defPath": "_102049_/l4/operations/createStockItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateStockItem",
        "defPath": "_102049_/l4/operations/updateStockItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteStockItem",
        "defPath": "_102049_/l4/operations/deleteStockItem.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryStockItems",
          "commandName": "queryStockItems",
          "steps": [
            "Acessar a tela de gerenciamento de estoque",
            "Filtrar por nome ou categoria",
            "Visualizar resultados"
          ]
        },
        {
          "operationId": "createStockItem",
          "commandName": "createStockItem",
          "steps": [
            "Informar nome, unidade de medida e estoque mínimo",
            "Definir quantidade inicial",
            "Salvar o item"
          ]
        },
        {
          "operationId": "updateStockItem",
          "commandName": "updateStockItem",
          "steps": [
            "Localizar o insumo",
            "Alterar unidade, estoque mínimo ou nome",
            "Salvar alterações"
          ]
        },
        {
          "operationId": "deleteStockItem",
          "commandName": "deleteStockItem",
          "steps": [
            "Localizar o insumo",
            "Confirmar exclusão"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.defs.ts",
    "tsPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-items.defs.ts",
    "layoutId": "ws-manager-stock-items-layout"
  },
  "states": [
    {
      "stateKey": "ui.ws-manager-stock-items.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.action.queryStockItems.status",
      "name": "queryStockItemsState",
      "kind": "actionStatus",
      "actionRef": "queryStockItems",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.stockItemId",
      "name": "queryStockItemsStockItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItems",
        "direction": "input",
        "field": "stockItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.name",
      "name": "queryStockItemsName",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItems",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.status",
      "name": "queryStockItemsStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItems",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.createdAt",
      "name": "queryStockItemsCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItems",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.updatedAt",
      "name": "queryStockItemsUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryStockItems",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.data.queryStockItems",
      "name": "queryStockItemsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryStockItems",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.ws-manager-stock-items.action.createStockItem.status",
      "name": "createStockItemState",
      "kind": "actionStatus",
      "actionRef": "createStockItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.createStockItem.name",
      "name": "createStockItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure",
      "name": "createStockItemUnitOfMeasure",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockItem",
        "direction": "input",
        "field": "unitOfMeasure"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.createStockItem.minimumQuantity",
      "name": "createStockItemMinimumQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockItem",
        "direction": "input",
        "field": "minimumQuantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.createStockItem.status",
      "name": "createStockItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.action.updateStockItem.status",
      "name": "updateStockItemState",
      "kind": "actionStatus",
      "actionRef": "updateStockItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.name",
      "name": "updateStockItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "updateStockItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure",
      "name": "updateStockItemUnitOfMeasure",
      "kind": "input",
      "contractRef": {
        "commandName": "updateStockItem",
        "direction": "input",
        "field": "unitOfMeasure"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity",
      "name": "updateStockItemMinimumQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "updateStockItem",
        "direction": "input",
        "field": "minimumQuantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.status",
      "name": "updateStockItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateStockItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.action.deleteStockItem.status",
      "name": "deleteStockItemState",
      "kind": "actionStatus",
      "actionRef": "deleteStockItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.stockItemId",
      "name": "deleteStockItemStockItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "stockItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.name",
      "name": "deleteStockItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure",
      "name": "deleteStockItemUnitOfMeasure",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "unitOfMeasure"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity",
      "name": "deleteStockItemMinimumQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "minimumQuantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.status",
      "name": "deleteStockItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteStockItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "queryStockItems",
      "kind": "query",
      "commandRef": "queryStockItems",
      "routeKey": "cafeFlow.queryStockItems.queryStockItems",
      "purpose": "Consultar itens de estoque",
      "methodName": "loadQueryStockItems",
      "handlerName": "handleQueryStockItemsClick",
      "inputStateKeys": [
        "ui.ws-manager-stock-items.input.queryStockItems.stockItemId",
        "ui.ws-manager-stock-items.input.queryStockItems.name",
        "ui.ws-manager-stock-items.input.queryStockItems.status",
        "ui.ws-manager-stock-items.input.queryStockItems.createdAt",
        "ui.ws-manager-stock-items.input.queryStockItems.updatedAt"
      ],
      "outputStateKeys": [
        "ui.ws-manager-stock-items.data.queryStockItems"
      ],
      "statusStateKey": "ui.ws-manager-stock-items.action.queryStockItems.status"
    },
    {
      "actionId": "createStockItem",
      "kind": "command",
      "commandRef": "createStockItem",
      "routeKey": "cafeFlow.createStockItem.createStockItem",
      "purpose": "Cadastrar item de estoque",
      "methodName": "createStockItem",
      "handlerName": "handleCreateStockItemClick",
      "inputStateKeys": [
        "ui.ws-manager-stock-items.input.createStockItem.name",
        "ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure",
        "ui.ws-manager-stock-items.input.createStockItem.minimumQuantity",
        "ui.ws-manager-stock-items.input.createStockItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-stock-items.action.createStockItem.status"
    },
    {
      "actionId": "updateStockItem",
      "kind": "command",
      "commandRef": "updateStockItem",
      "routeKey": "cafeFlow.updateStockItem.updateStockItem",
      "purpose": "Editar item de estoque",
      "methodName": "updateStockItem",
      "handlerName": "handleUpdateStockItemClick",
      "inputStateKeys": [
        "ui.ws-manager-stock-items.input.updateStockItem.name",
        "ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure",
        "ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity",
        "ui.ws-manager-stock-items.input.updateStockItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-stock-items.action.updateStockItem.status"
    },
    {
      "actionId": "deleteStockItem",
      "kind": "command",
      "commandRef": "deleteStockItem",
      "routeKey": "cafeFlow.deleteStockItem.deleteStockItem",
      "purpose": "Remover item de estoque",
      "methodName": "deleteStockItem",
      "handlerName": "handleDeleteStockItemClick",
      "inputStateKeys": [
        "ui.ws-manager-stock-items.input.deleteStockItem.stockItemId",
        "ui.ws-manager-stock-items.input.deleteStockItem.name",
        "ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure",
        "ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity",
        "ui.ws-manager-stock-items.input.deleteStockItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-stock-items.action.deleteStockItem.status"
    },
    {
      "actionId": "set.queryStockItemsStockItemId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.stockItemId",
      "methodName": "setQueryStockItemsStockItemId",
      "handlerName": "handleQueryStockItemsStockItemIdChange"
    },
    {
      "actionId": "set.queryStockItemsName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.name",
      "methodName": "setQueryStockItemsName",
      "handlerName": "handleQueryStockItemsNameChange"
    },
    {
      "actionId": "set.queryStockItemsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.status",
      "methodName": "setQueryStockItemsStatus",
      "handlerName": "handleQueryStockItemsStatusChange"
    },
    {
      "actionId": "set.queryStockItemsCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.createdAt",
      "methodName": "setQueryStockItemsCreatedAt",
      "handlerName": "handleQueryStockItemsCreatedAtChange"
    },
    {
      "actionId": "set.queryStockItemsUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.updatedAt",
      "methodName": "setQueryStockItemsUpdatedAt",
      "handlerName": "handleQueryStockItemsUpdatedAtChange"
    },
    {
      "actionId": "set.createStockItemName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.createStockItem.name",
      "methodName": "setCreateStockItemName",
      "handlerName": "handleCreateStockItemNameChange"
    },
    {
      "actionId": "set.createStockItemUnitOfMeasure",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure",
      "methodName": "setCreateStockItemUnitOfMeasure",
      "handlerName": "handleCreateStockItemUnitOfMeasureChange"
    },
    {
      "actionId": "set.createStockItemMinimumQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.createStockItem.minimumQuantity",
      "methodName": "setCreateStockItemMinimumQuantity",
      "handlerName": "handleCreateStockItemMinimumQuantityChange"
    },
    {
      "actionId": "set.createStockItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.createStockItem.status",
      "methodName": "setCreateStockItemStatus",
      "handlerName": "handleCreateStockItemStatusChange"
    },
    {
      "actionId": "set.updateStockItemName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.name",
      "methodName": "setUpdateStockItemName",
      "handlerName": "handleUpdateStockItemNameChange"
    },
    {
      "actionId": "set.updateStockItemUnitOfMeasure",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure",
      "methodName": "setUpdateStockItemUnitOfMeasure",
      "handlerName": "handleUpdateStockItemUnitOfMeasureChange"
    },
    {
      "actionId": "set.updateStockItemMinimumQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity",
      "methodName": "setUpdateStockItemMinimumQuantity",
      "handlerName": "handleUpdateStockItemMinimumQuantityChange"
    },
    {
      "actionId": "set.updateStockItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.status",
      "methodName": "setUpdateStockItemStatus",
      "handlerName": "handleUpdateStockItemStatusChange"
    },
    {
      "actionId": "set.deleteStockItemStockItemId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.stockItemId",
      "methodName": "setDeleteStockItemStockItemId",
      "handlerName": "handleDeleteStockItemStockItemIdChange"
    },
    {
      "actionId": "set.deleteStockItemName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.name",
      "methodName": "setDeleteStockItemName",
      "handlerName": "handleDeleteStockItemNameChange"
    },
    {
      "actionId": "set.deleteStockItemUnitOfMeasure",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure",
      "methodName": "setDeleteStockItemUnitOfMeasure",
      "handlerName": "handleDeleteStockItemUnitOfMeasureChange"
    },
    {
      "actionId": "set.deleteStockItemMinimumQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity",
      "methodName": "setDeleteStockItemMinimumQuantity",
      "handlerName": "handleDeleteStockItemMinimumQuantityChange"
    },
    {
      "actionId": "set.deleteStockItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.status",
      "methodName": "setDeleteStockItemStatus",
      "handlerName": "handleDeleteStockItemStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryStockItems",
      "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
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
    "wsManagerStockItems.section.main.title": "Gestão de Insumos de Estoque",
    "wsManagerStockItems.organism.query.title": "Consultar itens de estoque",
    "wsManagerStockItems.intent.queryList.title": "Query List",
    "wsManagerStockItems.queryList.empty": "Nenhum registro encontrado",
    "wsManagerStockItems.field.stockItemId": "Stock Item Id",
    "wsManagerStockItems.field.name": "Name",
    "wsManagerStockItems.field.unitOfMeasure": "Unit Of Measure",
    "wsManagerStockItems.field.minimumQuantity": "Minimum Quantity",
    "wsManagerStockItems.field.status": "Status",
    "wsManagerStockItems.field.createdAt": "Created At",
    "wsManagerStockItems.field.updatedAt": "Updated At",
    "wsManagerStockItems.action.query": "Query Stock Items",
    "wsManagerStockItems.action.update": "Update Stock Item",
    "wsManagerStockItems.action.delete": "Delete Stock Item",
    "wsManagerStockItems.organism.create.title": "Cadastrar item de estoque",
    "wsManagerStockItems.intent.create.title": "Command Form",
    "wsManagerStockItems.action.saveCreate": "Create Stock Item",
    "wsManagerStockItems.organism.update.title": "Editar item de estoque",
    "wsManagerStockItems.intent.update.title": "Command Form",
    "wsManagerStockItems.action.saveUpdate": "Update Stock Item",
    "wsManagerStockItems.organism.delete.title": "Remover item de estoque",
    "wsManagerStockItems.intent.delete.title": "Command Form",
    "wsManagerStockItems.action.confirmDelete": "Delete Stock Item",
    "wsManagerStockItems.intent.summary.title": "Summary"
  },
  "automation": {
    "statePrefix": "ui.ws-manager-stock-items",
    "stateKeys": [
      "ui.ws-manager-stock-items.status",
      "ui.ws-manager-stock-items.action.queryStockItems.status",
      "ui.ws-manager-stock-items.input.queryStockItems.stockItemId",
      "ui.ws-manager-stock-items.input.queryStockItems.name",
      "ui.ws-manager-stock-items.input.queryStockItems.status",
      "ui.ws-manager-stock-items.input.queryStockItems.createdAt",
      "ui.ws-manager-stock-items.input.queryStockItems.updatedAt",
      "ui.ws-manager-stock-items.data.queryStockItems",
      "ui.ws-manager-stock-items.action.createStockItem.status",
      "ui.ws-manager-stock-items.input.createStockItem.name",
      "ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure",
      "ui.ws-manager-stock-items.input.createStockItem.minimumQuantity",
      "ui.ws-manager-stock-items.input.createStockItem.status",
      "ui.ws-manager-stock-items.action.updateStockItem.status",
      "ui.ws-manager-stock-items.input.updateStockItem.name",
      "ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure",
      "ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity",
      "ui.ws-manager-stock-items.input.updateStockItem.status",
      "ui.ws-manager-stock-items.action.deleteStockItem.status",
      "ui.ws-manager-stock-items.input.deleteStockItem.stockItemId",
      "ui.ws-manager-stock-items.input.deleteStockItem.name",
      "ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure",
      "ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity",
      "ui.ws-manager-stock-items.input.deleteStockItem.status"
    ],
    "actionIds": [
      "queryStockItems",
      "createStockItem",
      "updateStockItem",
      "deleteStockItem",
      "set.queryStockItemsStockItemId",
      "set.queryStockItemsName",
      "set.queryStockItemsStatus",
      "set.queryStockItemsCreatedAt",
      "set.queryStockItemsUpdatedAt",
      "set.createStockItemName",
      "set.createStockItemUnitOfMeasure",
      "set.createStockItemMinimumQuantity",
      "set.createStockItemStatus",
      "set.updateStockItemName",
      "set.updateStockItemUnitOfMeasure",
      "set.updateStockItemMinimumQuantity",
      "set.updateStockItemStatus",
      "set.deleteStockItemStockItemId",
      "set.deleteStockItemName",
      "set.deleteStockItemUnitOfMeasure",
      "set.deleteStockItemMinimumQuantity",
      "set.deleteStockItemStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "ws-manager-stock-items__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-stock-items.ts",
    "defPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-stock-items.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "ws-manager-stock-items__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
