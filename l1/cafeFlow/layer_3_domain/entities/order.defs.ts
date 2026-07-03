/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/order.defs.ts" enhancement="_blank"/>

export const orderDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Order",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Order",
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
    "invariants": [
      "If orderType is dineIn then tableId must be non-null",
      "If orderType is takeout then tableId must be null",
      "total must be greater than or equal to zero",
      "Status transitions must follow the valid flow: pending→inKitchen→preparing→ready→delivered; cancelled can occur from any non-delivered state",
      "shiftId must reference an open Shift at the time of order creation"
    ],
    "valueObjects": []
  }
} as const;

export default orderDomainEntity;

export const pipeline = [
  {
    "id": "order__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/order.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/order.defs.ts",
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
