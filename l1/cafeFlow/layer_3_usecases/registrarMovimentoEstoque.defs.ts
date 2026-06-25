/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/registrarMovimentoEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "registrarMovimentoEstoque",
  "title": "Registrar movimento de estoque",
  "purpose": "Registra entrada, saída ou ajuste de estoque",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "inventoryEntity"
  ],
  "outputEntities": [
    "inventoryEntity"
  ],
  "readsTables": [
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "order_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "StockUnit",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "inventory_movements",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_alert_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "operational_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "inventoryDecrementRule",
    "lowStockAlertRule"
  ],
  "entityRefs": [
    "inventoryItem",
    "order",
    "salesSummary"
  ],
  "commands": [
    {
      "commandId": "registrarMovimentoEstoque",
      "input": [
        {
          "name": "inventoryItemId",
          "type": "string",
          "required": true
        },
        {
          "name": "movementType",
          "type": "string",
          "required": true
        },
        {
          "name": "quantity",
          "type": "number",
          "required": true
        },
        {
          "name": "orderId",
          "type": "string",
          "required": false
        },
        {
          "name": "reason",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "movementId",
          "type": "string"
        },
        {
          "name": "inventoryItemId",
          "type": "string"
        },
        {
          "name": "newQuantity",
          "type": "number"
        },
        {
          "name": "lowStockAlert",
          "type": "boolean"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais são os campos obrigatórios do inventoryEntity para registrar o movimento (por exemplo: stockUnitId, warehouseId)?",
    "movementType é um enum específico (entrada/saida/ajuste) ou livre?",
    "Precisamos retornar mais dados do inventoryEntity atualizado além de newQuantity?",
    "orderId é obrigatório quando o movimento é saída vinculada a pedido?",
    "Há necessidade de informar lote/validadade ou localização?"
  ]
} as const;

export default useCase;
