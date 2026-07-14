/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePet.defs.ts" enhancement="_blank"/>

export const adoptablePetTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "AdoptablePet",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "AdoptablePet",
    "tableName": "adoptable_pet",
    "columns": [
      {
        "name": "adoptable_pet_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Pet status"
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
        "description": "name, age, description, photo_url, updated_at"
      }
    ],
    "primaryKey": [
      "adoptable_pet_id"
    ],
    "indexes": [
      {
        "indexName": "idx_adoptable_pet_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_adoptable_pet_created_at",
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

export default adoptablePetTableDefinition;

export const pipeline = [
  {
    "id": "adoptablePet__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePet.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePet.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.d.ts"
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
