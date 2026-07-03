/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateKitchenStatus.defs.ts" enhancement="_blank"/>

export const updateKitchenStatusController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateKitchenStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "orderLifecycle",
    "controllerName": "UpdateKitchenStatusController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateKitchenStatusHandler",
        "command": "updateKitchenStatus",
        "usecaseRef": "updateKitchenStatus",
        "inputTypeName": "UpdateKitchenStatusInput",
        "kind": "create",
        "inputContract": [
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
        "accessPattern": {
          "kind": "commandInput",
          "description": "Cozinheiro seleciona um ticket da fila de cozinha e informa o novo status de preparo, criando um evento de transição.",
          "entity": "OrderStatusEvent"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.orderLifecycle.updateKitchenStatus",
        "handlerName": "cafeFlowUpdateKitchenStatusHandler"
      }
    ]
  }
} as const;

export default updateKitchenStatusController;

export const pipeline = [
  {
    "id": "updateKitchenStatus__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateKitchenStatus.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateKitchenStatus.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/updateKitchenStatus.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
