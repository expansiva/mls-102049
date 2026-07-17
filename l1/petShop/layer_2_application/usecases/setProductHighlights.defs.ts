/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/setProductHighlights.defs.ts" enhancement="_blank"/>

export const setProductHighlightsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "setProductHighlights",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "setProductHighlights",
    "ports": [
      "Product"
    ],
    "rulesApplied": [
      "highlightRequiresAvailableProduct",
      "highlightsAreManualOnly"
    ],
    "functions": [
      {
        "functionName": "setProductHighlights",
        "inputTypeName": "SetProductHighlightsInput",
        "outputTypeName": "SetProductHighlightsOutput",
        "input": [
          {
            "name": "productIds",
            "type": "array",
            "required": true,
            "fieldRef": "Product.productId",
            "item": {
              "type": "string"
            }
          },
          {
            "name": "highlighted",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product",
            "fieldRef": "Product.highlighted"
          }
        ],
        "output": [
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
        ],
        "ports": [
          "Product"
        ],
        "rulesApplied": [
          "highlightRequiresAvailableProduct",
          "highlightsAreManualOnly"
        ],
        "transactional": true,
        "steps": [
          "Resolve actorId from ctx.sessionContext.actorId; if missing, reject as manual operation only (rule highlightsAreManualOnly).",
          "Load Products by ids via Product port.",
          "If highlighted=true, validate all loaded products have status != 'unavailable'; if any unavailable, reject with rule highlightRequiresAvailableProduct.",
          "Apply highlighted value to each loaded product; set updatedAt=ctx.clock.now();",
          "Persist updated products via Product port inside ctx.data transaction.",
          "Return updatedCount and products projection (productId,name,highlighted,status)."
        ],
        "outputShape": {
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
              "required": true,
              "item": {
                "fields": [
                  {
                    "name": "productId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Product.productId"
                  },
                  {
                    "name": "name",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Product.name"
                  },
                  {
                    "name": "highlighted",
                    "type": "boolean",
                    "required": true,
                    "fieldRef": "Product.highlighted"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Product.status"
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default setProductHighlightsUsecase;

export const pipeline = [
  {
    "id": "setProductHighlights__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/setProductHighlights.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/setProductHighlights.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/productRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/product.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "highlightRequiresAvailableProduct",
      "highlightsAreManualOnly"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
