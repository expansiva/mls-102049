/// <mls fileReference="_102049_/l4/petShop/ontology/Reservation.defs.ts" enhancement="_blank"/>

export const petShopEntityReservation = {
  "entityId": "Reservation",
  "title": "Reserva",
  "description": "Reserva de produtos feita pelo cliente para retirada presencial na loja, contendo dados de contato (nome e telefone), prazo de validade de 24 horas e status de atendimento controlado pelo atendente.",
  "kind": "core",
  "ownership": "moduleOwned",
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
  "statusEnum": [
    "pending",
    "confirmed",
    "fulfilled",
    "cancelled"
  ],
  "lifecycleStates": [
    "pending",
    "confirmed",
    "fulfilled",
    "cancelled"
  ]
} as const;

export default petShopEntityReservation;
