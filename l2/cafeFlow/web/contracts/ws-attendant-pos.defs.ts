/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createOrder",
    "bffName": "cafeFlow.orderLifecycle.createOrder",
    "routeKey": "cafeFlow.orderLifecycle.createOrder",
    "purpose": "Lançar pedido no POS",
    "kind": "command",
    "input": [
      {
        "name": "orderType",
        "type": "string",
        "required": true,
        "enum": [
          "dineIn",
          "takeout"
        ],
        "description": "Modalidade do pedido: dine-in (mesa) ou takeout"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "pending",
          "inKitchen",
          "preparing",
          "ready",
          "delivered",
          "cancelled"
        ],
        "description": "Status atual do pedido no fluxo de cozinha e entrega"
      },
      {
        "name": "total",
        "type": "number",
        "required": true,
        "description": "Valor total calculado do pedido"
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string",
        "description": "Identificador único do pedido"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createOrder",
      "operationId": "createOrder",
      "defPath": "_102049_/l4/operations/createOrder.defs.ts",
      "bffName": "cafeFlow.orderLifecycle.createOrder"
    }
  },
  {
    "commandName": "settleOrder",
    "bffName": "cafeFlow.orderLifecycle.settleOrder",
    "routeKey": "cafeFlow.orderLifecycle.settleOrder",
    "purpose": "Finalizar pedido",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "pending",
          "inKitchen",
          "preparing",
          "ready",
          "delivered",
          "cancelled"
        ],
        "description": "Status atual do pedido no fluxo de cozinha e entrega"
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string",
        "description": "Identificador único do pedido"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:settleOrder",
      "operationId": "settleOrder",
      "defPath": "_102049_/l4/operations/settleOrder.defs.ts",
      "bffName": "cafeFlow.orderLifecycle.settleOrder"
    }
  }
];

export const pipeline = [
  {
    "id": "ws-attendant-pos__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.ts",
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
