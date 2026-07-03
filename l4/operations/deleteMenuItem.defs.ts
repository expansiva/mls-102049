/// <mls fileReference="_102049_/l4/operations/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const operationDeleteMenuItem = {
  "operationId": "deleteMenuItem",
  "title": "Remover item do cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "delete",
  "reads": [
    "MenuItem",
    "MenuItem.status"
  ],
  "writes": [
    "MenuItem"
  ],
  "rulesApplied": [
    "comboPriceDifference"
  ],
  "story": {
    "actor": "manager",
    "goal": "Remover um item do cardápio",
    "soThat": "Itens fora da oferta sejam retirados do POS",
    "steps": [
      "Localizar o item a ser removido",
      "Confirmar exclusão"
    ],
    "outcome": "Item removido do cardápio e indisponível para novos pedidos"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Remove um item do cardápio previamente selecionado",
    "entity": "MenuItem",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "single",
    "output": [
      "MenuItem.menuItemId"
    ]
  },
  "inputs": [
    {
      "inputId": "menuItemId",
      "fieldRef": "MenuItem.menuItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador único do item do cardápio a ser removido"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.menuItemId",
      "source": "selectedEntity",
      "originRef": "MenuItem.menuItemId",
      "description": "Id do item selecionado na lista para remoção"
    }
  ],
  "acceptanceAssertions": [
    "A exclusão requer o id do item selecionado previamente na jornada",
    "O gerente deve confirmar a ação de remoção",
    "O item removido fica indisponível para novos pedidos",
    "Não é necessário digitar o id técnico manualmente"
  ],
  "capability": {
    "capabilityId": "manageMenuItems",
    "title": "Gerenciar itens do cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "deleteMenuItem",
  "commandName": "deleteMenuItem",
  "bffName": "cafeFlow.deleteMenuItem.deleteMenuItem"
} as const;

export default operationDeleteMenuItem;
