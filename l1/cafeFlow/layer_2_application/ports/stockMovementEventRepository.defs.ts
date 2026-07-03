/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/stockMovementEventRepository.defs.ts" enhancement="_blank"/>

export const stockMovementEventRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "StockMovementEventRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StockMovementEvent",
    "interfaceName": "IStockMovementEventRepository",
    "methods": [
      {
        "name": "append",
        "returns": "void",
        "params": [
          "event: StockMovementEvent"
        ],
        "description": "Append a stock movement event"
      },
      {
        "name": "listByPeriod",
        "returns": "StockMovementEvent[]",
        "params": [
          "period: DateRange"
        ],
        "description": "Read finder: list events within a period"
      },
      {
        "name": "listByStockLevelId",
        "returns": "StockMovementEvent[]",
        "params": [
          "stockLevelId: StockLevelId"
        ],
        "description": "Read finder: list events by stock level"
      }
    ]
  }
} as const;

export default stockMovementEventRepositoryPort;

export const pipeline = [
  {
    "id": "stockMovementEventRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/ports/stockMovementEventRepository.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/ports/stockMovementEventRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.d.ts"
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
