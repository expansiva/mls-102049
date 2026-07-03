/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEvent.defs.ts" enhancement="_blank"/>

export const stockMovementEventTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "StockMovementEvent",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "StockMovementEvent",
    "tableName": "stock_movement_event",
    "columns": [
      {
        "name": "stock_movement_event_id",
        "type": "string",
        "nullable": false,
        "description": "Primary key"
      },
      {
        "name": "stock_item_id",
        "type": "string",
        "nullable": false,
        "description": "FK to stock item"
      },
      {
        "name": "movement_type",
        "type": "string",
        "nullable": false,
        "description": "Movement type (e.g. in, out, adjustment)"
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
        "description": "quantity, reason, updatedAt and other non-indexed fields"
      }
    ],
    "primaryKey": [
      "stock_movement_event_id"
    ],
    "indexes": [
      {
        "indexName": "idx_stock_movement_event_stock_item_id",
        "columns": [
          "stock_item_id"
        ]
      },
      {
        "indexName": "idx_stock_movement_event_movement_type",
        "columns": [
          "movement_type"
        ]
      },
      {
        "indexName": "idx_stock_movement_event_created_at",
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
    "retentionDays": 90
  }
} as const;

export default stockMovementEventTableDefinition;

export const pipeline = [
  {
    "id": "stockMovementEvent__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEvent.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEvent.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.d.ts"
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
