{
  "savedAt": "2026-07-20T00:04:52.176Z",
  "agentName": "agentCbSeeds",
  "stepId": 60,
  "planning": {
    "planId": "cb-gen-seeds-w3-r2-1784505863532",
    "dependsOn": [],
    "executionMode": "sequential",
    "executionHost": "client"
  },
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitSeedScenario",
      "arguments": {
        "status": "ok",
        "result": {
          "summary": "Four reservations covering pending, confirmed, fulfilled, and cancelled; in-store payments only on confirmed and fulfilled (posted), unpaid rows use null payment FKs; 24h expiry and contact fields set.",
          "localTables": [
            {
              "tableId": "Reservation",
              "rows": [
                {
                  "key": "resPending",
                  "columns": [
                    {
                      "name": "reservation_id",
                      "value": null
                    },
                    {
                      "name": "status",
                      "value": "pending"
                    },
                    {
                      "name": "payment_id",
                      "value": null
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-06T10:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Ana Souza"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 11 98765-4321"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-07T10:00:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": null
                    },
                    {
                      "name": "fulfilledAt",
                      "value": null
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "paymentId",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-06T10:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "resConfirmed",
                  "columns": [
                    {
                      "name": "reservation_id",
                      "value": null
                    },
                    {
                      "name": "status",
                      "value": "confirmed"
                    },
                    {
                      "name": "payment_id",
                      "value": {
                        "ref": "local:Payment.payConfirmed"
                      }
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-03T14:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Bruno Lima"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 21 99876-5432"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-04T14:00:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": "2026-07-03T15:30:00.000Z"
                    },
                    {
                      "name": "fulfilledAt",
                      "value": null
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "paymentId",
                      "value": {
                        "ref": "local:Payment.payConfirmed"
                      }
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-03T15:30:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "resFulfilled",
                  "columns": [
                    {
                      "name": "reservation_id",
                      "value": null
                    },
                    {
                      "name": "status",
                      "value": "fulfilled"
                    },
                    {
                      "name": "payment_id",
                      "value": {
                        "ref": "local:Payment.payFulfilled"
                      }
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Carla Mendes"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 31 97654-3210"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-03T09:00:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": "2026-07-02T10:15:00.000Z"
                    },
                    {
                      "name": "fulfilledAt",
                      "value": "2026-07-02T16:45:00.000Z"
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "paymentId",
                      "value": {
                        "ref": "local:Payment.payFulfilled"
                      }
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-02T16:45:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "resCancelled",
                  "columns": [
                    {
                      "name": "reservation_id",
                      "value": null
                    },
                    {
                      "name": "status",
                      "value": "cancelled"
                    },
                    {
                      "name": "payment_id",
                      "value": null
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-01T11:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Diego Alves"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 41 96543-2109"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-02T11:00:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": null
                    },
                    {
                      "name": "fulfilledAt",
                      "value": null
                    },
                    {
                      "name": "cancelledAt",
                      "value": "2026-07-02T12:00:00.000Z"
                    },
                    {
                      "name": "cancellationReason",
                      "value": "Customer did not pick up within 24 hours"
                    },
                    {
                      "name": "paymentId",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-02T12:00:00.000Z"
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "tableId": "Payment",
              "rows": [
                {
                  "key": "payConfirmed",
                  "columns": [
                    {
                      "name": "payment_id",
                      "value": null
                    },
                    {
                      "name": "reservation_id",
                      "value": {
                        "ref": "local:Reservation.resConfirmed"
                      }
                    },
                    {
                      "name": "method",
                      "value": "pix"
                    },
                    {
                      "name": "status",
                      "value": "posted"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-03T15:25:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "amount",
                      "value": 159.9
                    },
                    {
                      "name": "receivedBy",
                      "value": {
                        "ref": "actor:atendente.u1"
                      }
                    },
                    {
                      "name": "voidedAt",
                      "value": null
                    },
                    {
                      "name": "voidReason",
                      "value": null
                    },
                    {
                      "name": "reservationId",
                      "value": {
                        "ref": "local:Reservation.resConfirmed"
                      }
                    }
                  ],
                  "children": []
                },
                {
                  "key": "payFulfilled",
                  "columns": [
                    {
                      "name": "payment_id",
                      "value": null
                    },
                    {
                      "name": "reservation_id",
                      "value": {
                        "ref": "local:Reservation.resFulfilled"
                      }
                    },
                    {
                      "name": "method",
                      "value": "creditCard"
                    },
                    {
                      "name": "status",
                      "value": "posted"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T10:10:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "amount",
                      "value": 89.5
                    },
                    {
                      "name": "receivedBy",
                      "value": {
                        "ref": "actor:atendente.u2"
                      }
                    },
                    {
                      "name": "voidedAt",
                      "value": null
                    },
                    {
                      "name": "voidReason",
                      "value": null
                    },
                    {
                      "name": "reservationId",
                      "value": {
                        "ref": "local:Reservation.resFulfilled"
                      }
                    }
                  ],
                  "children": []
                }
              ]
            }
          ],
          "mdmEntities": []
        },
        "questions": [],
        "trace": [
          "Wave 3: Reservation core + Payment event only",
          "States: pending (open), confirmed, fulfilled, cancelled",
          "payment_id/paymentId null on pending and cancelled; symbolic local refs on paid rows",
          "Payments posted in-store by atendente actors; 24h expiresAt; contact fields set"
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
