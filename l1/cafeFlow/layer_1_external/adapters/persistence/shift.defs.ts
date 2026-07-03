/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shift.defs.ts" enhancement="_blank"/>

export const shiftTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Shift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Shift",
    "tableName": "shift",
    "columns": [
      {
        "name": "shift_id",
        "type": "string",
        "nullable": false,
        "description": "Primary key"
      },
      {
        "name": "status",
        "type": "string",
        "nullable": false,
        "description": "Shift status"
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
        "description": "openedAt, closedAt, updatedAt and other non-indexed fields"
      }
    ],
    "primaryKey": [
      "shift_id"
    ],
    "indexes": [
      {
        "indexName": "idx_shift_status",
        "columns": [
          "status"
        ]
      },
      {
        "indexName": "idx_shift_created_at",
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

export default shiftTableDefinition;

export const pipeline = [
  {
    "id": "shift__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shift.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.d.ts"
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
