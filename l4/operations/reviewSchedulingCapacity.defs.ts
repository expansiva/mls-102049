/// <mls fileReference="_102049_/l4/operations/reviewSchedulingCapacity.defs.ts" enhancement="_blank"/>

export const operationReviewSchedulingCapacity = {
  "operationId": "reviewSchedulingCapacity",
  "title": "Revisar capacidade de atendimento",
  "actor": "admin",
  "entity": "ShiftAssignment",
  "kind": "query",
  "reads": [
    "ShiftAssignment",
    "Shift",
    "Operator"
  ],
  "writes": [],
  "rulesApplied": [
    "schedulingCapacityByOperators",
    "operatorMultipleShiftsAllowed"
  ],
  "story": {
    "actor": "admin",
    "goal": "Visualizar a capacidade de atendimento resultante das alocações de operadores em turnos para confirmar cobertura suficiente nos horários de pico",
    "steps": [
      "O administrador acessa a tela de revisão de capacidade de atendimento",
      "O sistema lista todas as alocações de operadores em turnos, agrupadas por turno",
      "O administrador pode filtrar as alocações por um turno específico para análise detalhada",
      "O sistema apresenta o número de operadores alocados por turno como indicador da capacidade de agendamento disponível"
    ],
    "outcome": "O administrador confirma que há operadores suficientes nos horários de pico ou identifica a necessidade de realizar novas alocações"
  },
  "accessPattern": {
    "kind": "list",
    "entity": "ShiftAssignment",
    "keyField": "ShiftAssignment.shiftAssignmentId",
    "pagination": "optional",
    "selection": "none",
    "output": [
      "ShiftAssignment.shiftAssignmentId",
      "ShiftAssignment.operatorId",
      "ShiftAssignment.shiftId",
      "ShiftAssignment.createdAt",
      "Shift.shiftId",
      "Shift.startTime",
      "Shift.endTime",
      "Operator.operatorId",
      "Operator.name"
    ]
  },
  "inputs": [
    {
      "inputId": "shiftId",
      "fieldRef": "ShiftAssignment.shiftId",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional para revisar a capacidade de um turno específico"
    },
    {
      "inputId": "actorId",
      "fieldRef": "Operator.operatorId",
      "required": true,
      "source": "actorSession",
      "description": "Identidade do administrador autenticado que solicita a revisão"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "actorSession.actorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O backend extrai o ID do administrador a partir da sessão autenticada para autorizar o acesso à revisão de capacidade"
    },
    {
      "targetRef": "businessContext.activeCompanyId",
      "source": "businessContext",
      "originRef": "businessContext.activeCompanyId",
      "description": "O backend resolve a empresa ativa a partir do contexto de negócio para escopar as alocações consultadas à empresa correta"
    }
  ],
  "acceptanceAssertions": [
    "A lista de alocações exibe todos os operadores alocados em cada turno com seus respectivos identificadores",
    "A capacidade de atendimento apresentada por turno corresponde ao número de operadores alocados naquele turno",
    "O administrador pode filtrar as alocações por um turno específico e visualizar apenas os operadores daquele turno",
    "Turnos com múltiplos operadores alocados mostram capacidade proporcional ao número de alocações registradas",
    "A lista inclui os horários de início e fim de cada turno para permitir a identificação de horários de pico"
  ],
  "pageId": "reviewSchedulingCapacity",
  "commandName": "reviewSchedulingCapacity",
  "bffName": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
  "capability": {
    "capabilityId": "reviewSchedulingCapacity",
    "title": "Revisar capacidade de atendimento",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationReviewSchedulingCapacity;
