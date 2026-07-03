/// <mls fileReference="_102049_/l4/workflows/dailyShiftLifecycle.defs.ts" enhancement="_blank"/>

export const workflowDailyShiftLifecycle = {
  "workflowId": "dailyShiftLifecycle",
  "title": "Ciclo de vida do Turno Diário",
  "executionMode": "sequential",
  "trigger": "Gerente inicia a abertura do turno diário no sistema",
  "actors": [
    "manager"
  ],
  "states": [
    "open",
    "closed"
  ],
  "transitions": [
    {
      "from": "open",
      "to": "open",
      "on": "queryDashboard",
      "by": "manager"
    },
    {
      "from": "open",
      "to": "closed",
      "on": "closeShift",
      "by": "manager"
    },
    {
      "from": "closed",
      "to": "closed",
      "on": "generateShiftClosingReport",
      "by": "manager"
    }
  ],
  "operationIds": [
    "openShift",
    "queryDashboard",
    "closeShift",
    "generateShiftClosingReport"
  ],
  "entities": [
    "Shift",
    "ShiftStatusEvent",
    "Order"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Gerenciar o turno diário da operação do café",
    "soThat": "A operação tenha controle de abertura, acompanhamento e fechamento com dados consolidados",
    "steps": [
      "Gerente abre o turno gerando um ID de turno",
      "Pedidos são lançados e processados durante o turno",
      "Gerente acompanha o dashboard de agregação em tempo real",
      "Gerente verifica que todos os pedidos estão finalizados",
      "Gerente fecha o turno e gera o relatório de fechamento"
    ],
    "outcome": "Turno é aberto, operado com visibilidade total e fechado com relatório de desempenho"
  },
  "capabilities": [
    {
      "capabilityId": "dailyShiftLifecycle",
      "title": "Ciclo de vida do Turno Diário",
      "actor": "manager",
      "priority": "now"
    }
  ],
  "pageId": "dailyShiftLifecycle"
} as const;

export default workflowDailyShiftLifecycle;
