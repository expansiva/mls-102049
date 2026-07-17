/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/productRepository.defs.ts" enhancement="_blank"/>

export const productRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ProductRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Product",
    "interfaceName": "IProductRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: string"
        ],
        "returns": "Product"
      },
      {
        "name": "list",
        "params": [
          "filter: ProductFilter"
        ],
        "returns": "Product[]"
      },
      {
        "name": "save",
        "params": [
          "product: Product"
        ],
        "returns": "void"
      },
      {
        "name": "findByName",
        "params": [
          "name: string"
        ],
        "returns": "Product[]",
        "description": "Domain finder by product name"
      },
      {
        "name": "findByCategory",
        "params": [
          "category: string"
        ],
        "returns": "Product[]",
        "description": "Domain finder by product category"
      }
    ]
  }
} as const;

export default productRepositoryPort;

export const pipeline = [
  {
    "id": "productRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/productRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/productRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/product.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
