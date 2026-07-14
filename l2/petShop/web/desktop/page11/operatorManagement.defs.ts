/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/operatorManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "operatorManagement",
  "pageName": "Gestão de operadores",
  "baseClassName": "PetShopOperatorManagementBase",
  "actor": "admin",
  "purpose": "Executar Gestão de operadores.",
  "capabilities": [
    "browseOperators",
    "createOperator",
    "updateOperator"
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
    "workspaceId": "operatorManagement",
    "workspaceKind": "entityManagement",
    "actor": "admin",
    "entity": "Operator",
    "owners": [
      {
        "kind": "operation",
        "id": "browseOperators",
        "defPath": "_102049_/l4/operations/browseOperators.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createOperator",
        "defPath": "_102049_/l4/operations/createOperator.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateOperator",
        "defPath": "_102049_/l4/operations/updateOperator.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseOperators",
          "commandName": "browseOperators",
          "steps": [
            "O administrador acessa a tela de gestão de operadores",
            "O sistema retorna a lista de todos os operadores cadastrados com nome, e-mail, telefone, status ativo e datas de cadastro/atualização",
            "O administrador pode filtrar por status ativo e ordenar por nome"
          ]
        },
        {
          "operationId": "createOperator",
          "commandName": "createOperator",
          "steps": [
            "O administrador acessa a tela de cadastro de operadores e preenche o nome, e-mail, telefone e indica se o operador inicia ativo.",
            "O sistema gera um identificador único, registra a data de criação e persiste o novo operador.",
            "O operador cadastrado torna-se disponível para alocação em turnos e agendamentos."
          ]
        },
        {
          "operationId": "updateOperator",
          "commandName": "updateOperator",
          "steps": [
            "O administrador seleciona um operador na lista de operadores cadastrados.",
            "O sistema carrega os dados atuais do operador em um formulário de edição.",
            "O administrador altera nome, e-mail, telefone e/ou status ativo conforme necessário.",
            "O sistema valida os campos informados e persiste as alterações atualizando a data de modificação."
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-operator-management",
      "type": "section",
      "sectionName": "sec-operator-management",
      "titleKey": "sec.operator.management.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-browse-operators",
          "type": "organism",
          "organismName": "BrowseOperators",
          "titleKey": "org.browse.operators.title",
          "purpose": "Listar operadores cadastrados com filtros e ações por linha",
          "userActions": [
            "browseOperators"
          ],
          "requiredEntities": [
            "Operator"
          ],
          "readsFields": [
            "operatorId",
            "name",
            "email",
            "phone",
            "active",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-browse-list",
              "intent": "queryList",
              "stateKey": "ui.operatorManagement.data.browseOperators",
              "action": "browseOperators",
              "order": 10
            }
          ]
        },
        {
          "id": "org-create-operator",
          "type": "organism",
          "organismName": "CreateOperator",
          "titleKey": "org.create.operator.title",
          "purpose": "Cadastrar novo operador com nome, e-mail, telefone e status ativo",
          "userActions": [
            "createOperator"
          ],
          "requiredEntities": [
            "Operator"
          ],
          "readsFields": [],
          "writesFields": [
            "name",
            "email",
            "phone",
            "active"
          ],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent-create-form",
              "intent": "commandForm",
              "stateKey": "ui.operatorManagement.action.createOperator.status",
              "action": "createOperator",
              "submitAction": "createOperator",
              "order": 10
            }
          ]
        },
        {
          "id": "org-update-operator",
          "type": "organism",
          "organismName": "UpdateOperator",
          "titleKey": "org.update.operator.title",
          "purpose": "Editar dados de um operador selecionado na lista",
          "userActions": [
            "updateOperator"
          ],
          "requiredEntities": [
            "Operator"
          ],
          "readsFields": [
            "operatorId",
            "name",
            "email",
            "phone",
            "active"
          ],
          "writesFields": [
            "name",
            "email",
            "phone",
            "active"
          ],
          "rulesApplied": [],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent-update-form",
              "intent": "commandForm",
              "stateKey": "ui.operatorManagement.action.updateOperator.status",
              "action": "updateOperator",
              "submitAction": "updateOperator",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "tabular_classic",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "page11-tabular-classic",
    "type": "page",
    "sections": [
      {
        "id": "sec-operator-management",
        "type": "section",
        "sectionName": "sec-operator-management",
        "titleKey": "sec.operator.management.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-browse-operators",
            "type": "organism",
            "organismName": "BrowseOperators",
            "titleKey": "org.browse.operators.title",
            "purpose": "Listar operadores cadastrados com filtros e ações por linha",
            "userActions": [
              "browseOperators"
            ],
            "requiredEntities": [
              "Operator"
            ],
            "readsFields": [
              "operatorId",
              "name",
              "email",
              "phone",
              "active",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent-browse-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "operatorManagement.browse.title",
                "source": "ui.operatorManagement.data.browseOperators",
                "binding": "query",
                "action": "browseOperators",
                "emptyKey": "operatorManagement.browse.empty",
                "displayHint": "table",
                "stateKey": "ui.operatorManagement.data.browseOperators",
                "fields": [],
                "columns": [
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "operatorManagement.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "source": "browseOperators.output",
                    "stateKey": "ui.operatorManagement.data.browseOperators"
                  },
                  {
                    "id": "col-email",
                    "field": "email",
                    "labelKey": "operatorManagement.field.email",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "browseOperators.output",
                    "stateKey": "ui.operatorManagement.data.browseOperators"
                  },
                  {
                    "id": "col-phone",
                    "field": "phone",
                    "labelKey": "operatorManagement.field.phone",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "source": "browseOperators.output",
                    "stateKey": "ui.operatorManagement.data.browseOperators"
                  },
                  {
                    "id": "col-active",
                    "field": "active",
                    "labelKey": "operatorManagement.field.active",
                    "order": 40,
                    "required": true,
                    "inputType": "boolean",
                    "source": "browseOperators.output",
                    "stateKey": "ui.operatorManagement.data.browseOperators"
                  },
                  {
                    "id": "col-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "operatorManagement.field.updatedAt",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "format": "datetime",
                    "source": "browseOperators.output",
                    "stateKey": "ui.operatorManagement.data.browseOperators"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-active",
                    "field": "activeFilter",
                    "labelKey": "operatorManagement.filter.active",
                    "order": 10,
                    "required": false,
                    "inputType": "boolean",
                    "stateKey": "ui.operatorManagement.input.browseOperators.activeFilter"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-create",
                    "action": "createOperator",
                    "labelKey": "operatorManagement.action.create",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createOperator"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra-update",
                    "action": "updateOperator",
                    "labelKey": "operatorManagement.action.update",
                    "order": 10,
                    "displayHint": "inline",
                    "actionKey": "updateOperator"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org-create-operator",
            "type": "organism",
            "organismName": "CreateOperator",
            "titleKey": "org.create.operator.title",
            "purpose": "Cadastrar novo operador com nome, e-mail, telefone e status ativo",
            "userActions": [
              "createOperator"
            ],
            "requiredEntities": [
              "Operator"
            ],
            "readsFields": [],
            "writesFields": [
              "name",
              "email",
              "phone",
              "active"
            ],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intent-create-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "operatorManagement.create.title",
                "binding": "form",
                "action": "createOperator",
                "submitAction": "createOperator",
                "emptyKey": "operatorManagement.create.empty",
                "displayHint": "panel",
                "stateKey": "ui.operatorManagement.action.createOperator.status",
                "fields": [
                  {
                    "id": "f-create-name",
                    "field": "name",
                    "labelKey": "operatorManagement.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.operatorManagement.input.createOperator.name"
                  },
                  {
                    "id": "f-create-email",
                    "field": "email",
                    "labelKey": "operatorManagement.field.email",
                    "order": 20,
                    "required": false,
                    "inputType": "email",
                    "stateKey": "ui.operatorManagement.input.createOperator.email"
                  },
                  {
                    "id": "f-create-phone",
                    "field": "phone",
                    "labelKey": "operatorManagement.field.phone",
                    "order": 30,
                    "required": false,
                    "inputType": "tel",
                    "stateKey": "ui.operatorManagement.input.createOperator.phone"
                  },
                  {
                    "id": "f-create-active",
                    "field": "active",
                    "labelKey": "operatorManagement.field.active",
                    "order": 40,
                    "required": true,
                    "inputType": "boolean",
                    "stateKey": "ui.operatorManagement.input.createOperator.active"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-create-submit",
                    "action": "createOperator",
                    "labelKey": "operatorManagement.action.create.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createOperator"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-update-operator",
            "type": "organism",
            "organismName": "UpdateOperator",
            "titleKey": "org.update.operator.title",
            "purpose": "Editar dados de um operador selecionado na lista",
            "userActions": [
              "updateOperator"
            ],
            "requiredEntities": [
              "Operator"
            ],
            "readsFields": [
              "operatorId",
              "name",
              "email",
              "phone",
              "active"
            ],
            "writesFields": [
              "name",
              "email",
              "phone",
              "active"
            ],
            "rulesApplied": [],
            "order": 30,
            "intentions": [
              {
                "id": "intent-update-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "operatorManagement.update.title",
                "binding": "form",
                "action": "updateOperator",
                "submitAction": "updateOperator",
                "emptyKey": "operatorManagement.update.empty",
                "displayHint": "panel",
                "stateKey": "ui.operatorManagement.action.updateOperator.status",
                "fields": [
                  {
                    "id": "f-update-operatorId",
                    "field": "operatorId",
                    "labelKey": "operatorManagement.field.operatorId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "stateKey": "ui.operatorManagement.input.updateOperator.operatorId"
                  },
                  {
                    "id": "f-update-name",
                    "field": "name",
                    "labelKey": "operatorManagement.field.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.operatorManagement.input.updateOperator.name"
                  },
                  {
                    "id": "f-update-email",
                    "field": "email",
                    "labelKey": "operatorManagement.field.email",
                    "order": 30,
                    "required": false,
                    "inputType": "email",
                    "stateKey": "ui.operatorManagement.input.updateOperator.email"
                  },
                  {
                    "id": "f-update-phone",
                    "field": "phone",
                    "labelKey": "operatorManagement.field.phone",
                    "order": 40,
                    "required": false,
                    "inputType": "tel",
                    "stateKey": "ui.operatorManagement.input.updateOperator.phone"
                  },
                  {
                    "id": "f-update-active",
                    "field": "active",
                    "labelKey": "operatorManagement.field.active",
                    "order": 50,
                    "required": true,
                    "inputType": "boolean",
                    "stateKey": "ui.operatorManagement.input.updateOperator.active"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-update-submit",
                    "action": "updateOperator",
                    "labelKey": "operatorManagement.action.update.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateOperator"
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
      "id": "bind-browse",
      "source": "petShop.browseOperators.browseOperators",
      "entity": "Operator",
      "command": "browseOperators",
      "description": "Lista paginada de operadores cadastrados",
      "stateKey": "ui.operatorManagement.data.browseOperators",
      "inputStateKeys": [
        "ui.operatorManagement.input.browseOperators.activeFilter"
      ]
    },
    {
      "id": "bind-create",
      "source": "petShop.createOperator.createOperator",
      "entity": "Operator",
      "command": "createOperator",
      "description": "Cria um novo operador com dados informados",
      "stateKey": "ui.operatorManagement.output.createOperator",
      "inputStateKeys": [
        "ui.operatorManagement.input.createOperator.name",
        "ui.operatorManagement.input.createOperator.email",
        "ui.operatorManagement.input.createOperator.phone",
        "ui.operatorManagement.input.createOperator.active"
      ]
    },
    {
      "id": "bind-update",
      "source": "petShop.updateOperator.updateOperator",
      "entity": "Operator",
      "command": "updateOperator",
      "description": "Atualiza os dados de um operador existente",
      "stateKey": "ui.operatorManagement.output.updateOperator",
      "inputStateKeys": [
        "ui.operatorManagement.input.updateOperator.operatorId",
        "ui.operatorManagement.input.updateOperator.name",
        "ui.operatorManagement.input.updateOperator.email",
        "ui.operatorManagement.input.updateOperator.phone",
        "ui.operatorManagement.input.updateOperator.active"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "operatorManagement__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/operatorManagement.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/operatorManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/operatorManagement.defs.ts",
      "_102049_/l2/petShop/web/shared/operatorManagement.ts",
      "_102049_/l2/petShop/web/contracts/operatorManagement.defs.ts",
      "_102049_/l2/petShop/web/contracts/operatorManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "operatorManagement__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
