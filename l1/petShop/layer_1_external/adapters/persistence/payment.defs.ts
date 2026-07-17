/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/payment.defs.ts" enhancement="_blank"/>

export const paymentTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Payment",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Payment",
    "tableName": "payment",
    "columns": [
      {
        "name": "payment_id",
        "type": "uuid",
        "nullable": false
      },
      {
        "name": "reservation_id",
        "type": "uuid",
        "nullable": false
      },
      {
        "name": "payment_method",
        "type": "text",
        "nullable": false
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "nullable": false
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": false
      }
    ],
    "primaryKey": [
      "payment_id"
    ],
    "indexes": [
      {
        "indexName": "ix_payment_reservation_id",
        "columns": [
          "reservation_id"
        ]
      },
      {
        "indexName": "ix_payment_payment_method",
        "columns": [
          "payment_method"
        ]
      },
      {
        "indexName": "ix_payment_status",
        "columns": [
          "status"
        ]
      },
      {
        "indexName": "ix_payment_created_at",
        "columns": [
          "created_at"
        ]
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    },
    "appendOnly": true,
    "purpose": "controle",
    "retentionDays": 365
  }
} as const;

export default paymentTableDefinition;

export const pipeline = [
  {
    "id": "payment__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/payment.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/payment.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/payment.d.ts"
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
