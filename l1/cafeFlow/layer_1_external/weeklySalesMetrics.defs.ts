/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/weeklySalesMetrics.defs.ts" enhancement="_blank"/>

export const weeklySalesMetricsTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "weeklySalesMetrics",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 53,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "weeklySalesMetrics",
      "tableName": "weekly_sales_metrics",
      "moduleId": "cafeFlow",
      "title": "Vendas dos últimos 7 dias",
      "purpose": "Analisar tendência de vendas e comparar desempenho semanal.",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "recorded_at",
      "columns": [
        {
          "name": "recorded_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora do registro da métrica."
        },
        {
          "name": "order_id",
          "type": "text",
          "nullable": false,
          "description": "Identificador do pedido."
        },
        {
          "name": "daily_shift_id",
          "type": "text",
          "nullable": false,
          "description": "Identificador do turno diário."
        },
        {
          "name": "menu_item_id",
          "type": "text",
          "nullable": false,
          "description": "Identificador do item do cardápio."
        },
        {
          "name": "menu_category_id",
          "type": "text",
          "nullable": false,
          "description": "Identificador da categoria do cardápio."
        },
        {
          "name": "order_status_id",
          "type": "text",
          "nullable": false,
          "description": "Identificador do status do pedido."
        },
        {
          "name": "table_seat_id",
          "type": "text",
          "nullable": true,
          "description": "Identificador da mesa/comanda."
        },
        {
          "name": "inventory_item_id",
          "type": "text",
          "nullable": true,
          "description": "Identificador do item de estoque vinculado ao item do cardápio."
        },
        {
          "name": "revenue",
          "type": "numeric",
          "nullable": false,
          "default": 0,
          "description": "Receita total no intervalo."
        },
        {
          "name": "order_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Total de pedidos no intervalo."
        },
        {
          "name": "items_sold",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Total de itens vendidos no intervalo."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "orderId",
          "column": "order_id",
          "type": "string",
          "description": "Identificador do pedido"
        },
        {
          "dimensionId": "dailyShiftId",
          "column": "daily_shift_id",
          "type": "string",
          "description": "Identificador do turno diário"
        },
        {
          "dimensionId": "menuItemId",
          "column": "menu_item_id",
          "type": "string",
          "description": "Identificador do item do cardápio"
        },
        {
          "dimensionId": "menuCategoryId",
          "column": "menu_category_id",
          "type": "string",
          "description": "Identificador da categoria"
        },
        {
          "dimensionId": "orderStatusId",
          "column": "order_status_id",
          "type": "string",
          "description": "Identificador do status do pedido"
        },
        {
          "dimensionId": "tableSeatId",
          "column": "table_seat_id",
          "type": "text",
          "description": "FK dimension derived from ontology relationship orderTableSeat (Order -> TableSeat)"
        },
        {
          "dimensionId": "inventoryItemId",
          "column": "inventory_item_id",
          "type": "text",
          "description": "FK dimension derived from ontology relationship menuItemInventory (MenuItem -> InventoryItem)"
        }
      ],
      "measures": [
        {
          "measureId": "revenue",
          "column": "revenue",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Receita total"
        },
        {
          "measureId": "orderCount",
          "column": "order_count",
          "aggregation": "sum",
          "unit": "count",
          "description": "Total de pedidos"
        },
        {
          "measureId": "itemsSold",
          "column": "items_sold",
          "aggregation": "sum",
          "unit": "count",
          "description": "Total de itens vendidos"
        }
      ],
      "sourceWriteEvents": [
        "order.created",
        "orderItem.created",
        "order.statusUpdated"
      ],
      "hypertable": {
        "timeColumn": "recorded_at",
        "chunkTimeInterval": "1 day",
        "retentionPolicy": "1 year",
        "indexes": [
          {
            "indexName": "idx_weekly_sales_metrics_recorded_at",
            "columns": [
              "recorded_at"
            ],
            "purpose": "Leitura temporal padrão das métricas.",
            "unique": false
          },
          {
            "indexName": "idx_weekly_sales_metrics_daily_shift_time",
            "columns": [
              "daily_shift_id",
              "recorded_at"
            ],
            "purpose": "Filtrar por turno e período.",
            "unique": false
          },
          {
            "indexName": "idx_weekly_sales_metrics_menu_item_time",
            "columns": [
              "menu_item_id",
              "recorded_at"
            ],
            "purpose": "Consultas por item do cardápio no período.",
            "unique": false
          },
          {
            "indexName": "idx_weekly_sales_metrics_menu_category_time",
            "columns": [
              "menu_category_id",
              "recorded_at"
            ],
            "purpose": "Consultas por categoria no período.",
            "unique": false
          },
          {
            "indexName": "idx_weekly_sales_metrics_order_status_time",
            "columns": [
              "order_status_id",
              "recorded_at"
            ],
            "purpose": "Análise por status do pedido no período.",
            "unique": false
          },
          {
            "indexName": "idx_weekly_sales_metrics_table_seat_time",
            "columns": [
              "table_seat_id",
              "recorded_at"
            ],
            "purpose": "Consultas por mesa/comanda no período.",
            "unique": false
          },
          {
            "indexName": "idx_weekly_sales_metrics_inventory_item_time",
            "columns": [
              "inventory_item_id",
              "recorded_at"
            ],
            "purpose": "Consultas por item de estoque no período.",
            "unique": false
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false
      },
      "accessPolicy": {
        "directAccessAllowedFor": [
          "layer_3_usecases"
        ],
        "forbiddenFor": [
          "pages",
          "layer_2_controllers",
          "agents"
        ]
      },
      "rulesApplied": [
        "orderStatusLifecycle"
      ]
    },
    "defsPlan": {
      "fileName": "tables/weeklySalesMetrics.defs.ts",
      "exportName": "weeklySalesMetricsTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default weeklySalesMetricsTableDefinition;
