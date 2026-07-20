/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/reservationRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const reservationRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ReservationRepositoryAdapter",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "ReservationRepository",
    "entityId": "Reservation",
    "portRef": "IReservationRepository",
    "tableRef": "reservations",
    "mdmReads": [],
    "notes": [
      "Real columns: reservation_id, status, payment_id, created_at",
      "Details JSONB fields: customerName, customerPhone, expiresAt, confirmedAt, fulfilledAt, cancelledAt, cancellationReason, updatedAt",
      "Embedded member ReservationItem stored inside details JSONB as items array",
      "No MDM refs; local table accessed via ctx.data.moduleData"
    ]
  }
} as const;

export default reservationRepositoryAdapter;

export const pipeline = [
  {
    "id": "reservationRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/reservationRepositoryAdapter.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/persistence/reservationRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/reservationRepository.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/persistence/reservation.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/reservation.d.ts"
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
