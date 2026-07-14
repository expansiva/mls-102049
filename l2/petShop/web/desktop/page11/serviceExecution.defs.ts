/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/serviceExecution.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "serviceExecution",
  "pageName": "Execução de serviço agendado",
  "baseClassName": "PetShopServiceExecutionBase",
  "actor": "operador",
  "purpose": "Executar Execução de serviço agendado.",
  "capabilities": [
    "serviceBookingLifecycle"
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
    "workspaceId": "serviceExecution",
    "workspaceKind": "workflow",
    "workflowId": "serviceBookingLifecycle",
    "actor": "operador",
    "entity": "ServiceBooking",
    "owners": [
      {
        "kind": "workflow",
        "id": "serviceBookingLifecycle",
        "defPath": "_102049_/l4/workflows/serviceBookingLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "startServiceExecution",
        "defPath": "_102049_/l4/operations/startServiceExecution.defs.ts"
      },
      {
        "kind": "operation",
        "id": "completeServiceExecution",
        "defPath": "_102049_/l4/operations/completeServiceExecution.defs.ts"
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
          "operationId": "startServiceExecution",
          "commandName": "startServiceExecution",
          "steps": [
            "O operador seleciona um agendamento confirmado em sua agenda.",
            "O operador confirma o início do atendimento.",
            "O sistema verifica que o operador é o atribuído ao agendamento e que o agendamento está no turno do operador.",
            "O sistema altera o status do agendamento de 'confirmed' para 'inProgress' e registra a data/hora da atualização."
          ]
        },
        {
          "operationId": "completeServiceExecution",
          "commandName": "completeServiceExecution",
          "steps": [
            "O operador seleciona o agendamento em andamento na sua agenda.",
            "O sistema valida que o operador é o operador atribuído ao agendamento e que o status atual é 'inProgress'.",
            "O operador confirma a conclusão do serviço.",
            "O sistema atualiza o status para 'completed' e registra a data e hora da conclusão."
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_bookings",
      "type": "section",
      "sectionName": "Agenda de atendimentos",
      "titleKey": "sec.bookings.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org_booking_list",
          "type": "organism",
          "organismName": "BookingList",
          "titleKey": "org.booking.list.title",
          "purpose": "Listar agendamentos atribuídos ao operador para seleção e execução",
          "userActions": [],
          "requiredEntities": [
            "ServiceBooking",
            "Operator"
          ],
          "readsFields": [
            "serviceBookingId",
            "customerName",
            "bookingDate",
            "bookingTime",
            "status",
            "notes"
          ],
          "writesFields": [],
          "rulesApplied": [
            "operatorSeesOnlyAssignedShiftBookings"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_booking_query",
              "intent": "queryList",
              "stateKey": "ui.serviceExecution.status",
              "order": 10
            },
            {
              "id": "int_workflow_status",
              "intent": "workflowStatus",
              "stateKey": "ui.serviceExecution.status",
              "order": 20
            }
          ]
        }
      ]
    },
    {
      "id": "sec_start_service",
      "type": "section",
      "sectionName": "Iniciar atendimento",
      "titleKey": "sec.start.service.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org_start_service",
          "type": "organism",
          "organismName": "StartServiceExecution",
          "titleKey": "org.start.service.title",
          "purpose": "Iniciar atendimento do serviço agendado",
          "userActions": [
            "startServiceExecution"
          ],
          "requiredEntities": [
            "ServiceBooking",
            "Operator"
          ],
          "readsFields": [
            "serviceBookingId",
            "status"
          ],
          "writesFields": [
            "status",
            "updatedAt"
          ],
          "rulesApplied": [
            "operatorSeesOnlyAssignedShiftBookings",
            "onlyAssignedOperatorCanComplete"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_start_form",
              "intent": "commandForm",
              "stateKey": "ui.serviceExecution.action.startServiceExecution.status",
              "action": "startServiceExecution",
              "submitAction": "startServiceExecution",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec_complete_service",
      "type": "section",
      "sectionName": "Concluir serviço",
      "titleKey": "sec.complete.service.title",
      "mode": "edit",
      "order": 30,
      "organisms": [
        {
          "id": "org_complete_service",
          "type": "organism",
          "organismName": "CompleteServiceExecution",
          "titleKey": "org.complete.service.title",
          "purpose": "Concluir serviço agendado",
          "userActions": [
            "completeServiceExecution"
          ],
          "requiredEntities": [
            "ServiceBooking"
          ],
          "readsFields": [
            "serviceBookingId",
            "status"
          ],
          "writesFields": [
            "status",
            "completedAt"
          ],
          "rulesApplied": [
            "onlyAssignedOperatorCanComplete",
            "paymentInStoreOnly"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_complete_form",
              "intent": "commandForm",
              "stateKey": "ui.serviceExecution.action.completeServiceExecution.status",
              "action": "completeServiceExecution",
              "submitAction": "completeServiceExecution",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec_review",
      "type": "section",
      "sectionName": "Resumo da execução",
      "titleKey": "sec.review.title",
      "mode": "view",
      "order": 40,
      "organisms": [
        {
          "id": "org_review",
          "type": "organism",
          "organismName": "ExecutionReview",
          "titleKey": "org.review.title",
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
            "status",
            "updatedAt",
            "completedAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_review_summary",
              "intent": "summary",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "wizard_flow",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "serviceExecution-wizard-flow",
    "type": "page",
    "sections": [
      {
        "id": "sec_bookings",
        "type": "section",
        "sectionName": "Agenda de atendimentos",
        "titleKey": "sec.bookings.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org_booking_list",
            "type": "organism",
            "organismName": "BookingList",
            "titleKey": "org.booking.list.title",
            "purpose": "Listar agendamentos atribuídos ao operador para seleção e execução",
            "userActions": [],
            "requiredEntities": [
              "ServiceBooking",
              "Operator"
            ],
            "readsFields": [
              "serviceBookingId",
              "customerName",
              "bookingDate",
              "bookingTime",
              "status",
              "notes"
            ],
            "writesFields": [],
            "rulesApplied": [
              "operatorSeesOnlyAssignedShiftBookings"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int_booking_query",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intention.bookingQuery.title",
                "source": "bind_query_bookings",
                "emptyKey": "section.bookings.empty",
                "stateKey": "ui.serviceExecution.status",
                "fields": [],
                "columns": [
                  {
                    "id": "col_customer_name",
                    "field": "customerName",
                    "labelKey": "column.customerName",
                    "order": 10,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_booking_date",
                    "field": "bookingDate",
                    "labelKey": "column.bookingDate",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "format": "date"
                  },
                  {
                    "id": "col_booking_time",
                    "field": "bookingTime",
                    "labelKey": "column.bookingTime",
                    "order": 30,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_status",
                    "field": "status",
                    "labelKey": "column.status",
                    "order": 40,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_notes",
                    "field": "notes",
                    "labelKey": "column.notes",
                    "order": 50,
                    "required": false,
                    "inputType": "text"
                  }
                ],
                "filters": [
                  {
                    "id": "filter_status",
                    "field": "status",
                    "labelKey": "filter.status",
                    "order": 10,
                    "required": false,
                    "inputType": "select"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int_workflow_status",
                "intent": "workflowStatus",
                "order": 20,
                "titleKey": "intention.workflowStatus.title",
                "emptyKey": "section.bookings.empty",
                "stateKey": "ui.serviceExecution.status",
                "fields": [
                  {
                    "id": "field_wf_booking_id",
                    "field": "serviceBookingId",
                    "labelKey": "field.serviceBookingId",
                    "order": 10,
                    "required": false,
                    "inputType": "hidden",
                    "source": "selectedEntity"
                  },
                  {
                    "id": "field_wf_status",
                    "field": "status",
                    "labelKey": "column.status",
                    "order": 20,
                    "required": false,
                    "inputType": "readonly"
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
      },
      {
        "id": "sec_start_service",
        "type": "section",
        "sectionName": "Iniciar atendimento",
        "titleKey": "sec.start.service.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org_start_service",
            "type": "organism",
            "organismName": "StartServiceExecution",
            "titleKey": "org.start.service.title",
            "purpose": "Iniciar atendimento do serviço agendado",
            "userActions": [
              "startServiceExecution"
            ],
            "requiredEntities": [
              "ServiceBooking",
              "Operator"
            ],
            "readsFields": [
              "serviceBookingId",
              "status"
            ],
            "writesFields": [
              "status",
              "updatedAt"
            ],
            "rulesApplied": [
              "operatorSeesOnlyAssignedShiftBookings",
              "onlyAssignedOperatorCanComplete"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int_start_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.startForm.title",
                "source": "bind_start_service",
                "action": "startServiceExecution",
                "submitAction": "startServiceExecution",
                "emptyKey": "section.start.empty",
                "stateKey": "ui.serviceExecution.action.startServiceExecution.status",
                "fields": [
                  {
                    "id": "field_start_booking_id",
                    "field": "serviceBookingId",
                    "labelKey": "field.serviceBookingId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "source": "selectedEntity",
                    "stateKey": "ui.serviceExecution.input.startServiceExecution.serviceBookingId"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_start_service",
                    "action": "startServiceExecution",
                    "labelKey": "action.startServiceExecution",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "startServiceExecution"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec_complete_service",
        "type": "section",
        "sectionName": "Concluir serviço",
        "titleKey": "sec.complete.service.title",
        "mode": "edit",
        "order": 30,
        "organisms": [
          {
            "id": "org_complete_service",
            "type": "organism",
            "organismName": "CompleteServiceExecution",
            "titleKey": "org.complete.service.title",
            "purpose": "Concluir serviço agendado",
            "userActions": [
              "completeServiceExecution"
            ],
            "requiredEntities": [
              "ServiceBooking"
            ],
            "readsFields": [
              "serviceBookingId",
              "status"
            ],
            "writesFields": [
              "status",
              "completedAt"
            ],
            "rulesApplied": [
              "onlyAssignedOperatorCanComplete",
              "paymentInStoreOnly"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int_complete_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.completeForm.title",
                "source": "bind_complete_service",
                "action": "completeServiceExecution",
                "submitAction": "completeServiceExecution",
                "emptyKey": "section.complete.empty",
                "stateKey": "ui.serviceExecution.action.completeServiceExecution.status",
                "fields": [
                  {
                    "id": "field_complete_booking_id",
                    "field": "serviceBookingId",
                    "labelKey": "field.serviceBookingId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "source": "selectedEntity",
                    "stateKey": "ui.serviceExecution.input.completeServiceExecution.serviceBookingId"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_complete_service",
                    "action": "completeServiceExecution",
                    "labelKey": "action.completeServiceExecution",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "completeServiceExecution"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec_review",
        "type": "section",
        "sectionName": "Resumo da execução",
        "titleKey": "sec.review.title",
        "mode": "view",
        "order": 40,
        "organisms": [
          {
            "id": "org_review",
            "type": "organism",
            "organismName": "ExecutionReview",
            "titleKey": "org.review.title",
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
              "status",
              "updatedAt",
              "completedAt"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "int_review_summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "intention.review.title",
                "emptyKey": "section.review.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "col_review_customer",
                    "field": "customerName",
                    "labelKey": "column.customerName",
                    "order": 10,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_review_date",
                    "field": "bookingDate",
                    "labelKey": "column.bookingDate",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "format": "date"
                  },
                  {
                    "id": "col_review_time",
                    "field": "bookingTime",
                    "labelKey": "column.bookingTime",
                    "order": 30,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_review_status",
                    "field": "status",
                    "labelKey": "column.status",
                    "order": 40,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_review_updated",
                    "field": "updatedAt",
                    "labelKey": "column.updatedAt",
                    "order": 50,
                    "required": false,
                    "inputType": "datetime",
                    "format": "datetime"
                  },
                  {
                    "id": "col_review_completed",
                    "field": "completedAt",
                    "labelKey": "column.completedAt",
                    "order": 60,
                    "required": false,
                    "inputType": "datetime",
                    "format": "datetime"
                  }
                ],
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
      "id": "bind_query_bookings",
      "source": "query",
      "entity": "ServiceBooking",
      "description": "Lista agendamentos de serviço atribuídos ao operador no turno atual."
    },
    {
      "id": "bind_start_service",
      "source": "command",
      "entity": "ServiceBooking",
      "command": "startServiceExecution",
      "description": "Inicia o atendimento de um agendamento confirmado.",
      "stateKey": "ui.serviceExecution.output.startServiceExecution",
      "inputStateKeys": [
        "ui.serviceExecution.input.startServiceExecution.serviceBookingId"
      ]
    },
    {
      "id": "bind_complete_service",
      "source": "command",
      "entity": "ServiceBooking",
      "command": "completeServiceExecution",
      "description": "Conclui o serviço de um agendamento em andamento.",
      "stateKey": "ui.serviceExecution.output.completeServiceExecution",
      "inputStateKeys": [
        "ui.serviceExecution.input.completeServiceExecution.serviceBookingId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "serviceExecution__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/serviceExecution.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/serviceExecution.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/serviceExecution.defs.ts",
      "_102049_/l2/petShop/web/shared/serviceExecution.ts",
      "_102049_/l2/petShop/web/contracts/serviceExecution.defs.ts",
      "_102049_/l2/petShop/web/contracts/serviceExecution.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "serviceExecution__l2_shared"
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
