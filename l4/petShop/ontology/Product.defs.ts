/// <mls fileReference="_102049_/l4/petShop/ontology/Product.defs.ts" enhancement="_blank"/>

export const petShopEntityProduct = {
  "entityId": "Product",
  "title": "Produto",
  "description": "Produto do catálogo do pet shop, com nome, descrição, preço, imagem, categoria e flag de destaque para exibição na página inicial.",
  "kind": "core",
  "ownership": "moduleOwned",
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
      "description": "Nome do produto exibido no catálogo e na página inicial."
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada do produto para o cliente."
    },
    {
      "fieldId": "price",
      "type": "money",
      "required": true,
      "description": "Preço do produto cobrado na retirada presencial na loja."
    },
    {
      "fieldId": "imageUrl",
      "type": "string",
      "required": false,
      "description": "URL da imagem do produto armazenada no armazenamento de mídia da plataforma."
    },
    {
      "fieldId": "productCategoryId",
      "type": "uuid",
      "required": true,
      "description": "Referência à categoria de produto à qual o produto pertence."
    },
    {
      "fieldId": "featured",
      "type": "boolean",
      "required": true,
      "description": "Indica se o produto deve ser exibido em destaque na página inicial."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação do produto no catálogo: ativo ou inativo.",
      "enum": [
        "active",
        "inactive"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de cadastro do produto."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do produto."
    }
  ],
  "statusEnum": [
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ]
} as const;

export default petShopEntityProduct;
