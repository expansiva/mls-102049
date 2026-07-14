/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignment.defs.ts" enhancement="_blank"/>

export const shiftAssignmentTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ShiftAssignment",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ShiftAssignment",
    "tableName": "shift_assignment",
    "columns": [
      {
        "name": "shift_assignment_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "operator_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to operator"
      },
      {
        "name": "shift_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to shift"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "Ordering timestamp"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": true,
        "description": "updated_at"
      }
    ],
    "primaryKey": [
      "shift_assignment_id"
    ],
    "indexes": [
      {
        "indexName": "idx_shift_assignment_operator_id",
        "columns": [
          "operator_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_shift_assignment_shift_id",
        "columns": [
          "shift_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_shift_assignment_created_at",
        "columns": [
          "created_at"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    }
  }
} as const;

export default shiftAssignmentTableDefinition;

export const pipeline = [
  {
    "id": "shiftAssignment__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignment.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignment.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.d.ts"
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
