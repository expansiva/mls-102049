/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-items.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-stock-items",
  "pageName": "Gestão de Insumos de Estoque",
  "actor": "manager",
  "purpose": "Executar Gestão de Insumos de Estoque.",
  "capabilities": [
    "manageStockItems"
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-stock-items-main",
      "type": "section",
      "sectionName": "Gestão de Insumos de Estoque",
      "titleKey": "wsManagerStockItems.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-query-stock-items",
          "type": "organism",
          "organismName": "QueryStockItems",
          "titleKey": "wsManagerStockItems.organism.query.title",
          "purpose": "Consultar itens de estoque",
          "userActions": [
            "queryStockItems"
          ],
          "requiredEntities": [
            "StockItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "lowStockAlert"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-query-stock-items-list",
              "intent": "queryList",
              "stateKey": "ui.ws-manager-stock-items.data.queryStockItems",
              "action": "queryStockItems",
              "submitAction": "queryStockItems",
              "order": 10
            }
          ]
        },
        {
          "id": "org-create-stock-item",
          "type": "organism",
          "organismName": "CreateStockItem",
          "titleKey": "wsManagerStockItems.organism.create.title",
          "purpose": "Cadastrar item de estoque",
          "userActions": [
            "createStockItem"
          ],
          "requiredEntities": [
            "StockItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "lowStockAlert"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "int-create-stock-item-form",
              "intent": "commandForm",
              "action": "createStockItem",
              "submitAction": "createStockItem",
              "order": 10
            }
          ]
        },
        {
          "id": "org-update-stock-item",
          "type": "organism",
          "organismName": "UpdateStockItem",
          "titleKey": "wsManagerStockItems.organism.update.title",
          "purpose": "Editar item de estoque",
          "userActions": [
            "updateStockItem"
          ],
          "requiredEntities": [
            "StockItem"
          ],
          "readsFields": [],
          "writesFields": [
            "StockItem.name",
            "StockItem.unitOfMeasure",
            "StockItem.minimumQuantity",
            "StockItem.status",
            "StockItem.updatedAt"
          ],
          "rulesApplied": [
            "lowStockAlert"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "int-update-stock-item-form",
              "intent": "commandForm",
              "action": "updateStockItem",
              "submitAction": "updateStockItem",
              "order": 10
            }
          ]
        },
        {
          "id": "org-delete-stock-item",
          "type": "organism",
          "organismName": "DeleteStockItem",
          "titleKey": "wsManagerStockItems.organism.delete.title",
          "purpose": "Remover item de estoque",
          "userActions": [
            "deleteStockItem"
          ],
          "requiredEntities": [
            "StockItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "lowStockAlert"
          ],
          "order": 40,
          "intentionRefs": [
            {
              "id": "int-delete-stock-item-form",
              "intent": "commandForm",
              "action": "deleteStockItem",
              "submitAction": "deleteStockItem",
              "order": 10
            },
            {
              "id": "int-stock-items-summary",
              "intent": "summary",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "ws-manager-stock-items-layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-stock-items-main",
        "type": "section",
        "sectionName": "Gestão de Insumos de Estoque",
        "titleKey": "wsManagerStockItems.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-query-stock-items",
            "type": "organism",
            "organismName": "QueryStockItems",
            "titleKey": "wsManagerStockItems.organism.query.title",
            "purpose": "Consultar itens de estoque",
            "userActions": [
              "queryStockItems"
            ],
            "requiredEntities": [
              "StockItem"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "lowStockAlert"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int-query-stock-items-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "wsManagerStockItems.intent.queryList.title",
                "action": "queryStockItems",
                "submitAction": "queryStockItems",
                "emptyKey": "wsManagerStockItems.queryList.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "col-stock-item-id",
                    "field": "stockItemId",
                    "labelKey": "wsManagerStockItems.field.stockItemId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
                  },
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "wsManagerStockItems.field.name",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
                  },
                  {
                    "id": "col-unit-of-measure",
                    "field": "unitOfMeasure",
                    "labelKey": "wsManagerStockItems.field.unitOfMeasure",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
                  },
                  {
                    "id": "col-minimum-quantity",
                    "field": "minimumQuantity",
                    "labelKey": "wsManagerStockItems.field.minimumQuantity",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "wsManagerStockItems.field.status",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
                  },
                  {
                    "id": "col-created-at",
                    "field": "createdAt",
                    "labelKey": "wsManagerStockItems.field.createdAt",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
                  },
                  {
                    "id": "col-updated-at",
                    "field": "updatedAt",
                    "labelKey": "wsManagerStockItems.field.updatedAt",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-name",
                    "field": "name",
                    "labelKey": "wsManagerStockItems.field.name",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.name"
                  },
                  {
                    "id": "flt-status",
                    "field": "status",
                    "labelKey": "wsManagerStockItems.field.status",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.status"
                  },
                  {
                    "id": "flt-created-at",
                    "field": "createdAt",
                    "labelKey": "wsManagerStockItems.field.createdAt",
                    "order": 30,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.createdAt"
                  },
                  {
                    "id": "flt-updated-at",
                    "field": "updatedAt",
                    "labelKey": "wsManagerStockItems.field.updatedAt",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.ws-manager-stock-items.input.queryStockItems.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-query",
                    "action": "queryStockItems",
                    "labelKey": "wsManagerStockItems.action.query",
                    "order": 10,
                    "actionKey": "queryStockItems"
                  }
                ],
                "rowActions": [
                  {
                    "id": "row-update",
                    "action": "updateStockItem",
                    "labelKey": "wsManagerStockItems.action.update",
                    "order": 10,
                    "actionKey": "updateStockItem"
                  },
                  {
                    "id": "row-delete",
                    "action": "deleteStockItem",
                    "labelKey": "wsManagerStockItems.action.delete",
                    "order": 20,
                    "actionKey": "deleteStockItem"
                  }
                ],
                "actions": [],
                "stateKey": "ui.ws-manager-stock-items.data.queryStockItems"
              }
            ]
          },
          {
            "id": "org-create-stock-item",
            "type": "organism",
            "organismName": "CreateStockItem",
            "titleKey": "wsManagerStockItems.organism.create.title",
            "purpose": "Cadastrar item de estoque",
            "userActions": [
              "createStockItem"
            ],
            "requiredEntities": [
              "StockItem"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "lowStockAlert"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "int-create-stock-item-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "wsManagerStockItems.intent.create.title",
                "action": "createStockItem",
                "submitAction": "createStockItem",
                "fields": [
                  {
                    "id": "fld-create-name",
                    "field": "name",
                    "labelKey": "wsManagerStockItems.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-stock-items.input.createStockItem.name"
                  },
                  {
                    "id": "fld-create-unit",
                    "field": "unitOfMeasure",
                    "labelKey": "wsManagerStockItems.field.unitOfMeasure",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure"
                  },
                  {
                    "id": "fld-create-minimum",
                    "field": "minimumQuantity",
                    "labelKey": "wsManagerStockItems.field.minimumQuantity",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.ws-manager-stock-items.input.createStockItem.minimumQuantity"
                  },
                  {
                    "id": "fld-create-status",
                    "field": "status",
                    "labelKey": "wsManagerStockItems.field.status",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-stock-items.input.createStockItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-create-save",
                    "action": "createStockItem",
                    "labelKey": "wsManagerStockItems.action.saveCreate",
                    "order": 10,
                    "actionKey": "createStockItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-update-stock-item",
            "type": "organism",
            "organismName": "UpdateStockItem",
            "titleKey": "wsManagerStockItems.organism.update.title",
            "purpose": "Editar item de estoque",
            "userActions": [
              "updateStockItem"
            ],
            "requiredEntities": [
              "StockItem"
            ],
            "readsFields": [],
            "writesFields": [
              "StockItem.name",
              "StockItem.unitOfMeasure",
              "StockItem.minimumQuantity",
              "StockItem.status",
              "StockItem.updatedAt"
            ],
            "rulesApplied": [
              "lowStockAlert"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "int-update-stock-item-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "wsManagerStockItems.intent.update.title",
                "action": "updateStockItem",
                "submitAction": "updateStockItem",
                "fields": [
                  {
                    "id": "fld-update-name",
                    "field": "name",
                    "labelKey": "wsManagerStockItems.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.name"
                  },
                  {
                    "id": "fld-update-unit",
                    "field": "unitOfMeasure",
                    "labelKey": "wsManagerStockItems.field.unitOfMeasure",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure"
                  },
                  {
                    "id": "fld-update-minimum",
                    "field": "minimumQuantity",
                    "labelKey": "wsManagerStockItems.field.minimumQuantity",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity"
                  },
                  {
                    "id": "fld-update-status",
                    "field": "status",
                    "labelKey": "wsManagerStockItems.field.status",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-stock-items.input.updateStockItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-update-save",
                    "action": "updateStockItem",
                    "labelKey": "wsManagerStockItems.action.saveUpdate",
                    "order": 10,
                    "actionKey": "updateStockItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-delete-stock-item",
            "type": "organism",
            "organismName": "DeleteStockItem",
            "titleKey": "wsManagerStockItems.organism.delete.title",
            "purpose": "Remover item de estoque",
            "userActions": [
              "deleteStockItem"
            ],
            "requiredEntities": [
              "StockItem"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "lowStockAlert"
            ],
            "order": 40,
            "intentions": [
              {
                "id": "int-delete-stock-item-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "wsManagerStockItems.intent.delete.title",
                "action": "deleteStockItem",
                "submitAction": "deleteStockItem",
                "fields": [
                  {
                    "id": "fld-delete-stock-item-id",
                    "field": "stockItemId",
                    "labelKey": "wsManagerStockItems.field.stockItemId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.stockItemId"
                  },
                  {
                    "id": "fld-delete-name",
                    "field": "name",
                    "labelKey": "wsManagerStockItems.field.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.name"
                  },
                  {
                    "id": "fld-delete-unit",
                    "field": "unitOfMeasure",
                    "labelKey": "wsManagerStockItems.field.unitOfMeasure",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure"
                  },
                  {
                    "id": "fld-delete-minimum",
                    "field": "minimumQuantity",
                    "labelKey": "wsManagerStockItems.field.minimumQuantity",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity"
                  },
                  {
                    "id": "fld-delete-status",
                    "field": "status",
                    "labelKey": "wsManagerStockItems.field.status",
                    "order": 50,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-stock-items.input.deleteStockItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-delete-confirm",
                    "action": "deleteStockItem",
                    "labelKey": "wsManagerStockItems.action.confirmDelete",
                    "order": 10,
                    "actionKey": "deleteStockItem"
                  }
                ]
              },
              {
                "id": "int-stock-items-summary",
                "intent": "summary",
                "order": 20,
                "titleKey": "wsManagerStockItems.intent.summary.title",
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
    "id": "ws-manager-stock-items__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-items.ts",
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-items.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/shared/ws-manager-stock-items.defs.ts",
      "_102049_/l2/cafeFlow/web/shared/ws-manager-stock-items.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.defs.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.ts"
    ],
    "dependsOn": [
      "ws-manager-stock-items__l2_shared"
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
