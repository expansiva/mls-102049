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
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "product_category_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to product_category"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Product status"
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
        "description": "name, description, price, image_url, featured, updated_at"
      }
    ],
    "primaryKey": [
      "product_id"
    ],
    "indexes": [
      {
        "indexName": "idx_product_product_category_id",
        "columns": [
          "product_category_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_product_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_product_created_at",
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
