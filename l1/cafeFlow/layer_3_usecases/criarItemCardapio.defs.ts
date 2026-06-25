/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/criarItemCardapio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarItemCardapio",
  "title": "Criar item do cardápio",
  "purpose": "Cadastra um novo item no cardápio via MDM",
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
      "tableName": "MenuCategory",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "MenuItem",
      "ownership": "mdmOwned"
    }
  ],
  "rulesApplied": [],
  "entityRefs": [
    "menuItem"
  ],
  "commands": [
    {
      "commandId": "createMenuItem",
      "input": [
        {
          "name": "menuEntity",
          "type": "menuEntity",
          "required": true
        }
      ],
      "output": [
        {
          "name": "menuEntity",
          "type": "menuEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
