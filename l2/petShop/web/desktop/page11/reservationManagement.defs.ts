/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/reservationManagement.defs.ts" enhancement="_blank"/>

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
      "id": "section-queue",
      "type": "section",
      "sectionName": "section-queue",
      "titleKey": "section.queue.title",
      "mode": "discover",
      "order": 1,
      "organisms": [
        {
          "id": "org-reservationQueue",
          "type": "organism",
          "organismName": "ReservationQueue",
          "titleKey": "org.reservationQueue.title",
          "purpose": "Listar reservas recebidas com status atual e itens, permitindo filtragem e seleção para ações subsequentes.",
          "userActions": [
            "listReservations"
          ],
          "requiredEntities": [
            "Reservation",
            "ReservationItem"
          ],
          "readsFields": [
            "reservationId",
            "customerId",
            "status",
            "confirmedAt",
            "expiresAt",
            "readyAt",
            "deliveredAt",
            "createdAt",
            "updatedAt",
            "items"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Queue items grouped by lifecycle status",
            "Row select prepopulates transition form draft"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-queryReservations",
              "intent": "queryList",
              "stateKey": "ui.reservationManagement.data.listReservations",
              "action": "listReservations",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "section-execute",
      "type": "section",
      "sectionName": "section-execute",
      "titleKey": "section.execute.title",
      "mode": "execute",
      "order": 2,
      "organisms": [
        {
          "id": "org-reservationTransitions",
          "type": "organism",
          "organismName": "ReservationTransitions",
          "titleKey": "org.reservationTransitions.title",
          "purpose": "Permitir à loja atualizar o status da reserva selecionada e registrar pagamento presencial, com formulários contextuais baseados na reserva selecionada na fila.",
          "userActions": [
            "updateReservationStatus",
            "payInStore"
          ],
          "requiredEntities": [
            "Reservation",
            "Payment"
          ],
          "readsFields": [
            "reservationId",
            "status",
            "cancelReason",
            "paymentId",
            "paymentMethod",
            "paymentAmount"
          ],
          "writesFields": [
            "reservationId",
            "status",
            "readyAt",
            "deliveredAt",
            "cancelledAt",
            "cancelReason",
            "paymentId",
            "updatedAt",
            "paymentMethod",
            "paymentAmount"
          ],
          "rulesApplied": [
            "reservationId is context-derived from selectedEntity, never manually entered",
            "status transition validated against lifecycle (active→ready, ready→delivered, active→cancelled)",
            "cancelReason required only when status is cancelled",
            "payInStore validates reservation is within expiry and in ready status"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-updateStatus",
              "intent": "commandForm",
              "stateKey": "ui.reservationManagement.output.updateReservationStatus",
              "submitAction": "updateReservationStatus",
              "order": 1
            },
            {
              "id": "intent-payInStore",
              "intent": "commandForm",
              "stateKey": "ui.reservationManagement.output.payInStore",
              "submitAction": "payInStore",
              "order": 2
            }
          ]
        }
      ]
    },
    {
      "id": "section-batch",
      "type": "section",
      "sectionName": "section-batch",
      "titleKey": "section.batch.title",
      "mode": "execute",
      "order": 3,
      "organisms": [
        {
          "id": "org-batchOperations",
          "type": "organism",
          "organismName": "BatchOperations",
          "titleKey": "org.batchOperations.title",
          "purpose": "Permitir à loja expirar em lote todas as reservas vencidas, restaurando a disponibilidade dos produtos associados.",
          "userActions": [
            "expireReservations"
          ],
          "requiredEntities": [
            "Reservation",
            "ReservationItem",
            "Product"
          ],
          "readsFields": [],
          "writesFields": [
            "expiredCount",
            "expiredReservations",
            "productsReleased"
          ],
          "rulesApplied": [
            "expireReservations requires no manual input — system identifies overdue reservations automatically",
            "Expired reservations have products released back to catalog"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-expireReservations",
              "intent": "commandForm",
              "stateKey": "ui.reservationManagement.output.expireReservations",
              "submitAction": "expireReservations",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "section-review",
      "type": "section",
      "sectionName": "section-review",
      "titleKey": "section.review.title",
      "mode": "review",
      "order": 4,
      "organisms": [
        {
          "id": "org-reviewSummary",
          "type": "organism",
          "organismName": "ReviewSummary",
          "titleKey": "org.reviewSummary.title",
          "purpose": "Revisar o contexto e o resultado das ações principais da página após execução de comandos.",
          "userActions": [],
          "requiredEntities": [
            "Reservation",
            "Payment"
          ],
          "readsFields": [
            "reservationId",
            "status",
            "readyAt",
            "deliveredAt",
            "cancelledAt",
            "cancelReason",
            "paymentId",
            "updatedAt",
            "expiredCount",
            "expiredReservations",
            "productsReleased"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Summary reflects output of last executed command",
            "Refreshes queue after mutation feedback"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-summary",
              "intent": "summary",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "workflow_queue",
  "visualStyle": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja",
  "msgKeys": [
    "action.expireReservations.error",
    "action.expireReservations.submit",
    "action.expireReservations.success",
    "action.payInStore.error",
    "action.payInStore.submit",
    "action.payInStore.success",
    "action.refresh",
    "action.selectForPayment",
    "action.selectForUpdate",
    "action.updateReservationStatus.error",
    "action.updateReservationStatus.submit",
    "action.updateReservationStatus.success",
    "column.customerId",
    "column.expiresAt",
    "column.items",
    "column.readyAt",
    "column.reservationId",
    "column.status",
    "field.cancelReason",
    "field.paymentAmount",
    "field.paymentId",
    "field.paymentMethod",
    "field.reservationId",
    "field.status",
    "filter.status",
    "intention.expireReservations.empty",
    "intention.expireReservations.title",
    "intention.payInStore.title",
    "intention.queryReservations.title",
    "intention.summary.title",
    "intention.updateStatus.title",
    "org.batchOperations.title",
    "org.reservationQueue.title",
    "org.reservationTransitions.title",
    "org.reviewSummary.title",
    "page.reservationManagement.title",
    "section.batch.title",
    "section.execute.title",
    "section.queue.empty",
    "section.queue.title",
    "section.review.title"
  ],
  "layout": {
    "id": "workflow_queue",
    "type": "page",
    "sections": [
      {
        "id": "section-queue",
        "type": "section",
        "sectionName": "section-queue",
        "titleKey": "section.queue.title",
        "mode": "discover",
        "order": 1,
        "organisms": [
          {
            "id": "org-reservationQueue",
            "type": "organism",
            "organismName": "ReservationQueue",
            "titleKey": "org.reservationQueue.title",
            "purpose": "Listar reservas recebidas com status atual e itens, permitindo filtragem e seleção para ações subsequentes.",
            "userActions": [
              "listReservations"
            ],
            "requiredEntities": [
              "Reservation",
              "ReservationItem"
            ],
            "readsFields": [
              "reservationId",
              "customerId",
              "status",
              "confirmedAt",
              "expiresAt",
              "readyAt",
              "deliveredAt",
              "createdAt",
              "updatedAt",
              "items"
            ],
            "writesFields": [],
            "rulesApplied": [
              "Queue items grouped by lifecycle status",
              "Row select prepopulates transition form draft"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-queryReservations",
                "intent": "queryList",
                "order": 1,
                "titleKey": "intention.queryReservations.title",
                "source": "query",
                "binding": "binding-listReservations",
                "action": "listReservations",
                "emptyKey": "section.queue.empty",
                "stateKey": "ui.reservationManagement.data.listReservations",
                "fields": [],
                "columns": [
                  {
                    "id": "col-reservationId",
                    "field": "reservationId",
                    "labelKey": "column.reservationId",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col-customerId",
                    "field": "customerId",
                    "labelKey": "column.customerId",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "column.status",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col-expiresAt",
                    "field": "expiresAt",
                    "labelKey": "column.expiresAt",
                    "order": 4,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col-readyAt",
                    "field": "readyAt",
                    "labelKey": "column.readyAt",
                    "order": 5,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  },
                  {
                    "id": "col-items",
                    "field": "items",
                    "labelKey": "column.items",
                    "order": 6,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.data.listReservations"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-status",
                    "field": "status",
                    "labelKey": "filter.status",
                    "order": 1,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.reservationManagement.input.listReservations.status"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar-refresh",
                    "action": "listReservations",
                    "labelKey": "action.refresh",
                    "order": 1,
                    "displayHint": "secondary",
                    "actionKey": "listReservations"
                  }
                ],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      },
      {
        "id": "section-execute",
        "type": "section",
        "sectionName": "section-execute",
        "titleKey": "section.execute.title",
        "mode": "execute",
        "order": 2,
        "organisms": [
          {
            "id": "org-reservationTransitions",
            "type": "organism",
            "organismName": "ReservationTransitions",
            "titleKey": "org.reservationTransitions.title",
            "purpose": "Permitir à loja atualizar o status da reserva selecionada e registrar pagamento presencial, com formulários contextuais baseados na reserva selecionada na fila.",
            "userActions": [
              "updateReservationStatus",
              "payInStore"
            ],
            "requiredEntities": [
              "Reservation",
              "Payment"
            ],
            "readsFields": [
              "reservationId",
              "status",
              "cancelReason",
              "paymentId",
              "paymentMethod",
              "paymentAmount"
            ],
            "writesFields": [
              "reservationId",
              "status",
              "readyAt",
              "deliveredAt",
              "cancelledAt",
              "cancelReason",
              "paymentId",
              "updatedAt",
              "paymentMethod",
              "paymentAmount"
            ],
            "rulesApplied": [
              "reservationId is context-derived from selectedEntity, never manually entered",
              "status transition validated against lifecycle (active→ready, ready→delivered, active→cancelled)",
              "cancelReason required only when status is cancelled",
              "payInStore validates reservation is within expiry and in ready status"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-updateStatus",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "intention.updateStatus.title",
                "source": "command",
                "binding": "binding-updateReservationStatus",
                "submitAction": "updateReservationStatus",
                "stateKey": "ui.reservationManagement.output.updateReservationStatus",
                "fields": [
                  {
                    "id": "field-update-reservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 1,
                    "required": true,
                    "inputType": "readonly",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatus.reservationId"
                  },
                  {
                    "id": "field-update-status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 2,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatus.status"
                  },
                  {
                    "id": "field-update-cancelReason",
                    "field": "cancelReason",
                    "labelKey": "field.cancelReason",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.reservationManagement.input.updateReservationStatus.cancelReason"
                  },
                  {
                    "id": "field-update-paymentId",
                    "field": "paymentId",
                    "labelKey": "field.paymentId",
                    "order": 4,
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
                    "id": "action-submit-update",
                    "action": "updateReservationStatus",
                    "labelKey": "action.updateReservationStatus.submit",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "updateReservationStatus"
                  }
                ]
              },
              {
                "id": "intent-payInStore",
                "intent": "commandForm",
                "order": 2,
                "titleKey": "intention.payInStore.title",
                "source": "command",
                "binding": "binding-payInStore",
                "submitAction": "payInStore",
                "stateKey": "ui.reservationManagement.output.payInStore",
                "fields": [
                  {
                    "id": "field-pay-reservationId",
                    "field": "reservationId",
                    "labelKey": "field.reservationId",
                    "order": 1,
                    "required": true,
                    "inputType": "readonly",
                    "stateKey": "ui.reservationManagement.input.payInStore.reservationId"
                  },
                  {
                    "id": "field-pay-paymentMethod",
                    "field": "paymentMethod",
                    "labelKey": "field.paymentMethod",
                    "order": 2,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.reservationManagement.input.payInStore.paymentMethod"
                  },
                  {
                    "id": "field-pay-paymentAmount",
                    "field": "paymentAmount",
                    "labelKey": "field.paymentAmount",
                    "order": 3,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.reservationManagement.input.payInStore.paymentAmount"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-submit-pay",
                    "action": "payInStore",
                    "labelKey": "action.payInStore.submit",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "payInStore"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "section-batch",
        "type": "section",
        "sectionName": "section-batch",
        "titleKey": "section.batch.title",
        "mode": "execute",
        "order": 3,
        "organisms": [
          {
            "id": "org-batchOperations",
            "type": "organism",
            "organismName": "BatchOperations",
            "titleKey": "org.batchOperations.title",
            "purpose": "Permitir à loja expirar em lote todas as reservas vencidas, restaurando a disponibilidade dos produtos associados.",
            "userActions": [
              "expireReservations"
            ],
            "requiredEntities": [
              "Reservation",
              "ReservationItem",
              "Product"
            ],
            "readsFields": [],
            "writesFields": [
              "expiredCount",
              "expiredReservations",
              "productsReleased"
            ],
            "rulesApplied": [
              "expireReservations requires no manual input — system identifies overdue reservations automatically",
              "Expired reservations have products released back to catalog"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-expireReservations",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "intention.expireReservations.title",
                "source": "command",
                "binding": "binding-expireReservations",
                "submitAction": "expireReservations",
                "emptyKey": "intention.expireReservations.empty",
                "stateKey": "ui.reservationManagement.output.expireReservations",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-submit-expire",
                    "action": "expireReservations",
                    "labelKey": "action.expireReservations.submit",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "expireReservations"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "section-review",
        "type": "section",
        "sectionName": "section-review",
        "titleKey": "section.review.title",
        "mode": "review",
        "order": 4,
        "organisms": [
          {
            "id": "org-reviewSummary",
            "type": "organism",
            "organismName": "ReviewSummary",
            "titleKey": "org.reviewSummary.title",
            "purpose": "Revisar o contexto e o resultado das ações principais da página após execução de comandos.",
            "userActions": [],
            "requiredEntities": [
              "Reservation",
              "Payment"
            ],
            "readsFields": [
              "reservationId",
              "status",
              "readyAt",
              "deliveredAt",
              "cancelledAt",
              "cancelReason",
              "paymentId",
              "updatedAt",
              "expiredCount",
              "expiredReservations",
              "productsReleased"
            ],
            "writesFields": [],
            "rulesApplied": [
              "Summary reflects output of last executed command",
              "Refreshes queue after mutation feedback"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-summary",
                "intent": "summary",
                "order": 1,
                "titleKey": "intention.summary.title",
                "fields": [],
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
      "id": "binding-listReservations",
      "source": "route",
      "entity": "Reservation",
      "command": "listReservations",
      "description": "Lista reservas com status atual e itens associados",
      "stateKey": "ui.reservationManagement.data.listReservations",
      "inputStateKeys": [
        "ui.reservationManagement.input.listReservations.status"
      ]
    },
    {
      "id": "binding-updateReservationStatus",
      "source": "route",
      "entity": "Reservation",
      "command": "updateReservationStatus",
      "description": "Atualiza status da reserva selecionada conforme ciclo de vida",
      "stateKey": "ui.reservationManagement.output.updateReservationStatus",
      "inputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatus.reservationId",
        "ui.reservationManagement.input.updateReservationStatus.status",
        "ui.reservationManagement.input.updateReservationStatus.cancelReason",
        "ui.reservationManagement.input.updateReservationStatus.paymentId"
      ]
    },
    {
      "id": "binding-payInStore",
      "source": "route",
      "entity": "Payment",
      "command": "payInStore",
      "description": "Registra pagamento presencial e marca reserva como entregue",
      "stateKey": "ui.reservationManagement.output.payInStore",
      "inputStateKeys": [
        "ui.reservationManagement.input.payInStore.reservationId",
        "ui.reservationManagement.input.payInStore.paymentMethod",
        "ui.reservationManagement.input.payInStore.paymentAmount"
      ]
    },
    {
      "id": "binding-expireReservations",
      "source": "route",
      "entity": "Reservation",
      "command": "expireReservations",
      "description": "Expira reservas vencidas e libera produtos associados",
      "stateKey": "ui.reservationManagement.output.expireReservations",
      "inputStateKeys": []
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
      "description": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
