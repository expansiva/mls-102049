/// <mls fileReference="_102049_/l4/cafeFlow/ontology/Order.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrder = {
  "entityId": "Order",
  "title": "Pedido",
  "description": "Pedido criado no POS: mesa ou takeout, itens, status de cozinha e total. Pertence a um turno aberto.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "id",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pedido"
    },
    {
      "fieldId": "orderType",
      "type": "string",
      "required": true,
      "description": "Modalidade do pedido: dine-in (mesa) ou takeout",
      "enum": [
        "dineIn",
        "takeout"
      ]
    },
    {
      "fieldId": "tableId",
      "type": "uuid",
      "required": false,
      "description": "Referência à mesa para pedidos dine-in; nulo para pedidos takeout"
    },
    {
      "fieldId": "shiftId",
      "type": "uuid",
      "required": true,
      "description": "Turno de operação ao qual o pedido está vinculado"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status atual do pedido no fluxo de cozinha e entrega",
      "enum": [
        "pending",
        "inKitchen",
        "preparing",
        "ready",
        "delivered",
        "cancelled"
      ]
    },
    {
      "fieldId": "total",
      "type": "money",
      "required": true,
      "description": "Valor total calculado do pedido"
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do pedido"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do pedido"
    }
  ],
  "statusEnum": [
    "pending",
    "inKitchen",
    "preparing",
    "ready",
    "delivered",
    "cancelled"
  ],
  "lifecycleStates": [
    "pending",
    "inKitchen",
    "preparing",
    "ready",
    "delivered",
    "cancelled"
  ],
  "rulesApplied": [
    "orderRequiresOpenShift",
    "shiftClosingRequiresSettledOrders"
  ]
} as const;

export default cafeFlowEntityOrder;
