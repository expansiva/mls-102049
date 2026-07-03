/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEvent.defs.ts" enhancement="_blank"/>

export const orderStatusEventTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "OrderStatusEvent",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "OrderStatusEvent",
    "tableName": "order_status_event",
    "columns": [
      {
        "name": "order_status_event_id",
        "type": "string",
        "nullable": false,
        "description": "Primary key"
      },
      {
        "name": "order_id",
        "type": "string",
        "nullable": false,
        "description": "FK to order"
      },
      {
        "name": "status",
        "type": "string",
        "nullable": false,
        "description": "New status"
      },
      {
        "name": "previous_status",
        "type": "string",
        "nullable": true,
        "description": "Previous status before transition"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "Event timestamp for ordering"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": true,
        "description": "updatedAt and other non-indexed fields"
      }
    ],
    "primaryKey": [
      "order_status_event_id"
    ],
    "indexes": [
      {
        "indexName": "idx_order_status_event_order_id",
        "columns": [
          "order_id"
        ]
      },
      {
        "indexName": "idx_order_status_event_status",
        "columns": [
          "status"
        ]
      },
      {
        "indexName": "idx_order_status_event_previous_status",
        "columns": [
          "previous_status"
        ]
      },
      {
        "indexName": "idx_order_status_event_created_at",
        "columns": [
          "created_at"
        ]
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "childCollections": []
    },
    "appendOnly": true,
    "purpose": "controle",
    "retentionDays": 365
  }
} as const;

export default orderStatusEventTableDefinition;

export const pipeline = [
  {
    "id": "orderStatusEvent__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEvent.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEvent.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/persistenceTable.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
