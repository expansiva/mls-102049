/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProducts.defs.ts" enhancement="_blank"/>

export const browseProductsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseProducts",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseProducts",
    "controllerName": "BrowseProductsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "BrowseProductsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/browseProducts.js",
    "usecaseOutputTypeName": "BrowseProductsOutput",
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
        },
        {
          "name": "createdAt",
          "type": "string",
          "required": true
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopBrowseProductsHandler",
        "command": "browseProducts",
        "usecaseRef": "browseProducts",
        "inputTypeName": "BrowseProductsInput",
        "kind": "query",
        "inputContract": [
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
            "Product.status",
            "Product.createdAt",
            "Product.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseProducts.browseProducts",
        "handlerName": "petShopBrowseProductsHandler"
      }
    ]
  }
} as const;

export default browseProductsController;

export const pipeline = [
  {
    "id": "browseProducts__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProducts.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProducts.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseProducts.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/browseProducts.d.ts"
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
