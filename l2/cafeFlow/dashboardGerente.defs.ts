/// <mls fileReference="_102049_/l2/cafeFlow/dashboardGerente.defs.ts" enhancement="_blank"/>

export const dashboardGerentePagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "dashboardGerente",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 65,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "dashboardGerente",
      "pageName": "Dashboard do gerente",
      "actor": "manager",
      "purpose": "Acompanhar métricas de vendas e alertas operacionais.",
      "capabilities": [
        "viewDashboard"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [],
      "pageInputs": [
        {
          "name": "periodoFiltro",
          "type": "dateRange",
          "required": false,
          "sources": [
            "queryParam"
          ],
          "description": "Intervalo de datas para filtrar métricas, resumos e sugestões."
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "fechamentoTurno",
          "trigger": "resumo pós-fechamento"
        }
      ],
      "sections": [
        {
          "sectionName": "Filtro de período",
          "mode": "filter",
          "organisms": [
            {
              "organismName": "FiltroPeriodo",
              "purpose": "Definir o intervalo de datas do dashboard.",
              "userActions": [
                "ajustarPeriodo",
                "limparFiltro"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Visão geral de métricas",
          "mode": "view",
          "organisms": [
            {
              "organismName": "CardsMetricaVendas",
              "purpose": "Exibir indicadores principais de vendas e operação.",
              "userActions": [
                "visualizarDetalhesMetricas",
                "atualizarDashboard"
              ],
              "requiredEntities": [
                "salesAIEntity"
              ],
              "readsFields": [
                "dailyRevenue",
                "dailyOrderCount",
                "dailyAverageTicket",
                "weeklySalesTrend",
                "operationalHighlights"
              ],
              "writesFields": [],
              "rulesApplied": []
            },
            {
              "organismName": "TabelaItensMaisVendidos",
              "purpose": "Mostrar itens mais vendidos no período.",
              "userActions": [
                "visualizarItem",
                "ordenarItens"
              ],
              "requiredEntities": [
                "salesAIEntity"
              ],
              "readsFields": [
                "topSellingItems"
              ],
              "writesFields": [],
              "rulesApplied": []
            },
            {
              "organismName": "AlertasOperacionais",
              "purpose": "Apresentar alertas de estoque baixo e gargalos operacionais.",
              "userActions": [
                "abrirCentralNotificacoes"
              ],
              "requiredEntities": [
                "salesAIEntity"
              ],
              "readsFields": [
                "inventoryAlerts",
                "operationalAlerts"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Resumos de vendas",
          "mode": "view",
          "organisms": [
            {
              "organismName": "ListaResumosVendas",
              "purpose": "Listar resumos diários gerados pela IA.",
              "userActions": [
                "visualizarResumo"
              ],
              "requiredEntities": [
                "SalesSummary"
              ],
              "readsFields": [
                "salesSummaryId",
                "summaryDate",
                "totalSales",
                "totalOrders",
                "averageTicket",
                "highlights"
              ],
              "writesFields": [],
              "rulesApplied": [
                "aiSummarySourceRule"
              ]
            }
          ]
        },
        {
          "sectionName": "Sugestões de promoção",
          "mode": "view",
          "organisms": [
            {
              "organismName": "ListaSugestoesPromocoes",
              "purpose": "Listar sugestões de promoção geradas pela IA.",
              "userActions": [
                "visualizarSugestao"
              ],
              "requiredEntities": [
                "PromotionSuggestion"
              ],
              "readsFields": [
                "promotionSuggestionId",
                "title",
                "suggestionText",
                "periodStart",
                "periodEnd",
                "rationale"
              ],
              "writesFields": [],
              "rulesApplied": [
                "aiSummarySourceRule"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "visualizarDashboard",
        "purpose": "Carregar visão geral de métricas do dia e indicadores operacionais.",
        "kind": "query",
        "input": [
          {
            "name": "periodStart",
            "type": "date",
            "required": false
          },
          {
            "name": "periodEnd",
            "type": "date",
            "required": false
          }
        ],
        "output": [
          {
            "name": "dailyRevenue",
            "type": "number"
          },
          {
            "name": "dailyOrderCount",
            "type": "number"
          },
          {
            "name": "dailyAverageTicket",
            "type": "number"
          },
          {
            "name": "topSellingItems",
            "type": "TopSellingItemMetric[]"
          },
          {
            "name": "inventoryAlerts",
            "type": "InventoryAlertMetric[]"
          },
          {
            "name": "weeklySalesTrend",
            "type": "WeeklySalesMetric[]"
          },
          {
            "name": "operationalAlerts",
            "type": "OperationalMetric[]"
          }
        ],
        "readsEntities": [
          "salesAIEntity"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "visualizarDashboard"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "listarResumosVendas",
        "purpose": "Listar resumos de vendas por período.",
        "kind": "query",
        "input": [
          {
            "name": "periodStart",
            "type": "date",
            "required": false
          },
          {
            "name": "periodEnd",
            "type": "date",
            "required": false
          }
        ],
        "output": [
          {
            "name": "salesSummaries",
            "type": "SalesSummary[]"
          }
        ],
        "readsEntities": [
          "salesAIEntity"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listarResumosVendas"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "aiSummarySourceRule"
        ]
      },
      {
        "commandName": "listarSugestoesPromocoes",
        "purpose": "Listar sugestões de promoção geradas por IA.",
        "kind": "query",
        "input": [
          {
            "name": "periodStart",
            "type": "date",
            "required": false
          },
          {
            "name": "periodEnd",
            "type": "date",
            "required": false
          }
        ],
        "output": [
          {
            "name": "promotionSuggestions",
            "type": "PromotionSuggestion[]"
          }
        ],
        "readsEntities": [
          "salesAIEntity"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listarSugestoesPromocoes"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "aiSummarySourceRule"
        ]
      }
    ]
  }
} as const;

export default dashboardGerentePagePlan;
