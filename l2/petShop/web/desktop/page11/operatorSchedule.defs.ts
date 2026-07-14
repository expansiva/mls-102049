/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/operatorSchedule.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "operatorSchedule",
  "pageName": "Agenda de serviços do turno",
  "baseClassName": "PetShopOperatorScheduleBase",
  "actor": "operador",
  "purpose": "Executar Agenda de serviços do turno.",
  "capabilities": [
    "viewOperatorSchedule",
    "viewServiceBookingDetails"
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
    "workspaceId": "operatorSchedule",
    "workspaceKind": "operation",
    "actor": "operador",
    "entity": "ServiceBooking",
    "owners": [
      {
        "kind": "operation",
        "id": "viewOperatorSchedule",
        "defPath": "_102049_/l4/operations/viewOperatorSchedule.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewServiceBookingDetails",
        "defPath": "_102049_/l4/operations/viewServiceBookingDetails.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewOperatorSchedule",
          "commandName": "viewOperatorSchedule",
          "steps": [
            "O operador acessa sua agenda de serviços.",
            "O sistema filtra os agendamentos atribuídos ao operador autenticado e com status confirmado.",
            "O sistema retorna a lista ordenada por data e horário, exibindo tipo de serviço, dados do cliente e observações."
          ]
        },
        {
          "operationId": "viewServiceBookingDetails",
          "commandName": "viewServiceBookingDetails",
          "steps": [
            "O operador seleciona um agendamento da sua agenda de turno.",
            "O sistema recupera os detalhes do agendamento verificando que pertence ao turno do operador.",
            "O sistema apresenta tipo de serviço, dados do cliente, data e horário, status, observações e informações de pagamento presencial."
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "scheduleSection",
      "type": "section",
      "sectionName": "Agenda de serviços do turno",
      "titleKey": "section.schedule.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "scheduleMetrics",
          "type": "organism",
          "organismName": "ScheduleMetrics",
          "titleKey": "scheduleMetrics.title",
          "purpose": "Exibir resumo da agenda do turno com contadores por status",
          "userActions": [
            "viewOperatorSchedule"
          ],
          "requiredEntities": [
            "ServiceBooking",
            "Service"
          ],
          "readsFields": [
            "status",
            "bookingDate"
          ],
          "writesFields": [],
          "rulesApplied": [
            "operatorSeesOnlyAssignedShiftBookings",
            "operatorScheduleShowsConfirmedOnly"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "scheduleSummary",
              "intent": "summary",
              "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule",
              "order": 10
            }
          ]
        },
        {
          "id": "scheduleList",
          "type": "organism",
          "organismName": "ScheduleList",
          "titleKey": "scheduleList.title",
          "purpose": "Listar agendamentos confirmados do turno do operador ordenados por data e horário",
          "userActions": [
            "viewOperatorSchedule"
          ],
          "requiredEntities": [
            "ServiceBooking",
            "Service"
          ],
          "readsFields": [
            "serviceBookingId",
            "serviceId",
            "customerName",
            "customerPhone",
            "bookingDate",
            "bookingTime",
            "status",
            "notes"
          ],
          "writesFields": [],
          "rulesApplied": [
            "operatorSeesOnlyAssignedShiftBookings",
            "operatorScheduleShowsConfirmedOnly"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "querySchedule",
              "intent": "queryList",
              "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule",
              "order": 10
            }
          ]
        },
        {
          "id": "bookingDetails",
          "type": "organism",
          "organismName": "BookingDetails",
          "titleKey": "bookingDetails.title",
          "purpose": "Exibir detalhes completos do agendamento selecionado incluindo informações de pagamento presencial",
          "userActions": [
            "viewServiceBookingDetails"
          ],
          "requiredEntities": [
            "ServiceBooking",
            "Service"
          ],
          "readsFields": [
            "serviceBookingId",
            "serviceId",
            "operatorId",
            "shiftId",
            "customerName",
            "customerPhone",
            "bookingDate",
            "bookingTime",
            "status",
            "notes",
            "completedAt",
            "cancelledAt",
            "cancelReason",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "operatorSeesOnlyAssignedShiftBookings",
            "paymentInStoreOnly"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "detailsSummary",
              "intent": "summary",
              "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "paymentContextSection",
      "type": "section",
      "sectionName": "Informações de pagamento",
      "titleKey": "section.payment.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "paymentContext",
          "type": "organism",
          "organismName": "PaymentContext",
          "titleKey": "paymentContext.title",
          "purpose": "Exibir informação de pagamento presencial na loja para o agendamento selecionado",
          "userActions": [
            "viewServiceBookingDetails"
          ],
          "requiredEntities": [
            "ServiceBooking"
          ],
          "readsFields": [
            "status"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentInStoreOnly"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "paymentInfo",
              "intent": "summary",
              "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "status_overview",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "operatorSchedule-statusOverview-page11",
    "type": "page",
    "sections": [
      {
        "id": "scheduleSection",
        "type": "section",
        "sectionName": "Agenda de serviços do turno",
        "titleKey": "section.schedule.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "scheduleMetrics",
            "type": "organism",
            "organismName": "ScheduleMetrics",
            "titleKey": "scheduleMetrics.title",
            "purpose": "Exibir resumo da agenda do turno com contadores por status",
            "userActions": [
              "viewOperatorSchedule"
            ],
            "requiredEntities": [
              "ServiceBooking",
              "Service"
            ],
            "readsFields": [
              "status",
              "bookingDate"
            ],
            "writesFields": [],
            "rulesApplied": [
              "operatorSeesOnlyAssignedShiftBookings",
              "operatorScheduleShowsConfirmedOnly"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "scheduleSummary",
                "intent": "summary",
                "order": 10,
                "titleKey": "organism.metrics.title",
                "source": "viewOperatorSchedule",
                "binding": "bind_viewOperatorSchedule",
                "emptyKey": "organism.metrics.empty",
                "displayHint": "summaryCards",
                "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule",
                "fields": [
                  {
                    "id": "metricConfirmed",
                    "field": "status",
                    "labelKey": "metric.confirmed",
                    "order": 10,
                    "required": false,
                    "inputType": "readonly",
                    "format": "countByStatus:confirmed",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "metricInProgress",
                    "field": "status",
                    "labelKey": "metric.inProgress",
                    "order": 20,
                    "required": false,
                    "inputType": "readonly",
                    "format": "countByStatus:inProgress",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "metricCompleted",
                    "field": "status",
                    "labelKey": "metric.completed",
                    "order": 30,
                    "required": false,
                    "inputType": "readonly",
                    "format": "countByStatus:completed",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "metricTotal",
                    "field": "serviceBookingId",
                    "labelKey": "metric.total",
                    "order": 40,
                    "required": false,
                    "inputType": "readonly",
                    "format": "count",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          },
          {
            "id": "scheduleList",
            "type": "organism",
            "organismName": "ScheduleList",
            "titleKey": "scheduleList.title",
            "purpose": "Listar agendamentos confirmados do turno do operador ordenados por data e horário",
            "userActions": [
              "viewOperatorSchedule"
            ],
            "requiredEntities": [
              "ServiceBooking",
              "Service"
            ],
            "readsFields": [
              "serviceBookingId",
              "serviceId",
              "customerName",
              "customerPhone",
              "bookingDate",
              "bookingTime",
              "status",
              "notes"
            ],
            "writesFields": [],
            "rulesApplied": [
              "operatorSeesOnlyAssignedShiftBookings",
              "operatorScheduleShowsConfirmedOnly"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "querySchedule",
                "intent": "queryList",
                "order": 10,
                "titleKey": "organism.list.title",
                "source": "viewOperatorSchedule",
                "binding": "bind_viewOperatorSchedule",
                "emptyKey": "organism.list.empty",
                "displayHint": "statusGroupedList",
                "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule",
                "fields": [],
                "columns": [
                  {
                    "id": "colCustomerName",
                    "field": "customerName",
                    "labelKey": "column.customerName",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "colCustomerPhone",
                    "field": "customerPhone",
                    "labelKey": "column.customerPhone",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "colBookingDate",
                    "field": "bookingDate",
                    "labelKey": "column.bookingDate",
                    "order": 30,
                    "required": true,
                    "inputType": "date",
                    "format": "date",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "colBookingTime",
                    "field": "bookingTime",
                    "labelKey": "column.bookingTime",
                    "order": 40,
                    "required": true,
                    "inputType": "text",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "colStatus",
                    "field": "status",
                    "labelKey": "column.status",
                    "order": 50,
                    "required": true,
                    "inputType": "text",
                    "format": "statusBadge",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "colNotes",
                    "field": "notes",
                    "labelKey": "column.notes",
                    "order": 60,
                    "required": false,
                    "inputType": "text",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  }
                ],
                "filters": [
                  {
                    "id": "filterStatus",
                    "field": "status",
                    "labelKey": "filter.status",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  },
                  {
                    "id": "filterBookingDate",
                    "field": "bookingDate",
                    "labelKey": "filter.bookingDate",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "format": "date",
                    "source": "viewOperatorSchedule",
                    "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
                  }
                ],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "rowViewDetails",
                    "action": "viewServiceBookingDetails",
                    "labelKey": "action.viewDetails",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "viewServiceBookingDetails"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "bookingDetails",
            "type": "organism",
            "organismName": "BookingDetails",
            "titleKey": "bookingDetails.title",
            "purpose": "Exibir detalhes completos do agendamento selecionado incluindo informações de pagamento presencial",
            "userActions": [
              "viewServiceBookingDetails"
            ],
            "requiredEntities": [
              "ServiceBooking",
              "Service"
            ],
            "readsFields": [
              "serviceBookingId",
              "serviceId",
              "operatorId",
              "shiftId",
              "customerName",
              "customerPhone",
              "bookingDate",
              "bookingTime",
              "status",
              "notes",
              "completedAt",
              "cancelledAt",
              "cancelReason",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "operatorSeesOnlyAssignedShiftBookings",
              "paymentInStoreOnly"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "detailsSummary",
                "intent": "summary",
                "order": 10,
                "titleKey": "organism.details.title",
                "source": "viewServiceBookingDetails",
                "binding": "bind_viewServiceBookingDetails",
                "emptyKey": "organism.details.empty",
                "displayHint": "detailPanel",
                "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails",
                "fields": [
                  {
                    "id": "detailServiceBookingId",
                    "field": "serviceBookingId",
                    "labelKey": "field.serviceBookingId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId"
                  },
                  {
                    "id": "detailServiceId",
                    "field": "serviceId",
                    "labelKey": "field.serviceId",
                    "order": 20,
                    "required": true,
                    "inputType": "readonly",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailCustomerName",
                    "field": "customerName",
                    "labelKey": "field.customerName",
                    "order": 30,
                    "required": true,
                    "inputType": "readonly",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailCustomerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone",
                    "order": 40,
                    "required": true,
                    "inputType": "readonly",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailBookingDate",
                    "field": "bookingDate",
                    "labelKey": "field.bookingDate",
                    "order": 50,
                    "required": true,
                    "inputType": "readonly",
                    "format": "date",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailBookingTime",
                    "field": "bookingTime",
                    "labelKey": "field.bookingTime",
                    "order": 60,
                    "required": true,
                    "inputType": "readonly",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailStatus",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 70,
                    "required": true,
                    "inputType": "readonly",
                    "format": "statusBadge",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailNotes",
                    "field": "notes",
                    "labelKey": "field.notes",
                    "order": 80,
                    "required": false,
                    "inputType": "readonly",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailCompletedAt",
                    "field": "completedAt",
                    "labelKey": "field.completedAt",
                    "order": 90,
                    "required": false,
                    "inputType": "readonly",
                    "format": "datetime",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailCancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "field.cancelledAt",
                    "order": 100,
                    "required": false,
                    "inputType": "readonly",
                    "format": "datetime",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailCancelReason",
                    "field": "cancelReason",
                    "labelKey": "field.cancelReason",
                    "order": 110,
                    "required": false,
                    "inputType": "readonly",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailCreatedAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt",
                    "order": 120,
                    "required": true,
                    "inputType": "readonly",
                    "format": "datetime",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailUpdatedAt",
                    "field": "updatedAt",
                    "labelKey": "field.updatedAt",
                    "order": 130,
                    "required": true,
                    "inputType": "readonly",
                    "format": "datetime",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
                  },
                  {
                    "id": "detailPaymentInfo",
                    "field": "notes",
                    "labelKey": "field.paymentInfo",
                    "order": 140,
                    "required": false,
                    "inputType": "readonly",
                    "format": "infoNote",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
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
        "id": "paymentContextSection",
        "type": "section",
        "sectionName": "Informações de pagamento",
        "titleKey": "section.payment.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "paymentContext",
            "type": "organism",
            "organismName": "PaymentContext",
            "titleKey": "paymentContext.title",
            "purpose": "Exibir informação de pagamento presencial na loja para o agendamento selecionado",
            "userActions": [
              "viewServiceBookingDetails"
            ],
            "requiredEntities": [
              "ServiceBooking"
            ],
            "readsFields": [
              "status"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentInStoreOnly"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "paymentInfo",
                "intent": "summary",
                "order": 10,
                "titleKey": "organism.payment.title",
                "source": "viewServiceBookingDetails",
                "binding": "bind_viewServiceBookingDetails",
                "emptyKey": "organism.payment.empty",
                "displayHint": "infoBanner",
                "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails",
                "fields": [
                  {
                    "id": "paymentMethod",
                    "field": "status",
                    "labelKey": "field.paymentMethod",
                    "order": 10,
                    "required": false,
                    "inputType": "readonly",
                    "format": "infoNote",
                    "source": "viewServiceBookingDetails",
                    "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
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
      "id": "bind_viewOperatorSchedule",
      "source": "petShop.viewOperatorSchedule.viewOperatorSchedule",
      "entity": "ServiceBooking",
      "command": "viewOperatorSchedule",
      "description": "Consulta a agenda de serviços do turno do operador autenticado, retornando agendamentos confirmados ordenados por data e horário.",
      "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule",
      "inputStateKeys": []
    },
    {
      "id": "bind_viewServiceBookingDetails",
      "source": "petShop.viewServiceBookingDetails.viewServiceBookingDetails",
      "entity": "ServiceBooking",
      "command": "viewServiceBookingDetails",
      "description": "Recupera os detalhes completos de um agendamento selecionado, verificando que pertence ao turno do operador.",
      "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails",
      "inputStateKeys": [
        "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "operatorSchedule__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/operatorSchedule.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/operatorSchedule.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/operatorSchedule.defs.ts",
      "_102049_/l2/petShop/web/shared/operatorSchedule.ts",
      "_102049_/l2/petShop/web/contracts/operatorSchedule.defs.ts",
      "_102049_/l2/petShop/web/contracts/operatorSchedule.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "operatorSchedule__l2_shared"
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
