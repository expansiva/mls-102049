/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/promotionSuggestion.defs.ts" enhancement="_blank"/>

export const promotionSuggestionTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "promotionSuggestion",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 46,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "promotionSuggestion",
      "tableName": "promotion_suggestions",
      "moduleId": "cafeFlow",
      "title": "Sugestões de Promoção",
      "purpose": "Guardar sugestões geradas por IA para o gerente.",
      "ownership": "moduleOwned",
      "rootEntity": "PromotionSuggestion",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "promotion_suggestion_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da sugestão de promoção."
        },
        {
          "name": "title",
          "type": "string",
          "nullable": false,
          "description": "Título curto da sugestão de promoção."
        },
        {
          "name": "suggestion_text",
          "type": "text",
          "nullable": false,
          "description": "Descrição detalhada da promoção sugerida."
        },
        {
          "name": "period_start",
          "type": "date",
          "nullable": false,
          "description": "Data inicial do período analisado para a sugestão."
        },
        {
          "name": "period_end",
          "type": "date",
          "nullable": false,
          "description": "Data final do período analisado para a sugestão."
        },
        {
          "name": "rationale",
          "type": "text",
          "nullable": true,
          "description": "Justificativa com base nas métricas agregadas."
        },
        {
          "name": "status",
          "type": "string",
          "nullable": false,
          "default": "ativa",
          "description": "Status atual da sugestão (ativa, arquivada)."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do registro."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "primaryKey": [
        "promotion_suggestion_id"
      ],
      "foreignRefs": [],
      "indexes": [
        {
          "indexName": "idx_promotion_suggestions_period",
          "columns": [
            "period_start",
            "period_end"
          ],
          "unique": false,
          "reason": "Filtro por período analisado nas leituras do dashboard e IA."
        },
        {
          "indexName": "idx_promotion_suggestions_status",
          "columns": [
            "status"
          ],
          "unique": false,
          "reason": "Listagem rápida por status."
        },
        {
          "indexName": "idx_promotion_suggestions_created_at",
          "columns": [
            "created_at"
          ],
          "unique": false,
          "reason": "Ordenação e filtragem por data de criação."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "jsonSchemaRef": "PromotionSuggestionDetails",
        "reason": "Armazenar métricas agregadas e dados auxiliares da IA sem impacto em filtros principais."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [
          "PromotionSuggestion"
        ],
        "updatedByLayer": "layer_3_usecases"
      },
      "accessPolicy": {
        "directAccessAllowedFor": [
          "layer_3_usecases"
        ],
        "forbiddenFor": [
          "pages",
          "layer_2_controllers",
          "agents"
        ]
      },
      "rulesApplied": [
        "aiSummarySourceRule"
      ]
    },
    "defsPlan": {
      "fileName": "tables/promotionSuggestion.defs.ts",
      "exportName": "promotionSuggestionTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default promotionSuggestionTableDefinition;
