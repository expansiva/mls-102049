/// <mls fileReference="_102049_/l4/workflows/inventoryDecrement.defs.ts" enhancement="_blank"/>

export const inventoryDecrementDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "inventoryDecrement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "inventoryDecrement",
      "title": "Baixa de estoque por pedido",
      "purpose": "Registrar automaticamente a saída de insumos do estoque vinculados aos produtos vendidos, garantindo a integridade do inventário.",
      "executionMode": "automation",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [],
      "states": [
        {
          "stateId": "waitingDelivered",
          "description": "Aguardando pedido atingir status entregue para iniciar a baixa."
        },
        {
          "stateId": "decrementApplied",
          "description": "Baixa de estoque registrada e estoque atualizado."
        },
        {
          "stateId": "decrementSkipped",
          "description": "Baixa não realizada por condição não atendida."
        }
      ],
      "transitions": [
        {
          "from": "waitingDelivered",
          "to": "decrementApplied",
          "trigger": "orderDelivered",
          "actor": "system",
          "conditions": [
            "orderStatusId.entregue"
          ],
          "actions": [
            "InventoryMovement.movementType=saida",
            "InventoryMovement.movementStatus=registrado",
            "InventoryMovement.orderId=Order.orderId",
            "InventoryMovement.inventoryItemId=InventoryItem.inventoryItemId",
            "InventoryMovement.quantity=calculated",
            "InventoryMovement.createdAt=now",
            "InventoryMovement.updatedAt=now",
            "InventoryItem.currentStock=InventoryItem.currentStock-InventoryMovement.quantity",
            "InventoryItem.updatedAt=now"
          ],
          "rulesApplied": [
            "inventoryDecrementRule"
          ]
        },
        {
          "from": "waitingDelivered",
          "to": "decrementSkipped",
          "trigger": "orderNotDelivered",
          "actor": "system",
          "conditions": [
            "orderStatusId!=entregue"
          ],
          "actions": [],
          "rulesApplied": [
            "inventoryDecrementRule"
          ]
        }
      ],
      "requiredEntities": [
        "Order",
        "OrderItem",
        "InventoryItem",
        "InventoryMovement"
      ],
      "persistenceRefs": [
        "inventoryItem",
        "inventoryMovement",
        "order",
        "orderItem",
        "inventoryAlertMetrics"
      ],
      "usecaseRefs": [
        "registrarMovimentoEstoque"
      ],
      "metricRefs": [
        "inventoryAlertMetrics"
      ],
      "userActions": [],
      "relatedPages": [
        "cardapioEstoque"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "inventoryDecrementRule"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "decrementOnDelivered",
          "title": "Executar baixa apenas no status 'entregue'",
          "priority": "now",
          "description": "Disparar o fluxo somente quando Order.orderStatusId for 'entregue', evitando baixa em pedidos cancelados ou não confirmados.",
          "tradeoff": "Pode atrasar o ajuste de estoque em operações que preferem reservar itens já no preparo."
        },
        {
          "suggestionId": "batchDecrement",
          "title": "Processar baixas em lote ao fechar turno",
          "priority": "later",
          "description": "Acumular baixas durante o turno e executar consolidação ao fechamento, reduzindo concorrência no estoque.",
          "tradeoff": "Risco de divergência temporária e menor visibilidade em tempo real."
        },
        {
          "suggestionId": "noTaskWorkflow",
          "title": "Sem criação de tarefas",
          "priority": "now",
          "description": "O fluxo é automático e executado por use case; não há intervenção humana prevista, portanto não cria tarefas.",
          "tradeoff": "Exceções precisarão de monitoramento via alertas e relatórios em vez de tarefas."
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
          "entity": "InventoryItem"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "InventoryMovement"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "inventoryDecrement"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/inventoryDecrement.defs.ts",
      "exportName": "inventoryDecrementDef",
      "saveAsDefs": true
    }
  }
} as const;

export default inventoryDecrementDef;
