/// <mls fileReference="_102049_/l4/cafeFlow/ontology/StockMovementEvent.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockMovementEvent = {
  "entityId": "StockMovementEvent",
  "title": "Evento de Movimentação de Estoque",
  "description": "Registro imutável de cada baixa ou reposição de estoque (tipo, quantidade, motivo, item referenciado).",
  "ownership": "moduleOwned",
  "kind": "event",
  "eventPolicy": {
    "purpose": "audit",
    "retentionDays": 90
  },
  "fields": [
    {
      "fieldId": "stockMovementEventId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do evento de movimentação de estoque"
    },
    {
      "fieldId": "stockItemId",
      "type": "StockItem",
      "required": true,
      "description": "Referência ao item de estoque movimentado"
    },
    {
      "fieldId": "movementType",
      "type": "string",
      "required": true,
      "enum": [
        "baixa",
        "reposicao"
      ],
      "description": "Tipo da movimentação: baixa ou reposição de estoque"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade movimentada"
    },
    {
      "fieldId": "reason",
      "type": "text",
      "required": true,
      "description": "Motivo da movimentação de estoque"
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "rulesApplied": [
    "stockDecrementOnPreparing"
  ]
} as const;

export default cafeFlowEntityStockMovementEvent;
