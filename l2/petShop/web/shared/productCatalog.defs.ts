/// <mls fileReference="_102049_/l2/petShop/web/shared/productCatalog.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "productCatalog",
  "pageName": "Catálogo de produtos e pedido para retirada",
  "moduleName": "petShop",
  "baseClassName": "PetShopProductCatalogBase",
  "routePattern": "/petShop/productCatalog/:productId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseProductCatalog",
    "operation:viewProductDetails",
    "operation:placeStorePickupOrder"
  ],
  "operationIds": [
    "browseProductCatalog",
    "viewProductDetails",
    "placeStorePickupOrder"
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
        "id": "browseProductCatalog",
        "defPath": "_102049_/l4/operations/browseProductCatalog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewProductDetails",
        "defPath": "_102049_/l4/operations/viewProductDetails.defs.ts"
      },
      {
        "kind": "operation",
        "id": "placeStorePickupOrder",
        "defPath": "_102049_/l4/operations/placeStorePickupOrder.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseProductCatalog",
          "commandName": "browseProductCatalog",
          "steps": [
            "O cliente abre a página de catálogo de produtos",
            "O sistema lista os produtos ativos com nome, preço, imagem e categoria",
            "O cliente pode filtrar por categoria ou buscar pelo nome do produto",
            "O cliente visualiza os resultados paginados do catálogo"
          ]
        },
        {
          "operationId": "viewProductDetails",
          "commandName": "viewProductDetails",
          "steps": [
            "O cliente seleciona um produto no catálogo ou na página inicial.",
            "O sistema carrega os detalhes completos do produto incluindo imagem, descrição, preço e categoria.",
            "O cliente avalia as informações para decidir se deseja prosseguir com a compra para retirada na loja."
          ]
        },
        {
          "operationId": "placeStorePickupOrder",
          "commandName": "placeStorePickupOrder",
          "steps": [
            "O cliente revisa os itens do carrinho de compras e o valor total",
            "O cliente informa seu nome e, opcionalmente, seu telefone de contato",
            "O cliente confirma a finalização do pedido para retirada na loja física",
            "O sistema valida que o carrinho contém ao menos um item e registra o pedido com status 'registered'",
            "O sistema associa os itens do carrinho ao novo pedido como OrderItems"
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
    "layoutId": "page11_pos_workspace"
  },
  "states": [
    {
      "stateKey": "ui.productCatalog.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.action.browseProductCatalog.status",
      "name": "browseProductCatalogState",
      "kind": "actionStatus",
      "actionRef": "browseProductCatalog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productCatalog.input.browseProductCatalog.searchName",
      "name": "browseProductCatalogSearchName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProductCatalog",
        "direction": "input",
        "field": "searchName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.browseProductCatalog.productCategoryId",
      "name": "browseProductCatalogProductCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProductCatalog",
        "direction": "input",
        "field": "productCategoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.data.browseProductCatalog",
      "name": "browseProductCatalogData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseProductCatalog",
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
    },
    {
      "stateKey": "ui.productCatalog.action.placeStorePickupOrder.status",
      "name": "placeStorePickupOrderState",
      "kind": "actionStatus",
      "actionRef": "placeStorePickupOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productCatalog.input.placeStorePickupOrder.customerName",
      "name": "placeStorePickupOrderCustomerName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "placeStorePickupOrder",
        "direction": "input",
        "field": "customerName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.input.placeStorePickupOrder.customerPhone",
      "name": "placeStorePickupOrderCustomerPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "placeStorePickupOrder",
        "direction": "input",
        "field": "customerPhone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productCatalog.output.placeStorePickupOrder",
      "name": "placeStorePickupOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "placeStorePickupOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.productCatalog.action.placeStorePickupOrder.error",
      "name": "placeStorePickupOrderError",
      "kind": "actionError",
      "actionRef": "placeStorePickupOrder",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseProductCatalog",
      "kind": "query",
      "commandRef": "browseProductCatalog",
      "routeKey": "petShop.browseProductCatalog.browseProductCatalog",
      "purpose": "Navegar no catálogo de produtos",
      "methodName": "loadBrowseProductCatalog",
      "handlerName": "handleBrowseProductCatalogClick",
      "inputStateKeys": [
        "ui.productCatalog.input.browseProductCatalog.searchName",
        "ui.productCatalog.input.browseProductCatalog.productCategoryId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productCatalog.data.browseProductCatalog"
      ],
      "statusStateKey": "ui.productCatalog.action.browseProductCatalog.status"
    },
    {
      "actionId": "viewProductDetails",
      "kind": "query",
      "commandRef": "viewProductDetails",
      "routeKey": "petShop.viewProductDetails.viewProductDetails",
      "purpose": "Ver detalhes do produto",
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
      "actionId": "placeStorePickupOrder",
      "kind": "command",
      "commandRef": "placeStorePickupOrder",
      "routeKey": "petShop.placeStorePickupOrder.placeStorePickupOrder",
      "purpose": "Finalizar pedido para retirada na loja",
      "methodName": "placeStorePickupOrder",
      "handlerName": "handlePlaceStorePickupOrderClick",
      "inputStateKeys": [
        "ui.productCatalog.input.placeStorePickupOrder.customerName",
        "ui.productCatalog.input.placeStorePickupOrder.customerPhone"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productCatalog.output.placeStorePickupOrder"
      ],
      "statusStateKey": "ui.productCatalog.action.placeStorePickupOrder.status",
      "errorStateKey": "ui.productCatalog.action.placeStorePickupOrder.error",
      "feedback": {
        "successMessageKey": "action.placeStorePickupOrder.success",
        "errorMessageKey": "action.placeStorePickupOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.productCatalog.input.placeStorePickupOrder.customerName",
        "ui.productCatalog.input.placeStorePickupOrder.customerPhone"
      ],
      "refreshActionIds": [
        "browseProductCatalog",
        "viewProductDetails"
      ]
    },
    {
      "actionId": "set.browseProductCatalogSearchName",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.browseProductCatalog.searchName",
      "methodName": "setBrowseProductCatalogSearchName",
      "handlerName": "handleBrowseProductCatalogSearchNameChange"
    },
    {
      "actionId": "set.browseProductCatalogProductCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.browseProductCatalog.productCategoryId",
      "methodName": "setBrowseProductCatalogProductCategoryId",
      "handlerName": "handleBrowseProductCatalogProductCategoryIdChange"
    },
    {
      "actionId": "set.viewProductDetailsProductId",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.viewProductDetails.productId",
      "methodName": "setViewProductDetailsProductId",
      "handlerName": "handleViewProductDetailsProductIdChange"
    },
    {
      "actionId": "set.placeStorePickupOrderCustomerName",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.placeStorePickupOrder.customerName",
      "methodName": "setPlaceStorePickupOrderCustomerName",
      "handlerName": "handlePlaceStorePickupOrderCustomerNameChange"
    },
    {
      "actionId": "set.placeStorePickupOrderCustomerPhone",
      "kind": "stateSetter",
      "stateKey": "ui.productCatalog.input.placeStorePickupOrder.customerPhone",
      "methodName": "setPlaceStorePickupOrderCustomerPhone",
      "handlerName": "handlePlaceStorePickupOrderCustomerPhoneChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseProductCatalog",
      "stateKey": "ui.productCatalog.data.browseProductCatalog"
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
    "page.title": "Catálogo de Produtos e Pedido para Retirada",
    "section.catalog.title": "Catálogo de Produtos",
    "section.checkout.title": "Carrinho e Finalização do Pedido",
    "organism.browse.title": "Navegar no Catálogo",
    "organism.details.title": "Detalhes do Produto",
    "organism.cart.title": "Carrinho de Compras",
    "organism.checkout.title": "Finalizar Pedido de Retirada",
    "organism.summary.title": "Pedido Registrado",
    "field.searchName": "Buscar por nome",
    "field.productCategoryId": "Categoria",
    "field.productId": "Produto",
    "field.name": "Nome",
    "field.description": "Descrição",
    "field.price": "Preço",
    "field.imageUrl": "Imagem",
    "field.featured": "Destaque",
    "field.status": "Status",
    "field.quantity": "Quantidade",
    "field.unitPrice": "Preço Unitário",
    "field.customerName": "Nome do Cliente",
    "field.customerPhone": "Telefone de Contato",
    "field.orderId": "Número do Pedido",
    "field.createdAt": "Data do Pedido",
    "column.imageUrl": "Imagem",
    "column.name": "Nome",
    "column.price": "Preço",
    "column.productCategoryId": "Categoria",
    "column.featured": "Destaque",
    "column.productId": "Produto",
    "column.quantity": "Quantidade",
    "column.unitPrice": "Preço Unitário",
    "action.viewProductDetails": "Ver Detalhes",
    "action.placeStorePickupOrder": "Finalizar Pedido",
    "empty.browse": "Nenhum produto encontrado. Ajuste a busca ou o filtro de categoria.",
    "empty.details": "Selecione um produto no catálogo para ver os detalhes.",
    "empty.cart": "Seu carrinho está vazio. Adicione produtos do catálogo para continuar.",
    "empty.summary": "Finalize o pedido para visualizar o resumo.",
    "action.placeStorePickupOrder.success": "Pedido de retirada registrado com sucesso! Compareça à loja para pagamento e retirada.",
    "action.placeStorePickupOrder.error": "Não foi possível registrar o pedido. Verifique os dados e tente novamente.",
    "sec.catalog.title": "Sec catalog",
    "org.browse.catalog.title": "Navegar no catálogo de produtos com filtros de busca e categoria",
    "org.product.details.title": "Exibir detalhes completos do produto selecionado para decisão de compra",
    "org.cart.and.checkout.title": "Revisar itens do carrinho, informar dados do cliente e finalizar pedido para retirada na loja",
    "org.order.result.title": "Exibir o resumo do pedido registrado para confirmação do cliente"
  },
  "automation": {
    "statePrefix": "ui.productCatalog",
    "stateKeys": [
      "ui.productCatalog.status",
      "ui.productCatalog.action.browseProductCatalog.status",
      "ui.productCatalog.input.browseProductCatalog.searchName",
      "ui.productCatalog.input.browseProductCatalog.productCategoryId",
      "ui.productCatalog.data.browseProductCatalog",
      "ui.productCatalog.action.viewProductDetails.status",
      "ui.productCatalog.input.viewProductDetails.productId",
      "ui.productCatalog.data.viewProductDetails",
      "ui.productCatalog.action.placeStorePickupOrder.status",
      "ui.productCatalog.input.placeStorePickupOrder.customerName",
      "ui.productCatalog.input.placeStorePickupOrder.customerPhone",
      "ui.productCatalog.output.placeStorePickupOrder",
      "ui.productCatalog.action.placeStorePickupOrder.error"
    ],
    "actionIds": [
      "browseProductCatalog",
      "viewProductDetails",
      "placeStorePickupOrder",
      "set.browseProductCatalogSearchName",
      "set.browseProductCatalogProductCategoryId",
      "set.viewProductDetailsProductId",
      "set.placeStorePickupOrderCustomerName",
      "set.placeStorePickupOrderCustomerPhone"
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
