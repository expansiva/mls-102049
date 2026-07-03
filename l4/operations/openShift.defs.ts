/// <mls fileReference="_102049_/l4/operations/openShift.defs.ts" enhancement="_blank"/>

export const operationOpenShift = {
  "operationId": "openShift",
  "title": "Abrir turno",
  "actor": "manager",
  "entity": "Shift",
  "kind": "create",
  "reads": [
    "Shift"
  ],
  "writes": [
    "Shift",
    "ShiftStatusEvent"
  ],
  "rulesApplied": [
    "orderRequiresOpenShift",
    "shiftClosingRequiresSettledOrders"
  ],
  "story": {
    "actor": "manager",
    "goal": "Abrir o turno diário da operação",
    "soThat": "A operação do dia tenha um período contabilizável e os pedidos possam ser registrados",
    "steps": [
      "Gerente inicia a abertura do turno no sistema",
      "Sistema gera ID do turno",
      "Turno fica disponível para receber pedidos"
    ],
    "outcome": "Turno criado e aberto, permitindo o lançamento de pedidos"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Command to create and open a new daily shift",
    "entity": "Shift",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "none",
    "output": [
      "Shift.shiftId",
      "Shift.status",
      "Shift.openedAt"
    ]
  },
  "inputs": [],
  "contextResolution": [
    {
      "targetRef": "Shift.shiftId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "System generates UUID for the new shift"
    },
    {
      "targetRef": "Shift.status",
      "source": "workflowState",
      "originRef": "Shift.status",
      "description": "Workflow state sets the shift status to open"
    },
    {
      "targetRef": "Shift.openedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Current timestamp for shift opening"
    },
    {
      "targetRef": "Shift.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Current timestamp for record creation"
    },
    {
      "targetRef": "Shift.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Current timestamp for record update"
    }
  ],
  "acceptanceAssertions": [
    "Opening the shift requires no typed technical id from the user",
    "The shift identifier is generated automatically by the system",
    "The shift status is set to open by the workflow state",
    "The openedAt timestamp is resolved from the current system time",
    "The operation uses the manager actor session for authorization"
  ],
  "capability": {
    "capabilityId": "dailyShiftLifecycle",
    "title": "Ciclo de vida do Turno Diário",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "dailyShiftLifecycle",
  "commandName": "openShift",
  "bffName": "cafeFlow.dailyShiftLifecycle.openShift"
} as const;

export default operationOpenShift;
