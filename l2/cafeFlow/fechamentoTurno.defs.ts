/// <mls fileReference="_102049_/l2/cafeFlow/fechamentoTurno.defs.ts" enhancement="_blank"/>

export const fechamentoTurnoPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "fechamentoTurno",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 66,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "fechamentoTurno",
      "pageName": "Fechamento de turno",
      "actor": "manager",
      "purpose": "Abrir turno diário, acompanhar resumo e realizar fechamento com conferência.",
      "capabilities": [
        "closeDailyShift"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "dailyShiftClosure"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "dashboardGerente",
          "trigger": "ver métricas do dia após fechamento",
          "description": "Acessar dashboard do gerente após fechar o turno."
        }
      ],
      "sections": [
        {
          "sectionName": "Turnos do dia",
          "mode": "list",
          "organisms": [
            {
              "organismName": "listaTurnos",
              "purpose": "Listar turnos ativos e históricos para seleção.",
              "userActions": [
                "selecionarTurno",
                "atualizarLista"
              ],
              "requiredEntities": [
                "DailyShift"
              ],
              "readsFields": [
                "DailyShift.dailyShiftId",
                "DailyShift.businessDate",
                "DailyShift.status",
                "DailyShift.openedAt",
                "DailyShift.closedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "shiftClosureRule"
              ]
            }
          ]
        },
        {
          "sectionName": "Abertura de turno",
          "mode": "create",
          "organisms": [
            {
              "organismName": "abrirTurnoForm",
              "purpose": "Iniciar um novo turno diário.",
              "userActions": [
                "abrirTurno"
              ],
              "requiredEntities": [
                "DailyShift"
              ],
              "readsFields": [],
              "writesFields": [
                "DailyShift.businessDate",
                "DailyShift.openedAt"
              ],
              "rulesApplied": [
                "shiftClosureRule"
              ]
            }
          ]
        },
        {
          "sectionName": "Resumo para conferência",
          "mode": "read",
          "organisms": [
            {
              "organismName": "relatorioFechamentoResumo",
              "purpose": "Exibir relatório consolidado do turno selecionado.",
              "userActions": [
                "visualizarRelatorioFechamento"
              ],
              "requiredEntities": [
                "ShiftClosureReport",
                "DailyShift"
              ],
              "readsFields": [
                "ShiftClosureReport.shiftClosureReportId",
                "ShiftClosureReport.dailyShiftId",
                "ShiftClosureReport.totalSales",
                "ShiftClosureReport.totalOrders",
                "ShiftClosureReport.cashTotal",
                "ShiftClosureReport.cardTotal",
                "ShiftClosureReport.summaryNotes",
                "ShiftClosureReport.createdAt",
                "DailyShift.businessDate",
                "DailyShift.status"
              ],
              "writesFields": [],
              "rulesApplied": [
                "shiftClosureRule"
              ]
            }
          ]
        },
        {
          "sectionName": "Fechamento do turno",
          "mode": "confirm",
          "organisms": [
            {
              "organismName": "fecharTurnoConfirmacao",
              "purpose": "Confirmar fechamento do turno com totais conferidos.",
              "userActions": [
                "fecharTurno",
                "confirmarFechamento"
              ],
              "requiredEntities": [
                "DailyShift",
                "ShiftClosureReport"
              ],
              "readsFields": [
                "DailyShift.dailyShiftId",
                "DailyShift.status",
                "ShiftClosureReport.totalSales",
                "ShiftClosureReport.totalOrders",
                "ShiftClosureReport.cashTotal",
                "ShiftClosureReport.cardTotal"
              ],
              "writesFields": [
                "DailyShift.status",
                "DailyShift.closedAt",
                "ShiftClosureReport.totalSales",
                "ShiftClosureReport.totalOrders",
                "ShiftClosureReport.cashTotal",
                "ShiftClosureReport.cardTotal",
                "ShiftClosureReport.summaryNotes"
              ],
              "rulesApplied": [
                "shiftClosureRule"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarTurnos",
        "purpose": "Consultar turnos ativos e históricos.",
        "kind": "query",
        "input": [
          {
            "name": "businessDate",
            "type": "date",
            "required": false
          },
          {
            "name": "status",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "uuid"
          },
          {
            "name": "businessDate",
            "type": "date"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "openedAt",
            "type": "datetime"
          },
          {
            "name": "closedAt",
            "type": "datetime"
          }
        ],
        "readsEntities": [
          "dailyShiftEntity"
        ],
        "writesEntities": [],
        "readsTables": [
          "daily_shifts"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listarTurnos"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "abrirTurno",
        "purpose": "Iniciar turno diário.",
        "kind": "command",
        "input": [
          {
            "name": "businessDate",
            "type": "date",
            "required": true
          },
          {
            "name": "responsavel",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "uuid"
          },
          {
            "name": "businessDate",
            "type": "date"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "openedAt",
            "type": "datetime"
          }
        ],
        "readsEntities": [],
        "writesEntities": [
          "dailyShiftEntity"
        ],
        "readsTables": [],
        "writesTables": [
          "daily_shifts"
        ],
        "usecaseRefs": [
          "abrirTurno"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "shiftClosureRule"
        ]
      },
      {
        "commandName": "buscarRelatorioFechamento",
        "purpose": "Exibir dados consolidados para conferência.",
        "kind": "query",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "uuid",
            "required": true
          }
        ],
        "output": [
          {
            "name": "shiftClosureReportId",
            "type": "uuid"
          },
          {
            "name": "dailyShiftId",
            "type": "uuid"
          },
          {
            "name": "totalSales",
            "type": "money"
          },
          {
            "name": "totalOrders",
            "type": "number"
          },
          {
            "name": "cashTotal",
            "type": "money"
          },
          {
            "name": "cardTotal",
            "type": "money"
          },
          {
            "name": "summaryNotes",
            "type": "text"
          },
          {
            "name": "createdAt",
            "type": "datetime"
          }
        ],
        "readsEntities": [
          "dailyShiftEntity"
        ],
        "writesEntities": [],
        "readsTables": [
          "shift_closure_reports",
          "daily_shifts"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "buscarRelatorioFechamento"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "fecharTurno",
        "purpose": "Encerrar turno com valores conferidos.",
        "kind": "command",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "totalSales",
            "type": "money",
            "required": true
          },
          {
            "name": "totalOrders",
            "type": "number",
            "required": true
          },
          {
            "name": "cashTotal",
            "type": "money",
            "required": false
          },
          {
            "name": "cardTotal",
            "type": "money",
            "required": false
          },
          {
            "name": "summaryNotes",
            "type": "text",
            "required": false
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "uuid"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "closedAt",
            "type": "datetime"
          },
          {
            "name": "shiftClosureReportId",
            "type": "uuid"
          }
        ],
        "readsEntities": [
          "dailyShiftEntity",
          "orderEntity",
          "inventoryEntity"
        ],
        "writesEntities": [
          "dailyShiftEntity",
          "salesAIEntity"
        ],
        "readsTables": [
          "daily_shifts",
          "orders",
          "order_items",
          "inventory_movements"
        ],
        "writesTables": [
          "daily_shifts",
          "shift_closure_reports",
          "daily_sales_metrics",
          "operational_metrics"
        ],
        "usecaseRefs": [
          "fecharTurno"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "shiftClosureRule"
        ]
      }
    ]
  }
} as const;

export default fechamentoTurnoPagePlan;
