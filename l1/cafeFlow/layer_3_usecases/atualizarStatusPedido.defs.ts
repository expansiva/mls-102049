/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/atualizarStatusPedido.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarStatusPedido",
  "title": "Atualizar status do pedido",
  "purpose": "Avança o status do pedido no fluxo de preparo",
  "actor": "kitchen",
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
      "tableName": "OrderStatus",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "orderStatusLifecycle"
  ],
  "entityRefs": [
    "order"
  ],
  "commands": [
    {
      "commandId": "atualizarStatusPedido",
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
  ],
  "pendingQuestions": [
    "Qual é o identificador usado para localizar o pedido (ex.: orderId, código do pedido)?",
    "Há necessidade de informar o status desejado ou o avanço é sempre para o próximo status do ciclo?",
    "Quais campos do orderEntity devem ser retornados obrigatoriamente na saída?"
  ]
} as const;

export default useCase;
