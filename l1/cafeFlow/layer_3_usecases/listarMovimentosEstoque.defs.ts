/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/listarMovimentosEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarMovimentosEstoque",
  "title": "Listar movimentos de estoque",
  "purpose": "Lista histórico de movimentações de estoque",
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
      "tableName": "inventory_movements",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "StockUnit",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "inventoryItem"
  ],
  "commands": [
    {
      "commandId": "listInventoryMovements",
      "input": [],
      "output": [
        {
          "name": "movements",
          "type": "inventoryEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
