/// <mls fileReference="_102049_/l5/cafeFlow/uiConsolidation.defs.ts" enhancement="_blank"/>

export const uiConsolidationPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "uiConsolidation",
  "artifactId": "uiConsolidation",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUiConsolidation",
    "stepId": 28,
    "planId": "plan-ui-consolidation"
  },
  "data": {
    "sharedComponents": [
      {
        "componentId": "orderStatusList",
        "title": "Lista de pedidos por status",
        "kind": "organism",
        "pages": [
          "painelCozinha",
          "posRapido"
        ],
        "replacesOrganisms": [
          "painelCozinha.Lista de pedidos por status",
          "posRapido.listaPedidosAtivos"
        ],
        "responsibilities": "Exibir pedidos com status atual para seleção e acompanhamento, com opção de filtrar por status."
      }
    ],
    "namingFixes": [
      {
        "pageId": "cardapioEstoque",
        "organismName": "Lista de itens do cardápio",
        "suggestedName": "menuItemsList",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "cardapioEstoque",
        "organismName": "Editor de item do cardápio",
        "suggestedName": "menuItemEditor",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "cardapioEstoque",
        "organismName": "Lista de itens de estoque",
        "suggestedName": "inventoryItemsList",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "cardapioEstoque",
        "organismName": "Editor de item de estoque",
        "suggestedName": "inventoryItemEditor",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "cardapioEstoque",
        "organismName": "Histórico de movimentos",
        "suggestedName": "inventoryMovementsHistory",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "cardapioEstoque",
        "organismName": "Registrar movimento manual",
        "suggestedName": "manualInventoryMovementForm",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "centralNotificacoes",
        "organismName": "Lista de itens com estoque baixo",
        "suggestedName": "lowStockItemsList",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "dashboardGerente",
        "organismName": "FiltroPeriodo",
        "suggestedName": "periodFilter",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "dashboardGerente",
        "organismName": "CardsMetricaVendas",
        "suggestedName": "salesMetricsCards",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "dashboardGerente",
        "organismName": "TabelaItensMaisVendidos",
        "suggestedName": "topSellingItemsTable",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "dashboardGerente",
        "organismName": "AlertasOperacionais",
        "suggestedName": "operationalAlerts",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "dashboardGerente",
        "organismName": "ListaResumosVendas",
        "suggestedName": "salesSummariesList",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "dashboardGerente",
        "organismName": "ListaSugestoesPromocoes",
        "suggestedName": "promotionSuggestionsList",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "painelCozinha",
        "organismName": "Lista de pedidos por status",
        "suggestedName": "ordersByStatusList",
        "reason": "Padronizar nomes em camelCase em inglês."
      },
      {
        "pageId": "painelCozinha",
        "organismName": "Ações de status do pedido",
        "suggestedName": "orderStatusActions",
        "reason": "Padronizar nomes em camelCase em inglês."
      }
    ],
    "notes": [
      "Componente compartilhado de lista de pedidos cobre seleção e filtro por status para cozinha e POS; manter ações específicas em organismos próprios."
    ]
  }
} as const;

export default uiConsolidationPlan;
