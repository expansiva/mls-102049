/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceExecution.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "serviceExecution",
  "pageName": "Execução de serviço agendado",
  "moduleName": "petShop",
  "baseClassName": "PetShopServiceExecutionBase",
  "routePattern": "/petShop/serviceExecution",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:serviceBookingLifecycle",
    "operation:startServiceExecution",
    "operation:completeServiceExecution"
  ],
  "operationIds": [
    "startServiceExecution",
    "completeServiceExecution"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "serviceExecution",
    "workspaceKind": "workflow",
    "workflowId": "serviceBookingLifecycle",
    "actor": "operador",
    "entity": "ServiceBooking",
    "owners": [
      {
        "kind": "workflow",
        "id": "serviceBookingLifecycle",
        "defPath": "_102049_/l4/workflows/serviceBookingLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "startServiceExecution",
        "defPath": "_102049_/l4/operations/startServiceExecution.defs.ts"
      },
      {
        "kind": "operation",
        "id": "completeServiceExecution",
        "defPath": "_102049_/l4/operations/completeServiceExecution.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O cliente consulta os serviços disponíveis e seleciona o serviço desejado para o seu pet.",
        "O cliente escolhe uma data e horário disponíveis com base na capacidade de operadores alocados por turno.",
        "O cliente confirma o agendamento, que é vinculado a um operador disponível no turno correspondente.",
        "O operador inicia o atendimento quando o cliente chega à loja no horário marcado.",
        "O operador conclui o serviço e marca o agendamento como concluído, liberando capacidade para futuros agendamentos."
      ],
      "operations": [
        {
          "operationId": "startServiceExecution",
          "commandName": "startServiceExecution",
          "steps": [
            "O operador seleciona um agendamento confirmado em sua agenda.",
            "O operador confirma o início do atendimento.",
            "O sistema verifica que o operador é o atribuído ao agendamento e que o agendamento está no turno do operador.",
            "O sistema altera o status do agendamento de 'confirmed' para 'inProgress' e registra a data/hora da atualização."
          ]
        },
        {
          "operationId": "completeServiceExecution",
          "commandName": "completeServiceExecution",
          "steps": [
            "O operador seleciona o agendamento em andamento na sua agenda.",
            "O sistema valida que o operador é o operador atribuído ao agendamento e que o status atual é 'inProgress'.",
            "O operador confirma a conclusão do serviço.",
            "O sistema atualiza o status para 'completed' e registra a data e hora da conclusão."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/serviceExecution.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/serviceExecution.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/serviceExecution.defs.ts",
    "layoutId": "serviceExecution-wizard-flow"
  },
  "states": [
    {
      "stateKey": "ui.serviceExecution.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceExecution.action.startServiceExecution.status",
      "name": "startServiceExecutionState",
      "kind": "actionStatus",
      "actionRef": "startServiceExecution",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.serviceExecution.input.startServiceExecution.serviceBookingId",
      "name": "startServiceExecutionServiceBookingId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "startServiceExecution",
        "direction": "input",
        "field": "serviceBookingId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceExecution.output.startServiceExecution",
      "name": "startServiceExecutionOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "startServiceExecution",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.serviceExecution.action.startServiceExecution.error",
      "name": "startServiceExecutionError",
      "kind": "actionError",
      "actionRef": "startServiceExecution",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceExecution.action.completeServiceExecution.status",
      "name": "completeServiceExecutionState",
      "kind": "actionStatus",
      "actionRef": "completeServiceExecution",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.serviceExecution.input.completeServiceExecution.serviceBookingId",
      "name": "completeServiceExecutionServiceBookingId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "completeServiceExecution",
        "direction": "input",
        "field": "serviceBookingId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceExecution.output.completeServiceExecution",
      "name": "completeServiceExecutionOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "completeServiceExecution",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.serviceExecution.action.completeServiceExecution.error",
      "name": "completeServiceExecutionError",
      "kind": "actionError",
      "actionRef": "completeServiceExecution",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "startServiceExecution",
      "kind": "command",
      "commandRef": "startServiceExecution",
      "routeKey": "petShop.serviceBookingLifecycle.startServiceExecution",
      "purpose": "Iniciar atendimento do serviço",
      "methodName": "startServiceExecution",
      "handlerName": "handleStartServiceExecutionClick",
      "inputStateKeys": [
        "ui.serviceExecution.input.startServiceExecution.serviceBookingId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.serviceExecution.input.startServiceExecution.serviceBookingId"
      ],
      "outputStateKeys": [
        "ui.serviceExecution.output.startServiceExecution"
      ],
      "statusStateKey": "ui.serviceExecution.action.startServiceExecution.status",
      "errorStateKey": "ui.serviceExecution.action.startServiceExecution.error",
      "feedback": {
        "successMessageKey": "action.startServiceExecution.success",
        "errorMessageKey": "action.startServiceExecution.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.serviceExecution.input.startServiceExecution.serviceBookingId"
      ]
    },
    {
      "actionId": "completeServiceExecution",
      "kind": "command",
      "commandRef": "completeServiceExecution",
      "routeKey": "petShop.serviceBookingLifecycle.completeServiceExecution",
      "purpose": "Concluir serviço agendado",
      "methodName": "completeServiceExecution",
      "handlerName": "handleCompleteServiceExecutionClick",
      "inputStateKeys": [
        "ui.serviceExecution.input.completeServiceExecution.serviceBookingId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.serviceExecution.input.completeServiceExecution.serviceBookingId"
      ],
      "outputStateKeys": [
        "ui.serviceExecution.output.completeServiceExecution"
      ],
      "statusStateKey": "ui.serviceExecution.action.completeServiceExecution.status",
      "errorStateKey": "ui.serviceExecution.action.completeServiceExecution.error",
      "feedback": {
        "successMessageKey": "action.completeServiceExecution.success",
        "errorMessageKey": "action.completeServiceExecution.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.serviceExecution.input.completeServiceExecution.serviceBookingId"
      ]
    },
    {
      "actionId": "set.startServiceExecutionServiceBookingId",
      "kind": "stateSetter",
      "stateKey": "ui.serviceExecution.input.startServiceExecution.serviceBookingId",
      "methodName": "setStartServiceExecutionServiceBookingId",
      "handlerName": "handleStartServiceExecutionServiceBookingIdChange"
    },
    {
      "actionId": "set.completeServiceExecutionServiceBookingId",
      "kind": "stateSetter",
      "stateKey": "ui.serviceExecution.input.completeServiceExecution.serviceBookingId",
      "methodName": "setCompleteServiceExecutionServiceBookingId",
      "handlerName": "handleCompleteServiceExecutionServiceBookingIdChange"
    }
  ],
  "initialLoads": [],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt"
    ]
  },
  "i18n": {
    "page.title": "Execução de serviço agendado",
    "section.bookings.title": "Agenda de atendimentos",
    "section.bookings.empty": "Selecione um agendamento para iniciar ou concluir o atendimento.",
    "section.start.title": "Iniciar atendimento",
    "section.start.empty": "Selecione um agendamento confirmado na agenda acima para iniciar o atendimento.",
    "section.complete.title": "Concluir serviço",
    "section.complete.empty": "Selecione um agendamento em andamento na agenda acima para concluir o serviço.",
    "section.review.title": "Resumo da execução",
    "section.review.empty": "Nenhuma ação executada ainda. Selecione um agendamento e execute uma ação para visualizar o resumo.",
    "column.customerName": "Cliente",
    "column.bookingDate": "Data",
    "column.bookingTime": "Horário",
    "column.status": "Status",
    "column.notes": "Observações",
    "column.updatedAt": "Atualizado em",
    "column.completedAt": "Concluído em",
    "filter.status": "Filtrar por status",
    "field.serviceBookingId": "Agendamento selecionado",
    "action.startServiceExecution": "Iniciar atendimento",
    "action.completeServiceExecution": "Concluir serviço",
    "action.startServiceExecution.success": "Atendimento iniciado com sucesso. O agendamento está em andamento.",
    "action.startServiceExecution.error": "Não foi possível iniciar o atendimento. Verifique se você é o operador atribuído e tente novamente.",
    "action.completeServiceExecution.success": "Serviço concluído com sucesso. A capacidade do operador foi liberada para novos agendamentos.",
    "action.completeServiceExecution.error": "Não foi possível concluir o serviço. Verifique se o agendamento está em andamento e tente novamente.",
    "intention.bookingQuery.title": "Agendamentos atribuídos",
    "intention.workflowStatus.title": "Status do agendamento selecionado",
    "intention.startForm.title": "Confirmar início do atendimento",
    "intention.completeForm.title": "Confirmar conclusão do serviço",
    "intention.review.title": "Resultado da última ação",
    "sec.bookings.title": "Agenda de atendimentos",
    "org.booking.list.title": "Listar agendamentos atribuídos ao operador para seleção e execução",
    "sec.start.service.title": "Iniciar atendimento",
    "org.start.service.title": "Iniciar atendimento do serviço agendado",
    "sec.complete.service.title": "Concluir serviço",
    "org.complete.service.title": "Concluir serviço agendado",
    "sec.review.title": "Resumo da execução",
    "org.review.title": "Revisar o contexto e o resultado das ações principais da página"
  },
  "automation": {
    "statePrefix": "ui.serviceExecution",
    "stateKeys": [
      "ui.serviceExecution.status",
      "ui.serviceExecution.action.startServiceExecution.status",
      "ui.serviceExecution.input.startServiceExecution.serviceBookingId",
      "ui.serviceExecution.output.startServiceExecution",
      "ui.serviceExecution.action.startServiceExecution.error",
      "ui.serviceExecution.action.completeServiceExecution.status",
      "ui.serviceExecution.input.completeServiceExecution.serviceBookingId",
      "ui.serviceExecution.output.completeServiceExecution",
      "ui.serviceExecution.action.completeServiceExecution.error"
    ],
    "actionIds": [
      "startServiceExecution",
      "completeServiceExecution",
      "set.startServiceExecutionServiceBookingId",
      "set.completeServiceExecutionServiceBookingId"
    ]
  }
};

export const pipeline = [
  {
    "id": "serviceExecution__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/serviceExecution.ts",
    "defPath": "_102049_/l2/petShop/web/shared/serviceExecution.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/serviceExecution.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "serviceExecution__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
