/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/buscarRelatorioFechamento.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "buscarRelatorioFechamento",
  "title": "Buscar relatório de fechamento",
  "purpose": "Retorna o relatório de fechamento de um turno",
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
      "tableName": "shift_closure_reports",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "daily_shifts",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "dailyShift"
  ],
  "commands": [
    {
      "commandId": "buscarRelatorioFechamento",
      "input": [
        {
          "name": "dailyShiftId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "dailyShift",
          "type": "dailyShiftEntity"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Qual é o identificador de entrada esperado para localizar o relatório de fechamento? (ex.: dailyShiftId, shiftId ou outro)"
  ]
} as const;

export default useCase;
