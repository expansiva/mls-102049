/// <mls fileReference="_102049_/l4/operations/filterProducts.defs.ts" enhancement="_blank"/>

export const operationFilterProducts = {
  "operationId": "filterProducts",
  "title": "Filtrar produtos por tipo de pet, categoria e faixa de valor",
  "actor": "cliente",
  "entity": "Product",
  "kind": "query",
  "reads": [
    "Product"
  ],
  "writes": [],
  "rulesApplied": [
    "onlyAvailableProductsVisibleAndReservable",
    "filtersCanBeCombined"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Refinar a lista de produtos do catálogo filtrando por tipo de pet, categoria e faixa de preço",
    "steps": [
      "O cliente acessa a vitrine de produtos disponíveis",
      "O cliente seleciona um ou mais filtros: tipo de pet, categoria e/ou faixa de valor (preço mínimo e máximo)",
      "O sistema aplica os filtros simultaneamente e retorna apenas produtos disponíveis que correspondem aos critérios"
    ],
    "outcome": "O cliente visualiza uma lista refinada de produtos disponíveis que atendem aos filtros selecionados"
  },
  "accessPattern": {
    "kind": "list",
    "entity": "Product",
    "keyField": "Product.productId",
    "pagination": "optional",
    "selection": "multiple",
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
        "name": "categoryId",
        "type": "string",
        "required": true,
        "fieldRef": "Product.categoryId"
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
      "inputId": "petTypeId",
      "fieldRef": "Product.petTypeId",
      "required": false,
      "source": "userInput",
      "description": "Tipo de pet selecionado para filtrar o catálogo (ex.: cão, gato)."
    },
    {
      "inputId": "categoryId",
      "fieldRef": "Product.categoryId",
      "required": false,
      "source": "userInput",
      "description": "Categoria selecionada para filtrar o catálogo (ex.: ração, brinquedo)."
    },
    {
      "inputId": "minPrice",
      "fieldRef": "Product.price",
      "required": false,
      "source": "userInput",
      "description": "Preço mínimo da faixa de valor informada pelo cliente."
    },
    {
      "inputId": "maxPrice",
      "fieldRef": "Product.price",
      "required": false,
      "source": "userInput",
      "description": "Preço máximo da faixa de valor informada pelo cliente."
    }
  ],
  "contextResolution": [],
  "acceptanceAssertions": [
    "A lista retornada contém apenas produtos com status 'available'; produtos indisponíveis nunca aparecem nos resultados.",
    "Os filtros de tipo de pet, categoria e faixa de valor podem ser aplicados simultaneamente sem exclusão mútua entre eles.",
    "Quando nenhum filtro é informado, todos os produtos disponíveis no catálogo são retornados.",
    "Quando o filtro de faixa de valor é aplicado, apenas produtos cujo preço está entre minPrice e maxPrice (inclusive) são retornados.",
    "Quando o filtro de tipo de pet é aplicado, apenas produtos cujo petTypeId corresponde ao valor informado são retornados."
  ],
  "pageId": "filterProducts",
  "commandName": "filterProducts",
  "bffName": "petShop.filterProducts.filterProducts",
  "capability": {
    "capabilityId": "filterProducts",
    "title": "Filtrar produtos por tipo de pet, categoria e faixa de valor",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationFilterProducts;
