{
  "savedAt": "2026-07-20T00:30:07.128Z",
  "agentName": "agentCbUsecase",
  "stepId": 12,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "browseFeaturedProducts",
          "ports": [],
          "functions": [
            {
              "functionName": "browseFeaturedProducts",
              "inputTypeName": "BrowseFeaturedProductsInput",
              "outputTypeName": "BrowseFeaturedProductsOutput",
              "input": [
                {
                  "name": "categoryId",
                  "type": "string",
                  "required": false,
                  "ofEntity": "Product",
                  "fieldRef": "Product.categoryId"
                },
                {
                  "name": "petTypeId",
                  "type": "string",
                  "required": false,
                  "ofEntity": "Product",
                  "fieldRef": "Product.petTypeId"
                },
                {
                  "name": "name",
                  "type": "string",
                  "required": false,
                  "ofEntity": "Product",
                  "fieldRef": "Product.name"
                },
                {
                  "name": "priceMin",
                  "type": "number",
                  "required": false,
                  "fieldRef": "Product.price"
                },
                {
                  "name": "priceMax",
                  "type": "number",
                  "required": false,
                  "fieldRef": "Product.price"
                },
                {
                  "name": "page",
                  "type": "number",
                  "required": false
                },
                {
                  "name": "pageSize",
                  "type": "number",
                  "required": false
                }
              ],
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
                  "name": "price",
                  "type": "number",
                  "required": true,
                  "ofEntity": "Product"
                },
                {
                  "name": "isFeatured",
                  "type": "boolean",
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
                  "name": "petTypeId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Product"
                }
              ],
              "ports": [],
              "rulesApplied": [
                "featuredProductsOnly",
                "featuredOrderFlexible",
                "combinedFilters",
                "caseInsensitiveSearch"
              ],
              "transactional": false,
              "steps": [
                "list Product records via ctx.mdm.collection.listByType({ type: 'Product' })",
                "apply featuredProductsOnly: keep only products where isFeatured === true",
                "apply combinedFilters: when categoryId provided, filter by Product.categoryId; when petTypeId provided, filter by Product.petTypeId; when priceMin provided, keep price >= priceMin; when priceMax provided, keep price <= priceMax — all active filters combine with AND",
                "apply caseInsensitiveSearch: when name provided, keep products whose name includes the term case-insensitively",
                "apply featuredOrderFlexible: preserve a stable flexible order suitable for a featured showcase (no rigid sort required beyond featured set)",
                "apply optional pagination with page/pageSize when provided",
                "project each item to outputShape fields: productId, name, price, isFeatured, categoryId, petTypeId",
                "return the projected list"
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
                    "name": "price",
                    "type": "number",
                    "required": true,
                    "fieldRef": "Product.price"
                  },
                  {
                    "name": "isFeatured",
                    "type": "boolean",
                    "required": true,
                    "fieldRef": "Product.isFeatured"
                  },
                  {
                    "name": "categoryId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Product.categoryId"
                  },
                  {
                    "name": "petTypeId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Product.petTypeId"
                  }
                ]
              }
            }
          ],
          "rulesApplied": [
            "featuredProductsOnly",
            "featuredOrderFlexible",
            "combinedFilters",
            "caseInsensitiveSearch"
          ],
          "mdmRefs": [
            "Product"
          ]
        },
        "questions": [],
        "trace": [
          "Product is MDM (mdmRefs) — no repository port; browse via ctx.mdm.collection.listByType",
          "Public inputs from userInput only: categoryId, petTypeId, name, priceMin, priceMax, page, pageSize",
          "output[] pinned to outputShape top-level fields",
          "Rules applied inline: featured-only, combined filters, case-insensitive name, flexible featured order"
        ]
      }
    },
    "status": "completed",
    "stepId": 20,
    "interaction": null,
    "nextSteps": null
  }
}
