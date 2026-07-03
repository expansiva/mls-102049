/// <mls fileReference="_102049_/l4/operations/updateKitchenStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateKitchenStatus = {
  "operationId": "updateKitchenStatus",
  "title": "Atualizar status de cozinha",
  "actor": "cook",
  "entity": "OrderStatusEvent",
  "kind": "create",
  "reads": [
    "Order",
    "OrderStatusEvent"
  ],
  "writes": [
    "OrderStatusEvent",
    "Order.status"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cook",
    "goal": "Atualizar o status de preparo de um ticket",
    "soThat": "O atendente saiba em qual etapa está cada pedido",
    "steps": [
      "Visualizar ticket na fila de cozinha",
      "Atualizar status seguindo a sequência: recebido → em preparo → pronto",
      "Confirmar a mudança de status"
    ],
    "outcome": "Novo evento de status criado e o pedido avança na sequência de cozinha"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Cozinheiro seleciona um ticket da fila de cozinha e informa o novo status de preparo, criando um evento de transição.",
    "entity": "OrderStatusEvent",
    "filters": [],
    "sort": [],
    "output": []
  },
  "inputs": [
    {
      "inputId": "orderId",
      "fieldRef": "OrderStatusEvent.orderId",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência ao pedido cujo status será atualizado, obtido do ticket selecionado na fila de cozinha."
    },
    {
      "inputId": "status",
      "fieldRef": "OrderStatusEvent.status",
      "required": true,
      "source": "userInput",
      "description": "Novo status de preparo informado pelo cozinheiro (ex.: em preparo, pronto)."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "OrderStatusEvent.orderStatusEventId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Identificador único do evento gerado automaticamente pelo sistema."
    },
    {
      "targetRef": "OrderStatusEvent.previousStatus",
      "source": "selectedEntity",
      "originRef": "Order.status",
      "description": "Status atual do pedido antes da transição, resolvido a partir da entidade selecionada."
    },
    {
      "targetRef": "OrderStatusEvent.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data/hora de criação do evento atribuída automaticamente."
    },
    {
      "targetRef": "OrderStatusEvent.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data/hora de atualização do evento atribuída automaticamente."
    }
  ],
  "acceptanceAssertions": [
    "A operação exige um pedido previamente selecionado na fila de cozinha, sem digitação de ID técnico.",
    "O status anterior é resolvido automaticamente pelo sistema a partir do estado atual do pedido selecionado.",
    "O cozinheiro deve informar o novo status válido para criar o evento de transição."
  ],
  "capability": {
    "capabilityId": "updateKitchenStatus",
    "title": "Atualizar status de cozinha",
    "actor": "cook",
    "priority": "now"
  },
  "pageId": "orderLifecycle",
  "commandName": "updateKitchenStatus",
  "bffName": "cafeFlow.orderLifecycle.updateKitchenStatus"
} as const;

export default operationUpdateKitchenStatus;
