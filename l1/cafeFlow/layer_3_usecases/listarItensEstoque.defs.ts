/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/listarItensEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarItensEstoque",
  "title": "Listar itens de estoque",
  "purpose": "Lista itens de estoque com saldo e unidades",
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
      "commandId": "listarItensEstoque",
      "input": [],
      "output": [
        {
          "name": "itens",
          "type": "inventoryEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
