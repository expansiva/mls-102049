/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.defs.ts" enhancement="_blank"/>

export const serviceBookingRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ServiceBookingRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ServiceBooking",
    "interfaceName": "IServiceBookingRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ServiceBookingId"
        ],
        "returns": "ServiceBooking | null"
      },
      {
        "name": "list",
        "params": [
          "filter: ServiceBookingFilter"
        ],
        "returns": "ServiceBooking[]"
      },
      {
        "name": "save",
        "params": [
          "booking: ServiceBooking"
        ],
        "returns": "void"
      },
      {
        "name": "findByCustomerId",
        "params": [
          "customerId: CustomerId"
        ],
        "returns": "ServiceBooking[]"
      },
      {
        "name": "findByPeriod",
        "params": [
          "period: DateRange"
        ],
        "returns": "ServiceBooking[]"
      }
    ]
  }
} as const;

export default serviceBookingRepositoryPort;

export const pipeline = [
  {
    "id": "serviceBookingRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.d.ts"
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
