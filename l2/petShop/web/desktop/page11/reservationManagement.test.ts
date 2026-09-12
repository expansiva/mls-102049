/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/reservationManagement.test.ts" enhancement="_blank"/>

// GENERATED — declarative BFF test cases run server-side by the monitor Tests runner (devenv only).
// Data, not a runnable test module: no node:test import, so scripts/run-tests.mjs never captures it.
// Params valued "<seedRef>" are resolved at run time from the harvested output of this
// page's parameterless queries.
export const pageTests = {
  "moduleName": "petShop",
  "page": "reservationManagement",
  "variant": "page11",
  "cases": [
    {
      "id": "browseReservationsQuery.ok",
      "routine": "petShop.reservationManagement.browseReservationsQuery",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "updateReservationStatusCommand.ok",
      "routine": "petShop.reservationManagement.updateReservationStatusCommand",
      "params": {
        "reservationId": "<seedRef>",
        "newStatus": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "updateReservationStatusCommand.newStatus.required",
      "routine": "petShop.reservationManagement.updateReservationStatusCommand",
      "params": {
        "reservationId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "processPaymentCommand.ok",
      "routine": "petShop.reservationManagement.processPaymentCommand",
      "params": {
        "reservationId": "<seedRef>",
        "method": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "processPaymentCommand.method.required",
      "routine": "petShop.reservationManagement.processPaymentCommand",
      "params": {
        "reservationId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    }
  ]
} as const;
