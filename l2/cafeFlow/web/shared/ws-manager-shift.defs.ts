/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-shift.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-shift",
  "pageName": "Turno Diário – Abertura, Dashboard e Fechamento",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:dailyShiftLifecycle",
    "operation:openShift",
    "operation:queryDashboard",
    "operation:closeShift",
    "operation:generateShiftClosingReport"
  ],
  "operationIds": [
    "openShift",
    "queryDashboard",
    "closeShift",
    "generateShiftClosingReport"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-manager-shift",
    "workspaceKind": "workflow",
    "workflowId": "dailyShiftLifecycle",
    "actor": "manager",
    "entity": "",
    "owners": [
      {
        "kind": "workflow",
        "id": "dailyShiftLifecycle",
        "defPath": "_102049_/l4/workflows/dailyShiftLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "openShift",
        "defPath": "_102049_/l4/operations/openShift.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryDashboard",
        "defPath": "_102049_/l4/operations/queryDashboard.defs.ts"
      },
      {
        "kind": "operation",
        "id": "closeShift",
        "defPath": "_102049_/l4/operations/closeShift.defs.ts"
      },
      {
        "kind": "operation",
        "id": "generateShiftClosingReport",
        "defPath": "_102049_/l4/operations/generateShiftClosingReport.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Gerente abre o turno gerando um ID de turno",
        "Pedidos são lançados e processados durante o turno",
        "Gerente acompanha o dashboard de agregação em tempo real",
        "Gerente verifica que todos os pedidos estão finalizados",
        "Gerente fecha o turno e gera o relatório de fechamento"
      ],
      "operations": [
        {
          "operationId": "openShift",
          "commandName": "openShift",
          "steps": [
            "Gerente inicia a abertura do turno no sistema",
            "Sistema gera ID do turno",
            "Turno fica disponível para receber pedidos"
          ]
        },
        {
          "operationId": "queryDashboard",
          "commandName": "queryDashboard",
          "steps": [
            "Acessar a tela de dashboard no desktop do escritório",
            "Sistema agrega pedidos, status de cozinha e níveis de estoque do turno atual",
            "Visualizar métricas e indicadores"
          ]
        },
        {
          "operationId": "closeShift",
          "commandName": "closeShift",
          "steps": [
            "Verificar que todos os pedidos estão finalizados",
            "Confirmar fechamento do turno",
            "Sistema bloqueia novos pedidos para o turno"
          ]
        },
        {
          "operationId": "generateShiftClosingReport",
          "commandName": "generateShiftClosingReport",
          "steps": [
            "Selecionar o turno a ser relatado",
            "Sistema agrega pedidos, faturamento e movimentações de estoque",
            "Gerar relatório em pt-BR ou en"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.defs.ts",
    "tsPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-shift.defs.ts",
    "layoutId": "ws-manager-shift.layout"
  },
  "states": [
    {
      "stateKey": "ui.ws-manager-shift.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.action.openShift.status",
      "name": "openShiftState",
      "kind": "actionStatus",
      "actionRef": "openShift",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-shift.input.openShift.status",
      "name": "openShiftStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "openShift",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.openShift.openedAt",
      "name": "openShiftOpenedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "openShift",
        "direction": "input",
        "field": "openedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.openShift.closedAt",
      "name": "openShiftClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "openShift",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.action.queryDashboard.status",
      "name": "queryDashboardState",
      "kind": "actionStatus",
      "actionRef": "queryDashboard",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.shiftId",
      "name": "queryDashboardShiftId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryDashboard",
        "direction": "input",
        "field": "shiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.status",
      "name": "queryDashboardStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "queryDashboard",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.openedAt",
      "name": "queryDashboardOpenedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryDashboard",
        "direction": "input",
        "field": "openedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.closedAt",
      "name": "queryDashboardClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryDashboard",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.createdAt",
      "name": "queryDashboardCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryDashboard",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.updatedAt",
      "name": "queryDashboardUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryDashboard",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.data.queryDashboard",
      "name": "queryDashboardData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryDashboard",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.ws-manager-shift.action.closeShift.status",
      "name": "closeShiftState",
      "kind": "actionStatus",
      "actionRef": "closeShift",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-shift.input.closeShift.status",
      "name": "closeShiftStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "closeShift",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.closeShift.closedAt",
      "name": "closeShiftClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "closeShift",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.action.generateShiftClosingReport.status",
      "name": "generateShiftClosingReportState",
      "kind": "actionStatus",
      "actionRef": "generateShiftClosingReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.shiftId",
      "name": "generateShiftClosingReportShiftId",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftClosingReport",
        "direction": "input",
        "field": "shiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.status",
      "name": "generateShiftClosingReportStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftClosingReport",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.openedAt",
      "name": "generateShiftClosingReportOpenedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftClosingReport",
        "direction": "input",
        "field": "openedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.closedAt",
      "name": "generateShiftClosingReportClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftClosingReport",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.createdAt",
      "name": "generateShiftClosingReportCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftClosingReport",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt",
      "name": "generateShiftClosingReportUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftClosingReport",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport",
      "name": "generateShiftClosingReportData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "generateShiftClosingReport",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "openShift",
      "kind": "command",
      "commandRef": "openShift",
      "routeKey": "cafeFlow.dailyShiftLifecycle.openShift",
      "purpose": "Abrir turno",
      "methodName": "openShift",
      "handlerName": "handleOpenShiftClick",
      "inputStateKeys": [
        "ui.ws-manager-shift.input.openShift.status",
        "ui.ws-manager-shift.input.openShift.openedAt",
        "ui.ws-manager-shift.input.openShift.closedAt"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-shift.action.openShift.status"
    },
    {
      "actionId": "queryDashboard",
      "kind": "query",
      "commandRef": "queryDashboard",
      "routeKey": "cafeFlow.dailyShiftLifecycle.queryDashboard",
      "purpose": "Agregação de dados do Dashboard",
      "methodName": "loadQueryDashboard",
      "handlerName": "handleQueryDashboardClick",
      "inputStateKeys": [
        "ui.ws-manager-shift.input.queryDashboard.shiftId",
        "ui.ws-manager-shift.input.queryDashboard.status",
        "ui.ws-manager-shift.input.queryDashboard.openedAt",
        "ui.ws-manager-shift.input.queryDashboard.closedAt",
        "ui.ws-manager-shift.input.queryDashboard.createdAt",
        "ui.ws-manager-shift.input.queryDashboard.updatedAt"
      ],
      "outputStateKeys": [
        "ui.ws-manager-shift.data.queryDashboard"
      ],
      "statusStateKey": "ui.ws-manager-shift.action.queryDashboard.status"
    },
    {
      "actionId": "closeShift",
      "kind": "command",
      "commandRef": "closeShift",
      "routeKey": "cafeFlow.dailyShiftLifecycle.closeShift",
      "purpose": "Fechar turno",
      "methodName": "closeShift",
      "handlerName": "handleCloseShiftClick",
      "inputStateKeys": [
        "ui.ws-manager-shift.input.closeShift.status",
        "ui.ws-manager-shift.input.closeShift.closedAt"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.ws-manager-shift.action.closeShift.status"
    },
    {
      "actionId": "generateShiftClosingReport",
      "kind": "query",
      "commandRef": "generateShiftClosingReport",
      "routeKey": "cafeFlow.dailyShiftLifecycle.generateShiftClosingReport",
      "purpose": "Gerar relatório de fechamento de turno",
      "methodName": "loadGenerateShiftClosingReport",
      "handlerName": "handleGenerateShiftClosingReportClick",
      "inputStateKeys": [
        "ui.ws-manager-shift.input.generateShiftClosingReport.shiftId",
        "ui.ws-manager-shift.input.generateShiftClosingReport.status",
        "ui.ws-manager-shift.input.generateShiftClosingReport.openedAt",
        "ui.ws-manager-shift.input.generateShiftClosingReport.closedAt",
        "ui.ws-manager-shift.input.generateShiftClosingReport.createdAt",
        "ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt"
      ],
      "outputStateKeys": [
        "ui.ws-manager-shift.data.generateShiftClosingReport"
      ],
      "statusStateKey": "ui.ws-manager-shift.action.generateShiftClosingReport.status"
    },
    {
      "actionId": "set.openShiftStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.openShift.status",
      "methodName": "setOpenShiftStatus",
      "handlerName": "handleOpenShiftStatusChange"
    },
    {
      "actionId": "set.openShiftOpenedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.openShift.openedAt",
      "methodName": "setOpenShiftOpenedAt",
      "handlerName": "handleOpenShiftOpenedAtChange"
    },
    {
      "actionId": "set.openShiftClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.openShift.closedAt",
      "methodName": "setOpenShiftClosedAt",
      "handlerName": "handleOpenShiftClosedAtChange"
    },
    {
      "actionId": "set.queryDashboardShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.shiftId",
      "methodName": "setQueryDashboardShiftId",
      "handlerName": "handleQueryDashboardShiftIdChange"
    },
    {
      "actionId": "set.queryDashboardStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.status",
      "methodName": "setQueryDashboardStatus",
      "handlerName": "handleQueryDashboardStatusChange"
    },
    {
      "actionId": "set.queryDashboardOpenedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.openedAt",
      "methodName": "setQueryDashboardOpenedAt",
      "handlerName": "handleQueryDashboardOpenedAtChange"
    },
    {
      "actionId": "set.queryDashboardClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.closedAt",
      "methodName": "setQueryDashboardClosedAt",
      "handlerName": "handleQueryDashboardClosedAtChange"
    },
    {
      "actionId": "set.queryDashboardCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.createdAt",
      "methodName": "setQueryDashboardCreatedAt",
      "handlerName": "handleQueryDashboardCreatedAtChange"
    },
    {
      "actionId": "set.queryDashboardUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.queryDashboard.updatedAt",
      "methodName": "setQueryDashboardUpdatedAt",
      "handlerName": "handleQueryDashboardUpdatedAtChange"
    },
    {
      "actionId": "set.closeShiftStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.closeShift.status",
      "methodName": "setCloseShiftStatus",
      "handlerName": "handleCloseShiftStatusChange"
    },
    {
      "actionId": "set.closeShiftClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.closeShift.closedAt",
      "methodName": "setCloseShiftClosedAt",
      "handlerName": "handleCloseShiftClosedAtChange"
    },
    {
      "actionId": "set.generateShiftClosingReportShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.shiftId",
      "methodName": "setGenerateShiftClosingReportShiftId",
      "handlerName": "handleGenerateShiftClosingReportShiftIdChange"
    },
    {
      "actionId": "set.generateShiftClosingReportStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.status",
      "methodName": "setGenerateShiftClosingReportStatus",
      "handlerName": "handleGenerateShiftClosingReportStatusChange"
    },
    {
      "actionId": "set.generateShiftClosingReportOpenedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.openedAt",
      "methodName": "setGenerateShiftClosingReportOpenedAt",
      "handlerName": "handleGenerateShiftClosingReportOpenedAtChange"
    },
    {
      "actionId": "set.generateShiftClosingReportClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.closedAt",
      "methodName": "setGenerateShiftClosingReportClosedAt",
      "handlerName": "handleGenerateShiftClosingReportClosedAtChange"
    },
    {
      "actionId": "set.generateShiftClosingReportCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.createdAt",
      "methodName": "setGenerateShiftClosingReportCreatedAt",
      "handlerName": "handleGenerateShiftClosingReportCreatedAtChange"
    },
    {
      "actionId": "set.generateShiftClosingReportUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt",
      "methodName": "setGenerateShiftClosingReportUpdatedAt",
      "handlerName": "handleGenerateShiftClosingReportUpdatedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryDashboard",
      "stateKey": "ui.ws-manager-shift.data.queryDashboard"
    },
    {
      "actionId": "generateShiftClosingReport",
      "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport"
    }
  ],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en"
    ]
  },
  "i18n": {
    "wsManagerShift.section.shiftLifecycle.title": "Turno Diário – Abertura, Dashboard e Fechamento",
    "wsManagerShift.organism.openShift.title": "Abertura do Turno",
    "wsManagerShift.intention.openShift.form.title": "Abrir turno",
    "wsManagerShift.field.openShift.status": "Status do turno",
    "wsManagerShift.field.openShift.openedAt": "Abertura do turno",
    "wsManagerShift.field.openShift.closedAt": "Fechamento do turno (opcional)",
    "wsManagerShift.action.openShift.submit": "Abrir turno",
    "wsManagerShift.organism.queryDashboard.title": "Dashboard do Turno",
    "wsManagerShift.intention.queryDashboard.list.title": "Agregação do dashboard",
    "wsManagerShift.col.queryDashboard.shiftId": "ID do turno",
    "wsManagerShift.col.queryDashboard.status": "Status",
    "wsManagerShift.col.queryDashboard.openedAt": "Abertura",
    "wsManagerShift.col.queryDashboard.closedAt": "Fechamento",
    "wsManagerShift.col.queryDashboard.createdAt": "Criado em",
    "wsManagerShift.col.queryDashboard.updatedAt": "Atualizado em",
    "wsManagerShift.filter.queryDashboard.shiftId": "ID do turno",
    "wsManagerShift.filter.queryDashboard.status": "Status",
    "wsManagerShift.filter.queryDashboard.openedAt": "Abertura",
    "wsManagerShift.filter.queryDashboard.closedAt": "Fechamento",
    "wsManagerShift.filter.queryDashboard.createdAt": "Criado em",
    "wsManagerShift.filter.queryDashboard.updatedAt": "Atualizado em",
    "wsManagerShift.action.queryDashboard.refresh": "Atualizar dashboard",
    "wsManagerShift.organism.closeShift.title": "Fechamento do Turno",
    "wsManagerShift.intention.closeShift.form.title": "Fechar turno",
    "wsManagerShift.field.closeShift.status": "Status do turno",
    "wsManagerShift.field.closeShift.closedAt": "Fechamento do turno",
    "wsManagerShift.action.closeShift.submit": "Fechar turno",
    "wsManagerShift.organism.generateShiftClosingReport.title": "Relatório de Fechamento",
    "wsManagerShift.intention.generateShiftClosingReport.list.title": "Relatório de fechamento do turno",
    "wsManagerShift.col.generateShiftClosingReport.shiftId": "ID do turno",
    "wsManagerShift.col.generateShiftClosingReport.status": "Status",
    "wsManagerShift.col.generateShiftClosingReport.openedAt": "Abertura",
    "wsManagerShift.col.generateShiftClosingReport.closedAt": "Fechamento",
    "wsManagerShift.col.generateShiftClosingReport.createdAt": "Criado em",
    "wsManagerShift.col.generateShiftClosingReport.updatedAt": "Atualizado em",
    "wsManagerShift.filter.generateShiftClosingReport.shiftId": "ID do turno",
    "wsManagerShift.filter.generateShiftClosingReport.status": "Status",
    "wsManagerShift.filter.generateShiftClosingReport.openedAt": "Abertura",
    "wsManagerShift.filter.generateShiftClosingReport.closedAt": "Fechamento",
    "wsManagerShift.filter.generateShiftClosingReport.createdAt": "Criado em",
    "wsManagerShift.filter.generateShiftClosingReport.updatedAt": "Atualizado em",
    "wsManagerShift.action.generateShiftClosingReport.run": "Gerar relatório"
  },
  "automation": {
    "statePrefix": "ui.ws-manager-shift",
    "stateKeys": [
      "ui.ws-manager-shift.status",
      "ui.ws-manager-shift.action.openShift.status",
      "ui.ws-manager-shift.input.openShift.status",
      "ui.ws-manager-shift.input.openShift.openedAt",
      "ui.ws-manager-shift.input.openShift.closedAt",
      "ui.ws-manager-shift.action.queryDashboard.status",
      "ui.ws-manager-shift.input.queryDashboard.shiftId",
      "ui.ws-manager-shift.input.queryDashboard.status",
      "ui.ws-manager-shift.input.queryDashboard.openedAt",
      "ui.ws-manager-shift.input.queryDashboard.closedAt",
      "ui.ws-manager-shift.input.queryDashboard.createdAt",
      "ui.ws-manager-shift.input.queryDashboard.updatedAt",
      "ui.ws-manager-shift.data.queryDashboard",
      "ui.ws-manager-shift.action.closeShift.status",
      "ui.ws-manager-shift.input.closeShift.status",
      "ui.ws-manager-shift.input.closeShift.closedAt",
      "ui.ws-manager-shift.action.generateShiftClosingReport.status",
      "ui.ws-manager-shift.input.generateShiftClosingReport.shiftId",
      "ui.ws-manager-shift.input.generateShiftClosingReport.status",
      "ui.ws-manager-shift.input.generateShiftClosingReport.openedAt",
      "ui.ws-manager-shift.input.generateShiftClosingReport.closedAt",
      "ui.ws-manager-shift.input.generateShiftClosingReport.createdAt",
      "ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt",
      "ui.ws-manager-shift.data.generateShiftClosingReport"
    ],
    "actionIds": [
      "openShift",
      "queryDashboard",
      "closeShift",
      "generateShiftClosingReport",
      "set.openShiftStatus",
      "set.openShiftOpenedAt",
      "set.openShiftClosedAt",
      "set.queryDashboardShiftId",
      "set.queryDashboardStatus",
      "set.queryDashboardOpenedAt",
      "set.queryDashboardClosedAt",
      "set.queryDashboardCreatedAt",
      "set.queryDashboardUpdatedAt",
      "set.closeShiftStatus",
      "set.closeShiftClosedAt",
      "set.generateShiftClosingReportShiftId",
      "set.generateShiftClosingReportStatus",
      "set.generateShiftClosingReportOpenedAt",
      "set.generateShiftClosingReportClosedAt",
      "set.generateShiftClosingReportCreatedAt",
      "set.generateShiftClosingReportUpdatedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "ws-manager-shift__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-shift.ts",
    "defPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-shift.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "ws-manager-shift__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
