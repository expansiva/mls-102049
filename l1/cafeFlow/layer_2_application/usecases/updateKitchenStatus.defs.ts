/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateKitchenStatus.defs.ts" enhancement="_blank"/>

export const updateKitchenStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateKitchenStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateKitchenStatus",
    "ports": [
      "Order",
      "OrderStatusEvent"
    ],
    "functions": [
      {
        "functionName": "updateKitchenStatus",
        "inputTypeName": "UpdateKitchenStatusInput",
        "outputTypeName": "UpdateKitchenStatusOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderStatusEvent",
            "description": "Referência ao pedido cujo status será atualizado, obtido do ticket selecionado na fila de cozinha."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "OrderStatusEvent",
            "description": "Novo status de preparo informado pelo cozinheiro (criado, em preparo, pronto, entregue, cancelado)."
          }
        ],
        "output": [
          {
            "name": "orderStatusEventId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderStatusEvent",
            "description": "Identificador único do evento de transição criado."
          },
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderStatusEvent",
            "description": "Pedido cujo status foi atualizado."
          },
          {
            "name": "previousStatus",
            "type": "string",
            "required": false,
            "ofEntity": "OrderStatusEvent",
            "description": "Status anterior do pedido antes da transição."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "OrderStatusEvent",
            "description": "Novo status aplicado ao pedido."
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "OrderStatusEvent",
            "description": "Data/hora de criação do evento."
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "validate-status-enum: o status informado deve ser um dos valores permitidos (criado, em preparo, pronto, entregue, cancelado)",
          "resolve-previous-status: o status anterior é obtido automaticamente do estado atual do pedido carregado via porta Order",
          "generate-event-id: orderStatusEventId é gerado automaticamente pelo sistema via uuid",
          "auto-timestamps: createdAt e updatedAt são atribuídos automaticamente com o relógio do sistema",
          "validate-order-exists: o pedido referenciado por orderId deve existir e estar carregado antes de criar o evento"
        ],
        "transactional": true,
        "steps": [
          "1. Receber orderId (do ticket selecionado) e status (informado pelo cozinheiro) como entrada",
          "2. Validar que status é um valor permitido do enum (criado, em preparo, pronto, entregue, cancelado)",
          "3. Carregar o Order pelo orderId através da porta Order para obter o status atual",
          "4. Extrair previousStatus a partir de Order.status carregado",
          "5. Gerar orderStatusEventId via ctx.idGenerator.uuid()",
          "6. Obter createdAt e updatedAt via ctx.clock.now()",
          "7. Construir o OrderStatusEvent com orderId, status, previousStatus, orderStatusEventId, createdAt e updatedAt",
          "8. Persistir o OrderStatusEvent através da porta Order (mesma transação)",
          "9. Retornar orderStatusEventId, orderId, previousStatus, status e createdAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateKitchenStatusUsecase;

export const pipeline = [
  {
    "id": "updateKitchenStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateKitchenStatus.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateKitchenStatus.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
