/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/cancelarPedido.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "cancelarPedido",
  "title": "Cancelar pedido",
  "purpose": "Cancela um pedido e reverte métricas de vendas",
  "actor": "attendantCashier",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "orderEntity"
  ],
  "outputEntities": [
    "orderEntity"
  ],
  "readsTables": [
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "order_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_movements",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "daily_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "top_selling_items_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "weekly_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "operational_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "orderStatusLifecycle",
    "inventoryDecrementRule"
  ],
  "entityRefs": [
    "inventoryItem",
    "order",
    "salesSummary"
  ],
  "commands": [
    {
      "commandId": "cancelOrder",
      "input": [
        {
          "name": "orderId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "order",
          "type": "orderEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
