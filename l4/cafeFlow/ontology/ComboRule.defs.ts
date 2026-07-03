/// <mls fileReference="_102049_/l4/cafeFlow/ontology/ComboRule.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityComboRule = {
  "entityId": "ComboRule",
  "title": "Regra de Combo e Substituição",
  "description": "Definições de combos simples e substituições permitidas com diferença de preço — configuração estável do cardápio.",
  "ownership": "mdmOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "comboRuleId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da regra de combo/substituição"
    },
    {
      "fieldId": "menuItemId",
      "type": "MenuItem",
      "required": true,
      "description": "Item do cardápio ao qual a regra se aplica"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome descritivo da regra"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Detalhamento da regra e condições de aplicação"
    },
    {
      "fieldId": "priceDifference",
      "type": "money",
      "required": true,
      "description": "Diferença de preço aplicada no combo ou substituição"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação da regra no ciclo de vida",
      "enum": [
        "active",
        "inactive"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "statusEnum": [
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "comboPriceDifference"
  ]
} as const;

export default cafeFlowEntityComboRule;
