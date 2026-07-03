/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevelRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const stockLevelRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "StockLevelRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "StockLevelRepositoryAdapter",
    "entityId": "StockLevel",
    "portRef": "IStockLevelRepository",
    "tableRef": "stock_levels",
    "mdmReads": [
      "StockItem"
    ],
    "notes": [
      "Real columns: stock_level_id, stock_item_id, created_at",
      "Details JSONB: current_quantity, last_movement_at, updated_at",
      "Resolves StockItem mdmRef via 102034 MDM runtime (MdmEntityIndexRecord shape)",
      "ctx.data used for StockLevel <-> stock_levels row mapping"
    ]
  }
} as const;

export default stockLevelRepositoryAdapter;

export const pipeline = [
  {
    "id": "stockLevelRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevelRepositoryAdapter.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevelRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevel.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.d.ts"
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
