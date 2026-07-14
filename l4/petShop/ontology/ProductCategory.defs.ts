/// <mls fileReference="_102049_/l4/petShop/ontology/ProductCategory.defs.ts" enhancement="_blank"/>

export const petShopEntityProductCategory = {
  "entityId": "ProductCategory",
  "title": "Categoria de Produto",
  "description": "Categoria de classificação de produtos do catálogo, utilizada para filtragem e organização na navegação do cliente.",
  "kind": "mdm",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "productCategoryId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da categoria de produto."
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome da categoria de produto exibido na navegação do cliente."
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada da categoria para uso interno e organização do catálogo."
    },
    {
      "fieldId": "active",
      "type": "boolean",
      "required": true,
      "description": "Indica se a categoria está ativa e disponível para associação a produtos no catálogo."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro da categoria."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro da categoria."
    }
  ]
} as const;

export default petShopEntityProductCategory;
