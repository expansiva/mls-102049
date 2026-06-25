/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/sugerirPromocoes.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "sugerirPromocoes",
  "title": "Sugerir itens para promoção (IA)",
  "purpose": "Sugere promoções baseadas em vendas e estoque",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "salesAIEntity"
  ],
  "outputEntities": [
    "salesAIEntity"
  ],
  "readsTables": [
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "order_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "MenuItem",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "promotion_suggestions",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "aiSummarySourceRule"
  ],
  "entityRefs": [
    "inventoryItem",
    "menuItem",
    "order",
    "salesSummary"
  ],
  "commands": [
    {
      "commandId": "sugerirPromocoes",
      "input": [],
      "output": [
        {
          "name": "salesAIEntityId",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
