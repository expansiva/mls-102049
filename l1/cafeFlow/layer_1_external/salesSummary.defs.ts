/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/salesSummary.defs.ts" enhancement="_blank"/>

export const salesSummaryTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "salesSummary",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 47,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "salesSummary",
      "tableName": "sales_summaries",
      "moduleId": "cafeFlow",
      "title": "Resumos de Vendas",
      "purpose": "Persistir resumos gerados por IA para consulta do gerente.",
      "ownership": "moduleOwned",
      "rootEntity": "SalesSummary",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "sales_summary_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único do resumo de vendas."
        },
        {
          "name": "summary_date",
          "type": "date",
          "nullable": false,
          "description": "Data do resumo de vendas."
        },
        {
          "name": "daily_shift_id",
          "type": "uuid",
          "nullable": true,
          "description": "Referência opcional ao turno do dia relacionado ao resumo."
        },
        {
          "name": "total_sales",
          "type": "money",
          "nullable": false,
          "description": "Total de vendas do dia."
        },
        {
          "name": "total_orders",
          "type": "number",
          "nullable": false,
          "description": "Quantidade total de pedidos do dia."
        },
        {
          "name": "average_ticket",
          "type": "money",
          "nullable": true,
          "description": "Ticket médio do dia."
        },
        {
          "name": "highlights",
          "type": "text",
          "nullable": true,
          "description": "Destaques e observações geradas pela IA."
        },
        {
          "name": "summary_status",
          "type": "string",
          "nullable": false,
          "default": "gerado",
          "description": "Estado atual do resumo de vendas."
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
        "sales_summary_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "daily_shift_id",
          "targetEntity": "DailyShift",
          "targetOwnership": "moduleOwned",
          "reason": "Vincular o resumo ao turno diário consolidado."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_sales_summaries_summary_date",
          "columns": [
            "summary_date"
          ],
          "reason": "Filtrar e listar resumos por data."
        },
        {
          "indexName": "idx_sales_summaries_daily_shift",
          "columns": [
            "daily_shift_id"
          ],
          "reason": "Buscar resumos associados a um turno."
        },
        {
          "indexName": "ux_sales_summaries_date_shift",
          "columns": [
            "summary_date",
            "daily_shift_id"
          ],
          "unique": true,
          "reason": "Evitar duplicidade de resumo por data e turno."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "reason": "Armazenar dados adicionais do resumo gerado pela IA sem impacto em filtros principais."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": false,
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
      "fileName": "tables/salesSummary.defs.ts",
      "exportName": "salesSummaryTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default salesSummaryTableDefinition;
