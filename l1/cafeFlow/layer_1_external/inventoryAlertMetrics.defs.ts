/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/inventoryAlertMetrics.defs.ts" enhancement="_blank"/>

export const inventoryAlertMetricsTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "inventoryAlertMetrics",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 52,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "inventoryAlertMetrics",
      "tableName": "inventory_alert_metrics",
      "moduleId": "cafeFlow",
      "title": "Alertas de estoque baixo",
      "purpose": "Monitorar níveis de estoque e disparar alertas quando itens atingirem quantidade mínima.",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "recorded_at",
      "columns": [
        {
          "name": "recorded_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Timestamp de registro da métrica."
        },
        {
          "name": "inventory_item_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do item de estoque."
        },
        {
          "name": "stock_unit_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador da unidade de medida."
        },
        {
          "name": "movement_type",
          "type": "string",
          "nullable": false,
          "description": "Tipo de movimentação."
        },
        {
          "name": "order_id",
          "type": "uuid",
          "nullable": true,
          "description": "Identificador do pedido relacionado."
        },
        {
          "name": "table_seat_id",
          "type": "uuid",
          "nullable": true,
          "description": "Identificador da mesa/comanda relacionada ao pedido."
        },
        {
          "name": "daily_shift_id",
          "type": "uuid",
          "nullable": true,
          "description": "Identificador do turno diário relacionado ao pedido."
        },
        {
          "name": "order_status_id",
          "type": "uuid",
          "nullable": true,
          "description": "Identificador do status do pedido."
        },
        {
          "name": "current_stock",
          "type": "decimal",
          "nullable": false,
          "description": "Estoque atual do item."
        },
        {
          "name": "low_stock_alert_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Contagem de alertas de estoque baixo."
        },
        {
          "name": "quantity_delta",
          "type": "decimal",
          "nullable": false,
          "description": "Variação de quantidade em movimentações."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "inventoryItemId",
          "column": "inventory_item_id",
          "type": "string",
          "description": "Identificador do item de estoque"
        },
        {
          "dimensionId": "stockUnitId",
          "column": "stock_unit_id",
          "type": "string",
          "description": "Identificador da unidade de medida"
        },
        {
          "dimensionId": "movementType",
          "column": "movement_type",
          "type": "string",
          "description": "Tipo de movimentação"
        },
        {
          "dimensionId": "orderId",
          "column": "order_id",
          "type": "string",
          "description": "Identificador do pedido relacionado"
        },
        {
          "dimensionId": "tableSeatId",
          "column": "table_seat_id",
          "type": "text",
          "description": "FK dimension derived from ontology relationship orderTableSeat (Order -> TableSeat)"
        },
        {
          "dimensionId": "dailyShiftId",
          "column": "daily_shift_id",
          "type": "text",
          "description": "FK dimension derived from ontology relationship shiftOrders (Order -> DailyShift)"
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
          "measureId": "currentStock",
          "column": "current_stock",
          "aggregation": "last",
          "unit": "unit",
          "description": "Estoque atual do item"
        },
        {
          "measureId": "lowStockAlertCount",
          "column": "low_stock_alert_count",
          "aggregation": "sum",
          "unit": "count",
          "description": "Contagem de alertas de estoque baixo"
        },
        {
          "measureId": "quantityDelta",
          "column": "quantity_delta",
          "aggregation": "sum",
          "unit": "unit",
          "description": "Variação de quantidade em movimentações"
        }
      ],
      "sourceWriteEvents": [
        "inventoryMovement.created",
        "inventoryItem.updated"
      ],
      "hypertable": {
        "timeColumn": "recorded_at",
        "chunkTimeInterval": "1 day",
        "retentionPolicy": "90 days",
        "compressionPolicy": "7 days",
        "indexes": [
          {
            "indexName": "idx_inventory_alert_metrics_recorded_at",
            "columns": [
              "recorded_at"
            ],
            "purpose": "Filtro temporal padrão para métricas de alerta."
          },
          {
            "indexName": "idx_inventory_alert_metrics_item_time",
            "columns": [
              "inventory_item_id",
              "recorded_at"
            ],
            "purpose": "Análise temporal por item de estoque."
          },
          {
            "indexName": "idx_inventory_alert_metrics_stock_unit_time",
            "columns": [
              "stock_unit_id",
              "recorded_at"
            ],
            "purpose": "Agrupamentos por unidade de medida no tempo."
          },
          {
            "indexName": "idx_inventory_alert_metrics_movement_type_time",
            "columns": [
              "movement_type",
              "recorded_at"
            ],
            "purpose": "Filtrar por tipo de movimentação ao longo do tempo."
          },
          {
            "indexName": "idx_inventory_alert_metrics_order_time",
            "columns": [
              "order_id",
              "recorded_at"
            ],
            "purpose": "Rastreio temporal por pedido relacionado."
          },
          {
            "indexName": "idx_inventory_alert_metrics_table_seat_time",
            "columns": [
              "table_seat_id",
              "recorded_at"
            ],
            "purpose": "Rastreio temporal por mesa/comanda."
          },
          {
            "indexName": "idx_inventory_alert_metrics_daily_shift_time",
            "columns": [
              "daily_shift_id",
              "recorded_at"
            ],
            "purpose": "Rastreio temporal por turno diário."
          },
          {
            "indexName": "idx_inventory_alert_metrics_order_status_time",
            "columns": [
              "order_status_id",
              "recorded_at"
            ],
            "purpose": "Rastreio temporal por status do pedido."
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "manageInventory",
          "recordInventoryMovement"
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
        "lowStockAlertRule",
        "inventoryDecrementRule"
      ]
    },
    "defsPlan": {
      "fileName": "tables/inventoryAlertMetrics.defs.ts",
      "exportName": "inventoryAlertMetricsTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default inventoryAlertMetricsTableDefinition;
