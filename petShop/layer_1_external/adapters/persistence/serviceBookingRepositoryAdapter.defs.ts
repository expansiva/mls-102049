/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBookingRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const serviceBookingRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ServiceBookingRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "ServiceBookingRepositoryAdapter",
    "entityId": "ServiceBooking",
    "portRef": "IServiceBookingRepository",
    "tableRef": "service_bookings",
    "mdmReads": [],
    "notes": [
      "Real columns: service_booking_id, service_id, operator_id, shift_id, status, created_at.",
      "Details JSONB holds: customer_name, customer_phone, booking_date, booking_time, notes, completed_at, cancelled_at, cancel_reason, updated_at.",
      "Uses ctx.data.moduleData for local persistence."
    ]
  }
} as const;

export default serviceBookingRepositoryAdapter;

export const pipeline = [
  {
    "id": "serviceBookingRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBookingRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBookingRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBooking.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.d.ts"
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
