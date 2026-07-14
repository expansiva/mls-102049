/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/adoptionInterestRepository.defs.ts" enhancement="_blank"/>

export const adoptionInterestRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "AdoptionInterestRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "AdoptionInterest",
    "interfaceName": "IAdoptionInterestRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: AdoptionInterestId"
        ],
        "returns": "AdoptionInterest | null"
      },
      {
        "name": "list",
        "params": [
          "filter: AdoptionInterestFilter"
        ],
        "returns": "AdoptionInterest[]"
      },
      {
        "name": "save",
        "params": [
          "interest: AdoptionInterest"
        ],
        "returns": "void"
      },
      {
        "name": "findByAdopterId",
        "params": [
          "adopterId: AdopterId"
        ],
        "returns": "AdoptionInterest[]"
      },
      {
        "name": "findByPetId",
        "params": [
          "petId: AdoptablePetId"
        ],
        "returns": "AdoptionInterest[]"
      }
    ]
  }
} as const;

export default adoptionInterestRepositoryPort;

export const pipeline = [
  {
    "id": "adoptionInterestRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/adoptionInterestRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/adoptionInterestRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
