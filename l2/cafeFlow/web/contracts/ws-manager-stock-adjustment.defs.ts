/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "queryStockLevels",
    "bffName": "cafeFlow.queryStockLevels.queryStockLevels",
    "routeKey": "cafeFlow.queryStockLevels.queryStockLevels",
    "purpose": "Consultar níveis de estoque",
    "kind": "query",
    "input": [
      {
        "name": "stockItemId",
        "type": "string",
        "required": false,
        "description": "Referência ao item de estoque cadastrado (MDM)"
      },
      {
        "name": "lastMovementAt",
        "type": "date",
        "required": false,
        "description": "Timestamp da última movimentação de estoque"
      }
    ],
    "output": [
      {
        "name": "stockItemId",
        "type": "string",
        "description": "Referência ao item de estoque cadastrado (MDM)"
      },
      {
        "name": "currentQuantity",
        "type": "number",
        "description": "Quantidade atual do insumo em estoque"
      },
      {
        "name": "lastMovementAt",
        "type": "date",
        "description": "Timestamp da última movimentação de estoque"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:queryStockLevels",
      "operationId": "queryStockLevels",
      "defPath": "_102049_/l4/operations/queryStockLevels.defs.ts",
      "bffName": "cafeFlow.queryStockLevels.queryStockLevels"
    }
  },
  {
    "commandName": "adjustStockLevel",
    "bffName": "cafeFlow.adjustStockLevel.adjustStockLevel",
    "routeKey": "cafeFlow.adjustStockLevel.adjustStockLevel",
    "purpose": "Ajustar e repor estoque",
    "kind": "command",
    "input": [
      {
        "name": "currentQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade atual do insumo em estoque"
      },
      {
        "name": "lastMovementAt",
        "type": "date",
        "required": true,
        "description": "Timestamp da última movimentação de estoque"
      }
    ],
    "output": [
      {
        "name": "stockLevelId",
        "type": "string",
        "description": "Identificador único do nível de estoque"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:adjustStockLevel",
      "operationId": "adjustStockLevel",
      "defPath": "_102049_/l4/operations/adjustStockLevel.defs.ts",
      "bffName": "cafeFlow.adjustStockLevel.adjustStockLevel"
    }
  }
];

export const pipeline = [
  {
    "id": "ws-manager-stock-adjustment__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.ts",
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
