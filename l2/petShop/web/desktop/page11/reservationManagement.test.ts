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
      "id": "listReservations.ok",
      "routine": "petShop.listReservations.listReservations",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "array",
        "minItems": 1
      }
    },
    {
      "id": "updateReservationStatus.ok",
      "routine": "petShop.reservationLifecycle.updateReservationStatus",
      "params": {
        "reservationId": "<seedRef>",
        "status": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "updateReservationStatus.status.required",
      "routine": "petShop.reservationLifecycle.updateReservationStatus",
      "params": {
        "reservationId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "payInStore.ok",
      "routine": "petShop.reservationLifecycle.payInStore",
      "params": {
        "reservationId": "<seedRef>",
        "paymentMethod": "<seedRef>",
        "paymentAmount": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "payInStore.paymentMethod.required",
      "routine": "petShop.reservationLifecycle.payInStore",
      "params": {
        "reservationId": "<seedRef>",
        "paymentAmount": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "payInStore.paymentAmount.required",
      "routine": "petShop.reservationLifecycle.payInStore",
      "params": {
        "reservationId": "<seedRef>",
        "paymentMethod": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "expireReservations.ok",
      "routine": "petShop.reservationLifecycle.expireReservations",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    }
  ]
} as const;
