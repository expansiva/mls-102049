/// <mls fileReference="_102049_/l4/operations/createStockItem.defs.ts" enhancement="_blank"/>

export const operationCreateStockItem = {
  "operationId": "createStockItem",
  "title": "Cadastrar item de estoque",
  "actor": "manager",
  "entity": "StockItem",
  "kind": "create",
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
    "goal": "Cadastrar um novo insumo no estoque",
    "soThat": "Todos os insumos utilizados na cozinha tenham controle de baixa",
    "steps": [
      "Informar nome, unidade de medida e estoque mínimo",
      "Definir quantidade inicial",
      "Salvar o item"
    ],
    "outcome": "Novo insumo cadastrado e disponível para controle de estoque"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Criação de um novo item de estoque (insumo) com nome, unidade de medida e quantidade mínima",
    "entity": "StockItem",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "none",
    "output": [
      "StockItem.stockItemId",
      "StockItem.name",
      "StockItem.unitOfMeasure",
      "StockItem.minimumQuantity",
      "StockItem.status"
    ]
  },
  "inputs": [
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
    }
  ],
  "contextResolution": [
    {
      "targetRef": "StockItem.stockItemId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Identificador único gerado automaticamente pelo sistema"
    },
    {
      "targetRef": "StockItem.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora de criação do registro"
    },
    {
      "targetRef": "StockItem.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "acceptanceAssertions": [
    "O gestor pode cadastrar um novo insumo sem informar identificadores técnicos",
    "O sistema gera automaticamente o stockItemId, createdAt e updatedAt",
    "O nome, unidade de medida e estoque mínimo são obrigatórios e fornecidos pelo usuário",
    "A regra lowStockAlert é aplicável ao item criado"
  ],
  "capability": {
    "capabilityId": "manageStockItems",
    "title": "Gerenciar itens de estoque",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "createStockItem",
  "commandName": "createStockItem",
  "bffName": "cafeFlow.createStockItem.createStockItem"
} as const;

export default operationCreateStockItem;
