/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/settleOrder.defs.ts" enhancement="_blank"/>

export const settleOrderController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "settleOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "orderLifecycle",
    "controllerName": "SettleOrderController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowSettleOrderHandler",
        "command": "settleOrder",
        "usecaseRef": "settleOrder",
        "inputTypeName": "SettleOrderInput",
        "kind": "update",
        "inputContract": [
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
        "accessPattern": {
          "kind": "commandInput",
          "description": "Comando para finalizar um único pedido, transicionando seu status para entregue e registrando o evento de transição no histórico.",
          "entity": "Order",
          "pagination": "none",
          "selection": "single",
          "output": [
            "Order",
            "OrderStatusEvent"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.orderLifecycle.settleOrder",
        "handlerName": "cafeFlowSettleOrderHandler"
      }
    ]
  }
} as const;

export default settleOrderController;

export const pipeline = [
  {
    "id": "settleOrder__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/settleOrder.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/settleOrder.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/settleOrder.d.ts"
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
