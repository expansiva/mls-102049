/// <mls fileReference="_102049_/l5/cafeFlow/ontology/TableSeat.defs.ts" enhancement="_blank"/>

export const TableSeatEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "TableSeat",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "TableSeat",
      "title": "Mesa/Comanda",
      "description": "Referência de mesa ou comanda para pedidos no salão.",
      "ownership": "moduleOwned",
      "fields": [
        {
          "fieldId": "tableSeatId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da mesa/comanda."
        },
        {
          "fieldId": "label",
          "type": "string",
          "required": true,
          "description": "Nome curto ou código exibido da mesa/comanda."
        },
        {
          "fieldId": "seatType",
          "type": "string",
          "required": true,
          "description": "Tipo de referência usada no salão.",
          "enum": [
            "mesa",
            "comanda"
          ]
        },
        {
          "fieldId": "capacity",
          "type": "number",
          "required": false,
          "description": "Quantidade máxima de pessoas associadas à mesa."
        },
        {
          "fieldId": "isActive",
          "type": "boolean",
          "required": true,
          "description": "Indica se a mesa/comanda está ativa para uso."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "rulesApplied": []
    }
  }
} as const;

export default TableSeatEntityDefinition;
