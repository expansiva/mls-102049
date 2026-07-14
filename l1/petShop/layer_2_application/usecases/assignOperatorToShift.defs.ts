/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/assignOperatorToShift.defs.ts" enhancement="_blank"/>

export const assignOperatorToShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "assignOperatorToShift",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "assignOperatorToShift",
    "ports": [
      "ShiftAssignment",
      "Operator"
    ],
    "functions": [
      {
        "functionName": "assignOperatorToShift",
        "inputTypeName": "AssignOperatorToShiftInput",
        "outputTypeName": "AssignOperatorToShiftOutput",
        "input": [
          {
            "name": "operatorId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftAssignment",
            "description": "Operador selecionado pelo administrador para ser alocado no turno."
          },
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftAssignment",
            "description": "Turno de trabalho selecionado pelo administrador para receber a alocação do operador."
          }
        ],
        "output": [
          {
            "name": "shiftAssignmentId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftAssignment",
            "description": "Identificador único da nova alocação criada."
          },
          {
            "name": "operatorId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftAssignment",
            "description": "Operador alocado."
          },
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftAssignment",
            "description": "Turno que recebeu a alocação."
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "ShiftAssignment",
            "description": "Timestamp de criação da alocação."
          }
        ],
        "ports": [
          "ShiftAssignment",
          "Operator"
        ],
        "rulesApplied": [
          "schedulingCapacityByOperators",
          "operatorMultipleShiftsAllowed"
        ],
        "transactional": true,
        "steps": [
          "1. Load Operator by operatorId via Operator port (resolveRepository + getById); validate it exists and active === true, else throw validation error referencing the operator.",
          "2. Load Shift by shiftId via ctx.mdm.entity.get({ mdmId: shiftId }); validate it exists and active === true, else throw validation error referencing the shift.",
          "3. Apply rule operatorMultipleShiftsAllowed: query existing ShiftAssignment records for the given operatorId via ShiftAssignment port (list by operatorId filter). The rule explicitly ALLOWS the operator to be assigned to multiple shifts including overlapping ones — do NOT block the creation regardless of existing assignments.",
          "4. Apply rule schedulingCapacityByOperators: the scheduling capacity of a shift is determined by the number of operators assigned to it. Adding this operator increases the shift's capacity by one. There is no upper cap that blocks this assignment — the rule is descriptive and does not reject the operation.",
          "5. Generate shiftAssignmentId via ctx.idGenerator, and set createdAt and updatedAt to ctx.clock.now() (ISO string).",
          "6. Create the ShiftAssignment record via the ShiftAssignment port (create) inside a single transaction (ctx.data transaction wrapper).",
          "7. Return { shiftAssignmentId, operatorId, shiftId, createdAt }."
        ]
      }
    ],
    "mdmRefs": [
      "Shift"
    ]
  }
} as const;

export default assignOperatorToShiftUsecase;

export const pipeline = [
  {
    "id": "assignOperatorToShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/assignOperatorToShift.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/assignOperatorToShift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/operatorRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/operator.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
