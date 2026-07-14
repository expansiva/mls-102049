/// <mls fileReference="_102049_/l2/petShop/web/shared/productManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "productManagement",
  "pageName": "Gestão de produtos",
  "moduleName": "petShop",
  "baseClassName": "PetShopProductManagementBase",
  "routePattern": "/petShop/productManagement",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseProducts",
    "operation:createProduct",
    "operation:updateProduct"
  ],
  "operationIds": [
    "browseProducts",
    "createProduct",
    "updateProduct"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "productManagement",
    "workspaceKind": "entityManagement",
    "actor": "admin",
    "entity": "Product",
    "owners": [
      {
        "kind": "operation",
        "id": "browseProducts",
        "defPath": "_102049_/l4/operations/browseProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createProduct",
        "defPath": "_102049_/l4/operations/createProduct.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateProduct",
        "defPath": "_102049_/l4/operations/updateProduct.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseProducts",
          "commandName": "browseProducts",
          "steps": [
            "O administrador acessa a tela de gestão de produtos.",
            "O sistema retorna a lista de produtos com nome, preço, categoria, flag de destaque e status.",
            "O administrador pode filtrar por nome, categoria, status ou destaque.",
            "O administrador visualiza os resultados paginados para selecionar um produto para edição ou destaque."
          ]
        },
        {
          "operationId": "createProduct",
          "commandName": "createProduct",
          "steps": [
            "O administrador acessa a tela de cadastro de produtos e preenche nome, descrição, preço, URL da imagem, categoria e flag de destaque.",
            "O sistema valida que a categoria informada existe e que, se o produto for marcado como destaque, seu status será ativo.",
            "O sistema gera um productId (UUID), define status como ativo, registra createdAt e updatedAt e persiste o produto no catálogo."
          ]
        },
        {
          "operationId": "updateProduct",
          "commandName": "updateProduct",
          "steps": [
            "O administrador seleciona um produto existente no catálogo.",
            "O sistema carrega os dados atuais do produto para edição.",
            "O administrador ajusta nome, descrição, preço, imagem, categoria e flag de destaque.",
            "O sistema valida que apenas produtos ativos podem ser marcados como destaque.",
            "O sistema persiste as alterações e atualiza o timestamp updatedAt."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/productManagement.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/productManagement.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/productManagement.defs.ts",
    "layoutId": "productManagement-tabularClassic"
  },
  "states": [
    {
      "stateKey": "ui.productManagement.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.action.browseProducts.status",
      "name": "browseProductsState",
      "kind": "actionStatus",
      "actionRef": "browseProducts",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.searchName",
      "name": "browseProductsSearchName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "searchName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.filterStatus",
      "name": "browseProductsFilterStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "filterStatus"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.filterProductCategoryId",
      "name": "browseProductsFilterProductCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "filterProductCategoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.filterFeatured",
      "name": "browseProductsFilterFeatured",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "filterFeatured"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.data.browseProducts",
      "name": "browseProductsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseProducts",
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
      "stateKey": "ui.productManagement.action.createProduct.status",
      "name": "createProductState",
      "kind": "actionStatus",
      "actionRef": "createProduct",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.name",
      "name": "createProductName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.description",
      "name": "createProductDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.price",
      "name": "createProductPrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.imageUrl",
      "name": "createProductImageUrl",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "imageUrl"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.productCategoryId",
      "name": "createProductProductCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "productCategoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.featured",
      "name": "createProductFeatured",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "featured"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.output.createProduct",
      "name": "createProductOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.productManagement.action.createProduct.error",
      "name": "createProductError",
      "kind": "actionError",
      "actionRef": "createProduct",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.action.updateProduct.status",
      "name": "updateProductState",
      "kind": "actionStatus",
      "actionRef": "updateProduct",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.productId",
      "name": "updateProductProductId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "productId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.name",
      "name": "updateProductName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.description",
      "name": "updateProductDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.price",
      "name": "updateProductPrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.imageUrl",
      "name": "updateProductImageUrl",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "imageUrl"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.productCategoryId",
      "name": "updateProductProductCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "productCategoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.featured",
      "name": "updateProductFeatured",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "featured"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.status",
      "name": "updateProductStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.output.updateProduct",
      "name": "updateProductOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.productManagement.action.updateProduct.error",
      "name": "updateProductError",
      "kind": "actionError",
      "actionRef": "updateProduct",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseProducts",
      "kind": "query",
      "commandRef": "browseProducts",
      "routeKey": "petShop.browseProducts.browseProducts",
      "purpose": "Listar produtos cadastrados",
      "methodName": "loadBrowseProducts",
      "handlerName": "handleBrowseProductsClick",
      "inputStateKeys": [
        "ui.productManagement.input.browseProducts.searchName",
        "ui.productManagement.input.browseProducts.filterStatus",
        "ui.productManagement.input.browseProducts.filterProductCategoryId",
        "ui.productManagement.input.browseProducts.filterFeatured"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productManagement.data.browseProducts"
      ],
      "statusStateKey": "ui.productManagement.action.browseProducts.status"
    },
    {
      "actionId": "createProduct",
      "kind": "command",
      "commandRef": "createProduct",
      "routeKey": "petShop.createProduct.createProduct",
      "purpose": "Cadastrar produto",
      "methodName": "createProduct",
      "handlerName": "handleCreateProductClick",
      "inputStateKeys": [
        "ui.productManagement.input.createProduct.name",
        "ui.productManagement.input.createProduct.description",
        "ui.productManagement.input.createProduct.price",
        "ui.productManagement.input.createProduct.imageUrl",
        "ui.productManagement.input.createProduct.productCategoryId",
        "ui.productManagement.input.createProduct.featured"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productManagement.output.createProduct"
      ],
      "statusStateKey": "ui.productManagement.action.createProduct.status",
      "errorStateKey": "ui.productManagement.action.createProduct.error",
      "feedback": {
        "successMessageKey": "action.createProduct.success",
        "errorMessageKey": "action.createProduct.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.productManagement.input.createProduct.name",
        "ui.productManagement.input.createProduct.description",
        "ui.productManagement.input.createProduct.price",
        "ui.productManagement.input.createProduct.imageUrl",
        "ui.productManagement.input.createProduct.productCategoryId",
        "ui.productManagement.input.createProduct.featured"
      ],
      "refreshActionIds": [
        "browseProducts"
      ]
    },
    {
      "actionId": "updateProduct",
      "kind": "command",
      "commandRef": "updateProduct",
      "routeKey": "petShop.updateProduct.updateProduct",
      "purpose": "Editar produto e definir destaque",
      "methodName": "updateProduct",
      "handlerName": "handleUpdateProductClick",
      "inputStateKeys": [
        "ui.productManagement.input.updateProduct.productId",
        "ui.productManagement.input.updateProduct.name",
        "ui.productManagement.input.updateProduct.description",
        "ui.productManagement.input.updateProduct.price",
        "ui.productManagement.input.updateProduct.imageUrl",
        "ui.productManagement.input.updateProduct.productCategoryId",
        "ui.productManagement.input.updateProduct.featured",
        "ui.productManagement.input.updateProduct.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.productManagement.input.updateProduct.productId"
      ],
      "outputStateKeys": [
        "ui.productManagement.output.updateProduct"
      ],
      "statusStateKey": "ui.productManagement.action.updateProduct.status",
      "errorStateKey": "ui.productManagement.action.updateProduct.error",
      "feedback": {
        "successMessageKey": "action.updateProduct.success",
        "errorMessageKey": "action.updateProduct.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.productManagement.input.updateProduct.productId",
        "ui.productManagement.input.updateProduct.name",
        "ui.productManagement.input.updateProduct.description",
        "ui.productManagement.input.updateProduct.price",
        "ui.productManagement.input.updateProduct.imageUrl",
        "ui.productManagement.input.updateProduct.productCategoryId",
        "ui.productManagement.input.updateProduct.featured",
        "ui.productManagement.input.updateProduct.status"
      ],
      "refreshActionIds": [
        "browseProducts"
      ]
    },
    {
      "actionId": "set.browseProductsSearchName",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.searchName",
      "methodName": "setBrowseProductsSearchName",
      "handlerName": "handleBrowseProductsSearchNameChange"
    },
    {
      "actionId": "set.browseProductsFilterStatus",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.filterStatus",
      "methodName": "setBrowseProductsFilterStatus",
      "handlerName": "handleBrowseProductsFilterStatusChange"
    },
    {
      "actionId": "set.browseProductsFilterProductCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.filterProductCategoryId",
      "methodName": "setBrowseProductsFilterProductCategoryId",
      "handlerName": "handleBrowseProductsFilterProductCategoryIdChange"
    },
    {
      "actionId": "set.browseProductsFilterFeatured",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.filterFeatured",
      "methodName": "setBrowseProductsFilterFeatured",
      "handlerName": "handleBrowseProductsFilterFeaturedChange"
    },
    {
      "actionId": "set.createProductName",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.name",
      "methodName": "setCreateProductName",
      "handlerName": "handleCreateProductNameChange"
    },
    {
      "actionId": "set.createProductDescription",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.description",
      "methodName": "setCreateProductDescription",
      "handlerName": "handleCreateProductDescriptionChange"
    },
    {
      "actionId": "set.createProductPrice",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.price",
      "methodName": "setCreateProductPrice",
      "handlerName": "handleCreateProductPriceChange"
    },
    {
      "actionId": "set.createProductImageUrl",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.imageUrl",
      "methodName": "setCreateProductImageUrl",
      "handlerName": "handleCreateProductImageUrlChange"
    },
    {
      "actionId": "set.createProductProductCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.productCategoryId",
      "methodName": "setCreateProductProductCategoryId",
      "handlerName": "handleCreateProductProductCategoryIdChange"
    },
    {
      "actionId": "set.createProductFeatured",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.featured",
      "methodName": "setCreateProductFeatured",
      "handlerName": "handleCreateProductFeaturedChange"
    },
    {
      "actionId": "set.updateProductProductId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.productId",
      "methodName": "setUpdateProductProductId",
      "handlerName": "handleUpdateProductProductIdChange"
    },
    {
      "actionId": "set.updateProductName",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.name",
      "methodName": "setUpdateProductName",
      "handlerName": "handleUpdateProductNameChange"
    },
    {
      "actionId": "set.updateProductDescription",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.description",
      "methodName": "setUpdateProductDescription",
      "handlerName": "handleUpdateProductDescriptionChange"
    },
    {
      "actionId": "set.updateProductPrice",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.price",
      "methodName": "setUpdateProductPrice",
      "handlerName": "handleUpdateProductPriceChange"
    },
    {
      "actionId": "set.updateProductImageUrl",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.imageUrl",
      "methodName": "setUpdateProductImageUrl",
      "handlerName": "handleUpdateProductImageUrlChange"
    },
    {
      "actionId": "set.updateProductProductCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.productCategoryId",
      "methodName": "setUpdateProductProductCategoryId",
      "handlerName": "handleUpdateProductProductCategoryIdChange"
    },
    {
      "actionId": "set.updateProductFeatured",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.featured",
      "methodName": "setUpdateProductFeatured",
      "handlerName": "handleUpdateProductFeaturedChange"
    },
    {
      "actionId": "set.updateProductStatus",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.status",
      "methodName": "setUpdateProductStatus",
      "handlerName": "handleUpdateProductStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseProducts",
      "stateKey": "ui.productManagement.data.browseProducts"
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
    "page.title": "Gestão de produtos",
    "section.productManagement": "Gestão de produtos",
    "section.review": "Resumo",
    "organism.browseProducts.title": "Produtos cadastrados",
    "organism.createProduct.title": "Cadastrar novo produto",
    "organism.updateProduct.title": "Editar produto",
    "organism.review.title": "Resumo da gestão",
    "empty.browseProducts": "Nenhum produto encontrado. Ajuste os filtros ou cadastre um novo produto.",
    "empty.createProduct": "Preencha os dados do produto para cadastrá-lo no catálogo.",
    "empty.updateProduct": "Selecione um produto na lista para editar seus dados.",
    "empty.review": "Nenhuma ação realizada ainda. Gerencie produtos acima para ver o resumo aqui.",
    "column.name": "Nome",
    "column.price": "Preço",
    "column.productCategoryId": "Categoria",
    "column.featured": "Destaque",
    "column.status": "Status",
    "filter.searchName": "Buscar por nome",
    "filter.filterStatus": "Status",
    "filter.filterProductCategoryId": "Categoria",
    "filter.filterFeatured": "Apenas destaques",
    "field.name": "Nome",
    "field.description": "Descrição",
    "field.price": "Preço",
    "field.imageUrl": "URL da imagem",
    "field.productCategoryId": "Categoria",
    "field.featured": "Destaque na página inicial",
    "field.status": "Status",
    "field.productId": "Produto",
    "action.createProduct": "Cadastrar produto",
    "action.createProduct.submit": "Salvar produto",
    "action.updateProduct": "Editar",
    "action.updateProduct.submit": "Salvar alterações",
    "action.createProduct.success": "Produto cadastrado com sucesso no catálogo.",
    "action.createProduct.error": "Não foi possível cadastrar o produto. Verifique os dados e tente novamente.",
    "action.updateProduct.success": "Produto atualizado com sucesso no catálogo.",
    "action.updateProduct.error": "Não foi possível atualizar o produto. Verifique os dados e tente novamente.",
    "org.browseProducts.title": "Listar produtos cadastrados com filtros e seleção para edição",
    "org.createProduct.title": "Cadastrar novo produto no catálogo",
    "org.updateProduct.title": "Editar produto existente e definir destaque",
    "org.review.title": "Revisar o contexto e o resultado das ações principais da página"
  },
  "automation": {
    "statePrefix": "ui.productManagement",
    "stateKeys": [
      "ui.productManagement.status",
      "ui.productManagement.action.browseProducts.status",
      "ui.productManagement.input.browseProducts.searchName",
      "ui.productManagement.input.browseProducts.filterStatus",
      "ui.productManagement.input.browseProducts.filterProductCategoryId",
      "ui.productManagement.input.browseProducts.filterFeatured",
      "ui.productManagement.data.browseProducts",
      "ui.productManagement.action.createProduct.status",
      "ui.productManagement.input.createProduct.name",
      "ui.productManagement.input.createProduct.description",
      "ui.productManagement.input.createProduct.price",
      "ui.productManagement.input.createProduct.imageUrl",
      "ui.productManagement.input.createProduct.productCategoryId",
      "ui.productManagement.input.createProduct.featured",
      "ui.productManagement.output.createProduct",
      "ui.productManagement.action.createProduct.error",
      "ui.productManagement.action.updateProduct.status",
      "ui.productManagement.input.updateProduct.productId",
      "ui.productManagement.input.updateProduct.name",
      "ui.productManagement.input.updateProduct.description",
      "ui.productManagement.input.updateProduct.price",
      "ui.productManagement.input.updateProduct.imageUrl",
      "ui.productManagement.input.updateProduct.productCategoryId",
      "ui.productManagement.input.updateProduct.featured",
      "ui.productManagement.input.updateProduct.status",
      "ui.productManagement.output.updateProduct",
      "ui.productManagement.action.updateProduct.error"
    ],
    "actionIds": [
      "browseProducts",
      "createProduct",
      "updateProduct",
      "set.browseProductsSearchName",
      "set.browseProductsFilterStatus",
      "set.browseProductsFilterProductCategoryId",
      "set.browseProductsFilterFeatured",
      "set.createProductName",
      "set.createProductDescription",
      "set.createProductPrice",
      "set.createProductImageUrl",
      "set.createProductProductCategoryId",
      "set.createProductFeatured",
      "set.updateProductProductId",
      "set.updateProductName",
      "set.updateProductDescription",
      "set.updateProductPrice",
      "set.updateProductImageUrl",
      "set.updateProductProductCategoryId",
      "set.updateProductFeatured",
      "set.updateProductStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "productManagement__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/productManagement.ts",
    "defPath": "_102049_/l2/petShop/web/shared/productManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/productManagement.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "productManagement__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
