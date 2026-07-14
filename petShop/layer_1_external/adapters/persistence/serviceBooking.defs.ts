/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBooking.defs.ts" enhancement="_blank"/>

export const serviceBookingTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ServiceBooking",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ServiceBooking",
    "tableName": "service_booking",
    "columns": [
      {
        "name": "service_booking_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "service_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to service"
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
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Booking status"
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
        "description": "customer_name, customer_phone, booking_date, booking_time, notes, completed_at, cancelled_at, cancel_reason, updated_at"
      }
    ],
    "primaryKey": [
      "service_booking_id"
    ],
    "indexes": [
      {
        "indexName": "idx_service_booking_service_id",
        "columns": [
          "service_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_service_booking_operator_id",
        "columns": [
          "operator_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_service_booking_shift_id",
        "columns": [
          "shift_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_service_booking_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_service_booking_created_at",
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

export default serviceBookingTableDefinition;

export const pipeline = [
  {
    "id": "serviceBooking__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBooking.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBooking.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.d.ts"
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
