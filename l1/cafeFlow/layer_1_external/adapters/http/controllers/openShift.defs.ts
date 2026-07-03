/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/openShift.defs.ts" enhancement="_blank"/>

export const openShiftController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "openShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "dailyShiftLifecycle",
    "controllerName": "OpenShiftController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowOpenShiftHandler",
        "command": "openShift",
        "usecaseRef": "openShift",
        "inputTypeName": "OpenShiftInput",
        "kind": "create",
        "inputContract": [],
        "contextResolution": [
          {
            "targetRef": "Shift.shiftId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "System generates UUID for the new shift"
          },
          {
            "targetRef": "Shift.status",
            "source": "workflowState",
            "originRef": "Shift.status",
            "description": "Workflow state sets the shift status to open"
          },
          {
            "targetRef": "Shift.openedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Current timestamp for shift opening"
          },
          {
            "targetRef": "Shift.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Current timestamp for record creation"
          },
          {
            "targetRef": "Shift.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Current timestamp for record update"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Command to create and open a new daily shift",
          "entity": "Shift",
          "pagination": "none",
          "selection": "none",
          "output": [
            "Shift.shiftId",
            "Shift.status",
            "Shift.openedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.dailyShiftLifecycle.openShift",
        "handlerName": "cafeFlowOpenShiftHandler"
      }
    ]
  }
} as const;

export default openShiftController;

export const pipeline = [
  {
    "id": "openShift__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/openShift.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/openShift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/openShift.d.ts"
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
