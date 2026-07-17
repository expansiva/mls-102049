/// <mls fileReference="_102049_/l4/petShop/ontology/Product.defs.ts" enhancement="_blank"/>

export const petShopEntityProduct = {
  "entityId": "Product",
  "title": "Produto",
  "description": "Item do catálogo da loja com nome, descrição, preço, tipo de pet indicado, categoria, flag de destaque e disponibilidade. É o núcleo da vitrine pública e das reservas.",
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
      "description": "Nome do produto usado na busca insensível a maiúsculas e minúsculas com correspondência parcial."
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada do produto exibida na página de detalhes."
    },
    {
      "fieldId": "price",
      "type": "money",
      "required": true,
      "description": "Preço do produto utilizado na filtragem por faixa de valor."
    },
    {
      "fieldId": "petTypeId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao tipo de pet indicado para o produto, usado como filtro de catálogo."
    },
    {
      "fieldId": "categoryId",
      "type": "uuid",
      "required": true,
      "description": "Referência à categoria do catálogo à qual o produto pertence, usada como filtro."
    },
    {
      "fieldId": "highlighted",
      "type": "boolean",
      "required": true,
      "description": "Indica se o produto foi manualmente marcado como destaque pela loja; só pode ser verdadeiro quando o produto está disponível."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Disponibilidade do produto na vitrine; produtos indisponíveis não aparecem na vitrine nem podem ser reservados.",
      "enum": [
        "available",
        "unavailable"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do produto no catálogo."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização dos dados do produto."
    }
  ],
  "statusEnum": [
    "available",
    "unavailable"
  ],
  "lifecycleStates": [
    "available",
    "unavailable"
  ]
} as const;

export default petShopEntityProduct;
