/// <mls fileReference="_102049_/l2/petShop/web/shared/reservationManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "reservationManagement",
  "pageName": "Gestão de Reservas",
  "moduleName": "petShop",
  "baseClassName": "PetShopReservationManagementBase",
  "routePattern": "/petShop/reservationManagement",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:reservationLifecycle",
    "operation:listReservations",
    "operation:updateReservationStatus",
    "operation:payInStore",
    "operation:expireReservations"
  ],
  "operationIds": [
    "listReservations",
    "updateReservationStatus",
    "payInStore",
    "expireReservations"
  ],
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
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/reservationManagement.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/reservationManagement.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/reservationManagement.defs.ts",
    "layoutId": "workflow_queue"
  },
  "states": [
    {
      "stateKey": "ui.reservationManagement.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.action.listReservations.status",
      "name": "listReservationsState",
      "kind": "actionStatus",
      "actionRef": "listReservations",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reservationManagement.input.listReservations.status",
      "name": "listReservationsStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listReservations",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.data.listReservations",
      "name": "listReservationsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listReservations",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.reservationManagement.action.updateReservationStatus.status",
      "name": "updateReservationStatusState",
      "kind": "actionStatus",
      "actionRef": "updateReservationStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.reservationId",
      "name": "updateReservationStatusReservationId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "updateReservationStatus",
        "direction": "input",
        "field": "reservationId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.status",
      "name": "updateReservationStatusStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReservationStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.cancelReason",
      "name": "updateReservationStatusCancelReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReservationStatus",
        "direction": "input",
        "field": "cancelReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.paymentId",
      "name": "updateReservationStatusPaymentId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReservationStatus",
        "direction": "input",
        "field": "paymentId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.output.updateReservationStatus",
      "name": "updateReservationStatusOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateReservationStatus",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.reservationManagement.action.updateReservationStatus.error",
      "name": "updateReservationStatusError",
      "kind": "actionError",
      "actionRef": "updateReservationStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.action.payInStore.status",
      "name": "payInStoreState",
      "kind": "actionStatus",
      "actionRef": "payInStore",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reservationManagement.input.payInStore.reservationId",
      "name": "payInStoreReservationId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "payInStore",
        "direction": "input",
        "field": "reservationId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.payInStore.paymentMethod",
      "name": "payInStorePaymentMethod",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "payInStore",
        "direction": "input",
        "field": "paymentMethod"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.payInStore.paymentAmount",
      "name": "payInStorePaymentAmount",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "payInStore",
        "direction": "input",
        "field": "paymentAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.output.payInStore",
      "name": "payInStoreOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "payInStore",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.reservationManagement.action.payInStore.error",
      "name": "payInStoreError",
      "kind": "actionError",
      "actionRef": "payInStore",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.action.expireReservations.status",
      "name": "expireReservationsState",
      "kind": "actionStatus",
      "actionRef": "expireReservations",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reservationManagement.output.expireReservations",
      "name": "expireReservationsOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "expireReservations",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.reservationManagement.action.expireReservations.error",
      "name": "expireReservationsError",
      "kind": "actionError",
      "actionRef": "expireReservations",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "listReservations",
      "kind": "query",
      "commandRef": "listReservations",
      "routeKey": "petShop.listReservations.listReservations",
      "purpose": "Listar reservas recebidas",
      "methodName": "loadListReservations",
      "handlerName": "handleListReservationsClick",
      "inputStateKeys": [
        "ui.reservationManagement.input.listReservations.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.reservationManagement.data.listReservations"
      ],
      "statusStateKey": "ui.reservationManagement.action.listReservations.status"
    },
    {
      "actionId": "updateReservationStatus",
      "kind": "command",
      "commandRef": "updateReservationStatus",
      "routeKey": "petShop.reservationLifecycle.updateReservationStatus",
      "purpose": "Atualizar status da reserva",
      "methodName": "updateReservationStatus",
      "handlerName": "handleUpdateReservationStatusClick",
      "inputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatus.reservationId",
        "ui.reservationManagement.input.updateReservationStatus.status",
        "ui.reservationManagement.input.updateReservationStatus.cancelReason",
        "ui.reservationManagement.input.updateReservationStatus.paymentId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatus.reservationId"
      ],
      "outputStateKeys": [
        "ui.reservationManagement.output.updateReservationStatus"
      ],
      "statusStateKey": "ui.reservationManagement.action.updateReservationStatus.status",
      "errorStateKey": "ui.reservationManagement.action.updateReservationStatus.error",
      "feedback": {
        "successMessageKey": "action.updateReservationStatus.success",
        "errorMessageKey": "action.updateReservationStatus.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatus.reservationId",
        "ui.reservationManagement.input.updateReservationStatus.status",
        "ui.reservationManagement.input.updateReservationStatus.cancelReason",
        "ui.reservationManagement.input.updateReservationStatus.paymentId"
      ],
      "refreshActionIds": [
        "listReservations"
      ]
    },
    {
      "actionId": "payInStore",
      "kind": "command",
      "commandRef": "payInStore",
      "routeKey": "petShop.reservationLifecycle.payInStore",
      "purpose": "Registrar pagamento presencial",
      "methodName": "payInStore",
      "handlerName": "handlePayInStoreClick",
      "inputStateKeys": [
        "ui.reservationManagement.input.payInStore.reservationId",
        "ui.reservationManagement.input.payInStore.paymentMethod",
        "ui.reservationManagement.input.payInStore.paymentAmount"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.reservationManagement.input.payInStore.reservationId"
      ],
      "outputStateKeys": [
        "ui.reservationManagement.output.payInStore"
      ],
      "statusStateKey": "ui.reservationManagement.action.payInStore.status",
      "errorStateKey": "ui.reservationManagement.action.payInStore.error",
      "feedback": {
        "successMessageKey": "action.payInStore.success",
        "errorMessageKey": "action.payInStore.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.reservationManagement.input.payInStore.reservationId",
        "ui.reservationManagement.input.payInStore.paymentMethod",
        "ui.reservationManagement.input.payInStore.paymentAmount"
      ],
      "refreshActionIds": [
        "listReservations"
      ]
    },
    {
      "actionId": "expireReservations",
      "kind": "command",
      "commandRef": "expireReservations",
      "routeKey": "petShop.reservationLifecycle.expireReservations",
      "purpose": "Expirar reservas vencidas",
      "methodName": "expireReservations",
      "handlerName": "handleExpireReservationsClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.reservationManagement.output.expireReservations"
      ],
      "statusStateKey": "ui.reservationManagement.action.expireReservations.status",
      "errorStateKey": "ui.reservationManagement.action.expireReservations.error",
      "feedback": {
        "successMessageKey": "action.expireReservations.success",
        "errorMessageKey": "action.expireReservations.error",
        "dismissible": true
      },
      "clearInputStateKeys": [],
      "refreshActionIds": [
        "listReservations"
      ]
    },
    {
      "actionId": "set.listReservationsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.listReservations.status",
      "methodName": "setListReservationsStatus",
      "handlerName": "handleListReservationsStatusChange"
    },
    {
      "actionId": "set.updateReservationStatusReservationId",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.reservationId",
      "methodName": "setUpdateReservationStatusReservationId",
      "handlerName": "handleUpdateReservationStatusReservationIdChange",
      "prefill": {
        "command": "updateReservationStatus",
        "sourceStateKey": "ui.reservationManagement.data.listReservations",
        "sourceOutputShape": "array",
        "matchField": "reservationId",
        "fields": [
          {
            "itemField": "status",
            "targetStateKey": "ui.reservationManagement.input.updateReservationStatus.status"
          }
        ]
      }
    },
    {
      "actionId": "set.updateReservationStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.status",
      "methodName": "setUpdateReservationStatusStatus",
      "handlerName": "handleUpdateReservationStatusStatusChange"
    },
    {
      "actionId": "set.updateReservationStatusCancelReason",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.cancelReason",
      "methodName": "setUpdateReservationStatusCancelReason",
      "handlerName": "handleUpdateReservationStatusCancelReasonChange"
    },
    {
      "actionId": "set.updateReservationStatusPaymentId",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.updateReservationStatus.paymentId",
      "methodName": "setUpdateReservationStatusPaymentId",
      "handlerName": "handleUpdateReservationStatusPaymentIdChange"
    },
    {
      "actionId": "set.payInStoreReservationId",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.payInStore.reservationId",
      "methodName": "setPayInStoreReservationId",
      "handlerName": "handlePayInStoreReservationIdChange"
    },
    {
      "actionId": "set.payInStorePaymentMethod",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.payInStore.paymentMethod",
      "methodName": "setPayInStorePaymentMethod",
      "handlerName": "handlePayInStorePaymentMethodChange"
    },
    {
      "actionId": "set.payInStorePaymentAmount",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.payInStore.paymentAmount",
      "methodName": "setPayInStorePaymentAmount",
      "handlerName": "handlePayInStorePaymentAmountChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "listReservations",
      "stateKey": "ui.reservationManagement.data.listReservations"
    }
  ],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt"
    ]
  },
  "i18n": {
    "page.reservationManagement.title": "Gestão de Reservas",
    "section.queue.title": "Reservas recebidas",
    "section.queue.empty": "Nenhuma reserva encontrada",
    "section.execute.title": "Ações da Reserva",
    "section.batch.title": "Operações em Lote",
    "section.review.title": "Resumo",
    "intention.queryReservations.title": "Reservas Recebidas",
    "intention.updateStatus.title": "Atualizar Status",
    "intention.payInStore.title": "Pagamento Presencial",
    "intention.expireReservations.title": "Expirar Reservas Vencidas",
    "intention.expireReservations.empty": "Nenhuma reserva vencida para expirar",
    "intention.summary.title": "Resumo das Ações",
    "column.reservationId": "Reserva",
    "column.customerId": "Cliente",
    "column.status": "Status",
    "column.expiresAt": "Expira em",
    "column.readyAt": "Pronta em",
    "column.items": "Itens",
    "filter.status": "Filtrar por status",
    "field.reservationId": "Reserva",
    "field.status": "Status",
    "field.cancelReason": "Motivo do cancelamento",
    "field.paymentId": "Pagamento (ID)",
    "field.paymentMethod": "Método de pagamento",
    "field.paymentAmount": "Valor pago",
    "action.refresh": "Atualizar",
    "action.selectForUpdate": "Gerenciar",
    "action.selectForPayment": "Selecionar para pagamento",
    "action.updateReservationStatus.submit": "Atualizar Status",
    "action.payInStore.submit": "Registrar Pagamento",
    "action.expireReservations.submit": "Expirar Reservas",
    "action.updateReservationStatus.success": "Status atualizado com sucesso",
    "action.updateReservationStatus.error": "Erro ao atualizar status",
    "action.payInStore.success": "Pagamento registrado com sucesso",
    "action.payInStore.error": "Erro ao registrar pagamento",
    "action.expireReservations.success": "Reservas expiradas com sucesso",
    "action.expireReservations.error": "Erro ao expirar reservas",
    "org.reservationQueue.title": "Listar reservas recebidas com status atual e itens, permitindo filtragem e seleção para ações subsequentes",
    "org.reservationTransitions.title": "Permitir à loja atualizar o status da reserva selecionada e registrar pagamento presencial, com formulários contextuais baseados na reserva selecionada na fila",
    "org.batchOperations.title": "Permitir à loja expirar em lote todas as reservas vencidas, restaurando a disponibilidade dos produtos associados",
    "org.reviewSummary.title": "Revisar o contexto e o resultado das ações principais da página após execução de comandos",
    "section.detail.title": "Ações da reserva",
    "organism.reservationBoard.title": "Fila de reservas",
    "organism.reservationTransitions.title": "Atualizar status",
    "organism.payInStore.title": "Pagamento presencial",
    "intent.listReservations.title": "Lista de reservas",
    "intent.updateReservationStatus.title": "Transições de status",
    "intent.payInStore.title": "Registrar pagamento",
    "field.customerId": "Cliente",
    "field.expiresAt": "Expira em",
    "field.readyAt": "Pronta em",
    "field.deliveredAt": "Entregue em",
    "field.items": "Itens",
    "action.listReservations": "Atualizar fila",
    "action.expireReservations": "Expirar vencidas",
    "action.selectReservation": "Selecionar para status",
    "action.updateReservationStatus.ready": "Marcar como pronta",
    "action.updateReservationStatus.delivered": "Marcar como entregue",
    "action.updateReservationStatus.cancelled": "Cancelar reserva",
    "action.payInStore": "Registrar pagamento"
  },
  "automation": {
    "statePrefix": "ui.reservationManagement",
    "stateKeys": [
      "ui.reservationManagement.status",
      "ui.reservationManagement.action.listReservations.status",
      "ui.reservationManagement.input.listReservations.status",
      "ui.reservationManagement.data.listReservations",
      "ui.reservationManagement.action.updateReservationStatus.status",
      "ui.reservationManagement.input.updateReservationStatus.reservationId",
      "ui.reservationManagement.input.updateReservationStatus.status",
      "ui.reservationManagement.input.updateReservationStatus.cancelReason",
      "ui.reservationManagement.input.updateReservationStatus.paymentId",
      "ui.reservationManagement.output.updateReservationStatus",
      "ui.reservationManagement.action.updateReservationStatus.error",
      "ui.reservationManagement.action.payInStore.status",
      "ui.reservationManagement.input.payInStore.reservationId",
      "ui.reservationManagement.input.payInStore.paymentMethod",
      "ui.reservationManagement.input.payInStore.paymentAmount",
      "ui.reservationManagement.output.payInStore",
      "ui.reservationManagement.action.payInStore.error",
      "ui.reservationManagement.action.expireReservations.status",
      "ui.reservationManagement.output.expireReservations",
      "ui.reservationManagement.action.expireReservations.error"
    ],
    "actionIds": [
      "listReservations",
      "updateReservationStatus",
      "payInStore",
      "expireReservations",
      "set.listReservationsStatus",
      "set.updateReservationStatusReservationId",
      "set.updateReservationStatusStatus",
      "set.updateReservationStatusCancelReason",
      "set.updateReservationStatusPaymentId",
      "set.payInStoreReservationId",
      "set.payInStorePaymentMethod",
      "set.payInStorePaymentAmount"
    ]
  }
};

export const pipeline = [
  {
    "id": "reservationManagement__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/reservationManagement.ts",
    "defPath": "_102049_/l2/petShop/web/shared/reservationManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/reservationManagement.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "reservationManagement__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
