/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseCatalog.defs.ts" enhancement="_blank"/>

export const browseCatalogController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseCatalog",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseCatalog",
    "controllerName": "BrowseCatalogController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "BrowseCatalogResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/browseCatalog.js",
    "usecaseOutputTypeName": "BrowseCatalogOutput",
    "responseShape": {
      "kind": "object",
      "fields": [
        {
          "name": "products",
          "type": "array",
          "required": true
        },
        {
          "name": "total",
          "type": "number",
          "required": true
        },
        {
          "name": "page",
          "type": "number",
          "required": true
        },
        {
          "name": "pageSize",
          "type": "number",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopBrowseCatalogHandler",
        "command": "browseCatalog",
        "usecaseRef": "browseCatalog",
        "inputTypeName": "BrowseCatalogInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "searchTerm",
            "fieldRef": "Product.name",
            "required": false,
            "source": "userInput",
            "description": "Termo de busca para filtrar produtos por nome, insensível a maiúsculas e minúsculas com correspondência parcial"
          },
          {
            "inputId": "petTypeId",
            "fieldRef": "Product.petTypeId",
            "required": false,
            "source": "userInput",
            "description": "Identificador do tipo de pet para filtrar produtos indicados para esse tipo"
          },
          {
            "inputId": "categoryId",
            "fieldRef": "Product.categoryId",
            "required": false,
            "source": "userInput",
            "description": "Identificador da categoria para filtrar produtos pertencentes a essa categoria"
          },
          {
            "inputId": "minPrice",
            "fieldRef": "Product.price",
            "required": false,
            "source": "userInput",
            "description": "Preço mínimo da faixa de valor para filtragem por faixa de preço"
          },
          {
            "inputId": "maxPrice",
            "fieldRef": "Product.price",
            "required": false,
            "source": "userInput",
            "description": "Preço máximo da faixa de valor para filtragem por faixa de preço"
          }
        ],
        "contextResolution": [],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "Product",
          "keyField": "Product.productId",
          "filters": [
            "Product.status",
            "Product.name",
            "Product.petTypeId",
            "Product.categoryId",
            "Product.price",
            "Product.highlighted"
          ],
          "sort": [
            "Product.createdAt"
          ],
          "pagination": "required",
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
        "key": "petShop.browseCatalog.browseCatalog",
        "handlerName": "petShopBrowseCatalogHandler"
      }
    ]
  }
} as const;

export default browseCatalogController;

export const pipeline = [
  {
    "id": "browseCatalog__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseCatalog.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseCatalog.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseCatalog.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/browseCatalog.d.ts"
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
