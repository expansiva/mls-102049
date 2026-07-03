/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEventRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const stockMovementEventRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "StockMovementEventRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "StockMovementEventRepositoryAdapter",
    "entityId": "StockMovementEvent",
    "portRef": "IStockMovementEventRepository",
    "tableRef": "stock_movement_events",
    "mdmReads": [],
    "notes": [
      "Append-only event adapter: insert row only, no update/delete",
      "Real columns: stock_movement_event_id, stock_item_id, movement_type, created_at",
      "Details JSONB: quantity, reason, updated_at",
      "Implements append + read finders",
      "ctx.data used for StockMovementEvent <-> stock_movement_events row mapping"
    ]
  }
} as const;

export default stockMovementEventRepositoryAdapter;

export const pipeline = [
  {
    "id": "stockMovementEventRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEventRepositoryAdapter.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEventRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/stockMovementEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEvent.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.d.ts"
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
