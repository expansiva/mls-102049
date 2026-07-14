/// <mls fileReference="_102049_/l4/petShop/ontology/Order.defs.ts" enhancement="_blank"/>

export const petShopEntityOrder = {
  "entityId": "Order",
  "title": "Pedido de Retirada",
  "description": "Pedido de compra de produtos finalizado pelo cliente para retirada presencial na loja, com pagamento na loja física.",
  "kind": "core",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pedido de retirada."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação atual do pedido: registrado, concluído ou cancelado.",
      "enum": [
        "registered",
        "completed",
        "cancelled"
      ]
    },
    {
      "fieldId": "customerName",
      "type": "string",
      "required": true,
      "description": "Nome do cliente que realizou o pedido de retirada."
    },
    {
      "fieldId": "customerPhone",
      "type": "string",
      "required": false,
      "description": "Telefone de contato do cliente para confirmação da retirada."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que o pedido foi registrado."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do pedido."
    },
    {
      "fieldId": "completedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que o pedido foi concluído na loja (retirada e pagamento realizados)."
    },
    {
      "fieldId": "cancelledAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que o pedido foi cancelado."
    },
    {
      "fieldId": "cancellationReason",
      "type": "text",
      "required": false,
      "description": "Motivo informado no cancelamento do pedido."
    }
  ],
  "statusEnum": [
    "registered",
    "completed",
    "cancelled"
  ],
  "lifecycleStates": [
    "registered",
    "completed",
    "cancelled"
  ]
} as const;

export default petShopEntityOrder;
