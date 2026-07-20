{
  "savedAt": "2026-07-20T00:30:17.039Z",
  "agentName": "agentCbUsecase",
  "stepId": 14,
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
                "Load reservations via Reservation port (resolveRepository)",
                "Inline reservationStatuses: keep only items whose status is one of pending|confirmed|fulfilled|cancelled; if statusFilter is provided, validate it is one of those values (else validation error with rule id reservationStatuses) and retain only matching status",
                "When searchTerm is provided, filter where customerName, customerPhone or reservationId contains the term (case-insensitive)",
                "Inline reservationValidity24h: for each pending reservation, ensure expiresAt reflects createdAt + 24h (surface the stored expiresAt; do not invent a different validity window)",
                "Sort by createdAt descending",
                "Apply optional page/pageSize pagination",
                "Project each item to reservationId, customerName, customerPhone, status, expiresAt, createdAt, updatedAt and return the list"
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
          "list query browseReservations on Reservation port",
          "public inputs: searchTerm, statusFilter, page, pageSize",
          "actorSession actorId resolved from context only",
          "output pinned to outputShape fields",
          "rules reservationStatuses + reservationValidity24h applied inline",
          "no mutation / no eventWrites on read"
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
