/// <mls fileReference="_102049_/l5/cafeFlow/module.defs.ts" enhancement="_blank"/>

export const modulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "module",
  "artifactId": "cafeFlow",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentFinalizeSolutionPlan",
    "stepId": 11,
    "planId": "plan-finalize-solution-plan"
  },
  "data": {
    "module": {
      "moduleName": "cafeFlow",
      "purpose": "Agilizar pedidos, coordenação da cozinha e controle básico de estoque e turno para cafeterias e lanchonetes pequenas.",
      "businessDomain": "Food service / cafeteria POS e operações",
      "languages": [
        "pt-BR",
        "en"
      ],
      "visualStyle": {
        "tone": "Limpo e moderno",
        "layout": "Fácil de ler em tablets",
        "palette": [
          "#1F2937",
          "#F9FAFB",
          "#F59E0B",
          "#10B981"
        ]
      }
    },
    "actors": [
      {
        "actorId": "attendantCashier",
        "title": "Atendente/Caixa",
        "description": "Registra pedidos, acompanha status e atende clientes."
      },
      {
        "actorId": "kitchen",
        "title": "Cozinha",
        "description": "Prepara pedidos e atualiza status de produção."
      },
      {
        "actorId": "manager",
        "title": "Gerente",
        "description": "Gerencia cardápio, estoque, turnos e métricas."
      }
    ],
    "capabilities": [
      {
        "capabilityId": "manageOrders",
        "title": "Lançar e acompanhar pedidos",
        "description": "Criar pedidos de mesa ou takeout e acompanhar status até a entrega.",
        "actor": "attendantCashier",
        "priority": "now"
      },
      {
        "capabilityId": "updateKitchenStatus",
        "title": "Atualizar status da cozinha",
        "description": "Alterar status do pedido para preparar, pronto e entregue.",
        "actor": "kitchen",
        "priority": "now"
      },
      {
        "capabilityId": "manageMenu",
        "title": "Gerenciar cardápio",
        "description": "Cadastrar e ajustar itens do cardápio e categorias.",
        "actor": "manager",
        "priority": "now"
      },
      {
        "capabilityId": "manageInventory",
        "title": "Gerenciar estoque",
        "description": "Cadastrar itens de estoque e controlar níveis/alertas.",
        "actor": "manager",
        "priority": "now"
      },
      {
        "capabilityId": "closeDailyShift",
        "title": "Fechar turno diário",
        "description": "Consolidar vendas e registrar fechamento do turno.",
        "actor": "manager",
        "priority": "now"
      },
      {
        "capabilityId": "viewDashboard",
        "title": "Acompanhar dashboard",
        "description": "Visualizar vendas do dia, itens mais vendidos e estoque baixo.",
        "actor": "manager",
        "priority": "now"
      },
      {
        "capabilityId": "aiSalesAssistant",
        "title": "Assistente IA de vendas",
        "description": "Gerar resumo de vendas do dia e sugerir promoções com base nos últimos 7 dias.",
        "actor": "manager",
        "priority": "soon"
      }
    ],
    "ontology": {
      "entities": {
        "MenuItem": {
          "title": "Item do Cardápio",
          "description": "Produto vendável com preço, categoria e vínculo com ingredientes do estoque.",
          "ownership": "moduleOwned"
        },
        "MenuCategory": {
          "title": "Categoria do Cardápio",
          "description": "Categoria padronizada para organizar itens do cardápio.",
          "ownership": "mdmOwned"
        },
        "Order": {
          "title": "Pedido",
          "description": "Compromisso principal de venda com origem (mesa/takeout), itens e status.",
          "ownership": "moduleOwned"
        },
        "OrderItem": {
          "title": "Item do Pedido",
          "description": "Linha de pedido vinculada ao item do cardápio e quantidade.",
          "ownership": "moduleOwned"
        },
        "TableSeat": {
          "title": "Mesa/Comanda",
          "description": "Referência de mesa ou comanda para pedidos no salão.",
          "ownership": "moduleOwned"
        },
        "InventoryItem": {
          "title": "Item de Estoque",
          "description": "Ingrediente ou insumo com unidade de medida e níveis de estoque.",
          "ownership": "moduleOwned"
        },
        "InventoryMovement": {
          "title": "Movimento de Estoque",
          "description": "Registro de baixa automática ou ajuste manual por item de estoque.",
          "ownership": "moduleOwned"
        },
        "DailyShift": {
          "title": "Turno Diário",
          "description": "Registro do turno do dia com abertura, fechamento e consolidação de vendas.",
          "ownership": "moduleOwned"
        },
        "ShiftClosureReport": {
          "title": "Relatório de Fechamento",
          "description": "Resumo consolidado do turno diário.",
          "ownership": "moduleOwned"
        },
        "OrderStatus": {
          "title": "Status do Pedido",
          "description": "Catálogo padronizado de status do pedido para o fluxo da cozinha.",
          "ownership": "mdmOwned"
        },
        "StockUnit": {
          "title": "Unidade de Estoque",
          "description": "Catálogo de unidades de medida do estoque.",
          "ownership": "mdmOwned"
        },
        "PromotionSuggestion": {
          "title": "Sugestão de Promoção",
          "description": "Sugestões geradas pela IA com base nos últimos 7 dias.",
          "ownership": "moduleOwned"
        },
        "SalesSummary": {
          "title": "Resumo de Vendas",
          "description": "Resumo diário gerado pela IA.",
          "ownership": "moduleOwned"
        }
      }
    },
    "relationships": [
      {
        "relationshipId": "menuItemCategory",
        "fromEntity": "MenuItem",
        "toEntity": "MenuCategory",
        "type": "manyToOne",
        "description": "Item do cardápio pertence a uma categoria."
      },
      {
        "relationshipId": "orderItemsOrder",
        "fromEntity": "OrderItem",
        "toEntity": "Order",
        "type": "manyToOne",
        "description": "Item de pedido pertence a um pedido."
      },
      {
        "relationshipId": "orderItemsMenuItem",
        "fromEntity": "OrderItem",
        "toEntity": "MenuItem",
        "type": "manyToOne",
        "description": "Item de pedido referencia item do cardápio."
      },
      {
        "relationshipId": "orderTableSeat",
        "fromEntity": "Order",
        "toEntity": "TableSeat",
        "type": "optionalManyToOne",
        "description": "Pedido pode estar associado a uma mesa/comanda."
      },
      {
        "relationshipId": "menuItemInventory",
        "fromEntity": "MenuItem",
        "toEntity": "InventoryItem",
        "type": "manyToMany",
        "description": "Item do cardápio consome itens de estoque (ingredientes)."
      },
      {
        "relationshipId": "inventoryMovementItem",
        "fromEntity": "InventoryMovement",
        "toEntity": "InventoryItem",
        "type": "manyToOne",
        "description": "Movimento de estoque referencia item de estoque."
      },
      {
        "relationshipId": "shiftOrders",
        "fromEntity": "Order",
        "toEntity": "DailyShift",
        "type": "manyToOne",
        "description": "Pedidos pertencem a um turno diário."
      },
      {
        "relationshipId": "shiftReport",
        "fromEntity": "ShiftClosureReport",
        "toEntity": "DailyShift",
        "type": "oneToOne",
        "description": "Relatório de fechamento consolida um turno."
      },
      {
        "relationshipId": "orderStatusRef",
        "fromEntity": "Order",
        "toEntity": "OrderStatus",
        "type": "manyToOne",
        "description": "Pedido referencia status padronizado."
      },
      {
        "relationshipId": "inventoryUnit",
        "fromEntity": "InventoryItem",
        "toEntity": "StockUnit",
        "type": "manyToOne",
        "description": "Item de estoque usa unidade de medida."
      },
      {
        "relationshipId": "summaryShift",
        "fromEntity": "SalesSummary",
        "toEntity": "DailyShift",
        "type": "optionalManyToOne",
        "description": "Resumo de vendas pode referenciar turno do dia."
      }
    ]
  }
} as const;

export default modulePlan;
