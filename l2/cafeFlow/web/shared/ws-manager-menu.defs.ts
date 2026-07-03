/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-menu.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-menu",
  "pageName": "Gestão de Cardápio",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryMenuItems",
    "operation:createMenuItem",
    "operation:updateMenuItem",
    "operation:deleteMenuItem"
  ],
  "operationIds": [
    "queryMenuItems",
    "createMenuItem",
    "updateMenuItem",
    "deleteMenuItem"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-manager-menu",
    "workspaceKind": "entityManagement",
    "actor": "manager",
    "entity": "MenuItem",
    "owners": [
      {
        "kind": "operation",
        "id": "queryMenuItems",
        "defPath": "_102049_/l4/operations/queryMenuItems.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createMenuItem",
        "defPath": "_102049_/l4/operations/createMenuItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateMenuItem",
        "defPath": "_102049_/l4/operations/updateMenuItem.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteMenuItem",
        "defPath": "_102049_/l4/operations/deleteMenuItem.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryMenuItems",
          "commandName": "queryMenuItems",
          "steps": [
            "Acessar a tela de gerenciamento de cardápio",
            "Filtrar por categoria ou nome",
            "Visualizar resultados"
          ]
        },
        {
          "operationId": "createMenuItem",
          "commandName": "createMenuItem",
          "steps": [
            "Informar nome, preço e categoria do item",
            "Definir insumos e quantidades consumidas",
            "Salvar o item"
          ]
        },
        {
          "operationId": "updateMenuItem",
          "commandName": "updateMenuItem",
          "steps": [
            "Localizar o item no cardápio",
            "Alterar preço, nome ou composição de insumos",
            "Salvar alterações"
          ]
        },
        {
          "operationId": "deleteMenuItem",
          "commandName": "deleteMenuItem",
          "steps": [
            "Localizar o item a ser removido",
            "Confirmar exclusão"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.defs.ts",
    "tsPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-menu.defs.ts",
    "layoutId": "ws-manager-menu.default"
  },
  "states": [
    {
      "stateKey": "ui.ws-manager-menu.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.action.queryMenuItems.status",
      "name": "queryMenuItemsState",
      "kind": "actionStatus",
      "actionRef": "queryMenuItems",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.menuItemId",
      "name": "queryMenuItemsMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItems",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.name",
      "name": "queryMenuItemsName",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItems",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.category",
      "name": "queryMenuItemsCategory",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItems",
        "direction": "input",
        "field": "category"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.status",
      "name": "queryMenuItemsStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItems",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.createdAt",
      "name": "queryMenuItemsCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItems",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.updatedAt",
      "name": "queryMenuItemsUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryMenuItems",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.data.queryMenuItems",
      "name": "queryMenuItemsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryMenuItems",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.ws-manager-menu.action.createMenuItem.status",
      "name": "createMenuItemState",
      "kind": "actionStatus",
      "actionRef": "createMenuItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.name",
      "name": "createMenuItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.category",
      "name": "createMenuItemCategory",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "category"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.price",
      "name": "createMenuItemPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.description",
      "name": "createMenuItemDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.status",
      "name": "createMenuItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createMenuItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.action.updateMenuItem.status",
      "name": "updateMenuItemState",
      "kind": "actionStatus",
      "actionRef": "updateMenuItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.name",
      "name": "updateMenuItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.category",
      "name": "updateMenuItemCategory",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "category"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.price",
      "name": "updateMenuItemPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.description",
      "name": "updateMenuItemDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.status",
      "name": "updateMenuItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateMenuItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.action.deleteMenuItem.status",
      "name": "deleteMenuItemState",
      "kind": "actionStatus",
      "actionRef": "deleteMenuItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.menuItemId",
      "name": "deleteMenuItemMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.name",
      "name": "deleteMenuItemName",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.category",
      "name": "deleteMenuItemCategory",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "category"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.price",
      "name": "deleteMenuItemPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.description",
      "name": "deleteMenuItemDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.status",
      "name": "deleteMenuItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteMenuItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "queryMenuItems",
      "kind": "query",
      "commandRef": "queryMenuItems",
      "routeKey": "cafeFlow.queryMenuItems.queryMenuItems",
      "purpose": "Consultar itens do cardápio",
      "methodName": "loadQueryMenuItems",
      "handlerName": "handleQueryMenuItemsClick",
      "inputStateKeys": [
        "ui.ws-manager-menu.input.queryMenuItems.menuItemId",
        "ui.ws-manager-menu.input.queryMenuItems.name",
        "ui.ws-manager-menu.input.queryMenuItems.category",
        "ui.ws-manager-menu.input.queryMenuItems.status",
        "ui.ws-manager-menu.input.queryMenuItems.createdAt",
        "ui.ws-manager-menu.input.queryMenuItems.updatedAt"
      ],
      "outputStateKeys": [
        "ui.ws-manager-menu.data.queryMenuItems"
      ],
      "statusStateKey": "ui.ws-manager-menu.action.queryMenuItems.status"
    },
    {
      "actionId": "createMenuItem",
      "kind": "command",
      "commandRef": "createMenuItem",
      "routeKey": "cafeFlow.createMenuItem.createMenuItem",
      "purpose": "Criar item do cardápio",
      "methodName": "createMenuItem",
      "handlerName": "handleCreateMenuItemClick",
      "inputStateKeys": [
        "ui.ws-manager-menu.input.createMenuItem.name",
        "ui.ws-manager-menu.input.createMenuItem.category",
        "ui.ws-manager-menu.input.createMenuItem.price",
        "ui.ws-manager-menu.input.createMenuItem.description",
        "ui.ws-manager-menu.input.createMenuItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-menu.action.createMenuItem.status"
    },
    {
      "actionId": "updateMenuItem",
      "kind": "command",
      "commandRef": "updateMenuItem",
      "routeKey": "cafeFlow.updateMenuItem.updateMenuItem",
      "purpose": "Editar item do cardápio",
      "methodName": "updateMenuItem",
      "handlerName": "handleUpdateMenuItemClick",
      "inputStateKeys": [
        "ui.ws-manager-menu.input.updateMenuItem.name",
        "ui.ws-manager-menu.input.updateMenuItem.category",
        "ui.ws-manager-menu.input.updateMenuItem.price",
        "ui.ws-manager-menu.input.updateMenuItem.description",
        "ui.ws-manager-menu.input.updateMenuItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-menu.action.updateMenuItem.status"
    },
    {
      "actionId": "deleteMenuItem",
      "kind": "command",
      "commandRef": "deleteMenuItem",
      "routeKey": "cafeFlow.deleteMenuItem.deleteMenuItem",
      "purpose": "Remover item do cardápio",
      "methodName": "deleteMenuItem",
      "handlerName": "handleDeleteMenuItemClick",
      "inputStateKeys": [
        "ui.ws-manager-menu.input.deleteMenuItem.menuItemId",
        "ui.ws-manager-menu.input.deleteMenuItem.name",
        "ui.ws-manager-menu.input.deleteMenuItem.category",
        "ui.ws-manager-menu.input.deleteMenuItem.price",
        "ui.ws-manager-menu.input.deleteMenuItem.description",
        "ui.ws-manager-menu.input.deleteMenuItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-menu.action.deleteMenuItem.status"
    },
    {
      "actionId": "set.queryMenuItemsMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.menuItemId",
      "methodName": "setQueryMenuItemsMenuItemId",
      "handlerName": "handleQueryMenuItemsMenuItemIdChange"
    },
    {
      "actionId": "set.queryMenuItemsName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.name",
      "methodName": "setQueryMenuItemsName",
      "handlerName": "handleQueryMenuItemsNameChange"
    },
    {
      "actionId": "set.queryMenuItemsCategory",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.category",
      "methodName": "setQueryMenuItemsCategory",
      "handlerName": "handleQueryMenuItemsCategoryChange"
    },
    {
      "actionId": "set.queryMenuItemsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.status",
      "methodName": "setQueryMenuItemsStatus",
      "handlerName": "handleQueryMenuItemsStatusChange"
    },
    {
      "actionId": "set.queryMenuItemsCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.createdAt",
      "methodName": "setQueryMenuItemsCreatedAt",
      "handlerName": "handleQueryMenuItemsCreatedAtChange"
    },
    {
      "actionId": "set.queryMenuItemsUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.queryMenuItems.updatedAt",
      "methodName": "setQueryMenuItemsUpdatedAt",
      "handlerName": "handleQueryMenuItemsUpdatedAtChange"
    },
    {
      "actionId": "set.createMenuItemName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.name",
      "methodName": "setCreateMenuItemName",
      "handlerName": "handleCreateMenuItemNameChange"
    },
    {
      "actionId": "set.createMenuItemCategory",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.category",
      "methodName": "setCreateMenuItemCategory",
      "handlerName": "handleCreateMenuItemCategoryChange"
    },
    {
      "actionId": "set.createMenuItemPrice",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.price",
      "methodName": "setCreateMenuItemPrice",
      "handlerName": "handleCreateMenuItemPriceChange"
    },
    {
      "actionId": "set.createMenuItemDescription",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.description",
      "methodName": "setCreateMenuItemDescription",
      "handlerName": "handleCreateMenuItemDescriptionChange"
    },
    {
      "actionId": "set.createMenuItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.createMenuItem.status",
      "methodName": "setCreateMenuItemStatus",
      "handlerName": "handleCreateMenuItemStatusChange"
    },
    {
      "actionId": "set.updateMenuItemName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.name",
      "methodName": "setUpdateMenuItemName",
      "handlerName": "handleUpdateMenuItemNameChange"
    },
    {
      "actionId": "set.updateMenuItemCategory",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.category",
      "methodName": "setUpdateMenuItemCategory",
      "handlerName": "handleUpdateMenuItemCategoryChange"
    },
    {
      "actionId": "set.updateMenuItemPrice",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.price",
      "methodName": "setUpdateMenuItemPrice",
      "handlerName": "handleUpdateMenuItemPriceChange"
    },
    {
      "actionId": "set.updateMenuItemDescription",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.description",
      "methodName": "setUpdateMenuItemDescription",
      "handlerName": "handleUpdateMenuItemDescriptionChange"
    },
    {
      "actionId": "set.updateMenuItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.updateMenuItem.status",
      "methodName": "setUpdateMenuItemStatus",
      "handlerName": "handleUpdateMenuItemStatusChange"
    },
    {
      "actionId": "set.deleteMenuItemMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.menuItemId",
      "methodName": "setDeleteMenuItemMenuItemId",
      "handlerName": "handleDeleteMenuItemMenuItemIdChange"
    },
    {
      "actionId": "set.deleteMenuItemName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.name",
      "methodName": "setDeleteMenuItemName",
      "handlerName": "handleDeleteMenuItemNameChange"
    },
    {
      "actionId": "set.deleteMenuItemCategory",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.category",
      "methodName": "setDeleteMenuItemCategory",
      "handlerName": "handleDeleteMenuItemCategoryChange"
    },
    {
      "actionId": "set.deleteMenuItemPrice",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.price",
      "methodName": "setDeleteMenuItemPrice",
      "handlerName": "handleDeleteMenuItemPriceChange"
    },
    {
      "actionId": "set.deleteMenuItemDescription",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.description",
      "methodName": "setDeleteMenuItemDescription",
      "handlerName": "handleDeleteMenuItemDescriptionChange"
    },
    {
      "actionId": "set.deleteMenuItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.status",
      "methodName": "setDeleteMenuItemStatus",
      "handlerName": "handleDeleteMenuItemStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryMenuItems",
      "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
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
    "wsManagerMenu.section.management.title": "Gestão de Cardápio",
    "wsManagerMenu.organism.queryMenuItems.title": "Itens do cardápio",
    "wsManagerMenu.organism.createMenuItem.title": "Novo item",
    "wsManagerMenu.organism.updateMenuItem.title": "Editar item",
    "wsManagerMenu.organism.deleteMenuItem.title": "Remover item",
    "wsManagerMenu.organism.summary.title": "Resumo do cardápio",
    "wsManagerMenu.intent.queryMenuItems.title": "Consultar itens",
    "wsManagerMenu.intent.createMenuItem.title": "Criar item",
    "wsManagerMenu.intent.updateMenuItem.title": "Atualizar item",
    "wsManagerMenu.intent.deleteMenuItem.title": "Excluir item",
    "wsManagerMenu.intent.summary.title": "Resumo",
    "wsManagerMenu.field.menuItemId": "ID do item",
    "wsManagerMenu.field.name": "Nome",
    "wsManagerMenu.field.category": "Categoria",
    "wsManagerMenu.field.price": "Preço",
    "wsManagerMenu.field.description": "Descrição",
    "wsManagerMenu.field.status": "Status",
    "wsManagerMenu.field.createdAt": "Criado em",
    "wsManagerMenu.field.updatedAt": "Atualizado em",
    "wsManagerMenu.action.query": "Buscar",
    "wsManagerMenu.action.saveItem": "Salvar item",
    "wsManagerMenu.action.saveChanges": "Salvar alterações",
    "wsManagerMenu.action.confirmDelete": "Confirmar exclusão"
  },
  "automation": {
    "statePrefix": "ui.ws-manager-menu",
    "stateKeys": [
      "ui.ws-manager-menu.status",
      "ui.ws-manager-menu.action.queryMenuItems.status",
      "ui.ws-manager-menu.input.queryMenuItems.menuItemId",
      "ui.ws-manager-menu.input.queryMenuItems.name",
      "ui.ws-manager-menu.input.queryMenuItems.category",
      "ui.ws-manager-menu.input.queryMenuItems.status",
      "ui.ws-manager-menu.input.queryMenuItems.createdAt",
      "ui.ws-manager-menu.input.queryMenuItems.updatedAt",
      "ui.ws-manager-menu.data.queryMenuItems",
      "ui.ws-manager-menu.action.createMenuItem.status",
      "ui.ws-manager-menu.input.createMenuItem.name",
      "ui.ws-manager-menu.input.createMenuItem.category",
      "ui.ws-manager-menu.input.createMenuItem.price",
      "ui.ws-manager-menu.input.createMenuItem.description",
      "ui.ws-manager-menu.input.createMenuItem.status",
      "ui.ws-manager-menu.action.updateMenuItem.status",
      "ui.ws-manager-menu.input.updateMenuItem.name",
      "ui.ws-manager-menu.input.updateMenuItem.category",
      "ui.ws-manager-menu.input.updateMenuItem.price",
      "ui.ws-manager-menu.input.updateMenuItem.description",
      "ui.ws-manager-menu.input.updateMenuItem.status",
      "ui.ws-manager-menu.action.deleteMenuItem.status",
      "ui.ws-manager-menu.input.deleteMenuItem.menuItemId",
      "ui.ws-manager-menu.input.deleteMenuItem.name",
      "ui.ws-manager-menu.input.deleteMenuItem.category",
      "ui.ws-manager-menu.input.deleteMenuItem.price",
      "ui.ws-manager-menu.input.deleteMenuItem.description",
      "ui.ws-manager-menu.input.deleteMenuItem.status"
    ],
    "actionIds": [
      "queryMenuItems",
      "createMenuItem",
      "updateMenuItem",
      "deleteMenuItem",
      "set.queryMenuItemsMenuItemId",
      "set.queryMenuItemsName",
      "set.queryMenuItemsCategory",
      "set.queryMenuItemsStatus",
      "set.queryMenuItemsCreatedAt",
      "set.queryMenuItemsUpdatedAt",
      "set.createMenuItemName",
      "set.createMenuItemCategory",
      "set.createMenuItemPrice",
      "set.createMenuItemDescription",
      "set.createMenuItemStatus",
      "set.updateMenuItemName",
      "set.updateMenuItemCategory",
      "set.updateMenuItemPrice",
      "set.updateMenuItemDescription",
      "set.updateMenuItemStatus",
      "set.deleteMenuItemMenuItemId",
      "set.deleteMenuItemName",
      "set.deleteMenuItemCategory",
      "set.deleteMenuItemPrice",
      "set.deleteMenuItemDescription",
      "set.deleteMenuItemStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "ws-manager-menu__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-menu.ts",
    "defPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-menu.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "ws-manager-menu__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
