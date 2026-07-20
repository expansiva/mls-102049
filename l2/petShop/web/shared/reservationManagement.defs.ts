/// <mls fileReference="_102049_/l2/petShop/web/shared/reservationManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "reservationManagement",
  "pageName": "Gestão de reservas",
  "moduleName": "petShop",
  "baseClassName": "PetShopReservationManagementBase",
  "routePattern": "/petShop/reservationManagement/:reservationId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:reservationLifecycle",
    "operation:browseReservations",
    "operation:updateReservationStatus",
    "operation:processPayment"
  ],
  "operationIds": [
    "browseReservations",
    "updateReservationStatus",
    "processPayment"
  ],
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
  "contractRef": {
    "contracts": [
      {
        "commandName": "browseReservationsQuery",
        "tsPath": "_102049_/l2/petShop/web/contracts/reservationManagement.browseReservationsQuery.ts",
        "routeConst": "browseReservationsQueryRoute"
      },
      {
        "commandName": "updateReservationStatusCommand",
        "tsPath": "_102049_/l2/petShop/web/contracts/reservationManagement.updateReservationStatusCommand.ts",
        "routeConst": "updateReservationStatusCommandRoute"
      },
      {
        "commandName": "processPaymentCommand",
        "tsPath": "_102049_/l2/petShop/web/contracts/reservationManagement.processPaymentCommand.ts",
        "routeConst": "processPaymentCommandRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/reservationManagement.defs.ts",
    "layoutId": "reservationManagement.kanban_pipeline.page11"
  },
  "states": [
    {
      "stateKey": "ui.reservationManagement.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.action.browseReservationsQuery.status",
      "name": "browseReservationsQueryState",
      "kind": "actionStatus",
      "actionRef": "browseReservationsQuery",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reservationManagement.input.browseReservationsQuery.searchTerm",
      "name": "browseReservationsQuerySearchTerm",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseReservationsQuery",
        "direction": "input",
        "field": "searchTerm"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.browseReservationsQuery.statusFilter",
      "name": "browseReservationsQueryStatusFilter",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseReservationsQuery",
        "direction": "input",
        "field": "statusFilter"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.browseReservationsQuery.page",
      "name": "browseReservationsQueryPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseReservationsQuery",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.browseReservationsQuery.pageSize",
      "name": "browseReservationsQueryPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseReservationsQuery",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.data.browseReservationsQuery",
      "name": "browseReservationsQueryData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseReservationsQuery",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.reservationManagement.action.updateReservationStatusCommand.status",
      "name": "updateReservationStatusCommandState",
      "kind": "actionStatus",
      "actionRef": "updateReservationStatusCommand",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.reservationId",
      "name": "updateReservationStatusCommandReservationId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "updateReservationStatusCommand",
        "direction": "input",
        "field": "reservationId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.newStatus",
      "name": "updateReservationStatusCommandNewStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReservationStatusCommand",
        "direction": "input",
        "field": "newStatus"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason",
      "name": "updateReservationStatusCommandCancellationReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReservationStatusCommand",
        "direction": "input",
        "field": "cancellationReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.paymentId",
      "name": "updateReservationStatusCommandPaymentId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReservationStatusCommand",
        "direction": "input",
        "field": "paymentId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.output.updateReservationStatusCommand",
      "name": "updateReservationStatusCommandOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateReservationStatusCommand",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.reservationManagement.action.updateReservationStatusCommand.error",
      "name": "updateReservationStatusCommandError",
      "kind": "actionError",
      "actionRef": "updateReservationStatusCommand",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.action.processPaymentCommand.status",
      "name": "processPaymentCommandState",
      "kind": "actionStatus",
      "actionRef": "processPaymentCommand",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.reservationManagement.input.processPaymentCommand.reservationId",
      "name": "processPaymentCommandReservationId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "processPaymentCommand",
        "direction": "input",
        "field": "reservationId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.input.processPaymentCommand.method",
      "name": "processPaymentCommandMethod",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "processPaymentCommand",
        "direction": "input",
        "field": "method"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.reservationManagement.output.processPaymentCommand",
      "name": "processPaymentCommandOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "processPaymentCommand",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.reservationManagement.action.processPaymentCommand.error",
      "name": "processPaymentCommandError",
      "kind": "actionError",
      "actionRef": "processPaymentCommand",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseReservationsQuery",
      "kind": "query",
      "commandRef": "browseReservationsQuery",
      "routeKey": "petShop.reservationManagement.browseReservationsQuery",
      "purpose": "Visualizar reservas pendentes e localizar cliente",
      "methodName": "loadBrowseReservationsQuery",
      "handlerName": "handleBrowseReservationsQueryClick",
      "inputStateKeys": [
        "ui.reservationManagement.input.browseReservationsQuery.searchTerm",
        "ui.reservationManagement.input.browseReservationsQuery.statusFilter",
        "ui.reservationManagement.input.browseReservationsQuery.page",
        "ui.reservationManagement.input.browseReservationsQuery.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.reservationManagement.data.browseReservationsQuery"
      ],
      "statusStateKey": "ui.reservationManagement.action.browseReservationsQuery.status"
    },
    {
      "actionId": "updateReservationStatusCommand",
      "kind": "command",
      "commandRef": "updateReservationStatusCommand",
      "routeKey": "petShop.reservationManagement.updateReservationStatusCommand",
      "purpose": "Confirmar ou cancelar reserva",
      "methodName": "updateReservationStatusCommand",
      "handlerName": "handleUpdateReservationStatusCommandClick",
      "inputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatusCommand.reservationId",
        "ui.reservationManagement.input.updateReservationStatusCommand.newStatus",
        "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason",
        "ui.reservationManagement.input.updateReservationStatusCommand.paymentId"
      ],
      "routeParamInputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatusCommand.reservationId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.reservationManagement.output.updateReservationStatusCommand"
      ],
      "statusStateKey": "ui.reservationManagement.action.updateReservationStatusCommand.status",
      "errorStateKey": "ui.reservationManagement.action.updateReservationStatusCommand.error",
      "feedback": {
        "successMessageKey": "action.updateReservationStatusCommand.success",
        "errorMessageKey": "action.updateReservationStatusCommand.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.reservationManagement.input.updateReservationStatusCommand.newStatus",
        "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason",
        "ui.reservationManagement.input.updateReservationStatusCommand.paymentId"
      ],
      "refreshActionIds": [
        "browseReservationsQuery"
      ]
    },
    {
      "actionId": "processPaymentCommand",
      "kind": "command",
      "commandRef": "processPaymentCommand",
      "routeKey": "petShop.reservationManagement.processPaymentCommand",
      "purpose": "Receber pagamento presencial e encerrar reserva",
      "methodName": "processPaymentCommand",
      "handlerName": "handleProcessPaymentCommandClick",
      "inputStateKeys": [
        "ui.reservationManagement.input.processPaymentCommand.reservationId",
        "ui.reservationManagement.input.processPaymentCommand.method"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.reservationManagement.input.processPaymentCommand.reservationId"
      ],
      "outputStateKeys": [
        "ui.reservationManagement.output.processPaymentCommand"
      ],
      "statusStateKey": "ui.reservationManagement.action.processPaymentCommand.status",
      "errorStateKey": "ui.reservationManagement.action.processPaymentCommand.error",
      "feedback": {
        "successMessageKey": "action.processPaymentCommand.success",
        "errorMessageKey": "action.processPaymentCommand.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.reservationManagement.input.processPaymentCommand.reservationId",
        "ui.reservationManagement.input.processPaymentCommand.method"
      ],
      "refreshActionIds": [
        "browseReservationsQuery"
      ]
    },
    {
      "actionId": "set.browseReservationsQuerySearchTerm",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.browseReservationsQuery.searchTerm",
      "methodName": "setBrowseReservationsQuerySearchTerm",
      "handlerName": "handleBrowseReservationsQuerySearchTermChange"
    },
    {
      "actionId": "set.browseReservationsQueryStatusFilter",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.browseReservationsQuery.statusFilter",
      "methodName": "setBrowseReservationsQueryStatusFilter",
      "handlerName": "handleBrowseReservationsQueryStatusFilterChange"
    },
    {
      "actionId": "set.browseReservationsQueryPage",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.browseReservationsQuery.page",
      "methodName": "setBrowseReservationsQueryPage",
      "handlerName": "handleBrowseReservationsQueryPageChange"
    },
    {
      "actionId": "set.browseReservationsQueryPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.browseReservationsQuery.pageSize",
      "methodName": "setBrowseReservationsQueryPageSize",
      "handlerName": "handleBrowseReservationsQueryPageSizeChange"
    },
    {
      "actionId": "set.updateReservationStatusCommandReservationId",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.reservationId",
      "methodName": "setUpdateReservationStatusCommandReservationId",
      "handlerName": "handleUpdateReservationStatusCommandReservationIdChange"
    },
    {
      "actionId": "set.updateReservationStatusCommandNewStatus",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.newStatus",
      "methodName": "setUpdateReservationStatusCommandNewStatus",
      "handlerName": "handleUpdateReservationStatusCommandNewStatusChange"
    },
    {
      "actionId": "set.updateReservationStatusCommandCancellationReason",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason",
      "methodName": "setUpdateReservationStatusCommandCancellationReason",
      "handlerName": "handleUpdateReservationStatusCommandCancellationReasonChange"
    },
    {
      "actionId": "set.updateReservationStatusCommandPaymentId",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.updateReservationStatusCommand.paymentId",
      "methodName": "setUpdateReservationStatusCommandPaymentId",
      "handlerName": "handleUpdateReservationStatusCommandPaymentIdChange"
    },
    {
      "actionId": "set.processPaymentCommandReservationId",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.processPaymentCommand.reservationId",
      "methodName": "setProcessPaymentCommandReservationId",
      "handlerName": "handleProcessPaymentCommandReservationIdChange"
    },
    {
      "actionId": "set.processPaymentCommandMethod",
      "kind": "stateSetter",
      "stateKey": "ui.reservationManagement.input.processPaymentCommand.method",
      "methodName": "setProcessPaymentCommandMethod",
      "handlerName": "handleProcessPaymentCommandMethodChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseReservationsQuery",
      "stateKey": "ui.reservationManagement.data.browseReservationsQuery"
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
    "section.reservationList.title": "Reservas",
    "organism.reservationKanbanBoard.title": "Painel de reservas",
    "intent.reservationKanban.title": "Fluxo de reservas",
    "field.reservationId": "Reserva",
    "field.customerName": "Cliente",
    "field.customerPhone": "Telefone",
    "field.status": "Status",
    "field.expiresAt": "Validade",
    "filter.searchTerm": "Buscar por nome, telefone ou reserva",
    "filter.statusFilter": "Status",
    "filter.page": "Página",
    "filter.pageSize": "Itens por página",
    "action.refresh": "Atualizar",
    "action.updateStatus": "Atualizar status",
    "action.processPayment": "Receber pagamento",
    "empty.reservations": "Nenhuma reserva encontrada",
    "organism.updateReservationStatusPanel.title": "Confirmar ou cancelar reserva",
    "intent.updateReservationStatus.title": "Atualização de status",
    "field.newStatus": "Novo status",
    "field.cancellationReason": "Motivo do cancelamento",
    "field.paymentId": "Pagamento",
    "action.confirmUpdate": "Salvar status",
    "organism.processPaymentPanel.title": "Receber pagamento presencial",
    "intent.processPayment.title": "Pagamento da reserva",
    "field.method": "Forma de pagamento",
    "action.receivePayment": "Receber pagamento",
    "action.updateReservationStatusCommand.success": "Status da reserva atualizado com sucesso.",
    "action.updateReservationStatusCommand.error": "Não foi possível atualizar o status da reserva.",
    "action.processPaymentCommand.success": "Pagamento registrado e reserva encerrada.",
    "action.processPaymentCommand.error": "Não foi possível processar o pagamento.",
    "reservation.queue.title": "Fila de reservas",
    "reservation.list.title": "Reservas pendentes",
    "reservation.list.empty": "Nenhuma reserva encontrada. Ajuste a busca ou o filtro de status.",
    "reservation.transition.title": "Atualizar status da reserva",
    "reservation.payment.title": "Receber pagamento",
    "field.createdAt": "Criada em",
    "action.confirmReservation": "Confirmar",
    "action.cancelReservation": "Cancelar",
    "action.fulfillReservation": "Marcar como atendida"
  },
  "automation": {
    "statePrefix": "ui.reservationManagement",
    "stateKeys": [
      "ui.reservationManagement.status",
      "ui.reservationManagement.action.browseReservationsQuery.status",
      "ui.reservationManagement.input.browseReservationsQuery.searchTerm",
      "ui.reservationManagement.input.browseReservationsQuery.statusFilter",
      "ui.reservationManagement.input.browseReservationsQuery.page",
      "ui.reservationManagement.input.browseReservationsQuery.pageSize",
      "ui.reservationManagement.data.browseReservationsQuery",
      "ui.reservationManagement.action.updateReservationStatusCommand.status",
      "ui.reservationManagement.input.updateReservationStatusCommand.reservationId",
      "ui.reservationManagement.input.updateReservationStatusCommand.newStatus",
      "ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason",
      "ui.reservationManagement.input.updateReservationStatusCommand.paymentId",
      "ui.reservationManagement.output.updateReservationStatusCommand",
      "ui.reservationManagement.action.updateReservationStatusCommand.error",
      "ui.reservationManagement.action.processPaymentCommand.status",
      "ui.reservationManagement.input.processPaymentCommand.reservationId",
      "ui.reservationManagement.input.processPaymentCommand.method",
      "ui.reservationManagement.output.processPaymentCommand",
      "ui.reservationManagement.action.processPaymentCommand.error"
    ],
    "actionIds": [
      "browseReservationsQuery",
      "updateReservationStatusCommand",
      "processPaymentCommand",
      "set.browseReservationsQuerySearchTerm",
      "set.browseReservationsQueryStatusFilter",
      "set.browseReservationsQueryPage",
      "set.browseReservationsQueryPageSize",
      "set.updateReservationStatusCommandReservationId",
      "set.updateReservationStatusCommandNewStatus",
      "set.updateReservationStatusCommandCancellationReason",
      "set.updateReservationStatusCommandPaymentId",
      "set.processPaymentCommandReservationId",
      "set.processPaymentCommandMethod"
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
      "_102049_/l2/petShop/web/contracts/reservationManagement.browseReservationsQuery.ts",
      "_102049_/l2/petShop/web/contracts/reservationManagement.updateReservationStatusCommand.ts",
      "_102049_/l2/petShop/web/contracts/reservationManagement.processPaymentCommand.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "reservationStatuses",
      "reservationValidity24h",
      "inStorePaymentOnly",
      "totalFromPricesAndQuantities",
      "paymentRequiresReceipt"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
