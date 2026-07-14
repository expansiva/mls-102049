/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/operatorRepository.defs.ts" enhancement="_blank"/>

export const operatorRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "OperatorRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Operator",
    "interfaceName": "IOperatorRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: OperatorId"
        ],
        "returns": "Operator | null"
      },
      {
        "name": "list",
        "params": [
          "filter: OperatorFilter"
        ],
        "returns": "Operator[]"
      },
      {
        "name": "save",
        "params": [
          "operator: Operator"
        ],
        "returns": "void"
      },
      {
        "name": "findByEmail",
        "params": [
          "email: Email"
        ],
        "returns": "Operator | null"
      },
      {
        "name": "findActive",
        "params": [],
        "returns": "Operator[]"
      }
    ]
  }
} as const;

export default operatorRepositoryPort;

export const pipeline = [
  {
    "id": "operatorRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/operatorRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/operatorRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/operator.d.ts"
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
