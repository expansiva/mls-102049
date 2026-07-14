/// <mls fileReference="_102049_/l2/petShop/web/contracts/schedulingCapacity.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "assignOperatorToShift",
    "bffName": "petShop.assignOperatorToShift.assignOperatorToShift",
    "routeKey": "petShop.assignOperatorToShift.assignOperatorToShift",
    "purpose": "Alocar operador em turno",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "operatorId",
        "type": "string",
        "required": true,
        "description": "Operador selecionado pelo administrador para ser alocado no turno.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "shiftId",
        "type": "string",
        "required": true,
        "description": "Turno de trabalho selecionado pelo administrador para receber a alocação do operador.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "shiftAssignmentId",
        "type": "string",
        "description": "Identificador único da alocação de operador em turno."
      },
      {
        "name": "operatorId",
        "type": "string",
        "description": "Referência ao operador alocado neste turno."
      },
      {
        "name": "shiftId",
        "type": "string",
        "description": "Referência ao turno de trabalho ao qual o operador está alocado."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora em que a alocação foi criada."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:assignOperatorToShift",
      "operationId": "assignOperatorToShift",
      "defPath": "_102049_/l4/operations/assignOperatorToShift.defs.ts",
      "bffName": "petShop.assignOperatorToShift.assignOperatorToShift"
    }
  },
  {
    "commandName": "reviewSchedulingCapacity",
    "bffName": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
    "routeKey": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
    "purpose": "Revisar capacidade de atendimento",
    "kind": "query",
    "outputShape": "paginated",
    "input": [
      {
        "name": "shiftId",
        "type": "string",
        "required": false,
        "description": "Filtro opcional para revisar a capacidade de um turno específico",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "shiftAssignmentId",
        "type": "string",
        "description": "Identificador único da alocação de operador em turno."
      },
      {
        "name": "operatorId",
        "type": "string",
        "description": "Referência ao operador alocado neste turno."
      },
      {
        "name": "shiftId",
        "type": "string",
        "description": "Referência ao turno de trabalho ao qual o operador está alocado."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora em que a alocação foi criada."
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
        "name": "name",
        "type": "string",
        "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:reviewSchedulingCapacity",
      "operationId": "reviewSchedulingCapacity",
      "defPath": "_102049_/l4/operations/reviewSchedulingCapacity.defs.ts",
      "bffName": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity"
    }
  }
];

export const pipeline = [
  {
    "id": "schedulingCapacity__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/schedulingCapacity.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/schedulingCapacity.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
