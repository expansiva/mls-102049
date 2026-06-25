/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/dailySalesMetrics.defs.ts" enhancement="_blank"/>

export const dailySalesMetricsMetricTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "dailySalesMetrics",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 50,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "dailySalesMetrics",
      "tableName": "daily_sales_metrics",
      "moduleId": "cafeFlow",
      "title": "Métricas de vendas do dia",
      "purpose": "Acompanhar receita, quantidade de pedidos e ticket médio em tempo real durante o turno.",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "recorded_at",
      "columns": [
        {
          "name": "recorded_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da medição registrada."
        },
        {
          "name": "order_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do pedido."
        },
        {
          "name": "order_item_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do item do pedido."
        },
        {
          "name": "menu_item_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do item do cardápio."
        },
        {
          "name": "menu_category_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador da categoria do cardápio."
        },
        {
          "name": "daily_shift_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do turno diário."
        },
        {
          "name": "table_seat_id",
          "type": "uuid",
          "nullable": true,
          "description": "Identificador da mesa/comanda."
        },
        {
          "name": "order_status_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do status do pedido."
        },
        {
          "name": "inventory_item_id",
          "type": "uuid",
          "nullable": true,
          "description": "Identificador do item de estoque associado ao item do cardápio."
        },
        {
          "name": "revenue",
          "type": "decimal",
          "nullable": false,
          "default": 0,
          "description": "Receita gerada no registro."
        },
        {
          "name": "order_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Quantidade de pedidos no registro."
        },
        {
          "name": "items_sold",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Quantidade de itens vendidos no registro."
        },
        {
          "name": "average_ticket",
          "type": "decimal",
          "nullable": true,
          "description": "Ticket médio calculado para o período do registro."
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
          "dimensionId": "orderItemId",
          "column": "order_item_id",
          "type": "string",
          "description": "Identificador do item do pedido"
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
          "description": "Identificador da categoria do cardápio"
        },
        {
          "dimensionId": "dailyShiftId",
          "column": "daily_shift_id",
          "type": "string",
          "description": "Identificador do turno diário"
        },
        {
          "dimensionId": "tableSeatId",
          "column": "table_seat_id",
          "type": "string",
          "description": "Identificador da mesa/comanda"
        },
        {
          "dimensionId": "orderStatusId",
          "column": "order_status_id",
          "type": "string",
          "description": "Identificador do status do pedido"
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
          "description": "Receita gerada"
        },
        {
          "measureId": "orderCount",
          "column": "order_count",
          "aggregation": "sum",
          "unit": "count",
          "description": "Quantidade de pedidos"
        },
        {
          "measureId": "itemsSold",
          "column": "items_sold",
          "aggregation": "sum",
          "unit": "count",
          "description": "Quantidade de itens vendidos"
        },
        {
          "measureId": "averageTicket",
          "column": "average_ticket",
          "aggregation": "avg",
          "unit": "BRL",
          "description": "Ticket médio"
        }
      ],
      "sourceWriteEvents": [
        "order.created",
        "order.statusUpdated",
        "orderItem.created"
      ],
      "hypertable": {
        "timeColumn": "recorded_at",
        "chunkTimeInterval": "1 day",
        "retentionPolicy": "1 year",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_daily_sales_metrics_recorded_at",
            "columns": [
              "recorded_at"
            ],
            "purpose": "Filtrar e ordenar por tempo."
          },
          {
            "indexName": "idx_daily_sales_metrics_shift_time",
            "columns": [
              "daily_shift_id",
              "recorded_at"
            ],
            "purpose": "Consultas por turno e período."
          },
          {
            "indexName": "idx_daily_sales_metrics_order_status_time",
            "columns": [
              "order_status_id",
              "recorded_at"
            ],
            "purpose": "Filtrar por status e período."
          },
          {
            "indexName": "idx_daily_sales_metrics_menu_item_time",
            "columns": [
              "menu_item_id",
              "recorded_at"
            ],
            "purpose": "Agrupar por item do cardápio no tempo."
          },
          {
            "indexName": "idx_daily_sales_metrics_table_seat_time",
            "columns": [
              "table_seat_id",
              "recorded_at"
            ],
            "purpose": "Filtrar por mesa/comanda e período."
          },
          {
            "indexName": "idx_daily_sales_metrics_inventory_item_time",
            "columns": [
              "inventory_item_id",
              "recorded_at"
            ],
            "purpose": "Filtrar por item de estoque e período."
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "viewDashboard",
          "closeDailyShift"
        ]
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
        "orderStatusLifecycle",
        "inventoryDecrementRule"
      ]
    },
    "defsPlan": {
      "fileName": "tables/dailySalesMetrics.defs.ts",
      "exportName": "dailySalesMetricsMetricTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default dailySalesMetricsMetricTableDefinition;
