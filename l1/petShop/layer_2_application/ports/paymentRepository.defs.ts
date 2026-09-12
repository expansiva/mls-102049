/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/paymentRepository.defs.ts" enhancement="_blank"/>

export const paymentRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "PaymentRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Payment",
    "interfaceName": "IPaymentRepository",
    "methods": [
      {
        "name": "append",
        "params": [
          "record: PaymentEvent"
        ],
        "returns": "void",
        "description": "Append a payment event to the append-only event stream"
      },
      {
        "name": "listByOwnerId",
        "params": [
          "ownerId: ReservationId"
        ],
        "returns": "List<PaymentEvent>",
        "description": "Read finder: list payment events for the owning reservation"
      },
      {
        "name": "listByPeriod",
        "params": [
          "period: DateRange"
        ],
        "returns": "List<PaymentEvent>",
        "description": "Read finder: list payment events that occurred within the given period"
      }
    ]
  }
} as const;

export default paymentRepositoryPort;

export const pipeline = [
  {
    "id": "paymentRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/paymentRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/paymentRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/payment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
