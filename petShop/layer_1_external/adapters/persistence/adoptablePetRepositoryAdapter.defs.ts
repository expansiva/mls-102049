/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePetRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const adoptablePetRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "AdoptablePetRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "AdoptablePetRepositoryAdapter",
    "entityId": "AdoptablePet",
    "portRef": "IAdoptablePetRepository",
    "tableRef": "adoptable_pets",
    "mdmReads": [],
    "notes": [
      "Real columns: adoptable_pet_id, status, created_at.",
      "Details JSONB holds: name, age, description, photo_url, updated_at.",
      "Uses ctx.data.moduleData for local persistence."
    ]
  }
} as const;

export default adoptablePetRepositoryAdapter;

export const pipeline = [
  {
    "id": "adoptablePetRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePetRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePetRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePet.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.d.ts"
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
