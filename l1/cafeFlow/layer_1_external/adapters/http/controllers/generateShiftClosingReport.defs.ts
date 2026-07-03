/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/generateShiftClosingReport.defs.ts" enhancement="_blank"/>

export const generateShiftClosingReportController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "generateShiftClosingReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "dailyShiftLifecycle",
    "controllerName": "GenerateShiftClosingReportController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowGenerateShiftClosingReportHandler",
        "command": "generateShiftClosingReport",
        "usecaseRef": "generateShiftClosingReport",
        "inputTypeName": "GenerateShiftClosingReportInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "shiftId",
            "fieldRef": "Shift.shiftId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do turno selecionado para geração do relatório de fechamento"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.shiftId",
            "source": "selectedEntity",
            "originRef": "Shift.shiftId",
            "description": "Resolve o identificador do turno a partir da entidade selecionada no fluxo de trabalho"
          }
        ],
        "accessPattern": {
          "kind": "getById",
          "description": "Recupera um turno fechado pelo identificador e agrega pedidos, faturamento e movimentações de estoque em um relatório consolidado de fechamento",
          "entity": "Shift",
          "keyField": "Shift.shiftId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "shiftSummary",
            "ordersAggregation",
            "revenueTotals",
            "stockMovements"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.dailyShiftLifecycle.generateShiftClosingReport",
        "handlerName": "cafeFlowGenerateShiftClosingReportHandler"
      }
    ]
  }
} as const;

export default generateShiftClosingReportController;

export const pipeline = [
  {
    "id": "generateShiftClosingReport__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/generateShiftClosingReport.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/generateShiftClosingReport.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/generateShiftClosingReport.d.ts"
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
