/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/gerarResumoVendas.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "gerarResumoVendas",
  "title": "Gerar resumo de vendas (IA)",
  "purpose": "Gera resumo analítico de vendas via assistente IA",
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
      "tableName": "daily_shifts",
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
      "tableName": "sales_summaries",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "aiSummarySourceRule"
  ],
  "entityRefs": [
    "dailyShift",
    "inventoryItem",
    "menuItem",
    "order",
    "salesSummary"
  ],
  "commands": [
    {
      "commandId": "gerarResumoVendas",
      "input": [
        {
          "name": "salesAIEntityId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "salesAIEntityId",
          "type": "string"
        },
        {
          "name": "summaryText",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
