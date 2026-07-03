/// <mls fileReference="_102049_/l4/operations/queryMenuItems.defs.ts" enhancement="_blank"/>

export const operationQueryMenuItems = {
  "operationId": "queryMenuItems",
  "title": "Consultar itens do cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "query",
  "reads": [
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
  "writes": [],
  "rulesApplied": [
    "comboPriceDifference"
  ],
  "story": {
    "actor": "manager",
    "goal": "Listar e buscar itens do cardápio",
    "soThat": "O gerente encontre rapidamente itens para edição",
    "steps": [
      "Acessar a tela de gerenciamento de cardápio",
      "Filtrar por categoria ou nome",
      "Visualizar resultados"
    ],
    "outcome": "Lista de itens do cardápio exibida"
  },
  "accessPattern": {
    "kind": "list",
    "description": "Lista paginada de itens do cardápio com filtros por categoria e nome, ordenada por nome",
    "entity": "MenuItem",
    "filters": [
      "MenuItem.category",
      "MenuItem.name"
    ],
    "sort": [
      "MenuItem.name"
    ],
    "pagination": "optional",
    "selection": "single",
    "output": [
      "MenuItem.menuItemId",
      "MenuItem.name",
      "MenuItem.category",
      "MenuItem.price",
      "MenuItem.description",
      "MenuItem.status",
      "MenuItem.createdAt",
      "MenuItem.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "categoryFilter",
      "fieldRef": "MenuItem.category",
      "required": false,
      "source": "userInput",
      "description": "Categoria do item para filtrar a lista"
    },
    {
      "inputId": "nameFilter",
      "fieldRef": "MenuItem.name",
      "required": false,
      "source": "userInput",
      "description": "Termo de busca pelo nome do item"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "filter.workspaceId",
      "source": "currentWorkspace",
      "originRef": "currentWorkspace.workspaceId",
      "description": "Escopo do workspace atual para filtrar os itens do cardápio"
    }
  ],
  "acceptanceAssertions": [
    "A listagem de itens do cardápio não exige digitação de identificador técnico",
    "Os filtros por categoria e nome são fornecidos pelo usuário",
    "A listagem é ordenada pelo nome do item",
    "A seleção de um item na lista permite iniciar a jornada de edição",
    "A consulta respeita o escopo do workspace atual"
  ],
  "capability": {
    "capabilityId": "manageMenuItems",
    "title": "Gerenciar itens do cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "queryMenuItems",
  "commandName": "queryMenuItems",
  "bffName": "cafeFlow.queryMenuItems.queryMenuItems"
} as const;

export default operationQueryMenuItems;
