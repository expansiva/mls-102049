/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "openShift",
    "bffName": "cafeFlow.dailyShiftLifecycle.openShift",
    "routeKey": "cafeFlow.dailyShiftLifecycle.openShift",
    "purpose": "Abrir turno",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "open",
          "closed"
        ],
        "description": "Status atual do turno: aberto ou fechado"
      },
      {
        "name": "openedAt",
        "type": "date",
        "required": true,
        "description": "Data e hora de abertura do turno"
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de fechamento do turno"
      }
    ],
    "output": [
      {
        "name": "shiftId",
        "type": "string",
        "description": "Identificador único do turno"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:openShift",
      "operationId": "openShift",
      "defPath": "_102049_/l4/operations/openShift.defs.ts",
      "bffName": "cafeFlow.dailyShiftLifecycle.openShift"
    }
  },
  {
    "commandName": "queryDashboard",
    "bffName": "cafeFlow.dailyShiftLifecycle.queryDashboard",
    "routeKey": "cafeFlow.dailyShiftLifecycle.queryDashboard",
    "purpose": "Agregação de dados do Dashboard",
    "kind": "query",
    "input": [
      {
        "name": "shiftId",
        "type": "string",
        "required": false,
        "description": "Identificador único do turno"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "open",
          "closed"
        ],
        "description": "Status atual do turno: aberto ou fechado"
      },
      {
        "name": "openedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de abertura do turno"
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de fechamento do turno"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "output": [
      {
        "name": "shiftId",
        "type": "string",
        "description": "Identificador único do turno"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "open",
          "closed"
        ],
        "description": "Status atual do turno: aberto ou fechado"
      },
      {
        "name": "openedAt",
        "type": "date",
        "description": "Data e hora de abertura do turno"
      },
      {
        "name": "closedAt",
        "type": "date",
        "description": "Data e hora de fechamento do turno"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:queryDashboard",
      "operationId": "queryDashboard",
      "defPath": "_102049_/l4/operations/queryDashboard.defs.ts",
      "bffName": "cafeFlow.dailyShiftLifecycle.queryDashboard"
    }
  },
  {
    "commandName": "closeShift",
    "bffName": "cafeFlow.dailyShiftLifecycle.closeShift",
    "routeKey": "cafeFlow.dailyShiftLifecycle.closeShift",
    "purpose": "Fechar turno",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "open",
          "closed"
        ],
        "description": "Status atual do turno: aberto ou fechado"
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de fechamento do turno"
      }
    ],
    "output": [
      {
        "name": "shiftId",
        "type": "string",
        "description": "Identificador único do turno"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:closeShift",
      "operationId": "closeShift",
      "defPath": "_102049_/l4/operations/closeShift.defs.ts",
      "bffName": "cafeFlow.dailyShiftLifecycle.closeShift"
    }
  },
  {
    "commandName": "generateShiftClosingReport",
    "bffName": "cafeFlow.dailyShiftLifecycle.generateShiftClosingReport",
    "routeKey": "cafeFlow.dailyShiftLifecycle.generateShiftClosingReport",
    "purpose": "Gerar relatório de fechamento de turno",
    "kind": "query",
    "input": [
      {
        "name": "shiftId",
        "type": "string",
        "required": false,
        "description": "Identificador único do turno"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "open",
          "closed"
        ],
        "description": "Status atual do turno: aberto ou fechado"
      },
      {
        "name": "openedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de abertura do turno"
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de fechamento do turno"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "output": [
      {
        "name": "shiftId",
        "type": "string",
        "description": "Identificador único do turno"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "open",
          "closed"
        ],
        "description": "Status atual do turno: aberto ou fechado"
      },
      {
        "name": "openedAt",
        "type": "date",
        "description": "Data e hora de abertura do turno"
      },
      {
        "name": "closedAt",
        "type": "date",
        "description": "Data e hora de fechamento do turno"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:generateShiftClosingReport",
      "operationId": "generateShiftClosingReport",
      "defPath": "_102049_/l4/operations/generateShiftClosingReport.defs.ts",
      "bffName": "cafeFlow.dailyShiftLifecycle.generateShiftClosingReport"
    }
  }
];

export const pipeline = [
  {
    "id": "ws-manager-shift__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.ts",
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
