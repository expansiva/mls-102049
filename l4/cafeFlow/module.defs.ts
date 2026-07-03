/// <mls fileReference="_102049_/l4/cafeFlow/module.defs.ts" enhancement="_blank"/>

export const cafeFlowModule = {
  "module": {
    "moduleName": "cafeFlow",
    "purpose": "App de gestão para cafeterias e lanchonetes pequenas (1–2 PDVs) com foco em atendimento rápido de pedidos, coordenação de cozinha e controle simples de estoque.",
    "businessDomain": "Food Service / Food & Beverage",
    "languages": [
      "pt-BR",
      "en"
    ],
    "visualStyle": "Clean, fast-touch POS interface with kitchen display board; dashboard with cards and charts for management."
  },
  "designContext": {
    "initialPrompt": "Gere um app profissional chamado CafeFlow para cafeterias e lanchonetes pequenas.\nEntidades principais: Item do Cardápio (categoria, preço, ingredientes em estoque), Pedido (mesa ou takeout, itens, status), Turno Diário, Item de Estoque.\nTelas chave: Dashboard (vendas de hoje, itens mais vendidos, estoque baixo), Interface rápida de POS (lançamento de pedido + status cozinha), Gerenciamento de cardápio e estoque, Relatório de fechamento de turno.\nFuncionalidade LLM: Assistente IA que gera \"resumo de vendas do dia\" ou sugere \"quais itens promover com base nos últimos 7 dias\".\nFoco: Atendimento rápido de pedidos, coordenação de cozinha e controle simples de estoque para food service.\nlinguagem: en, pt-br",
    "userLanguage": "pt-BR",
    "openDetails": [
      {
        "title": "Integração do Assistente IA",
        "description": "Como o LLM deve gerar resumos de vendas e sugestões de promoção de forma precisa para food service?"
      },
      {
        "title": "Suporte a Idiomas",
        "description": "Priorizar pt-BR ou oferecer en e pt-br desde o início para o app CafeFlow?"
      }
    ],
    "decisions": [
      {
        "recommendationId": "orderLifecycleWorkflow",
        "artifactType": "workflow",
        "title": "Ciclo de vida do Pedido",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "dailyShiftLifecycleWorkflow",
        "artifactType": "workflow",
        "title": "Ciclo de vida do Turno Diário",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "kitchenTicketFlowWorkflow",
        "artifactType": "workflow",
        "title": "Fluxo de ticket de cozinha",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "posOrderEntryOperation",
        "artifactType": "operation",
        "title": "Lançar pedido no POS",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "updateKitchenStatusOperation",
        "artifactType": "operation",
        "title": "Atualizar status de cozinha",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "stockDecrementOperation",
        "artifactType": "operation",
        "title": "Dar baixa no estoque",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "manageMenuItemsOperation",
        "artifactType": "operation",
        "title": "Gerenciar itens do cardápio",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "manageStockItemsOperation",
        "artifactType": "operation",
        "title": "Gerenciar itens de estoque",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "dashboardAggregationOperation",
        "artifactType": "operation",
        "title": "Agregação de dados do Dashboard",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "menuCatalogMdm",
        "artifactType": "mdm",
        "title": "Catálogo de Cardápio",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "stockItemsRegistryMdm",
        "artifactType": "mdm",
        "title": "Cadastro de Itens de Estoque",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "tablesRegistryMdm",
        "artifactType": "mdm",
        "title": "Cadastro de Mesas",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "comboSubstitutionRulesMdm",
        "artifactType": "mdm",
        "title": "Regras de Combo e Substituição",
        "decidedPriority": "soon",
        "accepted": true
      },
      {
        "recommendationId": "financeHorizontal",
        "artifactType": "horizontalModule",
        "title": "Módulo Financeiro",
        "decidedPriority": "soon",
        "accepted": true
      },
      {
        "recommendationId": "reportsHorizontal",
        "artifactType": "horizontalModule",
        "title": "Módulo de Relatórios",
        "decidedPriority": "soon",
        "accepted": true
      },
      {
        "recommendationId": "generateShiftClosingReportOperation",
        "artifactType": "operation",
        "title": "Gerar relatório de fechamento de turno",
        "decidedPriority": "soon",
        "accepted": true
      },
      {
        "recommendationId": "aiSalesAssistantAgent",
        "artifactType": "agent",
        "title": "Assistente IA de Vendas",
        "decidedPriority": "soon",
        "accepted": true
      }
    ]
  },
  "ontology": {
    "entities": {
      "MenuItem": {
        "entityId": "MenuItem",
        "defPath": "l4/cafeFlow/ontology/MenuItem.defs.ts",
        "title": "Item do Cardápio",
        "description": "Cadastro de referência de um item do cardápio: nome, categoria, preço e ingredientes vinculados a itens de estoque.",
        "kind": "mdm"
      },
      "StockItem": {
        "entityId": "StockItem",
        "defPath": "l4/cafeFlow/ontology/StockItem.defs.ts",
        "title": "Item de Estoque",
        "description": "Registro mestre de um insumo: nome, unidade de medida e quantidade mínima para alerta de estoque baixo.",
        "kind": "mdm"
      },
      "Table": {
        "entityId": "Table",
        "defPath": "l4/cafeFlow/ontology/Table.defs.ts",
        "title": "Mesa",
        "description": "Identificador de mesa usado pelo atendente ao lançar pedidos dine-in — dado de referência estável.",
        "kind": "mdm"
      },
      "ComboRule": {
        "entityId": "ComboRule",
        "defPath": "l4/cafeFlow/ontology/ComboRule.defs.ts",
        "title": "Regra de Combo e Substituição",
        "description": "Definições de combos simples e substituições permitidas com diferença de preço — configuração estável do cardápio.",
        "kind": "mdm"
      },
      "Order": {
        "entityId": "Order",
        "defPath": "l4/cafeFlow/ontology/Order.defs.ts",
        "title": "Pedido",
        "description": "Pedido criado no POS: mesa ou takeout, itens, status de cozinha e total. Pertence a um turno aberto.",
        "kind": "core"
      },
      "OrderItem": {
        "entityId": "OrderItem",
        "defPath": "l4/cafeFlow/ontology/OrderItem.defs.ts",
        "title": "Item do Pedido",
        "description": "Linha de item dentro de um pedido: referência ao item do cardápio, quantidade, substituições aplicadas e status individual de cozinha.",
        "kind": "core"
      },
      "Shift": {
        "entityId": "Shift",
        "defPath": "l4/cafeFlow/ontology/Shift.defs.ts",
        "title": "Turno Diário",
        "description": "Turno de operação de um dia: aberto no início, acumula vendas e movimentações, fechado com relatório consolidado.",
        "kind": "core"
      },
      "StockLevel": {
        "entityId": "StockLevel",
        "defPath": "l4/cafeFlow/ontology/StockLevel.defs.ts",
        "title": "Nível de Estoque",
        "description": "Estado operacional do estoque de um insumo: quantidade atual e timestamp da última movimentação. Referencia o cadastro MDM do item de estoque. Não possui lifecycle states discretos — é um contador contínuo.",
        "kind": "core"
      },
      "OrderStatusEvent": {
        "entityId": "OrderStatusEvent",
        "defPath": "l4/cafeFlow/ontology/OrderStatusEvent.defs.ts",
        "title": "Evento de Status do Pedido",
        "description": "Registro imutável de cada transição de status do pedido (criado, em preparo, pronto, entregue, cancelado).",
        "kind": "event"
      },
      "ShiftStatusEvent": {
        "entityId": "ShiftStatusEvent",
        "defPath": "l4/cafeFlow/ontology/ShiftStatusEvent.defs.ts",
        "title": "Evento de Status do Turno",
        "description": "Registro imutável de abertura e fechamento de turno com totais consolidados.",
        "kind": "event"
      },
      "StockMovementEvent": {
        "entityId": "StockMovementEvent",
        "defPath": "l4/cafeFlow/ontology/StockMovementEvent.defs.ts",
        "title": "Evento de Movimentação de Estoque",
        "description": "Registro imutável de cada baixa ou reposição de estoque (tipo, quantidade, motivo, item referenciado).",
        "kind": "event"
      }
    }
  },
  "journey": {
    "defPath": "l4/cafeFlow/journeys/cafeFlowJourneys.defs.ts"
  },
  "relationships": [
    {
      "relationshipId": "orderToTable",
      "fromEntity": "Order",
      "toEntity": "Table",
      "type": "references",
      "description": "Pedido dine-in referencia a mesa; pedidos takeout não têm mesa."
    },
    {
      "relationshipId": "orderToShift",
      "fromEntity": "Order",
      "toEntity": "Shift",
      "type": "belongs_to",
      "description": "Todo pedido pertence a um turno."
    },
    {
      "relationshipId": "orderItemToOrder",
      "fromEntity": "OrderItem",
      "toEntity": "Order",
      "type": "part_of",
      "description": "Item do pedido é parte de um pedido."
    },
    {
      "relationshipId": "orderItemToMenuItem",
      "fromEntity": "OrderItem",
      "toEntity": "MenuItem",
      "type": "references",
      "description": "Item do pedido referencia o item do cardápio cadastrado."
    },
    {
      "relationshipId": "stockLevelToStockItem",
      "fromEntity": "StockLevel",
      "toEntity": "StockItem",
      "type": "tracks",
      "description": "Nível de estoque rastreia a quantidade atual do item de estoque cadastrado."
    },
    {
      "relationshipId": "menuItemToStockItem",
      "fromEntity": "MenuItem",
      "toEntity": "StockItem",
      "type": "uses_ingredients",
      "description": "Item do cardápio usa insumos do estoque como ingredientes (com quantidade por porção)."
    },
    {
      "relationshipId": "comboRuleToMenuItem",
      "fromEntity": "ComboRule",
      "toEntity": "MenuItem",
      "type": "applies_to",
      "description": "Regra de combo/substituição aplica-se a itens do cardápio."
    },
    {
      "relationshipId": "orderStatusEventToOrder",
      "fromEntity": "OrderStatusEvent",
      "toEntity": "Order",
      "type": "belongs_to",
      "description": "Evento de status pertence ao pedido cujo status mudou."
    },
    {
      "relationshipId": "shiftStatusEventToShift",
      "fromEntity": "ShiftStatusEvent",
      "toEntity": "Shift",
      "type": "belongs_to",
      "description": "Evento de status pertence ao turno aberto/fechado."
    },
    {
      "relationshipId": "stockMovementEventToStockItem",
      "fromEntity": "StockMovementEvent",
      "toEntity": "StockItem",
      "type": "belongs_to",
      "description": "Evento de movimentação pertence ao item de estoque movimentado."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "Catálogo de Cardápio (MenuItem)",
        "reason": "Fonte de verdade estável para o POS, baixa de estoque e relatórios — nome, categoria, preço e ingredientes vinculados."
      },
      {
        "title": "Cadastro de Itens de Estoque (StockItem)",
        "reason": "Base de referência para baixa de estoque, alertas e vinculação com cardápio — nome, unidade, quantidade mínima."
      },
      {
        "title": "Cadastro de Mesas (Table)",
        "reason": "Identificadores de mesas usados pelos atendentes ao lançar pedidos dine-in."
      },
      {
        "title": "Regras de Combo e Substituição (ComboRule)",
        "reason": "Configuração estável de combos e substituições com diferença de preço — prioridade soon."
      }
    ],
    "horizontals": [
      {
        "title": "Módulo Financeiro",
        "reason": "Totalização de vendas, controle de pagamentos e reconciliação de caixa no fechamento de turno — domínio financeiro não coberto pela plataforma. Prioridade soon."
      },
      {
        "title": "Módulo de Relatórios",
        "reason": "Geração de relatórios de fechamento de turno, resumos de vendas e análises de itens mais vendidos — alimenta também o assistente de IA. Prioridade soon."
      }
    ],
    "plugins": [],
    "agents": [
      {
        "title": "Assistente IA de Vendas",
        "reason": "Agente que gera resumo de vendas do dia e sugere itens a promover com base nos últimos 7 dias, chamando o proxy de LLM da plataforma. Prioridade soon — requer histórico de vendas acumulado."
      }
    ]
  }
} as const;

export default cafeFlowModule;
