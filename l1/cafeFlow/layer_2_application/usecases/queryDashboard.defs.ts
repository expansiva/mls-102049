/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryDashboard.defs.ts" enhancement="_blank"/>

export const queryDashboardUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryDashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryDashboard",
    "ports": [
      "Shift",
      "Order",
      "OrderItem",
      "StockLevel",
      "OrderStatusEvent",
      "ShiftStatusEvent"
    ],
    "functions": [
      {
        "functionName": "queryDashboard",
        "inputTypeName": "QueryDashboardInput",
        "outputTypeName": "ShiftDashboardAggregation",
        "input": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Identificador do turno ativo cujos dados serão agregados no dashboard, resolvido a partir da instância ativa do ciclo de vida de turno diário"
          }
        ],
        "output": [
          {
            "name": "shiftId",
            "type": "string",
            "ofEntity": "Shift",
            "description": "ID do turno agregado"
          },
          {
            "name": "shiftStatus",
            "type": "string",
            "ofEntity": "Shift",
            "description": "Status atual do turno (open ou closed)"
          },
          {
            "name": "openedAt",
            "type": "string",
            "ofEntity": "Shift",
            "description": "Data e hora de abertura do turno"
          },
          {
            "name": "closedAt",
            "type": "string",
            "ofEntity": "Shift",
            "description": "Data e hora de fechamento do turno, se aplicável"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "description": "Número total de pedidos do turno"
          },
          {
            "name": "totalRevenue",
            "type": "number",
            "description": "Receita total consolidada do turno (soma dos totais de pedidos entregues e prontos)"
          },
          {
            "name": "pendingOrdersCount",
            "type": "number",
            "description": "Quantidade de pedidos pendentes"
          },
          {
            "name": "preparingOrdersCount",
            "type": "number",
            "description": "Quantidade de pedidos em preparo (inKitchen ou preparing)"
          },
          {
            "name": "readyOrdersCount",
            "type": "number",
            "description": "Quantidade de pedidos prontos para entrega"
          },
          {
            "name": "deliveredOrdersCount",
            "type": "number",
            "description": "Quantidade de pedidos entregues"
          },
          {
            "name": "cancelledOrdersCount",
            "type": "number",
            "description": "Quantidade de pedidos cancelados"
          },
          {
            "name": "lowStockCount",
            "type": "number",
            "description": "Quantidade de itens de estoque abaixo do nível mínimo"
          }
        ],
        "ports": [
          "Shift",
          "Order",
          "OrderItem",
          "StockLevel"
        ],
        "rulesApplied": [
          "orderRequiresOpenShift",
          "shiftClosingRequiresSettledOrders"
        ],
        "transactional": false,
        "steps": [
          "Resolver shiftId a partir da instância ativa do ciclo de vida de turno diário (contextResolution: activeLifecycleInstance)",
          "Carregar o Shift pelo shiftId via porta Shift (getById); validar que o turno existe",
          "Validar regra orderRequiresOpenShift: o turno deve estar com status 'open' para que o dashboard exiba dados em tempo real",
          "Carregar todos os Orders do turno via porta Order, filtrando por shiftId",
          "Carregar os OrderItems dos pedidos via porta OrderItem para detalhamento de itens",
          "Agrupar pedidos por status (pending, inKitchen, preparing, ready, delivered, cancelled) e calcular contadores",
          "Calcular totalRevenue somando o campo total dos pedidos com status delivered ou ready",
          "Carregar StockLevels via porta StockLevel e, para cada stockItemId, ler o StockItem correspondente no MDM (ctx.data.mdmDocument.get) para obter minimumQuantity",
          "Contar quantos StockLevels possuem currentQuantity abaixo do minimumQuantity do StockItem referenciado (lowStockCount)",
          "Montar e retornar o ShiftDashboardAggregation com todas as métricas consolidadas"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem",
      "MenuItem"
    ]
  }
} as const;

export default queryDashboardUsecase;

export const pipeline = [
  {
    "id": "queryDashboard__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryDashboard.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryDashboard.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.d.ts",
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
