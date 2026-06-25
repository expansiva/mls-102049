/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/criarMesa.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarMesa",
  "title": "Criar mesa/comanda",
  "purpose": "Cadastra uma nova mesa ou comanda",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "orderEntity"
  ],
  "outputEntities": [
    "orderEntity"
  ],
  "readsTables": [],
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
      "commandId": "criarMesa",
      "input": [
        {
          "name": "orderEntity",
          "type": "orderEntity",
          "required": true
        }
      ],
      "output": [
        {
          "name": "orderEntity",
          "type": "orderEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
