/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryDashboard.defs.ts" enhancement="_blank"/>

export const queryDashboardController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "queryDashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "dailyShiftLifecycle",
    "controllerName": "QueryDashboardController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowQueryDashboardHandler",
        "command": "queryDashboard",
        "usecaseRef": "queryDashboard",
        "inputTypeName": "QueryDashboardInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "shiftId",
            "fieldRef": "Shift.shiftId",
            "required": true,
            "source": "activeLifecycleInstance",
            "description": "Identificador do turno ativo cujos dados serão agregados no dashboard"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.shiftId",
            "source": "activeLifecycleInstance",
            "originRef": "Shift.shiftId",
            "description": "O ID do turno é resolvido automaticamente a partir da instância ativa do ciclo de vida de turno diário"
          }
        ],
        "accessPattern": {
          "kind": "getById",
          "description": "Recupera a visão agregada do dashboard para o turno ativo, consolidando pedidos, status de cozinha e níveis de estoque em tempo real",
          "entity": "Shift",
          "keyField": "Shift.shiftId",
          "pagination": "none",
          "selection": "none",
          "output": [
            "shiftDashboardAggregation"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.dailyShiftLifecycle.queryDashboard",
        "handlerName": "cafeFlowQueryDashboardHandler"
      }
    ]
  }
} as const;

export default queryDashboardController;

export const pipeline = [
  {
    "id": "queryDashboard__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryDashboard.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryDashboard.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/queryDashboard.d.ts"
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
