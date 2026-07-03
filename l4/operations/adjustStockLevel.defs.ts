/// <mls fileReference="_102049_/l4/operations/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const operationAdjustStockLevel = {
  "operationId": "adjustStockLevel",
  "title": "Ajustar e repor estoque",
  "actor": "manager",
  "entity": "StockLevel",
  "kind": "update",
  "reads": [
    "StockLevel",
    "StockLevel.currentQuantity",
    "StockItem"
  ],
  "writes": [
    "StockLevel",
    "StockLevel.currentQuantity",
    "StockLevel.lastMovementAt",
    "StockLevel.updatedAt",
    "StockMovementEvent"
  ],
  "rulesApplied": [
    "stockDecrementOnPreparing",
    "lowStockAlert"
  ],
  "story": {
    "actor": "manager",
    "goal": "Ajustar ou repor o nível de estoque de um insumo",
    "soThat": "O estoque físico e o sistema estejam sempre conciliados",
    "steps": [
      "Localizar o insumo com nível de estoque",
      "Informar quantidade de reposição ou ajuste",
      "Registrar motivo do ajuste",
      "Salvar alteração"
    ],
    "outcome": "Nível de estoque atualizado com registro de ajuste"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Comando para ajustar ou repor a quantidade de um nível de estoque específico, registrando a movimentação correspondente",
    "entity": "StockLevel",
    "filters": [],
    "sort": [],
    "output": []
  },
  "inputs": [
    {
      "inputId": "stockLevelId",
      "fieldRef": "StockLevel.stockLevelId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador do nível de estoque selecionado para ajuste"
    },
    {
      "inputId": "movement",
      "fieldRef": "StockMovementEvent",
      "required": true,
      "source": "userInput",
      "description": "Dados da movimentação de ajuste ou reposição (quantidade, motivo e tipo)"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.stockLevelId",
      "source": "selectedEntity",
      "originRef": "StockLevel.stockLevelId",
      "description": "Identificador do nível de estoque obtido da entidade selecionada na jornada"
    },
    {
      "targetRef": "StockLevel.lastMovementAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Timestamp da última movimentação definido automaticamente pelo sistema"
    },
    {
      "targetRef": "StockLevel.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Timestamp da última atualização definido automaticamente pelo sistema"
    },
    {
      "targetRef": "StockMovementEvent.stockItemId",
      "source": "selectedEntity",
      "originRef": "StockLevel.stockItemId",
      "description": "Item de estoque referenciado obtido do nível de estoque selecionado"
    }
  ],
  "acceptanceAssertions": [
    "O gestor seleciona o insumo por nível de estoque sem digitar identificador técnico",
    "A operação aceita dados da movimentação informados pelo usuário como entrada composta",
    "O sistema atualiza o timestamp de última movimentação automaticamente",
    "O ajuste gera registro imutável de movimentação de estoque vinculado ao item",
    "O nível de estoque reflete a conciliação entre quantidade física e sistema após a operação"
  ],
  "capability": {
    "capabilityId": "manageStockAdjustment",
    "title": "Ajustar e repor estoque",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "adjustStockLevel",
  "commandName": "adjustStockLevel",
  "bffName": "cafeFlow.adjustStockLevel.adjustStockLevel"
} as const;

export default operationAdjustStockLevel;
