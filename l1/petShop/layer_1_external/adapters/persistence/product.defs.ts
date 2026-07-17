/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/product.defs.ts" enhancement="_blank"/>

export const productTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Product",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
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
  }
} as const;

export default productTableDefinition;

export const pipeline = [
  {
    "id": "product__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/product.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/product.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/product.d.ts"
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
