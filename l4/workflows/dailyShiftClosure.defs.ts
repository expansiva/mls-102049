/// <mls fileReference="_102049_/l4/workflows/dailyShiftClosure.defs.ts" enhancement="_blank"/>

export const dailyShiftClosureDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "dailyShiftClosure",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "dailyShiftClosure",
      "title": "Fechamento de turno",
      "purpose": "Controlar a abertura e o fechamento do turno diário, bloqueando operações e gerando o relatório consolidado de vendas do período.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "manager"
      ],
      "states": [
        {
          "stateId": "aberto",
          "description": "Turno diário aberto e disponível para registrar pedidos."
        },
        {
          "stateId": "fechado",
          "description": "Turno diário fechado com relatório consolidado emitido."
        }
      ],
      "transitions": [
        {
          "from": "aberto",
          "to": "fechado",
          "trigger": "fecharTurno",
          "actor": "manager",
          "conditions": [
            "shiftClosureRule"
          ],
          "actions": [
            "DailyShift.status=fechado",
            "DailyShift.closedAt=now",
            "DailyShift.updatedAt=now",
            "ShiftClosureReport.dailyShiftId=DailyShift.dailyShiftId",
            "ShiftClosureReport.totalSales=calculated",
            "ShiftClosureReport.totalOrders=calculated",
            "ShiftClosureReport.cashTotal=calculated",
            "ShiftClosureReport.cardTotal=calculated",
            "ShiftClosureReport.summaryNotes=provided",
            "ShiftClosureReport.createdAt=now",
            "ShiftClosureReport.updatedAt=now"
          ],
          "rulesApplied": [
            "shiftClosureRule"
          ]
        },
        {
          "from": "fechado",
          "to": "aberto",
          "trigger": "abrirTurno",
          "actor": "manager",
          "conditions": [],
          "actions": [
            "DailyShift.dailyShiftId=generated",
            "DailyShift.businessDate=today",
            "DailyShift.status=aberto",
            "DailyShift.openedAt=now",
            "DailyShift.createdAt=now",
            "DailyShift.updatedAt=now"
          ],
          "rulesApplied": [
            "shiftClosureRule"
          ]
        }
      ],
      "requiredEntities": [
        "DailyShift",
        "ShiftClosureReport",
        "Order",
        "OrderItem"
      ],
      "persistenceRefs": [
        "dailyShift",
        "shiftClosureReport",
        "order",
        "orderItem",
        "dailySalesMetrics",
        "operationalMetrics"
      ],
      "usecaseRefs": [
        "abrirTurno",
        "fecharTurno",
        "buscarRelatorioFechamento",
        "listarTurnos"
      ],
      "metricRefs": [
        "dailySalesMetrics",
        "operationalMetrics"
      ],
      "userActions": [
        "abrirTurno",
        "fecharTurno",
        "listarTurnos",
        "visualizarRelatorioFechamento"
      ],
      "relatedPages": [
        "fechamentoTurno"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "shiftClosureRule"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "blockOrdersOnClosure",
          "title": "Bloquear novos pedidos após início do fechamento",
          "priority": "now",
          "description": "Garantir integridade dos dados do relatório de fechamento, impedindo vendas fora do turno.",
          "tradeoff": "Pode exigir aviso claro às mesas/takeout antes do bloqueio."
        },
        {
          "suggestionId": "managerConfirmClosure",
          "title": "Exigir confirmação explícita do gerente para fechamento",
          "priority": "now",
          "description": "O fechamento de turno é crítico para o caixa e deve ser explicitamente confirmado.",
          "tradeoff": "Adiciona uma etapa extra antes de finalizar o turno."
        },
        {
          "suggestionId": "noTaskForClosure",
          "title": "Não criar tarefa automática para fechamento de turno",
          "priority": "never",
          "description": "O fechamento é uma ação imediata do gerente e já faz parte do fluxo operacional, portanto não é necessário gerar tarefa adicional.",
          "tradeoff": "Sem tarefa, não há trilha de pendência em caso de atraso do fechamento."
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
          "entity": "DailyShift"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "ShiftClosureReport"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "Order"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "OrderItem"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "dailyShiftClosure"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/dailyShiftClosure.defs.ts",
      "exportName": "dailyShiftClosureDef",
      "saveAsDefs": true
    }
  }
} as const;

export default dailyShiftClosureDef;
