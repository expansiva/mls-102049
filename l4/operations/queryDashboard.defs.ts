/// <mls fileReference="_102049_/l4/operations/queryDashboard.defs.ts" enhancement="_blank"/>

export const operationQueryDashboard = {
  "operationId": "queryDashboard",
  "title": "Agregação de dados do Dashboard",
  "actor": "manager",
  "entity": "Shift",
  "kind": "query",
  "reads": [
    "Shift",
    "Order",
    "OrderItem",
    "OrderStatusEvent",
    "StockLevel",
    "StockItem",
    "StockMovementEvent",
    "MenuItem",
    "ShiftStatusEvent"
  ],
  "writes": [],
  "rulesApplied": [
    "orderRequiresOpenShift",
    "shiftClosingRequiresSettledOrders"
  ],
  "story": {
    "actor": "manager",
    "goal": "Visualizar o dashboard com dados agregados em tempo real",
    "soThat": "O gerente acompanhe a operação sem precisar ir ao balcão",
    "steps": [
      "Acessar a tela de dashboard no desktop do escritório",
      "Sistema agrega pedidos, status de cozinha e níveis de estoque do turno atual",
      "Visualizar métricas e indicadores"
    ],
    "outcome": "Dashboard exibe dados consolidados da operação em tempo real"
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Recupera a visão agregada do dashboard para o turno ativo, consolidando pedidos, status de cozinha e níveis de estoque em tempo real",
    "entity": "Shift",
    "keyField": "Shift.shiftId",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "none",
    "output": [
      "shiftDashboardAggregation"
    ]
  },
  "inputs": [
    {
      "inputId": "shiftId",
      "fieldRef": "Shift.shiftId",
      "required": true,
      "source": "activeLifecycleInstance",
      "description": "Identificador do turno ativo cujos dados serão agregados no dashboard"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.shiftId",
      "source": "activeLifecycleInstance",
      "originRef": "Shift.shiftId",
      "description": "O ID do turno é resolvido automaticamente a partir da instância ativa do ciclo de vida de turno diário"
    }
  ],
  "acceptanceAssertions": [
    "Abrir o dashboard não requer digitar um identificador técnico de turno",
    "O dashboard utiliza o turno ativo do ciclo de vida diário como contexto",
    "A operação é somente leitura e não altera dados de turno, pedido ou estoque",
    "O gerente visualiza métricas agregadas do turno em tempo real"
  ],
  "capability": {
    "capabilityId": "dashboardAggregation",
    "title": "Agregação de dados do Dashboard",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "dailyShiftLifecycle",
  "commandName": "queryDashboard",
  "bffName": "cafeFlow.dailyShiftLifecycle.queryDashboard"
} as const;

export default operationQueryDashboard;
