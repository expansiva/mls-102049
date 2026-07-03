/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteComboRule.defs.ts" enhancement="_blank"/>

export const deleteComboRuleController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "deleteComboRule",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "deleteComboRule",
    "controllerName": "DeleteComboRuleController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowDeleteComboRuleHandler",
        "command": "deleteComboRule",
        "usecaseRef": "deleteComboRule",
        "inputTypeName": "DeleteComboRuleInput",
        "kind": "delete",
        "inputContract": [
          {
            "inputId": "comboRuleId",
            "fieldRef": "ComboRule.comboRuleId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador único da regra de combo selecionada para exclusão"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.comboRuleId",
            "source": "selectedEntity",
            "originRef": "ComboRule.comboRuleId",
            "description": "Resolve o identificador da regra de combo a partir da entidade selecionada no fluxo"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Exclusão de uma regra de combo previamente selecionada",
          "entity": "ComboRule",
          "pagination": "none",
          "selection": "single"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.deleteComboRule.deleteComboRule",
        "handlerName": "cafeFlowDeleteComboRuleHandler"
      }
    ]
  }
} as const;

export default deleteComboRuleController;

export const pipeline = [
  {
    "id": "deleteComboRule__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteComboRule.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteComboRule.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteComboRule.d.ts"
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
