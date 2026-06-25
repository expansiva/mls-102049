/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/listarPedidos.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarPedidos",
  "title": "Listar pedidos",
  "purpose": "Lista pedidos com filtros e paginação",
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
      "commandId": "listarPedidos",
      "input": [
        {
          "name": "page",
          "type": "number",
          "required": true
        },
        {
          "name": "pageSize",
          "type": "number",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": false
        },
        {
          "name": "fromDate",
          "type": "date",
          "required": false
        },
        {
          "name": "toDate",
          "type": "date",
          "required": false
        }
      ],
      "output": [
        {
          "name": "orders",
          "type": "orderEntity[]"
        },
        {
          "name": "totalCount",
          "type": "number"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais filtros são suportados para listar pedidos (ex.: status, intervalo de datas, mesa, atendente, itens)?"
  ]
} as const;

export default useCase;
