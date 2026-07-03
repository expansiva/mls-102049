/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/openShift.defs.ts" enhancement="_blank"/>

export const openShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "openShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "openShift",
    "ports": [
      "Shift",
      "ShiftStatusEvent"
    ],
    "functions": [
      {
        "functionName": "openShift",
        "inputTypeName": "OpenShiftInput",
        "outputTypeName": "OpenShiftOutput",
        "input": [],
        "output": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "System-generated UUID for the new shift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Shift status set to 'open' by workflow state"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Timestamp when the shift was opened"
          }
        ],
        "ports": [
          "Shift",
          "ShiftStatusEvent"
        ],
        "rulesApplied": [
          "orderRequiresOpenShift",
          "shiftClosingRequiresSettledOrders"
        ],
        "transactional": true,
        "steps": [
          "Resolve shiftId from ctx.idGenerator (systemDefault.uuid)",
          "Set status to 'open' per workflow state",
          "Resolve openedAt, createdAt, updatedAt from ctx.clock (systemDefault.now)",
          "Create Shift aggregate via Shift port inside transaction",
          "Build ShiftStatusEvent record: shiftStatusEventId from ctx.idGenerator, shiftId referencing the new shift, eventType 'abertura', consolidatedTotal 0, recordedAt/createdAt/updatedAt from ctx.clock",
          "Append ShiftStatusEvent via ShiftStatusEvent port inside the same transaction",
          "Return shiftId, status, openedAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default openShiftUsecase;

export const pipeline = [
  {
    "id": "openShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/openShift.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/openShift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.d.ts"
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
