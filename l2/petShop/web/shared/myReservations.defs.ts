/// <mls fileReference="_102049_/l2/petShop/web/shared/myReservations.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "myReservations",
  "pageName": "Minhas Reservas",
  "moduleName": "petShop",
  "baseClassName": "PetShopMyReservationsBase",
  "routePattern": "/petShop/myReservations",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:reservationLifecycle",
    "operation:createReservation",
    "operation:cancelReservation",
    "operation:viewMyReservations"
  ],
  "operationIds": [
    "createReservation",
    "cancelReservation",
    "viewMyReservations"
  ],
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
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/myReservations.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/myReservations.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/myReservations.defs.ts",
    "layoutId": "kanban_pipeline_page11"
  },
  "states": [
    {
      "stateKey": "ui.myReservations.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myReservations.action.createReservation.status",
      "name": "createReservationState",
      "kind": "actionStatus",
      "actionRef": "createReservation",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.myReservations.input.createReservation.items",
      "name": "createReservationItems",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createReservation",
        "direction": "input",
        "field": "items"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myReservations.output.createReservation",
      "name": "createReservationOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createReservation",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.myReservations.action.createReservation.error",
      "name": "createReservationError",
      "kind": "actionError",
      "actionRef": "createReservation",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myReservations.action.cancelReservation.status",
      "name": "cancelReservationState",
      "kind": "actionStatus",
      "actionRef": "cancelReservation",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.myReservations.input.cancelReservation.reservationId",
      "name": "cancelReservationReservationId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cancelReservation",
        "direction": "input",
        "field": "reservationId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myReservations.input.cancelReservation.cancelReason",
      "name": "cancelReservationCancelReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cancelReservation",
        "direction": "input",
        "field": "cancelReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myReservations.output.cancelReservation",
      "name": "cancelReservationOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cancelReservation",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.myReservations.action.cancelReservation.error",
      "name": "cancelReservationError",
      "kind": "actionError",
      "actionRef": "cancelReservation",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myReservations.action.viewMyReservations.status",
      "name": "viewMyReservationsState",
      "kind": "actionStatus",
      "actionRef": "viewMyReservations",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.myReservations.data.viewMyReservations",
      "name": "viewMyReservationsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewMyReservations",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "createReservation",
      "kind": "command",
      "commandRef": "createReservation",
      "routeKey": "petShop.reservationLifecycle.createReservation",
      "purpose": "Criar reserva",
      "methodName": "createReservation",
      "handlerName": "handleCreateReservationClick",
      "inputStateKeys": [
        "ui.myReservations.input.createReservation.items"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.myReservations.output.createReservation"
      ],
      "statusStateKey": "ui.myReservations.action.createReservation.status",
      "errorStateKey": "ui.myReservations.action.createReservation.error",
      "feedback": {
        "successMessageKey": "action.createReservation.success",
        "errorMessageKey": "action.createReservation.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.myReservations.input.createReservation.items"
      ],
      "refreshActionIds": [
        "viewMyReservations"
      ]
    },
    {
      "actionId": "cancelReservation",
      "kind": "command",
      "commandRef": "cancelReservation",
      "routeKey": "petShop.reservationLifecycle.cancelReservation",
      "purpose": "Cancelar reserva",
      "methodName": "cancelReservation",
      "handlerName": "handleCancelReservationClick",
      "inputStateKeys": [
        "ui.myReservations.input.cancelReservation.reservationId",
        "ui.myReservations.input.cancelReservation.cancelReason"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.myReservations.input.cancelReservation.reservationId"
      ],
      "outputStateKeys": [
        "ui.myReservations.output.cancelReservation"
      ],
      "statusStateKey": "ui.myReservations.action.cancelReservation.status",
      "errorStateKey": "ui.myReservations.action.cancelReservation.error",
      "feedback": {
        "successMessageKey": "action.cancelReservation.success",
        "errorMessageKey": "action.cancelReservation.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.myReservations.input.cancelReservation.reservationId",
        "ui.myReservations.input.cancelReservation.cancelReason"
      ],
      "refreshActionIds": [
        "viewMyReservations"
      ]
    },
    {
      "actionId": "viewMyReservations",
      "kind": "query",
      "commandRef": "viewMyReservations",
      "routeKey": "petShop.viewMyReservations.viewMyReservations",
      "purpose": "Visualizar minhas reservas",
      "methodName": "loadViewMyReservations",
      "handlerName": "handleViewMyReservationsClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.myReservations.data.viewMyReservations"
      ],
      "statusStateKey": "ui.myReservations.action.viewMyReservations.status"
    },
    {
      "actionId": "set.createReservationItems",
      "kind": "stateSetter",
      "stateKey": "ui.myReservations.input.createReservation.items",
      "methodName": "setCreateReservationItems",
      "handlerName": "handleCreateReservationItemsChange"
    },
    {
      "actionId": "set.cancelReservationReservationId",
      "kind": "stateSetter",
      "stateKey": "ui.myReservations.input.cancelReservation.reservationId",
      "methodName": "setCancelReservationReservationId",
      "handlerName": "handleCancelReservationReservationIdChange"
    },
    {
      "actionId": "set.cancelReservationCancelReason",
      "kind": "stateSetter",
      "stateKey": "ui.myReservations.input.cancelReservation.cancelReason",
      "methodName": "setCancelReservationCancelReason",
      "handlerName": "handleCancelReservationCancelReasonChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "viewMyReservations",
      "stateKey": "ui.myReservations.data.viewMyReservations"
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
    "section.board.title": "Minhas Reservas",
    "section.create.title": "Criar Reserva",
    "section.cancel.title": "Cancelar Reserva",
    "column.reservationId.label": "Reserva",
    "column.status.label": "Status",
    "column.expiresAt.label": "Expira em",
    "column.createdAt.label": "Criada em",
    "column.confirmedAt.label": "Confirmada em",
    "column.readyAt.label": "Pronta em",
    "column.items.label": "Itens",
    "empty.board": "Nenhuma reserva encontrada",
    "empty.create": "Selecione produtos para criar uma reserva",
    "empty.cancel": "Selecione uma reserva no quadro para cancelar",
    "field.items.label": "Produtos e quantidades",
    "field.reservationId.label": "Reserva selecionada",
    "field.cancelReason.label": "Motivo do cancelamento (opcional)",
    "action.createReservation.label": "Criar Reserva",
    "action.cancelReservation.label": "Cancelar Reserva",
    "action.createReservation.success": "Reserva criada com sucesso! Você tem 24 horas para retirar na loja.",
    "action.createReservation.error": "Não foi possível criar a reserva. Verifique a disponibilidade dos produtos.",
    "action.cancelReservation.success": "Reserva cancelada com sucesso. Os produtos foram devolvidos ao estoque.",
    "action.cancelReservation.error": "Não foi possível cancelar a reserva. Tente novamente.",
    "rowAction.cancelReservation.label": "Cancelar",
    "toolbar.refresh.label": "Atualizar",
    "lane.active": "Ativas",
    "lane.ready": "Prontas para retirada",
    "lane.delivered": "Entregues",
    "lane.expired": "Expiradas",
    "lane.cancelled": "Canceladas",
    "page.myReservations.title": "Minhas Reservas",
    "section.reservations.title": "Minhas Reservas",
    "section.createReservation.title": "Nova Reserva",
    "organism.reservationList.title": "Lista de Reservas",
    "organism.createForm.title": "Criar Reserva",
    "intention.queryReservations.title": "Reservas",
    "intention.cancelReservation.title": "Cancelar Reserva",
    "intention.createReservation.title": "Criar Nova Reserva",
    "filter.status.label": "Filtrar por status",
    "action.viewMyReservations.label": "Atualizar",
    "action.selectForCancel.label": "Selecionar",
    "empty.reservations": "Você ainda não possui reservas.",
    "empty.cancelContext": "Selecione uma reserva ativa ou pronta para cancelar.",
    "empty.createForm": "Selecione produtos do catálogo para criar sua reserva."
  },
  "automation": {
    "statePrefix": "ui.myReservations",
    "stateKeys": [
      "ui.myReservations.status",
      "ui.myReservations.action.createReservation.status",
      "ui.myReservations.input.createReservation.items",
      "ui.myReservations.output.createReservation",
      "ui.myReservations.action.createReservation.error",
      "ui.myReservations.action.cancelReservation.status",
      "ui.myReservations.input.cancelReservation.reservationId",
      "ui.myReservations.input.cancelReservation.cancelReason",
      "ui.myReservations.output.cancelReservation",
      "ui.myReservations.action.cancelReservation.error",
      "ui.myReservations.action.viewMyReservations.status",
      "ui.myReservations.data.viewMyReservations"
    ],
    "actionIds": [
      "createReservation",
      "cancelReservation",
      "viewMyReservations",
      "set.createReservationItems",
      "set.cancelReservationReservationId",
      "set.cancelReservationCancelReason"
    ]
  }
};

export const pipeline = [
  {
    "id": "myReservations__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/myReservations.ts",
    "defPath": "_102049_/l2/petShop/web/shared/myReservations.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/myReservations.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "myReservations__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
