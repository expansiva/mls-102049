/// <mls fileReference="_102049_/l2/petShop/web/contracts/operatorSchedule.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "viewOperatorSchedule",
    "bffName": "petShop.viewOperatorSchedule.viewOperatorSchedule",
    "routeKey": "petShop.viewOperatorSchedule.viewOperatorSchedule",
    "purpose": "Consultar agenda de serviços do turno",
    "kind": "query",
    "outputShape": "paginated",
    "input": [],
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
        "name": "customerName",
        "type": "string",
        "description": "Nome do cliente que realizou o agendamento."
      },
      {
        "name": "customerPhone",
        "type": "string",
        "description": "Telefone de contato do cliente para o agendamento."
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
        "name": "notes",
        "type": "string",
        "description": "Observações adicionais sobre o agendamento informadas pelo cliente ou operador."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewOperatorSchedule",
      "operationId": "viewOperatorSchedule",
      "defPath": "_102049_/l4/operations/viewOperatorSchedule.defs.ts",
      "bffName": "petShop.viewOperatorSchedule.viewOperatorSchedule"
    }
  },
  {
    "commandName": "viewServiceBookingDetails",
    "bffName": "petShop.viewServiceBookingDetails.viewServiceBookingDetails",
    "routeKey": "petShop.viewServiceBookingDetails.viewServiceBookingDetails",
    "purpose": "Revisar detalhes do atendimento",
    "kind": "query",
    "outputShape": "object",
    "input": [
      {
        "name": "serviceBookingId",
        "type": "string",
        "required": true,
        "description": "Identificador do agendamento selecionado pelo operador na agenda de turno.",
        "source": "routeParam",
        "presentation": "route"
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
        "name": "customerName",
        "type": "string",
        "description": "Nome do cliente que realizou o agendamento."
      },
      {
        "name": "customerPhone",
        "type": "string",
        "description": "Telefone de contato do cliente para o agendamento."
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
        "name": "notes",
        "type": "string",
        "description": "Observações adicionais sobre o agendamento informadas pelo cliente ou operador."
      },
      {
        "name": "completedAt",
        "type": "date",
        "description": "Data e hora em que o operador atribuído marcou o serviço como concluído."
      },
      {
        "name": "cancelledAt",
        "type": "date",
        "description": "Data e hora em que o agendamento foi cancelado."
      },
      {
        "name": "cancelReason",
        "type": "string",
        "description": "Motivo do cancelamento do agendamento."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do agendamento."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do agendamento."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewServiceBookingDetails",
      "operationId": "viewServiceBookingDetails",
      "defPath": "_102049_/l4/operations/viewServiceBookingDetails.defs.ts",
      "bffName": "petShop.viewServiceBookingDetails.viewServiceBookingDetails"
    }
  }
];

export const pipeline = [
  {
    "id": "operatorSchedule__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/operatorSchedule.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/operatorSchedule.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
