/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/buscarPedidoPorId.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "buscarPedidoPorId",
  "title": "Buscar pedido por ID",
  "purpose": "Retorna detalhes completos de um pedido",
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
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "order_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "table_seats",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "MenuItem",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "menuItem",
    "order"
  ],
  "commands": [
    {
      "commandId": "buscarPedidoPorId",
      "input": [
        {
          "name": "orderId",
          "type": "string",
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
