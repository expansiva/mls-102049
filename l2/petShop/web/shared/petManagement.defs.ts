/// <mls fileReference="_102049_/l2/petShop/web/shared/petManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "petManagement",
  "pageName": "Gestão de pets para adoção",
  "moduleName": "petShop",
  "baseClassName": "PetShopPetManagementBase",
  "routePattern": "/petShop/petManagement",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseAdoptablePetsAdmin",
    "operation:createAdoptablePet",
    "operation:updateAdoptablePet"
  ],
  "operationIds": [
    "browseAdoptablePetsAdmin",
    "createAdoptablePet",
    "updateAdoptablePet"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "petManagement",
    "workspaceKind": "entityManagement",
    "actor": "admin",
    "entity": "AdoptablePet",
    "owners": [
      {
        "kind": "operation",
        "id": "browseAdoptablePetsAdmin",
        "defPath": "_102049_/l4/operations/browseAdoptablePetsAdmin.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createAdoptablePet",
        "defPath": "_102049_/l4/operations/createAdoptablePet.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateAdoptablePet",
        "defPath": "_102049_/l4/operations/updateAdoptablePet.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseAdoptablePetsAdmin",
          "commandName": "browseAdoptablePetsAdmin",
          "steps": [
            "O administrador acessa a tela de gestão de pets para adoção.",
            "O sistema lista todos os pets cadastrados com nome, idade, descrição, foto e status de disponibilidade.",
            "O administrador pode filtrar por status (disponível ou indisponível) para localizar pets específicos."
          ]
        },
        {
          "operationId": "createAdoptablePet",
          "commandName": "createAdoptablePet",
          "steps": [
            "O administrador acessa a tela de cadastro de pets para adoção.",
            "O administrador informa nome, idade, descrição e a URL da foto do pet no armazenamento de mídia da plataforma.",
            "O sistema gera um identificador único, define o status como disponível e registra as datas de criação e atualização.",
            "O sistema persiste o pet e o exibe na galeria pública por estar marcado como disponível."
          ]
        },
        {
          "operationId": "updateAdoptablePet",
          "commandName": "updateAdoptablePet",
          "steps": [
            "O administrador seleciona um pet cadastrado na lista de gestão de pets.",
            "O sistema carrega os dados atuais do pet (nome, idade, descrição, foto e status).",
            "O administrador edita os campos desejados e/ou altera o status entre disponível e indisponível.",
            "O sistema valida os dados informados e persiste a atualização, atualizando updatedAt.",
            "Se o status for alterado para indisponível, o pet deixa de aparecer na galeria pública; se for disponível, ele passa a aparecer."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/petManagement.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/petManagement.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/petManagement.defs.ts",
    "layoutId": "page11_tabular_classic"
  },
  "states": [
    {
      "stateKey": "ui.petManagement.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.action.browseAdoptablePetsAdmin.status",
      "name": "browseAdoptablePetsAdminState",
      "kind": "actionStatus",
      "actionRef": "browseAdoptablePetsAdmin",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter",
      "name": "browseAdoptablePetsAdminStatusFilter",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseAdoptablePetsAdmin",
        "direction": "input",
        "field": "statusFilter"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin",
      "name": "browseAdoptablePetsAdminData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseAdoptablePetsAdmin",
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
      "stateKey": "ui.petManagement.action.createAdoptablePet.status",
      "name": "createAdoptablePetState",
      "kind": "actionStatus",
      "actionRef": "createAdoptablePet",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.petManagement.input.createAdoptablePet.name",
      "name": "createAdoptablePetName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createAdoptablePet",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.input.createAdoptablePet.age",
      "name": "createAdoptablePetAge",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createAdoptablePet",
        "direction": "input",
        "field": "age"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.input.createAdoptablePet.description",
      "name": "createAdoptablePetDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createAdoptablePet",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.input.createAdoptablePet.photoUrl",
      "name": "createAdoptablePetPhotoUrl",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createAdoptablePet",
        "direction": "input",
        "field": "photoUrl"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.output.createAdoptablePet",
      "name": "createAdoptablePetOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createAdoptablePet",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.petManagement.action.createAdoptablePet.error",
      "name": "createAdoptablePetError",
      "kind": "actionError",
      "actionRef": "createAdoptablePet",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.action.updateAdoptablePet.status",
      "name": "updateAdoptablePetState",
      "kind": "actionStatus",
      "actionRef": "updateAdoptablePet",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.petManagement.input.updateAdoptablePet.adoptablePetId",
      "name": "updateAdoptablePetAdoptablePetId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "updateAdoptablePet",
        "direction": "input",
        "field": "adoptablePetId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.input.updateAdoptablePet.name",
      "name": "updateAdoptablePetName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateAdoptablePet",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.input.updateAdoptablePet.age",
      "name": "updateAdoptablePetAge",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateAdoptablePet",
        "direction": "input",
        "field": "age"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.input.updateAdoptablePet.description",
      "name": "updateAdoptablePetDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateAdoptablePet",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.input.updateAdoptablePet.photoUrl",
      "name": "updateAdoptablePetPhotoUrl",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateAdoptablePet",
        "direction": "input",
        "field": "photoUrl"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.input.updateAdoptablePet.status",
      "name": "updateAdoptablePetStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateAdoptablePet",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.petManagement.output.updateAdoptablePet",
      "name": "updateAdoptablePetOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateAdoptablePet",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.petManagement.action.updateAdoptablePet.error",
      "name": "updateAdoptablePetError",
      "kind": "actionError",
      "actionRef": "updateAdoptablePet",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseAdoptablePetsAdmin",
      "kind": "query",
      "commandRef": "browseAdoptablePetsAdmin",
      "routeKey": "petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin",
      "purpose": "Listar pets para adoção cadastrados",
      "methodName": "loadBrowseAdoptablePetsAdmin",
      "handlerName": "handleBrowseAdoptablePetsAdminClick",
      "inputStateKeys": [
        "ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.petManagement.data.browseAdoptablePetsAdmin"
      ],
      "statusStateKey": "ui.petManagement.action.browseAdoptablePetsAdmin.status"
    },
    {
      "actionId": "createAdoptablePet",
      "kind": "command",
      "commandRef": "createAdoptablePet",
      "routeKey": "petShop.createAdoptablePet.createAdoptablePet",
      "purpose": "Cadastrar pet para adoção",
      "methodName": "createAdoptablePet",
      "handlerName": "handleCreateAdoptablePetClick",
      "inputStateKeys": [
        "ui.petManagement.input.createAdoptablePet.name",
        "ui.petManagement.input.createAdoptablePet.age",
        "ui.petManagement.input.createAdoptablePet.description",
        "ui.petManagement.input.createAdoptablePet.photoUrl"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.petManagement.output.createAdoptablePet"
      ],
      "statusStateKey": "ui.petManagement.action.createAdoptablePet.status",
      "errorStateKey": "ui.petManagement.action.createAdoptablePet.error",
      "feedback": {
        "successMessageKey": "action.createAdoptablePet.success",
        "errorMessageKey": "action.createAdoptablePet.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.petManagement.input.createAdoptablePet.name",
        "ui.petManagement.input.createAdoptablePet.age",
        "ui.petManagement.input.createAdoptablePet.description",
        "ui.petManagement.input.createAdoptablePet.photoUrl"
      ],
      "refreshActionIds": [
        "browseAdoptablePetsAdmin"
      ]
    },
    {
      "actionId": "updateAdoptablePet",
      "kind": "command",
      "commandRef": "updateAdoptablePet",
      "routeKey": "petShop.updateAdoptablePet.updateAdoptablePet",
      "purpose": "Editar pet e controlar disponibilidade",
      "methodName": "updateAdoptablePet",
      "handlerName": "handleUpdateAdoptablePetClick",
      "inputStateKeys": [
        "ui.petManagement.input.updateAdoptablePet.adoptablePetId",
        "ui.petManagement.input.updateAdoptablePet.name",
        "ui.petManagement.input.updateAdoptablePet.age",
        "ui.petManagement.input.updateAdoptablePet.description",
        "ui.petManagement.input.updateAdoptablePet.photoUrl",
        "ui.petManagement.input.updateAdoptablePet.status"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.petManagement.input.updateAdoptablePet.adoptablePetId"
      ],
      "outputStateKeys": [
        "ui.petManagement.output.updateAdoptablePet"
      ],
      "statusStateKey": "ui.petManagement.action.updateAdoptablePet.status",
      "errorStateKey": "ui.petManagement.action.updateAdoptablePet.error",
      "feedback": {
        "successMessageKey": "action.updateAdoptablePet.success",
        "errorMessageKey": "action.updateAdoptablePet.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.petManagement.input.updateAdoptablePet.adoptablePetId",
        "ui.petManagement.input.updateAdoptablePet.name",
        "ui.petManagement.input.updateAdoptablePet.age",
        "ui.petManagement.input.updateAdoptablePet.description",
        "ui.petManagement.input.updateAdoptablePet.photoUrl",
        "ui.petManagement.input.updateAdoptablePet.status"
      ],
      "refreshActionIds": [
        "browseAdoptablePetsAdmin"
      ]
    },
    {
      "actionId": "set.browseAdoptablePetsAdminStatusFilter",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter",
      "methodName": "setBrowseAdoptablePetsAdminStatusFilter",
      "handlerName": "handleBrowseAdoptablePetsAdminStatusFilterChange"
    },
    {
      "actionId": "set.createAdoptablePetName",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.createAdoptablePet.name",
      "methodName": "setCreateAdoptablePetName",
      "handlerName": "handleCreateAdoptablePetNameChange"
    },
    {
      "actionId": "set.createAdoptablePetAge",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.createAdoptablePet.age",
      "methodName": "setCreateAdoptablePetAge",
      "handlerName": "handleCreateAdoptablePetAgeChange"
    },
    {
      "actionId": "set.createAdoptablePetDescription",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.createAdoptablePet.description",
      "methodName": "setCreateAdoptablePetDescription",
      "handlerName": "handleCreateAdoptablePetDescriptionChange"
    },
    {
      "actionId": "set.createAdoptablePetPhotoUrl",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.createAdoptablePet.photoUrl",
      "methodName": "setCreateAdoptablePetPhotoUrl",
      "handlerName": "handleCreateAdoptablePetPhotoUrlChange"
    },
    {
      "actionId": "set.updateAdoptablePetAdoptablePetId",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.updateAdoptablePet.adoptablePetId",
      "methodName": "setUpdateAdoptablePetAdoptablePetId",
      "handlerName": "handleUpdateAdoptablePetAdoptablePetIdChange"
    },
    {
      "actionId": "set.updateAdoptablePetName",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.updateAdoptablePet.name",
      "methodName": "setUpdateAdoptablePetName",
      "handlerName": "handleUpdateAdoptablePetNameChange"
    },
    {
      "actionId": "set.updateAdoptablePetAge",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.updateAdoptablePet.age",
      "methodName": "setUpdateAdoptablePetAge",
      "handlerName": "handleUpdateAdoptablePetAgeChange"
    },
    {
      "actionId": "set.updateAdoptablePetDescription",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.updateAdoptablePet.description",
      "methodName": "setUpdateAdoptablePetDescription",
      "handlerName": "handleUpdateAdoptablePetDescriptionChange"
    },
    {
      "actionId": "set.updateAdoptablePetPhotoUrl",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.updateAdoptablePet.photoUrl",
      "methodName": "setUpdateAdoptablePetPhotoUrl",
      "handlerName": "handleUpdateAdoptablePetPhotoUrlChange"
    },
    {
      "actionId": "set.updateAdoptablePetStatus",
      "kind": "stateSetter",
      "stateKey": "ui.petManagement.input.updateAdoptablePet.status",
      "methodName": "setUpdateAdoptablePetStatus",
      "handlerName": "handleUpdateAdoptablePetStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseAdoptablePetsAdmin",
      "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin"
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
    "petManagement.section.title": "Gestão de pets para adoção",
    "petManagement.list.title": "Pets cadastrados",
    "petManagement.list.empty": "Nenhum pet cadastrado ainda. Clique em \"Cadastrar pet\" para adicionar o primeiro.",
    "petManagement.create.title": "Cadastrar novo pet",
    "petManagement.create.empty": "Preencha os dados do pet para cadastrá-lo como disponível para adoção.",
    "petManagement.update.title": "Editar pet",
    "petManagement.update.empty": "Selecione um pet na lista para editar suas informações e disponibilidade.",
    "petManagement.summary.title": "Resumo",
    "petManagement.summary.sectionTitle": "Resumo da gestão",
    "petManagement.summary.empty": "Nenhuma ação realizada nesta sessão ainda.",
    "petManagement.field.name": "Nome",
    "petManagement.field.age": "Idade (anos)",
    "petManagement.field.description": "Descrição",
    "petManagement.field.photoUrl": "Foto (URL)",
    "petManagement.field.status": "Status",
    "petManagement.field.adoptablePetId": "ID do pet",
    "petManagement.field.createdAt": "Cadastrado em",
    "petManagement.field.updatedAt": "Atualizado em",
    "petManagement.filter.statusFilter": "Filtrar por status",
    "petManagement.action.create": "Cadastrar pet",
    "petManagement.action.create.submit": "Salvar cadastro",
    "petManagement.action.update": "Editar",
    "petManagement.action.update.submit": "Salvar alterações",
    "action.createAdoptablePet.success": "Pet cadastrado com sucesso e disponível na galeria pública.",
    "action.createAdoptablePet.error": "Não foi possível cadastrar o pet. Verifique os dados e tente novamente.",
    "action.updateAdoptablePet.success": "Pet atualizado com sucesso. A disponibilidade na galeria pública foi ajustada.",
    "action.updateAdoptablePet.error": "Não foi possível atualizar o pet. Verifique os dados e tente novamente.",
    "org.browse.pets.title": "Listar pets para adoção cadastrados com filtros de status e ações por linha",
    "org.create.pet.title": "Cadastrar novo pet para adoção com nome, idade, descrição e foto",
    "org.update.pet.title": "Editar dados do pet selecionado e controlar disponibilidade na galeria pública",
    "org.pet.summary.title": "Revisar o contexto e o resultado das ações principais da página"
  },
  "automation": {
    "statePrefix": "ui.petManagement",
    "stateKeys": [
      "ui.petManagement.status",
      "ui.petManagement.action.browseAdoptablePetsAdmin.status",
      "ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter",
      "ui.petManagement.data.browseAdoptablePetsAdmin",
      "ui.petManagement.action.createAdoptablePet.status",
      "ui.petManagement.input.createAdoptablePet.name",
      "ui.petManagement.input.createAdoptablePet.age",
      "ui.petManagement.input.createAdoptablePet.description",
      "ui.petManagement.input.createAdoptablePet.photoUrl",
      "ui.petManagement.output.createAdoptablePet",
      "ui.petManagement.action.createAdoptablePet.error",
      "ui.petManagement.action.updateAdoptablePet.status",
      "ui.petManagement.input.updateAdoptablePet.adoptablePetId",
      "ui.petManagement.input.updateAdoptablePet.name",
      "ui.petManagement.input.updateAdoptablePet.age",
      "ui.petManagement.input.updateAdoptablePet.description",
      "ui.petManagement.input.updateAdoptablePet.photoUrl",
      "ui.petManagement.input.updateAdoptablePet.status",
      "ui.petManagement.output.updateAdoptablePet",
      "ui.petManagement.action.updateAdoptablePet.error"
    ],
    "actionIds": [
      "browseAdoptablePetsAdmin",
      "createAdoptablePet",
      "updateAdoptablePet",
      "set.browseAdoptablePetsAdminStatusFilter",
      "set.createAdoptablePetName",
      "set.createAdoptablePetAge",
      "set.createAdoptablePetDescription",
      "set.createAdoptablePetPhotoUrl",
      "set.updateAdoptablePetAdoptablePetId",
      "set.updateAdoptablePetName",
      "set.updateAdoptablePetAge",
      "set.updateAdoptablePetDescription",
      "set.updateAdoptablePetPhotoUrl",
      "set.updateAdoptablePetStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "petManagement__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/petManagement.ts",
    "defPath": "_102049_/l2/petShop/web/shared/petManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/petManagement.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "petManagement__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
