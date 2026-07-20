/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/reservationManagement.defs.ts" enhancement="_blank"/>

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
      "id": "sec-reservation-queue",
      "type": "section",
      "sectionName": "reservationList",
      "titleKey": "section.reservationList.title",
      "mode": "view",
      "order": 1,
      "organisms": [
        {
          "id": "org-reservation-surface",
          "type": "organism",
          "organismName": "reservationQueueSurface",
          "titleKey": "reservation.queue.title",
          "purpose": "Fila operacional de reservas para localizar cliente, confirmar/cancelar e receber pagamento na retirada",
          "userActions": [
            "browseReservationsQuery",
            "updateReservationStatusCommand",
            "processPaymentCommand"
          ],
          "requiredEntities": [
            "Reservation",
            "Payment"
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
          "writesFields": [
            "newStatus",
            "cancellationReason",
            "paymentId",
            "method"
          ],
          "rulesApplied": [
            "field-triage-context-ids",
            "contextual-transitions",
            "recognition-over-recall",
            "read-before-write"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-browse-reservations",
              "intent": "queryList",
              "stateKey": "ui.reservationManagement.data.browseReservationsQuery",
              "action": "browseReservationsQuery",
              "order": 1
            },
            {
              "id": "int-update-status",
              "intent": "commandForm",
              "submitAction": "updateReservationStatusCommand",
              "order": 2
            },
            {
              "id": "int-process-payment",
              "intent": "commandForm",
              "submitAction": "processPaymentCommand",
              "order": 3
            }
          ]
        }
      ]
    }
  ],
  "templateId": "goal_first",
  "visualStyle": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status",
  "layout": {
    "id": "reservationManagement-page21",
    "type": "page",
    "sections": [
      {
        "id": "sec-reservation-queue",
        "type": "section",
        "sectionName": "reservationList",
        "titleKey": "section.reservationList.title",
        "mode": "view",
        "order": 1,
        "organisms": [
          {
            "id": "org-reservation-surface",
            "type": "organism",
            "organismName": "reservationQueueSurface",
            "titleKey": "reservation.queue.title",
            "purpose": "Fila operacional de reservas para localizar cliente, confirmar/cancelar e receber pagamento na retirada",
            "userActions": [
              "browseReservationsQuery",
              "updateReservationStatusCommand",
              "processPaymentCommand"
            ],
            "requiredEntities": [
              "Reservation",
              "Payment"
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
            "writesFields": [
              "newStatus",
              "cancellationReason",
              "paymentId",
              "method"
            ],
            "rulesApplied": [
              "field-triage-context-ids",
              "contextual-transitions",
              "recognition-over-recall",
              "read-before-write"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-browse-reservations",
                "intent": "queryList",
                "order": 1,
                "titleKey": "reservation.list.title",
                "source": "ui.reservationManagement.data.browseReservationsQuery",
                "binding": "ui.reservationManagement.data.browseReservationsQuery",
                "action": "browseReservationsQuery",
                "emptyKey": "reservation.list.empty",
                "displayHint": "master-detail",
                "stateKey": "ui.reservationManagement.data.browseReservationsQuery",
                "fields": [],
                "columns": [
                  {
                    "id": "col-customerName",
                    "field": "customerName",
                    "labelKey": "field.customerName",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col-customerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone",
                    "order": 2,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 3,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col-expiresAt",
                    "field": "expiresAt",
                    "labelKey": "field.expiresAt",
                    "order": 4,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt",
                    "order": 5,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  },
                  {
                    "id": "col-reservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 6,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-searchTerm",
                    "field": "searchTerm",
                    "labelKey": "filter.searchTerm",
                    "order": 1,
                    "required": false,
                    "inputType": "search",
                    "stateKey": "ui.reservationManagement.input.browseReservationsQuery.searchTerm"
                  },
                  {
                    "id": "flt-statusFilter",
                    "field": "statusFilter",
                    "labelKey": "filter.statusFilter",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.reservationManagement.input.browseReservationsQuery.statusFilter"
                  }
                ],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "row-confirm",
                    "action": "updateReservationStatusCommand",
                    "labelKey": "action.confirmReservation",
                    "order": 1,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "updateReservationStatusCommand"
                  },
                  {
                    "id": "row-cancel",
                    "action": "updateReservationStatusCommand",
                    "labelKey": "action.cancelReservation",
                    "order": 2,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "updateReservationStatusCommand"
                  },
                  {
                    "id": "row-pay",
                    "action": "processPaymentCommand",
                    "labelKey": "action.processPayment",
                    "order": 3,
                    "displayHint": "inline-row-command",
                    "actionKey": "processPaymentCommand"
                  }
                ],
                "actions": []
              },
              {
                "id": "int-update-status",
                "intent": "commandForm",
                "order": 2,
                "titleKey": "reservation.transition.title",
                "submitAction": "updateReservationStatusCommand",
                "displayHint": "contextual-transition-actions",
                "fields": [
                  {
                    "id": "fld-cancel-reason",
                    "field": "cancellationReason",
                    "labelKey": "field.cancellationReason",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason"
                  },
                  {
                    "id": "fld-payment-id-ref",
                    "field": "paymentId",
                    "labelKey": "field.paymentId",
                    "order": 2,
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
                    "id": "act-confirm",
                    "action": "updateReservationStatusCommand",
                    "labelKey": "action.confirmReservation",
                    "order": 1,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "updateReservationStatusCommand"
                  },
                  {
                    "id": "act-cancel",
                    "action": "updateReservationStatusCommand",
                    "labelKey": "action.cancelReservation",
                    "order": 2,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "updateReservationStatusCommand"
                  },
                  {
                    "id": "act-fulfill",
                    "action": "updateReservationStatusCommand",
                    "labelKey": "action.fulfillReservation",
                    "order": 3,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "updateReservationStatusCommand"
                  }
                ]
              },
              {
                "id": "int-process-payment",
                "intent": "commandForm",
                "order": 3,
                "titleKey": "reservation.payment.title",
                "submitAction": "processPaymentCommand",
                "displayHint": "inline-row-command",
                "fields": [
                  {
                    "id": "fld-payment-method",
                    "field": "method",
                    "labelKey": "field.method",
                    "order": 1,
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
                    "id": "act-process-payment",
                    "action": "processPaymentCommand",
                    "labelKey": "action.processPayment",
                    "order": 1,
                    "displayHint": "primary-button",
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
      "id": "bind-browse-reservations",
      "source": "browseReservationsQuery",
      "entity": "Reservation",
      "description": "Lista de reservas para a fila operacional",
      "stateKey": "ui.reservationManagement.data.browseReservationsQuery",
      "inputStateKeys": [
        "ui.reservationManagement.input.browseReservationsQuery.searchTerm",
        "ui.reservationManagement.input.browseReservationsQuery.statusFilter",
        "ui.reservationManagement.input.browseReservationsQuery.page",
        "ui.reservationManagement.input.browseReservationsQuery.pageSize"
      ]
    },
    {
      "id": "bind-update-status",
      "source": "updateReservationStatusCommand",
      "entity": "Reservation",
      "command": "updateReservationStatusCommand",
      "description": "Transições contextuais de status da reserva selecionada",
      "stateKey": "ui.reservationManagement.output.updateReservationStatusCommand",
      "inputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatusCommand.reservationId",
        "ui.reservationManagement.input.updateReservationStatusCommand.newStatus",
        "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason",
        "ui.reservationManagement.input.updateReservationStatusCommand.paymentId"
      ]
    },
    {
      "id": "bind-process-payment",
      "source": "processPaymentCommand",
      "entity": "Payment",
      "command": "processPaymentCommand",
      "description": "Pagamento presencial na retirada da reserva selecionada",
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
    "id": "reservationManagement__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page21/reservationManagement.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page21/reservationManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/reservationManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "reservationManagement__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
