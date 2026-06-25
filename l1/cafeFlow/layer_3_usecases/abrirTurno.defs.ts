/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/abrirTurno.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "abrirTurno",
  "title": "Abrir turno diário",
  "purpose": "Inicia um novo turno de operações",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "dailyShiftEntity"
  ],
  "outputEntities": [
    "dailyShiftEntity"
  ],
  "readsTables": [],
  "writesTables": [
    {
      "tableName": "daily_shifts",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "shiftClosureRule"
  ],
  "entityRefs": [
    "dailyShift"
  ],
  "commands": [
    {
      "commandId": "abrirTurno",
      "input": [
        {
          "name": "dailyShift",
          "type": "dailyShiftEntity",
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
  ]
} as const;

export default useCase;
