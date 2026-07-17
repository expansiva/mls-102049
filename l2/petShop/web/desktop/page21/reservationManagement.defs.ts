/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/reservationManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "reservationManagement",
  "pageName": "Gestão de Reservas",
  "baseClassName": "PetShopReservationManagementBase",
  "actor": "loja",
  "purpose": "Executar Gestão de Reservas.",
  "capabilities": [
    "reservationLifecycle",
    "listReservations"
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
    "actor": "loja",
    "entity": "Reservation",
    "owners": [
      {
        "kind": "workflow",
        "id": "reservationLifecycle",
        "defPath": "_102049_/l4/workflows/reservationLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "listReservations",
        "defPath": "_102049_/l4/operations/listReservations.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateReservationStatus",
        "defPath": "_102049_/l4/operations/updateReservationStatus.defs.ts"
      },
      {
        "kind": "operation",
        "id": "payInStore",
        "defPath": "_102049_/l4/operations/payInStore.defs.ts"
      },
      {
        "kind": "operation",
        "id": "expireReservations",
        "defPath": "_102049_/l4/operations/expireReservations.defs.ts"
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
          "operationId": "listReservations",
          "commandName": "listReservations",
          "steps": [
            "A loja acessa a tela de reservas recebidas",
            "O sistema lista as reservas com seus status atuais e itens associados",
            "A loja visualiza quais reservas estão ativas, prontas, entregues, expiradas ou canceladas",
            "A loja pode filtrar opcionalmente por status para focar no que precisa ser separado"
          ]
        },
        {
          "operationId": "updateReservationStatus",
          "commandName": "updateReservationStatus",
          "steps": [
            "A loja seleciona uma reserva ativa ou pronta no sistema",
            "A loja escolhe o novo status desejado (ready, delivered ou cancelled)",
            "O sistema valida se a transição de status é permitida conforme o ciclo de vida da reserva",
            "Para cancelamento, o sistema verifica se a reserva está ativa e restaura a disponibilidade dos produtos",
            "Para entrega, o sistema valida se a reserva está dentro do prazo de validade",
            "O sistema atualiza o status, registra os timestamps correspondentes e retorna a reserva atualizada"
          ]
        },
        {
          "operationId": "payInStore",
          "commandName": "payInStore",
          "steps": [
            "A loja seleciona a reserva do cliente que está pronta para retirada",
            "A loja informa o método e o valor do pagamento realizado no balcão",
            "O sistema valida que a reserva está dentro do prazo de validade e em status que permite retirada",
            "O sistema cria o registro de pagamento e atualiza a reserva para status entregue"
          ]
        },
        {
          "operationId": "expireReservations",
          "commandName": "expireReservations",
          "steps": [
            "O sistema identifica todas as reservas com status active ou ready cujo expiresAt é anterior ao timestamp atual",
            "Cada reserva identificada tem seu status atualizado para expired e o campo expiredAt é definido com o timestamp atual",
            "Os produtos associados a cada reserva expirada (via ReservationItem) têm sua disponibilidade restaurada no catálogo",
            "O sistema retorna o resumo com a quantidade de reservas expiradas e produtos liberados"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.queue",
      "type": "section",
      "sectionName": "queue",
      "titleKey": "section.queue.title",
      "mode": "view",
      "order": 1,
      "organisms": [
        {
          "id": "organism.reservationBoard",
          "type": "list",
          "organismName": "reservationBoard",
          "titleKey": "organism.reservationBoard.title",
          "purpose": "Exibir fila de reservas e permitir seleção/filtragem",
          "userActions": [
            "listReservations",
            "expireReservations"
          ],
          "requiredEntities": [
            "Reservation",
            "ReservationItem"
          ],
          "readsFields": [
            "reservationId",
            "customerId",
            "status",
            "expiresAt",
            "readyAt",
            "deliveredAt",
            "items",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "card-board",
            "summary-first"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent.listReservations",
              "intent": "queryList",
              "stateKey": "ui.reservationManagement.data.listReservations",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "section.detail",
      "type": "section",
      "sectionName": "detail",
      "titleKey": "section.detail.title",
      "mode": "edit",
      "order": 2,
      "organisms": [
        {
          "id": "organism.reservationTransitions",
          "type": "form",
          "organismName": "reservationTransitions",
          "titleKey": "organism.reservationTransitions.title",
          "purpose": "Executar transições de status da reserva selecionada",
          "userActions": [
            "updateReservationStatus"
          ],
          "requiredEntities": [
            "Reservation",
            "ReservationItem",
            "Product"
          ],
          "readsFields": [
            "reservationId",
            "status",
            "cancelReason",
            "paymentId",
            "updatedAt"
          ],
          "writesFields": [
            "status",
            "cancelReason",
            "paymentId"
          ],
          "rulesApplied": [
            "contextual-transition-actions",
            "read-before-write"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent.updateReservationStatus",
              "intent": "commandForm",
              "order": 1
            }
          ]
        },
        {
          "id": "organism.payInStore",
          "type": "form",
          "organismName": "payInStore",
          "titleKey": "organism.payInStore.title",
          "purpose": "Registrar pagamento presencial da reserva selecionada",
          "userActions": [
            "payInStore"
          ],
          "requiredEntities": [
            "Reservation",
            "Payment"
          ],
          "readsFields": [
            "reservationId",
            "paymentMethod",
            "paymentAmount"
          ],
          "writesFields": [
            "paymentMethod",
            "paymentAmount"
          ],
          "rulesApplied": [
            "summary-first"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "intent.payInStore",
              "intent": "commandForm",
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
    "actor": "Atendente/operador da loja",
    "jobToBeDone": "Visualizar a fila de reservas por status e executar rapidamente a próxima ação válida (preparar, cancelar, registrar pagamento e entregar).",
    "primaryDecision": "Qual reserva selecionar agora e qual transição/ação aplicar.",
    "decisiveInfo": [
      "reservationId",
      "customerId",
      "status",
      "expiresAt",
      "readyAt",
      "deliveredAt",
      "items"
    ],
    "usageFrequency": "Operacional contínuo durante o dia, com atualização frequente",
    "criticalActions": [
      {
        "action": "updateReservationStatus",
        "presentation": "contextual-transition-actions"
      },
      {
        "action": "payInStore",
        "presentation": "primary-button"
      },
      {
        "action": "expireReservations",
        "presentation": "toolbar-button"
      },
      {
        "action": "listReservations",
        "presentation": "refresh"
      }
    ],
    "informationHierarchy": [
      "Fila de reservas por status (cartões)",
      "Detalhe/ação da reserva selecionada",
      "Pagamento presencial",
      "Ações globais (expirar vencidas)"
    ],
    "successCriteria": [
      "Fila atualizada e filtrável por status",
      "Transições feitas sem digitar ids ou status",
      "Pagamento registrado com poucos campos",
      "Feedback de sucesso/erro visível"
    ],
    "antiPatterns": [
      "select livre de status",
      "digitar reservationId manualmente",
      "formulário separado para cada transição",
      "expor timestamps como entrada"
    ]
  },
  "msgKeys": [
    "action.expireReservations",
    "action.expireReservations.error",
    "action.expireReservations.success",
    "action.listReservations",
    "action.payInStore",
    "action.payInStore.error",
    "action.payInStore.success",
    "action.selectForPayment",
    "action.selectReservation",
    "action.updateReservationStatus.cancelled",
    "action.updateReservationStatus.delivered",
    "action.updateReservationStatus.error",
    "action.updateReservationStatus.ready",
    "action.updateReservationStatus.success",
    "field.cancelReason",
    "field.customerId",
    "field.deliveredAt",
    "field.expiresAt",
    "field.items",
    "field.paymentAmount",
    "field.paymentId",
    "field.paymentMethod",
    "field.readyAt",
    "field.reservationId",
    "field.status",
    "filter.status",
    "intent.listReservations.title",
    "intent.payInStore.title",
    "intent.updateReservationStatus.title",
    "organism.payInStore.title",
    "organism.reservationBoard.title",
    "organism.reservationTransitions.title",
    "section.detail.title",
    "section.queue.title"
  ],
  "layout": {
    "id": "reservationManagement.page21",
    "type": "page",
    "sections": [
      {
        "id": "section.queue",
        "type": "section",
        "sectionName": "queue",
        "titleKey": "section.queue.title",
        "mode": "view",
        "order": 1,
        "organisms": [
          {
            "id": "organism.reservationBoard",
            "type": "list",
            "organismName": "reservationBoard",
            "titleKey": "organism.reservationBoard.title",
            "purpose": "Exibir fila de reservas e permitir seleção/filtragem",
            "userActions": [
              "listReservations",
              "expireReservations"
            ],
            "requiredEntities": [
              "Reservation",
              "ReservationItem"
            ],
            "readsFields": [
              "reservationId",
              "customerId",
              "status",
              "expiresAt",
              "readyAt",
              "deliveredAt",
              "items",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "card-board",
              "summary-first"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent.listReservations",
                "intent": "queryList",
                "order": 1,
                "titleKey": "intent.listReservations.title",
                "displayHint": "card-board",
                "fields": [],
                "columns": [
                  {
                    "id": "col.reservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col.customerId",
                    "field": "customerId",
                    "labelKey": "field.customerId",
                    "order": 2,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col.status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 3,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col.expiresAt",
                    "field": "expiresAt",
                    "labelKey": "field.expiresAt",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col.readyAt",
                    "field": "readyAt",
                    "labelKey": "field.readyAt",
                    "order": 5,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col.deliveredAt",
                    "field": "deliveredAt",
                    "labelKey": "field.deliveredAt",
                    "order": 6,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col.items",
                    "field": "items",
                    "labelKey": "field.items",
                    "order": 7,
                    "required": false,
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.status",
                    "field": "status",
                    "labelKey": "filter.status",
                    "order": 1,
                    "required": false,
                    "inputType": "select",
                    "source": "ui.reservationManagement.input.listReservations.status",
                    "stateKey": "ui.reservationManagement.input.listReservations.status"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb.refresh",
                    "action": "listReservations",
                    "labelKey": "action.listReservations",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "listReservations"
                  },
                  {
                    "id": "tb.expire",
                    "action": "expireReservations",
                    "labelKey": "action.expireReservations",
                    "order": 2,
                    "displayHint": "danger-button",
                    "actionKey": "expireReservations"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.reservationManagement.data.listReservations"
              }
            ]
          }
        ]
      },
      {
        "id": "section.detail",
        "type": "section",
        "sectionName": "detail",
        "titleKey": "section.detail.title",
        "mode": "edit",
        "order": 2,
        "organisms": [
          {
            "id": "organism.reservationTransitions",
            "type": "form",
            "organismName": "reservationTransitions",
            "titleKey": "organism.reservationTransitions.title",
            "purpose": "Executar transições de status da reserva selecionada",
            "userActions": [
              "updateReservationStatus"
            ],
            "requiredEntities": [
              "Reservation",
              "ReservationItem",
              "Product"
            ],
            "readsFields": [
              "reservationId",
              "status",
              "cancelReason",
              "paymentId",
              "updatedAt"
            ],
            "writesFields": [
              "status",
              "cancelReason",
              "paymentId"
            ],
            "rulesApplied": [
              "contextual-transition-actions",
              "read-before-write"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent.updateReservationStatus",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "intent.updateReservationStatus.title",
                "displayHint": "contextual-transition-actions",
                "fields": [
                  {
                    "id": "field.reservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 1,
                    "required": false,
                    "inputType": "context",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatus.reservationId"
                  },
                  {
                    "id": "field.cancelReason",
                    "field": "cancelReason",
                    "labelKey": "field.cancelReason",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatus.cancelReason"
                  },
                  {
                    "id": "field.paymentId",
                    "field": "paymentId",
                    "labelKey": "field.paymentId",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatus.paymentId"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act.setReady",
                    "action": "updateReservationStatus",
                    "labelKey": "action.updateReservationStatus.ready",
                    "order": 1,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "updateReservationStatus"
                  },
                  {
                    "id": "act.setDelivered",
                    "action": "updateReservationStatus",
                    "labelKey": "action.updateReservationStatus.delivered",
                    "order": 2,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "updateReservationStatus"
                  },
                  {
                    "id": "act.setCancelled",
                    "action": "updateReservationStatus",
                    "labelKey": "action.updateReservationStatus.cancelled",
                    "order": 3,
                    "displayHint": "contextual-transition-actions",
                    "actionKey": "updateReservationStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.payInStore",
            "type": "form",
            "organismName": "payInStore",
            "titleKey": "organism.payInStore.title",
            "purpose": "Registrar pagamento presencial da reserva selecionada",
            "userActions": [
              "payInStore"
            ],
            "requiredEntities": [
              "Reservation",
              "Payment"
            ],
            "readsFields": [
              "reservationId",
              "paymentMethod",
              "paymentAmount"
            ],
            "writesFields": [
              "paymentMethod",
              "paymentAmount"
            ],
            "rulesApplied": [
              "summary-first"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "intent.payInStore",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "intent.payInStore.title",
                "fields": [
                  {
                    "id": "field.payReservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 1,
                    "required": false,
                    "inputType": "context",
                    "stateKey": "ui.reservationManagement.input.payInStore.reservationId"
                  },
                  {
                    "id": "field.paymentMethod",
                    "field": "paymentMethod",
                    "labelKey": "field.paymentMethod",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.reservationManagement.input.payInStore.paymentMethod"
                  },
                  {
                    "id": "field.paymentAmount",
                    "field": "paymentAmount",
                    "labelKey": "field.paymentAmount",
                    "order": 3,
                    "required": false,
                    "inputType": "currency",
                    "stateKey": "ui.reservationManagement.input.payInStore.paymentAmount"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act.payInStore",
                    "action": "payInStore",
                    "labelKey": "action.payInStore",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "payInStore"
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
      "id": "bind.listReservations",
      "source": "ui.reservationManagement.data.listReservations",
      "entity": "Reservation",
      "description": "Lista de reservas",
      "stateKey": "ui.reservationManagement.data.listReservations"
    },
    {
      "id": "bind.listReservationsStatus",
      "source": "ui.reservationManagement.input.listReservations.status",
      "stateKey": "ui.reservationManagement.input.listReservations.status"
    },
    {
      "id": "bind.updateReservationStatusReservationId",
      "source": "ui.reservationManagement.input.updateReservationStatus.reservationId",
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.reservationId"
    },
    {
      "id": "bind.updateReservationStatusStatus",
      "source": "ui.reservationManagement.input.updateReservationStatus.status",
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.status"
    },
    {
      "id": "bind.updateReservationStatusCancelReason",
      "source": "ui.reservationManagement.input.updateReservationStatus.cancelReason",
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.cancelReason"
    },
    {
      "id": "bind.updateReservationStatusPaymentId",
      "source": "ui.reservationManagement.input.updateReservationStatus.paymentId",
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.paymentId"
    },
    {
      "id": "bind.payInStoreReservationId",
      "source": "ui.reservationManagement.input.payInStore.reservationId",
      "stateKey": "ui.reservationManagement.input.payInStore.reservationId"
    },
    {
      "id": "bind.payInStorePaymentMethod",
      "source": "ui.reservationManagement.input.payInStore.paymentMethod",
      "stateKey": "ui.reservationManagement.input.payInStore.paymentMethod"
    },
    {
      "id": "bind.payInStorePaymentAmount",
      "source": "ui.reservationManagement.input.payInStore.paymentAmount",
      "stateKey": "ui.reservationManagement.input.payInStore.paymentAmount"
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
      "description": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
