/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/searchProducts.defs.ts" enhancement="_blank"/>

export const searchProductsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "searchProducts",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "searchProducts",
    "controllerName": "SearchProductsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "SearchProductsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/searchProducts.js",
    "usecaseOutputTypeName": "SearchProductsOutput",
    "responseShape": {
      "kind": "object",
      "fields": [
        {
          "name": "productId",
          "type": "string",
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "required": true
        },
        {
          "name": "description",
          "type": "string",
          "required": false
        },
        {
          "name": "price",
          "type": "number",
          "required": true
        },
        {
          "name": "petTypeId",
          "type": "string",
          "required": true
        },
        {
          "name": "petTypeName",
          "type": "string",
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "required": true
        },
        {
          "name": "categoryName",
          "type": "string",
          "required": true
        },
        {
          "name": "highlighted",
          "type": "boolean",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopSearchProductsHandler",
        "command": "searchProducts",
        "usecaseRef": "searchProducts",
        "inputTypeName": "SearchProductsInput",
        "kind": "query",
        "inputContract": [
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
        "accessPattern": {
          "kind": "list",
          "description": "",
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
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.searchProducts.searchProducts",
        "handlerName": "petShopSearchProductsHandler"
      }
    ]
  }
} as const;

export default searchProductsController;

export const pipeline = [
  {
    "id": "searchProducts__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/searchProducts.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/searchProducts.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/searchProducts.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/searchProducts.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
