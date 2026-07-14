/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseServiceCatalog.defs.ts" enhancement="_blank"/>

export const browseServiceCatalogController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseServiceCatalog",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseServiceCatalog",
    "controllerName": "BrowseServiceCatalogController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseServiceCatalogHandler",
        "command": "browseServiceCatalog",
        "usecaseRef": "browseServiceCatalog",
        "inputTypeName": "BrowseServiceCatalogInput",
        "kind": "query",
        "inputContract": [],
        "contextResolution": [],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "Service",
          "keyField": "Service.serviceId",
          "pagination": "optional",
          "selection": "none",
          "output": [
            "Service.serviceId",
            "Service.name",
            "Service.description",
            "Service.estimatedDurationMinutes",
            "Service.price"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseServiceCatalog.browseServiceCatalog",
        "handlerName": "petShopBrowseServiceCatalogHandler"
      }
    ]
  }
} as const;

export default browseServiceCatalogController;

export const pipeline = [
  {
    "id": "browseServiceCatalog__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseServiceCatalog.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseServiceCatalog.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseServiceCatalog.d.ts"
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
