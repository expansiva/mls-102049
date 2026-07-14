/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/serviceRepository.defs.ts" enhancement="_blank"/>

export const serviceRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ServiceRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Service",
    "interfaceName": "IServiceRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ServiceId"
        ],
        "returns": "Service | null"
      },
      {
        "name": "list",
        "params": [
          "filter: ServiceFilter"
        ],
        "returns": "Service[]"
      },
      {
        "name": "save",
        "params": [
          "service: Service"
        ],
        "returns": "void"
      },
      {
        "name": "findByType",
        "params": [
          "type: ServiceType"
        ],
        "returns": "Service[]"
      },
      {
        "name": "findActive",
        "params": [],
        "returns": "Service[]"
      }
    ]
  }
} as const;

export default serviceRepositoryPort;

export const pipeline = [
  {
    "id": "serviceRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/serviceRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/serviceRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/service.d.ts"
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
