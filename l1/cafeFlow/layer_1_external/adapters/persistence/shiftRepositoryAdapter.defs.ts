/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const shiftRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ShiftRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "ShiftRepositoryAdapter",
    "entityId": "Shift",
    "portRef": "IShiftRepository",
    "tableRef": "shifts",
    "mdmReads": [],
    "notes": [
      "Real columns: shift_id, status, created_at",
      "Details JSONB: opened_at, closed_at, updated_at",
      "No MDM refs",
      "ctx.data used for Shift <-> shifts row mapping"
    ]
  }
} as const;

export default shiftRepositoryAdapter;

export const pipeline = [
  {
    "id": "shiftRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftRepositoryAdapter.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shift.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.d.ts"
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
