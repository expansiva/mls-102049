/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/order.defs.ts" enhancement="_blank"/>

export const orderTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "order",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 46,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "order",
      "tableName": "orders",
      "moduleId": "cafeFlow",
      "title": "Pedidos",
      "purpose": "Persistir pedidos do POS e seu ciclo de status.",
      "ownership": "moduleOwned",
      "rootEntity": "Order",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "order_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único do pedido."
        },
        {
          "name": "origin_type",
          "type": "string",
          "nullable": false,
          "description": "Origem do pedido (mesa ou takeout)."
        },
        {
          "name": "table_seat_id",
          "type": "uuid",
          "nullable": true,
          "description": "Referência opcional à mesa/comanda associada ao pedido."
        },
        {
          "name": "daily_shift_id",
          "type": "uuid",
          "nullable": false,
          "description": "Turno diário ao qual o pedido pertence."
        },
        {
          "name": "order_status_id",
          "type": "uuid",
          "nullable": false,
          "description": "Status padronizado atual do pedido."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do pedido."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do pedido."
        }
      ],
      "primaryKey": [
        "order_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "table_seat_id",
          "targetEntity": "TableSeat",
          "targetOwnership": "moduleOwned",
          "reason": "Vincular pedido à mesa/comanda quando aplicável."
        },
        {
          "fieldName": "daily_shift_id",
          "targetEntity": "DailyShift",
          "targetOwnership": "moduleOwned",
          "reason": "Filtrar pedidos por turno diário e métricas operacionais."
        },
        {
          "fieldName": "order_status_id",
          "targetEntity": "OrderStatus",
          "targetOwnership": "mdmOwned",
          "reason": "Status padronizado do pedido definido em MDM."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_orders_daily_shift_id_created_at",
          "columns": [
            "daily_shift_id",
            "created_at"
          ],
          "reason": "Consultas por turno e período no dashboard e fluxo de pedido."
        },
        {
          "indexName": "idx_orders_order_status_id",
          "columns": [
            "order_status_id"
          ],
          "reason": "Filtrar por status no painel da cozinha e fluxo de preparo."
        },
        {
          "indexName": "idx_orders_table_seat_id",
          "columns": [
            "table_seat_id"
          ],
          "reason": "Recuperar pedidos ativos por mesa/comanda."
        },
        {
          "indexName": "idx_orders_origin_type_created_at",
          "columns": [
            "origin_type",
            "created_at"
          ],
          "reason": "Filtrar pedidos por origem em consultas rápidas do POS."
        }
      ],
      "detailsColumn": {
        "enabled": false
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [
          "dailySalesMetricsTable",
          "topSellingItemsMetricsTable"
        ],
        "updatedByLayer": "layer_3_usecases"
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
      "fileName": "tables/order.defs.ts",
      "exportName": "orderTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default orderTableDefinition;
