/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/reviewSchedulingCapacity.defs.ts" enhancement="_blank"/>

export const reviewSchedulingCapacityController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "reviewSchedulingCapacity",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "reviewSchedulingCapacity",
    "controllerName": "ReviewSchedulingCapacityController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopReviewSchedulingCapacityHandler",
        "command": "reviewSchedulingCapacity",
        "usecaseRef": "reviewSchedulingCapacity",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "shiftId",
            "fieldRef": "ShiftAssignment.shiftId",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional para revisar a capacidade de um turno específico"
          },
          {
            "inputId": "actorId",
            "fieldRef": "Operator.operatorId",
            "required": true,
            "source": "actorSession",
            "description": "Identidade do administrador autenticado que solicita a revisão"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "actorSession.actorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O backend extrai o ID do administrador a partir da sessão autenticada para autorizar o acesso à revisão de capacidade"
          },
          {
            "targetRef": "businessContext.activeCompanyId",
            "source": "businessContext",
            "originRef": "businessContext.activeCompanyId",
            "description": "O backend resolve a empresa ativa a partir do contexto de negócio para escopar as alocações consultadas à empresa correta"
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "ShiftAssignment",
          "keyField": "ShiftAssignment.shiftAssignmentId",
          "pagination": "optional",
          "selection": "none",
          "output": [
            "ShiftAssignment.shiftAssignmentId",
            "ShiftAssignment.operatorId",
            "ShiftAssignment.shiftId",
            "ShiftAssignment.createdAt",
            "Shift.shiftId",
            "Shift.startTime",
            "Shift.endTime",
            "Operator.operatorId",
            "Operator.name"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
        "handlerName": "petShopReviewSchedulingCapacityHandler"
      }
    ]
  }
} as const;

export default reviewSchedulingCapacityController;

export const pipeline = [
  {
    "id": "reviewSchedulingCapacity__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/reviewSchedulingCapacity.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/reviewSchedulingCapacity.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/reviewSchedulingCapacity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
