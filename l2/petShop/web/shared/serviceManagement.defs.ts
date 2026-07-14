/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "serviceManagement",
  "pageName": "Gestão de serviços",
  "moduleName": "petShop",
  "baseClassName": "PetShopServiceManagementBase",
  "routePattern": "/petShop/serviceManagement",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseServices",
    "operation:createService",
    "operation:updateService"
  ],
  "operationIds": [
    "browseServices",
    "createService",
    "updateService"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "serviceManagement",
    "workspaceKind": "entityManagement",
    "actor": "admin",
    "entity": "Service",
    "owners": [
      {
        "kind": "operation",
        "id": "browseServices",
        "defPath": "_102049_/l4/operations/browseServices.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createService",
        "defPath": "_102049_/l4/operations/createService.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateService",
        "defPath": "_102049_/l4/operations/updateService.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseServices",
          "commandName": "browseServices",
          "steps": [
            "O administrador acessa a tela de gestão de serviços",
            "O sistema retorna a lista de todos os serviços cadastrados com nome, descrição, duração estimada, preço e status de ativação",
            "O administrador pode filtrar e ordenar a listagem para localizar serviços específicos"
          ]
        },
        {
          "operationId": "createService",
          "commandName": "createService",
          "steps": [
            "O administrador acessa a tela de cadastro de serviços.",
            "Preenche nome, descrição, duração estimada em minutos e preço do serviço.",
            "O sistema gera um identificador único, define o status como ativo e registra as datas de criação e atualização.",
            "O serviço é persistido e passa a aparecer na listagem para clientes."
          ]
        },
        {
          "operationId": "updateService",
          "commandName": "updateService",
          "steps": [
            "O administrador seleciona um serviço existente na lista de serviços cadastrados.",
            "O sistema carrega os dados atuais do serviço para edição.",
            "O administrador edita os campos desejados (nome, descrição, duração estimada, preço) e define o status como ativo ou inativo.",
            "O administrador confirma a atualização.",
            "O sistema persiste as alterações, atualiza updatedAt e, se desativado, registra deactivatedAt, sem cancelar agendamentos já confirmados."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/serviceManagement.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/serviceManagement.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/serviceManagement.defs.ts",
    "layoutId": "page11-tabular-classic"
  },
  "states": [
    {
      "stateKey": "ui.serviceManagement.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.action.browseServices.status",
      "name": "browseServicesState",
      "kind": "actionStatus",
      "actionRef": "browseServices",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.serviceManagement.input.browseServices.statusFilter",
      "name": "browseServicesStatusFilter",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseServices",
        "direction": "input",
        "field": "statusFilter"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.data.browseServices",
      "name": "browseServicesData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseServices",
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
      "stateKey": "ui.serviceManagement.action.createService.status",
      "name": "createServiceState",
      "kind": "actionStatus",
      "actionRef": "createService",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.serviceManagement.input.createService.name",
      "name": "createServiceName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createService",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.input.createService.description",
      "name": "createServiceDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createService",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.input.createService.estimatedDurationMinutes",
      "name": "createServiceEstimatedDurationMinutes",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createService",
        "direction": "input",
        "field": "estimatedDurationMinutes"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.input.createService.price",
      "name": "createServicePrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createService",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.output.createService",
      "name": "createServiceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createService",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.serviceManagement.action.createService.error",
      "name": "createServiceError",
      "kind": "actionError",
      "actionRef": "createService",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.action.updateService.status",
      "name": "updateServiceState",
      "kind": "actionStatus",
      "actionRef": "updateService",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.serviceManagement.input.updateService.serviceId",
      "name": "updateServiceServiceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "updateService",
        "direction": "input",
        "field": "serviceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.input.updateService.name",
      "name": "updateServiceName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateService",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.input.updateService.description",
      "name": "updateServiceDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateService",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.input.updateService.estimatedDurationMinutes",
      "name": "updateServiceEstimatedDurationMinutes",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateService",
        "direction": "input",
        "field": "estimatedDurationMinutes"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.input.updateService.price",
      "name": "updateServicePrice",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateService",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.input.updateService.status",
      "name": "updateServiceStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateService",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.serviceManagement.output.updateService",
      "name": "updateServiceOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateService",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.serviceManagement.action.updateService.error",
      "name": "updateServiceError",
      "kind": "actionError",
      "actionRef": "updateService",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseServices",
      "kind": "query",
      "commandRef": "browseServices",
      "routeKey": "petShop.browseServices.browseServices",
      "purpose": "Listar serviços cadastrados",
      "methodName": "loadBrowseServices",
      "handlerName": "handleBrowseServicesClick",
      "inputStateKeys": [
        "ui.serviceManagement.input.browseServices.statusFilter"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.serviceManagement.data.browseServices"
      ],
      "statusStateKey": "ui.serviceManagement.action.browseServices.status"
    },
    {
      "actionId": "createService",
      "kind": "command",
      "commandRef": "createService",
      "routeKey": "petShop.createService.createService",
      "purpose": "Cadastrar serviço",
      "methodName": "createService",
      "handlerName": "handleCreateServiceClick",
      "inputStateKeys": [
        "ui.serviceManagement.input.createService.name",
        "ui.serviceManagement.input.createService.description",
        "ui.serviceManagement.input.createService.estimatedDurationMinutes",
        "ui.serviceManagement.input.createService.price"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.serviceManagement.output.createService"
      ],
      "statusStateKey": "ui.serviceManagement.action.createService.status",
      "errorStateKey": "ui.serviceManagement.action.createService.error",
      "feedback": {
        "successMessageKey": "action.createService.success",
        "errorMessageKey": "action.createService.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.serviceManagement.input.createService.name",
        "ui.serviceManagement.input.createService.description",
        "ui.serviceManagement.input.createService.estimatedDurationMinutes",
        "ui.serviceManagement.input.createService.price"
      ],
      "refreshActionIds": [
        "browseServices"
      ]
    },
    {
      "actionId": "updateService",
      "kind": "command",
      "commandRef": "updateService",
      "routeKey": "petShop.updateService.updateService",
      "purpose": "Editar e ativar/desativar serviço",
      "methodName": "updateService",
      "handlerName": "handleUpdateServiceClick",
      "inputStateKeys": [
        "ui.serviceManagement.input.updateService.serviceId",
        "ui.serviceManagement.input.updateService.name",
        "ui.serviceManagement.input.updateService.description",
        "ui.serviceManagement.input.updateService.estimatedDurationMinutes",
        "ui.serviceManagement.input.updateService.price",
        "ui.serviceManagement.input.updateService.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.serviceManagement.input.updateService.serviceId"
      ],
      "outputStateKeys": [
        "ui.serviceManagement.output.updateService"
      ],
      "statusStateKey": "ui.serviceManagement.action.updateService.status",
      "errorStateKey": "ui.serviceManagement.action.updateService.error",
      "feedback": {
        "successMessageKey": "action.updateService.success",
        "errorMessageKey": "action.updateService.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.serviceManagement.input.updateService.serviceId",
        "ui.serviceManagement.input.updateService.name",
        "ui.serviceManagement.input.updateService.description",
        "ui.serviceManagement.input.updateService.estimatedDurationMinutes",
        "ui.serviceManagement.input.updateService.price",
        "ui.serviceManagement.input.updateService.status"
      ],
      "refreshActionIds": [
        "browseServices"
      ]
    },
    {
      "actionId": "set.browseServicesStatusFilter",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.browseServices.statusFilter",
      "methodName": "setBrowseServicesStatusFilter",
      "handlerName": "handleBrowseServicesStatusFilterChange"
    },
    {
      "actionId": "set.createServiceName",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.createService.name",
      "methodName": "setCreateServiceName",
      "handlerName": "handleCreateServiceNameChange"
    },
    {
      "actionId": "set.createServiceDescription",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.createService.description",
      "methodName": "setCreateServiceDescription",
      "handlerName": "handleCreateServiceDescriptionChange"
    },
    {
      "actionId": "set.createServiceEstimatedDurationMinutes",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.createService.estimatedDurationMinutes",
      "methodName": "setCreateServiceEstimatedDurationMinutes",
      "handlerName": "handleCreateServiceEstimatedDurationMinutesChange"
    },
    {
      "actionId": "set.createServicePrice",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.createService.price",
      "methodName": "setCreateServicePrice",
      "handlerName": "handleCreateServicePriceChange"
    },
    {
      "actionId": "set.updateServiceServiceId",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.updateService.serviceId",
      "methodName": "setUpdateServiceServiceId",
      "handlerName": "handleUpdateServiceServiceIdChange"
    },
    {
      "actionId": "set.updateServiceName",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.updateService.name",
      "methodName": "setUpdateServiceName",
      "handlerName": "handleUpdateServiceNameChange"
    },
    {
      "actionId": "set.updateServiceDescription",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.updateService.description",
      "methodName": "setUpdateServiceDescription",
      "handlerName": "handleUpdateServiceDescriptionChange"
    },
    {
      "actionId": "set.updateServiceEstimatedDurationMinutes",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.updateService.estimatedDurationMinutes",
      "methodName": "setUpdateServiceEstimatedDurationMinutes",
      "handlerName": "handleUpdateServiceEstimatedDurationMinutesChange"
    },
    {
      "actionId": "set.updateServicePrice",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.updateService.price",
      "methodName": "setUpdateServicePrice",
      "handlerName": "handleUpdateServicePriceChange"
    },
    {
      "actionId": "set.updateServiceStatus",
      "kind": "stateSetter",
      "stateKey": "ui.serviceManagement.input.updateService.status",
      "methodName": "setUpdateServiceStatus",
      "handlerName": "handleUpdateServiceStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseServices",
      "stateKey": "ui.serviceManagement.data.browseServices"
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
    "section.serviceManagement.title": "Gestão de serviços",
    "browseServices.title": "Serviços cadastrados",
    "browseServices.empty": "Nenhum serviço cadastrado ainda. Clique em \"Cadastrar serviço\" para adicionar o primeiro.",
    "createService.title": "Cadastrar novo serviço",
    "createService.empty": "Preencha os campos abaixo para cadastrar um novo serviço.",
    "updateService.title": "Editar serviço",
    "updateService.empty": "Selecione um serviço na lista para editar seus dados.",
    "field.name": "Nome",
    "field.description": "Descrição",
    "field.estimatedDurationMinutes": "Duração estimada (min)",
    "field.price": "Preço",
    "field.status": "Status",
    "field.serviceId": "ID do serviço",
    "filter.statusFilter": "Filtrar por status",
    "toolbar.createService": "Cadastrar serviço",
    "rowAction.updateService": "Editar",
    "action.createService.submit": "Confirmar cadastro",
    "action.updateService.submit": "Salvar alterações",
    "status.active": "Ativo",
    "status.inactive": "Inativo",
    "action.createService.success": "Serviço cadastrado com sucesso e disponível para agendamento.",
    "action.createService.error": "Não foi possível cadastrar o serviço. Verifique os dados e tente novamente.",
    "action.updateService.success": "Serviço atualizado com sucesso.",
    "action.updateService.error": "Não foi possível atualizar o serviço. Verifique os dados e tente novamente.",
    "org.browse.services.title": "Listar serviços cadastrados com filtros e ações por linha",
    "org.create.service.title": "Formulário de cadastro de novo serviço",
    "org.update.service.title": "Formulário de edição e ativação/desativação de serviço existente"
  },
  "automation": {
    "statePrefix": "ui.serviceManagement",
    "stateKeys": [
      "ui.serviceManagement.status",
      "ui.serviceManagement.action.browseServices.status",
      "ui.serviceManagement.input.browseServices.statusFilter",
      "ui.serviceManagement.data.browseServices",
      "ui.serviceManagement.action.createService.status",
      "ui.serviceManagement.input.createService.name",
      "ui.serviceManagement.input.createService.description",
      "ui.serviceManagement.input.createService.estimatedDurationMinutes",
      "ui.serviceManagement.input.createService.price",
      "ui.serviceManagement.output.createService",
      "ui.serviceManagement.action.createService.error",
      "ui.serviceManagement.action.updateService.status",
      "ui.serviceManagement.input.updateService.serviceId",
      "ui.serviceManagement.input.updateService.name",
      "ui.serviceManagement.input.updateService.description",
      "ui.serviceManagement.input.updateService.estimatedDurationMinutes",
      "ui.serviceManagement.input.updateService.price",
      "ui.serviceManagement.input.updateService.status",
      "ui.serviceManagement.output.updateService",
      "ui.serviceManagement.action.updateService.error"
    ],
    "actionIds": [
      "browseServices",
      "createService",
      "updateService",
      "set.browseServicesStatusFilter",
      "set.createServiceName",
      "set.createServiceDescription",
      "set.createServiceEstimatedDurationMinutes",
      "set.createServicePrice",
      "set.updateServiceServiceId",
      "set.updateServiceName",
      "set.updateServiceDescription",
      "set.updateServiceEstimatedDurationMinutes",
      "set.updateServicePrice",
      "set.updateServiceStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "serviceManagement__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/serviceManagement.ts",
    "defPath": "_102049_/l2/petShop/web/shared/serviceManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/serviceManagement.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "serviceManagement__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
