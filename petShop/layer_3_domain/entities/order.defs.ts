/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/order.defs.ts" enhancement="_blank"/>

export const orderDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Order",
  "moduleName": "petShop",
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
    "invariants": [
      "status must be 'registered', 'completed', or 'cancelled'",
      "an order must have at least one OrderItem",
      "when status is 'completed', completedAt must be set",
      "when status is 'cancelled', cancelledAt and cancellationReason must be set",
      "completedAt and cancelledAt are mutually exclusive",
      "order cannot be completed or cancelled if it has no items",
      "updatedAt must be greater than or equal to createdAt"
    ],
    "valueObjects": [
      {
        "name": "OrderItem",
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
        ],
        "collection": true
      }
    ]
  }
} as const;

export default orderDomainEntity;

export const pipeline = [
  {
    "id": "order__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/order.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/order.defs.ts",
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
