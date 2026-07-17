/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/paymentRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const paymentRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "PaymentRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "PaymentRepositoryAdapter",
    "entityId": "Payment",
    "portRef": "IPaymentRepository",
    "tableRef": "payments",
    "mdmReads": [],
    "notes": [
      "Append-only event adapter: insert one row only, no update/delete",
      "Real columns: payment_id, reservation_id, payment_method, status, created_at",
      "Details JSONB: amount, voidedAt, voidReason",
      "Implements append() + read finders (e.g., findByReservationId)",
      "Uses ctx.data.moduleData for local payments table reads/writes"
    ]
  }
} as const;

export default paymentRepositoryAdapter;

export const pipeline = [
  {
    "id": "paymentRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/paymentRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/paymentRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/paymentRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/payment.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/payment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
