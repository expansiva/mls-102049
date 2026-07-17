{
  "savedAt": "2026-07-17T04:27:16.461Z",
  "agentName": "agentCbDomainEntity",
  "stepId": 5,
  "planning": {
    "planId": "cb-gen-domain",
    "dependsOn": [
      "cb-lock"
    ],
    "executionMode": "sequential",
    "executionHost": "client"
  },
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitDomainEntities",
      "arguments": {
        "status": "ok",
        "result": {
          "items": [
            {
              "entityId": "Product",
              "title": "Product",
              "fields": [
                {
                  "fieldId": "productId",
                  "type": "uuid",
                  "required": true,
                  "description": "Identificador único do produto no catálogo."
                },
                {
                  "fieldId": "name",
                  "type": "string",
                  "required": true,
                  "description": "Nome do produto usado na busca insensível a maiúsculas e minúsculas com correspondência parcial."
                },
                {
                  "fieldId": "description",
                  "type": "text",
                  "required": false,
                  "description": "Descrição detalhada do produto exibida na página de detalhes."
                },
                {
                  "fieldId": "price",
                  "type": "money",
                  "required": true,
                  "description": "Preço do produto utilizado na filtragem por faixa de valor."
                },
                {
                  "fieldId": "petTypeId",
                  "type": "uuid",
                  "required": true,
                  "description": "Referência ao tipo de pet indicado para o produto, usado como filtro de catálogo."
                },
                {
                  "fieldId": "categoryId",
                  "type": "uuid",
                  "required": true,
                  "description": "Referência à categoria do catálogo à qual o produto pertence, usada como filtro."
                },
                {
                  "fieldId": "highlighted",
                  "type": "boolean",
                  "required": true,
                  "description": "Indica se o produto foi manualmente marcado como destaque pela loja; só pode ser verdadeiro quando o produto está disponível."
                },
                {
                  "fieldId": "status",
                  "type": "string",
                  "required": true,
                  "description": "Disponibilidade do produto na vitrine; produtos indisponíveis não aparecem na vitrine nem podem ser reservados.",
                  "enum": [
                    "available",
                    "unavailable"
                  ]
                },
                {
                  "fieldId": "createdAt",
                  "type": "datetime",
                  "required": true,
                  "description": "Data e hora de criação do produto no catálogo."
                },
                {
                  "fieldId": "updatedAt",
                  "type": "datetime",
                  "required": true,
                  "description": "Data e hora da última atualização dos dados do produto."
                }
              ],
              "valueObjects": [],
              "invariants": [
                "highlighted = true requires status = 'available'"
              ],
              "statusEnum": [
                "available",
                "unavailable"
              ]
            },
            {
              "entityId": "Reservation",
              "title": "Reservation",
              "fields": [
                {
                  "fieldId": "reservationId",
                  "type": "uuid",
                  "required": true,
                  "description": "Identificador único da reserva"
                },
                {
                  "fieldId": "customerId",
                  "type": "uuid",
                  "required": true,
                  "description": "Cliente autenticado que criou a reserva"
                },
                {
                  "fieldId": "status",
                  "type": "string",
                  "required": true,
                  "description": "Estágio atual da reserva no ciclo de vida",
                  "enum": [
                    "draft",
                    "active",
                    "ready",
                    "delivered",
                    "expired",
                    "cancelled"
                  ]
                },
                {
                  "fieldId": "confirmedAt",
                  "type": "datetime",
                  "required": false,
                  "description": "Momento em que a reserva saiu de rascunho e foi confirmada como ativa"
                },
                {
                  "fieldId": "expiresAt",
                  "type": "datetime",
                  "required": true,
                  "description": "Data e hora limite para retirada, 24 horas após a confirmação"
                },
                {
                  "fieldId": "readyAt",
                  "type": "datetime",
                  "required": false,
                  "description": "Momento em que a loja marcou a reserva como pronta para retirada após separar os produtos"
                },
                {
                  "fieldId": "deliveredAt",
                  "type": "datetime",
                  "required": false,
                  "description": "Momento em que o cliente retirou os produtos na loja física"
                },
                {
                  "fieldId": "expiredAt",
                  "type": "datetime",
                  "required": false,
                  "description": "Momento em que a reserva expirou automaticamente por não retirada em 24 horas"
                },
                {
                  "fieldId": "cancelledAt",
                  "type": "datetime",
                  "required": false,
                  "description": "Momento em que a reserva foi cancelada pelo cliente ou pela loja"
                },
                {
                  "fieldId": "cancelReason",
                  "type": "text",
                  "required": false,
                  "description": "Motivo informado no cancelamento da reserva"
                },
                {
                  "fieldId": "paymentId",
                  "type": "uuid",
                  "required": false,
                  "description": "Referência ao pagamento presencial associado quando a reserva é entregue"
                },
                {
                  "fieldId": "createdAt",
                  "type": "datetime",
                  "required": true,
                  "description": "Momento de criação da reserva"
                },
                {
                  "fieldId": "updatedAt",
                  "type": "datetime",
                  "required": true,
                  "description": "Momento da última atualização da reserva"
                }
              ],
              "valueObjects": [
                {
                  "name": "ReservationItem",
                  "collection": true,
                  "fields": [
                    {
                      "fieldId": "reservationItemId",
                      "type": "uuid",
                      "required": true,
                      "description": "Identificador único do item da reserva."
                    },
                    {
                      "fieldId": "reservationId",
                      "type": "uuid",
                      "required": true,
                      "description": "Referência à reserva à qual este item pertence."
                    },
                    {
                      "fieldId": "productId",
                      "type": "uuid",
                      "required": true,
                      "description": "Referência ao produto do catálogo que está sendo reservado."
                    },
                    {
                      "fieldId": "quantity",
                      "type": "number",
                      "required": true,
                      "description": "Quantidade do produto reservada pelo cliente neste item."
                    },
                    {
                      "fieldId": "createdAt",
                      "type": "datetime",
                      "required": true,
                      "description": "Data e hora em que o item da reserva foi criado."
                    },
                    {
                      "fieldId": "updatedAt",
                      "type": "datetime",
                      "required": true,
                      "description": "Data e hora da última atualização do item da reserva."
                    }
                  ]
                }
              ],
              "invariants": [
                "status != 'draft' requires confirmedAt set",
                "status = 'ready' or 'delivered' requires readyAt set",
                "status = 'delivered' requires deliveredAt set",
                "status = 'expired' requires expiredAt set",
                "status = 'cancelled' requires cancelledAt set",
                "paymentId set requires status = 'delivered'",
                "expiresAt is 24 hours after confirmedAt"
              ],
              "statusEnum": [
                "draft",
                "active",
                "ready",
                "delivered",
                "expired",
                "cancelled"
              ]
            },
            {
              "entityId": "Payment",
              "title": "Payment",
              "fields": [
                {
                  "fieldId": "paymentId",
                  "type": "uuid",
                  "required": true,
                  "description": "Identificador único do registro de pagamento."
                },
                {
                  "fieldId": "reservationId",
                  "type": "uuid",
                  "required": true,
                  "description": "Referência à reserva cuja retirada gerou este pagamento."
                },
                {
                  "fieldId": "amount",
                  "type": "money",
                  "required": true,
                  "description": "Valor total pago presencialmente na retirada da reserva."
                },
                {
                  "fieldId": "paymentMethod",
                  "type": "string",
                  "required": true,
                  "description": "Meio utilizado para o pagamento na loja física.",
                  "enum": [
                    "cash",
                    "creditCard",
                    "debitCard",
                    "pix"
                  ]
                },
                {
                  "fieldId": "status",
                  "type": "string",
                  "required": true,
                  "description": "Situação atual do pagamento: registrado ou anulado.",
                  "enum": [
                    "posted",
                    "voided"
                  ]
                },
                {
                  "fieldId": "voidedAt",
                  "type": "datetime",
                  "required": false,
                  "description": "Data e hora em que o pagamento foi anulado por evento compensatório."
                },
                {
                  "fieldId": "voidReason",
                  "type": "text",
                  "required": false,
                  "description": "Motivo da anulação do pagamento, registrado quando há estorno ou cancelamento."
                },
                {
                  "fieldId": "createdAt",
                  "type": "datetime",
                  "required": true,
                  "description": "Data e hora em que o pagamento foi registrado na loja."
                }
              ],
              "valueObjects": [],
              "invariants": [],
              "statusEnum": [
                "posted",
                "voided"
              ]
            }
          ]
        },
        "questions": [],
        "trace": [
          "mapped aggregates Product, Reservation, Payment",
          "embedded ReservationItem -> valueObject collection",
          "added invariants per descriptions"
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
