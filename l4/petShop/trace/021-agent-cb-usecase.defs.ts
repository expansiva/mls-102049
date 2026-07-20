{
  "savedAt": "2026-07-19T23:59:45.888Z",
  "agentName": "agentCbUsecase",
  "stepId": 21,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "browseReservations",
          "ports": [
            "Reservation",
            "Payment"
          ],
          "functions": [
            {
              "functionName": "browseReservations",
              "inputTypeName": "BrowseReservationsInput",
              "outputTypeName": "BrowseReservationsOutput",
              "input": [
                {
                  "name": "searchTerm",
                  "type": "string",
                  "required": false
                },
                {
                  "name": "statusFilter",
                  "type": "string",
                  "required": false,
                  "fieldRef": "Reservation.status"
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
                  "name": "reservationId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Reservation"
                },
                {
                  "name": "customerName",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Reservation"
                },
                {
                  "name": "customerPhone",
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
                  "name": "updatedAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Reservation"
                }
              ],
              "ports": [
                "Reservation"
              ],
              "rulesApplied": [
                "reservationStatuses",
                "reservationValidity24h"
              ],
              "transactional": false,
              "steps": [
                "Resolve actorId from ctx.sessionContext (actorSession) for audit context only; do not require it as input",
                "Resolve Reservation repository via port",
                "List reservations from Reservation port",
                "Apply reservationStatuses inline: keep only items whose status is one of pending, confirmed, fulfilled, cancelled; if statusFilter is provided, validate it is one of those values and filter to matching status (else validation error with rule id reservationStatuses)",
                "If searchTerm is provided, filter where customerName, customerPhone or reservationId contains the term (case-insensitive)",
                "Apply reservationValidity24h inline for pending items: expiresAt must reflect createdAt + 24h (surface as-is from persisted data; do not invent fields)",
                "Sort by createdAt descending",
                "Apply optional pagination using page and pageSize",
                "Return the list projection: reservationId, customerName, customerPhone, status, expiresAt, createdAt, updatedAt"
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
                    "name": "customerName",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Reservation.customerName"
                  },
                  {
                    "name": "customerPhone",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Reservation.customerPhone"
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
                    "name": "updatedAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Reservation.updatedAt"
                  }
                ]
              }
            }
          ],
          "rulesApplied": [
            "reservationStatuses",
            "reservationValidity24h"
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Removed Payment from usecase-level ports; only Reservation remains to match L4 reads and function.ports",
          "Query list usecase: public inputs searchTerm/statusFilter/page/pageSize; actorSession resolved in context",
          "output[] mirrors outputShape top-level fields verbatim",
          "rulesApplied reservationStatuses and reservationValidity24h applied inline in steps"
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
