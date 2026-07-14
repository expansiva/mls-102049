/// <mls fileReference="_102049_/l2/petShop/web/shared/operatorManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "operatorManagement",
  "pageName": "Gestão de operadores",
  "moduleName": "petShop",
  "baseClassName": "PetShopOperatorManagementBase",
  "routePattern": "/petShop/operatorManagement/:operatorId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseOperators",
    "operation:createOperator",
    "operation:updateOperator"
  ],
  "operationIds": [
    "browseOperators",
    "createOperator",
    "updateOperator"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "operatorManagement",
    "workspaceKind": "entityManagement",
    "actor": "admin",
    "entity": "Operator",
    "owners": [
      {
        "kind": "operation",
        "id": "browseOperators",
        "defPath": "_102049_/l4/operations/browseOperators.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createOperator",
        "defPath": "_102049_/l4/operations/createOperator.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateOperator",
        "defPath": "_102049_/l4/operations/updateOperator.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseOperators",
          "commandName": "browseOperators",
          "steps": [
            "O administrador acessa a tela de gestão de operadores",
            "O sistema retorna a lista de todos os operadores cadastrados com nome, e-mail, telefone, status ativo e datas de cadastro/atualização",
            "O administrador pode filtrar por status ativo e ordenar por nome"
          ]
        },
        {
          "operationId": "createOperator",
          "commandName": "createOperator",
          "steps": [
            "O administrador acessa a tela de cadastro de operadores e preenche o nome, e-mail, telefone e indica se o operador inicia ativo.",
            "O sistema gera um identificador único, registra a data de criação e persiste o novo operador.",
            "O operador cadastrado torna-se disponível para alocação em turnos e agendamentos."
          ]
        },
        {
          "operationId": "updateOperator",
          "commandName": "updateOperator",
          "steps": [
            "O administrador seleciona um operador na lista de operadores cadastrados.",
            "O sistema carrega os dados atuais do operador em um formulário de edição.",
            "O administrador altera nome, e-mail, telefone e/ou status ativo conforme necessário.",
            "O sistema valida os campos informados e persiste as alterações atualizando a data de modificação."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/operatorManagement.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/operatorManagement.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/operatorManagement.defs.ts",
    "layoutId": "page11-tabular-classic"
  },
  "states": [
    {
      "stateKey": "ui.operatorManagement.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.action.browseOperators.status",
      "name": "browseOperatorsState",
      "kind": "actionStatus",
      "actionRef": "browseOperators",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.operatorManagement.input.browseOperators.activeFilter",
      "name": "browseOperatorsActiveFilter",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseOperators",
        "direction": "input",
        "field": "activeFilter"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.data.browseOperators",
      "name": "browseOperatorsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseOperators",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    },
    {
      "stateKey": "ui.operatorManagement.action.createOperator.status",
      "name": "createOperatorState",
      "kind": "actionStatus",
      "actionRef": "createOperator",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.operatorManagement.input.createOperator.name",
      "name": "createOperatorName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createOperator",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.input.createOperator.email",
      "name": "createOperatorEmail",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createOperator",
        "direction": "input",
        "field": "email"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.input.createOperator.phone",
      "name": "createOperatorPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createOperator",
        "direction": "input",
        "field": "phone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.input.createOperator.active",
      "name": "createOperatorActive",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createOperator",
        "direction": "input",
        "field": "active"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.output.createOperator",
      "name": "createOperatorOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createOperator",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.operatorManagement.action.createOperator.error",
      "name": "createOperatorError",
      "kind": "actionError",
      "actionRef": "createOperator",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.action.updateOperator.status",
      "name": "updateOperatorState",
      "kind": "actionStatus",
      "actionRef": "updateOperator",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.operatorManagement.input.updateOperator.operatorId",
      "name": "updateOperatorOperatorId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "updateOperator",
        "direction": "input",
        "field": "operatorId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.input.updateOperator.name",
      "name": "updateOperatorName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateOperator",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.input.updateOperator.email",
      "name": "updateOperatorEmail",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateOperator",
        "direction": "input",
        "field": "email"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.input.updateOperator.phone",
      "name": "updateOperatorPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateOperator",
        "direction": "input",
        "field": "phone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.input.updateOperator.active",
      "name": "updateOperatorActive",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateOperator",
        "direction": "input",
        "field": "active"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.operatorManagement.output.updateOperator",
      "name": "updateOperatorOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateOperator",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.operatorManagement.action.updateOperator.error",
      "name": "updateOperatorError",
      "kind": "actionError",
      "actionRef": "updateOperator",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseOperators",
      "kind": "query",
      "commandRef": "browseOperators",
      "routeKey": "petShop.browseOperators.browseOperators",
      "purpose": "Listar operadores cadastrados",
      "methodName": "loadBrowseOperators",
      "handlerName": "handleBrowseOperatorsClick",
      "inputStateKeys": [
        "ui.operatorManagement.input.browseOperators.activeFilter"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.operatorManagement.data.browseOperators"
      ],
      "statusStateKey": "ui.operatorManagement.action.browseOperators.status"
    },
    {
      "actionId": "createOperator",
      "kind": "command",
      "commandRef": "createOperator",
      "routeKey": "petShop.createOperator.createOperator",
      "purpose": "Cadastrar operador",
      "methodName": "createOperator",
      "handlerName": "handleCreateOperatorClick",
      "inputStateKeys": [
        "ui.operatorManagement.input.createOperator.name",
        "ui.operatorManagement.input.createOperator.email",
        "ui.operatorManagement.input.createOperator.phone",
        "ui.operatorManagement.input.createOperator.active"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.operatorManagement.output.createOperator"
      ],
      "statusStateKey": "ui.operatorManagement.action.createOperator.status",
      "errorStateKey": "ui.operatorManagement.action.createOperator.error",
      "feedback": {
        "successMessageKey": "action.createOperator.success",
        "errorMessageKey": "action.createOperator.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.operatorManagement.input.createOperator.name",
        "ui.operatorManagement.input.createOperator.email",
        "ui.operatorManagement.input.createOperator.phone",
        "ui.operatorManagement.input.createOperator.active"
      ],
      "refreshActionIds": [
        "browseOperators"
      ]
    },
    {
      "actionId": "updateOperator",
      "kind": "command",
      "commandRef": "updateOperator",
      "routeKey": "petShop.updateOperator.updateOperator",
      "purpose": "Editar operador",
      "methodName": "updateOperator",
      "handlerName": "handleUpdateOperatorClick",
      "inputStateKeys": [
        "ui.operatorManagement.input.updateOperator.operatorId",
        "ui.operatorManagement.input.updateOperator.name",
        "ui.operatorManagement.input.updateOperator.email",
        "ui.operatorManagement.input.updateOperator.phone",
        "ui.operatorManagement.input.updateOperator.active"
      ],
      "routeParamInputStateKeys": [
        "ui.operatorManagement.input.updateOperator.operatorId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.operatorManagement.output.updateOperator"
      ],
      "statusStateKey": "ui.operatorManagement.action.updateOperator.status",
      "errorStateKey": "ui.operatorManagement.action.updateOperator.error",
      "feedback": {
        "successMessageKey": "action.updateOperator.success",
        "errorMessageKey": "action.updateOperator.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.operatorManagement.input.updateOperator.name",
        "ui.operatorManagement.input.updateOperator.email",
        "ui.operatorManagement.input.updateOperator.phone",
        "ui.operatorManagement.input.updateOperator.active"
      ],
      "refreshActionIds": [
        "browseOperators"
      ]
    },
    {
      "actionId": "set.browseOperatorsActiveFilter",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.browseOperators.activeFilter",
      "methodName": "setBrowseOperatorsActiveFilter",
      "handlerName": "handleBrowseOperatorsActiveFilterChange"
    },
    {
      "actionId": "set.createOperatorName",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.createOperator.name",
      "methodName": "setCreateOperatorName",
      "handlerName": "handleCreateOperatorNameChange"
    },
    {
      "actionId": "set.createOperatorEmail",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.createOperator.email",
      "methodName": "setCreateOperatorEmail",
      "handlerName": "handleCreateOperatorEmailChange"
    },
    {
      "actionId": "set.createOperatorPhone",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.createOperator.phone",
      "methodName": "setCreateOperatorPhone",
      "handlerName": "handleCreateOperatorPhoneChange"
    },
    {
      "actionId": "set.createOperatorActive",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.createOperator.active",
      "methodName": "setCreateOperatorActive",
      "handlerName": "handleCreateOperatorActiveChange"
    },
    {
      "actionId": "set.updateOperatorOperatorId",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.updateOperator.operatorId",
      "methodName": "setUpdateOperatorOperatorId",
      "handlerName": "handleUpdateOperatorOperatorIdChange"
    },
    {
      "actionId": "set.updateOperatorName",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.updateOperator.name",
      "methodName": "setUpdateOperatorName",
      "handlerName": "handleUpdateOperatorNameChange"
    },
    {
      "actionId": "set.updateOperatorEmail",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.updateOperator.email",
      "methodName": "setUpdateOperatorEmail",
      "handlerName": "handleUpdateOperatorEmailChange"
    },
    {
      "actionId": "set.updateOperatorPhone",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.updateOperator.phone",
      "methodName": "setUpdateOperatorPhone",
      "handlerName": "handleUpdateOperatorPhoneChange"
    },
    {
      "actionId": "set.updateOperatorActive",
      "kind": "stateSetter",
      "stateKey": "ui.operatorManagement.input.updateOperator.active",
      "methodName": "setUpdateOperatorActive",
      "handlerName": "handleUpdateOperatorActiveChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseOperators",
      "stateKey": "ui.operatorManagement.data.browseOperators"
    }
  ],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt"
    ]
  },
  "i18n": {
    "operatorManagement.browse.title": "Operadores cadastrados",
    "operatorManagement.browse.empty": "Nenhum operador cadastrado ainda. Clique em \"Cadastrar operador\" para adicionar o primeiro.",
    "operatorManagement.create.title": "Cadastrar operador",
    "operatorManagement.create.empty": "Preencha os dados abaixo para cadastrar um novo operador.",
    "operatorManagement.update.title": "Editar operador",
    "operatorManagement.update.empty": "Selecione um operador na lista para editar seus dados.",
    "operatorManagement.field.name": "Nome",
    "operatorManagement.field.email": "E-mail",
    "operatorManagement.field.phone": "Telefone",
    "operatorManagement.field.active": "Ativo",
    "operatorManagement.field.updatedAt": "Atualizado em",
    "operatorManagement.field.operatorId": "Operador",
    "operatorManagement.filter.active": "Apenas ativos",
    "operatorManagement.action.create": "Cadastrar operador",
    "operatorManagement.action.create.submit": "Salvar operador",
    "operatorManagement.action.update": "Editar",
    "operatorManagement.action.update.submit": "Salvar alterações",
    "action.createOperator.success": "Operador cadastrado com sucesso. Ele já está disponível para alocação em turnos e agendamentos.",
    "action.createOperator.error": "Não foi possível cadastrar o operador. Verifique os dados informados e tente novamente.",
    "action.updateOperator.success": "Dados do operador atualizados com sucesso.",
    "action.updateOperator.error": "Não foi possível atualizar o operador. Verifique os dados informados e tente novamente.",
    "sec.operator.management.title": "Sec operator management",
    "org.browse.operators.title": "Listar operadores cadastrados com filtros e ações por linha",
    "org.create.operator.title": "Cadastrar novo operador com nome, e mail, telefone e status ativo",
    "org.update.operator.title": "Editar dados de um operador selecionado na lista"
  },
  "automation": {
    "statePrefix": "ui.operatorManagement",
    "stateKeys": [
      "ui.operatorManagement.status",
      "ui.operatorManagement.action.browseOperators.status",
      "ui.operatorManagement.input.browseOperators.activeFilter",
      "ui.operatorManagement.data.browseOperators",
      "ui.operatorManagement.action.createOperator.status",
      "ui.operatorManagement.input.createOperator.name",
      "ui.operatorManagement.input.createOperator.email",
      "ui.operatorManagement.input.createOperator.phone",
      "ui.operatorManagement.input.createOperator.active",
      "ui.operatorManagement.output.createOperator",
      "ui.operatorManagement.action.createOperator.error",
      "ui.operatorManagement.action.updateOperator.status",
      "ui.operatorManagement.input.updateOperator.operatorId",
      "ui.operatorManagement.input.updateOperator.name",
      "ui.operatorManagement.input.updateOperator.email",
      "ui.operatorManagement.input.updateOperator.phone",
      "ui.operatorManagement.input.updateOperator.active",
      "ui.operatorManagement.output.updateOperator",
      "ui.operatorManagement.action.updateOperator.error"
    ],
    "actionIds": [
      "browseOperators",
      "createOperator",
      "updateOperator",
      "set.browseOperatorsActiveFilter",
      "set.createOperatorName",
      "set.createOperatorEmail",
      "set.createOperatorPhone",
      "set.createOperatorActive",
      "set.updateOperatorOperatorId",
      "set.updateOperatorName",
      "set.updateOperatorEmail",
      "set.updateOperatorPhone",
      "set.updateOperatorActive"
    ]
  }
};

export const pipeline = [
  {
    "id": "operatorManagement__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/operatorManagement.ts",
    "defPath": "_102049_/l2/petShop/web/shared/operatorManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/operatorManagement.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "operatorManagement__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
