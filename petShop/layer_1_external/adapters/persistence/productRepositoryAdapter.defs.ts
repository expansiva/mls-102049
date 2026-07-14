/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/productRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const productRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ProductRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "ProductRepositoryAdapter",
    "entityId": "Product",
    "portRef": "IProductRepository",
    "tableRef": "products",
    "mdmReads": [
      "ProductCategory"
    ],
    "notes": [
      "Real columns: product_id, product_category_id, status, created_at.",
      "Details JSONB holds: name, description, price, image_url, featured, updated_at.",
      "Resolves ProductCategory MDM ref via ctx.mdm.collection.getMany/hydrateMany (bulk load, no loop).",
      "Uses ctx.data.moduleData for local persistence."
    ]
  }
} as const;

export default productRepositoryAdapter;

export const pipeline = [
  {
    "id": "productRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/productRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/productRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/productRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/product.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/product.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
