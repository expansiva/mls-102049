/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.defs.ts" enhancement="_blank"/>

export const adoptablePetRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "AdoptablePetRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "AdoptablePet",
    "interfaceName": "IAdoptablePetRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: AdoptablePetId"
        ],
        "returns": "AdoptablePet | null"
      },
      {
        "name": "list",
        "params": [
          "filter: AdoptablePetFilter"
        ],
        "returns": "AdoptablePet[]"
      },
      {
        "name": "save",
        "params": [
          "pet: AdoptablePet"
        ],
        "returns": "void"
      },
      {
        "name": "findAvailable",
        "params": [],
        "returns": "AdoptablePet[]"
      },
      {
        "name": "findBySpecies",
        "params": [
          "species: Species"
        ],
        "returns": "AdoptablePet[]"
      }
    ]
  }
} as const;

export default adoptablePetRepositoryPort;

export const pipeline = [
  {
    "id": "adoptablePetRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.d.ts"
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
