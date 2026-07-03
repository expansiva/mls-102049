/// <mls fileReference="_102049_/l4/operations/createMenuItem.defs.ts" enhancement="_blank"/>

export const operationCreateMenuItem = {
  "operationId": "createMenuItem",
  "title": "Criar item do cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "create",
  "reads": [],
  "writes": [
    "MenuItem",
    "MenuItem.menuItemId",
    "MenuItem.name",
    "MenuItem.category",
    "MenuItem.price",
    "MenuItem.description",
    "MenuItem.status",
    "MenuItem.createdAt",
    "MenuItem.updatedAt"
  ],
  "rulesApplied": [
    "comboPriceDifference"
  ],
  "story": {
    "actor": "manager",
    "goal": "Cadastrar um novo item no cardápio",
    "soThat": "O cardápio reflita a oferta atual do café",
    "steps": [
      "Informar nome, preço e categoria do item",
      "Definir insumos e quantidades consumidas",
      "Salvar o item"
    ],
    "outcome": "Novo item de cardápio disponível para lançamento no POS"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Command to create a new menu item reference with name, category, price, description and lifecycle status",
    "entity": "MenuItem",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "none",
    "output": []
  },
  "inputs": [
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
      "targetRef": "MenuItem.menuItemId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Identificador único do item gerado automaticamente pelo sistema"
    },
    {
      "targetRef": "MenuItem.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora de criação atribuída automaticamente pelo sistema"
    },
    {
      "targetRef": "MenuItem.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora da última atualização atribuída automaticamente pelo sistema"
    }
  ],
  "acceptanceAssertions": [
    "Criar um item de cardápio não requer que o gestor informe um identificador técnico",
    "O identificador único do item é gerado automaticamente pelo sistema",
    "As datas de criação e última atualização são atribuídas automaticamente pelo sistema",
    "A operação aplica a regra comboPriceDifference no momento do cadastro"
  ],
  "capability": {
    "capabilityId": "manageMenuItems",
    "title": "Gerenciar itens do cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "createMenuItem",
  "commandName": "createMenuItem",
  "bffName": "cafeFlow.createMenuItem.createMenuItem"
} as const;

export default operationCreateMenuItem;
