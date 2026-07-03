/// <mls fileReference="_102049_/l4/operations/deleteComboRule.defs.ts" enhancement="_blank"/>

export const operationDeleteComboRule = {
  "operationId": "deleteComboRule",
  "title": "Remover regra de combo e substituição",
  "actor": "manager",
  "entity": "ComboRule",
  "kind": "delete",
  "reads": [
    "ComboRule"
  ],
  "writes": [
    "ComboRule"
  ],
  "rulesApplied": [
    "comboPriceDifference"
  ],
  "story": {
    "actor": "manager",
    "goal": "Remover uma regra de combo",
    "soThat": "Regras obsoletas não apareçam no lançamento de pedidos",
    "steps": [
      "Localizar a regra",
      "Confirmar exclusão"
    ],
    "outcome": "Regra removida e não mais aplicável no POS"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Exclusão de uma regra de combo previamente selecionada",
    "entity": "ComboRule",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "single",
    "output": []
  },
  "inputs": [
    {
      "inputId": "comboRuleId",
      "fieldRef": "ComboRule.comboRuleId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador único da regra de combo selecionada para exclusão"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.comboRuleId",
      "source": "selectedEntity",
      "originRef": "ComboRule.comboRuleId",
      "description": "Resolve o identificador da regra de combo a partir da entidade selecionada no fluxo"
    }
  ],
  "acceptanceAssertions": [
    "A exclusão requer a seleção prévia de uma regra de combo no fluxo",
    "O identificador técnico da regra não é digitado manualmente pelo usuário",
    "A regra removida não deve mais ser aplicável no lançamento de pedidos"
  ],
  "capability": {
    "capabilityId": "manageComboRules",
    "title": "Gerenciar regras de combo e substituição",
    "actor": "manager",
    "priority": "soon"
  },
  "pageId": "deleteComboRule",
  "commandName": "deleteComboRule",
  "bffName": "cafeFlow.deleteComboRule.deleteComboRule"
} as const;

export default operationDeleteComboRule;
