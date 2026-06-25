/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/criarPedido.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarPedido",
  "title": "Criar pedido",
  "purpose": "Registra um novo pedido com seus itens e atualiza métricas de vendas",
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
      "tableName": "table_seats",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "MenuItem",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "OrderStatus",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "order_items",
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
    "menuItem",
    "order",
    "salesSummary"
  ],
  "commands": [
    {
      "commandId": "criarPedido",
      "input": [
        {
          "name": "order",
          "type": "orderEntity",
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
