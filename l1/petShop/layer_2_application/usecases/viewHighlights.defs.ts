/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewHighlights.defs.ts" enhancement="_blank"/>

export const viewHighlightsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewHighlights",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewHighlights",
    "ports": [
      "Product"
    ],
    "functions": [
      {
        "functionName": "viewHighlights",
        "inputTypeName": "ViewHighlightsInput",
        "outputTypeName": "ViewHighlightsOutput",
        "input": [],
        "output": [
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "Product"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "petTypeId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "categoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "highlighted",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          }
        ],
        "ports": [
          "Product"
        ],
        "rulesApplied": [
          "highlightRequiresAvailableProduct",
          "onlyAvailableProductsVisibleAndReservable",
          "highlightsAreManualOnly"
        ],
        "transactional": false,
        "steps": [
          "1. Load all products from the Product port (list query).",
          "2. Apply rule 'highlightsAreManualOnly': do NOT auto-select or compute highlights — only products already flagged highlighted=true by the store are candidates.",
          "3. Apply rule 'highlightRequiresAvailableProduct' and 'onlyAvailableProductsVisibleAndReservable': filter the candidate set to products where status === 'available'. Products with status 'unavailable' are excluded even if highlighted=true.",
          "4. Project each surviving product onto the output shape: productId, name, description, price, petTypeId, categoryId, highlighted, status.",
          "5. Return the resulting list (may be empty if no highlighted+available products exist)."
        ],
        "outputShape": {
          "kind": "list",
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
              "name": "description",
              "type": "string",
              "required": false,
              "fieldRef": "Product.description"
            },
            {
              "name": "price",
              "type": "number",
              "required": true,
              "fieldRef": "Product.price"
            },
            {
              "name": "petTypeId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.petTypeId"
            },
            {
              "name": "categoryId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.categoryId"
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
    ],
    "mdmRefs": [
      "PetType",
      "Category"
    ]
  }
} as const;

export default viewHighlightsUsecase;

export const pipeline = [
  {
    "id": "viewHighlights__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/viewHighlights.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/viewHighlights.defs.ts",
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
    "agent": "agentCbMaterialize"
  }
] as const;
