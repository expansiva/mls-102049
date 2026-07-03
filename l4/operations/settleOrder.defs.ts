/// <mls fileReference="_102049_/l4/operations/settleOrder.defs.ts" enhancement="_blank"/>

export const operationSettleOrder = {
  "operationId": "settleOrder",
  "title": "Finalizar pedido",
  "actor": "attendant",
  "entity": "Order",
  "kind": "update",
  "reads": [
    "Order",
    "Order.status",
    "Order.shiftId"
  ],
  "writes": [
    "Order",
    "Order.status",
    "Order.updatedAt",
    "OrderStatusEvent"
  ],
  "rulesApplied": [
    "orderRequiresOpenShift",
    "shiftClosingRequiresSettledOrders"
  ],
  "story": {
    "actor": "attendant",
    "goal": "Finalizar o pedido quando entregue e/ou pago",
    "soThat": "O turno possa ser fechado sem pedidos pendentes",
    "steps": [
      "Verificar que o pedido está marcado como pronto pela cozinha",
      "Confirmar entrega ou pagamento",
      "Marcar pedido como finalizado"
    ],
    "outcome": "Pedido atualizado para status finalizado, liberando o fechamento do turno"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Comando para finalizar um único pedido, transicionando seu status para entregue e registrando o evento de transição no histórico.",
    "entity": "Order",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "single",
    "output": [
      "Order",
      "OrderStatusEvent"
    ]
  },
  "inputs": [
    {
      "inputId": "orderId",
      "fieldRef": "Order.id",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador do pedido selecionado para finalização"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.orderId",
      "source": "selectedEntity",
      "originRef": "Order.id",
      "description": "Id do pedido obtido da entidade selecionada na jornada do atendente"
    },
    {
      "targetRef": "Order.status",
      "source": "workflowState",
      "originRef": "Order.status",
      "description": "Novo status do pedido definido pela transição de workflow para finalizado"
    },
    {
      "targetRef": "Order.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data/hora da última atualização atribuída automaticamente pelo sistema"
    }
  ],
  "acceptanceAssertions": [
    "O pedido a ser finalizado deve estar selecionado previamente na jornada do atendente",
    "O identificador técnico do pedido não é fornecido manualmente pelo usuário",
    "A operação só é permitida quando o pedido está vinculado a um turno em aberto",
    "O sistema registra automaticamente a data/hora da atualização do pedido",
    "A transição de status é registrada como evento imutável no histórico do pedido"
  ],
  "capability": {
    "capabilityId": "orderLifecycle",
    "title": "Ciclo de vida do Pedido",
    "actor": "attendant",
    "priority": "now"
  },
  "pageId": "orderLifecycle",
  "commandName": "settleOrder",
  "bffName": "cafeFlow.orderLifecycle.settleOrder"
} as const;

export default operationSettleOrder;
