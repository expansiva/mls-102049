/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/topSellingItemsMetrics.defs.ts" enhancement="_blank"/>

export const topSellingItemsMetricsTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "topSellingItemsMetrics",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 51,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "topSellingItemsMetrics",
      "tableName": "top_selling_items_metrics",
      "moduleId": "cafeFlow",
      "title": "Itens mais vendidos",
      "purpose": "Identificar quais produtos do cardápio têm maior saída por período.",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "recorded_at",
      "columns": [
        {
          "name": "recorded_at",
          "type": "datetime",
          "nullable": false,
          "description": "Momento de registro da métrica."
        },
        {
          "name": "menu_item_id",
          "type": "string",
          "nullable": false,
          "description": "Identificador do item do cardápio"
        },
        {
          "name": "menu_category_id",
          "type": "string",
          "nullable": false,
          "description": "Identificador da categoria"
        },
        {
          "name": "order_id",
          "type": "string",
          "nullable": false,
          "description": "Identificador do pedido"
        },
        {
          "name": "daily_shift_id",
          "type": "string",
          "nullable": false,
          "description": "Identificador do turno diário"
        },
        {
          "name": "table_seat_id",
          "type": "text",
          "nullable": true,
          "description": "FK dimension derived from ontology relationship orderTableSeat (Order -> TableSeat)"
        },
        {
          "name": "inventory_item_id",
          "type": "text",
          "nullable": true,
          "description": "FK dimension derived from ontology relationship menuItemInventory (MenuItem -> InventoryItem)"
        },
        {
          "name": "order_status_id",
          "type": "text",
          "nullable": true,
          "description": "FK dimension derived from ontology relationship orderStatusRef (Order -> OrderStatus)"
        },
        {
          "name": "quantity_sold",
          "type": "integer",
          "nullable": false,
          "description": "Quantidade vendida do item"
        },
        {
          "name": "revenue",
          "type": "decimal",
          "nullable": false,
          "description": "Receita gerada pelo item"
        }
      ],
      "dimensions": [
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
        },
        {
          "dimensionId": "orderStatusId",
          "column": "order_status_id",
          "type": "text",
          "description": "FK dimension derived from ontology relationship orderStatusRef (Order -> OrderStatus)"
        }
      ],
      "measures": [
        {
          "measureId": "quantitySold",
          "column": "quantity_sold",
          "aggregation": "sum",
          "unit": "count",
          "description": "Quantidade vendida do item"
        },
        {
          "measureId": "revenue",
          "column": "revenue",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Receita gerada pelo item"
        }
      ],
      "sourceWriteEvents": [
        "orderItem.created",
        "order.statusUpdated"
      ],
      "hypertable": {
        "timeColumn": "recorded_at",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "1 year",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_top_selling_items_metrics_recorded_at",
            "columns": [
              "recorded_at"
            ],
            "purpose": "Ordenação e filtros temporais."
          },
          {
            "indexName": "idx_top_selling_items_metrics_menu_item_time",
            "columns": [
              "menu_item_id",
              "recorded_at"
            ],
            "purpose": "Consulta por item do cardápio por período."
          },
          {
            "indexName": "idx_top_selling_items_metrics_menu_category_time",
            "columns": [
              "menu_category_id",
              "recorded_at"
            ],
            "purpose": "Consulta por categoria por período."
          },
          {
            "indexName": "idx_top_selling_items_metrics_order_time",
            "columns": [
              "order_id",
              "recorded_at"
            ],
            "purpose": "Consulta por pedido e período."
          },
          {
            "indexName": "idx_top_selling_items_metrics_daily_shift_time",
            "columns": [
              "daily_shift_id",
              "recorded_at"
            ],
            "purpose": "Consulta por turno diário e período."
          },
          {
            "indexName": "idx_top_selling_items_metrics_table_seat_time",
            "columns": [
              "table_seat_id",
              "recorded_at"
            ],
            "purpose": "Consulta por mesa/comanda e período."
          },
          {
            "indexName": "idx_top_selling_items_metrics_inventory_item_time",
            "columns": [
              "inventory_item_id",
              "recorded_at"
            ],
            "purpose": "Consulta por item de estoque associado ao item vendido."
          },
          {
            "indexName": "idx_top_selling_items_metrics_order_status_time",
            "columns": [
              "order_status_id",
              "recorded_at"
            ],
            "purpose": "Consulta por status do pedido no período."
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "manageOrders",
          "updateOrderStatus",
          "cancelOrder"
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
        "orderStatusLifecycle"
      ]
    },
    "defsPlan": {
      "fileName": "tables/topSellingItemsMetrics.defs.ts",
      "exportName": "topSellingItemsMetricsTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default topSellingItemsMetricsTableDefinition;
