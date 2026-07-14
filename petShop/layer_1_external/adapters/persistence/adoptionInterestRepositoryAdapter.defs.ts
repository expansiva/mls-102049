/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterestRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const adoptionInterestRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "AdoptionInterestRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "AdoptionInterestRepositoryAdapter",
    "entityId": "AdoptionInterest",
    "portRef": "IAdoptionInterestRepository",
    "tableRef": "adoption_interests",
    "mdmReads": [],
    "notes": [
      "Real columns: adoption_interest_id, adoptable_pet_id, status, operator_id, created_at.",
      "Details JSONB holds: customer_name, customer_email, customer_phone, verification_notes, completed_at, cancelled_at, cancellation_reason, updated_at.",
      "Uses ctx.data.moduleData for local persistence."
    ]
  }
} as const;

export default adoptionInterestRepositoryAdapter;

export const pipeline = [
  {
    "id": "adoptionInterestRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterestRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterestRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/adoptionInterestRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterest.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.d.ts"
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
