/// <mls fileReference="_102049_/l5/cafeFlow/ontology/ShiftClosureReport.defs.ts" enhancement="_blank"/>

export const ShiftClosureReportEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "ShiftClosureReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "ShiftClosureReport",
      "title": "Relatório de Fechamento",
      "description": "Resumo consolidado do turno diário.",
      "ownership": "moduleOwned",
      "kind": "report",
      "fields": [
        {
          "fieldId": "shiftClosureReportId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do relatório de fechamento."
        },
        {
          "fieldId": "dailyShiftId",
          "type": "DailyShift",
          "required": true,
          "description": "Referência ao turno diário consolidado pelo relatório."
        },
        {
          "fieldId": "totalSales",
          "type": "money",
          "required": true,
          "description": "Valor total de vendas consolidadas no turno."
        },
        {
          "fieldId": "totalOrders",
          "type": "number",
          "required": true,
          "description": "Quantidade total de pedidos consolidados no turno."
        },
        {
          "fieldId": "cashTotal",
          "type": "money",
          "required": false,
          "description": "Total recebido em dinheiro no turno."
        },
        {
          "fieldId": "cardTotal",
          "type": "money",
          "required": false,
          "description": "Total recebido em cartão no turno."
        },
        {
          "fieldId": "summaryNotes",
          "type": "text",
          "required": false,
          "description": "Observações e resumo textual do fechamento."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do relatório."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do relatório."
        }
      ],
      "rulesApplied": [
        "shiftClosureRule"
      ]
    }
  }
} as const;

export default ShiftClosureReportEntityDefinition;
