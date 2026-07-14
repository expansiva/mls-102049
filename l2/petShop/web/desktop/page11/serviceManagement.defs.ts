/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/serviceManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "serviceManagement",
  "pageName": "Gestão de serviços",
  "baseClassName": "PetShopServiceManagementBase",
  "actor": "admin",
  "purpose": "Executar Gestão de serviços.",
  "capabilities": [
    "browseServices",
    "createService",
    "updateService"
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
    "workspaceId": "serviceManagement",
    "workspaceKind": "entityManagement",
    "actor": "admin",
    "entity": "Service",
    "owners": [
      {
        "kind": "operation",
        "id": "browseServices",
        "defPath": "_102049_/l4/operations/browseServices.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createService",
        "defPath": "_102049_/l4/operations/createService.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateService",
        "defPath": "_102049_/l4/operations/updateService.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseServices",
          "commandName": "browseServices",
          "steps": [
            "O administrador acessa a tela de gestão de serviços",
            "O sistema retorna a lista de todos os serviços cadastrados com nome, descrição, duração estimada, preço e status de ativação",
            "O administrador pode filtrar e ordenar a listagem para localizar serviços específicos"
          ]
        },
        {
          "operationId": "createService",
          "commandName": "createService",
          "steps": [
            "O administrador acessa a tela de cadastro de serviços.",
            "Preenche nome, descrição, duração estimada em minutos e preço do serviço.",
            "O sistema gera um identificador único, define o status como ativo e registra as datas de criação e atualização.",
            "O serviço é persistido e passa a aparecer na listagem para clientes."
          ]
        },
        {
          "operationId": "updateService",
          "commandName": "updateService",
          "steps": [
            "O administrador seleciona um serviço existente na lista de serviços cadastrados.",
            "O sistema carrega os dados atuais do serviço para edição.",
            "O administrador edita os campos desejados (nome, descrição, duração estimada, preço) e define o status como ativo ou inativo.",
            "O administrador confirma a atualização.",
            "O sistema persiste as alterações, atualiza updatedAt e, se desativado, registra deactivatedAt, sem cancelar agendamentos já confirmados."
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-service-management",
      "type": "section",
      "sectionName": "Gestão de serviços",
      "titleKey": "section.serviceManagement.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-browse-services",
          "type": "organism",
          "organismName": "BrowseServices",
          "titleKey": "org.browse.services.title",
          "purpose": "Listar serviços cadastrados com filtros e ações por linha",
          "userActions": [
            "browseServices"
          ],
          "requiredEntities": [
            "Service"
          ],
          "readsFields": [
            "serviceId",
            "name",
            "description",
            "estimatedDurationMinutes",
            "price",
            "status",
            "deactivatedAt",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "activeServicesOnlyListed"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-browse-list",
              "intent": "queryList",
              "stateKey": "ui.serviceManagement.data.browseServices",
              "action": "browseServices",
              "order": 10
            }
          ]
        },
        {
          "id": "org-create-service",
          "type": "organism",
          "organismName": "CreateService",
          "titleKey": "org.create.service.title",
          "purpose": "Formulário de cadastro de novo serviço",
          "userActions": [
            "createService"
          ],
          "requiredEntities": [
            "Service"
          ],
          "readsFields": [],
          "writesFields": [
            "name",
            "description",
            "estimatedDurationMinutes",
            "price"
          ],
          "rulesApplied": [
            "activeServicesOnlyListed"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent-create-form",
              "intent": "commandForm",
              "stateKey": "ui.serviceManagement.action.createService.status",
              "action": "createService",
              "submitAction": "createService",
              "order": 10
            }
          ]
        },
        {
          "id": "org-update-service",
          "type": "organism",
          "organismName": "UpdateService",
          "titleKey": "org.update.service.title",
          "purpose": "Formulário de edição e ativação/desativação de serviço existente",
          "userActions": [
            "updateService"
          ],
          "requiredEntities": [
            "Service",
            "ServiceBooking"
          ],
          "readsFields": [
            "serviceId",
            "name",
            "description",
            "estimatedDurationMinutes",
            "price",
            "status",
            "deactivatedAt",
            "updatedAt"
          ],
          "writesFields": [
            "name",
            "description",
            "estimatedDurationMinutes",
            "price",
            "status"
          ],
          "rulesApplied": [
            "activeServicesOnlyListed",
            "deactivatingServiceDoesNotCancelBookings"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent-update-form",
              "intent": "commandForm",
              "stateKey": "ui.serviceManagement.action.updateService.status",
              "action": "updateService",
              "submitAction": "updateService",
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
        "id": "sec-service-management",
        "type": "section",
        "sectionName": "Gestão de serviços",
        "titleKey": "section.serviceManagement.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-browse-services",
            "type": "organism",
            "organismName": "BrowseServices",
            "titleKey": "org.browse.services.title",
            "purpose": "Listar serviços cadastrados com filtros e ações por linha",
            "userActions": [
              "browseServices"
            ],
            "requiredEntities": [
              "Service"
            ],
            "readsFields": [
              "serviceId",
              "name",
              "description",
              "estimatedDurationMinutes",
              "price",
              "status",
              "deactivatedAt",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "activeServicesOnlyListed"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent-browse-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "browseServices.title",
                "source": "ui.serviceManagement.data.browseServices",
                "binding": "browseServices",
                "action": "browseServices",
                "emptyKey": "browseServices.empty",
                "displayHint": "table",
                "stateKey": "ui.serviceManagement.data.browseServices",
                "fields": [],
                "columns": [
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "source": "browseServices.output",
                    "stateKey": "ui.serviceManagement.data.browseServices"
                  },
                  {
                    "id": "col-description",
                    "field": "description",
                    "labelKey": "field.description",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "source": "browseServices.output",
                    "stateKey": "ui.serviceManagement.data.browseServices"
                  },
                  {
                    "id": "col-duration",
                    "field": "estimatedDurationMinutes",
                    "labelKey": "field.estimatedDurationMinutes",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "minutes",
                    "source": "browseServices.output",
                    "stateKey": "ui.serviceManagement.data.browseServices"
                  },
                  {
                    "id": "col-price",
                    "field": "price",
                    "labelKey": "field.price",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "source": "browseServices.output",
                    "stateKey": "ui.serviceManagement.data.browseServices"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 50,
                    "required": true,
                    "inputType": "text",
                    "source": "browseServices.output",
                    "stateKey": "ui.serviceManagement.data.browseServices"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-status",
                    "field": "statusFilter",
                    "labelKey": "filter.statusFilter",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.browseServices.statusFilter"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-create",
                    "action": "createService",
                    "labelKey": "toolbar.createService",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createService"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra-update",
                    "action": "updateService",
                    "labelKey": "rowAction.updateService",
                    "order": 10,
                    "displayHint": "inline",
                    "actionKey": "updateService"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org-create-service",
            "type": "organism",
            "organismName": "CreateService",
            "titleKey": "org.create.service.title",
            "purpose": "Formulário de cadastro de novo serviço",
            "userActions": [
              "createService"
            ],
            "requiredEntities": [
              "Service"
            ],
            "readsFields": [],
            "writesFields": [
              "name",
              "description",
              "estimatedDurationMinutes",
              "price"
            ],
            "rulesApplied": [
              "activeServicesOnlyListed"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent-create-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "createService.title",
                "binding": "createService",
                "action": "createService",
                "submitAction": "createService",
                "emptyKey": "createService.empty",
                "displayHint": "form",
                "stateKey": "ui.serviceManagement.action.createService.status",
                "fields": [
                  {
                    "id": "f-create-name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.createService.name"
                  },
                  {
                    "id": "f-create-description",
                    "field": "description",
                    "labelKey": "field.description",
                    "order": 20,
                    "required": true,
                    "inputType": "textarea",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.createService.description"
                  },
                  {
                    "id": "f-create-duration",
                    "field": "estimatedDurationMinutes",
                    "labelKey": "field.estimatedDurationMinutes",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "minutes",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.createService.estimatedDurationMinutes"
                  },
                  {
                    "id": "f-create-price",
                    "field": "price",
                    "labelKey": "field.price",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.createService.price"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-create-submit",
                    "action": "createService",
                    "labelKey": "action.createService.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createService"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-update-service",
            "type": "organism",
            "organismName": "UpdateService",
            "titleKey": "org.update.service.title",
            "purpose": "Formulário de edição e ativação/desativação de serviço existente",
            "userActions": [
              "updateService"
            ],
            "requiredEntities": [
              "Service",
              "ServiceBooking"
            ],
            "readsFields": [
              "serviceId",
              "name",
              "description",
              "estimatedDurationMinutes",
              "price",
              "status",
              "deactivatedAt",
              "updatedAt"
            ],
            "writesFields": [
              "name",
              "description",
              "estimatedDurationMinutes",
              "price",
              "status"
            ],
            "rulesApplied": [
              "activeServicesOnlyListed",
              "deactivatingServiceDoesNotCancelBookings"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent-update-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "updateService.title",
                "binding": "updateService",
                "action": "updateService",
                "submitAction": "updateService",
                "emptyKey": "updateService.empty",
                "displayHint": "form",
                "stateKey": "ui.serviceManagement.action.updateService.status",
                "fields": [
                  {
                    "id": "f-update-serviceId",
                    "field": "serviceId",
                    "labelKey": "field.serviceId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "source": "selectedEntity",
                    "stateKey": "ui.serviceManagement.input.updateService.serviceId"
                  },
                  {
                    "id": "f-update-name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.updateService.name"
                  },
                  {
                    "id": "f-update-description",
                    "field": "description",
                    "labelKey": "field.description",
                    "order": 30,
                    "required": true,
                    "inputType": "textarea",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.updateService.description"
                  },
                  {
                    "id": "f-update-duration",
                    "field": "estimatedDurationMinutes",
                    "labelKey": "field.estimatedDurationMinutes",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "format": "minutes",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.updateService.estimatedDurationMinutes"
                  },
                  {
                    "id": "f-update-price",
                    "field": "price",
                    "labelKey": "field.price",
                    "order": 50,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.updateService.price"
                  },
                  {
                    "id": "f-update-status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "source": "userInput",
                    "stateKey": "ui.serviceManagement.input.updateService.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-update-submit",
                    "action": "updateService",
                    "labelKey": "action.updateService.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateService"
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
      "id": "bind-browseServices",
      "source": "petShop.browseServices.browseServices",
      "entity": "Service",
      "command": "browseServices",
      "description": "Lista paginada de serviços cadastrados com filtro opcional por status.",
      "stateKey": "ui.serviceManagement.data.browseServices",
      "inputStateKeys": [
        "ui.serviceManagement.input.browseServices.statusFilter"
      ]
    },
    {
      "id": "bind-createService",
      "source": "petShop.createService.createService",
      "entity": "Service",
      "command": "createService",
      "description": "Cria um novo serviço com status ativo.",
      "stateKey": "ui.serviceManagement.output.createService",
      "inputStateKeys": [
        "ui.serviceManagement.input.createService.name",
        "ui.serviceManagement.input.createService.description",
        "ui.serviceManagement.input.createService.estimatedDurationMinutes",
        "ui.serviceManagement.input.createService.price"
      ]
    },
    {
      "id": "bind-updateService",
      "source": "petShop.updateService.updateService",
      "entity": "Service",
      "command": "updateService",
      "description": "Atualiza dados e status de ativação de um serviço existente.",
      "stateKey": "ui.serviceManagement.output.updateService",
      "inputStateKeys": [
        "ui.serviceManagement.input.updateService.serviceId",
        "ui.serviceManagement.input.updateService.name",
        "ui.serviceManagement.input.updateService.description",
        "ui.serviceManagement.input.updateService.estimatedDurationMinutes",
        "ui.serviceManagement.input.updateService.price",
        "ui.serviceManagement.input.updateService.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "serviceManagement__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/serviceManagement.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/serviceManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/serviceManagement.defs.ts",
      "_102049_/l2/petShop/web/shared/serviceManagement.ts",
      "_102049_/l2/petShop/web/contracts/serviceManagement.defs.ts",
      "_102049_/l2/petShop/web/contracts/serviceManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "serviceManagement__l2_shared"
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
