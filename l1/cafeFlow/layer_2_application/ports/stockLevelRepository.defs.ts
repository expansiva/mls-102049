/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.defs.ts" enhancement="_blank"/>

export const stockLevelRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "StockLevelRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StockLevel",
    "interfaceName": "IStockLevelRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "StockLevel",
        "params": [
          "id: StockLevelId"
        ],
        "description": "Retrieve a stock level by its unique identifier"
      },
      {
        "name": "list",
        "returns": "StockLevel[]",
        "params": [
          "filter: StockLevelFilter"
        ],
        "description": "List stock levels matching the given filter"
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "stockLevel: StockLevel"
        ],
        "description": "Persist the given stock level aggregate"
      },
      {
        "name": "findByProductId",
        "returns": "StockLevel",
        "params": [
          "productId: ProductId"
        ],
        "description": "Domain finder: retrieve stock level for a product"
      },
      {
        "name": "findBelowThreshold",
        "returns": "StockLevel[]",
        "params": [
          "threshold: Quantity"
        ],
        "description": "Domain finder: retrieve stock levels below threshold"
      }
    ]
  }
} as const;

export default stockLevelRepositoryPort;

export const pipeline = [
  {
    "id": "stockLevelRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.d.ts"
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
