/// <mls fileReference="_102049_/l5/cafeFlow/ontology/Order.defs.ts" enhancement="_blank"/>

export const OrderEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "Order",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 40,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "Order",
      "title": "Pedido",
      "description": "Compromisso principal de venda com origem (mesa/takeout), itens e status.",
      "ownership": "moduleOwned",
      "kind": "core",
      "fields": [
        {
          "fieldId": "orderId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do pedido."
        },
        {
          "fieldId": "originType",
          "type": "string",
          "required": true,
          "description": "Origem do pedido (mesa ou takeout).",
          "enum": [
            "mesa",
            "takeout"
          ]
        },
        {
          "fieldId": "tableSeatId",
          "type": "TableSeat",
          "required": false,
          "description": "Referência opcional à mesa/comanda associada ao pedido."
        },
        {
          "fieldId": "dailyShiftId",
          "type": "DailyShift",
          "required": true,
          "description": "Turno diário ao qual o pedido pertence."
        },
        {
          "fieldId": "orderStatusId",
          "type": "OrderStatus",
          "required": true,
          "description": "Status padronizado atual do pedido."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do pedido."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do pedido."
        }
      ],
      "statusEnum": [
        "recebido",
        "preparando",
        "pronto",
        "entregue",
        "cancelado"
      ],
      "rulesApplied": [
        "orderStatusLifecycle",
        "inventoryDecrementRule"
      ]
    }
  }
} as const;

export default OrderEntityDefinition;
