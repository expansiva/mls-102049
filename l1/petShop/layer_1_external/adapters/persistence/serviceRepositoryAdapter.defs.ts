/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const serviceRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ServiceRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "ServiceRepositoryAdapter",
    "entityId": "Service",
    "portRef": "IServiceRepository",
    "tableRef": "services",
    "mdmReads": [],
    "notes": [
      "Real columns: service_id, status, created_at.",
      "Details JSONB holds: name, description, estimated_duration_minutes, price, deactivated_at, updated_at.",
      "Uses ctx.data.moduleData for local persistence."
    ]
  }
} as const;

export default serviceRepositoryAdapter;

export const pipeline = [
  {
    "id": "serviceRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/serviceRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/service.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/service.d.ts"
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
