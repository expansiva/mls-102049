/// <mls fileReference="_102049_/l5/cafeFlow/ontology/SalesSummary.defs.ts" enhancement="_blank"/>

export const SalesSummaryEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "SalesSummary",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "SalesSummary",
      "title": "Resumo de Vendas",
      "description": "Resumo diário gerado pela IA.",
      "ownership": "moduleOwned",
      "fields": [
        {
          "fieldId": "salesSummaryId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do resumo de vendas."
        },
        {
          "fieldId": "summaryDate",
          "type": "date",
          "required": true,
          "description": "Data do resumo de vendas."
        },
        {
          "fieldId": "totalSales",
          "type": "money",
          "required": true,
          "description": "Total de vendas do dia."
        },
        {
          "fieldId": "totalOrders",
          "type": "number",
          "required": true,
          "description": "Quantidade total de pedidos do dia."
        },
        {
          "fieldId": "averageTicket",
          "type": "money",
          "required": false,
          "description": "Ticket médio do dia."
        },
        {
          "fieldId": "highlights",
          "type": "text",
          "required": false,
          "description": "Destaques e observações geradas pela IA."
        },
        {
          "fieldId": "dailyShiftId",
          "type": "DailyShift",
          "required": false,
          "description": "Referência opcional ao turno do dia relacionado ao resumo."
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

export default SalesSummaryEntityDefinition;
