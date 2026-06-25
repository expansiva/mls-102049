/// <mls fileReference="_102049_/l5/cafeFlow/rules.defs.ts" enhancement="_blank"/>

export const rulesPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "rules",
  "artifactId": "cafeFlowRules",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentFinalizeSolutionPlan",
    "stepId": 11,
    "planId": "plan-finalize-solution-plan"
  },
  "data": {
    "moduleName": "cafeFlow",
    "rules": [
      {
        "ruleId": "orderStatusLifecycle",
        "title": "Transições válidas de status do pedido",
        "description": "Pedidos devem seguir o fluxo recebido -> preparando -> pronto -> entregue; cancelado encerra o fluxo.",
        "appliesTo": [
          "Order"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "inventoryDecrementRule",
        "title": "Baixa de estoque por venda",
        "description": "Cada item do pedido consumirá ingredientes conforme o vínculo do cardápio; baixa ocorre conforme regra definida no fluxo de estoque.",
        "appliesTo": [
          "InventoryMovement",
          "Order"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "shiftClosureRule",
        "title": "Fechamento de turno obrigatório",
        "description": "Turno só pode ser fechado após consolidar vendas do dia e registrar resumo de fechamento.",
        "appliesTo": [
          "DailyShift",
          "ShiftClosureReport"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "lowStockAlertRule",
        "title": "Alerta de estoque baixo",
        "description": "Quando o nível de um item estiver abaixo do mínimo, sinalizar alerta no dashboard.",
        "appliesTo": [
          "InventoryItem"
        ],
        "layer": "layer_2"
      },
      {
        "ruleId": "aiSummarySourceRule",
        "title": "Fonte de dados do assistente IA",
        "description": "Resumos e sugestões devem usar métricas agregadas dos últimos dias e vendas do dia.",
        "appliesTo": [
          "SalesSummary",
          "PromotionSuggestion"
        ],
        "layer": "layer_3"
      }
    ]
  }
} as const;

export default rulesPlan;
