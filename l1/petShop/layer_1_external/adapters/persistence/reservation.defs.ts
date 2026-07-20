/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/reservation.defs.ts" enhancement="_blank"/>

export const reservationTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Reservation",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Reservation",
    "tableName": "reservation",
    "columns": [
      {
        "name": "reservation_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "status",
        "type": "text",
        "nullable": false,
        "description": "status"
      },
      {
        "name": "payment_id",
        "type": "uuid",
        "nullable": true,
        "description": "FK payment"
      },
      {
        "name": "created_at",
        "type": "timestamptz",
        "nullable": false,
        "description": "ordering timestamp"
      }
    ],
    "primaryKey": [
      "reservation_id"
    ],
    "indexes": [
      {
        "indexName": "idx_reservation_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_reservation_payment_id",
        "columns": [
          "payment_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_reservation_created_at",
        "columns": [
          "created_at"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": [
        "ReservationItem"
      ]
    },
    "purpose": "reservation aggregate"
  }
} as const;

export default reservationTableDefinition;

export const pipeline = [
  {
    "id": "reservation__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/reservation.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/reservation.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/reservation.d.ts"
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
