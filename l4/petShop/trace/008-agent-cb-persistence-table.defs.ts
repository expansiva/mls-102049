{
  "savedAt": "2026-07-17T04:28:27.573Z",
  "agentName": "agentCbPersistenceTable",
  "stepId": 8,
  "planning": {
    "planId": "cb-gen-table",
    "dependsOn": [
      "cb-gen-port"
    ],
    "executionMode": "sequential",
    "executionHost": "client"
  },
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitPersistenceTables",
      "arguments": {
        "status": "ok",
        "result": {
          "items": [
            {
              "tableId": "Product",
              "tableName": "product",
              "columns": [
                {
                  "name": "product_id",
                  "type": "uuid",
                  "nullable": false
                },
                {
                  "name": "pet_type_id",
                  "type": "uuid",
                  "nullable": false
                },
                {
                  "name": "category_id",
                  "type": "uuid",
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
                "product_id"
              ],
              "indexes": [
                {
                  "indexName": "ix_product_pet_type_id",
                  "columns": [
                    "pet_type_id"
                  ]
                },
                {
                  "indexName": "ix_product_category_id",
                  "columns": [
                    "category_id"
                  ]
                },
                {
                  "indexName": "ix_product_status",
                  "columns": [
                    "status"
                  ]
                },
                {
                  "indexName": "ix_product_created_at",
                  "columns": [
                    "created_at"
                  ]
                }
              ],
              "detailsColumn": {
                "enabled": true,
                "columnName": "details",
                "childCollections": []
              }
            },
            {
              "tableId": "Reservation",
              "tableName": "reservation",
              "columns": [
                {
                  "name": "reservation_id",
                  "type": "uuid",
                  "nullable": false
                },
                {
                  "name": "customer_id",
                  "type": "uuid",
                  "nullable": false
                },
                {
                  "name": "status",
                  "type": "text",
                  "nullable": false
                },
                {
                  "name": "payment_id",
                  "type": "uuid",
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
                "reservation_id"
              ],
              "indexes": [
                {
                  "indexName": "ix_reservation_customer_id",
                  "columns": [
                    "customer_id"
                  ]
                },
                {
                  "indexName": "ix_reservation_payment_id",
                  "columns": [
                    "payment_id"
                  ]
                },
                {
                  "indexName": "ix_reservation_status",
                  "columns": [
                    "status"
                  ]
                },
                {
                  "indexName": "ix_reservation_created_at",
                  "columns": [
                    "created_at"
                  ]
                }
              ],
              "detailsColumn": {
                "enabled": true,
                "columnName": "details",
                "childCollections": [
                  "ReservationItem"
                ]
              }
            },
            {
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
          ]
        },
        "questions": [],
        "trace": []
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
