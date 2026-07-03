/// <mls fileReference="_102049_/l4/cafeFlow/ontology/Shift.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityShift = {
  "entityId": "Shift",
  "title": "Turno Diário",
  "description": "Turno de operação de um dia: aberto no início, acumula vendas e movimentações, fechado com relatório consolidado.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "shiftId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do turno"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "enum": [
        "open",
        "closed"
      ],
      "description": "Status atual do turno: aberto ou fechado"
    },
    {
      "fieldId": "openedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de abertura do turno"
    },
    {
      "fieldId": "closedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora de fechamento do turno"
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
  "statusEnum": [
    "open",
    "closed"
  ],
  "lifecycleStates": [
    "open",
    "closed"
  ],
  "rulesApplied": [
    "orderRequiresOpenShift",
    "shiftClosingRequiresSettledOrders"
  ]
} as const;

export default cafeFlowEntityShift;
