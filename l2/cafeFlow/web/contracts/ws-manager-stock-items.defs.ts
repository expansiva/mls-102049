/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "queryStockItems",
    "bffName": "cafeFlow.queryStockItems.queryStockItems",
    "routeKey": "cafeFlow.queryStockItems.queryStockItems",
    "purpose": "Consultar itens de estoque",
    "kind": "query",
    "input": [
      {
        "name": "stockItemId",
        "type": "string",
        "required": false,
        "description": "Identificador único do item de estoque"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome do insumo"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do item de estoque"
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
        "name": "stockItemId",
        "type": "string",
        "description": "Identificador único do item de estoque"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do insumo"
      },
      {
        "name": "unitOfMeasure",
        "type": "string",
        "description": "Unidade de medida do insumo (ex: kg, unidade, litro)"
      },
      {
        "name": "minimumQuantity",
        "type": "number",
        "description": "Quantidade mínima para alerta de estoque baixo"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do item de estoque"
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
      "ownerId": "operation:queryStockItems",
      "operationId": "queryStockItems",
      "defPath": "_102049_/l4/operations/queryStockItems.defs.ts",
      "bffName": "cafeFlow.queryStockItems.queryStockItems"
    }
  },
  {
    "commandName": "createStockItem",
    "bffName": "cafeFlow.createStockItem.createStockItem",
    "routeKey": "cafeFlow.createStockItem.createStockItem",
    "purpose": "Cadastrar item de estoque",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do insumo"
      },
      {
        "name": "unitOfMeasure",
        "type": "string",
        "required": true,
        "description": "Unidade de medida do insumo (ex: kg, unidade, litro)"
      },
      {
        "name": "minimumQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade mínima para alerta de estoque baixo"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do item de estoque"
      }
    ],
    "output": [
      {
        "name": "stockItemId",
        "type": "string",
        "description": "Identificador único do item de estoque"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createStockItem",
      "operationId": "createStockItem",
      "defPath": "_102049_/l4/operations/createStockItem.defs.ts",
      "bffName": "cafeFlow.createStockItem.createStockItem"
    }
  },
  {
    "commandName": "updateStockItem",
    "bffName": "cafeFlow.updateStockItem.updateStockItem",
    "routeKey": "cafeFlow.updateStockItem.updateStockItem",
    "purpose": "Editar item de estoque",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do insumo"
      },
      {
        "name": "unitOfMeasure",
        "type": "string",
        "required": true,
        "description": "Unidade de medida do insumo (ex: kg, unidade, litro)"
      },
      {
        "name": "minimumQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade mínima para alerta de estoque baixo"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do item de estoque"
      }
    ],
    "output": [
      {
        "name": "stockItemId",
        "type": "string",
        "description": "Identificador único do item de estoque"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateStockItem",
      "operationId": "updateStockItem",
      "defPath": "_102049_/l4/operations/updateStockItem.defs.ts",
      "bffName": "cafeFlow.updateStockItem.updateStockItem"
    }
  },
  {
    "commandName": "deleteStockItem",
    "bffName": "cafeFlow.deleteStockItem.deleteStockItem",
    "routeKey": "cafeFlow.deleteStockItem.deleteStockItem",
    "purpose": "Remover item de estoque",
    "kind": "command",
    "input": [
      {
        "name": "stockItemId",
        "type": "string",
        "required": false,
        "description": "Identificador único do item de estoque"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do insumo"
      },
      {
        "name": "unitOfMeasure",
        "type": "string",
        "required": true,
        "description": "Unidade de medida do insumo (ex: kg, unidade, litro)"
      },
      {
        "name": "minimumQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade mínima para alerta de estoque baixo"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do item de estoque"
      }
    ],
    "output": [
      {
        "name": "stockItemId",
        "type": "string",
        "description": "Identificador único do item de estoque"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:deleteStockItem",
      "operationId": "deleteStockItem",
      "defPath": "_102049_/l4/operations/deleteStockItem.defs.ts",
      "bffName": "cafeFlow.deleteStockItem.deleteStockItem"
    }
  }
];

export const pipeline = [
  {
    "id": "ws-manager-stock-items__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.ts",
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
