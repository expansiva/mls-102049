/// <mls fileReference="_102049_/l4/petShop/ontology/OrderItem.defs.ts" enhancement="_blank"/>

export const petShopEntityOrderItem = {
  "entityId": "OrderItem",
  "title": "Item do Pedido",
  "description": "Linha de item de um pedido de retirada, contendo a referência ao produto e a quantidade solicitada pelo cliente.",
  "kind": "supporting",
  "ownership": "moduleOwned",
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
      "description": "Referência ao pedido de retirada ao qual este item pertence"
    },
    {
      "fieldId": "productId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao produto do catálogo solicitado pelo cliente"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade do produto solicitada pelo cliente"
    },
    {
      "fieldId": "unitPrice",
      "type": "money",
      "required": true,
      "description": "Preço unitário do produto registrado no momento do pedido para cálculo do total a pagar presencialmente"
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do item do pedido"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do item do pedido"
    }
  ]
} as const;

export default petShopEntityOrderItem;
