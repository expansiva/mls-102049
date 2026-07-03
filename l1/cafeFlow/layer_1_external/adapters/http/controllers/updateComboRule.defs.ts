/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateComboRule.defs.ts" enhancement="_blank"/>

export const updateComboRuleController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateComboRule",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateComboRule",
    "controllerName": "UpdateComboRuleController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateComboRuleHandler",
        "command": "updateComboRule",
        "usecaseRef": "updateComboRule",
        "inputTypeName": "UpdateComboRuleInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "name",
            "fieldRef": "ComboRule.name",
            "required": true,
            "source": "userInput",
            "description": "Nome descritivo da regra"
          },
          {
            "inputId": "description",
            "fieldRef": "ComboRule.description",
            "required": false,
            "source": "userInput",
            "description": "Detalhamento da regra e condições de aplicação"
          },
          {
            "inputId": "priceDifference",
            "fieldRef": "ComboRule.priceDifference",
            "required": true,
            "source": "userInput",
            "description": "Diferença de preço aplicada no combo ou substituição"
          },
          {
            "inputId": "status",
            "fieldRef": "ComboRule.status",
            "required": true,
            "source": "userInput",
            "description": "Situação da regra no ciclo de vida"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "ComboRule.comboRuleId",
            "source": "selectedEntity",
            "originRef": "ComboRule.comboRuleId",
            "description": "Identificador único da regra de combo sendo editada, resolvido da entidade selecionada na jornada"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Comando de atualização dos campos editáveis de uma regra de combo existente"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateComboRule.updateComboRule",
        "handlerName": "cafeFlowUpdateComboRuleHandler"
      }
    ]
  }
} as const;

export default updateComboRuleController;

export const pipeline = [
  {
    "id": "updateComboRule__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateComboRule.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateComboRule.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/updateComboRule.d.ts"
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
