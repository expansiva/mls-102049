/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryComboRules.defs.ts" enhancement="_blank"/>

export const queryComboRulesController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "queryComboRules",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "queryComboRules",
    "controllerName": "QueryComboRulesController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowQueryComboRulesHandler",
        "command": "queryComboRules",
        "usecaseRef": "queryComboRules",
        "inputTypeName": "QueryComboRulesInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "status",
            "fieldRef": "ComboRule.status",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional pela situação da regra (active ou inactive)"
          },
          {
            "inputId": "nameContains",
            "fieldRef": "ComboRule.name",
            "required": false,
            "source": "userInput",
            "description": "Termo de busca opcional pelo nome da regra"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "filter.workspaceId",
            "source": "currentWorkspace",
            "originRef": "currentWorkspace.workspaceId",
            "description": "Escopo da consulta restrito ao workspace atual do gerente"
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "Lista navegável de regras de combo e substituição com filtro opcional por situação e busca por nome",
          "entity": "ComboRule",
          "filters": [
            "status",
            "nameContains"
          ],
          "sort": [
            "ComboRule.createdAt"
          ],
          "pagination": "optional",
          "selection": "none",
          "output": [
            "ComboRule.comboRuleId",
            "ComboRule.name",
            "ComboRule.menuItemId",
            "ComboRule.description",
            "ComboRule.priceDifference",
            "ComboRule.status",
            "ComboRule.createdAt",
            "ComboRule.updatedAt",
            "MenuItem.name"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.queryComboRules.queryComboRules",
        "handlerName": "cafeFlowQueryComboRulesHandler"
      }
    ]
  }
} as const;

export default queryComboRulesController;

export const pipeline = [
  {
    "id": "queryComboRules__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryComboRules.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryComboRules.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/queryComboRules.d.ts"
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
