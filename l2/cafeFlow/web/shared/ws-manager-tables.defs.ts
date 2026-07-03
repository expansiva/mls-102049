/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-tables.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-tables",
  "pageName": "Gestão de Mesas",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryTables",
    "operation:createTable",
    "operation:updateTable",
    "operation:deleteTable"
  ],
  "operationIds": [
    "queryTables",
    "createTable",
    "updateTable",
    "deleteTable"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-manager-tables",
    "workspaceKind": "entityManagement",
    "actor": "manager",
    "entity": "Table",
    "owners": [
      {
        "kind": "operation",
        "id": "queryTables",
        "defPath": "_102049_/l4/operations/queryTables.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createTable",
        "defPath": "_102049_/l4/operations/createTable.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateTable",
        "defPath": "_102049_/l4/operations/updateTable.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteTable",
        "defPath": "_102049_/l4/operations/deleteTable.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryTables",
          "commandName": "queryTables",
          "steps": [
            "Acessar a tela de gerenciamento de mesas",
            "Visualizar mesas cadastradas"
          ]
        },
        {
          "operationId": "createTable",
          "commandName": "createTable",
          "steps": [
            "Informar número da mesa",
            "Definir capacidade se aplicável",
            "Salvar a mesa"
          ]
        },
        {
          "operationId": "updateTable",
          "commandName": "updateTable",
          "steps": [
            "Localizar a mesa",
            "Alterar número ou capacidade",
            "Salvar alterações"
          ]
        },
        {
          "operationId": "deleteTable",
          "commandName": "deleteTable",
          "steps": [
            "Localizar a mesa",
            "Confirmar exclusão"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.defs.ts",
    "tsPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-tables.defs.ts",
    "layoutId": "ws-manager-tables.layout"
  },
  "states": [
    {
      "stateKey": "ui.ws-manager-tables.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.action.queryTables.status",
      "name": "queryTablesState",
      "kind": "actionStatus",
      "actionRef": "queryTables",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-tables.input.queryTables.tableId",
      "name": "queryTablesTableId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTables",
        "direction": "input",
        "field": "tableId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.queryTables.name",
      "name": "queryTablesName",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTables",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.queryTables.status",
      "name": "queryTablesStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTables",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.queryTables.createdAt",
      "name": "queryTablesCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTables",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.queryTables.updatedAt",
      "name": "queryTablesUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryTables",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.data.queryTables",
      "name": "queryTablesData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryTables",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.ws-manager-tables.action.createTable.status",
      "name": "createTableState",
      "kind": "actionStatus",
      "actionRef": "createTable",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-tables.input.createTable.number",
      "name": "createTableNumber",
      "kind": "input",
      "contractRef": {
        "commandName": "createTable",
        "direction": "input",
        "field": "number"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.createTable.name",
      "name": "createTableName",
      "kind": "input",
      "contractRef": {
        "commandName": "createTable",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.createTable.status",
      "name": "createTableStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createTable",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.action.updateTable.status",
      "name": "updateTableState",
      "kind": "actionStatus",
      "actionRef": "updateTable",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-tables.input.updateTable.number",
      "name": "updateTableNumber",
      "kind": "input",
      "contractRef": {
        "commandName": "updateTable",
        "direction": "input",
        "field": "number"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.updateTable.name",
      "name": "updateTableName",
      "kind": "input",
      "contractRef": {
        "commandName": "updateTable",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.updateTable.status",
      "name": "updateTableStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateTable",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.action.deleteTable.status",
      "name": "deleteTableState",
      "kind": "actionStatus",
      "actionRef": "deleteTable",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-tables.input.deleteTable.tableId",
      "name": "deleteTableTableId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteTable",
        "direction": "input",
        "field": "tableId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.deleteTable.number",
      "name": "deleteTableNumber",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteTable",
        "direction": "input",
        "field": "number"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.deleteTable.name",
      "name": "deleteTableName",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteTable",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-tables.input.deleteTable.status",
      "name": "deleteTableStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteTable",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "queryTables",
      "kind": "query",
      "commandRef": "queryTables",
      "routeKey": "cafeFlow.queryTables.queryTables",
      "purpose": "Consultar mesas",
      "methodName": "loadQueryTables",
      "handlerName": "handleQueryTablesClick",
      "inputStateKeys": [
        "ui.ws-manager-tables.input.queryTables.tableId",
        "ui.ws-manager-tables.input.queryTables.name",
        "ui.ws-manager-tables.input.queryTables.status",
        "ui.ws-manager-tables.input.queryTables.createdAt",
        "ui.ws-manager-tables.input.queryTables.updatedAt"
      ],
      "outputStateKeys": [
        "ui.ws-manager-tables.data.queryTables"
      ],
      "statusStateKey": "ui.ws-manager-tables.action.queryTables.status"
    },
    {
      "actionId": "createTable",
      "kind": "command",
      "commandRef": "createTable",
      "routeKey": "cafeFlow.createTable.createTable",
      "purpose": "Cadastrar mesa",
      "methodName": "createTable",
      "handlerName": "handleCreateTableClick",
      "inputStateKeys": [
        "ui.ws-manager-tables.input.createTable.number",
        "ui.ws-manager-tables.input.createTable.name",
        "ui.ws-manager-tables.input.createTable.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-tables.action.createTable.status"
    },
    {
      "actionId": "updateTable",
      "kind": "command",
      "commandRef": "updateTable",
      "routeKey": "cafeFlow.updateTable.updateTable",
      "purpose": "Editar mesa",
      "methodName": "updateTable",
      "handlerName": "handleUpdateTableClick",
      "inputStateKeys": [
        "ui.ws-manager-tables.input.updateTable.number",
        "ui.ws-manager-tables.input.updateTable.name",
        "ui.ws-manager-tables.input.updateTable.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-tables.action.updateTable.status"
    },
    {
      "actionId": "deleteTable",
      "kind": "command",
      "commandRef": "deleteTable",
      "routeKey": "cafeFlow.deleteTable.deleteTable",
      "purpose": "Remover mesa",
      "methodName": "deleteTable",
      "handlerName": "handleDeleteTableClick",
      "inputStateKeys": [
        "ui.ws-manager-tables.input.deleteTable.tableId",
        "ui.ws-manager-tables.input.deleteTable.number",
        "ui.ws-manager-tables.input.deleteTable.name",
        "ui.ws-manager-tables.input.deleteTable.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-tables.action.deleteTable.status"
    },
    {
      "actionId": "set.queryTablesTableId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.queryTables.tableId",
      "methodName": "setQueryTablesTableId",
      "handlerName": "handleQueryTablesTableIdChange"
    },
    {
      "actionId": "set.queryTablesName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.queryTables.name",
      "methodName": "setQueryTablesName",
      "handlerName": "handleQueryTablesNameChange"
    },
    {
      "actionId": "set.queryTablesStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.queryTables.status",
      "methodName": "setQueryTablesStatus",
      "handlerName": "handleQueryTablesStatusChange"
    },
    {
      "actionId": "set.queryTablesCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.queryTables.createdAt",
      "methodName": "setQueryTablesCreatedAt",
      "handlerName": "handleQueryTablesCreatedAtChange"
    },
    {
      "actionId": "set.queryTablesUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.queryTables.updatedAt",
      "methodName": "setQueryTablesUpdatedAt",
      "handlerName": "handleQueryTablesUpdatedAtChange"
    },
    {
      "actionId": "set.createTableNumber",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.createTable.number",
      "methodName": "setCreateTableNumber",
      "handlerName": "handleCreateTableNumberChange"
    },
    {
      "actionId": "set.createTableName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.createTable.name",
      "methodName": "setCreateTableName",
      "handlerName": "handleCreateTableNameChange"
    },
    {
      "actionId": "set.createTableStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.createTable.status",
      "methodName": "setCreateTableStatus",
      "handlerName": "handleCreateTableStatusChange"
    },
    {
      "actionId": "set.updateTableNumber",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.updateTable.number",
      "methodName": "setUpdateTableNumber",
      "handlerName": "handleUpdateTableNumberChange"
    },
    {
      "actionId": "set.updateTableName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.updateTable.name",
      "methodName": "setUpdateTableName",
      "handlerName": "handleUpdateTableNameChange"
    },
    {
      "actionId": "set.updateTableStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.updateTable.status",
      "methodName": "setUpdateTableStatus",
      "handlerName": "handleUpdateTableStatusChange"
    },
    {
      "actionId": "set.deleteTableTableId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.deleteTable.tableId",
      "methodName": "setDeleteTableTableId",
      "handlerName": "handleDeleteTableTableIdChange"
    },
    {
      "actionId": "set.deleteTableNumber",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.deleteTable.number",
      "methodName": "setDeleteTableNumber",
      "handlerName": "handleDeleteTableNumberChange"
    },
    {
      "actionId": "set.deleteTableName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.deleteTable.name",
      "methodName": "setDeleteTableName",
      "handlerName": "handleDeleteTableNameChange"
    },
    {
      "actionId": "set.deleteTableStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-tables.input.deleteTable.status",
      "methodName": "setDeleteTableStatus",
      "handlerName": "handleDeleteTableStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryTables",
      "stateKey": "ui.ws-manager-tables.data.queryTables"
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
    "ws-manager-tables.section.gestaoMesas.title": "Gestão de Mesas",
    "ws-manager-tables.organism.queryTables.title": "Consultar mesas",
    "ws-manager-tables.intent.queryTables.title": "Query List",
    "ws-manager-tables.table.tableId": "Table Id",
    "ws-manager-tables.table.number": "Number",
    "ws-manager-tables.table.name": "Name",
    "ws-manager-tables.table.status": "Status",
    "ws-manager-tables.table.createdAt": "Created At",
    "ws-manager-tables.table.updatedAt": "Updated At",
    "ws-manager-tables.filter.tableId": "Table Id",
    "ws-manager-tables.filter.name": "Name",
    "ws-manager-tables.filter.status": "Status",
    "ws-manager-tables.filter.createdAt": "Created At",
    "ws-manager-tables.filter.updatedAt": "Updated At",
    "ws-manager-tables.action.queryTables": "Query Tables",
    "ws-manager-tables.organism.createTable.title": "Cadastrar mesa",
    "ws-manager-tables.intent.createTable.title": "Command Form",
    "ws-manager-tables.field.number": "Number",
    "ws-manager-tables.field.name": "Name",
    "ws-manager-tables.field.status": "Status",
    "ws-manager-tables.action.createTable": "Create Table",
    "ws-manager-tables.organism.updateTable.title": "Editar mesa",
    "ws-manager-tables.intent.updateTable.title": "Command Form",
    "ws-manager-tables.action.updateTable": "Update Table",
    "ws-manager-tables.organism.deleteTable.title": "Remover mesa",
    "ws-manager-tables.intent.deleteTable.title": "Command Form",
    "ws-manager-tables.field.tableId": "Table Id",
    "ws-manager-tables.action.deleteTable": "Delete Table",
    "ws-manager-tables.organism.summary.title": "Revisar contexto e resultados",
    "ws-manager-tables.intent.summary.title": "Summary"
  },
  "automation": {
    "statePrefix": "ui.ws-manager-tables",
    "stateKeys": [
      "ui.ws-manager-tables.status",
      "ui.ws-manager-tables.action.queryTables.status",
      "ui.ws-manager-tables.input.queryTables.tableId",
      "ui.ws-manager-tables.input.queryTables.name",
      "ui.ws-manager-tables.input.queryTables.status",
      "ui.ws-manager-tables.input.queryTables.createdAt",
      "ui.ws-manager-tables.input.queryTables.updatedAt",
      "ui.ws-manager-tables.data.queryTables",
      "ui.ws-manager-tables.action.createTable.status",
      "ui.ws-manager-tables.input.createTable.number",
      "ui.ws-manager-tables.input.createTable.name",
      "ui.ws-manager-tables.input.createTable.status",
      "ui.ws-manager-tables.action.updateTable.status",
      "ui.ws-manager-tables.input.updateTable.number",
      "ui.ws-manager-tables.input.updateTable.name",
      "ui.ws-manager-tables.input.updateTable.status",
      "ui.ws-manager-tables.action.deleteTable.status",
      "ui.ws-manager-tables.input.deleteTable.tableId",
      "ui.ws-manager-tables.input.deleteTable.number",
      "ui.ws-manager-tables.input.deleteTable.name",
      "ui.ws-manager-tables.input.deleteTable.status"
    ],
    "actionIds": [
      "queryTables",
      "createTable",
      "updateTable",
      "deleteTable",
      "set.queryTablesTableId",
      "set.queryTablesName",
      "set.queryTablesStatus",
      "set.queryTablesCreatedAt",
      "set.queryTablesUpdatedAt",
      "set.createTableNumber",
      "set.createTableName",
      "set.createTableStatus",
      "set.updateTableNumber",
      "set.updateTableName",
      "set.updateTableStatus",
      "set.deleteTableTableId",
      "set.deleteTableNumber",
      "set.deleteTableName",
      "set.deleteTableStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "ws-manager-tables__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-tables.ts",
    "defPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-tables.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "ws-manager-tables__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
