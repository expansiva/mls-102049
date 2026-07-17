/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productCatalog.test.ts" enhancement="_blank"/>

// GENERATED — declarative BFF test cases run server-side by the monitor Tests runner (devenv only).
// Data, not a runnable test module: no node:test import, so scripts/run-tests.mjs never captures it.
// Params valued "<seedRef>" are resolved at run time from the harvested output of this
// page's parameterless queries.
export const pageTests = {
  "moduleName": "petShop",
  "page": "productCatalog",
  "variant": "page11",
  "cases": [
    {
      "id": "viewHighlights.ok",
      "routine": "petShop.viewHighlights.viewHighlights",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "browseCatalog.ok",
      "routine": "petShop.browseCatalog.browseCatalog",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "paginated",
        "minItems": 1
      }
    },
    {
      "id": "searchProducts.ok",
      "routine": "petShop.searchProducts.searchProducts",
      "params": {
        "searchTerm": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "filterProducts.ok",
      "routine": "petShop.filterProducts.filterProducts",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "viewProductDetails.ok",
      "routine": "petShop.viewProductDetails.viewProductDetails",
      "params": {
        "productId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      }
    }
  ]
} as const;
