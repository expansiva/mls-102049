/// <mls fileReference="_102049_/l2/petShop/web/shared/productManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "productManagement",
  "pageName": "Gestão de Produtos",
  "moduleName": "petShop",
  "baseClassName": "PetShopProductManagementBase",
  "routePattern": "/petShop/productManagement",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseProducts",
    "operation:createProduct",
    "operation:updateProduct",
    "operation:setProductHighlights"
  ],
  "operationIds": [
    "browseProducts",
    "createProduct",
    "updateProduct",
    "setProductHighlights"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "productManagement",
    "workspaceKind": "entityManagement",
    "actor": "loja",
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
      },
      {
        "kind": "operation",
        "id": "setProductHighlights",
        "defPath": "_102049_/l4/operations/setProductHighlights.defs.ts"
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
            "A loja acessa a tela de catálogo de produtos",
            "O sistema lista os produtos cadastrados com nome, preço, tipo de pet, categoria, flag de destaque e status",
            "A loja pode buscar por nome (insensível a caixa e parcial) e combinar filtros de tipo de pet, categoria e faixa de preço",
            "A loja visualiza quais produtos estão em destaque e disponíveis, identificando produtos indisponíveis para gestão"
          ]
        },
        {
          "operationId": "createProduct",
          "commandName": "createProduct",
          "steps": [
            "A loja informa nome, descrição (opcional), preço, tipo de pet, categoria, flag de destaque e status de disponibilidade do novo produto.",
            "O sistema valida que nome, preço, tipo de pet e categoria estão presentes e que as referências a PetType e Category existem.",
            "O sistema valida que, se highlighted for verdadeiro, o status deve ser available.",
            "O sistema gera um productId, define createdAt e updatedAt e persiste o produto no catálogo.",
            "O sistema retorna o produto criado com todos os campos."
          ]
        },
        {
          "operationId": "updateProduct",
          "commandName": "updateProduct",
          "steps": [
            "A loja seleciona um produto existente no catálogo",
            "A loja modifica campos como nome, descrição, preço, tipo de pet, categoria, destaque ou disponibilidade",
            "O sistema valida que um produto só pode ser marcado como destaque se estiver disponível",
            "O sistema valida que os campos mínimos obrigatórios (nome, preço, tipo de pet e categoria) permaneçam preenchidos",
            "O sistema persiste as alterações e atualiza o campo updatedAt com a data e hora atuais"
          ]
        },
        {
          "operationId": "setProductHighlights",
          "commandName": "setProductHighlights",
          "steps": [
            "A loja seleciona um ou mais produtos do catálogo que deseja marcar ou desmarcar como destaque.",
            "A loja define o valor do destaque (true para marcar, false para remover destaque).",
            "O sistema verifica que apenas produtos disponíveis podem ser marcados como destaque.",
            "O sistema atualiza o campo highlighted dos produtos informados e retorna a confirmação com os produtos alterados."
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
    "layoutId": "page11-tabular_classic"
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
      "stateKey": "ui.productManagement.input.browseProducts.searchTerm",
      "name": "browseProductsSearchTerm",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "searchTerm"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.petTypeId",
      "name": "browseProductsPetTypeId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "petTypeId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.categoryId",
      "name": "browseProductsCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "categoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.priceMin",
      "name": "browseProductsPriceMin",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "priceMin"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.priceMax",
      "name": "browseProductsPriceMax",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "priceMax"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.status",
      "name": "browseProductsStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.browseProducts.highlighted",
      "name": "browseProductsHighlighted",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseProducts",
        "direction": "input",
        "field": "highlighted"
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
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
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
      "stateKey": "ui.productManagement.input.createProduct.petTypeId",
      "name": "createProductPetTypeId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "petTypeId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.categoryId",
      "name": "createProductCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "categoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.highlighted",
      "name": "createProductHighlighted",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "highlighted"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.createProduct.status",
      "name": "createProductStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProduct",
        "direction": "input",
        "field": "status"
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
      "stateKey": "ui.productManagement.input.updateProduct.petTypeId",
      "name": "updateProductPetTypeId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "petTypeId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.categoryId",
      "name": "updateProductCategoryId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "categoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.updateProduct.highlighted",
      "name": "updateProductHighlighted",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProduct",
        "direction": "input",
        "field": "highlighted"
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
    },
    {
      "stateKey": "ui.productManagement.action.setProductHighlights.status",
      "name": "setProductHighlightsState",
      "kind": "actionStatus",
      "actionRef": "setProductHighlights",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.productManagement.input.setProductHighlights.productIds",
      "name": "setProductHighlightsProductIds",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "setProductHighlights",
        "direction": "input",
        "field": "productIds"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.input.setProductHighlights.highlighted",
      "name": "setProductHighlightsHighlighted",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "setProductHighlights",
        "direction": "input",
        "field": "highlighted"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.productManagement.output.setProductHighlights",
      "name": "setProductHighlightsOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "setProductHighlights",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.productManagement.action.setProductHighlights.error",
      "name": "setProductHighlightsError",
      "kind": "actionError",
      "actionRef": "setProductHighlights",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseProducts",
      "kind": "query",
      "commandRef": "browseProducts",
      "routeKey": "petShop.browseProducts.browseProducts",
      "purpose": "Listar produtos do catálogo",
      "methodName": "loadBrowseProducts",
      "handlerName": "handleBrowseProductsClick",
      "inputStateKeys": [
        "ui.productManagement.input.browseProducts.searchTerm",
        "ui.productManagement.input.browseProducts.petTypeId",
        "ui.productManagement.input.browseProducts.categoryId",
        "ui.productManagement.input.browseProducts.priceMin",
        "ui.productManagement.input.browseProducts.priceMax",
        "ui.productManagement.input.browseProducts.status",
        "ui.productManagement.input.browseProducts.highlighted"
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
        "ui.productManagement.input.createProduct.petTypeId",
        "ui.productManagement.input.createProduct.categoryId",
        "ui.productManagement.input.createProduct.highlighted",
        "ui.productManagement.input.createProduct.status"
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
        "ui.productManagement.input.createProduct.petTypeId",
        "ui.productManagement.input.createProduct.categoryId",
        "ui.productManagement.input.createProduct.highlighted",
        "ui.productManagement.input.createProduct.status"
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
      "purpose": "Editar produto",
      "methodName": "updateProduct",
      "handlerName": "handleUpdateProductClick",
      "inputStateKeys": [
        "ui.productManagement.input.updateProduct.productId",
        "ui.productManagement.input.updateProduct.name",
        "ui.productManagement.input.updateProduct.description",
        "ui.productManagement.input.updateProduct.price",
        "ui.productManagement.input.updateProduct.petTypeId",
        "ui.productManagement.input.updateProduct.categoryId",
        "ui.productManagement.input.updateProduct.highlighted",
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
        "ui.productManagement.input.updateProduct.petTypeId",
        "ui.productManagement.input.updateProduct.categoryId",
        "ui.productManagement.input.updateProduct.highlighted",
        "ui.productManagement.input.updateProduct.status"
      ],
      "refreshActionIds": [
        "browseProducts"
      ]
    },
    {
      "actionId": "setProductHighlights",
      "kind": "command",
      "commandRef": "setProductHighlights",
      "routeKey": "petShop.setProductHighlights.setProductHighlights",
      "purpose": "Definir produtos em destaque",
      "methodName": "setProductHighlights",
      "handlerName": "handleSetProductHighlightsClick",
      "inputStateKeys": [
        "ui.productManagement.input.setProductHighlights.productIds",
        "ui.productManagement.input.setProductHighlights.highlighted"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.productManagement.output.setProductHighlights"
      ],
      "statusStateKey": "ui.productManagement.action.setProductHighlights.status",
      "errorStateKey": "ui.productManagement.action.setProductHighlights.error",
      "feedback": {
        "successMessageKey": "action.setProductHighlights.success",
        "errorMessageKey": "action.setProductHighlights.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.productManagement.input.setProductHighlights.productIds",
        "ui.productManagement.input.setProductHighlights.highlighted"
      ],
      "refreshActionIds": [
        "browseProducts"
      ]
    },
    {
      "actionId": "set.browseProductsSearchTerm",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.searchTerm",
      "methodName": "setBrowseProductsSearchTerm",
      "handlerName": "handleBrowseProductsSearchTermChange"
    },
    {
      "actionId": "set.browseProductsPetTypeId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.petTypeId",
      "methodName": "setBrowseProductsPetTypeId",
      "handlerName": "handleBrowseProductsPetTypeIdChange"
    },
    {
      "actionId": "set.browseProductsCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.categoryId",
      "methodName": "setBrowseProductsCategoryId",
      "handlerName": "handleBrowseProductsCategoryIdChange"
    },
    {
      "actionId": "set.browseProductsPriceMin",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.priceMin",
      "methodName": "setBrowseProductsPriceMin",
      "handlerName": "handleBrowseProductsPriceMinChange"
    },
    {
      "actionId": "set.browseProductsPriceMax",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.priceMax",
      "methodName": "setBrowseProductsPriceMax",
      "handlerName": "handleBrowseProductsPriceMaxChange"
    },
    {
      "actionId": "set.browseProductsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.status",
      "methodName": "setBrowseProductsStatus",
      "handlerName": "handleBrowseProductsStatusChange"
    },
    {
      "actionId": "set.browseProductsHighlighted",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.browseProducts.highlighted",
      "methodName": "setBrowseProductsHighlighted",
      "handlerName": "handleBrowseProductsHighlightedChange"
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
      "actionId": "set.createProductPetTypeId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.petTypeId",
      "methodName": "setCreateProductPetTypeId",
      "handlerName": "handleCreateProductPetTypeIdChange"
    },
    {
      "actionId": "set.createProductCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.categoryId",
      "methodName": "setCreateProductCategoryId",
      "handlerName": "handleCreateProductCategoryIdChange"
    },
    {
      "actionId": "set.createProductHighlighted",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.highlighted",
      "methodName": "setCreateProductHighlighted",
      "handlerName": "handleCreateProductHighlightedChange"
    },
    {
      "actionId": "set.createProductStatus",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.createProduct.status",
      "methodName": "setCreateProductStatus",
      "handlerName": "handleCreateProductStatusChange"
    },
    {
      "actionId": "set.updateProductProductId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.productId",
      "methodName": "setUpdateProductProductId",
      "handlerName": "handleUpdateProductProductIdChange",
      "prefill": {
        "command": "updateProduct",
        "sourceStateKey": "ui.productManagement.data.browseProducts",
        "sourceOutputShape": "array",
        "matchField": "productId",
        "fields": [
          {
            "itemField": "name",
            "targetStateKey": "ui.productManagement.input.updateProduct.name"
          },
          {
            "itemField": "description",
            "targetStateKey": "ui.productManagement.input.updateProduct.description"
          },
          {
            "itemField": "price",
            "targetStateKey": "ui.productManagement.input.updateProduct.price"
          },
          {
            "itemField": "petTypeId",
            "targetStateKey": "ui.productManagement.input.updateProduct.petTypeId"
          },
          {
            "itemField": "categoryId",
            "targetStateKey": "ui.productManagement.input.updateProduct.categoryId"
          },
          {
            "itemField": "highlighted",
            "targetStateKey": "ui.productManagement.input.updateProduct.highlighted"
          },
          {
            "itemField": "status",
            "targetStateKey": "ui.productManagement.input.updateProduct.status"
          }
        ]
      }
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
      "actionId": "set.updateProductPetTypeId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.petTypeId",
      "methodName": "setUpdateProductPetTypeId",
      "handlerName": "handleUpdateProductPetTypeIdChange"
    },
    {
      "actionId": "set.updateProductCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.categoryId",
      "methodName": "setUpdateProductCategoryId",
      "handlerName": "handleUpdateProductCategoryIdChange"
    },
    {
      "actionId": "set.updateProductHighlighted",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.highlighted",
      "methodName": "setUpdateProductHighlighted",
      "handlerName": "handleUpdateProductHighlightedChange"
    },
    {
      "actionId": "set.updateProductStatus",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.updateProduct.status",
      "methodName": "setUpdateProductStatus",
      "handlerName": "handleUpdateProductStatusChange"
    },
    {
      "actionId": "set.setProductHighlightsProductIds",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.setProductHighlights.productIds",
      "methodName": "setSetProductHighlightsProductIds",
      "handlerName": "handleSetProductHighlightsProductIdsChange"
    },
    {
      "actionId": "set.setProductHighlightsHighlighted",
      "kind": "stateSetter",
      "stateKey": "ui.productManagement.input.setProductHighlights.highlighted",
      "methodName": "setSetProductHighlightsHighlighted",
      "handlerName": "handleSetProductHighlightsHighlightedChange"
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
    "page.productManagement.title": "Gestão de Produtos",
    "section.productList.title": "Catálogo de Produtos",
    "section.createProduct.title": "Cadastrar Produto",
    "section.updateProduct.title": "Editar Produto",
    "section.setHighlights.title": "Definir Produtos em Destaque",
    "field.searchTerm.label": "Buscar",
    "field.petTypeId.label": "Tipo de Pet",
    "field.categoryId.label": "Categoria",
    "field.priceMin.label": "Preço Mínimo",
    "field.priceMax.label": "Preço Máximo",
    "field.status.label": "Status",
    "field.highlighted.label": "Destaque",
    "field.name.label": "Nome",
    "field.description.label": "Descrição",
    "field.price.label": "Preço",
    "field.productId.label": "ID do Produto",
    "field.productIds.label": "Produtos",
    "column.name.label": "Nome",
    "column.price.label": "Preço",
    "column.petTypeName.label": "Tipo de Pet",
    "column.categoryName.label": "Categoria",
    "column.highlighted.label": "Destaque",
    "column.status.label": "Status",
    "action.browseProducts.label": "Buscar",
    "action.createProduct.label": "Cadastrar Produto",
    "action.updateProduct.label": "Editar",
    "action.setProductHighlights.label": "Definir Destaque",
    "empty.productList": "Nenhum produto encontrado. Ajuste os filtros ou cadastre um novo produto.",
    "action.createProduct.success": "Produto cadastrado com sucesso",
    "action.createProduct.error": "Erro ao cadastrar produto",
    "action.updateProduct.success": "Produto atualizado com sucesso",
    "action.updateProduct.error": "Erro ao atualizar produto",
    "action.setProductHighlights.success": "Destaque atualizado com sucesso",
    "action.setProductHighlights.error": "Erro ao atualizar destaque",
    "section.product.list.title": "Section product list",
    "org.product.table.title": "Listar, buscar e filtrar produtos do catálogo com ações de criação, edição e destaque",
    "section.create.product.title": "Section create product",
    "org.create.form.title": "Cadastrar novo produto no catálogo com nome, descrição, preço, tipo de pet, categoria, destaque e status",
    "section.update.product.title": "Section update product",
    "org.update.form.title": "Editar produto existente selecionado na lista, com preenchimento automático dos campos",
    "section.set.highlights.title": "Section set highlights",
    "org.highlights.form.title": "Marcar ou desmarcar produtos como destaque, verificando que apenas produtos disponíveis podem ser destacados",
    "section.catalog.title": "Catálogo de Produtos",
    "section.detail.title": "Detalhes do Produto",
    "organism.productList.title": "Produtos",
    "organism.updateProductForm.title": "Editar Produto",
    "organism.createProductForm.title": "Cadastrar Produto",
    "organism.setHighlightsForm.title": "Destaque em Massa",
    "intent.productList.title": "Lista de Produtos",
    "intent.updateProduct.title": "Editar Produto Selecionado",
    "intent.createProduct.title": "Novo Produto",
    "intent.setHighlights.title": "Definir Destaque",
    "field.product.name": "Nome",
    "field.product.description": "Descrição",
    "field.product.price": "Preço",
    "field.product.petTypeId": "Tipo de Pet",
    "field.product.petTypeName": "Tipo de Pet",
    "field.product.categoryId": "Categoria",
    "field.product.categoryName": "Categoria",
    "field.product.highlighted": "Destaque",
    "field.product.status": "Disponibilidade",
    "field.product.searchTerm": "Buscar por nome",
    "field.product.priceMin": "Preço mín.",
    "field.product.priceMax": "Preço máx.",
    "field.product.productIds": "Produtos",
    "action.browseProducts": "Buscar",
    "action.selectForEdit": "Editar",
    "action.updateProduct": "Salvar alterações",
    "action.createProduct": "Cadastrar produto",
    "action.setProductHighlights": "Aplicar destaque"
  },
  "automation": {
    "statePrefix": "ui.productManagement",
    "stateKeys": [
      "ui.productManagement.status",
      "ui.productManagement.action.browseProducts.status",
      "ui.productManagement.input.browseProducts.searchTerm",
      "ui.productManagement.input.browseProducts.petTypeId",
      "ui.productManagement.input.browseProducts.categoryId",
      "ui.productManagement.input.browseProducts.priceMin",
      "ui.productManagement.input.browseProducts.priceMax",
      "ui.productManagement.input.browseProducts.status",
      "ui.productManagement.input.browseProducts.highlighted",
      "ui.productManagement.data.browseProducts",
      "ui.productManagement.action.createProduct.status",
      "ui.productManagement.input.createProduct.name",
      "ui.productManagement.input.createProduct.description",
      "ui.productManagement.input.createProduct.price",
      "ui.productManagement.input.createProduct.petTypeId",
      "ui.productManagement.input.createProduct.categoryId",
      "ui.productManagement.input.createProduct.highlighted",
      "ui.productManagement.input.createProduct.status",
      "ui.productManagement.output.createProduct",
      "ui.productManagement.action.createProduct.error",
      "ui.productManagement.action.updateProduct.status",
      "ui.productManagement.input.updateProduct.productId",
      "ui.productManagement.input.updateProduct.name",
      "ui.productManagement.input.updateProduct.description",
      "ui.productManagement.input.updateProduct.price",
      "ui.productManagement.input.updateProduct.petTypeId",
      "ui.productManagement.input.updateProduct.categoryId",
      "ui.productManagement.input.updateProduct.highlighted",
      "ui.productManagement.input.updateProduct.status",
      "ui.productManagement.output.updateProduct",
      "ui.productManagement.action.updateProduct.error",
      "ui.productManagement.action.setProductHighlights.status",
      "ui.productManagement.input.setProductHighlights.productIds",
      "ui.productManagement.input.setProductHighlights.highlighted",
      "ui.productManagement.output.setProductHighlights",
      "ui.productManagement.action.setProductHighlights.error"
    ],
    "actionIds": [
      "browseProducts",
      "createProduct",
      "updateProduct",
      "setProductHighlights",
      "set.browseProductsSearchTerm",
      "set.browseProductsPetTypeId",
      "set.browseProductsCategoryId",
      "set.browseProductsPriceMin",
      "set.browseProductsPriceMax",
      "set.browseProductsStatus",
      "set.browseProductsHighlighted",
      "set.createProductName",
      "set.createProductDescription",
      "set.createProductPrice",
      "set.createProductPetTypeId",
      "set.createProductCategoryId",
      "set.createProductHighlighted",
      "set.createProductStatus",
      "set.updateProductProductId",
      "set.updateProductName",
      "set.updateProductDescription",
      "set.updateProductPrice",
      "set.updateProductPetTypeId",
      "set.updateProductCategoryId",
      "set.updateProductHighlighted",
      "set.updateProductStatus",
      "set.setProductHighlightsProductIds",
      "set.setProductHighlightsHighlighted"
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
