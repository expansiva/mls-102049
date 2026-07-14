/// <mls fileReference="_102049_/l2/petShop/web/shared/operatorSchedule.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "operatorSchedule",
  "pageName": "Agenda de serviços do turno",
  "moduleName": "petShop",
  "baseClassName": "PetShopOperatorScheduleBase",
  "routePattern": "/petShop/operatorSchedule/:serviceBookingId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:viewOperatorSchedule",
    "operation:viewServiceBookingDetails"
  ],
  "operationIds": [
    "viewOperatorSchedule",
    "viewServiceBookingDetails"
  ],
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
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/operatorSchedule.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/operatorSchedule.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/operatorSchedule.defs.ts",
    "layoutId": "operatorSchedule-statusOverview-page11"
  },
  "states": [
    {
      "stateKey": "ui.operatorSchedule.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorSchedule.action.viewOperatorSchedule.status",
      "name": "viewOperatorScheduleState",
      "kind": "actionStatus",
      "actionRef": "viewOperatorSchedule",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule",
      "name": "viewOperatorScheduleData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewOperatorSchedule",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    },
    {
      "stateKey": "ui.operatorSchedule.action.viewServiceBookingDetails.status",
      "name": "viewServiceBookingDetailsState",
      "kind": "actionStatus",
      "actionRef": "viewServiceBookingDetails",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId",
      "name": "viewServiceBookingDetailsServiceBookingId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "viewServiceBookingDetails",
        "direction": "input",
        "field": "serviceBookingId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails",
      "name": "viewServiceBookingDetailsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewServiceBookingDetails",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "viewOperatorSchedule",
      "kind": "query",
      "commandRef": "viewOperatorSchedule",
      "routeKey": "petShop.viewOperatorSchedule.viewOperatorSchedule",
      "purpose": "Consultar agenda de serviços do turno",
      "methodName": "loadViewOperatorSchedule",
      "handlerName": "handleViewOperatorScheduleClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.operatorSchedule.data.viewOperatorSchedule"
      ],
      "statusStateKey": "ui.operatorSchedule.action.viewOperatorSchedule.status"
    },
    {
      "actionId": "viewServiceBookingDetails",
      "kind": "query",
      "commandRef": "viewServiceBookingDetails",
      "routeKey": "petShop.viewServiceBookingDetails.viewServiceBookingDetails",
      "purpose": "Revisar detalhes do atendimento",
      "methodName": "loadViewServiceBookingDetails",
      "handlerName": "handleViewServiceBookingDetailsClick",
      "inputStateKeys": [
        "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId"
      ],
      "routeParamInputStateKeys": [
        "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.operatorSchedule.data.viewServiceBookingDetails"
      ],
      "statusStateKey": "ui.operatorSchedule.action.viewServiceBookingDetails.status"
    },
    {
      "actionId": "set.viewServiceBookingDetailsServiceBookingId",
      "kind": "stateSetter",
      "stateKey": "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId",
      "methodName": "setViewServiceBookingDetailsServiceBookingId",
      "handlerName": "handleViewServiceBookingDetailsServiceBookingIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "viewOperatorSchedule",
      "stateKey": "ui.operatorSchedule.data.viewOperatorSchedule"
    },
    {
      "actionId": "viewServiceBookingDetails",
      "stateKey": "ui.operatorSchedule.data.viewServiceBookingDetails"
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
    "page.title": "Agenda de serviços do turno",
    "section.schedule.title": "Agenda de serviços do turno",
    "section.payment.title": "Informações de pagamento",
    "organism.metrics.title": "Resumo da agenda",
    "organism.metrics.empty": "Nenhum agendamento encontrado para o seu turno.",
    "metric.confirmed": "Confirmados",
    "metric.inProgress": "Em andamento",
    "metric.completed": "Concluídos",
    "metric.total": "Total do turno",
    "organism.list.title": "Agendamentos do turno",
    "organism.list.empty": "Nenhum agendamento confirmado para o seu turno no momento.",
    "organism.details.title": "Detalhes do agendamento",
    "organism.details.empty": "Selecione um agendamento da lista para visualizar os detalhes completos.",
    "organism.payment.title": "Pagamento",
    "organism.payment.empty": "Selecione um agendamento para ver as informações de pagamento.",
    "column.customerName": "Cliente",
    "column.customerPhone": "Telefone",
    "column.bookingDate": "Data",
    "column.bookingTime": "Horário",
    "column.status": "Status",
    "column.notes": "Observações",
    "filter.status": "Filtrar por status",
    "filter.bookingDate": "Filtrar por data",
    "field.serviceBookingId": "ID do agendamento",
    "field.serviceId": "Serviço",
    "field.customerName": "Cliente",
    "field.customerPhone": "Telefone",
    "field.bookingDate": "Data",
    "field.bookingTime": "Horário",
    "field.status": "Status",
    "field.notes": "Observações",
    "field.completedAt": "Concluído em",
    "field.cancelledAt": "Cancelado em",
    "field.cancelReason": "Motivo do cancelamento",
    "field.createdAt": "Criado em",
    "field.updatedAt": "Atualizado em",
    "field.paymentInfo": "Pagamento presencial na loja",
    "field.paymentMethod": "Forma de pagamento",
    "action.viewDetails": "Ver detalhes",
    "action.viewOperatorSchedule.success": "Agenda do turno carregada com sucesso.",
    "action.viewOperatorSchedule.error": "Não foi possível carregar a agenda do turno. Tente novamente.",
    "action.viewServiceBookingDetails.success": "Detalhes do agendamento carregados com sucesso.",
    "action.viewServiceBookingDetails.error": "Não foi possível carregar os detalhes do agendamento. Tente novamente.",
    "scheduleMetrics.title": "Exibir resumo da agenda do turno com contadores por status",
    "scheduleList.title": "Listar agendamentos confirmados do turno do operador ordenados por data e horário",
    "bookingDetails.title": "Exibir detalhes completos do agendamento selecionado incluindo informações de pagamento presencial",
    "paymentContext.title": "Exibir informação de pagamento presencial na loja para o agendamento selecionado"
  },
  "automation": {
    "statePrefix": "ui.operatorSchedule",
    "stateKeys": [
      "ui.operatorSchedule.status",
      "ui.operatorSchedule.action.viewOperatorSchedule.status",
      "ui.operatorSchedule.data.viewOperatorSchedule",
      "ui.operatorSchedule.action.viewServiceBookingDetails.status",
      "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId",
      "ui.operatorSchedule.data.viewServiceBookingDetails"
    ],
    "actionIds": [
      "viewOperatorSchedule",
      "viewServiceBookingDetails",
      "set.viewServiceBookingDetailsServiceBookingId"
    ]
  }
};

export const pipeline = [
  {
    "id": "operatorSchedule__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/operatorSchedule.ts",
    "defPath": "_102049_/l2/petShop/web/shared/operatorSchedule.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/operatorSchedule.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "operatorSchedule__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
