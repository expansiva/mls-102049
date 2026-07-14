/// <mls fileReference="_102049_/l4/petShop/ontology/ShiftAssignment.defs.ts" enhancement="_blank"/>

export const petShopEntityShiftAssignment = {
  "entityId": "ShiftAssignment",
  "title": "Alocação de Operador em Turno",
  "description": "Vínculo operacional entre um operador e um turno, definindo a capacidade de atendimentos simultâneos disponíveis naquele horário.",
  "kind": "core",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "shiftAssignmentId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da alocação de operador em turno."
    },
    {
      "fieldId": "operatorId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao operador alocado neste turno."
    },
    {
      "fieldId": "shiftId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao turno de trabalho ao qual o operador está alocado."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que a alocação foi criada."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização da alocação."
    }
  ]
} as const;

export default petShopEntityShiftAssignment;
