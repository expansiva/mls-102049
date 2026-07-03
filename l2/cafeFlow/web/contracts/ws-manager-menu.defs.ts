/// <mls fileReference="_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "queryMenuItems",
    "bffName": "cafeFlow.queryMenuItems.queryMenuItems",
    "routeKey": "cafeFlow.queryMenuItems.queryMenuItems",
    "purpose": "Consultar itens do cardápio",
    "kind": "query",
    "input": [
      {
        "name": "menuItemId",
        "type": "string",
        "required": false,
        "description": "Identificador único do item do cardápio"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Nome do item do cardápio"
      },
      {
        "name": "category",
        "type": "string",
        "required": false,
        "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do ciclo de vida do item"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Identificador único do item do cardápio"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do item do cardápio"
      },
      {
        "name": "category",
        "type": "string",
        "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)"
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço de venda do item"
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição detalhada do item"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do ciclo de vida do item"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:queryMenuItems",
      "operationId": "queryMenuItems",
      "defPath": "_102049_/l4/operations/queryMenuItems.defs.ts",
      "bffName": "cafeFlow.queryMenuItems.queryMenuItems"
    }
  },
  {
    "commandName": "createMenuItem",
    "bffName": "cafeFlow.createMenuItem.createMenuItem",
    "routeKey": "cafeFlow.createMenuItem.createMenuItem",
    "purpose": "Criar item do cardápio",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do item do cardápio"
      },
      {
        "name": "category",
        "type": "string",
        "required": true,
        "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço de venda do item"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição detalhada do item"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do ciclo de vida do item"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Identificador único do item do cardápio"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createMenuItem",
      "operationId": "createMenuItem",
      "defPath": "_102049_/l4/operations/createMenuItem.defs.ts",
      "bffName": "cafeFlow.createMenuItem.createMenuItem"
    }
  },
  {
    "commandName": "updateMenuItem",
    "bffName": "cafeFlow.updateMenuItem.updateMenuItem",
    "routeKey": "cafeFlow.updateMenuItem.updateMenuItem",
    "purpose": "Editar item do cardápio",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do item do cardápio"
      },
      {
        "name": "category",
        "type": "string",
        "required": true,
        "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço de venda do item"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição detalhada do item"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do ciclo de vida do item"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Identificador único do item do cardápio"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateMenuItem",
      "operationId": "updateMenuItem",
      "defPath": "_102049_/l4/operations/updateMenuItem.defs.ts",
      "bffName": "cafeFlow.updateMenuItem.updateMenuItem"
    }
  },
  {
    "commandName": "deleteMenuItem",
    "bffName": "cafeFlow.deleteMenuItem.deleteMenuItem",
    "routeKey": "cafeFlow.deleteMenuItem.deleteMenuItem",
    "purpose": "Remover item do cardápio",
    "kind": "command",
    "input": [
      {
        "name": "menuItemId",
        "type": "string",
        "required": false,
        "description": "Identificador único do item do cardápio"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do item do cardápio"
      },
      {
        "name": "category",
        "type": "string",
        "required": true,
        "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço de venda do item"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição detalhada do item"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Status do ciclo de vida do item"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Identificador único do item do cardápio"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:deleteMenuItem",
      "operationId": "deleteMenuItem",
      "defPath": "_102049_/l4/operations/deleteMenuItem.defs.ts",
      "bffName": "cafeFlow.deleteMenuItem.deleteMenuItem"
    }
  }
];

export const pipeline = [
  {
    "id": "ws-manager-menu__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.ts",
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
