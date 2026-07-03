/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryComboRules.defs.ts" enhancement="_blank"/>

export const queryComboRulesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryComboRules",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryComboRules",
    "ports": [],
    "functions": [
      {
        "functionName": "queryComboRules",
        "inputTypeName": "QueryComboRulesInput",
        "outputTypeName": "QueryComboRulesOutput",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Filtro opcional pela situação da regra (active ou inactive)",
            "ofEntity": "ComboRule"
          },
          {
            "name": "nameContains",
            "type": "string",
            "required": false,
            "description": "Termo de busca opcional pelo nome da regra",
            "ofEntity": "ComboRule"
          }
        ],
        "output": [
          {
            "name": "comboRuleId",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule"
          },
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "ComboRule"
          },
          {
            "name": "priceDifference",
            "type": "number",
            "required": true,
            "ofEntity": "ComboRule"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule"
          },
          {
            "name": "menuItemName",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "comboPriceDifference"
        ],
        "transactional": false,
        "steps": [
          "Resolve workspaceId from current workspace context (RequestContext metadata) — not user input",
          "Query ComboRule records from MDM store (ctx.data.mdmDocument) filtered by workspaceId, optional status filter, optional nameContains search",
          "For each ComboRule result, fetch referenced MenuItem by menuItemId via ctx.data.mdmDocument.get to obtain MenuItem.name",
          "Apply comboPriceDifference rule to validate priceDifference is surfaced correctly for each returned rule",
          "Return results sorted by ComboRule.createdAt ascending with joined MenuItem.name as menuItemName"
        ]
      }
    ],
    "mdmRefs": [
      "ComboRule",
      "MenuItem"
    ]
  }
} as const;

export default queryComboRulesUsecase;

export const pipeline = [
  {
    "id": "queryComboRules__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryComboRules.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryComboRules.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
