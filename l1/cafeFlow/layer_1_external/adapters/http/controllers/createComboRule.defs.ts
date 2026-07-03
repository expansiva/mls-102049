/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createComboRule.defs.ts" enhancement="_blank"/>

export const createComboRuleController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createComboRule",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createComboRule",
    "controllerName": "CreateComboRuleController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateComboRuleHandler",
        "command": "createComboRule",
        "usecaseRef": "createComboRule",
        "inputTypeName": "CreateComboRuleInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "menuItemId",
            "fieldRef": "ComboRule.menuItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Item do cardápio ao qual a regra se aplica"
          },
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
            "description": "Situação da regra no ciclo de vida (active/inactive)"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "ComboRule.comboRuleId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "Identificador único gerado automaticamente para a regra"
          },
          {
            "targetRef": "ComboRule.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora de criação atribuída pelo sistema"
          },
          {
            "targetRef": "ComboRule.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora da última atualização atribuída pelo sistema"
          },
          {
            "targetRef": "input.menuItemId",
            "source": "selectedEntity",
            "originRef": "MenuItem.menuItemId",
            "description": "Identificador do item do cardápio selecionado na jornada"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Criação de uma nova regra de combo/substituição vinculada a um item do cardápio",
          "entity": "ComboRule"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createComboRule.createComboRule",
        "handlerName": "cafeFlowCreateComboRuleHandler"
      }
    ]
  }
} as const;

export default createComboRuleController;

export const pipeline = [
  {
    "id": "createComboRule__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createComboRule.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createComboRule.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/createComboRule.d.ts"
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
