/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/atualizarMesa.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarMesa",
  "title": "Atualizar mesa/comanda",
  "purpose": "Atualiza dados de uma mesa ou comanda",
  "actor": "manager",
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
  "writesTables": [
    {
      "tableName": "table_seats",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [],
  "entityRefs": [
    "order"
  ],
  "commands": [
    {
      "commandId": "atualizarMesa",
      "input": [
        {
          "name": "order",
          "type": "orderEntity",
          "required": true
        }
      ],
      "output": [
        {
          "name": "order",
          "type": "orderEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
