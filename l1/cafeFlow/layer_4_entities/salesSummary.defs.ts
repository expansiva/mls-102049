/// <mls fileReference="_102049_/l1/cafeFlow/layer_4_entities/salesSummary.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "salesSummary",
  "title": "Entidade de IA e Métricas de Vendas",
  "purpose": "Agrupa resumos de vendas, sugestões de promoção e tabelas de métricas operacionais",
  "layer": "layer_4_entities",
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
  "ontologyEntities": [
    "SalesSummary",
    "PromotionSuggestion"
  ],
  "sourceTables": [
    {
      "tableName": "sales_summaries",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "promotion_suggestions",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "daily_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "top_selling_items_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_alert_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "weekly_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "operational_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "salesSummary",
      "tableName": "sales_summaries",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/salesSummary.defs.ts"
    },
    {
      "kind": "moduleTable",
      "tableId": "promotionSuggestion",
      "tableName": "promotion_suggestions",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/promotionSuggestion.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "dailySalesMetrics",
      "tableName": "daily_sales_metrics",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/dailySalesMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "topSellingItemsMetrics",
      "tableName": "top_selling_items_metrics",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/topSellingItemsMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "inventoryAlertMetrics",
      "tableName": "inventory_alert_metrics",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/inventoryAlertMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "weeklySalesMetrics",
      "tableName": "weekly_sales_metrics",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/weeklySalesMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "operationalMetrics",
      "tableName": "operational_metrics",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/operationalMetrics.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "list"
  ],
  "rulesApplied": [
    "aiSummarySourceRule"
  ],
  "usecaseRefs": [
    "criarPedido",
    "cancelarPedido",
    "registrarMovimentoEstoque",
    "fecharTurno",
    "visualizarDashboard",
    "gerarResumoVendas",
    "sugerirPromocoes",
    "listarResumosVendas",
    "listarSugestoesPromocoes"
  ],
  "materialization": {
    "fileName": "layer_4_entities/SalesSummaryEntity.ts",
    "className": "SalesSummaryEntity",
    "contractName": "ISalesSummaryEntity"
  }
} as const;

export default entity;
