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
        "description": "Referência à reserva cuja retirada gerou este pagamento."
      },
      {
        "fieldId": "amount",
        "type": "money",
        "required": true,
        "description": "Valor total pago presencialmente na retirada da reserva."
      },
      {
        "fieldId": "paymentMethod",
        "type": "string",
        "required": true,
        "description": "Meio utilizado para o pagamento na loja física.",
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
        "description": "Situação atual do pagamento: registrado ou anulado.",
        "enum": [
          "posted",
          "voided"
        ]
      },
      {
        "fieldId": "voidedAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que o pagamento foi anulado por evento compensatório."
      },
      {
        "fieldId": "voidReason",
        "type": "text",
        "required": false,
        "description": "Motivo da anulação do pagamento, registrado quando há estorno ou cancelamento."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora em que o pagamento foi registrado na loja."
      }
    ],
    "valueObjects": [],
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
