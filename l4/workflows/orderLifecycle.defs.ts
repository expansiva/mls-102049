/// <mls fileReference="_102049_/l4/workflows/orderLifecycle.defs.ts" enhancement="_blank"/>

export const orderLifecycleDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "orderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "orderLifecycle",
      "title": "Fluxo de pedido",
      "purpose": "Gerenciar o ciclo de vida completo de um pedido, desde a criação pelo atendente até a entrega ou cancelamento, integrando com a fila da cozinha.",
      "executionMode": "entityLifecycle",
      "createsTask": true,
      "taskConfig": {
        "taskTitleTemplate": "Preparar pedido {{orderId}}",
        "assigneeRules": [
          "kitchen"
        ],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "attendantCashier",
        "kitchen"
      ],
      "states": [
        {
          "stateId": "start",
          "description": "Pedido ainda não registrado no sistema."
        },
        {
          "stateId": "received",
          "description": "Pedido registrado e aguardando início do preparo."
        },
        {
          "stateId": "preparing",
          "description": "Pedido em preparo pela cozinha."
        },
        {
          "stateId": "ready",
          "description": "Pedido pronto para retirada e entrega."
        },
        {
          "stateId": "delivered",
          "description": "Pedido entregue ao cliente e finalizado."
        },
        {
          "stateId": "cancelled",
          "description": "Pedido cancelado e encerrado."
        }
      ],
      "transitions": [
        {
          "from": "start",
          "to": "received",
          "trigger": "criarPedido",
          "actor": "attendantCashier",
          "conditions": [],
          "actions": [
            "Order.orderStatusId=recebido",
            "Order.createdAt=now",
            "Order.updatedAt=now"
          ],
          "rulesApplied": [
            "orderStatusLifecycle",
            "inventoryDecrementRule"
          ]
        },
        {
          "from": "received",
          "to": "preparing",
          "trigger": "iniciarPreparo",
          "actor": "kitchen",
          "conditions": [],
          "actions": [
            "Order.orderStatusId=preparando",
            "Order.updatedAt=now"
          ],
          "rulesApplied": [
            "orderStatusLifecycle"
          ]
        },
        {
          "from": "preparing",
          "to": "ready",
          "trigger": "marcarPronto",
          "actor": "kitchen",
          "conditions": [],
          "actions": [
            "Order.orderStatusId=pronto",
            "Order.updatedAt=now"
          ],
          "rulesApplied": [
            "orderStatusLifecycle"
          ]
        },
        {
          "from": "ready",
          "to": "delivered",
          "trigger": "confirmarEntrega",
          "actor": "attendantCashier",
          "conditions": [],
          "actions": [
            "Order.orderStatusId=entregue",
            "Order.updatedAt=now"
          ],
          "rulesApplied": [
            "orderStatusLifecycle"
          ]
        },
        {
          "from": "received",
          "to": "cancelled",
          "trigger": "cancelarPedido",
          "actor": "attendantCashier",
          "conditions": [],
          "actions": [
            "Order.orderStatusId=cancelado",
            "Order.updatedAt=now"
          ],
          "rulesApplied": [
            "orderStatusLifecycle",
            "inventoryDecrementRule"
          ]
        },
        {
          "from": "preparing",
          "to": "cancelled",
          "trigger": "cancelarPedido",
          "actor": "attendantCashier",
          "conditions": [],
          "actions": [
            "Order.orderStatusId=cancelado",
            "Order.updatedAt=now"
          ],
          "rulesApplied": [
            "orderStatusLifecycle",
            "inventoryDecrementRule"
          ]
        },
        {
          "from": "ready",
          "to": "cancelled",
          "trigger": "cancelarPedido",
          "actor": "attendantCashier",
          "conditions": [],
          "actions": [
            "Order.orderStatusId=cancelado",
            "Order.updatedAt=now"
          ],
          "rulesApplied": [
            "orderStatusLifecycle",
            "inventoryDecrementRule"
          ]
        }
      ],
      "requiredEntities": [
        "Order",
        "OrderItem",
        "TableSeat"
      ],
      "persistenceRefs": [
        "order",
        "orderItem",
        "tableSeat",
        "dailySalesMetrics",
        "topSellingItemsMetrics",
        "operationalMetrics"
      ],
      "usecaseRefs": [
        "criarPedido",
        "cancelarPedido",
        "listarPedidos",
        "buscarPedidoPorId"
      ],
      "metricRefs": [
        "dailySalesMetrics",
        "topSellingItemsMetrics",
        "operationalMetrics"
      ],
      "userActions": [
        "Criar pedido",
        "Iniciar preparo",
        "Marcar pronto",
        "Confirmar entrega",
        "Cancelar pedido",
        "Listar pedidos",
        "Buscar pedido por ID"
      ],
      "relatedPages": [
        "painelCozinha",
        "posRapido"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "orderStatusLifecycle",
        "inventoryDecrementRule"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "kitchenTaskOnCreate",
          "title": "Criar tarefa na cozinha ao confirmar pedido",
          "priority": "now",
          "description": "Gerar tarefa automática para a cozinha quando o pedido for criado no estado recebido, garantindo visibilidade na fila de preparo.",
          "tradeoff": "Aumenta o volume de tarefas ativas e exige disciplina da equipe para mantê-las atualizadas."
        },
        {
          "suggestionId": "notifyAttendantReady",
          "title": "Notificar atendente quando pedido ficar pronto",
          "priority": "now",
          "description": "Disparar notificação ao atendente quando o pedido transitar para pronto.",
          "tradeoff": "Requer infraestrutura de notificações em tempo real ou polling no POS."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "cafeFlow"
      ],
      "pageRefsByModule": [],
      "entityRefsByModule": [
        {
          "moduleId": "cafeFlow",
          "entity": "Order"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "OrderItem"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "TableSeat"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "orderLifecycle"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/orderLifecycle.defs.ts",
      "exportName": "orderLifecycleDef",
      "saveAsDefs": true
    }
  }
} as const;

export default orderLifecycleDef;
