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
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseProductsHandler",
        "command": "browseProducts",
        "usecaseRef": "browseProducts",
        "inputTypeName": "BrowseProductsInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "searchName",
            "fieldRef": "Product.name",
            "required": false,
            "source": "userInput",
            "description": "Texto de busca para filtrar produtos pelo nome."
          },
          {
            "inputId": "filterStatus",
            "fieldRef": "Product.status",
            "required": false,
            "source": "userInput",
            "description": "Filtro de situação do produto: ativo ou inativo."
          },
          {
            "inputId": "filterProductCategoryId",
            "fieldRef": "Product.productCategoryId",
            "required": false,
            "source": "userInput",
            "description": "Filtro por categoria de produto."
          },
          {
            "inputId": "filterFeatured",
            "fieldRef": "Product.featured",
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
            "description": "O backend resolve o identificador do administrador a partir da sessão ativa para autorizar o acesso à lista de produtos."
          },
          {
            "targetRef": "actorSession.scope",
            "source": "actorSession",
            "originRef": "actorSession.scope",
            "description": "O backend resolve o escopo da sessão do administrador para garantir que apenas usuários com perfil admin possam consultar o catálogo."
          }
        ],
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
            "Product.price",
            "Product.imageUrl",
            "Product.productCategoryId",
            "Product.featured",
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
      "_102049_/l1/petShop/layer_2_application/usecases/browseProducts.d.ts"
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
