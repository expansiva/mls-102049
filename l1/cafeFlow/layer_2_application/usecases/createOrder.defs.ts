/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createOrder.defs.ts" enhancement="_blank"/>

export const createOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createOrder",
    "ports": [
      "Order",
      "Shift",
      "OrderItem",
      "OrderStatusEvent",
      "ShiftStatusEvent"
    ],
    "functions": [
      {
        "functionName": "createOrder",
        "inputTypeName": "CreateOrderInput",
        "outputTypeName": "CreateOrderOutput",
        "input": [
          {
            "name": "orderType",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Modalidade do pedido: dineIn ou takeout"
          },
          {
            "name": "tableId",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Mesa selecionada para pedidos dine-in; omitido para takeout"
          },
          {
            "name": "items",
            "type": "OrderItemInput[]",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "Lista de itens do cardápio com quantidade e substituições aplicadas"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Identificador único do pedido criado"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Status inicial do pedido (pending)"
          },
          {
            "name": "total",
            "type": "number",
            "required": true,
            "ofEntity": "Order",
            "description": "Total calculado do pedido somando todos os itens"
          }
        ],
        "ports": [
          "Order",
          "Shift",
          "OrderItem",
          "OrderStatusEvent"
        ],
        "rulesApplied": [
          "orderRequiresOpenShift"
        ],
        "transactional": true,
        "steps": [
          "1. Resolver workspaceId do contexto de requisição (RequestContext metadata)",
          "2. Buscar turno aberto (status=open) para o workspace via Shift port — regra orderRequiresOpenShift",
          "3. Se nenhum turno aberto encontrado, rejeitar a operação com erro de validação",
          "4. Se orderType=dineIn, validar que tableId foi informado e que a mesa existe e está ativa (MDM Table ref por id via ctx.data.mdmDocument.get)",
          "5. Para cada item em items, validar que menuItemId existe e está ativo (MDM MenuItem ref por id via ctx.data.mdmDocument.get)",
          "6. Aplicar ComboRules aplicáveis (MDM ComboRule ref por id) para calcular ajustes de preço nos itens compostos",
          "7. Calcular unitPrice a partir do preço do MenuItem e itemTotal = unitPrice * quantity para cada OrderItem",
          "8. Calcular total do pedido como soma de todos os itemTotals",
          "9. Gerar Order.id via ctx.idGenerator, definir status=pending, shiftId do turno aberto, createdAt/updatedAt via ctx.clock",
          "10. Gerar OrderItem.orderItemId via ctx.idGenerator para cada item, definir orderId=Order.id, status=pending, createdAt/updatedAt via ctx.clock",
          "11. Persistir Order (com OrderItems embutidos) via Order port dentro da transação",
          "12. Construir OrderStatusEvent (orderId, status=pending, timestamp) e persistir via OrderStatusEvent port dentro da mesma transação",
          "13. Retornar orderId, status e total"
        ]
      }
    ],
    "mdmRefs": [
      "MenuItem",
      "Table",
      "ComboRule"
    ]
  }
} as const;

export default createOrderUsecase;

export const pipeline = [
  {
    "id": "createOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createOrder.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createOrder.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.d.ts"
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
