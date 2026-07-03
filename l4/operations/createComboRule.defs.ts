/// <mls fileReference="_102049_/l4/operations/createComboRule.defs.ts" enhancement="_blank"/>

export const operationCreateComboRule = {
  "operationId": "createComboRule",
  "title": "Criar regra de combo e substituição",
  "actor": "manager",
  "entity": "ComboRule",
  "kind": "create",
  "reads": [
    "MenuItem"
  ],
  "writes": [
    "ComboRule",
    "ComboRule.comboRuleId",
    "ComboRule.menuItemId",
    "ComboRule.name",
    "ComboRule.description",
    "ComboRule.priceDifference",
    "ComboRule.status",
    "ComboRule.createdAt",
    "ComboRule.updatedAt"
  ],
  "rulesApplied": [
    "comboPriceDifference"
  ],
  "story": {
    "actor": "manager",
    "goal": "Definir uma regra de combo ou substituição com diferença de preço",
    "soThat": "O atendente possa aplicar combos e substituições com preço correto",
    "steps": [
      "Selecionar itens que compõem o combo",
      "Definir substituições permitidas",
      "Configurar diferença de preço aplicável",
      "Salvar a regra"
    ],
    "outcome": "Regra de combo cadastrada e disponível no POS"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Criação de uma nova regra de combo/substituição vinculada a um item do cardápio",
    "entity": "ComboRule",
    "filters": [],
    "sort": [],
    "output": []
  },
  "inputs": [
    {
      "inputId": "menuItemId",
      "fieldRef": "ComboRule.menuItemId",
      "required": true,
      "source": "selectedEntity",
      "description": "Item do cardápio ao qual a regra se aplica"
    },
    {
      "inputId": "name",
      "fieldRef": "ComboRule.name",
      "required": true,
      "source": "userInput",
      "description": "Nome descritivo da regra"
    },
    {
      "inputId": "description",
      "fieldRef": "ComboRule.description",
      "required": false,
      "source": "userInput",
      "description": "Detalhamento da regra e condições de aplicação"
    },
    {
      "inputId": "priceDifference",
      "fieldRef": "ComboRule.priceDifference",
      "required": true,
      "source": "userInput",
      "description": "Diferença de preço aplicada no combo ou substituição"
    },
    {
      "inputId": "status",
      "fieldRef": "ComboRule.status",
      "required": true,
      "source": "userInput",
      "description": "Situação da regra no ciclo de vida (active/inactive)"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "ComboRule.comboRuleId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Identificador único gerado automaticamente para a regra"
    },
    {
      "targetRef": "ComboRule.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora de criação atribuída pelo sistema"
    },
    {
      "targetRef": "ComboRule.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora da última atualização atribuída pelo sistema"
    },
    {
      "targetRef": "input.menuItemId",
      "source": "selectedEntity",
      "originRef": "MenuItem.menuItemId",
      "description": "Identificador do item do cardápio selecionado na jornada"
    }
  ],
  "acceptanceAssertions": [
    "O gerente cria a regra sem digitar identificadores técnicos",
    "O id do item do cardápio é resolvido a partir da entidade selecionada na jornada, não digitado manualmente",
    "O identificador da regra e os timestamps de criação/atualização são gerados automaticamente pelo sistema",
    "A regra comboPriceDifference é aplicada na criação"
  ],
  "capability": {
    "capabilityId": "manageComboRules",
    "title": "Gerenciar regras de combo e substituição",
    "actor": "manager",
    "priority": "soon"
  },
  "pageId": "createComboRule",
  "commandName": "createComboRule",
  "bffName": "cafeFlow.createComboRule.createComboRule"
} as const;

export default operationCreateComboRule;
