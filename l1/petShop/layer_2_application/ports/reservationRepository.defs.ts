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
          "id: ReservationId"
        ],
        "returns": "Reservation",
        "description": "Retrieve a reservation by its unique identifier"
      },
      {
        "name": "list",
        "params": [
          "filter: ReservationFilter"
        ],
        "returns": "List<Reservation>",
        "description": "List reservations matching the given domain filter"
      },
      {
        "name": "save",
        "params": [
          "reservation: Reservation"
        ],
        "returns": "void",
        "description": "Persist the reservation aggregate root and its embedded items"
      },
      {
        "name": "listByPeriod",
        "params": [
          "period: DateRange"
        ],
        "returns": "List<Reservation>",
        "description": "Domain finder: list reservations that fall within the given period"
      },
      {
        "name": "existsById",
        "params": [
          "id: ReservationId"
        ],
        "returns": "boolean",
        "description": "Domain finder: verify whether a reservation exists"
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
