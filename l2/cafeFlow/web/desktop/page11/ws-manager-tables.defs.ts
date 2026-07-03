/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-tables.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-tables",
  "pageName": "Gestão de Mesas",
  "actor": "manager",
  "purpose": "Executar Gestão de Mesas.",
  "capabilities": [
    "manageTables"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-gestao-mesas",
      "type": "section",
      "sectionName": "Gestão de Mesas",
      "titleKey": "ws-manager-tables.section.gestaoMesas.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-query-tables",
          "type": "organism",
          "organismName": "QueryTables",
          "titleKey": "ws-manager-tables.organism.queryTables.title",
          "purpose": "Consultar mesas",
          "userActions": [
            "queryTables"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [
            "Table.tableId",
            "Table.number",
            "Table.name",
            "Table.status",
            "Table.createdAt",
            "Table.updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-query-tables",
              "intent": "queryList",
              "stateKey": "ui.ws-manager-tables.data.queryTables",
              "order": 10
            }
          ]
        },
        {
          "id": "org-create-table",
          "type": "organism",
          "organismName": "CreateTable",
          "titleKey": "ws-manager-tables.organism.createTable.title",
          "purpose": "Cadastrar mesa",
          "userActions": [
            "createTable"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "int-create-table",
              "intent": "commandForm",
              "submitAction": "createTable",
              "order": 10
            }
          ]
        },
        {
          "id": "org-update-table",
          "type": "organism",
          "organismName": "UpdateTable",
          "titleKey": "ws-manager-tables.organism.updateTable.title",
          "purpose": "Editar mesa",
          "userActions": [
            "updateTable"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [],
          "writesFields": [
            "Table.number",
            "Table.name",
            "Table.status",
            "Table.updatedAt"
          ],
          "rulesApplied": [],
          "order": 30,
          "intentionRefs": [
            {
              "id": "int-update-table",
              "intent": "commandForm",
              "submitAction": "updateTable",
              "order": 10
            }
          ]
        },
        {
          "id": "org-delete-table",
          "type": "organism",
          "organismName": "DeleteTable",
          "titleKey": "ws-manager-tables.organism.deleteTable.title",
          "purpose": "Remover mesa",
          "userActions": [
            "deleteTable"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 40,
          "intentionRefs": [
            {
              "id": "int-delete-table",
              "intent": "commandForm",
              "submitAction": "deleteTable",
              "order": 10
            }
          ]
        },
        {
          "id": "org-summary",
          "type": "organism",
          "organismName": "Summary",
          "titleKey": "ws-manager-tables.organism.summary.title",
          "purpose": "Revisar contexto e resultados",
          "userActions": [],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [
            "Table.tableId",
            "Table.number",
            "Table.name",
            "Table.status",
            "Table.createdAt",
            "Table.updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 50,
          "intentionRefs": [
            {
              "id": "int-summary",
              "intent": "summary",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "ws-manager-tables.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-gestao-mesas",
        "type": "section",
        "sectionName": "Gestão de Mesas",
        "titleKey": "ws-manager-tables.section.gestaoMesas.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-query-tables",
            "type": "organism",
            "organismName": "QueryTables",
            "titleKey": "ws-manager-tables.organism.queryTables.title",
            "purpose": "Consultar mesas",
            "userActions": [
              "queryTables"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [
              "Table.tableId",
              "Table.number",
              "Table.name",
              "Table.status",
              "Table.createdAt",
              "Table.updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "int-query-tables",
                "intent": "queryList",
                "order": 10,
                "titleKey": "ws-manager-tables.intent.queryTables.title",
                "fields": [],
                "columns": [
                  {
                    "id": "col-tableId",
                    "field": "tableId",
                    "labelKey": "ws-manager-tables.table.tableId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.data.queryTables"
                  },
                  {
                    "id": "col-number",
                    "field": "number",
                    "labelKey": "ws-manager-tables.table.number",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.data.queryTables"
                  },
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "ws-manager-tables.table.name",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.data.queryTables"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "ws-manager-tables.table.status",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.data.queryTables"
                  },
                  {
                    "id": "col-createdAt",
                    "field": "createdAt",
                    "labelKey": "ws-manager-tables.table.createdAt",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.data.queryTables"
                  },
                  {
                    "id": "col-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "ws-manager-tables.table.updatedAt",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.data.queryTables"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-tableId",
                    "field": "tableId",
                    "labelKey": "ws-manager-tables.filter.tableId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.input.queryTables.tableId"
                  },
                  {
                    "id": "flt-name",
                    "field": "name",
                    "labelKey": "ws-manager-tables.filter.name",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.input.queryTables.name"
                  },
                  {
                    "id": "flt-status",
                    "field": "status",
                    "labelKey": "ws-manager-tables.filter.status",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.input.queryTables.status"
                  },
                  {
                    "id": "flt-createdAt",
                    "field": "createdAt",
                    "labelKey": "ws-manager-tables.filter.createdAt",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.ws-manager-tables.input.queryTables.createdAt"
                  },
                  {
                    "id": "flt-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "ws-manager-tables.filter.updatedAt",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.ws-manager-tables.input.queryTables.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-query",
                    "action": "queryTables",
                    "labelKey": "ws-manager-tables.action.queryTables",
                    "order": 10,
                    "actionKey": "queryTables"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.ws-manager-tables.data.queryTables"
              }
            ]
          },
          {
            "id": "org-create-table",
            "type": "organism",
            "organismName": "CreateTable",
            "titleKey": "ws-manager-tables.organism.createTable.title",
            "purpose": "Cadastrar mesa",
            "userActions": [
              "createTable"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "int-create-table",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "ws-manager-tables.intent.createTable.title",
                "submitAction": "createTable",
                "fields": [
                  {
                    "id": "fld-create-number",
                    "field": "number",
                    "labelKey": "ws-manager-tables.field.number",
                    "order": 10,
                    "required": true,
                    "stateKey": "ui.ws-manager-tables.input.createTable.number"
                  },
                  {
                    "id": "fld-create-name",
                    "field": "name",
                    "labelKey": "ws-manager-tables.field.name",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.input.createTable.name"
                  },
                  {
                    "id": "fld-create-status",
                    "field": "status",
                    "labelKey": "ws-manager-tables.field.status",
                    "order": 30,
                    "required": true,
                    "stateKey": "ui.ws-manager-tables.input.createTable.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-create",
                    "action": "createTable",
                    "labelKey": "ws-manager-tables.action.createTable",
                    "order": 10,
                    "actionKey": "createTable"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-update-table",
            "type": "organism",
            "organismName": "UpdateTable",
            "titleKey": "ws-manager-tables.organism.updateTable.title",
            "purpose": "Editar mesa",
            "userActions": [
              "updateTable"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [],
            "writesFields": [
              "Table.number",
              "Table.name",
              "Table.status",
              "Table.updatedAt"
            ],
            "rulesApplied": [],
            "order": 30,
            "intentions": [
              {
                "id": "int-update-table",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "ws-manager-tables.intent.updateTable.title",
                "submitAction": "updateTable",
                "fields": [
                  {
                    "id": "fld-update-number",
                    "field": "number",
                    "labelKey": "ws-manager-tables.field.number",
                    "order": 10,
                    "required": true,
                    "stateKey": "ui.ws-manager-tables.input.updateTable.number"
                  },
                  {
                    "id": "fld-update-name",
                    "field": "name",
                    "labelKey": "ws-manager-tables.field.name",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.input.updateTable.name"
                  },
                  {
                    "id": "fld-update-status",
                    "field": "status",
                    "labelKey": "ws-manager-tables.field.status",
                    "order": 30,
                    "required": true,
                    "stateKey": "ui.ws-manager-tables.input.updateTable.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-update",
                    "action": "updateTable",
                    "labelKey": "ws-manager-tables.action.updateTable",
                    "order": 10,
                    "actionKey": "updateTable"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-delete-table",
            "type": "organism",
            "organismName": "DeleteTable",
            "titleKey": "ws-manager-tables.organism.deleteTable.title",
            "purpose": "Remover mesa",
            "userActions": [
              "deleteTable"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 40,
            "intentions": [
              {
                "id": "int-delete-table",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "ws-manager-tables.intent.deleteTable.title",
                "submitAction": "deleteTable",
                "fields": [
                  {
                    "id": "fld-delete-tableId",
                    "field": "tableId",
                    "labelKey": "ws-manager-tables.field.tableId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.input.deleteTable.tableId"
                  },
                  {
                    "id": "fld-delete-number",
                    "field": "number",
                    "labelKey": "ws-manager-tables.field.number",
                    "order": 20,
                    "required": true,
                    "stateKey": "ui.ws-manager-tables.input.deleteTable.number"
                  },
                  {
                    "id": "fld-delete-name",
                    "field": "name",
                    "labelKey": "ws-manager-tables.field.name",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-tables.input.deleteTable.name"
                  },
                  {
                    "id": "fld-delete-status",
                    "field": "status",
                    "labelKey": "ws-manager-tables.field.status",
                    "order": 40,
                    "required": true,
                    "stateKey": "ui.ws-manager-tables.input.deleteTable.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-delete",
                    "action": "deleteTable",
                    "labelKey": "ws-manager-tables.action.deleteTable",
                    "order": 10,
                    "actionKey": "deleteTable"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-summary",
            "type": "organism",
            "organismName": "Summary",
            "titleKey": "ws-manager-tables.organism.summary.title",
            "purpose": "Revisar contexto e resultados",
            "userActions": [],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [
              "Table.tableId",
              "Table.number",
              "Table.name",
              "Table.status",
              "Table.createdAt",
              "Table.updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 50,
            "intentions": [
              {
                "id": "int-summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "ws-manager-tables.intent.summary.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "ws-manager-tables__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-tables.ts",
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-tables.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/shared/ws-manager-tables.defs.ts",
      "_102049_/l2/cafeFlow/web/shared/ws-manager-tables.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.defs.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.ts"
    ],
    "dependsOn": [
      "ws-manager-tables__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Clean, fast-touch POS interface with kitchen display board; dashboard with cards and charts for management."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
