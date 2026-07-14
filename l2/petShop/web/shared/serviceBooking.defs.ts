/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceBooking.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "serviceBooking",
  "pageName": "Agendamento de serviço",
  "moduleName": "petShop",
  "baseClassName": "PetShopServiceBookingBase",
  "routePattern": "/petShop/serviceBooking",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:serviceBookingLifecycle",
    "operation:browseServiceCatalog",
    "operation:createServiceBooking"
  ],
  "operationIds": [
    "browseServiceCatalog",
    "createServiceBooking"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "serviceBooking",
    "workspaceKind": "workflow",
    "workflowId": "serviceBookingLifecycle",
    "actor": "cliente",
    "entity": "ServiceBooking",
    "owners": [
      {
        "kind": "workflow",
        "id": "serviceBookingLifecycle",
        "defPath": "_102049_/l4/workflows/serviceBookingLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseServiceCatalog",
        "defPath": "_102049_/l4/operations/browseServiceCatalog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createServiceBooking",
        "defPath": "_102049_/l4/operations/createServiceBooking.defs.ts"
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
          "operationId": "browseServiceCatalog",
          "commandName": "browseServiceCatalog",
          "steps": [
            "O cliente acessa a página de serviços oferecidos.",
            "O sistema lista todos os serviços com status active, exibindo nome, descrição, duração estimada e preço.",
            "O cliente revisa as opções disponíveis para decidir qual serviço agendar."
          ]
        },
        {
          "operationId": "createServiceBooking",
          "commandName": "createServiceBooking",
          "steps": [
            "O cliente seleciona o serviço desejado entre os serviços disponíveis.",
            "O cliente escolhe data e horário entre os disponíveis, calculados a partir da capacidade de operadores alocados por turno.",
            "O cliente informa seu nome, telefone e observações opcionais.",
            "O sistema identifica o turno correspondente à data e horário escolhidos e seleciona um operador disponível com capacidade no turno.",
            "O cliente confirma o agendamento e recebe a informação de que o pagamento será realizado presencialmente na loja."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/serviceBooking.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/serviceBooking.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/serviceBooking.defs.ts",
    "layoutId": "page11_mobile_cards"
  },
  "states": [
    {
      "stateKey": "ui.serviceBooking.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceBooking.action.browseServiceCatalog.status",
      "name": "browseServiceCatalogState",
      "kind": "actionStatus",
      "actionRef": "browseServiceCatalog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.serviceBooking.data.browseServiceCatalog",
      "name": "browseServiceCatalogData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseServiceCatalog",
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
      "stateKey": "ui.serviceBooking.action.createServiceBooking.status",
      "name": "createServiceBookingState",
      "kind": "actionStatus",
      "actionRef": "createServiceBooking",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.serviceBooking.input.createServiceBooking.serviceId",
      "name": "createServiceBookingServiceId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createServiceBooking",
        "direction": "input",
        "field": "serviceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceBooking.input.createServiceBooking.customerName",
      "name": "createServiceBookingCustomerName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createServiceBooking",
        "direction": "input",
        "field": "customerName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceBooking.input.createServiceBooking.customerPhone",
      "name": "createServiceBookingCustomerPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createServiceBooking",
        "direction": "input",
        "field": "customerPhone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceBooking.input.createServiceBooking.bookingDate",
      "name": "createServiceBookingBookingDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createServiceBooking",
        "direction": "input",
        "field": "bookingDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceBooking.input.createServiceBooking.bookingTime",
      "name": "createServiceBookingBookingTime",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createServiceBooking",
        "direction": "input",
        "field": "bookingTime"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceBooking.input.createServiceBooking.notes",
      "name": "createServiceBookingNotes",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createServiceBooking",
        "direction": "input",
        "field": "notes"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceBooking.output.createServiceBooking",
      "name": "createServiceBookingOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createServiceBooking",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.serviceBooking.action.createServiceBooking.error",
      "name": "createServiceBookingError",
      "kind": "actionError",
      "actionRef": "createServiceBooking",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseServiceCatalog",
      "kind": "query",
      "commandRef": "browseServiceCatalog",
      "routeKey": "petShop.browseServiceCatalog.browseServiceCatalog",
      "purpose": "Ver serviços oferecidos",
      "methodName": "loadBrowseServiceCatalog",
      "handlerName": "handleBrowseServiceCatalogClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.serviceBooking.data.browseServiceCatalog"
      ],
      "statusStateKey": "ui.serviceBooking.action.browseServiceCatalog.status"
    },
    {
      "actionId": "createServiceBooking",
      "kind": "command",
      "commandRef": "createServiceBooking",
      "routeKey": "petShop.serviceBookingLifecycle.createServiceBooking",
      "purpose": "Agendar serviço",
      "methodName": "createServiceBooking",
      "handlerName": "handleCreateServiceBookingClick",
      "inputStateKeys": [
        "ui.serviceBooking.input.createServiceBooking.serviceId",
        "ui.serviceBooking.input.createServiceBooking.customerName",
        "ui.serviceBooking.input.createServiceBooking.customerPhone",
        "ui.serviceBooking.input.createServiceBooking.bookingDate",
        "ui.serviceBooking.input.createServiceBooking.bookingTime",
        "ui.serviceBooking.input.createServiceBooking.notes"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.serviceBooking.output.createServiceBooking"
      ],
      "statusStateKey": "ui.serviceBooking.action.createServiceBooking.status",
      "errorStateKey": "ui.serviceBooking.action.createServiceBooking.error",
      "feedback": {
        "successMessageKey": "action.createServiceBooking.success",
        "errorMessageKey": "action.createServiceBooking.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.serviceBooking.input.createServiceBooking.serviceId",
        "ui.serviceBooking.input.createServiceBooking.customerName",
        "ui.serviceBooking.input.createServiceBooking.customerPhone",
        "ui.serviceBooking.input.createServiceBooking.bookingDate",
        "ui.serviceBooking.input.createServiceBooking.bookingTime",
        "ui.serviceBooking.input.createServiceBooking.notes"
      ],
      "refreshActionIds": [
        "browseServiceCatalog"
      ]
    },
    {
      "actionId": "set.createServiceBookingServiceId",
      "kind": "stateSetter",
      "stateKey": "ui.serviceBooking.input.createServiceBooking.serviceId",
      "methodName": "setCreateServiceBookingServiceId",
      "handlerName": "handleCreateServiceBookingServiceIdChange"
    },
    {
      "actionId": "set.createServiceBookingCustomerName",
      "kind": "stateSetter",
      "stateKey": "ui.serviceBooking.input.createServiceBooking.customerName",
      "methodName": "setCreateServiceBookingCustomerName",
      "handlerName": "handleCreateServiceBookingCustomerNameChange"
    },
    {
      "actionId": "set.createServiceBookingCustomerPhone",
      "kind": "stateSetter",
      "stateKey": "ui.serviceBooking.input.createServiceBooking.customerPhone",
      "methodName": "setCreateServiceBookingCustomerPhone",
      "handlerName": "handleCreateServiceBookingCustomerPhoneChange"
    },
    {
      "actionId": "set.createServiceBookingBookingDate",
      "kind": "stateSetter",
      "stateKey": "ui.serviceBooking.input.createServiceBooking.bookingDate",
      "methodName": "setCreateServiceBookingBookingDate",
      "handlerName": "handleCreateServiceBookingBookingDateChange"
    },
    {
      "actionId": "set.createServiceBookingBookingTime",
      "kind": "stateSetter",
      "stateKey": "ui.serviceBooking.input.createServiceBooking.bookingTime",
      "methodName": "setCreateServiceBookingBookingTime",
      "handlerName": "handleCreateServiceBookingBookingTimeChange"
    },
    {
      "actionId": "set.createServiceBookingNotes",
      "kind": "stateSetter",
      "stateKey": "ui.serviceBooking.input.createServiceBooking.notes",
      "methodName": "setCreateServiceBookingNotes",
      "handlerName": "handleCreateServiceBookingNotesChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseServiceCatalog",
      "stateKey": "ui.serviceBooking.data.browseServiceCatalog"
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
    "page.title": "Agendamento de Serviço",
    "section.catalog.title": "Serviços Disponíveis",
    "section.catalog.empty": "Nenhum serviço ativo encontrado. Volte mais tarde.",
    "section.booking.title": "Agendar Serviço",
    "section.booking.empty": "Selecione um serviço no catálogo acima para iniciar o agendamento.",
    "section.confirmation.title": "Confirmação do Agendamento",
    "section.confirmation.empty": "Após confirmar o agendamento, os detalhes aparecerão aqui.",
    "field.serviceId.label": "Serviço",
    "field.customerName.label": "Seu nome",
    "field.customerPhone.label": "Telefone",
    "field.bookingDate.label": "Data do agendamento",
    "field.bookingTime.label": "Horário",
    "field.notes.label": "Observações",
    "field.serviceBookingId.label": "Número do agendamento",
    "field.status.label": "Status",
    "column.serviceId.label": "ID",
    "column.name.label": "Serviço",
    "column.description.label": "Descrição",
    "column.estimatedDurationMinutes.label": "Duração estimada",
    "column.price.label": "Preço",
    "filter.name.label": "Buscar serviço",
    "action.browseServiceCatalog.label": "Atualizar serviços",
    "action.createServiceBooking.label": "Confirmar agendamento",
    "action.createServiceBooking.success": "Agendamento confirmado com sucesso! O pagamento será realizado presencialmente na loja.",
    "action.createServiceBooking.error": "Não foi possível concluir o agendamento. Verifique os dados e tente novamente.",
    "summary.paymentNotice": "Pagamento presencial na loja",
    "sec.catalog.title": "Sec catalog",
    "org.browseCatalog.title": "Ver serviços oferecidos",
    "sec.booking.title": "Sec booking",
    "org.createBooking.title": "Agendar serviço",
    "sec.confirmation.title": "Sec confirmation",
    "org.bookingSummary.title": "Revisar o contexto e o resultado das ações principais da página"
  },
  "automation": {
    "statePrefix": "ui.serviceBooking",
    "stateKeys": [
      "ui.serviceBooking.status",
      "ui.serviceBooking.action.browseServiceCatalog.status",
      "ui.serviceBooking.data.browseServiceCatalog",
      "ui.serviceBooking.action.createServiceBooking.status",
      "ui.serviceBooking.input.createServiceBooking.serviceId",
      "ui.serviceBooking.input.createServiceBooking.customerName",
      "ui.serviceBooking.input.createServiceBooking.customerPhone",
      "ui.serviceBooking.input.createServiceBooking.bookingDate",
      "ui.serviceBooking.input.createServiceBooking.bookingTime",
      "ui.serviceBooking.input.createServiceBooking.notes",
      "ui.serviceBooking.output.createServiceBooking",
      "ui.serviceBooking.action.createServiceBooking.error"
    ],
    "actionIds": [
      "browseServiceCatalog",
      "createServiceBooking",
      "set.createServiceBookingServiceId",
      "set.createServiceBookingCustomerName",
      "set.createServiceBookingCustomerPhone",
      "set.createServiceBookingBookingDate",
      "set.createServiceBookingBookingTime",
      "set.createServiceBookingNotes"
    ]
  }
};

export const pipeline = [
  {
    "id": "serviceBooking__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/serviceBooking.ts",
    "defPath": "_102049_/l2/petShop/web/shared/serviceBooking.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/serviceBooking.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "serviceBooking__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
