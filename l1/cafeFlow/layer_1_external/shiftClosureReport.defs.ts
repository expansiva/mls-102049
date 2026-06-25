/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/shiftClosureReport.defs.ts" enhancement="_blank"/>

export const shiftClosureReportTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "shiftClosureReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 49,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "shiftClosureReport",
      "tableName": "shift_closure_reports",
      "moduleId": "cafeFlow",
      "title": "Relatórios de Fechamento",
      "purpose": "Armazenar detalhes consolidados do fechamento de turno.",
      "ownership": "moduleOwned",
      "rootEntity": "ShiftClosureReport",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "shift_closure_report_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único do relatório de fechamento."
        },
        {
          "name": "daily_shift_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao turno diário consolidado pelo relatório."
        },
        {
          "name": "business_date",
          "type": "date",
          "nullable": false,
          "description": "Data de referência do turno consolidado."
        },
        {
          "name": "shift_status",
          "type": "string",
          "nullable": false,
          "description": "Estado do turno diário no momento do fechamento."
        },
        {
          "name": "total_sales",
          "type": "money",
          "nullable": false,
          "description": "Valor total de vendas consolidadas no turno."
        },
        {
          "name": "total_orders",
          "type": "number",
          "nullable": false,
          "description": "Quantidade total de pedidos consolidados no turno."
        },
        {
          "name": "cash_total",
          "type": "money",
          "nullable": true,
          "description": "Total recebido em dinheiro no turno."
        },
        {
          "name": "card_total",
          "type": "money",
          "nullable": true,
          "description": "Total recebido em cartão no turno."
        },
        {
          "name": "summary_notes",
          "type": "text",
          "nullable": true,
          "description": "Observações e resumo textual do fechamento."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do relatório."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do relatório."
        }
      ],
      "primaryKey": [
        "shift_closure_report_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "daily_shift_id",
          "targetEntity": "DailyShift",
          "targetOwnership": "moduleOwned",
          "reason": "Relatório consolida um turno diário específico."
        }
      ],
      "indexes": [
        {
          "indexName": "ix_shift_closure_reports_daily_shift_id",
          "columns": [
            "daily_shift_id"
          ],
          "unique": true,
          "reason": "Garantir um relatório por turno e facilitar consulta por turno."
        },
        {
          "indexName": "ix_shift_closure_reports_business_date",
          "columns": [
            "business_date"
          ],
          "unique": false,
          "reason": "Filtrar relatórios por data do turno."
        },
        {
          "indexName": "ix_shift_closure_reports_created_at",
          "columns": [
            "created_at"
          ],
          "unique": false,
          "reason": "Ordenação e auditoria por data de criação."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details_json",
        "jsonSchemaRef": "ShiftClosureReportDetails",
        "reason": "Armazenar detalhes consolidados de pedidos e movimentos de estoque por turno."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [],
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
        "shiftClosureRule"
      ]
    },
    "defsPlan": {
      "fileName": "tables/shiftClosureReport.defs.ts",
      "exportName": "shiftClosureReportTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default shiftClosureReportTableDefinition;
