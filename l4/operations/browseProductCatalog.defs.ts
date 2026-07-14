/// <mls fileReference="_102049_/l4/operations/browseProductCatalog.defs.ts" enhancement="_blank"/>

export const operationBrowseProductCatalog = {
  "operationId": "browseProductCatalog",
  "title": "Navegar no catálogo de produtos",
  "actor": "cliente",
  "entity": "Product",
  "kind": "query",
  "reads": [
    "Product",
    "ProductCategory"
  ],
  "writes": [],
  "rulesApplied": [
    "featuredProductRequiresActive",
    "productImageUsesPlatformStorage"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Navegar pelo catálogo de produtos do pet shop filtrando por categoria ou buscando pelo nome para encontrar o que precisa.",
    "steps": [
      "O cliente abre a página de catálogo de produtos",
      "O sistema lista os produtos ativos com nome, preço, imagem e categoria",
      "O cliente pode filtrar por categoria ou buscar pelo nome do produto",
      "O cliente visualiza os resultados paginados do catálogo"
    ],
    "outcome": "O cliente vê a lista de produtos ativos do catálogo, podendo refinar por categoria ou nome antes de selecionar um produto para ver detalhes."
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
      "Product.imageUrl",
      "Product.productCategoryId",
      "Product.featured"
    ]
  },
  "inputs": [
    {
      "inputId": "searchName",
      "fieldRef": "Product.name",
      "required": false,
      "source": "userInput",
      "description": "Texto de busca para filtrar produtos pelo nome"
    },
    {
      "inputId": "productCategoryId",
      "fieldRef": "Product.productCategoryId",
      "required": false,
      "source": "userInput",
      "description": "Identificador da categoria para filtrar os produtos do catálogo"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Product.status",
      "source": "systemDefault",
      "originRef": "systemDefault.locale",
      "description": "O backend aplica automaticamente o filtro status=active para que o cliente veja apenas produtos ativos no catálogo, sem exigir esse campo na requisição"
    }
  ],
  "acceptanceAssertions": [
    "O catálogo exibe apenas produtos com status igual a active",
    "O cliente pode filtrar produtos por categoria informando productCategoryId",
    "O cliente pode buscar produtos pelo nome informando searchName",
    "Cada produto exibido mostra productId, name, price, imageUrl e productCategoryId",
    "Produtos marcados como featured=true aparecem com o flag de destaque visível no catálogo",
    "A lista de produtos suporta paginação opcional para não sobrecarregar a tela"
  ],
  "pageId": "browseProductCatalog",
  "commandName": "browseProductCatalog",
  "bffName": "petShop.browseProductCatalog.browseProductCatalog",
  "capability": {
    "capabilityId": "browseProductCatalog",
    "title": "Navegar no catálogo de produtos",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseProductCatalog;
