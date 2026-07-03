/// <mls fileReference="_102049_/l4/operations/updateStockItem.defs.ts" enhancement="_blank"/>

export const operationUpdateStockItem = {
  "operationId": "updateStockItem",
  "title": "Editar item de estoque",
  "actor": "manager",
  "entity": "StockItem",
  "kind": "update",
  "reads": [
    "StockItem"
  ],
  "writes": [
    "StockItem",
    "StockItem.name",
    "StockItem.unitOfMeasure",
    "StockItem.minimumQuantity",
    "StockItem.status",
    "StockItem.updatedAt"
  ],
  "rulesApplied": [
    "lowStockAlert"
  ],
  "story": {
    "actor": "manager",
    "goal": "Atualizar dados de um insumo",
    "soThat": "Os parâmetros de estoque estejam corretos",
    "steps": [
      "Localizar o insumo",
      "Alterar unidade, estoque mínimo ou nome",
      "Salvar alterações"
    ],
    "outcome": "Insumo atualizado no cadastro"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Atualiza os dados cadastrais de um item de estoque previamente selecionado",
    "entity": "StockItem",
    "filters": [],
    "sort": [],
    "output": []
  },
  "inputs": [
    {
      "inputId": "stockItemId",
      "fieldRef": "StockItem.stockItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador único do item de estoque a ser editado"
    },
    {
      "inputId": "name",
      "fieldRef": "StockItem.name",
      "required": true,
      "source": "userInput",
      "description": "Nome do insumo"
    },
    {
      "inputId": "unitOfMeasure",
      "fieldRef": "StockItem.unitOfMeasure",
      "required": true,
      "source": "userInput",
      "description": "Unidade de medida do insumo (ex: kg, unidade, litro)"
    },
    {
      "inputId": "minimumQuantity",
      "fieldRef": "StockItem.minimumQuantity",
      "required": true,
      "source": "userInput",
      "description": "Quantidade mínima para alerta de estoque baixo"
    },
    {
      "inputId": "status",
      "fieldRef": "StockItem.status",
      "required": true,
      "source": "userInput",
      "description": "Status do item de estoque (active ou inactive)"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.stockItemId",
      "source": "selectedEntity",
      "originRef": "StockItem.stockItemId",
      "description": "ID do item de estoque obtido da entidade selecionada no journey"
    },
    {
      "targetRef": "StockItem.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora da última atualização definida automaticamente pelo sistema"
    }
  ],
  "acceptanceAssertions": [
    "A operação exige que um item de estoque tenha sido previamente selecionado no journey",
    "O identificador técnico do item não é digitado manualmente pelo usuário",
    "Os campos editáveis são nome, unidade de medida, quantidade mínima e status",
    "A data de atualização é gerada automaticamente pelo sistema"
  ],
  "capability": {
    "capabilityId": "manageStockItems",
    "title": "Gerenciar itens de estoque",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "updateStockItem",
  "commandName": "updateStockItem",
  "bffName": "cafeFlow.updateStockItem.updateStockItem"
} as const;

export default operationUpdateStockItem;
