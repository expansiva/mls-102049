/// <mls fileReference="_102049_/l4/petShop/ontology/Category.defs.ts" enhancement="_blank"/>

export const petShopEntityCategory = {
  "entityId": "Category",
  "title": "Categoria",
  "description": "Categoria do produto (racao, brinquedo, etc.), usada como filtro no catálogo e atributo obrigatório do produto.",
  "kind": "mdm",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "categoryId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da categoria no catálogo."
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome da categoria (ex.: ração, brinquedo, acessório), exibido como filtro na vitrine."
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição opcional da categoria para uso administrativo interno."
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

export default petShopEntityCategory;
