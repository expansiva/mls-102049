/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "queryTables",
    "bffName": "cafeFlow.queryTables.queryTables",
    "routeKey": "cafeFlow.queryTables.queryTables",
    "purpose": "Consultar mesas",
    "kind": "query",
    "input": [
      {
        "name": "tableId",
        "type": "string",
        "required": false,
        "description": "Identificador único da mesa"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da mesa no sistema"
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
        "name": "tableId",
        "type": "string",
        "description": "Identificador único da mesa"
      },
      {
        "name": "number",
        "type": "string",
        "description": "Número ou código de identificação visual da mesa (ex: 01, 12, A3)"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da mesa no sistema"
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
      "ownerId": "operation:queryTables",
      "operationId": "queryTables",
      "defPath": "_102049_/l4/operations/queryTables.defs.ts",
      "bffName": "cafeFlow.queryTables.queryTables"
    }
  },
  {
    "commandName": "createTable",
    "bffName": "cafeFlow.createTable.createTable",
    "routeKey": "cafeFlow.createTable.createTable",
    "purpose": "Cadastrar mesa",
    "kind": "command",
    "input": [
      {
        "name": "number",
        "type": "string",
        "required": true,
        "description": "Número ou código de identificação visual da mesa (ex: 01, 12, A3)"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da mesa no sistema"
      }
    ],
    "output": [
      {
        "name": "tableId",
        "type": "string",
        "description": "Identificador único da mesa"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createTable",
      "operationId": "createTable",
      "defPath": "_102049_/l4/operations/createTable.defs.ts",
      "bffName": "cafeFlow.createTable.createTable"
    }
  },
  {
    "commandName": "updateTable",
    "bffName": "cafeFlow.updateTable.updateTable",
    "routeKey": "cafeFlow.updateTable.updateTable",
    "purpose": "Editar mesa",
    "kind": "command",
    "input": [
      {
        "name": "number",
        "type": "string",
        "required": true,
        "description": "Número ou código de identificação visual da mesa (ex: 01, 12, A3)"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da mesa no sistema"
      }
    ],
    "output": [
      {
        "name": "tableId",
        "type": "string",
        "description": "Identificador único da mesa"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateTable",
      "operationId": "updateTable",
      "defPath": "_102049_/l4/operations/updateTable.defs.ts",
      "bffName": "cafeFlow.updateTable.updateTable"
    }
  },
  {
    "commandName": "deleteTable",
    "bffName": "cafeFlow.deleteTable.deleteTable",
    "routeKey": "cafeFlow.deleteTable.deleteTable",
    "purpose": "Remover mesa",
    "kind": "command",
    "input": [
      {
        "name": "tableId",
        "type": "string",
        "required": false,
        "description": "Identificador único da mesa"
      },
      {
        "name": "number",
        "type": "string",
        "required": true,
        "description": "Número ou código de identificação visual da mesa (ex: 01, 12, A3)"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da mesa no sistema"
      }
    ],
    "output": [
      {
        "name": "tableId",
        "type": "string",
        "description": "Identificador único da mesa"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:deleteTable",
      "operationId": "deleteTable",
      "defPath": "_102049_/l4/operations/deleteTable.defs.ts",
      "bffName": "cafeFlow.deleteTable.deleteTable"
    }
  }
];

export const pipeline = [
  {
    "id": "ws-manager-tables__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.ts",
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
