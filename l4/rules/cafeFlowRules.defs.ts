/// <mls fileReference="_102049_/l4/rules/cafeFlowRules.defs.ts" enhancement="_blank"/>

export const cafeFlowRules = {
  "ruleSetId": "cafeFlowRules",
  "rules": [
    {
      "ruleId": "orderRequiresOpenShift",
      "title": "Pedido exige turno aberto",
      "description": "Todo pedido deve ser criado dentro de um turno aberto. Não é possível lançar pedidos sem turno ativo.",
      "appliesTo": [
        "Order",
        "Shift"
      ]
    },
    {
      "ruleId": "stockDecrementOnPreparing",
      "title": "Baixa de estoque ao preparar",
      "description": "A baixa de estoque dos insumos vinculados a um item do cardápio ocorre quando o item do pedido passa para o status 'preparing'.",
      "appliesTo": [
        "OrderItem",
        "StockLevel",
        "StockMovementEvent"
      ]
    },
    {
      "ruleId": "lowStockAlert",
      "title": "Alerta de estoque baixo",
      "description": "Quando a quantidade atual de StockLevel é menor ou igual à quantidade mínima definida no StockItem, o item aparece como estoque baixo no dashboard.",
      "appliesTo": [
        "StockLevel",
        "StockItem"
      ]
    },
    {
      "ruleId": "shiftClosingRequiresSettledOrders",
      "title": "Fechamento de turno exige pedidos finalizados",
      "description": "Um turno só pode ser fechado quando todos os pedidos estão com status 'delivered' ou 'cancelled'.",
      "appliesTo": [
        "Shift",
        "Order"
      ]
    },
    {
      "ruleId": "comboPriceDifference",
      "title": "Diferença de preço em combos e substituições",
      "description": "Combos e substituições aplicam diferença de preço conforme as regras cadastradas em ComboRule, refletindo no total do pedido.",
      "appliesTo": [
        "OrderItem",
        "ComboRule",
        "MenuItem"
      ]
    },
    {
      "ruleId": "kitchenStatusSequence",
      "title": "Sequência de status de cozinha",
      "description": "Itens do pedido seguem a sequência obrigatória: pending → preparing → ready → delivered. Não é permitido pular etapas.",
      "appliesTo": [
        "OrderItem"
      ]
    }
  ]
} as const;

export default cafeFlowRules;
