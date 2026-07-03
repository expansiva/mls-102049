/// <mls fileReference="_102049_/l4/operations/closeShift.defs.ts" enhancement="_blank"/>

export const operationCloseShift = {
  "operationId": "closeShift",
  "title": "Fechar turno",
  "actor": "manager",
  "entity": "Shift",
  "kind": "update",
  "reads": [
    "Shift",
    "Order"
  ],
  "writes": [
    "Shift",
    "Shift.status",
    "Shift.closedAt",
    "Shift.updatedAt",
    "ShiftStatusEvent"
  ],
  "rulesApplied": [
    "orderRequiresOpenShift",
    "shiftClosingRequiresSettledOrders"
  ],
  "story": {
    "actor": "manager",
    "goal": "Fechar o turno ao final do expediente",
    "soThat": "O período seja contabilizado e os dados possam ser consolidados no relatório",
    "steps": [
      "Verificar que todos os pedidos estão finalizados",
      "Confirmar fechamento do turno",
      "Sistema bloqueia novos pedidos para o turno"
    ],
    "outcome": "Turno atualizado para status fechado, impedindo novos pedidos"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Comando para fechar o turno diário ativo, atualizando seu status para fechado, registrando a data/hora de fechamento e gerando o evento de status correspondente",
    "entity": "Shift",
    "filters": [],
    "sort": [],
    "selection": "single",
    "output": []
  },
  "inputs": [
    {
      "inputId": "shiftId",
      "fieldRef": "Shift.shiftId",
      "required": true,
      "source": "activeLifecycleInstance",
      "description": "Identificador único do turno ativo a ser fechado"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.shiftId",
      "source": "activeLifecycleInstance",
      "originRef": "Shift.shiftId",
      "description": "O identificador do turno é resolvido a partir da instância ativa do ciclo de vida de turno"
    },
    {
      "targetRef": "Shift.closedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "A data/hora de fechamento é definida automaticamente pelo sistema no momento da execução"
    },
    {
      "targetRef": "Shift.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "A data/hora da última atualização é definida automaticamente pelo sistema no momento da execução"
    }
  ],
  "acceptanceAssertions": [
    "O fechamento do turno utiliza o identificador do turno ativo da instância de ciclo de vida, sem digitação manual de id técnico",
    "A ação só é permitida quando todos os pedidos do turno estão finalizados",
    "O status do turno é atualizado para fechado sem necessidade de entrada manual",
    "A data e hora de fechamento são atribuídas automaticamente pelo sistema"
  ],
  "capability": {
    "capabilityId": "dailyShiftLifecycle",
    "title": "Ciclo de vida do Turno Diário",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "dailyShiftLifecycle",
  "commandName": "closeShift",
  "bffName": "cafeFlow.dailyShiftLifecycle.closeShift"
} as const;

export default operationCloseShift;
