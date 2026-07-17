/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/filterProducts.defs.ts" enhancement="_blank"/>

export const filterProductsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "filterProducts",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "filterProducts",
    "controllerName": "FilterProductsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "FilterProductsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/filterProducts.js",
    "usecaseOutputTypeName": "FilterProductsOutput",
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
          "name": "categoryId",
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
        "handlerName": "petShopFilterProductsHandler",
        "command": "filterProducts",
        "usecaseRef": "filterProducts",
        "inputTypeName": "FilterProductsInput",
        "kind": "query",
        "inputContract": [
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
        "accessPattern": {
          "kind": "list",
          "description": "",
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
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.filterProducts.filterProducts",
        "handlerName": "petShopFilterProductsHandler"
      }
    ]
  }
} as const;

export default filterProductsController;

export const pipeline = [
  {
    "id": "filterProducts__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/filterProducts.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/filterProducts.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/filterProducts.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/filterProducts.d.ts"
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
