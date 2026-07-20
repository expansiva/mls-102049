{
  "savedAt": "2026-07-20T00:34:56.085Z",
  "agentName": "agentCbSeeds",
  "stepId": 53,
  "planning": {
    "planId": "cb-gen-seeds-w3-r1-1784507664364",
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
          "summary": "Wave 3 seeds four reservations across pending/confirmed/fulfilled/cancelled with 24h expiry, contact data, and two in-store posted payments linked one-to-one to the paid reservations.",
          "localTables": [
            {
              "tableId": "Reservation",
              "rows": [
                {
                  "key": "resPending",
                  "columns": [
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
                      "value": "2026-07-03T16:05:00.000Z"
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
                      "value": "2026-07-03T16:05:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "resFulfilled",
                  "columns": [
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
                      "value": "2026-07-02T11:00:00.000Z"
                    },
                    {
                      "name": "fulfilledAt",
                      "value": "2026-07-02T15:30:00.000Z"
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
                      "value": "2026-07-02T15:30:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "resCancelled",
                  "columns": [
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
                      "value": "2026-07-01T12:00:00.000Z"
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
                      "value": "2026-07-02T12:00:00.000Z"
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
                      "value": "2026-07-02T13:15:00.000Z"
                    },
                    {
                      "name": "cancellationReason",
                      "value": "Expired without customer pickup"
                    },
                    {
                      "name": "paymentId",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-02T13:15:00.000Z"
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
                      "value": "2026-07-03T16:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "amount",
                      "value": 89.9
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
                  "key": "payFulfilled",
                  "columns": [
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
                      "value": "2026-07-02T15:25:00.000Z"
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
          "Payments only for paid reservations (confirmed+fulfilled), in-store methods, posted by attendants",
          "Bidirectional one-to-one via symbolic payment_id and reservation_id refs; pending/cancelled unpaid"
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
