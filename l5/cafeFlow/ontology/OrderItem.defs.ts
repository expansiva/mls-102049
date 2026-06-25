/// <mls fileReference="_102049_/l5/cafeFlow/ontology/OrderItem.defs.ts" enhancement="_blank"/>

export const OrderItemEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "OrderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 41,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "OrderItem",
      "title": "Item do Pedido",
      "description": "Linha de pedido vinculada ao item do cardápio e quantidade.",
      "ownership": "moduleOwned",
      "fields": [
        {
          "fieldId": "orderItemId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do item do pedido."
        },
        {
          "fieldId": "orderId",
          "type": "Order",
          "required": true,
          "description": "Referência ao pedido ao qual este item pertence."
        },
        {
          "fieldId": "menuItemId",
          "type": "MenuItem",
          "required": true,
          "description": "Referência ao item do cardápio associado."
        },
        {
          "fieldId": "quantity",
          "type": "number",
          "required": true,
          "description": "Quantidade solicitada do item do cardápio."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do item do pedido."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do item do pedido."
        }
      ],
      "rulesApplied": []
    }
  }
} as const;

export default OrderItemEntityDefinition;
