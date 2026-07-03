/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEventRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const orderStatusEventRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "OrderStatusEventRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "OrderStatusEventRepositoryAdapter",
    "entityId": "OrderStatusEvent",
    "portRef": "IOrderStatusEventRepository",
    "tableRef": "order_status_events",
    "mdmReads": [],
    "notes": [
      "Append-only event adapter: insert row only, no update/delete",
      "Real columns: order_status_event_id, order_id, status, previous_status, created_at",
      "Details JSONB: updated_at",
      "Implements append + read finders",
      "ctx.data used for OrderStatusEvent <-> order_status_events row mapping"
    ]
  }
} as const;

export default orderStatusEventRepositoryAdapter;

export const pipeline = [
  {
    "id": "orderStatusEventRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEventRepositoryAdapter.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEventRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderStatusEvent.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.d.ts"
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
