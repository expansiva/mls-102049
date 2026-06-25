/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/listarItensCardapio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarItensCardapio",
  "title": "Listar itens do cardápio",
  "purpose": "Lista itens do cardápio com categorias",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "menuEntity"
  ],
  "outputEntities": [
    "menuEntity"
  ],
  "readsTables": [
    {
      "tableName": "MenuItem",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "MenuCategory",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "menuItem"
  ],
  "commands": [
    {
      "commandId": "listarItensCardapio",
      "input": [],
      "output": [
        {
          "name": "itensCardapio",
          "type": "menuEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
