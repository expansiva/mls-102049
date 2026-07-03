/// <mls fileReference="_102049_/l4/cafeFlow/journeys/cafeFlowJourneys.defs.ts" enhancement="_blank"/>

export const cafeFlowJourneys = {
  "moduleName": "cafeFlow",
  "landings": [
    {
      "actor": "attendant",
      "workspaceId": "ws-attendant-pos",
      "reason": "Atendente inicia no POS para lançar pedidos e acompanhar status até a finalização"
    },
    {
      "actor": "cook",
      "workspaceId": "ws-cook-kitchen",
      "reason": "Cozinheiro inicia na fila de cozinha para preparar tickets e dar baixa no estoque"
    },
    {
      "actor": "manager",
      "workspaceId": "ws-manager-shift",
      "reason": "Gerente inicia no turno diário para abrir/fechar turno, visualizar dashboard e acessar gestão"
    }
  ],
  "workspaces": [
    {
      "workspaceId": "ws-attendant-pos",
      "title": "POS – Lançamento e Finalização de Pedidos",
      "actor": "attendant",
      "kind": "workflow",
      "workflowId": "orderLifecycle",
      "operationIds": [
        "createOrder",
        "settleOrder"
      ],
      "purpose": "Atendente cria pedidos (mesa/takeout com itens, combos e substituições) e finaliza pedidos prontos entregues ao cliente"
    },
    {
      "workspaceId": "ws-cook-kitchen",
      "title": "Cozinha – Fila de Tickets e Baixa de Estoque",
      "actor": "cook",
      "kind": "workflow",
      "workflowId": "kitchenTicketFlow",
      "operationIds": [
        "updateKitchenStatus",
        "createStockMovement"
      ],
      "purpose": "Cozinheiro visualiza fila de tickets, atualiza status de preparo (pendente→preparando→pronto) e dá baixa nos insumos consumidos"
    },
    {
      "workspaceId": "ws-manager-shift",
      "title": "Turno Diário – Abertura, Dashboard e Fechamento",
      "actor": "manager",
      "kind": "workflow",
      "workflowId": "dailyShiftLifecycle",
      "operationIds": [
        "openShift",
        "queryDashboard",
        "closeShift",
        "generateShiftClosingReport"
      ],
      "purpose": "Gerente abre o turno, acompanha dashboard em tempo real, fecha o turno e gera relatório consolidado"
    },
    {
      "workspaceId": "ws-manager-menu",
      "title": "Gestão de Cardápio",
      "actor": "manager",
      "kind": "entityManagement",
      "entity": "MenuItem",
      "operationIds": [
        "queryMenuItems",
        "createMenuItem",
        "updateMenuItem",
        "deleteMenuItem"
      ],
      "purpose": "Gerente lista, cria, edita e remove itens do cardápio com categoria, preço e ingredientes"
    },
    {
      "workspaceId": "ws-manager-stock-items",
      "title": "Gestão de Insumos de Estoque",
      "actor": "manager",
      "kind": "entityManagement",
      "entity": "StockItem",
      "operationIds": [
        "queryStockItems",
        "createStockItem",
        "updateStockItem",
        "deleteStockItem"
      ],
      "purpose": "Gerente cadastra, edita e remove insumos de estoque com unidade de medida e quantidade mínima para alerta"
    },
    {
      "workspaceId": "ws-manager-tables",
      "title": "Gestão de Mesas",
      "actor": "manager",
      "kind": "entityManagement",
      "entity": "Table",
      "operationIds": [
        "queryTables",
        "createTable",
        "updateTable",
        "deleteTable"
      ],
      "purpose": "Gerente cadastra, edita e desativa mesas usadas pelo atendente ao lançar pedidos dine-in"
    },
    {
      "workspaceId": "ws-manager-stock-adjustment",
      "title": "Controle e Ajuste de Estoque",
      "actor": "manager",
      "kind": "entityManagement",
      "entity": "StockLevel",
      "operationIds": [
        "queryStockLevels",
        "adjustStockLevel"
      ],
      "purpose": "Gerente visualiza níveis atuais de estoque com alertas de estoque baixo e realiza ajustes/reposições manuais"
    },
    {
      "workspaceId": "ws-manager-combo-rules",
      "title": "Gestão de Regras de Combo e Substituição",
      "actor": "manager",
      "kind": "entityManagement",
      "entity": "ComboRule",
      "operationIds": [
        "queryComboRules",
        "createComboRule",
        "updateComboRule",
        "deleteComboRule"
      ],
      "purpose": "Gerente lista, cria, edita e remove regras de combo e substituição com diferença de preço vinculadas a itens do cardápio"
    }
  ],
  "navigationEdges": [
    {
      "from": "ws-attendant-pos",
      "to": "ws-attendant-pos",
      "trigger": "Atendente seleciona um pedido pronto na lista para finalizar",
      "data": [
        {
          "name": "orderId",
          "from": "ws-attendant-pos",
          "to": "ws-attendant-pos",
          "source": "selectedEntity",
          "description": "Order.id do pedido selecionado na lista de pedidos do POS"
        }
      ],
      "description": "Seleção de pedido na lista leva à ação de finalização (settleOrder) dentro do mesmo workspace"
    },
    {
      "from": "ws-attendant-pos",
      "to": "ws-cook-kitchen",
      "trigger": "Pedido criado no POS entra automaticamente na fila de cozinha",
      "data": [
        {
          "name": "orderId",
          "from": "ws-attendant-pos",
          "to": "ws-cook-kitchen",
          "source": "previousStepOutput",
          "description": "Order.id gerado pelo createOrder aparece como ticket na fila da cozinha"
        }
      ],
      "description": "Handoff do ciclo de vida do pedido: pedido criado pelo atendente torna-se ticket visível ao cozinheiro"
    },
    {
      "from": "ws-cook-kitchen",
      "to": "ws-cook-kitchen",
      "trigger": "Cozinheiro seleciona um ticket da fila e atualiza status de preparo",
      "data": [
        {
          "name": "orderId",
          "from": "ws-cook-kitchen",
          "to": "ws-cook-kitchen",
          "source": "selectedEntity",
          "description": "Order.id do ticket selecionado na fila de cozinha"
        }
      ],
      "description": "Seleção de ticket na fila leva à ação de atualização de status (updateKitchenStatus) dentro do mesmo workspace"
    },
    {
      "from": "ws-cook-kitchen",
      "to": "ws-cook-kitchen",
      "trigger": "Cozinheiro seleciona insumo consumido para dar baixa no estoque",
      "data": [
        {
          "name": "stockItemId",
          "from": "ws-cook-kitchen",
          "to": "ws-cook-kitchen",
          "source": "selectedEntity",
          "description": "StockItem.stockItemId do insumo selecionado para decremento"
        }
      ],
      "description": "Seleção de insumo leva à ação de baixa de estoque (createStockMovement) dentro do mesmo workspace"
    },
    {
      "from": "ws-cook-kitchen",
      "to": "ws-attendant-pos",
      "trigger": "Pedido marcado como pronto pela cozinha fica disponível para finalização",
      "data": [
        {
          "name": "orderId",
          "from": "ws-cook-kitchen",
          "to": "ws-attendant-pos",
          "source": "selectedEntity",
          "description": "Order.id do pedido pronto selecionado na cozinha, visível ao atendente para finalização"
        }
      ],
      "description": "Handoff de retorno: pedido pronto na cozinha torna-se selecionável pelo atendente para settleOrder"
    },
    {
      "from": "ws-manager-shift",
      "to": "ws-manager-shift",
      "trigger": "Gerente abre o turno e acessa o dashboard de agregação",
      "data": [
        {
          "name": "shiftId",
          "from": "ws-manager-shift",
          "to": "ws-manager-shift",
          "source": "activeLifecycleInstance",
          "description": "Shift.shiftId da instância ativa do ciclo de vida de turno, usado para agregar dados do dashboard"
        }
      ],
      "description": "Turno aberto fornece o shiftId ativo para a consulta do dashboard dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-shift",
      "to": "ws-manager-shift",
      "trigger": "Gerente fecha o turno ativo após verificar pedidos finalizados",
      "data": [
        {
          "name": "shiftId",
          "from": "ws-manager-shift",
          "to": "ws-manager-shift",
          "source": "activeLifecycleInstance",
          "description": "Shift.shiftId da instância ativa do ciclo de vida de turno, usado para fechamento"
        }
      ],
      "description": "Dashboard acompanha o turno ativo até o gerente confirmar o fechamento (closeShift)"
    },
    {
      "from": "ws-manager-shift",
      "to": "ws-manager-shift",
      "trigger": "Gerente gera relatório de fechamento do turno recém-fechado",
      "data": [
        {
          "name": "shiftId",
          "from": "ws-manager-shift",
          "to": "ws-manager-shift",
          "source": "activeLifecycleInstance",
          "description": "Shift.shiftId do turno fechado, transicionando de instância ativa para entidade selecionada para relatório"
        }
      ],
      "description": "Após fechar o turno, o shiftId torna-se a entidade selecionada para geração do relatório consolidado"
    },
    {
      "from": "ws-manager-shift",
      "to": "ws-manager-menu",
      "trigger": "Gerente navega para a gestão de cardápio",
      "data": [],
      "description": "Navegação do workspace de turno para o workspace de gestão de cardápio"
    },
    {
      "from": "ws-manager-shift",
      "to": "ws-manager-stock-items",
      "trigger": "Gerente navega para a gestão de insumos de estoque",
      "data": [],
      "description": "Navegação do workspace de turno para o workspace de cadastro de insumos"
    },
    {
      "from": "ws-manager-shift",
      "to": "ws-manager-tables",
      "trigger": "Gerente navega para a gestão de mesas",
      "data": [],
      "description": "Navegação do workspace de turno para o workspace de gestão de mesas"
    },
    {
      "from": "ws-manager-shift",
      "to": "ws-manager-stock-adjustment",
      "trigger": "Gerente navega para o controle e ajuste de estoque",
      "data": [],
      "description": "Navegação do workspace de turno para o workspace de níveis de estoque e ajustes"
    },
    {
      "from": "ws-manager-shift",
      "to": "ws-manager-combo-rules",
      "trigger": "Gerente navega para a gestão de regras de combo",
      "data": [],
      "description": "Navegação do workspace de turno para o workspace de regras de combo e substituição"
    },
    {
      "from": "ws-manager-menu",
      "to": "ws-manager-menu",
      "trigger": "Gerente seleciona item do cardápio na lista para editar",
      "data": [
        {
          "name": "menuItemId",
          "from": "ws-manager-menu",
          "to": "ws-manager-menu",
          "source": "selectedEntity",
          "description": "MenuItem.menuItemId do item selecionado na lista de cardápio"
        }
      ],
      "description": "Seleção de item na lista leva à edição (updateMenuItem) dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-menu",
      "to": "ws-manager-menu",
      "trigger": "Gerente seleciona item do cardápio na lista para remover",
      "data": [
        {
          "name": "menuItemId",
          "from": "ws-manager-menu",
          "to": "ws-manager-menu",
          "source": "selectedEntity",
          "description": "MenuItem.menuItemId do item selecionado na lista de cardápio"
        }
      ],
      "description": "Seleção de item na lista leva à remoção (deleteMenuItem) dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-menu",
      "to": "ws-manager-combo-rules",
      "trigger": "Gerente seleciona item do cardápio e navega para criar regra de combo vinculada",
      "data": [
        {
          "name": "menuItemId",
          "from": "ws-manager-menu",
          "to": "ws-manager-combo-rules",
          "source": "selectedEntity",
          "description": "MenuItem.menuItemId do item selecionado no cardápio, transportado para vincular à nova regra de combo"
        }
      ],
      "description": "Item do cardápio selecionado é transportado para o workspace de combo rules para criar regra vinculada (createComboRule)"
    },
    {
      "from": "ws-manager-stock-items",
      "to": "ws-manager-stock-items",
      "trigger": "Gerente seleciona insumo na lista para editar",
      "data": [
        {
          "name": "stockItemId",
          "from": "ws-manager-stock-items",
          "to": "ws-manager-stock-items",
          "source": "selectedEntity",
          "description": "StockItem.stockItemId do insumo selecionado na lista"
        }
      ],
      "description": "Seleção de insumo na lista leva à edição (updateStockItem) dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-stock-items",
      "to": "ws-manager-stock-items",
      "trigger": "Gerente seleciona insumo na lista para remover",
      "data": [
        {
          "name": "stockItemId",
          "from": "ws-manager-stock-items",
          "to": "ws-manager-stock-items",
          "source": "selectedEntity",
          "description": "StockItem.stockItemId do insumo selecionado na lista"
        }
      ],
      "description": "Seleção de insumo na lista leva à remoção (deleteStockItem) dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-tables",
      "to": "ws-manager-tables",
      "trigger": "Gerente seleciona mesa na lista para editar",
      "data": [
        {
          "name": "tableId",
          "from": "ws-manager-tables",
          "to": "ws-manager-tables",
          "source": "selectedEntity",
          "description": "Table.tableId da mesa selecionada na lista"
        }
      ],
      "description": "Seleção de mesa na lista leva à edição (updateTable) dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-tables",
      "to": "ws-manager-tables",
      "trigger": "Gerente seleciona mesa na lista para remover",
      "data": [
        {
          "name": "tableId",
          "from": "ws-manager-tables",
          "to": "ws-manager-tables",
          "source": "selectedEntity",
          "description": "Table.tableId da mesa selecionada na lista"
        }
      ],
      "description": "Seleção de mesa na lista leva à remoção (deleteTable) dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-stock-adjustment",
      "to": "ws-manager-stock-adjustment",
      "trigger": "Gerente seleciona nível de estoque na lista para ajustar ou repor",
      "data": [
        {
          "name": "stockLevelId",
          "from": "ws-manager-stock-adjustment",
          "to": "ws-manager-stock-adjustment",
          "source": "selectedEntity",
          "description": "StockLevel.stockLevelId do nível de estoque selecionado na lista"
        }
      ],
      "description": "Seleção de nível de estoque na lista leva ao ajuste/reposição (adjustStockLevel) dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-combo-rules",
      "to": "ws-manager-combo-rules",
      "trigger": "Gerente seleciona regra de combo na lista para editar",
      "data": [
        {
          "name": "comboRuleId",
          "from": "ws-manager-combo-rules",
          "to": "ws-manager-combo-rules",
          "source": "selectedEntity",
          "description": "ComboRule.comboRuleId da regra selecionada na lista"
        }
      ],
      "description": "Seleção de regra na lista leva à edição (updateComboRule) dentro do mesmo workspace"
    },
    {
      "from": "ws-manager-combo-rules",
      "to": "ws-manager-combo-rules",
      "trigger": "Gerente seleciona regra de combo na lista para remover",
      "data": [
        {
          "name": "comboRuleId",
          "from": "ws-manager-combo-rules",
          "to": "ws-manager-combo-rules",
          "source": "selectedEntity",
          "description": "ComboRule.comboRuleId da regra selecionada na lista"
        }
      ],
      "description": "Seleção de regra na lista leva à remoção (deleteComboRule) dentro do mesmo workspace"
    }
  ],
  "inputResolutions": [
    {
      "operationId": "settleOrder",
      "inputId": "orderId",
      "source": "selectedEntity",
      "via": "Order.id selecionado na lista de pedidos do POS ou recebido do handoff da cozinha",
      "description": "O atendente seleciona um pedido pronto na lista; o Order.id é transportado da seleção para a ação de finalização"
    },
    {
      "operationId": "updateKitchenStatus",
      "inputId": "orderId",
      "source": "selectedEntity",
      "via": "Order.id do ticket selecionado na fila de cozinha",
      "description": "O cozinheiro seleciona um ticket da fila; o Order.id é transportado da seleção para a ação de atualização de status"
    },
    {
      "operationId": "createStockMovement",
      "inputId": "stockItemId",
      "source": "selectedEntity",
      "via": "StockItem.stockItemId do insumo selecionado na cozinha",
      "description": "O cozinheiro seleciona um insumo de estoque; o stockItemId é transportado da seleção para a ação de baixa"
    },
    {
      "operationId": "closeShift",
      "inputId": "shiftId",
      "source": "activeLifecycleInstance",
      "via": "Shift.shiftId da instância ativa do ciclo de vida de turno diário",
      "description": "O turno ativo fornece o shiftId automaticamente; o gerente não digita o identificador"
    },
    {
      "operationId": "queryDashboard",
      "inputId": "shiftId",
      "source": "activeLifecycleInstance",
      "via": "Shift.shiftId da instância ativa do ciclo de vida de turno diário",
      "description": "O turno ativo fornece o shiftId para agregação de dados do dashboard sem digitação manual"
    },
    {
      "operationId": "generateShiftClosingReport",
      "inputId": "shiftId",
      "source": "selectedEntity",
      "via": "Shift.shiftId do turno fechado selecionado após closeShift",
      "description": "Após fechar o turno, o shiftId transiciona de instância ativa para entidade selecionada, fornecendo o id para o relatório"
    },
    {
      "operationId": "updateMenuItem",
      "inputId": "menuItemId",
      "source": "selectedEntity",
      "via": "MenuItem.menuItemId do item selecionado na lista de cardápio",
      "description": "O gerente seleciona um item na lista; o menuItemId é transportado da seleção para a edição"
    },
    {
      "operationId": "deleteMenuItem",
      "inputId": "menuItemId",
      "source": "selectedEntity",
      "via": "MenuItem.menuItemId do item selecionado na lista de cardápio",
      "description": "O gerente seleciona um item na lista; o menuItemId é transportado da seleção para a remoção"
    },
    {
      "operationId": "updateStockItem",
      "inputId": "stockItemId",
      "source": "selectedEntity",
      "via": "StockItem.stockItemId do insumo selecionado na lista de estoque",
      "description": "O gerente seleciona um insumo na lista; o stockItemId é transportado da seleção para a edição"
    },
    {
      "operationId": "deleteStockItem",
      "inputId": "stockItemId",
      "source": "selectedEntity",
      "via": "StockItem.stockItemId do insumo selecionado na lista de estoque",
      "description": "O gerente seleciona um insumo na lista; o stockItemId é transportado da seleção para a remoção"
    },
    {
      "operationId": "updateTable",
      "inputId": "tableId",
      "source": "selectedEntity",
      "via": "Table.tableId da mesa selecionada na lista de mesas",
      "description": "O gerente seleciona uma mesa na lista; o tableId é transportado da seleção para a edição"
    },
    {
      "operationId": "deleteTable",
      "inputId": "tableId",
      "source": "selectedEntity",
      "via": "Table.tableId da mesa selecionada na lista de mesas",
      "description": "O gerente seleciona uma mesa na lista; o tableId é transportado da seleção para a remoção"
    },
    {
      "operationId": "adjustStockLevel",
      "inputId": "stockLevelId",
      "source": "selectedEntity",
      "via": "StockLevel.stockLevelId do nível de estoque selecionado na lista",
      "description": "O gerente seleciona um nível de estoque na lista; o stockLevelId é transportado da seleção para o ajuste"
    },
    {
      "operationId": "createComboRule",
      "inputId": "menuItemId",
      "source": "selectedEntity",
      "via": "MenuItem.menuItemId selecionado no workspace de cardápio e transportado para o workspace de combo rules",
      "description": "O gerente seleciona um item do cardápio e navega para combo rules; o menuItemId é transportado entre workspaces para vincular à nova regra"
    },
    {
      "operationId": "updateComboRule",
      "inputId": "comboRuleId",
      "source": "selectedEntity",
      "via": "ComboRule.comboRuleId da regra selecionada na lista de combo rules",
      "description": "O gerente seleciona uma regra na lista; o comboRuleId é transportado da seleção para a edição"
    },
    {
      "operationId": "deleteComboRule",
      "inputId": "comboRuleId",
      "source": "selectedEntity",
      "via": "ComboRule.comboRuleId da regra selecionada na lista de combo rules",
      "description": "O gerente seleciona uma regra na lista; o comboRuleId é transportado da seleção para a remoção"
    }
  ],
  "acceptanceAssertions": [
    "O atendente abre o workspace do POS e cria um pedido sem digitar identificadores técnicos",
    "O cozinheiro abre o workspace da cozinha e visualiza tickets sem digitar identificadores técnicos",
    "O gerente abre o workspace de turno e abre um turno sem digitar identificadores técnicos",
    "A ação settleOrder recebe o Order.id da entidade selecionada na jornada, não por digitação manual",
    "A ação updateKitchenStatus recebe o Order.id do ticket selecionado na fila de cozinha",
    "A ação createStockMovement recebe o StockItem.stockItemId do insumo selecionado na cozinha",
    "A ação closeShift recebe o Shift.shiftId da instância ativa do ciclo de vida de turno",
    "A ação queryDashboard recebe o Shift.shiftId da instância ativa do ciclo de vida de turno",
    "A ação generateShiftClosingReport recebe o Shift.shiftId do turno fechado selecionado na jornada",
    "O gerente pode navegar do workspace de turno para gestão de cardápio, insumos, mesas, ajuste de estoque e regras de combo sem digitar ids",
    "A ação createComboRule recebe o MenuItem.menuItemId transportado do workspace de cardápio para o workspace de combo rules",
    "Todos os workspaces de entityManagement seguem o padrão lista-para-ação com o id da entidade selecionada transportado",
    "O handoff de pedido entre atendente e cozinheiro transporta o Order.id entre workspaces sem digitação manual",
    "O handoff de retorno de pedido pronto da cozinha para o POS transporta o Order.id para finalização pelo atendente",
    "O createOrder vincula automaticamente o pedido ao turno aberto do workspace atual sem exigir digitação do shiftId"
  ]
} as const;

export default cafeFlowJourneys;
