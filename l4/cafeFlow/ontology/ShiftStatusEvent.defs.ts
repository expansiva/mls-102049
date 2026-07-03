/// <mls fileReference="_102049_/l4/cafeFlow/ontology/ShiftStatusEvent.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityShiftStatusEvent = {
  "entityId": "ShiftStatusEvent",
  "title": "Evento de Status do Turno",
  "description": "Registro imutável de abertura e fechamento de turno com totais consolidados.",
  "ownership": "moduleOwned",
  "kind": "event",
  "eventPolicy": {
    "purpose": "audit",
    "retentionDays": 365
  },
  "fields": [
    {
      "fieldId": "shiftStatusEventId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do evento de status do turno."
    },
    {
      "fieldId": "shiftId",
      "type": "Shift",
      "required": true,
      "description": "Referência ao turno ao qual o evento pertence."
    },
    {
      "fieldId": "eventType",
      "type": "string",
      "required": true,
      "description": "Tipo do evento de status: abertura ou fechamento do turno.",
      "enum": [
        "abertura",
        "fechamento"
      ]
    },
    {
      "fieldId": "consolidatedTotal",
      "type": "money",
      "required": true,
      "description": "Total consolidado (vendas/movimentações) registrado no momento do evento."
    },
    {
      "fieldId": "recordedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que o evento ocorreu."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro no sistema."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro no sistema."
    }
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityShiftStatusEvent;
