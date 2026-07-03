/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteTable.defs.ts" enhancement="_blank"/>

export const deleteTableController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "deleteTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "deleteTable",
    "controllerName": "DeleteTableController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowDeleteTableHandler",
        "command": "deleteTable",
        "usecaseRef": "deleteTable",
        "inputTypeName": "DeleteTableInput",
        "kind": "delete",
        "inputContract": [
          {
            "inputId": "tableId",
            "fieldRef": "Table.tableId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador único da mesa a ser removida"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.tableId",
            "source": "selectedEntity",
            "originRef": "Table.tableId",
            "description": "Identificador da mesa obtido da seleção prévia no fluxo"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Comando de exclusão de uma mesa previamente selecionada no fluxo",
          "entity": "Table",
          "pagination": "none",
          "selection": "single",
          "output": [
            "Table.tableId"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.deleteTable.deleteTable",
        "handlerName": "cafeFlowDeleteTableHandler"
      }
    ]
  }
} as const;

export default deleteTableController;

export const pipeline = [
  {
    "id": "deleteTable__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteTable.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteTable.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteTable.d.ts"
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
