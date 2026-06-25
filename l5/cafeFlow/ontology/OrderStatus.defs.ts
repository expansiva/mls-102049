/// <mls fileReference="_102049_/l5/cafeFlow/ontology/OrderStatus.defs.ts" enhancement="_blank"/>

export const OrderStatusEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "OrderStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 40,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "OrderStatus",
      "title": "Status do Pedido",
      "description": "Catálogo padronizado de status do pedido para o fluxo da cozinha.",
      "ownership": "mdmOwned",
      "fields": [
        {
          "fieldId": "orderStatusId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do status do pedido."
        },
        {
          "fieldId": "name",
          "type": "string",
          "required": true,
          "description": "Nome do status do pedido."
        },
        {
          "fieldId": "description",
          "type": "text",
          "required": false,
          "description": "Descrição do significado e uso do status."
        },
        {
          "fieldId": "displayOrder",
          "type": "number",
          "required": false,
          "description": "Ordem de exibição do status nas listas."
        },
        {
          "fieldId": "isActive",
          "type": "boolean",
          "required": true,
          "description": "Indica se o status está ativo para uso."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "rulesApplied": []
    }
  }
} as const;

export default OrderStatusEntityDefinition;
