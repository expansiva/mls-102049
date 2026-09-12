/// <mls fileReference="_102049_/l2/petShop/web/shared/catalog.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "catalog",
  "pageName": "Catálogo de produtos",
  "moduleName": "petShop",
  "baseClassName": "PetShopCatalogBase",
  "routePattern": "/petShop/catalog/:productId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:reservationLifecycle",
    "operation:browseFeaturedProducts",
    "operation:browseProducts",
    "operation:viewProductDetails",
    "operation:createReservation"
  ],
  "operationIds": [
    "browseFeaturedProducts",
    "browseProducts",
    "viewProductDetails",
    "createReservation"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "catalog",
    "workspaceKind": "workflow",
    "workflowId": "reservationLifecycle",
    "actor": "cliente",
    "entity": "Product",
    "owners": [
      {
        "kind": "workflow",
        "id": "reservationLifecycle",
        "defPath": "_102049_/l4/petShop/workflows/reservationLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseFeaturedProducts",
        "defPath": "_102049_/l4/petShop/operations/browseFeaturedProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseProducts",
        "defPath": "_102049_/l4/petShop/operations/browseProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewProductDetails",
        "defPath": "_102049_/l4/petShop/operations/viewProductDetails.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createReservation",
        "defPath": "_102049_/l4/petShop/operations/createReservation.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O atendente visualiza as reservas pendentes recebidas dos clientes para saber quais precisam ser confirmadas.",
        "O atendente revisa os itens e os dados de contato do cliente e confirma a reserva, sinalizando que a loja aceitou e vai preparar os produtos.",
        "O atendente separa fisicamente os produtos reservados e verifica a disponibilidade real no estoque.",
        "O cliente chega à loja para retirada e o atendente localiza a reserva pelo número ou pelo nome e telefone do cliente.",
        "O atendente revisa os itens com o cliente, calcula o valor total e processa o pagamento presencial, marcando a reserva como paga e entregue."
      ],
      "operations": [
        {
          "operationId": "browseFeaturedProducts",
          "commandName": "browseFeaturedProducts",
          "steps": [
            "O cliente acessa a página inicial do pet shop",
            "O sistema exibe a vitrine com produtos marcados como destaque pelo processo administrativo externo",
            "O cliente pode aplicar filtros opcionais de categoria, tipo de pet, nome e faixa de preço para refinar a visualização",
            "O cliente seleciona um produto em destaque para ver seus detalhes"
          ]
        },
        {
          "operationId": "browseProducts",
          "commandName": "browseProducts",
          "steps": [
            "Acessa a listagem completa de produtos do catálogo",
            "Digita um nome ou parte do nome para pesquisar produtos",
            "Seleciona tipo de pet e/ou categoria para filtrar os resultados",
            "Define uma faixa de preço para refinar a busca",
            "Visualiza a lista paginada de produtos que atendem a todos os critérios aplicados"
          ]
        },
        {
          "operationId": "viewProductDetails",
          "commandName": "viewProductDetails",
          "steps": [
            "O cliente seleciona um produto na vitrine de destaques ou na lista filtrada do catálogo",
            "O sistema recupera o produto pelo seu identificador junto com o nome da categoria e do tipo de pet associados",
            "O sistema retorna os detalhes completos do produto incluindo nome, preço, flag de destaque, categoria, tipo de pet e datas de cadastro e atualização"
          ]
        },
        {
          "operationId": "createReservation",
          "commandName": "createReservation",
          "steps": [
            "O cliente visualiza os detalhes de um produto e decide reservá-lo para retirada presencial",
            "Informa a quantidade desejada do produto",
            "Fornece seu nome e telefone de contato para identificação na loja",
            "Revisa os itens e seus dados e confirma a reserva",
            "Recebe o número da reserva como comprovante para apresentar na retirada"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "contracts": [
      {
        "commandName": "featuredProducts",
        "tsPath": "_102049_/l2/petShop/web/contracts/catalog.featuredProducts.ts",
        "routeConst": "featuredProductsRoute"
      },
      {
        "commandName": "browseCatalog",
        "tsPath": "_102049_/l2/petShop/web/contracts/catalog.browseCatalog.ts",
        "routeConst": "browseCatalogRoute"
      },
      {
        "commandName": "productDetails",
        "tsPath": "_102049_/l2/petShop/web/contracts/catalog.productDetails.ts",
        "routeConst": "productDetailsRoute"
      },
      {
        "commandName": "reserveProduct",
        "tsPath": "_102049_/l2/petShop/web/contracts/catalog.reserveProduct.ts",
        "routeConst": "reserveProductRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/catalog.defs.ts",
    "layoutId": "mobile_cards"
  },
  "states": [
    {
      "stateKey": "ui.catalog.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.action.featuredProducts.status",
      "name": "featuredProductsState",
      "kind": "actionStatus",
      "actionRef": "featuredProducts",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.catalog.input.featuredProducts.categoryId",
      "name": "featuredProductsCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "featuredProducts",
        "direction": "input",
        "field": "categoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.featuredProducts.petTypeId",
      "name": "featuredProductsPetTypeId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "featuredProducts",
        "direction": "input",
        "field": "petTypeId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.featuredProducts.name",
      "name": "featuredProductsName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "featuredProducts",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.featuredProducts.priceMin",
      "name": "featuredProductsPriceMin",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "featuredProducts",
        "direction": "input",
        "field": "priceMin"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.featuredProducts.priceMax",
      "name": "featuredProductsPriceMax",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "featuredProducts",
        "direction": "input",
        "field": "priceMax"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.featuredProducts.page",
      "name": "featuredProductsPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "featuredProducts",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.featuredProducts.pageSize",
      "name": "featuredProductsPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "featuredProducts",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.data.featuredProducts",
      "name": "featuredProductsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "featuredProducts",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.catalog.action.browseCatalog.status",
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
      "stateKey": "ui.catalog.input.browseCatalog.searchName",
      "name": "browseCatalogSearchName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "input",
        "field": "searchName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.browseCatalog.petTypeId",
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
      "stateKey": "ui.catalog.input.browseCatalog.categoryId",
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
      "stateKey": "ui.catalog.input.browseCatalog.minPrice",
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
      "stateKey": "ui.catalog.input.browseCatalog.maxPrice",
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
      "stateKey": "ui.catalog.input.browseCatalog.page",
      "name": "browseCatalogPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.browseCatalog.pageSize",
      "name": "browseCatalogPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseCatalog",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.data.browseCatalog",
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
      "stateKey": "ui.catalog.action.productDetails.status",
      "name": "productDetailsState",
      "kind": "actionStatus",
      "actionRef": "productDetails",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.catalog.input.productDetails.productId",
      "name": "productDetailsProductId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "productDetails",
        "direction": "input",
        "field": "productId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.data.productDetails",
      "name": "productDetailsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "productDetails",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.catalog.action.reserveProduct.status",
      "name": "reserveProductState",
      "kind": "actionStatus",
      "actionRef": "reserveProduct",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.catalog.input.reserveProduct.customerName",
      "name": "reserveProductCustomerName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "reserveProduct",
        "direction": "input",
        "field": "customerName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.reserveProduct.customerPhone",
      "name": "reserveProductCustomerPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "reserveProduct",
        "direction": "input",
        "field": "customerPhone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.reserveProduct.productId",
      "name": "reserveProductProductId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "reserveProduct",
        "direction": "input",
        "field": "productId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.input.reserveProduct.quantity",
      "name": "reserveProductQuantity",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "reserveProduct",
        "direction": "input",
        "field": "quantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.catalog.output.reserveProduct",
      "name": "reserveProductOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "reserveProduct",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.catalog.action.reserveProduct.error",
      "name": "reserveProductError",
      "kind": "actionError",
      "actionRef": "reserveProduct",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "featuredProducts",
      "kind": "query",
      "commandRef": "featuredProducts",
      "routeKey": "petShop.catalog.featuredProducts",
      "purpose": "Visualizar produtos em destaque na vitrine",
      "methodName": "loadFeaturedProducts",
      "handlerName": "handleFeaturedProductsClick",
      "inputStateKeys": [
        "ui.catalog.input.featuredProducts.categoryId",
        "ui.catalog.input.featuredProducts.petTypeId",
        "ui.catalog.input.featuredProducts.name",
        "ui.catalog.input.featuredProducts.priceMin",
        "ui.catalog.input.featuredProducts.priceMax",
        "ui.catalog.input.featuredProducts.page",
        "ui.catalog.input.featuredProducts.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.catalog.data.featuredProducts"
      ],
      "statusStateKey": "ui.catalog.action.featuredProducts.status"
    },
    {
      "actionId": "browseCatalog",
      "kind": "query",
      "commandRef": "browseCatalog",
      "routeKey": "petShop.catalog.browseCatalog",
      "purpose": "Pesquisar e filtrar produtos no catálogo",
      "methodName": "loadBrowseCatalog",
      "handlerName": "handleBrowseCatalogClick",
      "inputStateKeys": [
        "ui.catalog.input.browseCatalog.searchName",
        "ui.catalog.input.browseCatalog.petTypeId",
        "ui.catalog.input.browseCatalog.categoryId",
        "ui.catalog.input.browseCatalog.minPrice",
        "ui.catalog.input.browseCatalog.maxPrice",
        "ui.catalog.input.browseCatalog.page",
        "ui.catalog.input.browseCatalog.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.catalog.data.browseCatalog"
      ],
      "statusStateKey": "ui.catalog.action.browseCatalog.status"
    },
    {
      "actionId": "productDetails",
      "kind": "query",
      "commandRef": "productDetails",
      "routeKey": "petShop.catalog.productDetails",
      "purpose": "Visualizar detalhes do produto",
      "methodName": "loadProductDetails",
      "handlerName": "handleProductDetailsClick",
      "inputStateKeys": [
        "ui.catalog.input.productDetails.productId"
      ],
      "routeParamInputStateKeys": [
        "ui.catalog.input.productDetails.productId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.catalog.data.productDetails"
      ],
      "statusStateKey": "ui.catalog.action.productDetails.status"
    },
    {
      "actionId": "reserveProduct",
      "kind": "command",
      "commandRef": "reserveProduct",
      "routeKey": "petShop.catalog.reserveProduct",
      "purpose": "Reservar produtos para retirada na loja",
      "methodName": "reserveProduct",
      "handlerName": "handleReserveProductClick",
      "inputStateKeys": [
        "ui.catalog.input.reserveProduct.customerName",
        "ui.catalog.input.reserveProduct.customerPhone",
        "ui.catalog.input.reserveProduct.productId",
        "ui.catalog.input.reserveProduct.quantity"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.catalog.input.reserveProduct.productId"
      ],
      "outputStateKeys": [
        "ui.catalog.output.reserveProduct"
      ],
      "statusStateKey": "ui.catalog.action.reserveProduct.status",
      "errorStateKey": "ui.catalog.action.reserveProduct.error",
      "feedback": {
        "successMessageKey": "action.reserveProduct.success",
        "errorMessageKey": "action.reserveProduct.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.catalog.input.reserveProduct.customerName",
        "ui.catalog.input.reserveProduct.customerPhone",
        "ui.catalog.input.reserveProduct.productId",
        "ui.catalog.input.reserveProduct.quantity"
      ],
      "refreshActionIds": [
        "featuredProducts",
        "browseCatalog",
        "productDetails"
      ]
    },
    {
      "actionId": "set.featuredProductsCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.featuredProducts.categoryId",
      "methodName": "setFeaturedProductsCategoryId",
      "handlerName": "handleFeaturedProductsCategoryIdChange"
    },
    {
      "actionId": "set.featuredProductsPetTypeId",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.featuredProducts.petTypeId",
      "methodName": "setFeaturedProductsPetTypeId",
      "handlerName": "handleFeaturedProductsPetTypeIdChange"
    },
    {
      "actionId": "set.featuredProductsName",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.featuredProducts.name",
      "methodName": "setFeaturedProductsName",
      "handlerName": "handleFeaturedProductsNameChange"
    },
    {
      "actionId": "set.featuredProductsPriceMin",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.featuredProducts.priceMin",
      "methodName": "setFeaturedProductsPriceMin",
      "handlerName": "handleFeaturedProductsPriceMinChange"
    },
    {
      "actionId": "set.featuredProductsPriceMax",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.featuredProducts.priceMax",
      "methodName": "setFeaturedProductsPriceMax",
      "handlerName": "handleFeaturedProductsPriceMaxChange"
    },
    {
      "actionId": "set.featuredProductsPage",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.featuredProducts.page",
      "methodName": "setFeaturedProductsPage",
      "handlerName": "handleFeaturedProductsPageChange"
    },
    {
      "actionId": "set.featuredProductsPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.featuredProducts.pageSize",
      "methodName": "setFeaturedProductsPageSize",
      "handlerName": "handleFeaturedProductsPageSizeChange"
    },
    {
      "actionId": "set.browseCatalogSearchName",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.browseCatalog.searchName",
      "methodName": "setBrowseCatalogSearchName",
      "handlerName": "handleBrowseCatalogSearchNameChange"
    },
    {
      "actionId": "set.browseCatalogPetTypeId",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.browseCatalog.petTypeId",
      "methodName": "setBrowseCatalogPetTypeId",
      "handlerName": "handleBrowseCatalogPetTypeIdChange"
    },
    {
      "actionId": "set.browseCatalogCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.browseCatalog.categoryId",
      "methodName": "setBrowseCatalogCategoryId",
      "handlerName": "handleBrowseCatalogCategoryIdChange"
    },
    {
      "actionId": "set.browseCatalogMinPrice",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.browseCatalog.minPrice",
      "methodName": "setBrowseCatalogMinPrice",
      "handlerName": "handleBrowseCatalogMinPriceChange"
    },
    {
      "actionId": "set.browseCatalogMaxPrice",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.browseCatalog.maxPrice",
      "methodName": "setBrowseCatalogMaxPrice",
      "handlerName": "handleBrowseCatalogMaxPriceChange"
    },
    {
      "actionId": "set.browseCatalogPage",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.browseCatalog.page",
      "methodName": "setBrowseCatalogPage",
      "handlerName": "handleBrowseCatalogPageChange"
    },
    {
      "actionId": "set.browseCatalogPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.browseCatalog.pageSize",
      "methodName": "setBrowseCatalogPageSize",
      "handlerName": "handleBrowseCatalogPageSizeChange"
    },
    {
      "actionId": "set.productDetailsProductId",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.productDetails.productId",
      "methodName": "setProductDetailsProductId",
      "handlerName": "handleProductDetailsProductIdChange"
    },
    {
      "actionId": "set.reserveProductCustomerName",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.reserveProduct.customerName",
      "methodName": "setReserveProductCustomerName",
      "handlerName": "handleReserveProductCustomerNameChange"
    },
    {
      "actionId": "set.reserveProductCustomerPhone",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.reserveProduct.customerPhone",
      "methodName": "setReserveProductCustomerPhone",
      "handlerName": "handleReserveProductCustomerPhoneChange"
    },
    {
      "actionId": "set.reserveProductProductId",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.reserveProduct.productId",
      "methodName": "setReserveProductProductId",
      "handlerName": "handleReserveProductProductIdChange"
    },
    {
      "actionId": "set.reserveProductQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.catalog.input.reserveProduct.quantity",
      "methodName": "setReserveProductQuantity",
      "handlerName": "handleReserveProductQuantityChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "featuredProducts",
      "stateKey": "ui.catalog.data.featuredProducts"
    },
    {
      "actionId": "browseCatalog",
      "stateKey": "ui.catalog.data.browseCatalog"
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
    "org.vitrine.cards.title": "Vitrine em destaque",
    "int.vitrine.list.title": "Produtos em destaque",
    "int.vitrine.list.empty": "Nenhum produto em destaque encontrado",
    "org.vitrine.filters.title": "Filtros da vitrine",
    "int.vitrine.filters.title": "Filtrar destaques",
    "int.vitrine.filters.empty": "Ajuste os filtros para ver destaques",
    "org.catalogo.cards.title": "Catálogo completo",
    "int.catalogo.list.title": "Produtos do catálogo",
    "int.catalogo.list.empty": "Nenhum produto encontrado no catálogo",
    "org.catalogo.filters.title": "Filtros do catálogo",
    "int.catalogo.filters.title": "Filtrar catálogo",
    "int.catalogo.filters.empty": "Use a busca e os filtros para refinar",
    "org.detalhe.card.title": "Detalhes do produto",
    "int.detalhe.view.title": "Informações do produto",
    "int.detalhe.view.empty": "Selecione um produto para ver detalhes",
    "org.reserva.form.title": "Reservar produto",
    "int.reserva.form.title": "Dados da reserva",
    "int.reserva.form.empty": "Preencha os dados para reservar",
    "field.name": "Nome",
    "field.price": "Preço",
    "field.isFeatured": "Destaque",
    "field.categoryId": "Categoria",
    "field.petTypeId": "Tipo de pet",
    "field.priceMin": "Preço mínimo",
    "field.priceMax": "Preço máximo",
    "field.page": "Página",
    "field.pageSize": "Itens por página",
    "field.items": "Itens",
    "field.searchName": "Buscar por nome",
    "field.minPrice": "Preço mínimo",
    "field.maxPrice": "Preço máximo",
    "field.categoryName": "Categoria",
    "field.petTypeName": "Tipo de pet",
    "field.createdAt": "Criado em",
    "field.updatedAt": "Atualizado em",
    "field.productId": "Produto",
    "field.quantity": "Quantidade",
    "field.customerName": "Nome do cliente",
    "field.customerPhone": "Telefone do cliente",
    "action.productDetails": "Ver detalhes",
    "action.applyFilters": "Aplicar filtros",
    "action.reserveProduct": "Reservar para retirada",
    "action.reserveProduct.success": "Reserva confirmada! Guarde o número da reserva para a retirada na loja.",
    "action.reserveProduct.error": "Não foi possível concluir a reserva. Verifique os dados e tente novamente.",
    "sec.vitrine.title": "Sec vitrine",
    "sec.catalogo.title": "Sec catalogo",
    "sec.detalhe.reserva.title": "Sec detalhe reserva",
    "section.vitrine.title": "Vitrine",
    "section.vitrine.featured.title": "Produtos em destaque",
    "section.vitrine.featured.empty": "Nenhum produto em destaque no momento. Explore o catálogo completo.",
    "organism.vitrine.featured.title": "Destaques da loja",
    "section.catalogo.title": "Catálogo",
    "section.catalogo.browse.title": "Todos os produtos",
    "section.catalogo.browse.empty": "Nenhum produto encontrado com esses filtros. Ajuste a busca e tente de novo.",
    "organism.catalogo.browse.title": "Buscar no catálogo",
    "section.detalheReserva.title": "Detalhe e reserva",
    "section.detalhe.product.title": "Detalhes do produto",
    "section.detalhe.product.empty": "Selecione um produto na vitrine ou no catálogo para ver os detalhes.",
    "organism.detalhe.product.title": "Ficha do produto",
    "section.detalhe.reserve.title": "Reservar para retirada",
    "section.detalhe.reserve.empty": "Preencha seus dados para reservar este produto.",
    "organism.detalhe.reserve.title": "Reservar produto",
    "field.product.name": "Nome",
    "field.product.price": "Preço",
    "field.product.isFeatured": "Destaque",
    "field.product.categoryId": "Categoria",
    "field.product.petTypeId": "Tipo de pet",
    "field.product.categoryName": "Categoria",
    "field.product.petTypeName": "Tipo de pet",
    "field.reserve.quantity": "Quantidade",
    "field.reserve.customerName": "Seu nome",
    "field.reserve.customerPhone": "Telefone de contato",
    "filter.featured.categoryId": "Categoria",
    "filter.featured.petTypeId": "Tipo de pet",
    "filter.featured.name": "Nome do produto",
    "filter.featured.priceMin": "Preço mínimo",
    "filter.featured.priceMax": "Preço máximo",
    "filter.browse.searchName": "Buscar por nome",
    "filter.browse.petTypeId": "Tipo de pet",
    "filter.browse.categoryId": "Categoria",
    "filter.browse.minPrice": "Preço mínimo",
    "filter.browse.maxPrice": "Preço máximo"
  },
  "automation": {
    "statePrefix": "ui.catalog",
    "stateKeys": [
      "ui.catalog.status",
      "ui.catalog.action.featuredProducts.status",
      "ui.catalog.input.featuredProducts.categoryId",
      "ui.catalog.input.featuredProducts.petTypeId",
      "ui.catalog.input.featuredProducts.name",
      "ui.catalog.input.featuredProducts.priceMin",
      "ui.catalog.input.featuredProducts.priceMax",
      "ui.catalog.input.featuredProducts.page",
      "ui.catalog.input.featuredProducts.pageSize",
      "ui.catalog.data.featuredProducts",
      "ui.catalog.action.browseCatalog.status",
      "ui.catalog.input.browseCatalog.searchName",
      "ui.catalog.input.browseCatalog.petTypeId",
      "ui.catalog.input.browseCatalog.categoryId",
      "ui.catalog.input.browseCatalog.minPrice",
      "ui.catalog.input.browseCatalog.maxPrice",
      "ui.catalog.input.browseCatalog.page",
      "ui.catalog.input.browseCatalog.pageSize",
      "ui.catalog.data.browseCatalog",
      "ui.catalog.action.productDetails.status",
      "ui.catalog.input.productDetails.productId",
      "ui.catalog.data.productDetails",
      "ui.catalog.action.reserveProduct.status",
      "ui.catalog.input.reserveProduct.customerName",
      "ui.catalog.input.reserveProduct.customerPhone",
      "ui.catalog.input.reserveProduct.productId",
      "ui.catalog.input.reserveProduct.quantity",
      "ui.catalog.output.reserveProduct",
      "ui.catalog.action.reserveProduct.error"
    ],
    "actionIds": [
      "featuredProducts",
      "browseCatalog",
      "productDetails",
      "reserveProduct",
      "set.featuredProductsCategoryId",
      "set.featuredProductsPetTypeId",
      "set.featuredProductsName",
      "set.featuredProductsPriceMin",
      "set.featuredProductsPriceMax",
      "set.featuredProductsPage",
      "set.featuredProductsPageSize",
      "set.browseCatalogSearchName",
      "set.browseCatalogPetTypeId",
      "set.browseCatalogCategoryId",
      "set.browseCatalogMinPrice",
      "set.browseCatalogMaxPrice",
      "set.browseCatalogPage",
      "set.browseCatalogPageSize",
      "set.productDetailsProductId",
      "set.reserveProductCustomerName",
      "set.reserveProductCustomerPhone",
      "set.reserveProductProductId",
      "set.reserveProductQuantity"
    ]
  }
};

export const pipeline = [
  {
    "id": "catalog__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/catalog.ts",
    "defPath": "_102049_/l2/petShop/web/shared/catalog.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/catalog.featuredProducts.ts",
      "_102049_/l2/petShop/web/contracts/catalog.browseCatalog.ts",
      "_102049_/l2/petShop/web/contracts/catalog.productDetails.ts",
      "_102049_/l2/petShop/web/contracts/catalog.reserveProduct.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "featuredProductsOnly",
      "featuredOrderFlexible",
      "combinedFilters",
      "caseInsensitiveSearch",
      "catalogShowsAll",
      "reservationRequiresContact",
      "reservationValidity24h",
      "reservationStatuses"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
