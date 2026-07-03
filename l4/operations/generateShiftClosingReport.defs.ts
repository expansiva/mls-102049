/// <mls fileReference="_102049_/l4/operations/generateShiftClosingReport.defs.ts" enhancement="_blank"/>

export const operationGenerateShiftClosingReport = {
  "operationId": "generateShiftClosingReport",
  "title": "Gerar relatório de fechamento de turno",
  "actor": "manager",
  "entity": "Shift",
  "kind": "query",
  "reads": [
    "Shift",
    "Order",
    "OrderItem",
    "ShiftStatusEvent",
    "StockMovementEvent"
  ],
  "writes": [],
  "rulesApplied": [
    "shiftClosingRequiresSettledOrders"
  ],
  "story": {
    "actor": "manager",
    "goal": "Gerar o relatório consolidado do turno fechado",
    "soThat": "O gerente tenha visão de desempenho para tomada de decisão",
    "steps": [
      "Selecionar o turno a ser relatado",
      "Sistema agrega pedidos, faturamento e movimentações de estoque",
      "Gerar relatório em pt-BR ou en"
    ],
    "outcome": "Relatório de fechamento gerado com dados consolidados do turno"
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Recupera um turno fechado pelo identificador e agrega pedidos, faturamento e movimentações de estoque em um relatório consolidado de fechamento",
    "entity": "Shift",
    "keyField": "Shift.shiftId",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "single",
    "output": [
      "shiftSummary",
      "ordersAggregation",
      "revenueTotals",
      "stockMovements"
    ]
  },
  "inputs": [
    {
      "inputId": "shiftId",
      "fieldRef": "Shift.shiftId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador do turno selecionado para geração do relatório de fechamento"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.shiftId",
      "source": "selectedEntity",
      "originRef": "Shift.shiftId",
      "description": "Resolve o identificador do turno a partir da entidade selecionada no fluxo de trabalho"
    }
  ],
  "acceptanceAssertions": [
    "A geração do relatório requer um turno previamente selecionado no fluxo de trabalho",
    "O identificador do turno é resolvido automaticamente da entidade selecionada, sem digitação manual",
    "O relatório consolida pedidos, faturamento e movimentações de estoque do turno fechado",
    "A operação é somente leitura e não altera o estado do turno"
  ],
  "capability": {
    "capabilityId": "generateShiftClosingReport",
    "title": "Gerar relatório de fechamento de turno",
    "actor": "manager",
    "priority": "soon"
  },
  "pageId": "dailyShiftLifecycle",
  "commandName": "generateShiftClosingReport",
  "bffName": "cafeFlow.dailyShiftLifecycle.generateShiftClosingReport"
} as const;

export default operationGenerateShiftClosingReport;
