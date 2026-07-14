/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterest.defs.ts" enhancement="_blank"/>

export const adoptionInterestTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "AdoptionInterest",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "AdoptionInterest",
    "tableName": "adoption_interest",
    "columns": [
      {
        "name": "adoption_interest_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "adoptable_pet_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to adoptable_pet"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Interest status"
      },
      {
        "name": "operator_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to operator"
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
        "description": "customer_name, customer_email, customer_phone, verification_notes, completed_at, cancelled_at, cancellation_reason, updated_at"
      }
    ],
    "primaryKey": [
      "adoption_interest_id"
    ],
    "indexes": [
      {
        "indexName": "idx_adoption_interest_adoptable_pet_id",
        "columns": [
          "adoptable_pet_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_adoption_interest_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_adoption_interest_operator_id",
        "columns": [
          "operator_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_adoption_interest_created_at",
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

export default adoptionInterestTableDefinition;

export const pipeline = [
  {
    "id": "adoptionInterest__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterest.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterest.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.d.ts"
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
