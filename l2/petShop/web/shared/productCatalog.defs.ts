/// <mls fileReference="_102049_/l2/petShop/web/shared/productCatalog.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "productCatalog",
  "pageName": "Catálogo de Produtos",
  "moduleName": "petShop",
  "baseClassName": "PetShopProductCatalogBase",
  "routePattern": "/petShop/productCatalog/:productId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:viewHighlights",
    "operation:browseCatalog",
    "operation:searchProducts",
    "operation:filterProducts",
    "operation:viewProductDetails"
  ],
  "operationIds": [
    "viewHighlights",
    "browseCatalog",
    "searchProducts",
    "filterProducts",
    "viewProductDetails"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "productCatalog",
    "workspaceKind": "operation",
    "actor": "cliente",
    "entity": "Product",
    "owners": [
      {
        "kind": "operation",
        "id": "viewHighlights",
        "defPath": "_102049_/l4/operations/viewHighlights.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseCatalog",
        "defPath": "_102049_/l4/operations/browseCatalog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "searchProducts",
        "defPath": "_102049_/l4/operations/searchProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "filterProducts",
        "defPath": "_102049_/l4/operations/filterProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewProductDetails",
        "defPath": "_102049_/l4/operations/viewProductDetails.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewHighlights",
          "commandName": "viewHighlights",
          "steps": [
            "O cliente acessa a página inicial do site",
            "O sistema consulta produtos marcados como destaque e disponíveis",
            "O sistema retorna a lista de produtos em destaque com nome, descrição, preço, tipo de pet e categoria",
            "O cliente navega pelos produtos destacados para encontrar algo de seu interesse"
          ]
        },
        {
          "operationId": "browseCatalog",
          "commandName": "browseCatalog",
          "steps": [
            "O cliente acessa a página do catálogo de produtos",
            "O sistema retorna a lista paginada de produtos com status available",
            "O cliente pode buscar por nome (insensível a caixa, correspondência parcial) e filtrar por tipo de pet, categoria e faixa de preço",
            "O sistema aplica todos os filtros simultaneamente e retorna os resultados correspondentes"
          ]
        },
        {
          "operationId": "searchProducts",
          "commandName": "searchProducts",
          "steps": [
            "O cliente digita um termo de busca no campo de pesquisa da vitrine",
            "O sistema busca produtos cujo nome corresponde parcialmente e de forma insensível a maiúsculas e minúsculas",
            "O sistema filtra automaticamente para exibir apenas produtos com status available",
            "O cliente pode opcionalmente combinar filtros de tipo de pet, categoria e faixa de preço",
            "O sistema retorna a lista de produtos correspondentes com nome, preço, tipo de pet e categoria"
          ]
        },
        {
          "operationId": "filterProducts",
          "commandName": "filterProducts",
          "steps": [
            "O cliente acessa a vitrine de produtos disponíveis",
            "O cliente seleciona um ou mais filtros: tipo de pet, categoria e/ou faixa de valor (preço mínimo e máximo)",
            "O sistema aplica os filtros simultaneamente e retorna apenas produtos disponíveis que correspondem aos critérios"
          ]
        },
        {
          "operationId": "viewProductDetails",
          "commandName": "viewProductDetails",
          "steps": [
            "O cliente seleciona um produto na vitrine ou nos resultados de busca",
            "O sistema recupera o produto pelo seu identificador junto com o nome do tipo de pet e da categoria",
            "O sistema exibe nome, descrição, preço, tipo de pet indicado, categoria e flag de destaque do produto"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/productCatalog.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/productCatalog.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/productCatalog.defs.ts",
    "layoutId": "status_overview"
  },
  "states": [
    {
      "stateKey": "ui.productCatalog.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.action.viewHighlights.status",
      "name": "viewHighlightsState",
      "kind": "actionStatus",
      "actionRef": "viewHighlights",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productCatalog.data.viewHighlights",
      "name": "viewHighlightsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewHighlights",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.productCatalog.action.browseCatalog.status",
      "name": "browseCatalogState",
      "kind": "actionStatus",
      "actionRef": "browseCatalog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productCatalog.input.browseCatalog.searchTerm",
      "name": "browseCatalogSearchTerm",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "input",
        "field": "searchTerm"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.browseCatalog.petTypeId",
      "name": "browseCatalogPetTypeId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "input",
        "field": "petTypeId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.browseCatalog.categoryId",
      "name": "browseCatalogCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "input",
        "field": "categoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.browseCatalog.minPrice",
      "name": "browseCatalogMinPrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "input",
        "field": "minPrice"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.browseCatalog.maxPrice",
      "name": "browseCatalogMaxPrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "input",
        "field": "maxPrice"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.data.browseCatalog",
      "name": "browseCatalogData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    },
    {
      "stateKey": "ui.productCatalog.action.searchProducts.status",
      "name": "searchProductsState",
      "kind": "actionStatus",
      "actionRef": "searchProducts",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productCatalog.input.searchProducts.searchTerm",
      "name": "searchProductsSearchTerm",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "searchProducts",
        "direction": "input",
        "field": "searchTerm"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.searchProducts.petTypeId",
      "name": "searchProductsPetTypeId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "searchProducts",
        "direction": "input",
        "field": "petTypeId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.searchProducts.categoryId",
      "name": "searchProductsCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "searchProducts",
        "direction": "input",
        "field": "categoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.searchProducts.minPrice",
      "name": "searchProductsMinPrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "searchProducts",
        "direction": "input",
        "field": "minPrice"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.searchProducts.maxPrice",
      "name": "searchProductsMaxPrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "searchProducts",
        "direction": "input",
        "field": "maxPrice"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.data.searchProducts",
      "name": "searchProductsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "searchProducts",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.productCatalog.action.filterProducts.status",
      "name": "filterProductsState",
      "kind": "actionStatus",
      "actionRef": "filterProducts",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productCatalog.input.filterProducts.petTypeId",
      "name": "filterProductsPetTypeId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "filterProducts",
        "direction": "input",
        "field": "petTypeId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.filterProducts.categoryId",
      "name": "filterProductsCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "filterProducts",
        "direction": "input",
        "field": "categoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.filterProducts.minPrice",
      "name": "filterProductsMinPrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "filterProducts",
        "direction": "input",
        "field": "minPrice"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.filterProducts.maxPrice",
      "name": "filterProductsMaxPrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "filterProducts",
        "direction": "input",
        "field": "maxPrice"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.data.filterProducts",
      "name": "filterProductsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "filterProducts",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.productCatalog.action.viewProductDetails.status",
      "name": "viewProductDetailsState",
      "kind": "actionStatus",
      "actionRef": "viewProductDetails",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productCatalog.input.viewProductDetails.productId",
      "name": "viewProductDetailsProductId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "viewProductDetails",
        "direction": "input",
        "field": "productId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.data.viewProductDetails",
      "name": "viewProductDetailsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewProductDetails",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "viewHighlights",
      "kind": "query",
      "commandRef": "viewHighlights",
      "routeKey": "petShop.viewHighlights.viewHighlights",
      "purpose": "Visualizar produtos em destaque",
      "methodName": "loadViewHighlights",
      "handlerName": "handleViewHighlightsClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productCatalog.data.viewHighlights"
      ],
      "statusStateKey": "ui.productCatalog.action.viewHighlights.status"
    },
    {
      "actionId": "browseCatalog",
      "kind": "query",
      "commandRef": "browseCatalog",
      "routeKey": "petShop.browseCatalog.browseCatalog",
      "purpose": "Navegar pelo catálogo completo",
      "methodName": "loadBrowseCatalog",
      "handlerName": "handleBrowseCatalogClick",
      "inputStateKeys": [
        "ui.productCatalog.input.browseCatalog.searchTerm",
        "ui.productCatalog.input.browseCatalog.petTypeId",
        "ui.productCatalog.input.browseCatalog.categoryId",
        "ui.productCatalog.input.browseCatalog.minPrice",
        "ui.productCatalog.input.browseCatalog.maxPrice"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productCatalog.data.browseCatalog"
      ],
      "statusStateKey": "ui.productCatalog.action.browseCatalog.status"
    },
    {
      "actionId": "searchProducts",
      "kind": "query",
      "commandRef": "searchProducts",
      "routeKey": "petShop.searchProducts.searchProducts",
      "purpose": "Buscar produtos por nome",
      "methodName": "loadSearchProducts",
      "handlerName": "handleSearchProductsClick",
      "inputStateKeys": [
        "ui.productCatalog.input.searchProducts.searchTerm",
        "ui.productCatalog.input.searchProducts.petTypeId",
        "ui.productCatalog.input.searchProducts.categoryId",
        "ui.productCatalog.input.searchProducts.minPrice",
        "ui.productCatalog.input.searchProducts.maxPrice"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productCatalog.data.searchProducts"
      ],
      "statusStateKey": "ui.productCatalog.action.searchProducts.status"
    },
    {
      "actionId": "filterProducts",
      "kind": "query",
      "commandRef": "filterProducts",
      "routeKey": "petShop.filterProducts.filterProducts",
      "purpose": "Filtrar produtos por tipo de pet, categoria e faixa de valor",
      "methodName": "loadFilterProducts",
      "handlerName": "handleFilterProductsClick",
      "inputStateKeys": [
        "ui.productCatalog.input.filterProducts.petTypeId",
        "ui.productCatalog.input.filterProducts.categoryId",
        "ui.productCatalog.input.filterProducts.minPrice",
        "ui.productCatalog.input.filterProducts.maxPrice"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productCatalog.data.filterProducts"
      ],
      "statusStateKey": "ui.productCatalog.action.filterProducts.status"
    },
    {
      "actionId": "viewProductDetails",
      "kind": "query",
      "commandRef": "viewProductDetails",
      "routeKey": "petShop.viewProductDetails.viewProductDetails",
      "purpose": "Ver detalhes de um produto",
      "methodName": "loadViewProductDetails",
      "handlerName": "handleViewProductDetailsClick",
      "inputStateKeys": [
        "ui.productCatalog.input.viewProductDetails.productId"
      ],
      "routeParamInputStateKeys": [
        "ui.productCatalog.input.viewProductDetails.productId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productCatalog.data.viewProductDetails"
      ],
      "statusStateKey": "ui.productCatalog.action.viewProductDetails.status"
    },
    {
      "actionId": "set.browseCatalogSearchTerm",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.browseCatalog.searchTerm",
      "methodName": "setBrowseCatalogSearchTerm",
      "handlerName": "handleBrowseCatalogSearchTermChange"
    },
    {
      "actionId": "set.browseCatalogPetTypeId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.browseCatalog.petTypeId",
      "methodName": "setBrowseCatalogPetTypeId",
      "handlerName": "handleBrowseCatalogPetTypeIdChange"
    },
    {
      "actionId": "set.browseCatalogCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.browseCatalog.categoryId",
      "methodName": "setBrowseCatalogCategoryId",
      "handlerName": "handleBrowseCatalogCategoryIdChange"
    },
    {
      "actionId": "set.browseCatalogMinPrice",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.browseCatalog.minPrice",
      "methodName": "setBrowseCatalogMinPrice",
      "handlerName": "handleBrowseCatalogMinPriceChange"
    },
    {
      "actionId": "set.browseCatalogMaxPrice",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.browseCatalog.maxPrice",
      "methodName": "setBrowseCatalogMaxPrice",
      "handlerName": "handleBrowseCatalogMaxPriceChange"
    },
    {
      "actionId": "set.searchProductsSearchTerm",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.searchProducts.searchTerm",
      "methodName": "setSearchProductsSearchTerm",
      "handlerName": "handleSearchProductsSearchTermChange"
    },
    {
      "actionId": "set.searchProductsPetTypeId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.searchProducts.petTypeId",
      "methodName": "setSearchProductsPetTypeId",
      "handlerName": "handleSearchProductsPetTypeIdChange"
    },
    {
      "actionId": "set.searchProductsCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.searchProducts.categoryId",
      "methodName": "setSearchProductsCategoryId",
      "handlerName": "handleSearchProductsCategoryIdChange"
    },
    {
      "actionId": "set.searchProductsMinPrice",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.searchProducts.minPrice",
      "methodName": "setSearchProductsMinPrice",
      "handlerName": "handleSearchProductsMinPriceChange"
    },
    {
      "actionId": "set.searchProductsMaxPrice",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.searchProducts.maxPrice",
      "methodName": "setSearchProductsMaxPrice",
      "handlerName": "handleSearchProductsMaxPriceChange"
    },
    {
      "actionId": "set.filterProductsPetTypeId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.filterProducts.petTypeId",
      "methodName": "setFilterProductsPetTypeId",
      "handlerName": "handleFilterProductsPetTypeIdChange"
    },
    {
      "actionId": "set.filterProductsCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.filterProducts.categoryId",
      "methodName": "setFilterProductsCategoryId",
      "handlerName": "handleFilterProductsCategoryIdChange"
    },
    {
      "actionId": "set.filterProductsMinPrice",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.filterProducts.minPrice",
      "methodName": "setFilterProductsMinPrice",
      "handlerName": "handleFilterProductsMinPriceChange"
    },
    {
      "actionId": "set.filterProductsMaxPrice",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.filterProducts.maxPrice",
      "methodName": "setFilterProductsMaxPrice",
      "handlerName": "handleFilterProductsMaxPriceChange"
    },
    {
      "actionId": "set.viewProductDetailsProductId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.viewProductDetails.productId",
      "methodName": "setViewProductDetailsProductId",
      "handlerName": "handleViewProductDetailsProductIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "viewHighlights",
      "stateKey": "ui.productCatalog.data.viewHighlights"
    },
    {
      "actionId": "browseCatalog",
      "stateKey": "ui.productCatalog.data.browseCatalog"
    },
    {
      "actionId": "searchProducts",
      "stateKey": "ui.productCatalog.data.searchProducts"
    },
    {
      "actionId": "filterProducts",
      "stateKey": "ui.productCatalog.data.filterProducts"
    },
    {
      "actionId": "viewProductDetails",
      "stateKey": "ui.productCatalog.data.viewProductDetails"
    }
  ],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt"
    ]
  },
  "i18n": {
    "page.productCatalog.title": "Catálogo de Produtos",
    "section.overview.title": "Visão Geral",
    "section.catalog.title": "Catálogo de Produtos",
    "section.details.title": "Detalhes do Produto",
    "organism.highlightsCards.title": "Produtos em Destaque",
    "organism.catalogSummary.title": "Resumo do Catálogo",
    "organism.catalogBrowser.title": "Navegar Catálogo",
    "organism.productDetails.title": "Detalhes do Produto",
    "intention.viewHighlights.title": "Produtos em Destaque",
    "intention.browseCatalogSummary.title": "Estatísticas do Catálogo",
    "intention.browseCatalogFilter.title": "Filtros do Catálogo",
    "intention.searchProductsFilter.title": "Buscar Produtos",
    "intention.filterProductsFilter.title": "Filtrar Produtos",
    "intention.searchProductsList.title": "Resultados da Busca",
    "intention.filterProductsList.title": "Resultados Filtrados",
    "intention.viewProductDetails.title": "Detalhes do Produto",
    "intention.viewHighlights.empty": "Nenhum produto em destaque disponível",
    "intention.browseCatalogSummary.empty": "Catálogo vazio",
    "intention.searchProductsList.empty": "Nenhum produto encontrado para a sua busca",
    "intention.filterProductsList.empty": "Nenhum produto corresponde aos filtros selecionados",
    "intention.viewProductDetails.empty": "Selecione um produto para ver os detalhes",
    "field.searchTerm.label": "Buscar por nome",
    "field.petTypeId.label": "Tipo de Pet",
    "field.categoryId.label": "Categoria",
    "field.minPrice.label": "Preço Mínimo",
    "field.maxPrice.label": "Preço Máximo",
    "field.productId.label": "ID",
    "field.name.label": "Nome",
    "field.description.label": "Descrição",
    "field.price.label": "Preço",
    "field.petTypeName.label": "Tipo de Pet",
    "field.categoryName.label": "Categoria",
    "field.highlighted.label": "Destaque",
    "field.status.label": "Status",
    "field.products.label": "Produtos",
    "field.total.label": "Total",
    "field.page.label": "Página",
    "field.pageSize.label": "Itens por Página",
    "field.createdAt.label": "Criado em",
    "field.updatedAt.label": "Atualizado em",
    "action.browseCatalog.label": "Navegar Catálogo",
    "action.searchProducts.label": "Buscar Produtos",
    "action.filterProducts.label": "Filtrar",
    "action.viewProductDetails.label": "Ver Detalhes",
    "action.viewHighlights.label": "Ver Destaques",
    "sec.overview.title": "Sec overview",
    "org.highlights.title": "Display highlighted products as summary cards for at a glance browsing",
    "org.catalog.summary.title": "Show catalog overview metrics including total products and pagination info",
    "sec.catalog.title": "Sec catalog",
    "org.catalog.browser.title": "Search, filter and browse products in the catalog with combined criteria",
    "sec.details.title": "Sec details",
    "org.product.details.title": "Display detailed information about a selected product including pet type and category names",
    "page.title": "Catálogo de Produtos",
    "section.highlights.title": "Produtos em Destaque",
    "section.detail.title": "Detalhes do Produto",
    "empty.highlights": "Nenhum produto em destaque no momento",
    "empty.catalog": "Nenhum produto encontrado",
    "empty.detail": "Selecione um produto para ver os detalhes"
  },
  "automation": {
    "statePrefix": "ui.productCatalog",
    "stateKeys": [
      "ui.productCatalog.status",
      "ui.productCatalog.action.viewHighlights.status",
      "ui.productCatalog.data.viewHighlights",
      "ui.productCatalog.action.browseCatalog.status",
      "ui.productCatalog.input.browseCatalog.searchTerm",
      "ui.productCatalog.input.browseCatalog.petTypeId",
      "ui.productCatalog.input.browseCatalog.categoryId",
      "ui.productCatalog.input.browseCatalog.minPrice",
      "ui.productCatalog.input.browseCatalog.maxPrice",
      "ui.productCatalog.data.browseCatalog",
      "ui.productCatalog.action.searchProducts.status",
      "ui.productCatalog.input.searchProducts.searchTerm",
      "ui.productCatalog.input.searchProducts.petTypeId",
      "ui.productCatalog.input.searchProducts.categoryId",
      "ui.productCatalog.input.searchProducts.minPrice",
      "ui.productCatalog.input.searchProducts.maxPrice",
      "ui.productCatalog.data.searchProducts",
      "ui.productCatalog.action.filterProducts.status",
      "ui.productCatalog.input.filterProducts.petTypeId",
      "ui.productCatalog.input.filterProducts.categoryId",
      "ui.productCatalog.input.filterProducts.minPrice",
      "ui.productCatalog.input.filterProducts.maxPrice",
      "ui.productCatalog.data.filterProducts",
      "ui.productCatalog.action.viewProductDetails.status",
      "ui.productCatalog.input.viewProductDetails.productId",
      "ui.productCatalog.data.viewProductDetails"
    ],
    "actionIds": [
      "viewHighlights",
      "browseCatalog",
      "searchProducts",
      "filterProducts",
      "viewProductDetails",
      "set.browseCatalogSearchTerm",
      "set.browseCatalogPetTypeId",
      "set.browseCatalogCategoryId",
      "set.browseCatalogMinPrice",
      "set.browseCatalogMaxPrice",
      "set.searchProductsSearchTerm",
      "set.searchProductsPetTypeId",
      "set.searchProductsCategoryId",
      "set.searchProductsMinPrice",
      "set.searchProductsMaxPrice",
      "set.filterProductsPetTypeId",
      "set.filterProductsCategoryId",
      "set.filterProductsMinPrice",
      "set.filterProductsMaxPrice",
      "set.viewProductDetailsProductId"
    ]
  }
};

export const pipeline = [
  {
    "id": "productCatalog__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/productCatalog.ts",
    "defPath": "_102049_/l2/petShop/web/shared/productCatalog.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/productCatalog.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "productCatalog__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
