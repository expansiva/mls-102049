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
        "fieldId": "customerName",
        "type": "string",
        "required": true,
        "description": "Nome do cliente que fez a reserva"
      },
      {
        "fieldId": "customerPhone",
        "type": "string",
        "required": true,
        "description": "Telefone de contato do cliente"
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Status de atendimento da reserva controlado pelo atendente",
        "enum": [
          "pending",
          "confirmed",
          "fulfilled",
          "cancelled"
        ]
      },
      {
        "fieldId": "expiresAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de validade da reserva, 24 horas após o registro"
      },
      {
        "fieldId": "confirmedAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que a reserva foi confirmada pelo atendente"
      },
      {
        "fieldId": "fulfilledAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que a reserva foi atendida com retirada e pagamento confirmado"
      },
      {
        "fieldId": "cancelledAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que a reserva foi cancelada"
      },
      {
        "fieldId": "cancellationReason",
        "type": "text",
        "required": false,
        "description": "Motivo do cancelamento da reserva registrado pelo atendente"
      },
      {
        "fieldId": "paymentId",
        "type": "uuid",
        "required": false,
        "description": "Referência ao pagamento presencial associado quando a reserva é atendida"
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação da reserva"
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização da reserva"
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
            "description": "Identificador único do item de reserva."
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
            "description": "Referência ao produto do catálogo que foi reservado."
          },
          {
            "fieldId": "quantity",
            "type": "number",
            "required": true,
            "description": "Quantidade do produto reservada pelo cliente."
          },
          {
            "fieldId": "createdAt",
            "type": "datetime",
            "required": true,
            "description": "Data e hora de criação do item de reserva."
          },
          {
            "fieldId": "updatedAt",
            "type": "datetime",
            "required": true,
            "description": "Data e hora da última atualização do item de reserva."
          }
        ]
      }
    ],
    "invariants": [
      "expiresAt must be exactly 24 hours after createdAt",
      "status='confirmed' implies confirmedAt is set",
      "status='fulfilled' implies fulfilledAt is set and paymentId is set",
      "status='cancelled' implies cancelledAt is set and cancellationReason is set",
      "confirmedAt, fulfilledAt, cancelledAt (when present) must be on or after createdAt",
      "fulfilledAt and cancelledAt are mutually exclusive",
      "status transitions must be valid: pending -> confirmed|cancelled; confirmed -> fulfilled|cancelled; fulfilled and cancelled are terminal"
    ],
    "statusEnum": [
      "pending",
      "confirmed",
      "fulfilled",
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
