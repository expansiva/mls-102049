/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-menu.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-menu",
  "pageName": "Gestão de Cardápio",
  "actor": "manager",
  "purpose": "Executar Gestão de Cardápio.",
  "capabilities": [
    "manageMenuItems"
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section-menu-management",
      "type": "section",
      "sectionName": "Gestão de Cardápio",
      "titleKey": "wsManagerMenu.section.management.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism-query-menu-items",
          "type": "dataList",
          "organismName": "QueryMenuItems",
          "titleKey": "wsManagerMenu.organism.queryMenuItems.title",
          "purpose": "Consultar itens do cardápio",
          "userActions": [
            "queryMenuItems"
          ],
          "requiredEntities": [
            "MenuItem"
          ],
          "readsFields": [
            "MenuItem.menuItemId",
            "MenuItem.name",
            "MenuItem.category",
            "MenuItem.price",
            "MenuItem.description",
            "MenuItem.status",
            "MenuItem.createdAt",
            "MenuItem.updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-query-menu-items",
              "intent": "queryList",
              "stateKey": "ui.ws-manager-menu.data.queryMenuItems",
              "action": "queryMenuItems",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-create-menu-item",
          "type": "form",
          "organismName": "CreateMenuItem",
          "titleKey": "wsManagerMenu.organism.createMenuItem.title",
          "purpose": "Criar item do cardápio",
          "userActions": [
            "createMenuItem"
          ],
          "requiredEntities": [
            "MenuItem"
          ],
          "readsFields": [],
          "writesFields": [
            "MenuItem.menuItemId",
            "MenuItem.name",
            "MenuItem.category",
            "MenuItem.price",
            "MenuItem.description",
            "MenuItem.status",
            "MenuItem.createdAt",
            "MenuItem.updatedAt"
          ],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent-create-menu-item",
              "intent": "commandForm",
              "submitAction": "createMenuItem",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-update-menu-item",
          "type": "form",
          "organismName": "UpdateMenuItem",
          "titleKey": "wsManagerMenu.organism.updateMenuItem.title",
          "purpose": "Editar item do cardápio",
          "userActions": [
            "updateMenuItem"
          ],
          "requiredEntities": [
            "MenuItem"
          ],
          "readsFields": [],
          "writesFields": [
            "MenuItem.name",
            "MenuItem.category",
            "MenuItem.price",
            "MenuItem.description",
            "MenuItem.status",
            "MenuItem.updatedAt"
          ],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent-update-menu-item",
              "intent": "commandForm",
              "submitAction": "updateMenuItem",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-delete-menu-item",
          "type": "form",
          "organismName": "DeleteMenuItem",
          "titleKey": "wsManagerMenu.organism.deleteMenuItem.title",
          "purpose": "Remover item do cardápio",
          "userActions": [
            "deleteMenuItem"
          ],
          "requiredEntities": [
            "MenuItem"
          ],
          "readsFields": [
            "MenuItem.status"
          ],
          "writesFields": [],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 40,
          "intentionRefs": [
            {
              "id": "intent-delete-menu-item",
              "intent": "commandForm",
              "submitAction": "deleteMenuItem",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-menu-summary",
          "type": "summary",
          "organismName": "MenuSummary",
          "titleKey": "wsManagerMenu.organism.summary.title",
          "purpose": "Revisar o contexto e o resultado das ações principais da página.",
          "userActions": [],
          "requiredEntities": [
            "MenuItem"
          ],
          "readsFields": [
            "MenuItem.menuItemId",
            "MenuItem.name",
            "MenuItem.category",
            "MenuItem.price",
            "MenuItem.status",
            "MenuItem.updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 50,
          "intentionRefs": [
            {
              "id": "intent-menu-summary",
              "intent": "summary",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "ws-manager-menu.default",
    "type": "page",
    "sections": [
      {
        "id": "section-menu-management",
        "type": "section",
        "sectionName": "Gestão de Cardápio",
        "titleKey": "wsManagerMenu.section.management.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism-query-menu-items",
            "type": "dataList",
            "organismName": "QueryMenuItems",
            "titleKey": "wsManagerMenu.organism.queryMenuItems.title",
            "purpose": "Consultar itens do cardápio",
            "userActions": [
              "queryMenuItems"
            ],
            "requiredEntities": [
              "MenuItem"
            ],
            "readsFields": [
              "MenuItem.menuItemId",
              "MenuItem.name",
              "MenuItem.category",
              "MenuItem.price",
              "MenuItem.description",
              "MenuItem.status",
              "MenuItem.createdAt",
              "MenuItem.updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent-query-menu-items",
                "intent": "queryList",
                "order": 10,
                "titleKey": "wsManagerMenu.intent.queryMenuItems.title",
                "action": "queryMenuItems",
                "fields": [],
                "columns": [
                  {
                    "id": "col-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "wsManagerMenu.field.menuItemId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
                  },
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "wsManagerMenu.field.name",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
                  },
                  {
                    "id": "col-category",
                    "field": "category",
                    "labelKey": "wsManagerMenu.field.category",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
                  },
                  {
                    "id": "col-price",
                    "field": "price",
                    "labelKey": "wsManagerMenu.field.price",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
                  },
                  {
                    "id": "col-description",
                    "field": "description",
                    "labelKey": "wsManagerMenu.field.description",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "wsManagerMenu.field.status",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
                  },
                  {
                    "id": "col-createdAt",
                    "field": "createdAt",
                    "labelKey": "wsManagerMenu.field.createdAt",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
                  },
                  {
                    "id": "col-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "wsManagerMenu.field.updatedAt",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "wsManagerMenu.field.menuItemId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.queryMenuItems.menuItemId"
                  },
                  {
                    "id": "filter-name",
                    "field": "name",
                    "labelKey": "wsManagerMenu.field.name",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.queryMenuItems.name"
                  },
                  {
                    "id": "filter-category",
                    "field": "category",
                    "labelKey": "wsManagerMenu.field.category",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.queryMenuItems.category"
                  },
                  {
                    "id": "filter-status",
                    "field": "status",
                    "labelKey": "wsManagerMenu.field.status",
                    "order": 40,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-menu.input.queryMenuItems.status"
                  },
                  {
                    "id": "filter-createdAt",
                    "field": "createdAt",
                    "labelKey": "wsManagerMenu.field.createdAt",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.ws-manager-menu.input.queryMenuItems.createdAt"
                  },
                  {
                    "id": "filter-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "wsManagerMenu.field.updatedAt",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.ws-manager-menu.input.queryMenuItems.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-query",
                    "action": "queryMenuItems",
                    "labelKey": "wsManagerMenu.action.query",
                    "order": 10,
                    "actionKey": "queryMenuItems"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.ws-manager-menu.data.queryMenuItems"
              }
            ]
          },
          {
            "id": "organism-create-menu-item",
            "type": "form",
            "organismName": "CreateMenuItem",
            "titleKey": "wsManagerMenu.organism.createMenuItem.title",
            "purpose": "Criar item do cardápio",
            "userActions": [
              "createMenuItem"
            ],
            "requiredEntities": [
              "MenuItem"
            ],
            "readsFields": [],
            "writesFields": [
              "MenuItem.menuItemId",
              "MenuItem.name",
              "MenuItem.category",
              "MenuItem.price",
              "MenuItem.description",
              "MenuItem.status",
              "MenuItem.createdAt",
              "MenuItem.updatedAt"
            ],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent-create-menu-item",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "wsManagerMenu.intent.createMenuItem.title",
                "submitAction": "createMenuItem",
                "fields": [
                  {
                    "id": "field-create-name",
                    "field": "name",
                    "labelKey": "wsManagerMenu.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.createMenuItem.name"
                  },
                  {
                    "id": "field-create-price",
                    "field": "price",
                    "labelKey": "wsManagerMenu.field.price",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.ws-manager-menu.input.createMenuItem.price"
                  },
                  {
                    "id": "field-create-category",
                    "field": "category",
                    "labelKey": "wsManagerMenu.field.category",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.createMenuItem.category"
                  },
                  {
                    "id": "field-create-description",
                    "field": "description",
                    "labelKey": "wsManagerMenu.field.description",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.ws-manager-menu.input.createMenuItem.description"
                  },
                  {
                    "id": "field-create-status",
                    "field": "status",
                    "labelKey": "wsManagerMenu.field.status",
                    "order": 50,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-menu.input.createMenuItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-create-submit",
                    "action": "createMenuItem",
                    "labelKey": "wsManagerMenu.action.saveItem",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createMenuItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-update-menu-item",
            "type": "form",
            "organismName": "UpdateMenuItem",
            "titleKey": "wsManagerMenu.organism.updateMenuItem.title",
            "purpose": "Editar item do cardápio",
            "userActions": [
              "updateMenuItem"
            ],
            "requiredEntities": [
              "MenuItem"
            ],
            "readsFields": [],
            "writesFields": [
              "MenuItem.name",
              "MenuItem.category",
              "MenuItem.price",
              "MenuItem.description",
              "MenuItem.status",
              "MenuItem.updatedAt"
            ],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent-update-menu-item",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "wsManagerMenu.intent.updateMenuItem.title",
                "submitAction": "updateMenuItem",
                "fields": [
                  {
                    "id": "field-update-name",
                    "field": "name",
                    "labelKey": "wsManagerMenu.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.updateMenuItem.name"
                  },
                  {
                    "id": "field-update-category",
                    "field": "category",
                    "labelKey": "wsManagerMenu.field.category",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.updateMenuItem.category"
                  },
                  {
                    "id": "field-update-price",
                    "field": "price",
                    "labelKey": "wsManagerMenu.field.price",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.ws-manager-menu.input.updateMenuItem.price"
                  },
                  {
                    "id": "field-update-description",
                    "field": "description",
                    "labelKey": "wsManagerMenu.field.description",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.ws-manager-menu.input.updateMenuItem.description"
                  },
                  {
                    "id": "field-update-status",
                    "field": "status",
                    "labelKey": "wsManagerMenu.field.status",
                    "order": 50,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-menu.input.updateMenuItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-update-submit",
                    "action": "updateMenuItem",
                    "labelKey": "wsManagerMenu.action.saveChanges",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateMenuItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-delete-menu-item",
            "type": "form",
            "organismName": "DeleteMenuItem",
            "titleKey": "wsManagerMenu.organism.deleteMenuItem.title",
            "purpose": "Remover item do cardápio",
            "userActions": [
              "deleteMenuItem"
            ],
            "requiredEntities": [
              "MenuItem"
            ],
            "readsFields": [
              "MenuItem.status"
            ],
            "writesFields": [],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 40,
            "intentions": [
              {
                "id": "intent-delete-menu-item",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "wsManagerMenu.intent.deleteMenuItem.title",
                "submitAction": "deleteMenuItem",
                "fields": [
                  {
                    "id": "field-delete-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "wsManagerMenu.field.menuItemId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.menuItemId"
                  },
                  {
                    "id": "field-delete-name",
                    "field": "name",
                    "labelKey": "wsManagerMenu.field.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.name"
                  },
                  {
                    "id": "field-delete-category",
                    "field": "category",
                    "labelKey": "wsManagerMenu.field.category",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.category"
                  },
                  {
                    "id": "field-delete-price",
                    "field": "price",
                    "labelKey": "wsManagerMenu.field.price",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.price"
                  },
                  {
                    "id": "field-delete-description",
                    "field": "description",
                    "labelKey": "wsManagerMenu.field.description",
                    "order": 50,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.description"
                  },
                  {
                    "id": "field-delete-status",
                    "field": "status",
                    "labelKey": "wsManagerMenu.field.status",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-menu.input.deleteMenuItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-delete-submit",
                    "action": "deleteMenuItem",
                    "labelKey": "wsManagerMenu.action.confirmDelete",
                    "order": 10,
                    "displayHint": "danger",
                    "actionKey": "deleteMenuItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-menu-summary",
            "type": "summary",
            "organismName": "MenuSummary",
            "titleKey": "wsManagerMenu.organism.summary.title",
            "purpose": "Revisar o contexto e o resultado das ações principais da página.",
            "userActions": [],
            "requiredEntities": [
              "MenuItem"
            ],
            "readsFields": [
              "MenuItem.menuItemId",
              "MenuItem.name",
              "MenuItem.category",
              "MenuItem.price",
              "MenuItem.status",
              "MenuItem.updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 50,
            "intentions": [
              {
                "id": "intent-menu-summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "wsManagerMenu.intent.summary.title",
                "fields": [
                  {
                    "id": "field-summary-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "wsManagerMenu.field.menuItemId",
                    "order": 10,
                    "required": false
                  },
                  {
                    "id": "field-summary-name",
                    "field": "name",
                    "labelKey": "wsManagerMenu.field.name",
                    "order": 20,
                    "required": false
                  },
                  {
                    "id": "field-summary-category",
                    "field": "category",
                    "labelKey": "wsManagerMenu.field.category",
                    "order": 30,
                    "required": false
                  },
                  {
                    "id": "field-summary-price",
                    "field": "price",
                    "labelKey": "wsManagerMenu.field.price",
                    "order": 40,
                    "required": false,
                    "format": "money"
                  },
                  {
                    "id": "field-summary-status",
                    "field": "status",
                    "labelKey": "wsManagerMenu.field.status",
                    "order": 50,
                    "required": false
                  },
                  {
                    "id": "field-summary-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "wsManagerMenu.field.updatedAt",
                    "order": 60,
                    "required": false
                  }
                ],
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
    "id": "ws-manager-menu__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-menu.ts",
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-menu.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/shared/ws-manager-menu.defs.ts",
      "_102049_/l2/cafeFlow/web/shared/ws-manager-menu.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.defs.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.ts"
    ],
    "dependsOn": [
      "ws-manager-menu__l2_shared"
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
