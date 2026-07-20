{
  "savedAt": "2026-07-19T23:25:16.737Z",
  "agentName": "agentCbSeeds",
  "stepId": 101,
  "planning": {
    "planId": "cb-gen-seeds-w3-r2-1784503500641",
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
          "summary": "Reservations in pending, confirmed, fulfilled, and cancelled states; in-store payments only for paid reservations (posted), with null payment links when unpaid.",
          "localTables": [
            {
              "tableId": "Reservation",
              "rows": [
                {
                  "key": "pendingWagner",
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
                      "value": "2026-07-02T10:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Wagner Silva"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 11 98765-4321"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-03T10:00:00.000Z"
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
                      "value": "2026-07-02T10:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "confirmedAna",
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
                        "ref": "local:Payment.payAna"
                      }
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T14:30:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Ana Costa"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 11 91234-5678"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-03T14:30:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": "2026-07-02T15:00:00.000Z"
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
                        "ref": "local:Payment.payAna"
                      }
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-02T15:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "fulfilledBruno",
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
                        "ref": "local:Payment.payBruno"
                      }
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-01T11:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Bruno Mendes"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 21 99876-5432"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-02T11:00:00.000Z"
                    },
                    {
                      "name": "confirmedAt",
                      "value": "2026-07-01T12:00:00.000Z"
                    },
                    {
                      "name": "fulfilledAt",
                      "value": "2026-07-01T16:30:00.000Z"
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
                        "ref": "local:Payment.payBruno"
                      }
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-01T16:30:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "cancelledCarla",
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
                      "value": "2026-07-03T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "customerName",
                      "value": "Carla Dias"
                    },
                    {
                      "name": "customerPhone",
                      "value": "+55 31 97777-8888"
                    },
                    {
                      "name": "expiresAt",
                      "value": "2026-07-04T09:00:00.000Z"
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
                      "value": "2026-07-04T10:15:00.000Z"
                    },
                    {
                      "name": "cancellationReason",
                      "value": "Expired after 24h without pickup"
                    },
                    {
                      "name": "paymentId",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-04T10:15:00.000Z"
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
                  "key": "payAna",
                  "columns": [
                    {
                      "name": "payment_id",
                      "value": null
                    },
                    {
                      "name": "reservation_id",
                      "value": {
                        "ref": "local:Reservation.confirmedAna"
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
                      "value": "2026-07-02T15:00:00.000Z"
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
                  "key": "payBruno",
                  "columns": [
                    {
                      "name": "payment_id",
                      "value": null
                    },
                    {
                      "name": "reservation_id",
                      "value": {
                        "ref": "local:Reservation.fulfilledBruno"
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
                      "value": "2026-07-01T16:30:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "amount",
                      "value": 159.5
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
          "Wave 3: Reservation + Payment only",
          "Fixed unpaid reservations to use JSON null for payment_id/paymentId",
          "Paid confirmed/fulfilled link to Payment via local refs",
          "24h expiresAt; in-store methods; receivedBy actors"
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
