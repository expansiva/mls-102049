/// <mls fileReference="_102049_/l4/operations/deleteStockItem.defs.ts" enhancement="_blank"/>

export const operationDeleteStockItem = {
  "operationId": "deleteStockItem",
  "title": "Remover item de estoque",
  "actor": "manager",
  "entity": "StockItem",
  "kind": "delete",
  "reads": [
    "StockItem"
  ],
  "writes": [
    "StockItem"
  ],
  "rulesApplied": [
    "lowStockAlert"
  ],
  "story": {
    "actor": "manager",
    "goal": "Remover um insumo do cadastro de estoque",
    "soThat": "Insumos fora de uso sejam retirados do controle",
    "steps": [
      "Localizar o insumo",
      "Confirmar exclusão"
    ],
    "outcome": "Insumo removido do cadastro"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Exclui um item de estoque previamente selecionado do cadastro",
    "entity": "StockItem",
    "filters": [],
    "sort": [],
    "selection": "none",
    "output": []
  },
  "inputs": [
    {
      "inputId": "stockItemId",
      "fieldRef": "StockItem.stockItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador único do item de estoque a ser removido"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.stockItemId",
      "source": "selectedEntity",
      "originRef": "StockItem.stockItemId",
      "description": "O id do item de estoque é obtido da entidade selecionada na jornada de localização"
    }
  ],
  "acceptanceAssertions": [
    "A exclusão do item de estoque utiliza o id da entidade selecionada na jornada",
    "O gerente localiza o insumo e confirma a remoção sem digitar um id técnico",
    "O item removido é retirado permanentemente do cadastro de estoque"
  ],
  "capability": {
    "capabilityId": "manageStockItems",
    "title": "Gerenciar itens de estoque",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "deleteStockItem",
  "commandName": "deleteStockItem",
  "bffName": "cafeFlow.deleteStockItem.deleteStockItem"
} as const;

export default operationDeleteStockItem;
