/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.defs.ts" enhancement="_blank"/>

export const orderStatusEventDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "OrderStatusEvent",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "OrderStatusEvent",
    "fields": [
      {
        "fieldId": "orderStatusEventId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do evento de status do pedido."
      },
      {
        "fieldId": "orderId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao pedido cujo status sofreu transição."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Novo status do pedido após a transição.",
        "enum": [
          "criado",
          "em preparo",
          "pronto",
          "entregue",
          "cancelado"
        ]
      },
      {
        "fieldId": "previousStatus",
        "type": "string",
        "required": false,
        "description": "Status anterior do pedido antes da transição.",
        "enum": [
          "criado",
          "em preparo",
          "pronto",
          "entregue",
          "cancelado"
        ]
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do registro do evento."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do registro."
      }
    ],
    "invariants": [],
    "valueObjects": []
  }
} as const;

export default orderStatusEventDomainEntity;

export const pipeline = [
  {
    "id": "orderStatusEvent__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
