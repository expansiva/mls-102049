/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/reservationRepository.defs.ts" enhancement="_blank"/>

export const reservationRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ReservationRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Reservation",
    "interfaceName": "IReservationRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: string"
        ],
        "returns": "Reservation"
      },
      {
        "name": "list",
        "params": [
          "filter: ReservationFilter"
        ],
        "returns": "Reservation[]"
      },
      {
        "name": "save",
        "params": [
          "reservation: Reservation"
        ],
        "returns": "void"
      },
      {
        "name": "findByCustomerId",
        "params": [
          "customerId: string"
        ],
        "returns": "Reservation[]",
        "description": "Domain finder by customer identifier"
      },
      {
        "name": "findByStatus",
        "params": [
          "status: ReservationStatus"
        ],
        "returns": "Reservation[]",
        "description": "Domain finder by reservation status"
      }
    ]
  }
} as const;

export default reservationRepositoryPort;

export const pipeline = [
  {
    "id": "reservationRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/reservationRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/reservationRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/reservation.d.ts"
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
