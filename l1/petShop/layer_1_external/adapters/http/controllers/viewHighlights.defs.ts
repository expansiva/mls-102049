/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewHighlights.defs.ts" enhancement="_blank"/>

export const viewHighlightsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewHighlights",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewHighlights",
    "controllerName": "ViewHighlightsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "ViewHighlightsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewHighlights.js",
    "usecaseOutputTypeName": "ViewHighlightsOutput",
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
        "handlerName": "petShopViewHighlightsHandler",
        "command": "viewHighlights",
        "usecaseRef": "viewHighlights",
        "inputTypeName": "ViewHighlightsInput",
        "kind": "view",
        "inputContract": [],
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
        "key": "petShop.viewHighlights.viewHighlights",
        "handlerName": "petShopViewHighlightsHandler"
      }
    ]
  }
} as const;

export default viewHighlightsController;

export const pipeline = [
  {
    "id": "viewHighlights__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewHighlights.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewHighlights.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/viewHighlights.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewHighlights.d.ts"
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
