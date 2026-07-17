/// <mls fileReference="_102049_/l4/operations/searchProducts.defs.ts" enhancement="_blank"/>

export const operationSearchProducts = {
  "operationId": "searchProducts",
  "title": "Buscar produtos por nome",
  "actor": "cliente",
  "entity": "Product",
  "kind": "query",
  "reads": [
    "Product",
    "PetType",
    "Category"
  ],
  "writes": [],
  "rulesApplied": [
    "searchIsCaseInsensitiveAndPartial",
    "onlyAvailableProductsVisibleAndReservable",
    "filtersCanBeCombined"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Encontrar produtos específicos no catálogo digitando o nome ou parte do nome",
    "steps": [
      "O cliente digita um termo de busca no campo de pesquisa da vitrine",
      "O sistema busca produtos cujo nome corresponde parcialmente e de forma insensível a maiúsculas e minúsculas",
      "O sistema filtra automaticamente para exibir apenas produtos com status available",
      "O cliente pode opcionalmente combinar filtros de tipo de pet, categoria e faixa de preço",
      "O sistema retorna a lista de produtos correspondentes com nome, preço, tipo de pet e categoria"
    ],
    "outcome": "O cliente visualiza uma lista de produtos disponíveis que correspondem ao termo buscado e aos filtros aplicados"
  },
  "accessPattern": {
    "kind": "list",
    "entity": "Product",
    "keyField": "Product.productId",
    "pagination": "optional",
    "selection": "none",
    "output": [
      "Product.productId",
      "Product.name",
      "Product.description",
      "Product.price",
      "Product.petTypeId",
      "Product.categoryId",
      "Product.highlighted",
      "Product.status"
    ]
  },
  "outputShape": {
    "kind": "list",
    "fields": [
      {
        "name": "productId",
        "type": "string",
        "required": true,
        "fieldRef": "Product.productId"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "fieldRef": "Product.name"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "fieldRef": "Product.description"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "fieldRef": "Product.price"
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": true,
        "fieldRef": "Product.petTypeId"
      },
      {
        "name": "petTypeName",
        "type": "string",
        "required": true,
        "fieldRef": "PetType.name"
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": true,
        "fieldRef": "Product.categoryId"
      },
      {
        "name": "categoryName",
        "type": "string",
        "required": true,
        "fieldRef": "Category.name"
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": true,
        "fieldRef": "Product.highlighted"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Product.status"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "searchTerm",
      "fieldRef": "Product.name",
      "required": true,
      "source": "userInput",
      "description": "Termo de busca digitado pelo cliente para encontrar produtos por nome (correspondência parcial e insensível a caixa)"
    },
    {
      "inputId": "petTypeId",
      "fieldRef": "Product.petTypeId",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional por tipo de pet indicado para o produto"
    },
    {
      "inputId": "categoryId",
      "fieldRef": "Product.categoryId",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional por categoria do catálogo"
    },
    {
      "inputId": "minPrice",
      "fieldRef": "Product.price",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional de preço mínimo para faixa de valor"
    },
    {
      "inputId": "maxPrice",
      "fieldRef": "Product.price",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional de preço máximo para faixa de valor"
    }
  ],
  "contextResolution": [],
  "acceptanceAssertions": [
    "A lista de resultados contém apenas produtos cujo status seja 'available'",
    "A busca por nome corresponde parcialmente e de forma insensível a maiúsculas e minúsculas ao termo informado",
    "Quando o filtro petTypeId é informado, os resultados contêm apenas produtos do tipo de pet especificado",
    "Quando o filtro categoryId é informado, os resultados contêm apenas produtos da categoria especificada",
    "Quando os filtros minPrice e/ou maxPrice são informados, os resultados respeitam a faixa de preço especificada",
    "Os filtros de tipo de pet, categoria e faixa de valor podem ser combinados simultaneamente sem exclusão mútua",
    "Cada item do resultado inclui o nome do tipo de pet e o nome da categoria correspondentes"
  ],
  "pageId": "searchProducts",
  "commandName": "searchProducts",
  "bffName": "petShop.searchProducts.searchProducts",
  "capability": {
    "capabilityId": "searchProducts",
    "title": "Buscar produtos por nome",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationSearchProducts;
