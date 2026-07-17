/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/setProductHighlights.defs.ts" enhancement="_blank"/>

export const setProductHighlightsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "setProductHighlights",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "setProductHighlights",
    "controllerName": "SetProductHighlightsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "SetProductHighlightsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/setProductHighlights.js",
    "usecaseOutputTypeName": "SetProductHighlightsOutput",
    "responseShape": {
      "kind": "object",
      "fields": [
        {
          "name": "updatedCount",
          "type": "number",
          "required": true
        },
        {
          "name": "products",
          "type": "array",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopSetProductHighlightsHandler",
        "command": "setProductHighlights",
        "usecaseRef": "setProductHighlights",
        "inputTypeName": "SetProductHighlightsInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "productIds",
            "fieldRef": "Product.productId",
            "required": true,
            "source": "userInput",
            "description": "Lista de IDs dos produtos que terão o destaque alterado."
          },
          {
            "inputId": "highlighted",
            "fieldRef": "Product.highlighted",
            "required": true,
            "source": "userInput",
            "description": "Valor do destaque a ser aplicado: true para marcar como destaque, false para remover o destaque."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "actorSession.actorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "Identidade da loja autenticada obtida da sessão para autorizar a alteração manual de destaques de produtos."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Product",
          "keyField": "Product.productId",
          "pagination": "none",
          "selection": "multiple",
          "output": [
            "Product.productId",
            "Product.name",
            "Product.highlighted",
            "Product.status"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.setProductHighlights.setProductHighlights",
        "handlerName": "petShopSetProductHighlightsHandler"
      }
    ]
  }
} as const;

export default setProductHighlightsController;

export const pipeline = [
  {
    "id": "setProductHighlights__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/setProductHighlights.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/setProductHighlights.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/setProductHighlights.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/setProductHighlights.d.ts"
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
