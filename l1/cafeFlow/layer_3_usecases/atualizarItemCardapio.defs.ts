/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/atualizarItemCardapio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarItemCardapio",
  "title": "Atualizar item do cardápio",
  "purpose": "Edita um item existente no cardápio",
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
      "commandId": "atualizarItemCardapio",
      "input": [
        {
          "name": "menuItemId",
          "type": "string",
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "required": false
        },
        {
          "name": "description",
          "type": "string",
          "required": false
        },
        {
          "name": "price",
          "type": "number",
          "required": false
        },
        {
          "name": "categoryId",
          "type": "string",
          "required": false
        },
        {
          "name": "isAvailable",
          "type": "boolean",
          "required": false
        }
      ],
      "output": [
        {
          "name": "menuItemId",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "price",
          "type": "number"
        },
        {
          "name": "categoryId",
          "type": "string"
        },
        {
          "name": "isAvailable",
          "type": "boolean"
        }
      ]
    }
  ]
} as const;

export default useCase;
