/// <mls fileReference="_102049_/l4/workflows/aiSalesAssistant.defs.ts" enhancement="_blank"/>

export const aiSalesAssistantDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "aiSalesAssistant",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "aiSalesAssistant",
      "title": "Geração de resumo e sugestões IA",
      "purpose": "Executar a geração automática de resumos de vendas e sugestões de promoções via assistente de IA, consumindo dados de pedidos e estoque.",
      "executionMode": "automation",
      "createsTask": true,
      "taskConfig": {
        "taskTitleTemplate": "Revisar sugestões de promoção IA - {{summaryDate}}",
        "assigneeRules": [
          "manager"
        ],
        "slaRules": [
          "24h"
        ],
        "taskRoomRequired": false
      },
      "actors": [
        "manager",
        "system"
      ],
      "states": [
        {
          "stateId": "idle",
          "description": "Aguardando execução automática ou manual."
        },
        {
          "stateId": "generatingSummary",
          "description": "Gerando resumo de vendas via IA."
        },
        {
          "stateId": "generatingPromotions",
          "description": "Gerando sugestões de promoção via IA."
        },
        {
          "stateId": "completed",
          "description": "Resumo e sugestões gerados e prontos para revisão."
        },
        {
          "stateId": "failed",
          "description": "Falha na geração do resumo ou das sugestões."
        }
      ],
      "transitions": [
        {
          "from": "idle",
          "to": "generatingSummary",
          "trigger": "scheduledNightlyRun",
          "actor": "system",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "aiSummarySourceRule"
          ]
        },
        {
          "from": "idle",
          "to": "generatingSummary",
          "trigger": "manualRun",
          "actor": "manager",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "aiSummarySourceRule"
          ]
        },
        {
          "from": "generatingSummary",
          "to": "generatingPromotions",
          "trigger": "summaryGenerated",
          "actor": "system",
          "conditions": [],
          "actions": [
            "SalesSummary.summaryDate set",
            "SalesSummary.totalSales set",
            "SalesSummary.totalOrders set",
            "SalesSummary.averageTicket set",
            "SalesSummary.highlights set",
            "SalesSummary.dailyShiftId set",
            "SalesSummary.createdAt set",
            "SalesSummary.updatedAt set"
          ],
          "rulesApplied": [
            "aiSummarySourceRule"
          ]
        },
        {
          "from": "generatingPromotions",
          "to": "completed",
          "trigger": "promotionsGenerated",
          "actor": "system",
          "conditions": [],
          "actions": [
            "PromotionSuggestion.title set",
            "PromotionSuggestion.suggestionText set",
            "PromotionSuggestion.periodStart set",
            "PromotionSuggestion.periodEnd set",
            "PromotionSuggestion.rationale set",
            "PromotionSuggestion.createdAt set",
            "PromotionSuggestion.updatedAt set"
          ],
          "rulesApplied": [
            "aiSummarySourceRule"
          ]
        },
        {
          "from": "generatingSummary",
          "to": "failed",
          "trigger": "generationFailed",
          "actor": "system",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        },
        {
          "from": "generatingPromotions",
          "to": "failed",
          "trigger": "generationFailed",
          "actor": "system",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "SalesSummary",
        "PromotionSuggestion",
        "Order",
        "OrderItem",
        "InventoryItem"
      ],
      "persistenceRefs": [
        "salesSummary",
        "promotionSuggestion",
        "order",
        "orderItem",
        "inventoryItem",
        "weeklySalesMetrics",
        "topSellingItemsMetrics"
      ],
      "usecaseRefs": [
        "gerarResumoVendas",
        "sugerirPromocoes",
        "listarResumosVendas",
        "listarSugestoesPromocoes"
      ],
      "metricRefs": [
        "weeklySalesMetrics",
        "topSellingItemsMetrics"
      ],
      "userActions": [
        "executarGeracaoIA",
        "revisarSugestoesPromocao"
      ],
      "relatedPages": [
        "dashboardGerente"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "aiSummarySourceRule"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "scheduleNightlyRun",
          "title": "Agendar execução noturna do resumo IA",
          "priority": "soon",
          "description": "Configurar o agendamento automático diário para gerar resumos e sugestões no fechamento do dia.",
          "tradeoff": "Aumenta uso de recursos fora do expediente, mas entrega resultados prontos para revisão matinal."
        },
        {
          "suggestionId": "managerReviewPromoTask",
          "title": "Criar tarefa de revisão para sugestões de promoção",
          "priority": "soon",
          "description": "Disparar tarefa ao concluir a geração para garantir revisão do gerente antes de aplicar promoções.",
          "tradeoff": "Adiciona etapa manual, porém reduz risco de promoções inadequadas."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "cafeFlow"
      ],
      "pageRefsByModule": [],
      "entityRefsByModule": [
        {
          "moduleId": "cafeFlow",
          "entity": "SalesSummary"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "PromotionSuggestion"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "Order"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "OrderItem"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "InventoryItem"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "aiSalesAssistant"
        },
        {
          "moduleId": "cafeFlow",
          "artifactType": "usecase",
          "artifactId": "gerarResumoVendas"
        },
        {
          "moduleId": "cafeFlow",
          "artifactType": "usecase",
          "artifactId": "sugerirPromocoes"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/aiSalesAssistant.defs.ts",
      "exportName": "aiSalesAssistantDef",
      "saveAsDefs": true
    }
  }
} as const;

export default aiSalesAssistantDef;
