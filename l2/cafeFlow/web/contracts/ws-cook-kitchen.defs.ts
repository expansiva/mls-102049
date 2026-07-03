/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "updateKitchenStatus",
    "bffName": "cafeFlow.orderLifecycle.updateKitchenStatus",
    "routeKey": "cafeFlow.orderLifecycle.updateKitchenStatus",
    "purpose": "Atualizar status de cozinha",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "criado",
          "em preparo",
          "pronto",
          "entregue",
          "cancelado"
        ],
        "description": "Novo status do pedido após a transição."
      },
      {
        "name": "previousStatus",
        "type": "string",
        "required": false,
        "enum": [
          "criado",
          "em preparo",
          "pronto",
          "entregue",
          "cancelado"
        ],
        "description": "Status anterior do pedido antes da transição."
      }
    ],
    "output": [
      {
        "name": "orderStatusEventId",
        "type": "string",
        "description": "Identificador único do evento de status do pedido."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateKitchenStatus",
      "operationId": "updateKitchenStatus",
      "defPath": "_102049_/l4/operations/updateKitchenStatus.defs.ts",
      "bffName": "cafeFlow.orderLifecycle.updateKitchenStatus"
    }
  },
  {
    "commandName": "createStockMovement",
    "bffName": "cafeFlow.orderLifecycle.createStockMovement",
    "routeKey": "cafeFlow.orderLifecycle.createStockMovement",
    "purpose": "Dar baixa no estoque",
    "kind": "command",
    "input": [
      {
        "name": "movementType",
        "type": "string",
        "required": true,
        "enum": [
          "baixa",
          "reposicao"
        ],
        "description": "Tipo da movimentação: baixa ou reposição de estoque"
      },
      {
        "name": "quantity",
        "type": "number",
        "required": true,
        "description": "Quantidade movimentada"
      },
      {
        "name": "reason",
        "type": "string",
        "required": true,
        "description": "Motivo da movimentação de estoque"
      }
    ],
    "output": [
      {
        "name": "stockMovementEventId",
        "type": "string",
        "description": "Identificador único do evento de movimentação de estoque"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createStockMovement",
      "operationId": "createStockMovement",
      "defPath": "_102049_/l4/operations/createStockMovement.defs.ts",
      "bffName": "cafeFlow.orderLifecycle.createStockMovement"
    }
  }
];

export const pipeline = [
  {
    "id": "ws-cook-kitchen__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.ts",
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
