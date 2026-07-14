/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/operatorRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const operatorRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "OperatorRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "OperatorRepositoryAdapter",
    "entityId": "Operator",
    "portRef": "IOperatorRepository",
    "tableRef": "operators",
    "mdmReads": [],
    "notes": [
      "Real columns: operator_id, created_at.",
      "Details JSONB holds: name, email, phone, active, updated_at.",
      "Uses ctx.data.moduleData for local persistence."
    ]
  }
} as const;

export default operatorRepositoryAdapter;

export const pipeline = [
  {
    "id": "operatorRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/operatorRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/operatorRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/operatorRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/operator.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/operator.d.ts"
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
