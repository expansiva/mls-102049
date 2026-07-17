/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewProductDetails.defs.ts" enhancement="_blank"/>

export const viewProductDetailsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewProductDetails",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewProductDetails",
    "controllerName": "ViewProductDetailsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "ViewProductDetailsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewProductDetails.js",
    "usecaseOutputTypeName": "ViewProductDetailsOutput",
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
        "handlerName": "petShopViewProductDetailsHandler",
        "command": "viewProductDetails",
        "usecaseRef": "viewProductDetails",
        "inputTypeName": "ViewProductDetailsInput",
        "kind": "view",
        "inputContract": [
          {
            "inputId": "productId",
            "fieldRef": "Product.productId",
            "required": true,
            "source": "routeParam",
            "description": "Identificador do produto selecionado pelo cliente na vitrine ou nos resultados de busca"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Product.productId",
            "source": "routeParam",
            "originRef": "routeParam.productId",
            "description": "O identificador do produto é extraído do parâmetro de rota da página de detalhes do produto"
          },
          {
            "targetRef": "PetType.name",
            "source": "selectedEntity",
            "originRef": "Product.petTypeId",
            "description": "O nome do tipo de pet é resolvido consultando a entidade PetType pelo petTypeId do produto"
          },
          {
            "targetRef": "Category.name",
            "source": "selectedEntity",
            "originRef": "Product.categoryId",
            "description": "O nome da categoria é resolvido consultando a entidade Category pelo categoryId do produto"
          }
        ],
        "accessPattern": {
          "kind": "getById",
          "description": "",
          "entity": "Product",
          "keyField": "Product.productId",
          "pagination": "none",
          "selection": "single",
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
        "key": "petShop.viewProductDetails.viewProductDetails",
        "handlerName": "petShopViewProductDetailsHandler"
      }
    ]
  }
} as const;

export default viewProductDetailsController;

export const pipeline = [
  {
    "id": "viewProductDetails__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewProductDetails.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewProductDetails.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewProductDetails.d.ts"
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
