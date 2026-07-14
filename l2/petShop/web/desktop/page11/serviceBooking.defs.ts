/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/serviceBooking.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "serviceBooking",
  "pageName": "Agendamento de serviço",
  "baseClassName": "PetShopServiceBookingBase",
  "actor": "cliente",
  "purpose": "Executar Agendamento de serviço.",
  "capabilities": [
    "serviceBookingLifecycle",
    "browseServiceCatalog"
  ],
  "flowRefs": {
    "experienceFlows": [
      "serviceBookingLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "serviceBookingLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "serviceBooking",
    "workspaceKind": "workflow",
    "workflowId": "serviceBookingLifecycle",
    "actor": "cliente",
    "entity": "ServiceBooking",
    "owners": [
      {
        "kind": "workflow",
        "id": "serviceBookingLifecycle",
        "defPath": "_102049_/l4/workflows/serviceBookingLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseServiceCatalog",
        "defPath": "_102049_/l4/operations/browseServiceCatalog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createServiceBooking",
        "defPath": "_102049_/l4/operations/createServiceBooking.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O cliente consulta os serviços disponíveis e seleciona o serviço desejado para o seu pet.",
        "O cliente escolhe uma data e horário disponíveis com base na capacidade de operadores alocados por turno.",
        "O cliente confirma o agendamento, que é vinculado a um operador disponível no turno correspondente.",
        "O operador inicia o atendimento quando o cliente chega à loja no horário marcado.",
        "O operador conclui o serviço e marca o agendamento como concluído, liberando capacidade para futuros agendamentos."
      ],
      "operations": [
        {
          "operationId": "browseServiceCatalog",
          "commandName": "browseServiceCatalog",
          "steps": [
            "O cliente acessa a página de serviços oferecidos.",
            "O sistema lista todos os serviços com status active, exibindo nome, descrição, duração estimada e preço.",
            "O cliente revisa as opções disponíveis para decidir qual serviço agendar."
          ]
        },
        {
          "operationId": "createServiceBooking",
          "commandName": "createServiceBooking",
          "steps": [
            "O cliente seleciona o serviço desejado entre os serviços disponíveis.",
            "O cliente escolhe data e horário entre os disponíveis, calculados a partir da capacidade de operadores alocados por turno.",
            "O cliente informa seu nome, telefone e observações opcionais.",
            "O sistema identifica o turno correspondente à data e horário escolhidos e seleciona um operador disponível com capacidade no turno.",
            "O cliente confirma o agendamento e recebe a informação de que o pagamento será realizado presencialmente na loja."
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_catalog",
      "type": "section",
      "sectionName": "sec_catalog",
      "titleKey": "sec.catalog.title",
      "mode": "read",
      "order": 10,
      "organisms": [
        {
          "id": "org_browseCatalog",
          "type": "organism",
          "organismName": "BrowseServiceCatalog",
          "titleKey": "org.browseCatalog.title",
          "purpose": "Ver serviços oferecidos",
          "userActions": [
            "browseServiceCatalog"
          ],
          "requiredEntities": [
            "Service"
          ],
          "readsFields": [
            "serviceId",
            "name",
            "description",
            "estimatedDurationMinutes",
            "price"
          ],
          "writesFields": [],
          "rulesApplied": [
            "activeServicesOnlyListed"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent_browseCatalog",
              "intent": "queryList",
              "stateKey": "ui.serviceBooking.data.browseServiceCatalog",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec_booking",
      "type": "section",
      "sectionName": "sec_booking",
      "titleKey": "sec.booking.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org_createBooking",
          "type": "organism",
          "organismName": "CreateServiceBooking",
          "titleKey": "org.createBooking.title",
          "purpose": "Agendar serviço",
          "userActions": [
            "createServiceBooking"
          ],
          "requiredEntities": [
            "ServiceBooking",
            "Service",
            "Shift",
            "ShiftAssignment",
            "Operator"
          ],
          "readsFields": [
            "serviceId",
            "customerName",
            "customerPhone",
            "bookingDate",
            "bookingTime",
            "notes"
          ],
          "writesFields": [
            "serviceBookingId",
            "serviceId",
            "operatorId",
            "shiftId",
            "bookingDate",
            "bookingTime",
            "status",
            "customerName"
          ],
          "rulesApplied": [
            "paymentInStoreOnly",
            "schedulingCapacityByOperators",
            "noBookingWithoutAvailableOperator",
            "businessHoursForScheduling"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent_createBooking",
              "intent": "commandForm",
              "submitAction": "createServiceBooking",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec_confirmation",
      "type": "section",
      "sectionName": "sec_confirmation",
      "titleKey": "sec.confirmation.title",
      "mode": "read",
      "order": 30,
      "organisms": [
        {
          "id": "org_bookingSummary",
          "type": "organism",
          "organismName": "BookingSummary",
          "titleKey": "org.bookingSummary.title",
          "purpose": "Revisar o contexto e o resultado das ações principais da página",
          "userActions": [],
          "requiredEntities": [
            "ServiceBooking"
          ],
          "readsFields": [
            "serviceBookingId",
            "customerName",
            "bookingDate",
            "bookingTime",
            "status"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentInStoreOnly"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent_bookingSummary",
              "intent": "summary",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "mobile_cards",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "page11_mobile_cards",
    "type": "page",
    "sections": [
      {
        "id": "sec_catalog",
        "type": "section",
        "sectionName": "sec_catalog",
        "titleKey": "sec.catalog.title",
        "mode": "read",
        "order": 10,
        "organisms": [
          {
            "id": "org_browseCatalog",
            "type": "organism",
            "organismName": "BrowseServiceCatalog",
            "titleKey": "org.browseCatalog.title",
            "purpose": "Ver serviços oferecidos",
            "userActions": [
              "browseServiceCatalog"
            ],
            "requiredEntities": [
              "Service"
            ],
            "readsFields": [
              "serviceId",
              "name",
              "description",
              "estimatedDurationMinutes",
              "price"
            ],
            "writesFields": [],
            "rulesApplied": [
              "activeServicesOnlyListed"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent_browseCatalog",
                "intent": "queryList",
                "order": 10,
                "titleKey": "section.catalog.title",
                "source": "ui.serviceBooking.data.browseServiceCatalog",
                "emptyKey": "section.catalog.empty",
                "displayHint": "card",
                "fields": [],
                "columns": [
                  {
                    "id": "col_serviceId",
                    "field": "serviceId",
                    "labelKey": "column.serviceId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "hidden",
                    "source": "ui.serviceBooking.data.browseServiceCatalog",
                    "stateKey": "ui.serviceBooking.data.browseServiceCatalog"
                  },
                  {
                    "id": "col_name",
                    "field": "name",
                    "labelKey": "column.name.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.serviceBooking.data.browseServiceCatalog",
                    "stateKey": "ui.serviceBooking.data.browseServiceCatalog"
                  },
                  {
                    "id": "col_description",
                    "field": "description",
                    "labelKey": "column.description.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.serviceBooking.data.browseServiceCatalog",
                    "stateKey": "ui.serviceBooking.data.browseServiceCatalog"
                  },
                  {
                    "id": "col_duration",
                    "field": "estimatedDurationMinutes",
                    "labelKey": "column.estimatedDurationMinutes.label",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "minutes",
                    "source": "ui.serviceBooking.data.browseServiceCatalog",
                    "stateKey": "ui.serviceBooking.data.browseServiceCatalog"
                  },
                  {
                    "id": "col_price",
                    "field": "price",
                    "labelKey": "column.price.label",
                    "order": 50,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "ui.serviceBooking.data.browseServiceCatalog",
                    "stateKey": "ui.serviceBooking.data.browseServiceCatalog"
                  }
                ],
                "filters": [
                  {
                    "id": "filter_name",
                    "field": "name",
                    "labelKey": "filter.name.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.serviceBooking.data.browseServiceCatalog"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb_refresh_catalog",
                    "action": "browseServiceCatalog",
                    "labelKey": "action.browseServiceCatalog.label",
                    "order": 10,
                    "displayHint": "icon",
                    "actionKey": "browseServiceCatalog"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.serviceBooking.data.browseServiceCatalog"
              }
            ]
          }
        ]
      },
      {
        "id": "sec_booking",
        "type": "section",
        "sectionName": "sec_booking",
        "titleKey": "sec.booking.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org_createBooking",
            "type": "organism",
            "organismName": "CreateServiceBooking",
            "titleKey": "org.createBooking.title",
            "purpose": "Agendar serviço",
            "userActions": [
              "createServiceBooking"
            ],
            "requiredEntities": [
              "ServiceBooking",
              "Service",
              "Shift",
              "ShiftAssignment",
              "Operator"
            ],
            "readsFields": [
              "serviceId",
              "customerName",
              "customerPhone",
              "bookingDate",
              "bookingTime",
              "notes"
            ],
            "writesFields": [
              "serviceBookingId",
              "serviceId",
              "operatorId",
              "shiftId",
              "bookingDate",
              "bookingTime",
              "status",
              "customerName"
            ],
            "rulesApplied": [
              "paymentInStoreOnly",
              "schedulingCapacityByOperators",
              "noBookingWithoutAvailableOperator",
              "businessHoursForScheduling"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent_createBooking",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "section.booking.title",
                "submitAction": "createServiceBooking",
                "emptyKey": "section.booking.empty",
                "displayHint": "form",
                "fields": [
                  {
                    "id": "fld_serviceId",
                    "field": "serviceId",
                    "labelKey": "field.serviceId.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "ui.serviceBooking.data.browseServiceCatalog",
                    "stateKey": "ui.serviceBooking.input.createServiceBooking.serviceId"
                  },
                  {
                    "id": "fld_customerName",
                    "field": "customerName",
                    "labelKey": "field.customerName.label",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.serviceBooking.input.createServiceBooking.customerName"
                  },
                  {
                    "id": "fld_customerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone.label",
                    "order": 30,
                    "required": true,
                    "inputType": "tel",
                    "stateKey": "ui.serviceBooking.input.createServiceBooking.customerPhone"
                  },
                  {
                    "id": "fld_bookingDate",
                    "field": "bookingDate",
                    "labelKey": "field.bookingDate.label",
                    "order": 40,
                    "required": true,
                    "inputType": "date",
                    "format": "yyyy-MM-dd",
                    "stateKey": "ui.serviceBooking.input.createServiceBooking.bookingDate"
                  },
                  {
                    "id": "fld_bookingTime",
                    "field": "bookingTime",
                    "labelKey": "field.bookingTime.label",
                    "order": 50,
                    "required": true,
                    "inputType": "time",
                    "format": "HH:mm",
                    "stateKey": "ui.serviceBooking.input.createServiceBooking.bookingTime"
                  },
                  {
                    "id": "fld_notes",
                    "field": "notes",
                    "labelKey": "field.notes.label",
                    "order": 60,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.serviceBooking.input.createServiceBooking.notes"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_submit_booking",
                    "action": "createServiceBooking",
                    "labelKey": "action.createServiceBooking.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createServiceBooking"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec_confirmation",
        "type": "section",
        "sectionName": "sec_confirmation",
        "titleKey": "sec.confirmation.title",
        "mode": "read",
        "order": 30,
        "organisms": [
          {
            "id": "org_bookingSummary",
            "type": "organism",
            "organismName": "BookingSummary",
            "titleKey": "org.bookingSummary.title",
            "purpose": "Revisar o contexto e o resultado das ações principais da página",
            "userActions": [],
            "requiredEntities": [
              "ServiceBooking"
            ],
            "readsFields": [
              "serviceBookingId",
              "customerName",
              "bookingDate",
              "bookingTime",
              "status"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentInStoreOnly"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent_bookingSummary",
                "intent": "summary",
                "order": 10,
                "titleKey": "section.confirmation.title",
                "source": "ui.serviceBooking.output.createServiceBooking",
                "emptyKey": "section.confirmation.empty",
                "displayHint": "summary",
                "fields": [
                  {
                    "id": "fld_summary_bookingId",
                    "field": "serviceBookingId",
                    "labelKey": "field.serviceBookingId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.serviceBooking.output.createServiceBooking"
                  },
                  {
                    "id": "fld_summary_customerName",
                    "field": "customerName",
                    "labelKey": "field.customerName.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.serviceBooking.output.createServiceBooking"
                  },
                  {
                    "id": "fld_summary_bookingDate",
                    "field": "bookingDate",
                    "labelKey": "field.bookingDate.label",
                    "order": 30,
                    "required": false,
                    "inputType": "date",
                    "format": "yyyy-MM-dd",
                    "source": "ui.serviceBooking.output.createServiceBooking"
                  },
                  {
                    "id": "fld_summary_bookingTime",
                    "field": "bookingTime",
                    "labelKey": "field.bookingTime.label",
                    "order": 40,
                    "required": false,
                    "inputType": "time",
                    "format": "HH:mm",
                    "source": "ui.serviceBooking.output.createServiceBooking"
                  },
                  {
                    "id": "fld_summary_status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.serviceBooking.output.createServiceBooking"
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
  "dataBindings": [
    {
      "id": "bind_browseServiceCatalog",
      "source": "petShop.browseServiceCatalog.browseServiceCatalog",
      "entity": "Service",
      "command": "browseServiceCatalog",
      "description": "Lista serviços ativos do catálogo do pet shop",
      "stateKey": "ui.serviceBooking.data.browseServiceCatalog",
      "inputStateKeys": []
    },
    {
      "id": "bind_createServiceBooking",
      "source": "petShop.serviceBookingLifecycle.createServiceBooking",
      "entity": "ServiceBooking",
      "command": "createServiceBooking",
      "description": "Cria um agendamento de serviço vinculado a um operador disponível no turno correspondente",
      "stateKey": "ui.serviceBooking.output.createServiceBooking",
      "inputStateKeys": [
        "ui.serviceBooking.input.createServiceBooking.serviceId",
        "ui.serviceBooking.input.createServiceBooking.customerName",
        "ui.serviceBooking.input.createServiceBooking.customerPhone",
        "ui.serviceBooking.input.createServiceBooking.bookingDate",
        "ui.serviceBooking.input.createServiceBooking.bookingTime",
        "ui.serviceBooking.input.createServiceBooking.notes"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "serviceBooking__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/serviceBooking.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/serviceBooking.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/serviceBooking.defs.ts",
      "_102049_/l2/petShop/web/shared/serviceBooking.ts",
      "_102049_/l2/petShop/web/contracts/serviceBooking.defs.ts",
      "_102049_/l2/petShop/web/contracts/serviceBooking.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "serviceBooking__l2_shared"
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
