/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "queryComboRules",
    "bffName": "cafeFlow.queryComboRules.queryComboRules",
    "routeKey": "cafeFlow.queryComboRules.queryComboRules",
    "purpose": "Consultar regras de combo e substituição",
    "kind": "query",
    "input": [
      {
        "name": "comboRuleId",
        "type": "string",
        "required": false,
        "description": "Identificador único da regra de combo/substituição"
      },
      {
        "name": "menuItemId",
        "type": "string",
        "required": false,
        "description": "Item do cardápio ao qual a regra se aplica"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome descritivo da regra"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da regra no ciclo de vida"
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
        "name": "comboRuleId",
        "type": "string",
        "description": "Identificador único da regra de combo/substituição"
      },
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Item do cardápio ao qual a regra se aplica"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome descritivo da regra"
      },
      {
        "name": "description",
        "type": "string",
        "description": "Detalhamento da regra e condições de aplicação"
      },
      {
        "name": "priceDifference",
        "type": "number",
        "description": "Diferença de preço aplicada no combo ou substituição"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da regra no ciclo de vida"
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
      "ownerId": "operation:queryComboRules",
      "operationId": "queryComboRules",
      "defPath": "_102049_/l4/operations/queryComboRules.defs.ts",
      "bffName": "cafeFlow.queryComboRules.queryComboRules"
    }
  },
  {
    "commandName": "createComboRule",
    "bffName": "cafeFlow.createComboRule.createComboRule",
    "routeKey": "cafeFlow.createComboRule.createComboRule",
    "purpose": "Criar regra de combo e substituição",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome descritivo da regra"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Detalhamento da regra e condições de aplicação"
      },
      {
        "name": "priceDifference",
        "type": "number",
        "required": true,
        "description": "Diferença de preço aplicada no combo ou substituição"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da regra no ciclo de vida"
      }
    ],
    "output": [
      {
        "name": "comboRuleId",
        "type": "string",
        "description": "Identificador único da regra de combo/substituição"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createComboRule",
      "operationId": "createComboRule",
      "defPath": "_102049_/l4/operations/createComboRule.defs.ts",
      "bffName": "cafeFlow.createComboRule.createComboRule"
    }
  },
  {
    "commandName": "updateComboRule",
    "bffName": "cafeFlow.updateComboRule.updateComboRule",
    "routeKey": "cafeFlow.updateComboRule.updateComboRule",
    "purpose": "Editar regra de combo e substituição",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome descritivo da regra"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Detalhamento da regra e condições de aplicação"
      },
      {
        "name": "priceDifference",
        "type": "number",
        "required": true,
        "description": "Diferença de preço aplicada no combo ou substituição"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da regra no ciclo de vida"
      }
    ],
    "output": [
      {
        "name": "comboRuleId",
        "type": "string",
        "description": "Identificador único da regra de combo/substituição"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateComboRule",
      "operationId": "updateComboRule",
      "defPath": "_102049_/l4/operations/updateComboRule.defs.ts",
      "bffName": "cafeFlow.updateComboRule.updateComboRule"
    }
  },
  {
    "commandName": "deleteComboRule",
    "bffName": "cafeFlow.deleteComboRule.deleteComboRule",
    "routeKey": "cafeFlow.deleteComboRule.deleteComboRule",
    "purpose": "Remover regra de combo e substituição",
    "kind": "command",
    "input": [
      {
        "name": "comboRuleId",
        "type": "string",
        "required": false,
        "description": "Identificador único da regra de combo/substituição"
      },
      {
        "name": "menuItemId",
        "type": "string",
        "required": false,
        "description": "Item do cardápio ao qual a regra se aplica"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome descritivo da regra"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Detalhamento da regra e condições de aplicação"
      },
      {
        "name": "priceDifference",
        "type": "number",
        "required": true,
        "description": "Diferença de preço aplicada no combo ou substituição"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação da regra no ciclo de vida"
      }
    ],
    "output": [
      {
        "name": "comboRuleId",
        "type": "string",
        "description": "Identificador único da regra de combo/substituição"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:deleteComboRule",
      "operationId": "deleteComboRule",
      "defPath": "_102049_/l4/operations/deleteComboRule.defs.ts",
      "bffName": "cafeFlow.deleteComboRule.deleteComboRule"
    }
  }
];

export const pipeline = [
  {
    "id": "ws-manager-combo-rules__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.ts",
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
