/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/order.defs.ts" enhancement="_blank"/>

export const orderTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Order",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Order",
    "tableName": "order",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "description": "Primary key"
      },
      {
        "name": "order_type",
        "type": "string",
        "nullable": false,
        "description": "Order type (e.g. dine-in, takeaway)"
      },
      {
        "name": "table_id",
        "type": "string",
        "nullable": true,
        "description": "FK to restaurant table"
      },
      {
        "name": "shift_id",
        "type": "string",
        "nullable": true,
        "description": "FK to shift"
      },
      {
        "name": "status",
        "type": "string",
        "nullable": false,
        "description": "Order status"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "Creation timestamp for ordering"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": true,
        "description": "total, updatedAt and other non-indexed fields"
      }
    ],
    "primaryKey": [
      "id"
    ],
    "indexes": [
      {
        "indexName": "idx_order_order_type",
        "columns": [
          "order_type"
        ]
      },
      {
        "indexName": "idx_order_table_id",
        "columns": [
          "table_id"
        ]
      },
      {
        "indexName": "idx_order_shift_id",
        "columns": [
          "shift_id"
        ]
      },
      {
        "indexName": "idx_order_status",
        "columns": [
          "status"
        ]
      },
      {
        "indexName": "idx_order_created_at",
        "columns": [
          "created_at"
        ]
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "childCollections": []
    }
  }
} as const;

export default orderTableDefinition;

export const pipeline = [
  {
    "id": "order__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/order.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/order.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/order.d.ts"
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
