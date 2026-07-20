/// <mls fileReference="_102049_/l4/petShop/ontology/Product.defs.ts" enhancement="_blank"/>

export const petShopEntityProduct = {
  "entityId": "Product",
  "title": "Produto",
  "description": "Produto do catálogo do pet shop, mantido por processo administrativo externo, com nome, preço, tipo de pet, categoria e flag de destaque para vitrine.",
  "kind": "mdm",
  "ownership": "external",
  "fields": [
    {
      "fieldId": "productId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do produto no catálogo."
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do produto utilizado para exibição e pesquisa no catálogo."
    },
    {
      "fieldId": "price",
      "type": "money",
      "required": true,
      "description": "Preço do produto utilizado no filtro de faixa de valor e no cálculo da reserva."
    },
    {
      "fieldId": "isFeatured",
      "type": "boolean",
      "required": true,
      "description": "Indica se o produto deve ser exibido na vitrine de destaques, definido pelo processo administrativo externo."
    },
    {
      "fieldId": "categoryId",
      "type": "uuid",
      "required": true,
      "description": "Referência à categoria do produto à qual pertence, usada no filtro de categoria."
    },
    {
      "fieldId": "petTypeId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao tipo de pet associado ao produto, usada no filtro de tipo de pet."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de cadastro do produto no catálogo."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do produto pelo processo administrativo externo."
    }
  ]
} as const;

export default petShopEntityProduct;
