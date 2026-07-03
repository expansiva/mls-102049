/// <mls fileReference="_102049_/l4/workflows/kitchenTicketFlow.defs.ts" enhancement="_blank"/>

export const workflowKitchenTicketFlow = {
  "workflowId": "kitchenTicketFlow",
  "title": "Fluxo de ticket de cozinha",
  "executionMode": "sequential",
  "trigger": "Ticket de pedido chega à fila da cozinha a partir do POS",
  "actors": [
    "cook"
  ],
  "states": [
    "inKitchen",
    "preparing",
    "ready"
  ],
  "transitions": [
    {
      "from": "inKitchen",
      "to": "preparing",
      "on": "startPreparation",
      "by": "cook"
    },
    {
      "from": "preparing",
      "to": "ready",
      "on": "markReady",
      "by": "cook"
    }
  ],
  "operationIds": [
    "updateKitchenStatus",
    "createStockMovement"
  ],
  "entities": [
    "Order",
    "OrderStatusEvent",
    "StockMovementEvent",
    "StockLevel"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cook",
    "goal": "Acompanhar e preparar os tickets de cozinha na ordem correta",
    "soThat": "Os pedidos sejam preparados na ordem correta com estoque sempre atualizado",
    "steps": [
      "Cozinheiro visualiza a fila de tickets recebidos do POS",
      "Inicia o preparo atualizando o status do ticket",
      "Dá baixa nos insumos utilizados no estoque",
      "Marca o ticket como pronto para retirada"
    ],
    "outcome": "Ticket percorre a sequência de status de cozinha e o estoque é decrementado conforme o preparo"
  },
  "capabilities": [
    {
      "capabilityId": "kitchenTicketFlow",
      "title": "Fluxo de ticket de cozinha",
      "actor": "cook",
      "priority": "now"
    }
  ],
  "pageId": "kitchenTicketFlow"
} as const;

export default workflowKitchenTicketFlow;
