/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/catalog.test.ts" enhancement="_blank"/>

// GENERATED — declarative BFF test cases run server-side by the monitor Tests runner (devenv only).
// Data, not a runnable test module: no node:test import, so scripts/run-tests.mjs never captures it.
// Params valued "<seedRef>" are resolved at run time from the harvested output of this
// page's parameterless queries.
export const pageTests = {
  "moduleName": "petShop",
  "page": "catalog",
  "variant": "page11",
  "cases": [
    {
      "id": "featuredProducts.ok",
      "routine": "petShop.catalog.featuredProducts",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "browseCatalog.ok",
      "routine": "petShop.catalog.browseCatalog",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "paginated",
        "minItems": 1
      }
    },
    {
      "id": "productDetails.ok",
      "routine": "petShop.catalog.productDetails",
      "params": {
        "productId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      }
    },
    {
      "id": "reserveProduct.ok",
      "routine": "petShop.catalog.reserveProduct",
      "params": {
        "customerName": "<seedRef>",
        "customerPhone": "<seedRef>",
        "productId": "<seedRef>",
        "quantity": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "reserveProduct.customerName.required",
      "routine": "petShop.catalog.reserveProduct",
      "params": {
        "customerPhone": "<seedRef>",
        "productId": "<seedRef>",
        "quantity": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "reserveProduct.customerPhone.required",
      "routine": "petShop.catalog.reserveProduct",
      "params": {
        "customerName": "<seedRef>",
        "productId": "<seedRef>",
        "quantity": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "reserveProduct.quantity.required",
      "routine": "petShop.catalog.reserveProduct",
      "params": {
        "customerName": "<seedRef>",
        "customerPhone": "<seedRef>",
        "productId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    }
  ]
} as const;
