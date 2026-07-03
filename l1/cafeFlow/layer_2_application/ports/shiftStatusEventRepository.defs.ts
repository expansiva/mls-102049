/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.defs.ts" enhancement="_blank"/>

export const shiftStatusEventRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ShiftStatusEventRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ShiftStatusEvent",
    "interfaceName": "IShiftStatusEventRepository",
    "methods": [
      {
        "name": "append",
        "returns": "void",
        "params": [
          "event: ShiftStatusEvent"
        ],
        "description": "Append a shift status event"
      },
      {
        "name": "listByOwnerId",
        "returns": "ShiftStatusEvent[]",
        "params": [
          "ownerId: ShiftId"
        ],
        "description": "Read finder: list events by shift"
      },
      {
        "name": "listByPeriod",
        "returns": "ShiftStatusEvent[]",
        "params": [
          "period: DateRange"
        ],
        "description": "Read finder: list events within a period"
      }
    ]
  }
} as const;

export default shiftStatusEventRepositoryPort;

export const pipeline = [
  {
    "id": "shiftStatusEventRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.d.ts"
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
