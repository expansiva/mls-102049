/// <mls fileReference="_102049_/l4/cafeFlow/ontology/MenuItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityMenuItem = {
  "entityId": "MenuItem",
  "title": "Item do Cardápio",
  "description": "Cadastro de referência de um item do cardápio: nome, categoria, preço e ingredientes vinculados a itens de estoque.",
  "ownership": "mdmOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "menuItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item do cardápio"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do item do cardápio"
    },
    {
      "fieldId": "category",
      "type": "string",
      "required": true,
      "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)"
    },
    {
      "fieldId": "price",
      "type": "money",
      "required": true,
      "description": "Preço de venda do item"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada do item"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status do ciclo de vida do item",
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
  "rulesApplied": [
    "comboPriceDifference"
  ]
} as const;

export default cafeFlowEntityMenuItem;
