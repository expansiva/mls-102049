/// <mls fileReference="_102049_/l4/operations/browseProducts.defs.ts" enhancement="_blank"/>

export const operationBrowseProducts = {
  "operationId": "browseProducts",
  "title": "Listar produtos do catálogo",
  "actor": "loja",
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
    "filtersCanBeCombined",
    "highlightRequiresAvailableProduct"
  ],
  "story": {
    "actor": "loja",
    "goal": "Navegar e filtrar os produtos do catálogo para gerenciar cadastros, preços, descrições e disponibilidade.",
    "steps": [
      "A loja acessa a tela de catálogo de produtos",
      "O sistema lista os produtos cadastrados com nome, preço, tipo de pet, categoria, flag de destaque e status",
      "A loja pode buscar por nome (insensível a caixa e parcial) e combinar filtros de tipo de pet, categoria e faixa de preço",
      "A loja visualiza quais produtos estão em destaque e disponíveis, identificando produtos indisponíveis para gestão"
    ],
    "outcome": "A loja obtém uma lista paginada de produtos do catálogo, com possibilidade de busca e filtros combinados, incluindo dados enriquecidos de tipo de pet e categoria."
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
      "Product.status",
      "Product.createdAt",
      "Product.updatedAt"
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
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "Product.createdAt"
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "Product.updatedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "searchTerm",
      "fieldRef": "Product.name",
      "required": false,
      "source": "userInput",
      "description": "Termo de busca para filtrar produtos por nome com correspondência parcial e insensível a maiúsculas e minúsculas."
    },
    {
      "inputId": "petTypeId",
      "fieldRef": "Product.petTypeId",
      "required": false,
      "source": "userInput",
      "description": "Filtro por tipo de pet indicado para o produto."
    },
    {
      "inputId": "categoryId",
      "fieldRef": "Product.categoryId",
      "required": false,
      "source": "userInput",
      "description": "Filtro por categoria do catálogo."
    },
    {
      "inputId": "priceMin",
      "fieldRef": "Product.price",
      "required": false,
      "source": "userInput",
      "description": "Filtro de faixa de preço — valor mínimo (inclusive)."
    },
    {
      "inputId": "priceMax",
      "fieldRef": "Product.price",
      "required": false,
      "source": "userInput",
      "description": "Filtro de faixa de preço — valor máximo (inclusive)."
    },
    {
      "inputId": "status",
      "fieldRef": "Product.status",
      "required": false,
      "source": "userInput",
      "description": "Filtro por status de disponibilidade do produto (available ou unavailable)."
    },
    {
      "inputId": "highlighted",
      "fieldRef": "Product.highlighted",
      "required": false,
      "source": "userInput",
      "description": "Filtro para exibir apenas produtos marcados como destaque."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "actorSession.actorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Identifica o usuário loja autenticado na sessão para autorizar o acesso ao catálogo de produtos."
    }
  ],
  "acceptanceAssertions": [
    "A lista retornada contém apenas produtos cujo nome corresponde ao termo de busca de forma parcial e insensível a maiúsculas e minúsculas, quando um termo é informado.",
    "Os filtros de tipo de pet, categoria e faixa de preço podem ser aplicados simultaneamente sem exclusão mútua entre eles.",
    "Produtos marcados como destacado (highlighted=true) e com status unavailable não aparecem como destaque válido na listagem, respeitando a regra de que destaque exige produto disponível.",
    "Cada item da lista inclui productId, name, price, petTypeId, petTypeName, categoryId, categoryName, highlighted, status, createdAt e updatedAt.",
    "A paginação é suportada e retorna apenas a página solicitada quando os parâmetros de página e tamanho são informados.",
    "A lista inclui produtos com status available e unavailable, permitindo à loja gerenciar a disponibilidade de todo o catálogo."
  ],
  "pageId": "browseProducts",
  "commandName": "browseProducts",
  "bffName": "petShop.browseProducts.browseProducts",
  "capability": {
    "capabilityId": "browseProducts",
    "title": "Listar produtos do catálogo",
    "actor": "loja",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseProducts;
