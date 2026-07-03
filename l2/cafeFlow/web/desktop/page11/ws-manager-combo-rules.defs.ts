/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-combo-rules.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-combo-rules",
  "pageName": "Gestão de Regras de Combo e Substituição",
  "actor": "manager",
  "purpose": "Executar Gestão de Regras de Combo e Substituição.",
  "capabilities": [
    "manageComboRules"
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
    "workspaceId": "ws-manager-combo-rules",
    "workspaceKind": "entityManagement",
    "actor": "manager",
    "entity": "ComboRule",
    "owners": [
      {
        "kind": "operation",
        "id": "queryComboRules",
        "defPath": "_102049_/l4/operations/queryComboRules.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createComboRule",
        "defPath": "_102049_/l4/operations/createComboRule.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateComboRule",
        "defPath": "_102049_/l4/operations/updateComboRule.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteComboRule",
        "defPath": "_102049_/l4/operations/deleteComboRule.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryComboRules",
          "commandName": "queryComboRules",
          "steps": [
            "Acessar a tela de gerenciamento de combos",
            "Visualizar regras cadastradas"
          ]
        },
        {
          "operationId": "createComboRule",
          "commandName": "createComboRule",
          "steps": [
            "Selecionar itens que compõem o combo",
            "Definir substituições permitidas",
            "Configurar diferença de preço aplicável",
            "Salvar a regra"
          ]
        },
        {
          "operationId": "updateComboRule",
          "commandName": "updateComboRule",
          "steps": [
            "Localizar a regra",
            "Alterar itens, substituições ou diferença de preço",
            "Salvar alterações"
          ]
        },
        {
          "operationId": "deleteComboRule",
          "commandName": "deleteComboRule",
          "steps": [
            "Localizar a regra",
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
      "id": "sec-main",
      "type": "section",
      "sectionName": "Gestão de Regras de Combo e Substituição",
      "titleKey": "sec.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-query",
          "type": "query",
          "organismName": "QueryComboRules",
          "titleKey": "organism.queryComboRules.title",
          "purpose": "Consultar regras de combo e substituição",
          "userActions": [
            "queryComboRules"
          ],
          "requiredEntities": [
            "ComboRule",
            "MenuItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-query-list",
              "intent": "queryList",
              "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules",
              "order": 10
            }
          ]
        },
        {
          "id": "org-create",
          "type": "command",
          "organismName": "CreateComboRule",
          "titleKey": "organism.createComboRule.title",
          "purpose": "Criar regra de combo e substituição",
          "userActions": [
            "createComboRule"
          ],
          "requiredEntities": [
            "ComboRule",
            "MenuItem"
          ],
          "readsFields": [],
          "writesFields": [
            "ComboRule.comboRuleId",
            "ComboRule.menuItemId",
            "ComboRule.name",
            "ComboRule.description",
            "ComboRule.priceDifference",
            "ComboRule.status",
            "ComboRule.createdAt",
            "ComboRule.updatedAt"
          ],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "int-create-form",
              "intent": "commandForm",
              "submitAction": "createComboRule",
              "order": 10
            }
          ]
        },
        {
          "id": "org-update",
          "type": "command",
          "organismName": "UpdateComboRule",
          "titleKey": "organism.updateComboRule.title",
          "purpose": "Editar regra de combo e substituição",
          "userActions": [
            "updateComboRule"
          ],
          "requiredEntities": [
            "ComboRule",
            "MenuItem"
          ],
          "readsFields": [],
          "writesFields": [
            "ComboRule.name",
            "ComboRule.description",
            "ComboRule.priceDifference",
            "ComboRule.status",
            "ComboRule.updatedAt"
          ],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "int-update-form",
              "intent": "commandForm",
              "submitAction": "updateComboRule",
              "order": 10
            }
          ]
        },
        {
          "id": "org-delete",
          "type": "command",
          "organismName": "DeleteComboRule",
          "titleKey": "organism.deleteComboRule.title",
          "purpose": "Remover regra de combo e substituição",
          "userActions": [
            "deleteComboRule"
          ],
          "requiredEntities": [
            "ComboRule"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "comboPriceDifference"
          ],
          "order": 40,
          "intentionRefs": [
            {
              "id": "int-delete-form",
              "intent": "commandForm",
              "submitAction": "deleteComboRule",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "ws-manager-combo-rules-layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-main",
        "type": "section",
        "sectionName": "Gestão de Regras de Combo e Substituição",
        "titleKey": "sec.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-query",
            "type": "query",
            "organismName": "QueryComboRules",
            "titleKey": "organism.queryComboRules.title",
            "purpose": "Consultar regras de combo e substituição",
            "userActions": [
              "queryComboRules"
            ],
            "requiredEntities": [
              "ComboRule",
              "MenuItem"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int-query-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intention.queryList.title",
                "source": "cafeFlow.queryComboRules.queryComboRules",
                "emptyKey": "empty.queryComboRules.label",
                "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules",
                "fields": [],
                "columns": [
                  {
                    "id": "c-comboRuleId",
                    "field": "comboRuleId",
                    "labelKey": "field.comboRuleId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
                  },
                  {
                    "id": "c-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
                  },
                  {
                    "id": "c-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
                  },
                  {
                    "id": "c-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
                  },
                  {
                    "id": "c-priceDifference",
                    "field": "priceDifference",
                    "labelKey": "field.priceDifference.label",
                    "order": 50,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
                  },
                  {
                    "id": "c-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
                  },
                  {
                    "id": "c-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt.label",
                    "order": 70,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
                  },
                  {
                    "id": "c-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "field.updatedAt.label",
                    "order": 80,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
                  }
                ],
                "filters": [
                  {
                    "id": "f-comboRuleId",
                    "field": "comboRuleId",
                    "labelKey": "field.comboRuleId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId"
                  },
                  {
                    "id": "f-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.menuItemId"
                  },
                  {
                    "id": "f-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.name"
                  },
                  {
                    "id": "f-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 40,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.status"
                  },
                  {
                    "id": "f-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt.label",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.createdAt"
                  },
                  {
                    "id": "f-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "field.updatedAt.label",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "t-query",
                    "action": "queryComboRules",
                    "labelKey": "action.queryComboRules.label",
                    "order": 10,
                    "actionKey": "queryComboRules"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra-update",
                    "action": "updateComboRule",
                    "labelKey": "action.updateComboRule.label",
                    "order": 10,
                    "actionKey": "updateComboRule"
                  },
                  {
                    "id": "ra-delete",
                    "action": "deleteComboRule",
                    "labelKey": "action.deleteComboRule.label",
                    "order": 20,
                    "actionKey": "deleteComboRule"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org-create",
            "type": "command",
            "organismName": "CreateComboRule",
            "titleKey": "organism.createComboRule.title",
            "purpose": "Criar regra de combo e substituição",
            "userActions": [
              "createComboRule"
            ],
            "requiredEntities": [
              "ComboRule",
              "MenuItem"
            ],
            "readsFields": [],
            "writesFields": [
              "ComboRule.comboRuleId",
              "ComboRule.menuItemId",
              "ComboRule.name",
              "ComboRule.description",
              "ComboRule.priceDifference",
              "ComboRule.status",
              "ComboRule.createdAt",
              "ComboRule.updatedAt"
            ],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "int-create-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.createForm.title",
                "submitAction": "createComboRule",
                "fields": [
                  {
                    "id": "fld-create-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 10,
                    "required": true,
                    "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.name"
                  },
                  {
                    "id": "fld-create-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 20,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.description"
                  },
                  {
                    "id": "fld-create-priceDifference",
                    "field": "priceDifference",
                    "labelKey": "field.priceDifference.label",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.priceDifference"
                  },
                  {
                    "id": "fld-create-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-create",
                    "action": "createComboRule",
                    "labelKey": "action.createComboRule.label",
                    "order": 10,
                    "actionKey": "createComboRule"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-update",
            "type": "command",
            "organismName": "UpdateComboRule",
            "titleKey": "organism.updateComboRule.title",
            "purpose": "Editar regra de combo e substituição",
            "userActions": [
              "updateComboRule"
            ],
            "requiredEntities": [
              "ComboRule",
              "MenuItem"
            ],
            "readsFields": [],
            "writesFields": [
              "ComboRule.name",
              "ComboRule.description",
              "ComboRule.priceDifference",
              "ComboRule.status",
              "ComboRule.updatedAt"
            ],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "int-update-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.updateForm.title",
                "submitAction": "updateComboRule",
                "fields": [
                  {
                    "id": "fld-update-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 10,
                    "required": true,
                    "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.name"
                  },
                  {
                    "id": "fld-update-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 20,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.description"
                  },
                  {
                    "id": "fld-update-priceDifference",
                    "field": "priceDifference",
                    "labelKey": "field.priceDifference.label",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.priceDifference"
                  },
                  {
                    "id": "fld-update-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-update",
                    "action": "updateComboRule",
                    "labelKey": "action.updateComboRule.label",
                    "order": 10,
                    "actionKey": "updateComboRule"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-delete",
            "type": "command",
            "organismName": "DeleteComboRule",
            "titleKey": "organism.deleteComboRule.title",
            "purpose": "Remover regra de combo e substituição",
            "userActions": [
              "deleteComboRule"
            ],
            "requiredEntities": [
              "ComboRule"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "comboPriceDifference"
            ],
            "order": 40,
            "intentions": [
              {
                "id": "int-delete-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.deleteForm.title",
                "submitAction": "deleteComboRule",
                "fields": [
                  {
                    "id": "fld-delete-comboRuleId",
                    "field": "comboRuleId",
                    "labelKey": "field.comboRuleId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId"
                  },
                  {
                    "id": "fld-delete-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId"
                  },
                  {
                    "id": "fld-delete-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 30,
                    "required": true,
                    "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.name"
                  },
                  {
                    "id": "fld-delete-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.description"
                  },
                  {
                    "id": "fld-delete-priceDifference",
                    "field": "priceDifference",
                    "labelKey": "field.priceDifference.label",
                    "order": 50,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference"
                  },
                  {
                    "id": "fld-delete-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-delete",
                    "action": "deleteComboRule",
                    "labelKey": "action.deleteComboRule.label",
                    "order": 10,
                    "actionKey": "deleteComboRule"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "db-query-data",
      "source": "cafeFlow.queryComboRules.queryComboRules",
      "description": "Resultado da consulta de regras de combo",
      "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
    },
    {
      "id": "db-query-status",
      "source": "cafeFlow.queryComboRules.queryComboRules",
      "command": "queryComboRules",
      "description": "Status da ação de consulta",
      "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules",
      "inputStateKeys": [
        "ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId",
        "ui.ws-manager-combo-rules.input.queryComboRules.menuItemId",
        "ui.ws-manager-combo-rules.input.queryComboRules.name",
        "ui.ws-manager-combo-rules.input.queryComboRules.status",
        "ui.ws-manager-combo-rules.input.queryComboRules.createdAt",
        "ui.ws-manager-combo-rules.input.queryComboRules.updatedAt"
      ]
    },
    {
      "id": "db-create-status",
      "source": "cafeFlow.createComboRule.createComboRule",
      "command": "createComboRule",
      "description": "Status da ação de criação",
      "stateKey": "ui.ws-manager-combo-rules.output.createComboRule",
      "inputStateKeys": [
        "ui.ws-manager-combo-rules.input.createComboRule.name",
        "ui.ws-manager-combo-rules.input.createComboRule.description",
        "ui.ws-manager-combo-rules.input.createComboRule.priceDifference",
        "ui.ws-manager-combo-rules.input.createComboRule.status"
      ]
    },
    {
      "id": "db-update-status",
      "source": "cafeFlow.updateComboRule.updateComboRule",
      "command": "updateComboRule",
      "description": "Status da ação de atualização",
      "stateKey": "ui.ws-manager-combo-rules.output.updateComboRule",
      "inputStateKeys": [
        "ui.ws-manager-combo-rules.input.updateComboRule.name",
        "ui.ws-manager-combo-rules.input.updateComboRule.description",
        "ui.ws-manager-combo-rules.input.updateComboRule.priceDifference",
        "ui.ws-manager-combo-rules.input.updateComboRule.status"
      ]
    },
    {
      "id": "db-delete-status",
      "source": "cafeFlow.deleteComboRule.deleteComboRule",
      "command": "deleteComboRule",
      "description": "Status da ação de exclusão",
      "stateKey": "ui.ws-manager-combo-rules.output.deleteComboRule",
      "inputStateKeys": [
        "ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId",
        "ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId",
        "ui.ws-manager-combo-rules.input.deleteComboRule.name",
        "ui.ws-manager-combo-rules.input.deleteComboRule.description",
        "ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference",
        "ui.ws-manager-combo-rules.input.deleteComboRule.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "ws-manager-combo-rules__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-combo-rules.ts",
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-combo-rules.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/shared/ws-manager-combo-rules.defs.ts",
      "_102049_/l2/cafeFlow/web/shared/ws-manager-combo-rules.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.defs.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.ts"
    ],
    "dependsOn": [
      "ws-manager-combo-rules__l2_shared"
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
