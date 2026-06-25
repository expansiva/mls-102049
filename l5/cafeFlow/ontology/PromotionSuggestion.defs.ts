/// <mls fileReference="_102049_/l5/cafeFlow/ontology/PromotionSuggestion.defs.ts" enhancement="_blank"/>

export const PromotionSuggestionEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "PromotionSuggestion",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 39,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "PromotionSuggestion",
      "title": "Sugestão de Promoção",
      "description": "Sugestões geradas pela IA com base nos últimos 7 dias.",
      "ownership": "moduleOwned",
      "kind": "entity",
      "fields": [
        {
          "fieldId": "promotionSuggestionId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da sugestão de promoção."
        },
        {
          "fieldId": "title",
          "type": "string",
          "required": true,
          "description": "Título curto da sugestão de promoção."
        },
        {
          "fieldId": "suggestionText",
          "type": "text",
          "required": true,
          "description": "Descrição detalhada da promoção sugerida."
        },
        {
          "fieldId": "periodStart",
          "type": "date",
          "required": true,
          "description": "Data inicial do período analisado para a sugestão."
        },
        {
          "fieldId": "periodEnd",
          "type": "date",
          "required": true,
          "description": "Data final do período analisado para a sugestão."
        },
        {
          "fieldId": "rationale",
          "type": "text",
          "required": false,
          "description": "Justificativa com base nas métricas agregadas."
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
      "rulesApplied": [
        "aiSummarySourceRule"
      ]
    }
  }
} as const;

export default PromotionSuggestionEntityDefinition;
