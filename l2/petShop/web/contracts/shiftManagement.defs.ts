/// <mls fileReference="_102049_/l2/petShop/web/contracts/shiftManagement.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseShifts",
    "bffName": "petShop.browseShifts.browseShifts",
    "routeKey": "petShop.browseShifts.browseShifts",
    "purpose": "Listar turnos de trabalho",
    "kind": "query",
    "outputShape": "paginated",
    "input": [
      {
        "name": "activeFilter",
        "type": "boolean",
        "required": false,
        "description": "Filtro opcional para exibir apenas turnos ativos ou inativos.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "shiftId",
        "type": "string",
        "description": "Identificador único do turno de trabalho."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do turno para identificação pelo administrador (ex.: Manhã, Tarde, Dia Inteiro)."
      },
      {
        "name": "startTime",
        "type": "string",
        "description": "Horário de início do turno no formato HH:mm (ex.: 09:00)."
      },
      {
        "name": "endTime",
        "type": "string",
        "description": "Horário de fim do turno no formato HH:mm (ex.: 18:00)."
      },
      {
        "name": "monday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às segundas-feiras."
      },
      {
        "name": "tuesday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às terças-feiras."
      },
      {
        "name": "wednesday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às quartas-feiras."
      },
      {
        "name": "thursday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às quintas-feiras."
      },
      {
        "name": "friday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às sextas-feiras."
      },
      {
        "name": "saturday",
        "type": "boolean",
        "description": "Indica se o turno ocorre aos sábados."
      },
      {
        "name": "sunday",
        "type": "boolean",
        "description": "Indica se o turno ocorre aos domingos."
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "Indica se o turno está ativo e disponível para alocação de operadores e agendamentos."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do turno."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do turno."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:browseShifts",
      "operationId": "browseShifts",
      "defPath": "_102049_/l4/operations/browseShifts.defs.ts",
      "bffName": "petShop.browseShifts.browseShifts"
    }
  },
  {
    "commandName": "createShift",
    "bffName": "petShop.createShift.createShift",
    "routeKey": "petShop.createShift.createShift",
    "purpose": "Criar turno de trabalho",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do turno para identificação (ex.: Manhã, Tarde, Dia Inteiro).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "startTime",
        "type": "string",
        "required": true,
        "description": "Horário de início do turno no formato HH:mm (ex.: 09:00).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "endTime",
        "type": "string",
        "required": true,
        "description": "Horário de fim do turno no formato HH:mm (ex.: 18:00).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "monday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às segundas-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "tuesday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às terças-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "wednesday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às quartas-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "thursday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às quintas-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "friday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às sextas-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "saturday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre aos sábados.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "sunday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre aos domingos.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "active",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno está ativo e disponível para alocação de operadores e agendamentos.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "shiftId",
        "type": "string",
        "description": "Identificador único do turno de trabalho."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do turno para identificação pelo administrador (ex.: Manhã, Tarde, Dia Inteiro)."
      },
      {
        "name": "startTime",
        "type": "string",
        "description": "Horário de início do turno no formato HH:mm (ex.: 09:00)."
      },
      {
        "name": "endTime",
        "type": "string",
        "description": "Horário de fim do turno no formato HH:mm (ex.: 18:00)."
      },
      {
        "name": "monday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às segundas-feiras."
      },
      {
        "name": "tuesday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às terças-feiras."
      },
      {
        "name": "wednesday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às quartas-feiras."
      },
      {
        "name": "thursday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às quintas-feiras."
      },
      {
        "name": "friday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às sextas-feiras."
      },
      {
        "name": "saturday",
        "type": "boolean",
        "description": "Indica se o turno ocorre aos sábados."
      },
      {
        "name": "sunday",
        "type": "boolean",
        "description": "Indica se o turno ocorre aos domingos."
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "Indica se o turno está ativo e disponível para alocação de operadores e agendamentos."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do turno."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createShift",
      "operationId": "createShift",
      "defPath": "_102049_/l4/operations/createShift.defs.ts",
      "bffName": "petShop.createShift.createShift"
    }
  },
  {
    "commandName": "updateShift",
    "bffName": "petShop.updateShift.updateShift",
    "routeKey": "petShop.updateShift.updateShift",
    "purpose": "Editar turno de trabalho",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "shiftId",
        "type": "string",
        "required": true,
        "description": "Identificador do turno selecionado para edição.",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do turno informado pelo administrador (ex.: Manhã, Tarde, Dia Inteiro).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "startTime",
        "type": "string",
        "required": true,
        "description": "Horário de início do turno no formato HH:mm.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "endTime",
        "type": "string",
        "required": true,
        "description": "Horário de fim do turno no formato HH:mm.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "monday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às segundas-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "tuesday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às terças-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "wednesday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às quartas-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "thursday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às quintas-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "friday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre às sextas-feiras.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "saturday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre aos sábados.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "sunday",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno ocorre aos domingos.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "active",
        "type": "boolean",
        "required": true,
        "description": "Indica se o turno está ativo e disponível para alocação.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "shiftId",
        "type": "string",
        "description": "Identificador único do turno de trabalho."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do turno para identificação pelo administrador (ex.: Manhã, Tarde, Dia Inteiro)."
      },
      {
        "name": "startTime",
        "type": "string",
        "description": "Horário de início do turno no formato HH:mm (ex.: 09:00)."
      },
      {
        "name": "endTime",
        "type": "string",
        "description": "Horário de fim do turno no formato HH:mm (ex.: 18:00)."
      },
      {
        "name": "monday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às segundas-feiras."
      },
      {
        "name": "tuesday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às terças-feiras."
      },
      {
        "name": "wednesday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às quartas-feiras."
      },
      {
        "name": "thursday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às quintas-feiras."
      },
      {
        "name": "friday",
        "type": "boolean",
        "description": "Indica se o turno ocorre às sextas-feiras."
      },
      {
        "name": "saturday",
        "type": "boolean",
        "description": "Indica se o turno ocorre aos sábados."
      },
      {
        "name": "sunday",
        "type": "boolean",
        "description": "Indica se o turno ocorre aos domingos."
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "Indica se o turno está ativo e disponível para alocação de operadores e agendamentos."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateShift",
      "operationId": "updateShift",
      "defPath": "_102049_/l4/operations/updateShift.defs.ts",
      "bffName": "petShop.updateShift.updateShift"
    }
  }
];

export const pipeline = [
  {
    "id": "shiftManagement__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/shiftManagement.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/shiftManagement.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
