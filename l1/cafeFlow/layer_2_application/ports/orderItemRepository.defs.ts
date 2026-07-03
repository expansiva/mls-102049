/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.defs.ts" enhancement="_blank"/>

export const orderItemRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "OrderItemRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "OrderItem",
    "interfaceName": "IOrderItemRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "OrderItem",
        "params": [
          "id: OrderItemId"
        ],
        "description": "Retrieve an order item by its unique identifier"
      },
      {
        "name": "list",
        "returns": "OrderItem[]",
        "params": [
          "filter: OrderItemFilter"
        ],
        "description": "List order items matching the given filter"
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "orderItem: OrderItem"
        ],
        "description": "Persist the given order item aggregate"
      },
      {
        "name": "findByOrderId",
        "returns": "OrderItem[]",
        "params": [
          "orderId: OrderId"
        ],
        "description": "Domain finder: retrieve items belonging to an order"
      }
    ]
  }
} as const;

export default orderItemRepositoryPort;

export const pipeline = [
  {
    "id": "orderItemRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts"
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
