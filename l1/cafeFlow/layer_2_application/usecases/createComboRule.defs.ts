/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createComboRule.defs.ts" enhancement="_blank"/>

export const createComboRuleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createComboRule",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createComboRule",
    "ports": [],
    "functions": [
      {
        "functionName": "createComboRule",
        "inputTypeName": "CreateComboRuleInput",
        "outputTypeName": "CreateComboRuleOutput",
        "input": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Item do cardápio ao qual a regra se aplica, resolvido a partir da entidade selecionada na jornada"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Nome descritivo da regra"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "ComboRule",
            "description": "Detalhamento da regra e condições de aplicação"
          },
          {
            "name": "priceDifference",
            "type": "number",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Diferença de preço aplicada no combo ou substituição"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Situação da regra no ciclo de vida (active/inactive)"
          }
        ],
        "output": [
          {
            "name": "comboRuleId",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Identificador único da regra criada"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Situação da regra após criação"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "comboPriceDifference"
        ],
        "transactional": true,
        "steps": [
          "Resolve menuItemId from the selected entity context (MenuItem selected in the journey)",
          "Read MenuItem by id via ctx.data.mdmDocument.get({ mdmId: menuItemId }) to validate it exists and is active",
          "Generate comboRuleId using ctx.idGenerator",
          "Apply comboPriceDifference rule: validate that priceDifference is a non-negative monetary value consistent with the combo/substitution semantics",
          "Set createdAt and updatedAt from ctx.clock",
          "Build ComboRule aggregate with comboRuleId, menuItemId, name, description, priceDifference, status, createdAt, updatedAt",
          "Persist ComboRule through comboRuleRepository.save() inside a single transaction",
          "Return comboRuleId and status"
        ]
      }
    ],
    "mdmRefs": [
      "ComboRule",
      "MenuItem"
    ]
  }
} as const;

export default createComboRuleUsecase;

export const pipeline = [
  {
    "id": "createComboRule__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createComboRule.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createComboRule.defs.ts",
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
