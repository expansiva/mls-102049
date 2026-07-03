/// <mls fileReference="_102049_/l4/cafeFlow/ontology/OrderStatusEvent.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrderStatusEvent = {
  "entityId": "OrderStatusEvent",
  "title": "Evento de Status do Pedido",
  "description": "Registro imutável de cada transição de status do pedido (criado, em preparo, pronto, entregue, cancelado).",
  "ownership": "moduleOwned",
  "kind": "event",
  "eventPolicy": {
    "purpose": "audit",
    "retentionDays": 365
  },
  "fields": [
    {
      "fieldId": "orderStatusEventId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do evento de status do pedido."
    },
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao pedido cujo status sofreu transição."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Novo status do pedido após a transição.",
      "enum": [
        "criado",
        "em preparo",
        "pronto",
        "entregue",
        "cancelado"
      ]
    },
    {
      "fieldId": "previousStatus",
      "type": "string",
      "required": false,
      "description": "Status anterior do pedido antes da transição.",
      "enum": [
        "criado",
        "em preparo",
        "pronto",
        "entregue",
        "cancelado"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro do evento."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro."
    }
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityOrderStatusEvent;
