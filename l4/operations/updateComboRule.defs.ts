/// <mls fileReference="_102049_/l4/operations/updateComboRule.defs.ts" enhancement="_blank"/>

export const operationUpdateComboRule = {
  "operationId": "updateComboRule",
  "title": "Editar regra de combo e substituição",
  "actor": "manager",
  "entity": "ComboRule",
  "kind": "update",
  "reads": [
    "ComboRule",
    "MenuItem"
  ],
  "writes": [
    "ComboRule",
    "ComboRule.name",
    "ComboRule.description",
    "ComboRule.priceDifference",
    "ComboRule.status",
    "ComboRule.updatedAt"
  ],
  "rulesApplied": [
    "comboPriceDifference"
  ],
  "story": {
    "actor": "manager",
    "goal": "Atualizar uma regra de combo existente",
    "soThat": "As regras reflitam a política comercial atual",
    "steps": [
      "Localizar a regra",
      "Alterar itens, substituições ou diferença de preço",
      "Salvar alterações"
    ],
    "outcome": "Regra de combo atualizada"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Comando de atualização dos campos editáveis de uma regra de combo existente",
    "filters": [],
    "sort": [],
    "output": []
  },
  "inputs": [
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
      "description": "Situação da regra no ciclo de vida"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "ComboRule.comboRuleId",
      "source": "selectedEntity",
      "originRef": "ComboRule.comboRuleId",
      "description": "Identificador único da regra de combo sendo editada, resolvido da entidade selecionada na jornada"
    }
  ],
  "acceptanceAssertions": [
    "A operação utiliza o id da regra selecionada no contexto da jornada, sem exigir digitação de identificador técnico",
    "O gerente pode alterar nome, descrição, diferença de preço e situação da regra",
    "A regra de negócio comboPriceDifference é aplicada ao salvar as alterações"
  ],
  "capability": {
    "capabilityId": "manageComboRules",
    "title": "Gerenciar regras de combo e substituição",
    "actor": "manager",
    "priority": "soon"
  },
  "pageId": "updateComboRule",
  "commandName": "updateComboRule",
  "bffName": "cafeFlow.updateComboRule.updateComboRule"
} as const;

export default operationUpdateComboRule;
