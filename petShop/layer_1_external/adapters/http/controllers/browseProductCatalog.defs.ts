/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProductCatalog.defs.ts" enhancement="_blank"/>

export const browseProductCatalogController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseProductCatalog",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseProductCatalog",
    "controllerName": "BrowseProductCatalogController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseProductCatalogHandler",
        "command": "browseProductCatalog",
        "usecaseRef": "browseProductCatalog",
        "inputTypeName": "BrowseProductCatalogInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "searchName",
            "fieldRef": "Product.name",
            "required": false,
            "source": "userInput",
            "description": "Texto de busca para filtrar produtos pelo nome"
          },
          {
            "inputId": "productCategoryId",
            "fieldRef": "Product.productCategoryId",
            "required": false,
            "source": "userInput",
            "description": "Identificador da categoria para filtrar os produtos do catálogo"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Product.status",
            "source": "systemDefault",
            "originRef": "systemDefault.locale",
            "description": "O backend aplica automaticamente o filtro status=active para que o cliente veja apenas produtos ativos no catálogo, sem exigir esse campo na requisição"
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
            "Product.imageUrl",
            "Product.productCategoryId",
            "Product.featured"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseProductCatalog.browseProductCatalog",
        "handlerName": "petShopBrowseProductCatalogHandler"
      }
    ]
  }
} as const;

export default browseProductCatalogController;

export const pipeline = [
  {
    "id": "browseProductCatalog__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProductCatalog.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseProductCatalog.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseProductCatalog.d.ts"
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
