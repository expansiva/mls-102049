/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceBooking.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseServiceCatalog",
    "bffName": "petShop.browseServiceCatalog.browseServiceCatalog",
    "routeKey": "petShop.browseServiceCatalog.browseServiceCatalog",
    "purpose": "Ver serviços oferecidos",
    "kind": "query",
    "outputShape": "paginated",
    "input": [],
    "output": [
      {
        "name": "serviceId",
        "type": "string",
        "description": "Identificador único do serviço oferecido."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do serviço oferecido, como banho e tosa."
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição detalhada do serviço oferecido ao cliente."
      },
      {
        "name": "estimatedDurationMinutes",
        "type": "number",
        "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:browseServiceCatalog",
      "operationId": "browseServiceCatalog",
      "defPath": "_102049_/l4/operations/browseServiceCatalog.defs.ts",
      "bffName": "petShop.browseServiceCatalog.browseServiceCatalog"
    }
  },
  {
    "commandName": "createServiceBooking",
    "bffName": "petShop.serviceBookingLifecycle.createServiceBooking",
    "routeKey": "petShop.serviceBookingLifecycle.createServiceBooking",
    "purpose": "Agendar serviço",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "serviceId",
        "type": "string",
        "required": true,
        "description": "Serviço selecionado pelo cliente para agendamento.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "customerName",
        "type": "string",
        "required": true,
        "description": "Nome do cliente que realiza o agendamento.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "customerPhone",
        "type": "string",
        "required": true,
        "description": "Telefone de contato do cliente.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "bookingDate",
        "type": "date",
        "required": true,
        "description": "Data do agendamento escolhida pelo cliente, dentro do horário de funcionamento.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "bookingTime",
        "type": "string",
        "required": true,
        "description": "Horário do agendamento escolhido pelo cliente, dentro do intervalo de funcionamento.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "notes",
        "type": "string",
        "required": false,
        "description": "Observações adicionais opcionais informadas pelo cliente.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "serviceBookingId",
        "type": "string",
        "description": "Identificador único do agendamento de serviço."
      },
      {
        "name": "serviceId",
        "type": "string",
        "description": "Referência ao serviço agendado pelo cliente."
      },
      {
        "name": "operatorId",
        "type": "string",
        "description": "Referência ao operador atribuído ao agendamento, disponível no turno correspondente."
      },
      {
        "name": "shiftId",
        "type": "string",
        "description": "Referência ao turno em que o agendamento foi alocado, determinado pela disponibilidade de operadores."
      },
      {
        "name": "bookingDate",
        "type": "date",
        "description": "Data do agendamento do serviço, dentro do horário de funcionamento (segunda a sábado, 09:00 às 18:00)."
      },
      {
        "name": "bookingTime",
        "type": "string",
        "description": "Horário do agendamento, dentro do intervalo de funcionamento da loja."
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "confirmed",
          "inProgress",
          "completed",
          "cancelled"
        ],
        "description": "Situação atual do agendamento no ciclo de execução."
      },
      {
        "name": "customerName",
        "type": "string",
        "description": "Nome do cliente que realizou o agendamento."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createServiceBooking",
      "operationId": "createServiceBooking",
      "defPath": "_102049_/l4/operations/createServiceBooking.defs.ts",
      "bffName": "petShop.serviceBookingLifecycle.createServiceBooking"
    }
  }
];

export const pipeline = [
  {
    "id": "serviceBooking__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/serviceBooking.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/serviceBooking.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
