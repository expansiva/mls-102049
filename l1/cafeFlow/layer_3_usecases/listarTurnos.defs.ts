/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/listarTurnos.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarTurnos",
  "title": "Listar turnos diários",
  "purpose": "Lista turnos com status e datas",
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
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "dailyShift"
  ],
  "commands": [
    {
      "commandId": "listarTurnos",
      "input": [],
      "output": [
        {
          "name": "turnos",
          "type": "dailyShiftEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
