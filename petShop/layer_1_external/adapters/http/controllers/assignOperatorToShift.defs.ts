/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/assignOperatorToShift.defs.ts" enhancement="_blank"/>

export const assignOperatorToShiftController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "assignOperatorToShift",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "assignOperatorToShift",
    "controllerName": "AssignOperatorToShiftController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopAssignOperatorToShiftHandler",
        "command": "assignOperatorToShift",
        "usecaseRef": "assignOperatorToShift",
        "inputTypeName": "AssignOperatorToShiftInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "operatorId",
            "fieldRef": "ShiftAssignment.operatorId",
            "required": true,
            "source": "userInput",
            "description": "Operador selecionado pelo administrador para ser alocado no turno."
          },
          {
            "inputId": "shiftId",
            "fieldRef": "ShiftAssignment.shiftId",
            "required": true,
            "source": "userInput",
            "description": "Turno de trabalho selecionado pelo administrador para receber a alocação do operador."
          },
          {
            "inputId": "shiftAssignmentId",
            "fieldRef": "ShiftAssignment.shiftAssignmentId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único gerado automaticamente para a nova alocação."
          },
          {
            "inputId": "createdAt",
            "fieldRef": "ShiftAssignment.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora automáticas de criação da alocação."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "ShiftAssignment.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora automáticas da última atualização da alocação."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "ShiftAssignment.shiftAssignmentId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O backend gera um UUID para o identificador da nova alocação no momento da criação."
          },
          {
            "targetRef": "ShiftAssignment.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra o timestamp atual do sistema como data de criação da alocação."
          },
          {
            "targetRef": "ShiftAssignment.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra o timestamp atual do sistema como data de atualização inicial da alocação."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "ShiftAssignment",
          "keyField": "ShiftAssignment.shiftAssignmentId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "ShiftAssignment.shiftAssignmentId",
            "ShiftAssignment.operatorId",
            "ShiftAssignment.shiftId",
            "ShiftAssignment.createdAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.assignOperatorToShift.assignOperatorToShift",
        "handlerName": "petShopAssignOperatorToShiftHandler"
      }
    ]
  }
} as const;

export default assignOperatorToShiftController;

export const pipeline = [
  {
    "id": "assignOperatorToShift__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/assignOperatorToShift.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/assignOperatorToShift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/assignOperatorToShift.d.ts"
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
