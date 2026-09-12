/// <mls fileReference="_102049_/l4/petShop/ontology/ProductCategory.defs.ts" enhancement="_blank"/>

export const petShopEntityProductCategory = {
  "entityId": "ProductCategory",
  "title": "Categoria de Produto",
  "description": "Categoria de produtos do pet shop, como ração, acessórios, higiene e brinquedos, usada como filtro no catálogo.",
  "kind": "mdm",
  "ownership": "external",
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
      "description": "Nome da categoria usado como filtro no catálogo (ex.: ração, acessórios, higiene, brinquedos)."
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada da categoria de produto."
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
