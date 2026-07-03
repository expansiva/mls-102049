/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItem.defs.ts" enhancement="_blank"/>

export const orderItemTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "OrderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "OrderItem",
    "tableName": "order_item",
    "columns": [
      {
        "name": "order_item_id",
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
        "name": "menu_item_id",
        "type": "string",
        "nullable": false,
        "description": "FK to menu item"
      },
      {
        "name": "status",
        "type": "string",
        "nullable": false,
        "description": "Order item status"
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
        "description": "quantity, unitPrice, itemTotal, substitutionsApplied, updatedAt and other non-indexed fields"
      }
    ],
    "primaryKey": [
      "order_item_id"
    ],
    "indexes": [
      {
        "indexName": "idx_order_item_order_id",
        "columns": [
          "order_id"
        ]
      },
      {
        "indexName": "idx_order_item_menu_item_id",
        "columns": [
          "menu_item_id"
        ]
      },
      {
        "indexName": "idx_order_item_status",
        "columns": [
          "status"
        ]
      },
      {
        "indexName": "idx_order_item_created_at",
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

export default orderItemTableDefinition;

export const pipeline = [
  {
    "id": "orderItem__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItem.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts"
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
