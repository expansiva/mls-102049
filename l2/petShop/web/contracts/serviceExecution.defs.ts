/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceExecution.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "startServiceExecution",
    "bffName": "petShop.serviceBookingLifecycle.startServiceExecution",
    "routeKey": "petShop.serviceBookingLifecycle.startServiceExecution",
    "purpose": "Iniciar atendimento do serviço",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "serviceBookingId",
        "type": "string",
        "required": true,
        "description": "Identificador do agendamento de serviço selecionado pelo operador para iniciar o atendimento.",
        "source": "selectedEntity",
        "presentation": "selection"
      }
    ],
    "output": [
      {
        "name": "serviceBookingId",
        "type": "string",
        "description": "Identificador único do agendamento de serviço."
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
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do agendamento."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:startServiceExecution",
      "operationId": "startServiceExecution",
      "defPath": "_102049_/l4/operations/startServiceExecution.defs.ts",
      "bffName": "petShop.serviceBookingLifecycle.startServiceExecution"
    }
  },
  {
    "commandName": "completeServiceExecution",
    "bffName": "petShop.serviceBookingLifecycle.completeServiceExecution",
    "routeKey": "petShop.serviceBookingLifecycle.completeServiceExecution",
    "purpose": "Concluir serviço agendado",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "serviceBookingId",
        "type": "string",
        "required": true,
        "description": "Identificador do agendamento de serviço a ser concluído, selecionado pelo operador na agenda.",
        "source": "selectedEntity",
        "presentation": "selection"
      }
    ],
    "output": [
      {
        "name": "serviceBookingId",
        "type": "string",
        "description": "Identificador único do agendamento de serviço."
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
        "name": "completedAt",
        "type": "date",
        "description": "Data e hora em que o operador atribuído marcou o serviço como concluído."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:completeServiceExecution",
      "operationId": "completeServiceExecution",
      "defPath": "_102049_/l4/operations/completeServiceExecution.defs.ts",
      "bffName": "petShop.serviceBookingLifecycle.completeServiceExecution"
    }
  }
];

export const pipeline = [
  {
    "id": "serviceExecution__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/serviceExecution.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/serviceExecution.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
