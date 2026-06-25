/// <mls fileReference="_102049_/l5/cafeFlow/ontology/StockUnit.defs.ts" enhancement="_blank"/>

export const StockUnitEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "StockUnit",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 38,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "StockUnit",
      "title": "Unidade de Estoque",
      "description": "Catálogo de unidades de medida do estoque.",
      "ownership": "mdmOwned",
      "fields": [
        {
          "fieldId": "stockUnitId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da unidade de estoque."
        },
        {
          "fieldId": "name",
          "type": "string",
          "required": true,
          "description": "Nome da unidade de medida."
        },
        {
          "fieldId": "abbreviation",
          "type": "string",
          "required": true,
          "description": "Abreviação da unidade de medida (ex.: g, kg, ml)."
        },
        {
          "fieldId": "description",
          "type": "text",
          "required": false,
          "description": "Descrição complementar da unidade de medida."
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

export default StockUnitEntityDefinition;
