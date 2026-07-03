/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-combo-rules.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-combo-rules",
  "pageName": "Gestão de Regras de Combo e Substituição",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryComboRules",
    "operation:createComboRule",
    "operation:updateComboRule",
    "operation:deleteComboRule"
  ],
  "operationIds": [
    "queryComboRules",
    "createComboRule",
    "updateComboRule",
    "deleteComboRule"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-manager-combo-rules",
    "workspaceKind": "entityManagement",
    "actor": "manager",
    "entity": "ComboRule",
    "owners": [
      {
        "kind": "operation",
        "id": "queryComboRules",
        "defPath": "_102049_/l4/operations/queryComboRules.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createComboRule",
        "defPath": "_102049_/l4/operations/createComboRule.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateComboRule",
        "defPath": "_102049_/l4/operations/updateComboRule.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteComboRule",
        "defPath": "_102049_/l4/operations/deleteComboRule.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryComboRules",
          "commandName": "queryComboRules",
          "steps": [
            "Acessar a tela de gerenciamento de combos",
            "Visualizar regras cadastradas"
          ]
        },
        {
          "operationId": "createComboRule",
          "commandName": "createComboRule",
          "steps": [
            "Selecionar itens que compõem o combo",
            "Definir substituições permitidas",
            "Configurar diferença de preço aplicável",
            "Salvar a regra"
          ]
        },
        {
          "operationId": "updateComboRule",
          "commandName": "updateComboRule",
          "steps": [
            "Localizar a regra",
            "Alterar itens, substituições ou diferença de preço",
            "Salvar alterações"
          ]
        },
        {
          "operationId": "deleteComboRule",
          "commandName": "deleteComboRule",
          "steps": [
            "Localizar a regra",
            "Confirmar exclusão"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.defs.ts",
    "tsPath": "_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-combo-rules.defs.ts",
    "layoutId": "ws-manager-combo-rules-layout"
  },
  "states": [
    {
      "stateKey": "ui.ws-manager-combo-rules.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.action.queryComboRules.status",
      "name": "queryComboRulesState",
      "kind": "actionStatus",
      "actionRef": "queryComboRules",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId",
      "name": "queryComboRulesComboRuleId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryComboRules",
        "direction": "input",
        "field": "comboRuleId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.menuItemId",
      "name": "queryComboRulesMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "queryComboRules",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.name",
      "name": "queryComboRulesName",
      "kind": "input",
      "contractRef": {
        "commandName": "queryComboRules",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.status",
      "name": "queryComboRulesStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "queryComboRules",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.createdAt",
      "name": "queryComboRulesCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryComboRules",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.updatedAt",
      "name": "queryComboRulesUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "queryComboRules",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules",
      "name": "queryComboRulesData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "queryComboRules",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.action.createComboRule.status",
      "name": "createComboRuleState",
      "kind": "actionStatus",
      "actionRef": "createComboRule",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.name",
      "name": "createComboRuleName",
      "kind": "input",
      "contractRef": {
        "commandName": "createComboRule",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.description",
      "name": "createComboRuleDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "createComboRule",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.priceDifference",
      "name": "createComboRulePriceDifference",
      "kind": "input",
      "contractRef": {
        "commandName": "createComboRule",
        "direction": "input",
        "field": "priceDifference"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.status",
      "name": "createComboRuleStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createComboRule",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.action.updateComboRule.status",
      "name": "updateComboRuleState",
      "kind": "actionStatus",
      "actionRef": "updateComboRule",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.name",
      "name": "updateComboRuleName",
      "kind": "input",
      "contractRef": {
        "commandName": "updateComboRule",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.description",
      "name": "updateComboRuleDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "updateComboRule",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.priceDifference",
      "name": "updateComboRulePriceDifference",
      "kind": "input",
      "contractRef": {
        "commandName": "updateComboRule",
        "direction": "input",
        "field": "priceDifference"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.status",
      "name": "updateComboRuleStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateComboRule",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.action.deleteComboRule.status",
      "name": "deleteComboRuleState",
      "kind": "actionStatus",
      "actionRef": "deleteComboRule",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId",
      "name": "deleteComboRuleComboRuleId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteComboRule",
        "direction": "input",
        "field": "comboRuleId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId",
      "name": "deleteComboRuleMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteComboRule",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.name",
      "name": "deleteComboRuleName",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteComboRule",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.description",
      "name": "deleteComboRuleDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteComboRule",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference",
      "name": "deleteComboRulePriceDifference",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteComboRule",
        "direction": "input",
        "field": "priceDifference"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.status",
      "name": "deleteComboRuleStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "deleteComboRule",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.output.createComboRule",
      "name": "OutputCreateComboRule",
      "kind": "commandOutput",
      "defaultValue": null
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.output.updateComboRule",
      "name": "OutputUpdateComboRule",
      "kind": "commandOutput",
      "defaultValue": null
    },
    {
      "stateKey": "ui.ws-manager-combo-rules.output.deleteComboRule",
      "name": "OutputDeleteComboRule",
      "kind": "commandOutput",
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "queryComboRules",
      "kind": "query",
      "commandRef": "queryComboRules",
      "routeKey": "cafeFlow.queryComboRules.queryComboRules",
      "purpose": "Consultar regras de combo e substituição",
      "methodName": "loadQueryComboRules",
      "handlerName": "handleQueryComboRulesClick",
      "inputStateKeys": [
        "ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId",
        "ui.ws-manager-combo-rules.input.queryComboRules.menuItemId",
        "ui.ws-manager-combo-rules.input.queryComboRules.name",
        "ui.ws-manager-combo-rules.input.queryComboRules.status",
        "ui.ws-manager-combo-rules.input.queryComboRules.createdAt",
        "ui.ws-manager-combo-rules.input.queryComboRules.updatedAt"
      ],
      "outputStateKeys": [
        "ui.ws-manager-combo-rules.data.queryComboRules"
      ],
      "statusStateKey": "ui.ws-manager-combo-rules.action.queryComboRules.status"
    },
    {
      "actionId": "createComboRule",
      "kind": "command",
      "commandRef": "createComboRule",
      "routeKey": "cafeFlow.createComboRule.createComboRule",
      "purpose": "Criar regra de combo e substituição",
      "methodName": "createComboRule",
      "handlerName": "handleCreateComboRuleClick",
      "inputStateKeys": [
        "ui.ws-manager-combo-rules.input.createComboRule.name",
        "ui.ws-manager-combo-rules.input.createComboRule.description",
        "ui.ws-manager-combo-rules.input.createComboRule.priceDifference",
        "ui.ws-manager-combo-rules.input.createComboRule.status"
      ],
      "outputStateKeys": [
        "ui.ws-manager-combo-rules.output.createComboRule"
      ],
      "statusStateKey": "ui.ws-manager-combo-rules.action.createComboRule.status"
    },
    {
      "actionId": "updateComboRule",
      "kind": "command",
      "commandRef": "updateComboRule",
      "routeKey": "cafeFlow.updateComboRule.updateComboRule",
      "purpose": "Editar regra de combo e substituição",
      "methodName": "updateComboRule",
      "handlerName": "handleUpdateComboRuleClick",
      "inputStateKeys": [
        "ui.ws-manager-combo-rules.input.updateComboRule.name",
        "ui.ws-manager-combo-rules.input.updateComboRule.description",
        "ui.ws-manager-combo-rules.input.updateComboRule.priceDifference",
        "ui.ws-manager-combo-rules.input.updateComboRule.status"
      ],
      "outputStateKeys": [
        "ui.ws-manager-combo-rules.output.updateComboRule"
      ],
      "statusStateKey": "ui.ws-manager-combo-rules.action.updateComboRule.status"
    },
    {
      "actionId": "deleteComboRule",
      "kind": "command",
      "commandRef": "deleteComboRule",
      "routeKey": "cafeFlow.deleteComboRule.deleteComboRule",
      "purpose": "Remover regra de combo e substituição",
      "methodName": "deleteComboRule",
      "handlerName": "handleDeleteComboRuleClick",
      "inputStateKeys": [
        "ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId",
        "ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId",
        "ui.ws-manager-combo-rules.input.deleteComboRule.name",
        "ui.ws-manager-combo-rules.input.deleteComboRule.description",
        "ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference",
        "ui.ws-manager-combo-rules.input.deleteComboRule.status"
      ],
      "outputStateKeys": [
        "ui.ws-manager-combo-rules.output.deleteComboRule"
      ],
      "statusStateKey": "ui.ws-manager-combo-rules.action.deleteComboRule.status"
    },
    {
      "actionId": "set.queryComboRulesComboRuleId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId",
      "methodName": "setQueryComboRulesComboRuleId",
      "handlerName": "handleQueryComboRulesComboRuleIdChange"
    },
    {
      "actionId": "set.queryComboRulesMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.menuItemId",
      "methodName": "setQueryComboRulesMenuItemId",
      "handlerName": "handleQueryComboRulesMenuItemIdChange"
    },
    {
      "actionId": "set.queryComboRulesName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.name",
      "methodName": "setQueryComboRulesName",
      "handlerName": "handleQueryComboRulesNameChange"
    },
    {
      "actionId": "set.queryComboRulesStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.status",
      "methodName": "setQueryComboRulesStatus",
      "handlerName": "handleQueryComboRulesStatusChange"
    },
    {
      "actionId": "set.queryComboRulesCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.createdAt",
      "methodName": "setQueryComboRulesCreatedAt",
      "handlerName": "handleQueryComboRulesCreatedAtChange"
    },
    {
      "actionId": "set.queryComboRulesUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.queryComboRules.updatedAt",
      "methodName": "setQueryComboRulesUpdatedAt",
      "handlerName": "handleQueryComboRulesUpdatedAtChange"
    },
    {
      "actionId": "set.createComboRuleName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.name",
      "methodName": "setCreateComboRuleName",
      "handlerName": "handleCreateComboRuleNameChange"
    },
    {
      "actionId": "set.createComboRuleDescription",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.description",
      "methodName": "setCreateComboRuleDescription",
      "handlerName": "handleCreateComboRuleDescriptionChange"
    },
    {
      "actionId": "set.createComboRulePriceDifference",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.priceDifference",
      "methodName": "setCreateComboRulePriceDifference",
      "handlerName": "handleCreateComboRulePriceDifferenceChange"
    },
    {
      "actionId": "set.createComboRuleStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.createComboRule.status",
      "methodName": "setCreateComboRuleStatus",
      "handlerName": "handleCreateComboRuleStatusChange"
    },
    {
      "actionId": "set.updateComboRuleName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.name",
      "methodName": "setUpdateComboRuleName",
      "handlerName": "handleUpdateComboRuleNameChange"
    },
    {
      "actionId": "set.updateComboRuleDescription",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.description",
      "methodName": "setUpdateComboRuleDescription",
      "handlerName": "handleUpdateComboRuleDescriptionChange"
    },
    {
      "actionId": "set.updateComboRulePriceDifference",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.priceDifference",
      "methodName": "setUpdateComboRulePriceDifference",
      "handlerName": "handleUpdateComboRulePriceDifferenceChange"
    },
    {
      "actionId": "set.updateComboRuleStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.updateComboRule.status",
      "methodName": "setUpdateComboRuleStatus",
      "handlerName": "handleUpdateComboRuleStatusChange"
    },
    {
      "actionId": "set.deleteComboRuleComboRuleId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId",
      "methodName": "setDeleteComboRuleComboRuleId",
      "handlerName": "handleDeleteComboRuleComboRuleIdChange"
    },
    {
      "actionId": "set.deleteComboRuleMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId",
      "methodName": "setDeleteComboRuleMenuItemId",
      "handlerName": "handleDeleteComboRuleMenuItemIdChange"
    },
    {
      "actionId": "set.deleteComboRuleName",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.name",
      "methodName": "setDeleteComboRuleName",
      "handlerName": "handleDeleteComboRuleNameChange"
    },
    {
      "actionId": "set.deleteComboRuleDescription",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.description",
      "methodName": "setDeleteComboRuleDescription",
      "handlerName": "handleDeleteComboRuleDescriptionChange"
    },
    {
      "actionId": "set.deleteComboRulePriceDifference",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference",
      "methodName": "setDeleteComboRulePriceDifference",
      "handlerName": "handleDeleteComboRulePriceDifferenceChange"
    },
    {
      "actionId": "set.deleteComboRuleStatus",
      "kind": "stateSetter",
      "stateKey": "ui.ws-manager-combo-rules.input.deleteComboRule.status",
      "methodName": "setDeleteComboRuleStatus",
      "handlerName": "handleDeleteComboRuleStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "queryComboRules",
      "stateKey": "ui.ws-manager-combo-rules.data.queryComboRules"
    }
  ],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt",
      "en"
    ]
  },
  "i18n": {
    "page.title": "Gestão de Regras de Combo e Substituição",
    "organism.queryComboRules.title": "Consultar Regras de Combo",
    "organism.createComboRule.title": "Criar Regra de Combo",
    "organism.updateComboRule.title": "Editar Regra de Combo",
    "organism.deleteComboRule.title": "Remover Regra de Combo",
    "intention.queryList.title": "Regras de Combo Cadastradas",
    "intention.createForm.title": "Nova Regra de Combo",
    "intention.updateForm.title": "Alterar Regra de Combo",
    "intention.deleteForm.title": "Confirmar Exclusão de Regra",
    "action.queryComboRules.label": "Buscar",
    "action.createComboRule.label": "Salvar",
    "action.updateComboRule.label": "Salvar Alterações",
    "action.deleteComboRule.label": "Confirmar Exclusão",
    "field.comboRuleId.label": "ID da Regra",
    "field.menuItemId.label": "Item do Cardápio",
    "field.name.label": "Nome",
    "field.description.label": "Descrição",
    "field.priceDifference.label": "Diferença de Preço",
    "field.status.label": "Situação",
    "field.createdAt.label": "Criado em",
    "field.updatedAt.label": "Atualizado em",
    "empty.queryComboRules.label": "Nenhuma regra de combo encontrada",
    "sec.main.title": "Gestão de Regras de Combo e Substituição"
  },
  "automation": {
    "statePrefix": "ui.ws-manager-combo-rules",
    "stateKeys": [
      "ui.ws-manager-combo-rules.status",
      "ui.ws-manager-combo-rules.action.queryComboRules.status",
      "ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId",
      "ui.ws-manager-combo-rules.input.queryComboRules.menuItemId",
      "ui.ws-manager-combo-rules.input.queryComboRules.name",
      "ui.ws-manager-combo-rules.input.queryComboRules.status",
      "ui.ws-manager-combo-rules.input.queryComboRules.createdAt",
      "ui.ws-manager-combo-rules.input.queryComboRules.updatedAt",
      "ui.ws-manager-combo-rules.data.queryComboRules",
      "ui.ws-manager-combo-rules.action.createComboRule.status",
      "ui.ws-manager-combo-rules.input.createComboRule.name",
      "ui.ws-manager-combo-rules.input.createComboRule.description",
      "ui.ws-manager-combo-rules.input.createComboRule.priceDifference",
      "ui.ws-manager-combo-rules.input.createComboRule.status",
      "ui.ws-manager-combo-rules.action.updateComboRule.status",
      "ui.ws-manager-combo-rules.input.updateComboRule.name",
      "ui.ws-manager-combo-rules.input.updateComboRule.description",
      "ui.ws-manager-combo-rules.input.updateComboRule.priceDifference",
      "ui.ws-manager-combo-rules.input.updateComboRule.status",
      "ui.ws-manager-combo-rules.action.deleteComboRule.status",
      "ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId",
      "ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId",
      "ui.ws-manager-combo-rules.input.deleteComboRule.name",
      "ui.ws-manager-combo-rules.input.deleteComboRule.description",
      "ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference",
      "ui.ws-manager-combo-rules.input.deleteComboRule.status",
      "ui.ws-manager-combo-rules.output.createComboRule",
      "ui.ws-manager-combo-rules.output.updateComboRule",
      "ui.ws-manager-combo-rules.output.deleteComboRule"
    ],
    "actionIds": [
      "queryComboRules",
      "createComboRule",
      "updateComboRule",
      "deleteComboRule",
      "set.queryComboRulesComboRuleId",
      "set.queryComboRulesMenuItemId",
      "set.queryComboRulesName",
      "set.queryComboRulesStatus",
      "set.queryComboRulesCreatedAt",
      "set.queryComboRulesUpdatedAt",
      "set.createComboRuleName",
      "set.createComboRuleDescription",
      "set.createComboRulePriceDifference",
      "set.createComboRuleStatus",
      "set.updateComboRuleName",
      "set.updateComboRuleDescription",
      "set.updateComboRulePriceDifference",
      "set.updateComboRuleStatus",
      "set.deleteComboRuleComboRuleId",
      "set.deleteComboRuleMenuItemId",
      "set.deleteComboRuleName",
      "set.deleteComboRuleDescription",
      "set.deleteComboRulePriceDifference",
      "set.deleteComboRuleStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "ws-manager-combo-rules__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-combo-rules.ts",
    "defPath": "_102049_/l2/cafeFlow/web/shared/ws-manager-combo-rules.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "ws-manager-combo-rules__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
