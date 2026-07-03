/// <mls fileReference="_102049_/l4/workflows/orderLifecycle.defs.ts" enhancement="_blank"/>

export const workflowOrderLifecycle = {
  "workflowId": "orderLifecycle",
  "title": "Ciclo de vida do Pedido",
  "executionMode": "sequential",
  "trigger": "Atendente lança um novo pedido no POS informando mesa e itens do cardápio",
  "actors": [
    "attendant",
    "cook"
  ],
  "states": [
    "pending",
    "inKitchen",
    "preparing",
    "ready",
    "delivered",
    "cancelled"
  ],
  "transitions": [
    {
      "from": "pending",
      "to": "inKitchen",
      "on": "createOrder",
      "by": "attendant"
    },
    {
      "from": "inKitchen",
      "to": "preparing",
      "on": "updateKitchenStatus",
      "by": "cook"
    },
    {
      "from": "preparing",
      "to": "ready",
      "on": "updateKitchenStatus",
      "by": "cook"
    },
    {
      "from": "ready",
      "to": "delivered",
      "on": "settleOrder",
      "by": "attendant"
    },
    {
      "from": "pending",
      "to": "cancelled",
      "on": "settleOrder",
      "by": "attendant",
      "guard": "order cancelled before preparation"
    },
    {
      "from": "inKitchen",
      "to": "cancelled",
      "on": "settleOrder",
      "by": "attendant",
      "guard": "order cancelled by attendant"
    }
  ],
  "operationIds": [
    "createOrder",
    "updateKitchenStatus",
    "createStockMovement",
    "settleOrder"
  ],
  "entities": [
    "Order",
    "OrderItem",
    "OrderStatusEvent",
    "StockMovementEvent",
    "MenuItem",
    "StockItem",
    "Table",
    "ComboRule",
    "Shift",
    "StockLevel",
    "ShiftStatusEvent"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "attendant",
    "goal": "Registrar e acompanhar um pedido do lançamento até a finalização",
    "soThat": "O cliente receba seu pedido corretamente e o turno possa ser fechado sem pedidos em aberto",
    "steps": [
      "Atendente lança o pedido no POS informando mesa e itens do cardápio",
      "Pedido é enviado para a cozinha como ticket",
      "Cozinheiro atualiza status de preparação conforme sequência de cozinha",
      "Estoque é decrementado automaticamente ao preparar",
      "Atendente finaliza o pedido quando entregue e/ou pago"
    ],
    "outcome": "Pedido percorre todos os status até ser finalizado, permitindo o fechamento do turno sem pendências"
  },
  "capabilities": [
    {
      "capabilityId": "orderLifecycle",
      "title": "Ciclo de vida do Pedido",
      "actor": "attendant",
      "priority": "now"
    }
  ],
  "pageId": "orderLifecycle"
} as const;

export default workflowOrderLifecycle;
