/// <mls fileReference="_102049_/l5/cafeFlow/todoFrontend.defs.ts" enhancement="_blank"/>

export const cafeFlowTodoFrontend = {
  "schemaVersion": "2026-07-02-layer-todo",
  "moduleName": "cafeFlow",
  "layer": "frontend",
  "updatedAt": "2026-07-03T19:23:54.431Z",
  "owners": [
    {
      "ownerType": "workflow",
      "ownerId": "orderLifecycle",
      "title": "Ciclo de vida do Pedido",
      "status": "done",
      "defPath": "l4/workflows/orderLifecycle.defs.ts",
      "pageId": "orderLifecycle",
      "capabilityId": "orderLifecycle"
    },
    {
      "ownerType": "workflow",
      "ownerId": "kitchenTicketFlow",
      "title": "Fluxo de ticket de cozinha",
      "status": "done",
      "defPath": "l4/workflows/kitchenTicketFlow.defs.ts",
      "pageId": "kitchenTicketFlow",
      "capabilityId": "kitchenTicketFlow"
    },
    {
      "ownerType": "workflow",
      "ownerId": "dailyShiftLifecycle",
      "title": "Ciclo de vida do Turno Diário",
      "status": "done",
      "defPath": "l4/workflows/dailyShiftLifecycle.defs.ts",
      "pageId": "dailyShiftLifecycle",
      "capabilityId": "dailyShiftLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "settleOrder",
      "title": "Finalizar pedido",
      "status": "done",
      "defPath": "l4/operations/settleOrder.defs.ts",
      "pageId": "orderLifecycle",
      "commandName": "settleOrder",
      "bffName": "cafeFlow.orderLifecycle.settleOrder",
      "capabilityId": "orderLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "openShift",
      "title": "Abrir turno",
      "status": "done",
      "defPath": "l4/operations/openShift.defs.ts",
      "pageId": "dailyShiftLifecycle",
      "commandName": "openShift",
      "bffName": "cafeFlow.dailyShiftLifecycle.openShift",
      "capabilityId": "dailyShiftLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateKitchenStatus",
      "title": "Atualizar status de cozinha",
      "status": "done",
      "defPath": "l4/operations/updateKitchenStatus.defs.ts",
      "pageId": "orderLifecycle",
      "commandName": "updateKitchenStatus",
      "bffName": "cafeFlow.orderLifecycle.updateKitchenStatus",
      "capabilityId": "updateKitchenStatus"
    },
    {
      "ownerType": "operation",
      "ownerId": "closeShift",
      "title": "Fechar turno",
      "status": "done",
      "defPath": "l4/operations/closeShift.defs.ts",
      "pageId": "dailyShiftLifecycle",
      "commandName": "closeShift",
      "bffName": "cafeFlow.dailyShiftLifecycle.closeShift",
      "capabilityId": "dailyShiftLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "createOrder",
      "title": "Lançar pedido no POS",
      "status": "done",
      "defPath": "l4/operations/createOrder.defs.ts",
      "pageId": "orderLifecycle",
      "commandName": "createOrder",
      "bffName": "cafeFlow.orderLifecycle.createOrder",
      "capabilityId": "posOrderEntry"
    },
    {
      "ownerType": "operation",
      "ownerId": "deleteMenuItem",
      "title": "Remover item do cardápio",
      "status": "done",
      "defPath": "l4/operations/deleteMenuItem.defs.ts",
      "pageId": "deleteMenuItem",
      "commandName": "deleteMenuItem",
      "bffName": "cafeFlow.deleteMenuItem.deleteMenuItem",
      "capabilityId": "manageMenuItems"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryDashboard",
      "title": "Agregação de dados do Dashboard",
      "status": "done",
      "defPath": "l4/operations/queryDashboard.defs.ts",
      "pageId": "dailyShiftLifecycle",
      "commandName": "queryDashboard",
      "bffName": "cafeFlow.dailyShiftLifecycle.queryDashboard",
      "capabilityId": "dashboardAggregation"
    },
    {
      "ownerType": "operation",
      "ownerId": "generateShiftClosingReport",
      "title": "Gerar relatório de fechamento de turno",
      "status": "done",
      "defPath": "l4/operations/generateShiftClosingReport.defs.ts",
      "pageId": "dailyShiftLifecycle",
      "commandName": "generateShiftClosingReport",
      "bffName": "cafeFlow.dailyShiftLifecycle.generateShiftClosingReport",
      "capabilityId": "generateShiftClosingReport"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateMenuItem",
      "title": "Editar item do cardápio",
      "status": "done",
      "defPath": "l4/operations/updateMenuItem.defs.ts",
      "pageId": "updateMenuItem",
      "commandName": "updateMenuItem",
      "bffName": "cafeFlow.updateMenuItem.updateMenuItem",
      "capabilityId": "manageMenuItems"
    },
    {
      "ownerType": "operation",
      "ownerId": "createMenuItem",
      "title": "Criar item do cardápio",
      "status": "done",
      "defPath": "l4/operations/createMenuItem.defs.ts",
      "pageId": "createMenuItem",
      "commandName": "createMenuItem",
      "bffName": "cafeFlow.createMenuItem.createMenuItem",
      "capabilityId": "manageMenuItems"
    },
    {
      "ownerType": "operation",
      "ownerId": "deleteStockItem",
      "title": "Remover item de estoque",
      "status": "done",
      "defPath": "l4/operations/deleteStockItem.defs.ts",
      "pageId": "deleteStockItem",
      "commandName": "deleteStockItem",
      "bffName": "cafeFlow.deleteStockItem.deleteStockItem",
      "capabilityId": "manageStockItems"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryMenuItems",
      "title": "Consultar itens do cardápio",
      "status": "done",
      "defPath": "l4/operations/queryMenuItems.defs.ts",
      "pageId": "queryMenuItems",
      "commandName": "queryMenuItems",
      "bffName": "cafeFlow.queryMenuItems.queryMenuItems",
      "capabilityId": "manageMenuItems"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateStockItem",
      "title": "Editar item de estoque",
      "status": "done",
      "defPath": "l4/operations/updateStockItem.defs.ts",
      "pageId": "updateStockItem",
      "commandName": "updateStockItem",
      "bffName": "cafeFlow.updateStockItem.updateStockItem",
      "capabilityId": "manageStockItems"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryStockItems",
      "title": "Consultar itens de estoque",
      "status": "done",
      "defPath": "l4/operations/queryStockItems.defs.ts",
      "pageId": "queryStockItems",
      "commandName": "queryStockItems",
      "bffName": "cafeFlow.queryStockItems.queryStockItems",
      "capabilityId": "manageStockItems"
    },
    {
      "ownerType": "operation",
      "ownerId": "createTable",
      "title": "Cadastrar mesa",
      "status": "done",
      "defPath": "l4/operations/createTable.defs.ts",
      "pageId": "createTable",
      "commandName": "createTable",
      "bffName": "cafeFlow.createTable.createTable",
      "capabilityId": "manageTables"
    },
    {
      "ownerType": "operation",
      "ownerId": "createStockItem",
      "title": "Cadastrar item de estoque",
      "status": "done",
      "defPath": "l4/operations/createStockItem.defs.ts",
      "pageId": "createStockItem",
      "commandName": "createStockItem",
      "bffName": "cafeFlow.createStockItem.createStockItem",
      "capabilityId": "manageStockItems"
    },
    {
      "ownerType": "operation",
      "ownerId": "deleteTable",
      "title": "Remover mesa",
      "status": "done",
      "defPath": "l4/operations/deleteTable.defs.ts",
      "pageId": "deleteTable",
      "commandName": "deleteTable",
      "bffName": "cafeFlow.deleteTable.deleteTable",
      "capabilityId": "manageTables"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateTable",
      "title": "Editar mesa",
      "status": "done",
      "defPath": "l4/operations/updateTable.defs.ts",
      "pageId": "updateTable",
      "commandName": "updateTable",
      "bffName": "cafeFlow.updateTable.updateTable",
      "capabilityId": "manageTables"
    },
    {
      "ownerType": "operation",
      "ownerId": "createComboRule",
      "title": "Criar regra de combo e substituição",
      "status": "done",
      "defPath": "l4/operations/createComboRule.defs.ts",
      "pageId": "createComboRule",
      "commandName": "createComboRule",
      "bffName": "cafeFlow.createComboRule.createComboRule",
      "capabilityId": "manageComboRules"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryTables",
      "title": "Consultar mesas",
      "status": "done",
      "defPath": "l4/operations/queryTables.defs.ts",
      "pageId": "queryTables",
      "commandName": "queryTables",
      "bffName": "cafeFlow.queryTables.queryTables",
      "capabilityId": "manageTables"
    },
    {
      "ownerType": "operation",
      "ownerId": "deleteComboRule",
      "title": "Remover regra de combo e substituição",
      "status": "done",
      "defPath": "l4/operations/deleteComboRule.defs.ts",
      "pageId": "deleteComboRule",
      "commandName": "deleteComboRule",
      "bffName": "cafeFlow.deleteComboRule.deleteComboRule",
      "capabilityId": "manageComboRules"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryComboRules",
      "title": "Consultar regras de combo e substituição",
      "status": "done",
      "defPath": "l4/operations/queryComboRules.defs.ts",
      "pageId": "queryComboRules",
      "commandName": "queryComboRules",
      "bffName": "cafeFlow.queryComboRules.queryComboRules",
      "capabilityId": "manageComboRules"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryStockLevels",
      "title": "Consultar níveis de estoque",
      "status": "done",
      "defPath": "l4/operations/queryStockLevels.defs.ts",
      "pageId": "queryStockLevels",
      "commandName": "queryStockLevels",
      "bffName": "cafeFlow.queryStockLevels.queryStockLevels",
      "capabilityId": "manageStockAdjustment"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateComboRule",
      "title": "Editar regra de combo e substituição",
      "status": "done",
      "defPath": "l4/operations/updateComboRule.defs.ts",
      "pageId": "updateComboRule",
      "commandName": "updateComboRule",
      "bffName": "cafeFlow.updateComboRule.updateComboRule",
      "capabilityId": "manageComboRules"
    },
    {
      "ownerType": "operation",
      "ownerId": "adjustStockLevel",
      "title": "Ajustar e repor estoque",
      "status": "done",
      "defPath": "l4/operations/adjustStockLevel.defs.ts",
      "pageId": "adjustStockLevel",
      "commandName": "adjustStockLevel",
      "bffName": "cafeFlow.adjustStockLevel.adjustStockLevel",
      "capabilityId": "manageStockAdjustment"
    },
    {
      "ownerType": "operation",
      "ownerId": "createStockMovement",
      "title": "Dar baixa no estoque",
      "status": "done",
      "defPath": "l4/operations/createStockMovement.defs.ts",
      "pageId": "orderLifecycle",
      "commandName": "createStockMovement",
      "bffName": "cafeFlow.orderLifecycle.createStockMovement",
      "capabilityId": "stockDecrement"
    }
  ]
} as const;

export default cafeFlowTodoFrontend;
