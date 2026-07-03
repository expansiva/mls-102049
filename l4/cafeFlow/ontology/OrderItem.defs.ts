/// <mls fileReference="_102049_/l4/cafeFlow/ontology/OrderItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrderItem = {
  "entityId": "OrderItem",
  "title": "Item do Pedido",
  "description": "Linha de item dentro de um pedido: referência ao item do cardápio, quantidade, substituições aplicadas e status individual de cozinha.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "orderItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item do pedido"
    },
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao pedido ao qual este item pertence"
    },
    {
      "fieldId": "menuItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item do cardápio solicitado"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade solicitada do item"
    },
    {
      "fieldId": "unitPrice",
      "type": "money",
      "required": true,
      "description": "Preço unitário do item no momento do pedido"
    },
    {
      "fieldId": "itemTotal",
      "type": "money",
      "required": true,
      "description": "Valor total da linha do item (quantidade × preço unitário com ajustes de combo/substituição)"
    },
    {
      "fieldId": "substitutionsApplied",
      "type": "text",
      "required": false,
      "description": "Descrição das substituições aplicadas ao item do cardápio"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status atual do item na cozinha",
      "enum": [
        "pending",
        "preparing",
        "ready",
        "delivered"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "statusEnum": [
    "pending",
    "preparing",
    "ready",
    "delivered"
  ],
  "lifecycleStates": [
    "pending",
    "preparing",
    "ready",
    "delivered"
  ],
  "rulesApplied": [
    "stockDecrementOnPreparing",
    "comboPriceDifference",
    "kitchenStatusSequence"
  ]
} as const;

export default cafeFlowEntityOrderItem;
