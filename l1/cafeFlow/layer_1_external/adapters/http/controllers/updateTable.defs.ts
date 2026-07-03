/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTable.defs.ts" enhancement="_blank"/>

export const updateTableController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateTable",
    "controllerName": "UpdateTableController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateTableHandler",
        "command": "updateTable",
        "usecaseRef": "updateTable",
        "inputTypeName": "UpdateTableInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "tableId",
            "fieldRef": "Table.tableId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador único da mesa a ser editada"
          },
          {
            "inputId": "number",
            "fieldRef": "Table.number",
            "required": true,
            "source": "userInput",
            "description": "Número ou código de identificação visual da mesa"
          },
          {
            "inputId": "name",
            "fieldRef": "Table.name",
            "required": false,
            "source": "userInput",
            "description": "Nome ou descrição opcional da mesa"
          },
          {
            "inputId": "status",
            "fieldRef": "Table.status",
            "required": true,
            "source": "userInput",
            "description": "Situação da mesa no sistema (active ou inactive)"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.tableId",
            "source": "selectedEntity",
            "originRef": "Table.tableId",
            "description": "Identificador da mesa selecionada na lista para edição"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Comando para atualizar os dados cadastrais de uma mesa existente selecionada previamente",
          "entity": "Table"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateTable.updateTable",
        "handlerName": "cafeFlowUpdateTableHandler"
      }
    ]
  }
} as const;

export default updateTableController;

export const pipeline = [
  {
    "id": "updateTable__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTable.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTable.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/updateTable.d.ts"
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
