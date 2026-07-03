/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevel.defs.ts" enhancement="_blank"/>

export const stockLevelTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "StockLevel",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "StockLevel",
    "tableName": "stock_level",
    "columns": [
      {
        "name": "stock_level_id",
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
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "Creation timestamp for ordering"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": true,
        "description": "currentQuantity, lastMovementAt, updatedAt and other non-indexed fields"
      }
    ],
    "primaryKey": [
      "stock_level_id"
    ],
    "indexes": [
      {
        "indexName": "idx_stock_level_stock_item_id",
        "columns": [
          "stock_item_id"
        ]
      },
      {
        "indexName": "idx_stock_level_created_at",
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

export default stockLevelTableDefinition;

export const pipeline = [
  {
    "id": "stockLevel__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevel.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevel.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.d.ts"
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
