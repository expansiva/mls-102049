/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/reservationManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "reservationManagement",
  "pageName": "Gestão de reservas",
  "baseClassName": "PetShopReservationManagementBase",
  "actor": "atendente",
  "purpose": "Executar Gestão de reservas.",
  "capabilities": [
    "reservationLifecycle",
    "browseReservations"
  ],
  "flowRefs": {
    "experienceFlows": [
      "reservationLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "reservationLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "reservationManagement",
    "workspaceKind": "workflow",
    "workflowId": "reservationLifecycle",
    "actor": "atendente",
    "entity": "Reservation",
    "owners": [
      {
        "kind": "workflow",
        "id": "reservationLifecycle",
        "defPath": "_102049_/l4/petShop/workflows/reservationLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseReservations",
        "defPath": "_102049_/l4/petShop/operations/browseReservations.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateReservationStatus",
        "defPath": "_102049_/l4/petShop/operations/updateReservationStatus.defs.ts"
      },
      {
        "kind": "operation",
        "id": "processPayment",
        "defPath": "_102049_/l4/petShop/operations/processPayment.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O atendente visualiza as reservas pendentes recebidas dos clientes para saber quais precisam ser confirmadas.",
        "O atendente revisa os itens e os dados de contato do cliente e confirma a reserva, sinalizando que a loja aceitou e vai preparar os produtos.",
        "O atendente separa fisicamente os produtos reservados e verifica a disponibilidade real no estoque.",
        "O cliente chega à loja para retirada e o atendente localiza a reserva pelo número ou pelo nome e telefone do cliente.",
        "O atendente revisa os itens com o cliente, calcula o valor total e processa o pagamento presencial, marcando a reserva como paga e entregue."
      ],
      "operations": [
        {
          "operationId": "browseReservations",
          "commandName": "browseReservations",
          "steps": [
            "O atendente abre a tela de reservas e visualiza a lista de reservas pendentes ordenadas pela data de criação",
            "O atendente pode filtrar por status (pendente, confirmada, atendida, cancelada) para focar em um grupo específico",
            "O atendente digita um termo de busca (nome, telefone ou número da reserva) para localizar rapidamente um cliente que chegou à loja",
            "O sistema retorna as reservas correspondentes com dados do cliente, status e prazo de validade"
          ]
        },
        {
          "operationId": "updateReservationStatus",
          "commandName": "updateReservationStatus",
          "steps": [
            "O atendente localiza a reserva pendente na lista de reservas.",
            "O atendente revisa os itens e dados do cliente da reserva.",
            "O atendente escolhe o novo status (confirmada, atendida ou cancelada).",
            "Se cancelando, o atendente registra o motivo do cancelamento.",
            "Se atendendo, o atendente associa o pagamento presencial realizado.",
            "O sistema valida o status permitido e atualiza a reserva com os timestamps correspondentes."
          ]
        },
        {
          "operationId": "processPayment",
          "commandName": "processPayment",
          "steps": [
            "O atendente seleciona a reserva do cliente que chegou para retirada",
            "O sistema calcula o valor total a partir dos preços dos produtos e das quantidades reservadas nos itens da reserva",
            "O atendente informa o método de pagamento escolhido pelo cliente (dinheiro, cartão de crédito, cartão de débito ou pix)",
            "O sistema cria o registro de pagamento com status 'posted' e marca a reserva associada como paga e entregue, encerrando o ciclo da reserva"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "reservationListSection",
      "type": "section",
      "sectionName": "reservationList",
      "titleKey": "section.reservationList.title",
      "mode": "view",
      "order": 1,
      "organisms": [
        {
          "id": "reservationKanbanBoard",
          "type": "kanbanBoard",
          "organismName": "reservationKanbanBoard",
          "titleKey": "organism.reservationKanbanBoard.title",
          "purpose": "Visualizar reservas por status e atuar rapidamente",
          "userActions": [
            "browseReservationsQuery"
          ],
          "requiredEntities": [
            "Reservation"
          ],
          "readsFields": [
            "reservationId",
            "customerName",
            "customerPhone",
            "status",
            "expiresAt",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Board lanes map to Reservation.status lifecycle states"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "reservationKanbanIntent",
              "intent": "kanbanBoard",
              "stateKey": "ui.reservationManagement.data.browseReservationsQuery",
              "order": 1
            }
          ]
        },
        {
          "id": "updateReservationStatusPanel",
          "type": "formPanel",
          "organismName": "updateReservationStatusPanel",
          "titleKey": "organism.updateReservationStatusPanel.title",
          "purpose": "Confirmar, atender ou cancelar reserva selecionada",
          "userActions": [
            "updateReservationStatusCommand"
          ],
          "requiredEntities": [
            "Reservation"
          ],
          "readsFields": [
            "reservationId",
            "status",
            "customerName",
            "customerPhone",
            "expiresAt"
          ],
          "writesFields": [
            "status",
            "cancellationReason",
            "paymentId"
          ],
          "rulesApplied": [
            "reservationId é derivado da seleção",
            "cancellationReason somente se cancelar",
            "paymentId somente se atender"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "updateReservationStatusForm",
              "intent": "commandForm",
              "action": "updateReservationStatusCommand",
              "submitAction": "updateReservationStatusCommand",
              "order": 1
            }
          ]
        },
        {
          "id": "processPaymentPanel",
          "type": "formPanel",
          "organismName": "processPaymentPanel",
          "titleKey": "organism.processPaymentPanel.title",
          "purpose": "Registrar pagamento presencial da reserva selecionada",
          "userActions": [
            "processPaymentCommand"
          ],
          "requiredEntities": [
            "Payment",
            "Reservation"
          ],
          "readsFields": [
            "reservationId",
            "customerName",
            "status"
          ],
          "writesFields": [
            "method"
          ],
          "rulesApplied": [
            "reservationId é derivado da seleção"
          ],
          "order": 3,
          "intentionRefs": [
            {
              "id": "processPaymentForm",
              "intent": "commandForm",
              "action": "processPaymentCommand",
              "submitAction": "processPaymentCommand",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "kanban_pipeline",
  "visualStyle": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status",
  "layout": {
    "id": "reservationManagement.kanban_pipeline.page11",
    "type": "page",
    "sections": [
      {
        "id": "reservationListSection",
        "type": "section",
        "sectionName": "reservationList",
        "titleKey": "section.reservationList.title",
        "mode": "view",
        "order": 1,
        "organisms": [
          {
            "id": "reservationKanbanBoard",
            "type": "kanbanBoard",
            "organismName": "reservationKanbanBoard",
            "titleKey": "organism.reservationKanbanBoard.title",
            "purpose": "Visualizar reservas por status e atuar rapidamente",
            "userActions": [
              "browseReservationsQuery"
            ],
            "requiredEntities": [
              "Reservation"
            ],
            "readsFields": [
              "reservationId",
              "customerName",
              "customerPhone",
              "status",
              "expiresAt",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "Board lanes map to Reservation.status lifecycle states"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "reservationKanbanIntent",
                "intent": "kanbanBoard",
                "order": 1,
                "titleKey": "intent.reservationKanban.title",
                "source": "ui.reservationManagement.data.browseReservationsQuery",
                "binding": "browseReservationsQuery",
                "emptyKey": "empty.reservations",
                "fields": [],
                "columns": [
                  {
                    "id": "col.reservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col.customerName",
                    "field": "customerName",
                    "labelKey": "field.customerName",
                    "order": 2,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col.customerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone",
                    "order": 3,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col.status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col.expiresAt",
                    "field": "expiresAt",
                    "labelKey": "field.expiresAt",
                    "order": 5,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.searchTerm",
                    "field": "searchTerm",
                    "labelKey": "filter.searchTerm",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.input.browseReservationsQuery.searchTerm"
                  },
                  {
                    "id": "filter.statusFilter",
                    "field": "statusFilter",
                    "labelKey": "filter.statusFilter",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.reservationManagement.input.browseReservationsQuery.statusFilter"
                  },
                  {
                    "id": "filter.page",
                    "field": "page",
                    "labelKey": "filter.page",
                    "order": 3,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.reservationManagement.input.browseReservationsQuery.page"
                  },
                  {
                    "id": "filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "filter.pageSize",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.reservationManagement.input.browseReservationsQuery.pageSize"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar.refresh",
                    "action": "browseReservationsQuery",
                    "labelKey": "action.refresh",
                    "order": 1,
                    "actionKey": "browseReservationsQuery"
                  }
                ],
                "rowActions": [
                  {
                    "id": "row.updateStatus",
                    "action": "updateReservationStatusCommand",
                    "labelKey": "action.updateStatus",
                    "order": 1,
                    "displayHint": "contextual",
                    "actionKey": "updateReservationStatusCommand"
                  },
                  {
                    "id": "row.processPayment",
                    "action": "processPaymentCommand",
                    "labelKey": "action.processPayment",
                    "order": 2,
                    "displayHint": "contextual",
                    "actionKey": "processPaymentCommand"
                  }
                ],
                "actions": [],
                "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
              }
            ]
          },
          {
            "id": "updateReservationStatusPanel",
            "type": "formPanel",
            "organismName": "updateReservationStatusPanel",
            "titleKey": "organism.updateReservationStatusPanel.title",
            "purpose": "Confirmar, atender ou cancelar reserva selecionada",
            "userActions": [
              "updateReservationStatusCommand"
            ],
            "requiredEntities": [
              "Reservation"
            ],
            "readsFields": [
              "reservationId",
              "status",
              "customerName",
              "customerPhone",
              "expiresAt"
            ],
            "writesFields": [
              "status",
              "cancellationReason",
              "paymentId"
            ],
            "rulesApplied": [
              "reservationId é derivado da seleção",
              "cancellationReason somente se cancelar",
              "paymentId somente se atender"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "updateReservationStatusForm",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "intent.updateReservationStatus.title",
                "action": "updateReservationStatusCommand",
                "submitAction": "updateReservationStatusCommand",
                "fields": [
                  {
                    "id": "field.reservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 1,
                    "required": true,
                    "inputType": "hidden",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.reservationId"
                  },
                  {
                    "id": "field.newStatus",
                    "field": "newStatus",
                    "labelKey": "field.newStatus",
                    "order": 2,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.newStatus"
                  },
                  {
                    "id": "field.cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "field.cancellationReason",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason"
                  },
                  {
                    "id": "field.paymentId",
                    "field": "paymentId",
                    "labelKey": "field.paymentId",
                    "order": 4,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.paymentId"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.submitUpdate",
                    "action": "updateReservationStatusCommand",
                    "labelKey": "action.confirmUpdate",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "updateReservationStatusCommand"
                  }
                ]
              }
            ]
          },
          {
            "id": "processPaymentPanel",
            "type": "formPanel",
            "organismName": "processPaymentPanel",
            "titleKey": "organism.processPaymentPanel.title",
            "purpose": "Registrar pagamento presencial da reserva selecionada",
            "userActions": [
              "processPaymentCommand"
            ],
            "requiredEntities": [
              "Payment",
              "Reservation"
            ],
            "readsFields": [
              "reservationId",
              "customerName",
              "status"
            ],
            "writesFields": [
              "method"
            ],
            "rulesApplied": [
              "reservationId é derivado da seleção"
            ],
            "order": 3,
            "intentions": [
              {
                "id": "processPaymentForm",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "intent.processPayment.title",
                "action": "processPaymentCommand",
                "submitAction": "processPaymentCommand",
                "fields": [
                  {
                    "id": "field.paymentReservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 1,
                    "required": true,
                    "inputType": "hidden",
                    "stateKey": "ui.reservationManagement.input.processPaymentCommand.reservationId"
                  },
                  {
                    "id": "field.method",
                    "field": "method",
                    "labelKey": "field.method",
                    "order": 2,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.reservationManagement.input.processPaymentCommand.method"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.submitPayment",
                    "action": "processPaymentCommand",
                    "labelKey": "action.receivePayment",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "processPaymentCommand"
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
      "id": "bind.browseReservationsQuery",
      "source": "state",
      "entity": "Reservation",
      "description": "Lista de reservas por status",
      "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
    },
    {
      "id": "bind.updateReservationStatusCommand",
      "source": "action",
      "command": "updateReservationStatusCommand",
      "description": "Atualização de status da reserva",
      "stateKey": "ui.reservationManagement.output.updateReservationStatusCommand",
      "inputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatusCommand.reservationId",
        "ui.reservationManagement.input.updateReservationStatusCommand.newStatus",
        "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason",
        "ui.reservationManagement.input.updateReservationStatusCommand.paymentId"
      ]
    },
    {
      "id": "bind.processPaymentCommand",
      "source": "action",
      "command": "processPaymentCommand",
      "description": "Processamento do pagamento presencial",
      "stateKey": "ui.reservationManagement.output.processPaymentCommand",
      "inputStateKeys": [
        "ui.reservationManagement.input.processPaymentCommand.reservationId",
        "ui.reservationManagement.input.processPaymentCommand.method"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "reservationManagement__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/reservationManagement.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/reservationManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/reservationManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "reservationManagement__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
