/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/payment.defs.ts" enhancement="_blank"/>

export const paymentDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Payment",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Payment",
    "title": "Payment",
    "fields": [
      {
        "fieldId": "paymentId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do registro de pagamento."
      },
      {
        "fieldId": "reservationId",
        "type": "uuid",
        "required": true,
        "description": "Referência à reserva associada a este pagamento presencial."
      },
      {
        "fieldId": "amount",
        "type": "money",
        "required": true,
        "description": "Valor total recebido, calculado a partir dos preços dos produtos e quantidades reservadas."
      },
      {
        "fieldId": "method",
        "type": "string",
        "required": true,
        "description": "Método de pagamento utilizado pelo cliente na loja.",
        "enum": [
          "cash",
          "creditCard",
          "debitCard",
          "pix"
        ]
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Situação atual do registro de pagamento.",
        "enum": [
          "posted",
          "voided"
        ]
      },
      {
        "fieldId": "receivedBy",
        "type": "string",
        "required": true,
        "description": "Identificador do atendente que confirmou o recebimento do pagamento."
      },
      {
        "fieldId": "voidedAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que o pagamento foi cancelado ou estornado."
      },
      {
        "fieldId": "voidReason",
        "type": "text",
        "required": false,
        "description": "Motivo do cancelamento ou estorno do pagamento."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora em que o pagamento foi registrado no sistema."
      }
    ],
    "invariants": [],
    "statusEnum": [
      "posted",
      "voided"
    ]
  }
} as const;

export default paymentDomainEntity;

export const pipeline = [
  {
    "id": "payment__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/payment.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/payment.defs.ts",
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
