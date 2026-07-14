/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignmentRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const shiftAssignmentRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ShiftAssignmentRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "ShiftAssignmentRepositoryAdapter",
    "entityId": "ShiftAssignment",
    "portRef": "IShiftAssignmentRepository",
    "tableRef": "shift_assignments",
    "mdmReads": [
      "Shift"
    ],
    "notes": [
      "Real columns: shift_assignment_id, operator_id, shift_id, created_at.",
      "Details JSONB holds: updated_at.",
      "Resolves Shift MDM ref via ctx.mdm.collection.getMany/hydrateMany (bulk load, no loop).",
      "Uses ctx.data.moduleData for local persistence."
    ]
  }
} as const;

export default shiftAssignmentRepositoryAdapter;

export const pipeline = [
  {
    "id": "shiftAssignmentRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignmentRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignmentRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignment.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.d.ts"
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
