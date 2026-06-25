/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/fecharTurno.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "fecharTurno",
  "title": "Fechar turno diário",
  "purpose": "Finaliza o turno, gera relatório e consolida métricas",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "dailyShiftEntity"
  ],
  "outputEntities": [
    "dailyShiftEntity"
  ],
  "readsTables": [
    {
      "tableName": "daily_shifts",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "order_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_movements",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "daily_shifts",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "shift_closure_reports",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "daily_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "operational_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "shiftClosureRule"
  ],
  "entityRefs": [
    "dailyShift",
    "inventoryItem",
    "order",
    "salesSummary"
  ],
  "commands": [
    {
      "commandId": "fecharTurno",
      "input": [
        {
          "name": "dailyShiftId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "dailyShiftId",
          "type": "string"
        },
        {
          "name": "shiftClosureReportId",
          "type": "string"
        },
        {
          "name": "dailySalesMetricsId",
          "type": "string"
        },
        {
          "name": "operationalMetricsId",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
