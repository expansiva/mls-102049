/// <mls fileReference="_102049_/l4/operations/createStockMovement.defs.ts" enhancement="_blank"/>

export const operationCreateStockMovement = {
  "operationId": "createStockMovement",
  "title": "Dar baixa no estoque",
  "actor": "cook",
  "entity": "StockMovementEvent",
  "kind": "create",
  "reads": [
    "StockItem",
    "StockLevel"
  ],
  "writes": [
    "StockMovementEvent",
    "StockLevel"
  ],
  "rulesApplied": [
    "stockDecrementOnPreparing"
  ],
  "story": {
    "actor": "cook",
    "goal": "Decrementar o estoque dos insumos utilizados no preparo",
    "soThat": "O estoque reflita o consumo real e alertas de reposição sejam gerados",
    "steps": [
      "Identificar insumos consumidos pelo item preparado",
      "Registrar movimentação de saída no estoque",
      "Sistema verifica se há alerta de estoque baixo"
    ],
    "outcome": "Movimento de baixa criado e nível de estoque atualizado"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Comando para registrar um evento de baixa de estoque de um insumo consumido durante o preparo",
    "entity": "StockMovementEvent",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "none",
    "output": [
      "StockMovementEvent"
    ]
  },
  "inputs": [
    {
      "inputId": "stockItemId",
      "fieldRef": "StockMovementEvent.stockItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Item de estoque (insumo) selecionado para baixa"
    },
    {
      "inputId": "quantity",
      "fieldRef": "StockMovementEvent.quantity",
      "required": true,
      "source": "userInput",
      "description": "Quantidade consumida do insumo"
    },
    {
      "inputId": "reason",
      "fieldRef": "StockMovementEvent.reason",
      "required": true,
      "source": "userInput",
      "description": "Motivo da movimentação de estoque"
    },
    {
      "inputId": "movementType",
      "fieldRef": "StockMovementEvent.movementType",
      "required": true,
      "source": "userInput",
      "description": "Tipo da movimentação (baixa ou reposição)"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.stockItemId",
      "source": "selectedEntity",
      "originRef": "StockItem.stockItemId",
      "description": "Identificador do item de estoque selecionado na interface pelo cook"
    },
    {
      "targetRef": "StockMovementEvent.stockMovementEventId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "UUID gerado automaticamente pelo sistema para o evento"
    },
    {
      "targetRef": "StockMovementEvent.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data/hora de criação atribuída automaticamente"
    },
    {
      "targetRef": "StockMovementEvent.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data/hora de atualização atribuída automaticamente"
    }
  ],
  "acceptanceAssertions": [
    "O cook seleciona o insumo de estoque sem digitar identificador técnico",
    "A quantidade e o motivo da baixa são fornecidos pelo cook",
    "O sistema gera automaticamente o ID do evento e as timestamps",
    "A operação aplica a regra stockDecrementOnPreparing para atualizar o StockLevel",
    "O tipo de movimentação é informado pelo ator no comando"
  ],
  "capability": {
    "capabilityId": "stockDecrement",
    "title": "Dar baixa no estoque",
    "actor": "cook",
    "priority": "now"
  },
  "pageId": "orderLifecycle",
  "commandName": "createStockMovement",
  "bffName": "cafeFlow.orderLifecycle.createStockMovement"
} as const;

export default operationCreateStockMovement;
