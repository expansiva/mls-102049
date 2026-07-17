/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/reservation.defs.ts" enhancement="_blank"/>

export const reservationDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Reservation",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
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
  }
} as const;

export default reservationDomainEntity;

export const pipeline = [
  {
    "id": "reservation__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/reservation.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/reservation.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
