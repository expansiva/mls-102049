/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/generateShiftClosingReport.defs.ts" enhancement="_blank"/>

export const generateShiftClosingReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "generateShiftClosingReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "generateShiftClosingReport",
    "ports": [
      "Shift",
      "Order",
      "OrderItem",
      "OrderStatusEvent",
      "ShiftStatusEvent"
    ],
    "functions": [
      {
        "functionName": "generateShiftClosingReport",
        "inputTypeName": "GenerateShiftClosingReportInput",
        "outputTypeName": "GenerateShiftClosingReportOutput",
        "input": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Identificador do turno selecionado para geração do relatório de fechamento"
          }
        ],
        "output": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Identificador do turno"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Status final do turno (closed)"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Data e hora de abertura do turno"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Data e hora de fechamento do turno"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "required": true,
            "description": "Número total de pedidos do turno"
          },
          {
            "name": "dineInOrders",
            "type": "number",
            "required": true,
            "description": "Quantidade de pedidos do tipo dineIn"
          },
          {
            "name": "takeoutOrders",
            "type": "number",
            "required": true,
            "description": "Quantidade de pedidos do tipo takeout"
          },
          {
            "name": "deliveredOrders",
            "type": "number",
            "required": true,
            "description": "Quantidade de pedidos entregues (delivered)"
          },
          {
            "name": "cancelledOrders",
            "type": "number",
            "required": true,
            "description": "Quantidade de pedidos cancelados"
          },
          {
            "name": "grossRevenue",
            "type": "number",
            "required": true,
            "description": "Faturamento bruto — soma dos totais dos pedidos entregues"
          },
          {
            "name": "netRevenue",
            "type": "number",
            "required": true,
            "description": "Faturamento líquido — faturamento bruto descontando pedidos cancelados"
          },
          {
            "name": "totalOrderItems",
            "type": "number",
            "required": true,
            "description": "Número total de itens de pedido processados no turno"
          }
        ],
        "ports": [
          "Shift",
          "Order",
          "OrderItem"
        ],
        "rulesApplied": [
          "shiftClosingRequiresSettledOrders"
        ],
        "transactional": false,
        "steps": [
          "1. Resolver shiftId a partir da entidade selecionada no contexto do fluxo de trabalho",
          "2. Carregar o Shift pelo shiftId através da porta Shift (getById)",
          "3. Validar que o turno existe e possui status = 'closed'; caso contrário, lançar erro de turno não fechado",
          "4. Carregar todos os Orders associados ao shiftId através da porta Order (list por shiftId)",
          "5. Aplicar regra shiftClosingRequiresSettledOrders: verificar que todos os pedidos estão em status terminal (delivered ou cancelled); se houver pedidos pendentes/inKitchen/preparing/ready, lançar erro indicando pedidos não finalizados",
          "6. Para cada pedido, carregar os OrderItems correspondentes através da porta OrderItem (list por orderId)",
          "7. Agregar pedidos por tipo (dineIn/takeout) e por status (delivered/cancelled)",
          "8. Calcular faturamento bruto somando o total dos pedidos delivered",
          "9. Calcular faturamento líquido subtraindo o total dos pedidos cancelled do faturamento bruto",
          "10. Contar o número total de OrderItems processados",
          "11. Retornar relatório consolidado com shiftSummary, ordersAggregation e revenueTotals"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default generateShiftClosingReportUsecase;

export const pipeline = [
  {
    "id": "generateShiftClosingReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/generateShiftClosingReport.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/generateShiftClosingReport.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
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
