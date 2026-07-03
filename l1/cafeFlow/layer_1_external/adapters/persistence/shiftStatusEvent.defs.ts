/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEvent.defs.ts" enhancement="_blank"/>

export const shiftStatusEventTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ShiftStatusEvent",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ShiftStatusEvent",
    "tableName": "shift_status_event",
    "columns": [
      {
        "name": "shift_status_event_id",
        "type": "string",
        "nullable": false,
        "description": "Primary key"
      },
      {
        "name": "shift_id",
        "type": "string",
        "nullable": false,
        "description": "FK to shift"
      },
      {
        "name": "event_type",
        "type": "string",
        "nullable": false,
        "description": "Event type (e.g. open, close)"
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
        "description": "consolidatedTotal, recordedAt, updatedAt and other non-indexed fields"
      }
    ],
    "primaryKey": [
      "shift_status_event_id"
    ],
    "indexes": [
      {
        "indexName": "idx_shift_status_event_shift_id",
        "columns": [
          "shift_id"
        ]
      },
      {
        "indexName": "idx_shift_status_event_event_type",
        "columns": [
          "event_type"
        ]
      },
      {
        "indexName": "idx_shift_status_event_created_at",
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

export default shiftStatusEventTableDefinition;

export const pipeline = [
  {
    "id": "shiftStatusEvent__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEvent.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEvent.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.d.ts"
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
