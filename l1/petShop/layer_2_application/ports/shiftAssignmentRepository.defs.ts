/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.defs.ts" enhancement="_blank"/>

export const shiftAssignmentRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ShiftAssignmentRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ShiftAssignment",
    "interfaceName": "IShiftAssignmentRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ShiftAssignmentId"
        ],
        "returns": "ShiftAssignment | null"
      },
      {
        "name": "list",
        "params": [
          "filter: ShiftAssignmentFilter"
        ],
        "returns": "ShiftAssignment[]"
      },
      {
        "name": "save",
        "params": [
          "assignment: ShiftAssignment"
        ],
        "returns": "void"
      },
      {
        "name": "findByOperatorId",
        "params": [
          "operatorId: OperatorId"
        ],
        "returns": "ShiftAssignment[]"
      },
      {
        "name": "findByDate",
        "params": [
          "date: LocalDate"
        ],
        "returns": "ShiftAssignment[]"
      }
    ]
  }
} as const;

export default shiftAssignmentRepositoryPort;

export const pipeline = [
  {
    "id": "shiftAssignmentRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.d.ts"
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
