{
  "savedAt": "2026-07-19T22:43:18.271Z",
  "agentName": "agentCbSeeds",
  "stepId": 61,
  "planning": {
    "planId": "cb-gen-seeds-w3-r1-1784500971579",
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
          "summary": "Reservations in pending, confirmed, fulfilled, and cancelled states with 24h expiry; in-store payments posted for fulfilled and voided for a mistaken charge, linked one-to-one.",
          "localTables": [
            {
              "tableId": "Reservation",
              "rows": [
                {
                  "key": "pendingAna",
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
                      "value": "2026-07-07T10:15:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Ana Silva"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 11 98765-4321"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-08T10:15:00.000Z"
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
                      "name": "updatedAt",
                      "value": "2026-07-07T10:15:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "confirmedBruno",
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
                      "value": null
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-06T14:30:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Bruno Costa"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 11 97654-3210"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-07T14:30:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": "2026-07-06T15:00:00.000Z"
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
                      "name": "updatedAt",
                      "value": "2026-07-06T15:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "fulfilledCarla",
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
                        "ref": "local:Payment.postedCarla"
                      }
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T11:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Carla Mendes"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 21 99876-5432"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-03T11:00:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": "2026-07-02T11:45:00.000Z"
                    },
                    {
                      "name": "fulfilledAt",
                      "value": "2026-07-03T10:20:00.000Z"
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
                      "name": "updatedAt",
                      "value": "2026-07-03T10:20:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "cancelledDiego",
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
                      "value": {
                        "ref": "local:Payment.voidedDiego"
                      }
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-04T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Diego Alves"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 31 91234-5678"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-05T09:00:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": "2026-07-04T09:30:00.000Z"
                    },
                    {
                      "name": "fulfilledAt",
                      "value": null
                    },
                    {
                      "name": "cancelledAt",
                      "value": "2026-07-05T10:05:00.000Z"
                    },
                    {
                      "name": "cancellationReason",
                      "value": "Expired without pickup; mistaken payment voided"
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-05T10:05:00.000Z"
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
                  "key": "postedCarla",
                  "columns": [
                    {
                      "name": "payment_id",
                      "value": null
                    },
                    {
                      "name": "reservation_id",
                      "value": {
                        "ref": "local:Reservation.fulfilledCarla"
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
                      "value": "2026-07-03T10:18:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "amount",
                      "value": 149.9
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
                    }
                  ],
                  "children": []
                },
                {
                  "key": "voidedDiego",
                  "columns": [
                    {
                      "name": "payment_id",
                      "value": null
                    },
                    {
                      "name": "reservation_id",
                      "value": {
                        "ref": "local:Reservation.cancelledDiego"
                      }
                    },
                    {
                      "name": "method",
                      "value": "creditCard"
                    },
                    {
                      "name": "status",
                      "value": "voided"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-04T09:40:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "amount",
                      "value": 59.9
                    },
                    {
                      "name": "receivedBy",
                      "value": {
                        "ref": "actor:atendente.u2"
                      }
                    },
                    {
                      "name": "voidedAt",
                      "value": "2026-07-05T10:00:00.000Z"
                    },
                    {
                      "name": "voidReason",
                      "value": "Customer did not pick up; charge reversed in store"
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
          "Wave 3: Reservation core lifecycle pending/confirmed/fulfilled/cancelled with 24h expiresAt",
          "Payment events only for reservations that produced them: posted in-store for fulfilled, voided for cancelled",
          "FKs via local refs both ways on oneToOne; receivedBy uses atendente actors",
          "Contact name/phone on all reservations; amounts in payment details"
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
