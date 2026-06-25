/// <mls fileReference="_102049_/l5/cafeFlow/ontology/DailyShift.defs.ts" enhancement="_blank"/>

export const DailyShiftEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "DailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 38,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "DailyShift",
      "title": "Turno Diário",
      "description": "Registro do turno do dia com abertura, fechamento e consolidação de vendas.",
      "ownership": "moduleOwned",
      "fields": [
        {
          "fieldId": "dailyShiftId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do turno diário."
        },
        {
          "fieldId": "businessDate",
          "type": "date",
          "required": true,
          "description": "Data de referência do turno."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Estado atual do turno diário.",
          "enum": [
            "aberto",
            "fechado"
          ]
        },
        {
          "fieldId": "openedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de abertura do turno."
        },
        {
          "fieldId": "closedAt",
          "type": "datetime",
          "required": false,
          "description": "Data e hora de fechamento do turno."
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
      "statusEnum": [
        "aberto",
        "fechado"
      ],
      "lifecycleStates": [
        "aberto",
        "fechado"
      ],
      "rulesApplied": [
        "shiftClosureRule"
      ]
    }
  }
} as const;

export default DailyShiftEntityDefinition;
