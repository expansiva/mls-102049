{
  "savedAt": "2026-07-17T01:33:57.407Z",
  "agentName": "agentCbUsecase",
  "stepId": 31,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "viewMyReservations",
          "ports": [
            "Reservation",
            "Payment"
          ],
          "rulesApplied": [
            "reservationRequiresAuthentication",
            "reservationStatusReflectsStage"
          ],
          "functions": [
            {
              "functionName": "viewMyReservations",
              "inputTypeName": "ViewMyReservationsInput",
              "outputTypeName": "ViewMyReservationsOutput",
              "input": [],
              "output": [
                {
                  "name": "reservationId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Reservation"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Reservation"
                },
                {
                  "name": "expiresAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Reservation"
                },
                {
                  "name": "createdAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Reservation"
                },
                {
                  "name": "confirmedAt",
                  "type": "string",
                  "required": false,
                  "ofEntity": "Reservation"
                },
                {
                  "name": "readyAt",
                  "type": "string",
                  "required": false,
                  "ofEntity": "Reservation"
                },
                {
                  "name": "items",
                  "type": "array",
                  "required": true
                }
              ],
              "ports": [
                "Reservation"
              ],
              "rulesApplied": [
                "reservationRequiresAuthentication",
                "reservationStatusReflectsStage"
              ],
              "transactional": false,
              "steps": [
                "Resolve customerId from ctx.sessionContext.actorId (actorSession). If missing, throw auth/validation error with rule reservationRequiresAuthentication.",
                "Query Reservation port list filtered by customerId, sorted by createdAt desc (most recent first).",
                "For each reservation, assert status is one of draft|active|ready|delivered|expired|cancelled; if not, raise validation error with rule reservationStatusReflectsStage.",
                "Map results to output shape: reservationId, status, expiresAt, createdAt, confirmedAt, readyAt, items (productId, quantity) from the reservation's items collection (ReservationItem).",
                "Return { reservations } list."
              ],
              "outputShape": {
                "kind": "list",
                "fields": [
                  {
                    "name": "reservationId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Reservation.reservationId"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Reservation.status"
                  },
                  {
                    "name": "expiresAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Reservation.expiresAt"
                  },
                  {
                    "name": "createdAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Reservation.createdAt"
                  },
                  {
                    "name": "confirmedAt",
                    "type": "string",
                    "required": false,
                    "fieldRef": "Reservation.confirmedAt"
                  },
                  {
                    "name": "readyAt",
                    "type": "string",
                    "required": false,
                    "fieldRef": "Reservation.readyAt"
                  },
                  {
                    "name": "items",
                    "type": "array",
                    "required": true,
                    "item": {
                      "fields": [
                        {
                          "name": "productId",
                          "type": "string",
                          "required": true,
                          "fieldRef": "ReservationItem.productId"
                        },
                        {
                          "name": "quantity",
                          "type": "number",
                          "required": true,
                          "fieldRef": "ReservationItem.quantity"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "repaired missing defs.ts by submitting usecase definition for viewMyReservations",
          "inputs from actorSession are resolved from context and excluded from public input"
        ]
      }
    },
    "status": "completed",
    "stepId": 12,
    "interaction": null,
    "nextSteps": null
  }
}
