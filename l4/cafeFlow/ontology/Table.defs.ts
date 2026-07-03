/// <mls fileReference="_102049_/l4/cafeFlow/ontology/Table.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityTable = {
  "entityId": "Table",
  "title": "Mesa",
  "description": "Identificador de mesa usado pelo atendente ao lançar pedidos dine-in — dado de referência estável.",
  "ownership": "mdmOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "tableId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da mesa"
    },
    {
      "fieldId": "number",
      "type": "string",
      "required": true,
      "description": "Número ou código de identificação visual da mesa (ex: 01, 12, A3)"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": false,
      "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação da mesa no sistema",
      "enum": [
        "active",
        "inactive"
      ]
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
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityTable;
