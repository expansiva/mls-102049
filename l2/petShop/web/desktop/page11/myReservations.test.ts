/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/myReservations.test.ts" enhancement="_blank"/>

// GENERATED — declarative BFF test cases run server-side by the monitor Tests runner (devenv only).
// Data, not a runnable test module: no node:test import, so scripts/run-tests.mjs never captures it.
// Params valued "<seedRef>" are resolved at run time from the harvested output of this
// page's parameterless queries.
export const pageTests = {
  "moduleName": "petShop",
  "page": "myReservations",
  "variant": "page11",
  "cases": [
    {
      "id": "createReservation.ok",
      "routine": "petShop.reservationLifecycle.createReservation",
      "params": {
        "items": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "createReservation.items.required",
      "routine": "petShop.reservationLifecycle.createReservation",
      "params": {},
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cancelReservation.ok",
      "routine": "petShop.reservationLifecycle.cancelReservation",
      "params": {
        "reservationId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "viewMyReservations.ok",
      "routine": "petShop.viewMyReservations.viewMyReservations",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    }
  ]
} as const;
