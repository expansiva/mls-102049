/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseHomePage.defs.ts" enhancement="_blank"/>

export const browseHomePageController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseHomePage",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseHomePage",
    "controllerName": "BrowseHomePageController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseHomePageHandler",
        "command": "browseHomePage",
        "usecaseRef": "browseHomePage",
        "kind": "view",
        "inputContract": [],
        "contextResolution": [],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "Product",
          "keyField": "Product.productId",
          "filters": [
            "Product.featured",
            "Product.status"
          ],
          "sort": [
            "Product.createdAt"
          ],
          "pagination": "optional",
          "selection": "multiple",
          "output": [
            "Product.productId",
            "Product.name",
            "Product.description",
            "Product.price",
            "Product.imageUrl",
            "Product.productCategoryId",
            "Product.featured",
            "Product.status"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseHomePage.browseHomePage",
        "handlerName": "petShopBrowseHomePageHandler"
      }
    ]
  }
} as const;

export default browseHomePageController;

export const pipeline = [
  {
    "id": "browseHomePage__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseHomePage.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseHomePage.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseHomePage.d.ts"
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
