/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/myReservations.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "myReservations",
  "pageName": "Minhas Reservas",
  "baseClassName": "PetShopMyReservationsBase",
  "actor": "cliente",
  "purpose": "Executar Minhas Reservas.",
  "capabilities": [
    "reservationLifecycle",
    "viewMyReservations"
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
    "workspaceId": "myReservations",
    "workspaceKind": "workflow",
    "workflowId": "reservationLifecycle",
    "actor": "cliente",
    "entity": "Reservation",
    "owners": [
      {
        "kind": "workflow",
        "id": "reservationLifecycle",
        "defPath": "_102049_/l4/workflows/reservationLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createReservation",
        "defPath": "_102049_/l4/operations/createReservation.defs.ts"
      },
      {
        "kind": "operation",
        "id": "cancelReservation",
        "defPath": "_102049_/l4/operations/cancelReservation.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewMyReservations",
        "defPath": "_102049_/l4/operations/viewMyReservations.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O cliente seleciona produtos e confirma a reserva, que sai de rascunho e fica ativa com prazo de retirada de 24 horas.",
        "A loja separa os produtos físicos e marca a reserva como pronta para retirada.",
        "O cliente comparece à loja física dentro do prazo de validade para retirar os produtos.",
        "O cliente realiza o pagamento presencial no balcão da loja.",
        "A reserva é marcada como entregue e o cliente recebe os produtos, concluindo o ciclo."
      ],
      "operations": [
        {
          "operationId": "createReservation",
          "commandName": "createReservation",
          "steps": [
            "O cliente autenticado seleciona um ou mais produtos do catálogo informando as quantidades desejadas",
            "O sistema valida a disponibilidade de cada produto no catálogo",
            "O sistema cria a reserva com status 'active', define o prazo de expiração para 24 horas e cria os itens de reserva associados",
            "O cliente recebe a confirmação da reserva com o prazo de retirada na loja"
          ]
        },
        {
          "operationId": "cancelReservation",
          "commandName": "cancelReservation",
          "steps": [
            "O cliente seleciona uma reserva ativa na tela de detalhes",
            "O cliente aciona a opção de cancelar e opcionalmente informa um motivo",
            "O sistema valida que a reserva está em status 'active' ou 'ready' e pertence ao cliente autenticado",
            "O sistema atualiza o status da reserva para 'cancelled', registra cancelledAt e cancelReason",
            "O sistema restaura a disponibilidade de todos os produtos associados via ReservationItem"
          ]
        },
        {
          "operationId": "viewMyReservations",
          "commandName": "viewMyReservations",
          "steps": [
            "O cliente autenticado abre a tela de minhas reservas",
            "O sistema filtra as reservas pelo customerId da sessão ativa",
            "O sistema retorna a lista de reservas ordenadas pela data de criação mais recente",
            "O cliente visualiza o status, o prazo de expiração e os itens de cada reserva"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-board",
      "type": "section",
      "sectionName": "board",
      "titleKey": "section.board.title",
      "mode": "kanban",
      "order": 1,
      "organisms": [
        {
          "id": "org-kanban-board",
          "type": "organism",
          "organismName": "KanbanBoard",
          "titleKey": "section.board.title",
          "purpose": "Exibir reservas agrupadas por status em colunas kanban (ativas, prontas, entregues, expiradas, canceladas), permitindo identificação de gargalos e seleção de cartões para ações contextuais de cancelamento.",
          "userActions": [
            "viewMyReservations",
            "cancelReservation"
          ],
          "requiredEntities": [
            "Reservation"
          ],
          "readsFields": [
            "reservationId",
            "status",
            "expiresAt",
            "createdAt",
            "confirmedAt",
            "readyAt",
            "items"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Reservations grouped by status lane: active, ready, delivered, expired, cancelled",
            "Cards show reservationId, expiresAt and items summary",
            "Cancel rowAction available only for active and ready reservations",
            "Selecting a card sets reservationId via selectedEntity for the cancel form"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-board-query",
              "intent": "queryList",
              "stateKey": "ui.myReservations.data.viewMyReservations",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec-create-reservation",
      "type": "section",
      "sectionName": "createReservation",
      "titleKey": "section.create.title",
      "mode": "form",
      "order": 2,
      "organisms": [
        {
          "id": "org-create-form",
          "type": "organism",
          "organismName": "CreateReservationForm",
          "titleKey": "section.create.title",
          "purpose": "Permitir ao cliente selecionar produtos e quantidades para criar uma nova reserva ativa com prazo de retirada de 24 horas na loja.",
          "userActions": [
            "createReservation"
          ],
          "requiredEntities": [
            "Reservation",
            "ReservationItem",
            "Product"
          ],
          "readsFields": [
            "items"
          ],
          "writesFields": [
            "items"
          ],
          "rulesApplied": [
            "items is a composed repeatable sub-form (product + quantity) within a single submit",
            "Reservation created with status active and 24h expiry",
            "System validates product availability before creating",
            "After success, board refreshes and form clears"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-create-form",
              "intent": "commandForm",
              "stateKey": "ui.myReservations.action.createReservation.status",
              "submitAction": "createReservation",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec-cancel-reservation",
      "type": "section",
      "sectionName": "cancelReservation",
      "titleKey": "section.cancel.title",
      "mode": "form",
      "order": 3,
      "organisms": [
        {
          "id": "org-cancel-form",
          "type": "organism",
          "organismName": "CancelReservationForm",
          "titleKey": "section.cancel.title",
          "purpose": "Permitir ao cliente cancelar uma reserva previamente selecionada no quadro, informando opcionalmente o motivo do cancelamento.",
          "userActions": [
            "cancelReservation"
          ],
          "requiredEntities": [
            "Reservation"
          ],
          "readsFields": [
            "reservationId",
            "cancelReason"
          ],
          "writesFields": [
            "reservationId",
            "cancelReason"
          ],
          "rulesApplied": [
            "reservationId derived from selected entity, never manually typed",
            "Only active or ready reservations can be cancelled",
            "cancelReason is optional user input",
            "Products restored to catalog on cancellation",
            "After success, board refreshes and form and selection clear"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-cancel-form",
              "intent": "commandForm",
              "stateKey": "ui.myReservations.action.cancelReservation.status",
              "submitAction": "cancelReservation",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "kanban_pipeline",
  "visualStyle": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja",
  "msgKeys": [
    "action.cancelReservation.error",
    "action.cancelReservation.label",
    "action.cancelReservation.success",
    "action.createReservation.error",
    "action.createReservation.label",
    "action.createReservation.success",
    "column.confirmedAt.label",
    "column.createdAt.label",
    "column.expiresAt.label",
    "column.items.label",
    "column.readyAt.label",
    "column.reservationId.label",
    "column.status.label",
    "empty.board",
    "empty.cancel",
    "empty.create",
    "field.cancelReason.label",
    "field.items.label",
    "field.reservationId.label",
    "lane.active",
    "lane.cancelled",
    "lane.delivered",
    "lane.expired",
    "lane.ready",
    "rowAction.cancelReservation.label",
    "section.board.title",
    "section.cancel.title",
    "section.create.title",
    "toolbar.refresh.label"
  ],
  "layout": {
    "id": "kanban_pipeline_page11",
    "type": "page",
    "sections": [
      {
        "id": "sec-board",
        "type": "section",
        "sectionName": "board",
        "titleKey": "section.board.title",
        "mode": "kanban",
        "order": 1,
        "organisms": [
          {
            "id": "org-kanban-board",
            "type": "organism",
            "organismName": "KanbanBoard",
            "titleKey": "section.board.title",
            "purpose": "Exibir reservas agrupadas por status em colunas kanban (ativas, prontas, entregues, expiradas, canceladas), permitindo identificação de gargalos e seleção de cartões para ações contextuais de cancelamento.",
            "userActions": [
              "viewMyReservations",
              "cancelReservation"
            ],
            "requiredEntities": [
              "Reservation"
            ],
            "readsFields": [
              "reservationId",
              "status",
              "expiresAt",
              "createdAt",
              "confirmedAt",
              "readyAt",
              "items"
            ],
            "writesFields": [],
            "rulesApplied": [
              "Reservations grouped by status lane: active, ready, delivered, expired, cancelled",
              "Cards show reservationId, expiresAt and items summary",
              "Cancel rowAction available only for active and ready reservations",
              "Selecting a card sets reservationId via selectedEntity for the cancel form"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-board-query",
                "intent": "queryList",
                "order": 1,
                "titleKey": "section.board.title",
                "source": "ui.myReservations.data.viewMyReservations",
                "binding": "viewMyReservations",
                "emptyKey": "empty.board",
                "stateKey": "ui.myReservations.data.viewMyReservations",
                "fields": [],
                "columns": [
                  {
                    "id": "col-reservationId",
                    "field": "reservationId",
                    "labelKey": "column.reservationId.label",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "column.status.label",
                    "order": 2,
                    "required": false,
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-expiresAt",
                    "field": "expiresAt",
                    "labelKey": "column.expiresAt.label",
                    "order": 3,
                    "required": false,
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-createdAt",
                    "field": "createdAt",
                    "labelKey": "column.createdAt.label",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-confirmedAt",
                    "field": "confirmedAt",
                    "labelKey": "column.confirmedAt.label",
                    "order": 5,
                    "required": false,
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-readyAt",
                    "field": "readyAt",
                    "labelKey": "column.readyAt.label",
                    "order": 6,
                    "required": false,
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-items",
                    "field": "items",
                    "labelKey": "column.items.label",
                    "order": 7,
                    "required": false,
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  }
                ],
                "filters": [],
                "toolbar": [
                  {
                    "id": "toolbar-refresh",
                    "action": "viewMyReservations",
                    "labelKey": "toolbar.refresh.label",
                    "order": 1,
                    "displayHint": "secondary",
                    "actionKey": "viewMyReservations"
                  }
                ],
                "rowActions": [
                  {
                    "id": "row-cancel",
                    "action": "cancelReservation",
                    "labelKey": "rowAction.cancelReservation.label",
                    "order": 1,
                    "displayHint": "contextual",
                    "actionKey": "cancelReservation"
                  }
                ],
                "actions": []
              }
            ]
          }
        ]
      },
      {
        "id": "sec-create-reservation",
        "type": "section",
        "sectionName": "createReservation",
        "titleKey": "section.create.title",
        "mode": "form",
        "order": 2,
        "organisms": [
          {
            "id": "org-create-form",
            "type": "organism",
            "organismName": "CreateReservationForm",
            "titleKey": "section.create.title",
            "purpose": "Permitir ao cliente selecionar produtos e quantidades para criar uma nova reserva ativa com prazo de retirada de 24 horas na loja.",
            "userActions": [
              "createReservation"
            ],
            "requiredEntities": [
              "Reservation",
              "ReservationItem",
              "Product"
            ],
            "readsFields": [
              "items"
            ],
            "writesFields": [
              "items"
            ],
            "rulesApplied": [
              "items is a composed repeatable sub-form (product + quantity) within a single submit",
              "Reservation created with status active and 24h expiry",
              "System validates product availability before creating",
              "After success, board refreshes and form clears"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-create-form",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "section.create.title",
                "source": "ui.myReservations.input.createReservation.items",
                "binding": "createReservation",
                "submitAction": "createReservation",
                "emptyKey": "empty.create",
                "stateKey": "ui.myReservations.action.createReservation.status",
                "fields": [
                  {
                    "id": "field-items",
                    "field": "items",
                    "labelKey": "field.items.label",
                    "order": 1,
                    "required": true,
                    "inputType": "composedList",
                    "stateKey": "ui.myReservations.input.createReservation.items"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-submit-create",
                    "action": "createReservation",
                    "labelKey": "action.createReservation.label",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "createReservation"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec-cancel-reservation",
        "type": "section",
        "sectionName": "cancelReservation",
        "titleKey": "section.cancel.title",
        "mode": "form",
        "order": 3,
        "organisms": [
          {
            "id": "org-cancel-form",
            "type": "organism",
            "organismName": "CancelReservationForm",
            "titleKey": "section.cancel.title",
            "purpose": "Permitir ao cliente cancelar uma reserva previamente selecionada no quadro, informando opcionalmente o motivo do cancelamento.",
            "userActions": [
              "cancelReservation"
            ],
            "requiredEntities": [
              "Reservation"
            ],
            "readsFields": [
              "reservationId",
              "cancelReason"
            ],
            "writesFields": [
              "reservationId",
              "cancelReason"
            ],
            "rulesApplied": [
              "reservationId derived from selected entity, never manually typed",
              "Only active or ready reservations can be cancelled",
              "cancelReason is optional user input",
              "Products restored to catalog on cancellation",
              "After success, board refreshes and form and selection clear"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-cancel-form",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "section.cancel.title",
                "source": "ui.myReservations.input.cancelReservation.reservationId",
                "binding": "cancelReservation",
                "submitAction": "cancelReservation",
                "emptyKey": "empty.cancel",
                "stateKey": "ui.myReservations.action.cancelReservation.status",
                "fields": [
                  {
                    "id": "field-cancel-reservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId.label",
                    "order": 1,
                    "required": true,
                    "inputType": "readonly",
                    "source": "selectedEntity",
                    "stateKey": "ui.myReservations.input.cancelReservation.reservationId"
                  },
                  {
                    "id": "field-cancel-cancelReason",
                    "field": "cancelReason",
                    "labelKey": "field.cancelReason.label",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.myReservations.input.cancelReservation.cancelReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-submit-cancel",
                    "action": "cancelReservation",
                    "labelKey": "action.cancelReservation.label",
                    "order": 1,
                    "displayHint": "destructive",
                    "actionKey": "cancelReservation"
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
      "id": "binding-viewMyReservations",
      "source": "query",
      "entity": "Reservation",
      "command": "viewMyReservations",
      "description": "Carrega a lista de reservas do cliente autenticado, ordenadas por data de criação mais recente",
      "stateKey": "ui.myReservations.data.viewMyReservations",
      "inputStateKeys": []
    },
    {
      "id": "binding-createReservation",
      "source": "command",
      "entity": "Reservation",
      "command": "createReservation",
      "description": "Cria uma nova reserva com status active e prazo de expiração de 24 horas",
      "stateKey": "ui.myReservations.output.createReservation",
      "inputStateKeys": [
        "ui.myReservations.input.createReservation.items"
      ]
    },
    {
      "id": "binding-cancelReservation",
      "source": "command",
      "entity": "Reservation",
      "command": "cancelReservation",
      "description": "Cancela uma reserva ativa ou pronta, restaurando a disponibilidade dos produtos",
      "stateKey": "ui.myReservations.output.cancelReservation",
      "inputStateKeys": [
        "ui.myReservations.input.cancelReservation.reservationId",
        "ui.myReservations.input.cancelReservation.cancelReason"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "myReservations__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/myReservations.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/myReservations.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/myReservations.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "myReservations__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
