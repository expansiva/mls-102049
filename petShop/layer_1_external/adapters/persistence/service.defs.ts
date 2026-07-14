/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/service.defs.ts" enhancement="_blank"/>

export const serviceTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Service",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Service",
    "tableName": "service",
    "columns": [
      {
        "name": "service_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Service status"
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
        "description": "name, description, estimated_duration_minutes, price, deactivated_at, updated_at"
      }
    ],
    "primaryKey": [
      "service_id"
    ],
    "indexes": [
      {
        "indexName": "idx_service_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_service_created_at",
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

export default serviceTableDefinition;

export const pipeline = [
  {
    "id": "service__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/service.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/service.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/service.d.ts"
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
