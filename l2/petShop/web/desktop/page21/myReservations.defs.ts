/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/myReservations.defs.ts" enhancement="_blank"/>

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
      "id": "sec-reservations",
      "type": "section",
      "sectionName": "sec-reservations",
      "titleKey": "section.reservations.title",
      "mode": "master-detail",
      "order": 1,
      "organisms": [
        {
          "id": "org-reservation-list",
          "type": "organism",
          "organismName": "ReservationList",
          "titleKey": "organism.reservationList.title",
          "purpose": "Exibir todas as reservas do cliente com status, prazo de expiração e itens, permitindo seleção para cancelamento contextual",
          "userActions": [
            "viewMyReservations",
            "cancelReservation"
          ],
          "requiredEntities": [
            "Reservation",
            "ReservationItem"
          ],
          "readsFields": [
            "reservationId",
            "status",
            "expiresAt",
            "createdAt",
            "confirmedAt",
            "readyAt",
            "items",
            "cancelReason"
          ],
          "writesFields": [
            "reservationId",
            "cancelReason",
            "status",
            "cancelledAt",
            "updatedAt",
            "restoredProducts"
          ],
          "rulesApplied": [
            "reservationId é derivado da entidade selecionada, nunca digitado manualmente",
            "Cancelamento só permitido para reservas em status 'active' ou 'ready'",
            "Lista filtrada pelo customerId da sessão ativa",
            "Ordenação por data de criação mais recente"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-query-reservations",
              "intent": "query",
              "stateKey": "ui.myReservations.data.viewMyReservations",
              "order": 1
            },
            {
              "id": "int-cancel-reservation",
              "intent": "command",
              "stateKey": "ui.myReservations.output.cancelReservation",
              "action": "cancelReservation",
              "submitAction": "cancelReservation",
              "order": 2
            }
          ]
        }
      ]
    },
    {
      "id": "sec-new-reservation",
      "type": "section",
      "sectionName": "sec-new-reservation",
      "titleKey": "section.createReservation.title",
      "mode": "form",
      "order": 2,
      "organisms": [
        {
          "id": "org-create-form",
          "type": "organism",
          "organismName": "CreateReservationForm",
          "titleKey": "organism.createForm.title",
          "purpose": "Permitir ao cliente criar uma nova reserva selecionando produtos e quantidades desejadas",
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
            "reservationId",
            "customerId",
            "status",
            "confirmedAt",
            "expiresAt",
            "createdAt",
            "updatedAt",
            "items"
          ],
          "rulesApplied": [
            "Sistema valida disponibilidade de cada produto",
            "Reserva criada com status 'active' e prazo de expiração de 24 horas",
            "Itens de reserva associados criados automaticamente"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-create-reservation",
              "intent": "command",
              "stateKey": "ui.myReservations.output.createReservation",
              "action": "createReservation",
              "submitAction": "createReservation",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "goal_first",
  "visualStyle": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja",
  "pageObjective": {
    "actor": "Cliente autenticado do pet shop",
    "jobToBeDone": "Visualizar minhas reservas com status e prazo de retirada, cancelar reservas indesejadas e criar novas reservas de produtos",
    "primaryDecision": "Decidir se devo cancelar uma reserva ativa ou pronta que não vou mais retirar",
    "decisiveInfo": [
      "status",
      "expiresAt",
      "items",
      "reservationId"
    ],
    "usageFrequency": "Ocasional — o cliente acessa para conferir status de reservas existentes e agir quando necessário",
    "criticalActions": [
      {
        "action": "viewMyReservations",
        "presentation": "master-detail list com colunas de status, prazo e itens"
      },
      {
        "action": "cancelReservation",
        "presentation": "contextual-transition-actions — botão inline na reserva selecionada, com motivo opcional"
      },
      {
        "action": "createReservation",
        "presentation": "primary-button em seção dedicada para nova reserva"
      }
    ],
    "informationHierarchy": [
      "1. Lista de reservas com status e prazo de expiração (decisivo para cancelar)",
      "2. Itens de cada reserva (para confirmar o que foi reservado)",
      "3. Ação contextual de cancelamento para reservas ativas/prontas",
      "4. Formulário de criação de nova reserva"
    ],
    "successCriteria": "O cliente vê imediatamente suas reservas com status e prazo, identifica quais ainda pode cancelar, cancela com um clique e motivo opcional, e pode iniciar uma nova reserva sem fricção",
    "antiPatterns": [
      "Formulário separado de cancelamento com ID digitado manualmente",
      "Select livre sobre todos os status do ciclo de vida",
      "Mostrar status do sistema (draft, expired, delivered) como opções de ação para o cliente",
      "Sobrecarregar cada card com todos os campos da entidade Reservation"
    ]
  },
  "msgKeys": [
    "action.cancelReservation.error",
    "action.cancelReservation.label",
    "action.cancelReservation.success",
    "action.createReservation.error",
    "action.createReservation.label",
    "action.createReservation.success",
    "action.selectForCancel.label",
    "action.viewMyReservations.label",
    "column.confirmedAt.label",
    "column.createdAt.label",
    "column.expiresAt.label",
    "column.items.label",
    "column.readyAt.label",
    "column.reservationId.label",
    "column.status.label",
    "empty.cancelContext",
    "empty.createForm",
    "empty.reservations",
    "field.cancelReason.label",
    "field.items.label",
    "field.reservationId.label",
    "filter.status.label",
    "intention.cancelReservation.title",
    "intention.createReservation.title",
    "intention.queryReservations.title",
    "organism.createForm.title",
    "organism.reservationList.title",
    "page.myReservations.title",
    "section.createReservation.title",
    "section.reservations.title"
  ],
  "layout": {
    "id": "page21",
    "type": "page",
    "sections": [
      {
        "id": "sec-reservations",
        "type": "section",
        "sectionName": "sec-reservations",
        "titleKey": "section.reservations.title",
        "mode": "master-detail",
        "order": 1,
        "organisms": [
          {
            "id": "org-reservation-list",
            "type": "organism",
            "organismName": "ReservationList",
            "titleKey": "organism.reservationList.title",
            "purpose": "Exibir todas as reservas do cliente com status, prazo de expiração e itens, permitindo seleção para cancelamento contextual",
            "userActions": [
              "viewMyReservations",
              "cancelReservation"
            ],
            "requiredEntities": [
              "Reservation",
              "ReservationItem"
            ],
            "readsFields": [
              "reservationId",
              "status",
              "expiresAt",
              "createdAt",
              "confirmedAt",
              "readyAt",
              "items",
              "cancelReason"
            ],
            "writesFields": [
              "reservationId",
              "cancelReason",
              "status",
              "cancelledAt",
              "updatedAt",
              "restoredProducts"
            ],
            "rulesApplied": [
              "reservationId é derivado da entidade selecionada, nunca digitado manualmente",
              "Cancelamento só permitido para reservas em status 'active' ou 'ready'",
              "Lista filtrada pelo customerId da sessão ativa",
              "Ordenação por data de criação mais recente"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-query-reservations",
                "intent": "query",
                "order": 1,
                "titleKey": "intention.queryReservations.title",
                "source": "viewMyReservations",
                "binding": "ui.myReservations.data.viewMyReservations",
                "emptyKey": "empty.reservations",
                "displayHint": "master-detail",
                "stateKey": "ui.myReservations.data.viewMyReservations",
                "fields": [],
                "columns": [
                  {
                    "id": "col-reservation-id",
                    "field": "reservationId",
                    "labelKey": "column.reservationId.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "format": "text",
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "column.status.label",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "format": "badge",
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-expires-at",
                    "field": "expiresAt",
                    "labelKey": "column.expiresAt.label",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-created-at",
                    "field": "createdAt",
                    "labelKey": "column.createdAt.label",
                    "order": 4,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-confirmed-at",
                    "field": "confirmedAt",
                    "labelKey": "column.confirmedAt.label",
                    "order": 5,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-ready-at",
                    "field": "readyAt",
                    "labelKey": "column.readyAt.label",
                    "order": 6,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  },
                  {
                    "id": "col-items",
                    "field": "items",
                    "labelKey": "column.items.label",
                    "order": 7,
                    "required": false,
                    "inputType": "text",
                    "format": "list",
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-status",
                    "field": "status",
                    "labelKey": "filter.status.label",
                    "order": 1,
                    "required": false,
                    "inputType": "select",
                    "source": "output",
                    "stateKey": "ui.myReservations.data.viewMyReservations"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-refresh",
                    "action": "viewMyReservations",
                    "labelKey": "action.viewMyReservations.label",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "viewMyReservations"
                  }
                ],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int-cancel-reservation",
                "intent": "command",
                "order": 2,
                "titleKey": "intention.cancelReservation.title",
                "source": "cancelReservation",
                "binding": "ui.myReservations.output.cancelReservation",
                "action": "cancelReservation",
                "submitAction": "cancelReservation",
                "emptyKey": "empty.cancelContext",
                "displayHint": "contextual-transition-actions",
                "stateKey": "ui.myReservations.output.cancelReservation",
                "fields": [
                  {
                    "id": "fld-cancel-reservation-id",
                    "field": "reservationId",
                    "labelKey": "field.reservationId.label",
                    "order": 1,
                    "required": true,
                    "inputType": "hidden",
                    "source": "selectedEntity",
                    "stateKey": "ui.myReservations.input.cancelReservation.reservationId"
                  },
                  {
                    "id": "fld-cancel-reason",
                    "field": "cancelReason",
                    "labelKey": "field.cancelReason.label",
                    "order": 2,
                    "required": false,
                    "inputType": "textarea",
                    "source": "userInput",
                    "stateKey": "ui.myReservations.input.cancelReservation.cancelReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-cancel-reservation",
                    "action": "cancelReservation",
                    "labelKey": "action.cancelReservation.label",
                    "order": 1,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "cancelReservation"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec-new-reservation",
        "type": "section",
        "sectionName": "sec-new-reservation",
        "titleKey": "section.createReservation.title",
        "mode": "form",
        "order": 2,
        "organisms": [
          {
            "id": "org-create-form",
            "type": "organism",
            "organismName": "CreateReservationForm",
            "titleKey": "organism.createForm.title",
            "purpose": "Permitir ao cliente criar uma nova reserva selecionando produtos e quantidades desejadas",
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
              "reservationId",
              "customerId",
              "status",
              "confirmedAt",
              "expiresAt",
              "createdAt",
              "updatedAt",
              "items"
            ],
            "rulesApplied": [
              "Sistema valida disponibilidade de cada produto",
              "Reserva criada com status 'active' e prazo de expiração de 24 horas",
              "Itens de reserva associados criados automaticamente"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-create-reservation",
                "intent": "command",
                "order": 1,
                "titleKey": "intention.createReservation.title",
                "source": "createReservation",
                "binding": "ui.myReservations.output.createReservation",
                "action": "createReservation",
                "submitAction": "createReservation",
                "emptyKey": "empty.createForm",
                "displayHint": "summary-first",
                "stateKey": "ui.myReservations.output.createReservation",
                "fields": [
                  {
                    "id": "fld-items",
                    "field": "items",
                    "labelKey": "field.items.label",
                    "order": 1,
                    "required": true,
                    "inputType": "list",
                    "source": "userInput",
                    "stateKey": "ui.myReservations.input.createReservation.items"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-create-reservation",
                    "action": "createReservation",
                    "labelKey": "action.createReservation.label",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "createReservation"
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
      "id": "bind-viewMyReservations",
      "source": "viewMyReservations",
      "entity": "Reservation",
      "command": "viewMyReservations",
      "description": "Carrega a lista de reservas do cliente autenticado",
      "stateKey": "ui.myReservations.data.viewMyReservations",
      "inputStateKeys": []
    },
    {
      "id": "bind-createReservation",
      "source": "createReservation",
      "entity": "Reservation",
      "command": "createReservation",
      "description": "Cria uma nova reserva com os itens selecionados",
      "stateKey": "ui.myReservations.output.createReservation",
      "inputStateKeys": [
        "ui.myReservations.input.createReservation.items"
      ]
    },
    {
      "id": "bind-cancelReservation",
      "source": "cancelReservation",
      "entity": "Reservation",
      "command": "cancelReservation",
      "description": "Cancela uma reserva ativa ou pronta, restaurando disponibilidade dos produtos",
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
    "id": "myReservations__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page21/myReservations.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page21/myReservations.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/myReservations.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "myReservations__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
