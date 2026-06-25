/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/visualizarDashboard.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "visualizarDashboard",
  "title": "Visualizar dashboard",
  "purpose": "Apresenta métricas operacionais e de vendas",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "salesAIEntity",
    "orderEntity",
    "inventoryEntity"
  ],
  "outputEntities": [
    "salesAIEntity"
  ],
  "readsTables": [
    {
      "tableName": "daily_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "top_selling_items_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_alert_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "weekly_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "operational_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "daily_shifts",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "dailyShift",
    "order",
    "salesSummary"
  ],
  "commands": [
    {
      "commandId": "getDashboardMetrics",
      "input": [],
      "output": [
        {
          "name": "dailySalesMetrics",
          "type": "dailySalesMetrics[]"
        },
        {
          "name": "topSellingItemsMetrics",
          "type": "topSellingItemsMetrics[]"
        },
        {
          "name": "inventoryAlertMetrics",
          "type": "inventoryAlertMetrics[]"
        },
        {
          "name": "weeklySalesMetrics",
          "type": "weeklySalesMetrics[]"
        },
        {
          "name": "operationalMetrics",
          "type": "operationalMetrics[]"
        },
        {
          "name": "orders",
          "type": "order[]"
        },
        {
          "name": "dailyShifts",
          "type": "dailyShift[]"
        },
        {
          "name": "salesAIEntity",
          "type": "salesAIEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
