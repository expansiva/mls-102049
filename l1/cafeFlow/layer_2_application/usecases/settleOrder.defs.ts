/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/settleOrder.defs.ts" enhancement="_blank"/>

export const settleOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "settleOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "settleOrder",
    "ports": [
      "Order",
      "OrderStatusEvent"
    ],
    "functions": [
      {
        "functionName": "settleOrder",
        "inputTypeName": "SettleOrderInput",
        "outputTypeName": "SettleOrderOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Identificador do pedido selecionado para finalização, resolvido a partir da entidade selecionada na jornada do atendente"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Identificador do pedido finalizado"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Status final do pedido após a transição (delivered)"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Data/hora da última atualização do pedido"
          },
          {
            "name": "orderStatusEventId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderStatusEvent",
            "description": "Identificador do evento de transição de status registrado no histórico"
          }
        ],
        "ports": [
          "Order",
          "OrderStatusEvent"
        ],
        "rulesApplied": [
          "orderRequiresOpenShift",
          "shiftClosingRequiresSettledOrders"
        ],
        "transactional": true,
        "steps": [
          "1. Resolver orderId a partir da entidade selecionada (selectedEntity) no contexto da jornada do atendente",
          "2. Carregar o aggregate Order pelo orderId através do port Order",
          "3. Validar regra orderRequiresOpenShift: verificar que o turno vinculado ao pedido (Order.shiftId) está em aberto; se não estiver, abortar com erro de domínio",
          "4. Capturar o status atual do pedido (previousStatus) para registro no evento de histórico",
          "5. Transicionar Order.status para 'delivered' (resolvido via workflowState)",
          "6. Atribuir Order.updatedAt com ctx.clock.now()",
          "7. Gerar orderStatusEventId via ctx.idGenerator para o novo OrderStatusEvent",
          "8. Construir registro OrderStatusEvent com orderId, status='entregue', previousStatus mapeado do status anterior, createdAt=now, updatedAt=now",
          "9. Persistir o Order atualizado através do port Order dentro da transação",
          "10. Anexar o OrderStatusEvent através do port OrderStatusEvent dentro da mesma transação (evento imutável de auditoria)",
          "11. Retornar orderId, status, updatedAt e orderStatusEventId como confirmação da operação"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default settleOrderUsecase;

export const pipeline = [
  {
    "id": "settleOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/settleOrder.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/settleOrder.defs.ts",
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
