/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/listarMesas.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarMesas",
  "title": "Listar mesas/comandas",
  "purpose": "Lista mesas e comandas disponíveis",
  "actor": "attendantCashier",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "orderEntity"
  ],
  "outputEntities": [
    "orderEntity"
  ],
  "readsTables": [
    {
      "tableName": "table_seats",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "order"
  ],
  "commands": [
    {
      "commandId": "listarMesas",
      "input": [],
      "output": [
        {
          "name": "mesas",
          "type": "orderEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
