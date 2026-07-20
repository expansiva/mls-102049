/// <mls fileReference="_102049_/l4/petShop/operations/browseFeaturedProducts.defs.ts" enhancement="_blank"/>

export const operationBrowseFeaturedProducts = {
  "operationId": "browseFeaturedProducts",
  "title": "Visualizar produtos em destaque na vitrine",
  "actors": [
    "cliente"
  ],
  "entity": "Product",
  "kind": "query",
  "reads": [
    "Product"
  ],
  "writes": [],
  "rulesApplied": [
    "featuredProductsOnly",
    "featuredOrderFlexible",
    "combinedFilters",
    "caseInsensitiveSearch"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Ver os produtos em destaque na vitrine do pet shop ao acessar a página inicial",
    "steps": [
      "O cliente acessa a página inicial do pet shop",
      "O sistema exibe a vitrine com produtos marcados como destaque pelo processo administrativo externo",
      "O cliente pode aplicar filtros opcionais de categoria, tipo de pet, nome e faixa de preço para refinar a visualização",
      "O cliente seleciona um produto em destaque para ver seus detalhes"
    ],
    "outcome": "O cliente visualiza a lista de produtos em destaque na vitrine, podendo filtrá-los para identificar promoções, novidades ou itens recomendados antes de acessar os detalhes de um produto"
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
      "Product.price",
      "Product.isFeatured",
      "Product.categoryId",
      "Product.petTypeId"
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
        "name": "price",
        "type": "number",
        "required": true,
        "fieldRef": "Product.price"
      },
      {
        "name": "isFeatured",
        "type": "boolean",
        "required": true,
        "fieldRef": "Product.isFeatured"
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": true,
        "fieldRef": "Product.categoryId"
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": true,
        "fieldRef": "Product.petTypeId"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "categoryId",
      "fieldRef": "Product.categoryId",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional por categoria do produto"
    },
    {
      "inputId": "petTypeId",
      "fieldRef": "Product.petTypeId",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional por tipo de pet associado ao produto"
    },
    {
      "inputId": "name",
      "fieldRef": "Product.name",
      "required": false,
      "source": "userInput",
      "description": "Termo de pesquisa opcional para filtrar produtos por nome (insensível a caixa)"
    },
    {
      "inputId": "priceMin",
      "fieldRef": "Product.price",
      "required": false,
      "source": "userInput",
      "description": "Valor mínimo opcional para filtrar produtos por faixa de preço"
    },
    {
      "inputId": "priceMax",
      "fieldRef": "Product.price",
      "required": false,
      "source": "userInput",
      "description": "Valor máximo opcional para filtrar produtos por faixa de preço"
    },
    {
      "inputId": "page",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Número da página para paginação opcional dos resultados"
    },
    {
      "inputId": "pageSize",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Quantidade de itens por página para paginação opcional dos resultados"
    }
  ],
  "contextResolution": [],
  "acceptanceAssertions": [
    "A vitrine retorna apenas produtos com isFeatured igual a true",
    "Produtos não marcados como destaque nunca aparecem nos resultados da vitrine",
    "Os filtros de categoria, tipo de pet, nome e faixa de valor funcionam simultaneamente quando aplicados",
    "A pesquisa por nome retorna resultados correspondentes independente da capitalização informada",
    "Cada item retornado inclui productId, name, price, categoryId e petTypeId para permitir a navegação aos detalhes do produto"
  ],
  "pageId": "browseFeaturedProducts",
  "commandName": "browseFeaturedProducts",
  "bffName": "petShop.browseFeaturedProducts.browseFeaturedProducts",
  "capability": {
    "capabilityId": "browseFeaturedProducts",
    "title": "Visualizar produtos em destaque na vitrine",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseFeaturedProducts;
