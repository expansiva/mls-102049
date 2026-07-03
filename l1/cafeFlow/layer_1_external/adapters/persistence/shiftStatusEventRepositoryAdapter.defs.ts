/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEventRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const shiftStatusEventRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ShiftStatusEventRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "ShiftStatusEventRepositoryAdapter",
    "entityId": "ShiftStatusEvent",
    "portRef": "IShiftStatusEventRepository",
    "tableRef": "shift_status_events",
    "mdmReads": [],
    "notes": [
      "Append-only event adapter: insert row only, no update/delete",
      "Real columns: shift_status_event_id, shift_id, event_type, created_at",
      "Details JSONB: consolidated_total, recorded_at, updated_at",
      "Implements append + read finders",
      "ctx.data used for ShiftStatusEvent <-> shift_status_events row mapping"
    ]
  }
} as const;

export default shiftStatusEventRepositoryAdapter;

export const pipeline = [
  {
    "id": "shiftStatusEventRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEventRepositoryAdapter.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEventRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEvent.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.d.ts"
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
