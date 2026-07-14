/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/operator.defs.ts" enhancement="_blank"/>

export const operatorTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Operator",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Operator",
    "tableName": "operator",
    "columns": [
      {
        "name": "operator_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
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
        "description": "name, email, phone, active, updated_at"
      }
    ],
    "primaryKey": [
      "operator_id"
    ],
    "indexes": [
      {
        "indexName": "idx_operator_created_at",
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

export default operatorTableDefinition;

export const pipeline = [
  {
    "id": "operator__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/operator.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/operator.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/operator.d.ts"
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
