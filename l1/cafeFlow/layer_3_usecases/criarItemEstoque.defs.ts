/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/criarItemEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarItemEstoque",
  "title": "Criar item de estoque",
  "purpose": "Cadastra um novo insumo ou produto no estoque",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "inventoryEntity"
  ],
  "outputEntities": [
    "inventoryEntity"
  ],
  "readsTables": [
    {
      "tableName": "StockUnit",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "lowStockAlertRule"
  ],
  "entityRefs": [
    "inventoryItem"
  ],
  "commands": [
    {
      "commandId": "criarItemEstoque",
      "input": [
        {
          "name": "nomeItem",
          "type": "string",
          "required": true
        },
        {
          "name": "tipoItem",
          "type": "string",
          "required": true
        },
        {
          "name": "stockUnitId",
          "type": "string",
          "required": true
        },
        {
          "name": "quantidadeInicial",
          "type": "number",
          "required": true
        }
      ],
      "output": [
        {
          "name": "inventoryItemId",
          "type": "string"
        },
        {
          "name": "nomeItem",
          "type": "string"
        },
        {
          "name": "tipoItem",
          "type": "string"
        },
        {
          "name": "stockUnitId",
          "type": "string"
        },
        {
          "name": "quantidade",
          "type": "number"
        }
      ]
    }
  ]
} as const;

export default useCase;
