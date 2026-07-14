/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/orderRepository.defs.ts" enhancement="_blank"/>

export const orderRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "OrderRepository",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Order",
    "interfaceName": "IOrderRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: OrderId"
        ],
        "returns": "Order | null"
      },
      {
        "name": "list",
        "params": [
          "filter: OrderFilter"
        ],
        "returns": "Order[]"
      },
      {
        "name": "save",
        "params": [
          "order: Order"
        ],
        "returns": "void"
      },
      {
        "name": "findByCustomerId",
        "params": [
          "customerId: CustomerId"
        ],
        "returns": "Order[]"
      },
      {
        "name": "findByStatus",
        "params": [
          "status: OrderStatus"
        ],
        "returns": "Order[]"
      }
    ]
  }
} as const;

export default orderRepositoryPort;

export const pipeline = [
  {
    "id": "orderRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102049_/l1/petShop/layer_2_application/ports/orderRepository.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/ports/orderRepository.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_3_domain/entities/order.d.ts"
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
