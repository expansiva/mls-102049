/// <mls fileReference="_102049_/l4/operations/queryComboRules.defs.ts" enhancement="_blank"/>

export const operationQueryComboRules = {
  "operationId": "queryComboRules",
  "title": "Consultar regras de combo e substituição",
  "actor": "manager",
  "entity": "ComboRule",
  "kind": "query",
  "reads": [
    "ComboRule",
    "MenuItem"
  ],
  "writes": [],
  "rulesApplied": [
    "comboPriceDifference"
  ],
  "story": {
    "actor": "manager",
    "goal": "Listar e buscar regras de combo cadastradas",
    "soThat": "O gerente tenha visão das regras configuradas",
    "steps": [
      "Acessar a tela de gerenciamento de combos",
      "Visualizar regras cadastradas"
    ],
    "outcome": "Lista de regras de combo exibida"
  },
  "accessPattern": {
    "kind": "list",
    "description": "Lista navegável de regras de combo e substituição com filtro opcional por situação e busca por nome",
    "entity": "ComboRule",
    "filters": [
      "status",
      "nameContains"
    ],
    "sort": [
      "ComboRule.createdAt"
    ],
    "pagination": "optional",
    "selection": "none",
    "output": [
      "ComboRule.comboRuleId",
      "ComboRule.name",
      "ComboRule.menuItemId",
      "ComboRule.description",
      "ComboRule.priceDifference",
      "ComboRule.status",
      "ComboRule.createdAt",
      "ComboRule.updatedAt",
      "MenuItem.name"
    ]
  },
  "inputs": [
    {
      "inputId": "status",
      "fieldRef": "ComboRule.status",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional pela situação da regra (active ou inactive)"
    },
    {
      "inputId": "nameContains",
      "fieldRef": "ComboRule.name",
      "required": false,
      "source": "userInput",
      "description": "Termo de busca opcional pelo nome da regra"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "filter.workspaceId",
      "source": "currentWorkspace",
      "originRef": "currentWorkspace.workspaceId",
      "description": "Escopo da consulta restrito ao workspace atual do gerente"
    }
  ],
  "acceptanceAssertions": [
    "Abrir a lista de regras de combo não exige digitar identificador técnico",
    "A lista permite filtrar opcionalmente por situação e buscar por nome",
    "Cada regra retornada apresenta o nome do item do cardápio referenciado",
    "A consulta retorna os resultados ordenados pela data de criação"
  ],
  "capability": {
    "capabilityId": "manageComboRules",
    "title": "Gerenciar regras de combo e substituição",
    "actor": "manager",
    "priority": "soon"
  },
  "pageId": "queryComboRules",
  "commandName": "queryComboRules",
  "bffName": "cafeFlow.queryComboRules.queryComboRules"
} as const;

export default operationQueryComboRules;
