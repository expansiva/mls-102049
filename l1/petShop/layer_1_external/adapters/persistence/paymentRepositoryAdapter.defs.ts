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
    "className": "PaymentRepository",
    "entityId": "Payment",
    "portRef": "IPaymentRepository",
    "tableRef": "payments",
    "mdmReads": [],
    "notes": [
      "Real columns: payment_id, reservation_id, method, status, created_at",
      "Details JSONB fields: amount, receivedBy, voidedAt, voidReason",
      "Append-only event adapter: append (insert one row) plus read finders; no update/delete",
      "No MDM refs; local table accessed via ctx.data.moduleData"
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
