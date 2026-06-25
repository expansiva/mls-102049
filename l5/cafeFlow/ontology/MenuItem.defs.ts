/// <mls fileReference="_102049_/l5/cafeFlow/ontology/MenuItem.defs.ts" enhancement="_blank"/>

export const MenuItemEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "MenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 38,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "MenuItem",
      "title": "Item do Cardápio",
      "description": "Produto vendável com preço, categoria e vínculo com ingredientes do estoque.",
      "ownership": "moduleOwned",
      "kind": "core",
      "fields": [
        {
          "fieldId": "menuItemId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do item do cardápio."
        },
        {
          "fieldId": "name",
          "type": "string",
          "required": true,
          "description": "Nome exibido do item do cardápio."
        },
        {
          "fieldId": "description",
          "type": "text",
          "required": false,
          "description": "Descrição detalhada do item do cardápio."
        },
        {
          "fieldId": "price",
          "type": "money",
          "required": true,
          "description": "Preço de venda do item do cardápio."
        },
        {
          "fieldId": "menuCategoryId",
          "type": "MenuCategory",
          "required": true,
          "description": "Categoria à qual o item do cardápio pertence."
        },
        {
          "fieldId": "isActive",
          "type": "boolean",
          "required": true,
          "description": "Indica se o item do cardápio está disponível para venda."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro do item do cardápio."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro do item do cardápio."
        }
      ]
    }
  }
} as const;

export default MenuItemEntityDefinition;
