/// <mls fileReference="_102049_/l4/operations/updateMenuItem.defs.ts" enhancement="_blank"/>

export const operationUpdateMenuItem = {
  "operationId": "updateMenuItem",
  "title": "Editar item do cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "update",
  "reads": [
    "MenuItem"
  ],
  "writes": [
    "MenuItem.name",
    "MenuItem.category",
    "MenuItem.price",
    "MenuItem.description",
    "MenuItem.status",
    "MenuItem.updatedAt"
  ],
  "rulesApplied": [
    "comboPriceDifference"
  ],
  "story": {
    "actor": "manager",
    "goal": "Atualizar dados de um item do cardápio",
    "soThat": "O cardápio mantenha preços e composições corretos",
    "steps": [
      "Localizar o item no cardápio",
      "Alterar preço, nome ou composição de insumos",
      "Salvar alterações"
    ],
    "outcome": "Item do cardápio atualizado"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Atualiza um item existente do cardápio com novos dados de nome, categoria, preço, descrição e status",
    "entity": "MenuItem",
    "keyField": "MenuItem.menuItemId",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "single",
    "output": [
      "MenuItem"
    ]
  },
  "inputs": [
    {
      "inputId": "menuItemId",
      "fieldRef": "MenuItem.menuItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador único do item a ser editado"
    },
    {
      "inputId": "name",
      "fieldRef": "MenuItem.name",
      "required": true,
      "source": "userInput",
      "description": "Nome do item do cardápio"
    },
    {
      "inputId": "category",
      "fieldRef": "MenuItem.category",
      "required": true,
      "source": "userInput",
      "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)"
    },
    {
      "inputId": "price",
      "fieldRef": "MenuItem.price",
      "required": true,
      "source": "userInput",
      "description": "Preço de venda do item"
    },
    {
      "inputId": "description",
      "fieldRef": "MenuItem.description",
      "required": false,
      "source": "userInput",
      "description": "Descrição detalhada do item"
    },
    {
      "inputId": "status",
      "fieldRef": "MenuItem.status",
      "required": true,
      "source": "userInput",
      "description": "Status do ciclo de vida do item (active/inactive)"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.menuItemId",
      "source": "selectedEntity",
      "originRef": "MenuItem.menuItemId",
      "description": "Id do item selecionado na lista do cardápio no passo anterior"
    },
    {
      "targetRef": "MenuItem.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora da última atualização definida automaticamente pelo sistema"
    }
  ],
  "acceptanceAssertions": [
    "O item a ser editado é identificado pela seleção prévia no fluxo, não por digitação de ID técnico",
    "A operação aceita apenas um item por vez (seleção única)",
    "Campos de controle como createdAt e menuItemId não são fornecidos pelo usuário",
    "O sistema define automaticamente a data/hora da última atualização"
  ],
  "capability": {
    "capabilityId": "manageMenuItems",
    "title": "Gerenciar itens do cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "updateMenuItem",
  "commandName": "updateMenuItem",
  "bffName": "cafeFlow.updateMenuItem.updateMenuItem"
} as const;

export default operationUpdateMenuItem;
