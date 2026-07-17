/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productManagement.test.ts" enhancement="_blank"/>

// GENERATED — declarative BFF test cases run server-side by the monitor Tests runner (devenv only).
// Data, not a runnable test module: no node:test import, so scripts/run-tests.mjs never captures it.
// Params valued "<seedRef>" are resolved at run time from the harvested output of this
// page's parameterless queries.
export const pageTests = {
  "moduleName": "petShop",
  "page": "productManagement",
  "variant": "page11",
  "cases": [
    {
      "id": "browseProducts.ok",
      "routine": "petShop.browseProducts.browseProducts",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "createProduct.ok",
      "routine": "petShop.createProduct.createProduct",
      "params": {
        "name": "<seedRef>",
        "price": "<seedRef>",
        "petTypeId": "<seedRef>",
        "categoryId": "<seedRef>",
        "highlighted": "<seedRef>",
        "status": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "createProduct.name.required",
      "routine": "petShop.createProduct.createProduct",
      "params": {
        "price": "<seedRef>",
        "petTypeId": "<seedRef>",
        "categoryId": "<seedRef>",
        "highlighted": "<seedRef>",
        "status": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProduct.price.required",
      "routine": "petShop.createProduct.createProduct",
      "params": {
        "name": "<seedRef>",
        "petTypeId": "<seedRef>",
        "categoryId": "<seedRef>",
        "highlighted": "<seedRef>",
        "status": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProduct.petTypeId.required",
      "routine": "petShop.createProduct.createProduct",
      "params": {
        "name": "<seedRef>",
        "price": "<seedRef>",
        "categoryId": "<seedRef>",
        "highlighted": "<seedRef>",
        "status": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProduct.categoryId.required",
      "routine": "petShop.createProduct.createProduct",
      "params": {
        "name": "<seedRef>",
        "price": "<seedRef>",
        "petTypeId": "<seedRef>",
        "highlighted": "<seedRef>",
        "status": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProduct.highlighted.required",
      "routine": "petShop.createProduct.createProduct",
      "params": {
        "name": "<seedRef>",
        "price": "<seedRef>",
        "petTypeId": "<seedRef>",
        "categoryId": "<seedRef>",
        "status": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProduct.status.required",
      "routine": "petShop.createProduct.createProduct",
      "params": {
        "name": "<seedRef>",
        "price": "<seedRef>",
        "petTypeId": "<seedRef>",
        "categoryId": "<seedRef>",
        "highlighted": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateProduct.ok",
      "routine": "petShop.updateProduct.updateProduct",
      "params": {
        "productId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "setProductHighlights.ok",
      "routine": "petShop.setProductHighlights.setProductHighlights",
      "params": {
        "productIds": "<seedRef>",
        "highlighted": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "setProductHighlights.productIds.required",
      "routine": "petShop.setProductHighlights.setProductHighlights",
      "params": {
        "highlighted": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "setProductHighlights.highlighted.required",
      "routine": "petShop.setProductHighlights.setProductHighlights",
      "params": {
        "productIds": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    }
  ]
} as const;
