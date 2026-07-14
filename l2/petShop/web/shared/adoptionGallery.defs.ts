/// <mls fileReference="_102049_/l2/petShop/web/shared/adoptionGallery.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "adoptionGallery",
  "pageName": "Galeria de adoção",
  "moduleName": "petShop",
  "baseClassName": "PetShopAdoptionGalleryBase",
  "routePattern": "/petShop/adoptionGallery/:adoptablePetId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseAdoptablePets",
    "operation:viewAdoptablePetDetails",
    "operation:expressAdoptionInterest"
  ],
  "operationIds": [
    "browseAdoptablePets",
    "viewAdoptablePetDetails",
    "expressAdoptionInterest"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "adoptionGallery",
    "workspaceKind": "operation",
    "actor": "cliente",
    "entity": "AdoptablePet",
    "owners": [
      {
        "kind": "operation",
        "id": "browseAdoptablePets",
        "defPath": "_102049_/l4/operations/browseAdoptablePets.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewAdoptablePetDetails",
        "defPath": "_102049_/l4/operations/viewAdoptablePetDetails.defs.ts"
      },
      {
        "kind": "operation",
        "id": "expressAdoptionInterest",
        "defPath": "_102049_/l4/operations/expressAdoptionInterest.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseAdoptablePets",
          "commandName": "browseAdoptablePets",
          "steps": [
            "O cliente acessa a galeria de adoção a partir da página inicial.",
            "O sistema retorna a lista paginada de pets marcados como disponíveis pelo administrador.",
            "O cliente visualiza nome, idade, descrição e foto de cada pet disponível."
          ]
        },
        {
          "operationId": "viewAdoptablePetDetails",
          "commandName": "viewAdoptablePetDetails",
          "steps": [
            "O cliente seleciona um pet na galeria de adoção",
            "O sistema recupera os detalhes completos do pet pelo seu identificador",
            "O sistema verifica que o pet está com status available antes de exibir",
            "O cliente visualiza nome, idade, descrição e foto ampliada do pet"
          ]
        },
        {
          "operationId": "expressAdoptionInterest",
          "commandName": "expressAdoptionInterest",
          "steps": [
            "O cliente visualiza um pet disponível para adoção no site",
            "O cliente preenche seu nome, e-mail e telefone (opcional) no formulário de manifestação de interesse",
            "O sistema cria o registro de AdoptionInterest com status 'registered' vinculado ao pet selecionado",
            "O cliente é informado de que a finalização da adoção acontece presencialmente na loja com verificação e documentação"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/adoptionGallery.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/adoptionGallery.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/adoptionGallery.defs.ts",
    "layoutId": "adoptionGallery_page11_pos_workspace"
  },
  "states": [
    {
      "stateKey": "ui.adoptionGallery.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.adoptionGallery.action.browseAdoptablePets.status",
      "name": "browseAdoptablePetsState",
      "kind": "actionStatus",
      "actionRef": "browseAdoptablePets",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.adoptionGallery.data.browseAdoptablePets",
      "name": "browseAdoptablePetsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseAdoptablePets",
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
      "stateKey": "ui.adoptionGallery.action.viewAdoptablePetDetails.status",
      "name": "viewAdoptablePetDetailsState",
      "kind": "actionStatus",
      "actionRef": "viewAdoptablePetDetails",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId",
      "name": "viewAdoptablePetDetailsAdoptablePetId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "viewAdoptablePetDetails",
        "direction": "input",
        "field": "adoptablePetId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.adoptionGallery.data.viewAdoptablePetDetails",
      "name": "viewAdoptablePetDetailsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewAdoptablePetDetails",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.adoptionGallery.action.expressAdoptionInterest.status",
      "name": "expressAdoptionInterestState",
      "kind": "actionStatus",
      "actionRef": "expressAdoptionInterest",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId",
      "name": "expressAdoptionInterestAdoptablePetId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "expressAdoptionInterest",
        "direction": "input",
        "field": "adoptablePetId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerName",
      "name": "expressAdoptionInterestCustomerName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "expressAdoptionInterest",
        "direction": "input",
        "field": "customerName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail",
      "name": "expressAdoptionInterestCustomerEmail",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "expressAdoptionInterest",
        "direction": "input",
        "field": "customerEmail"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone",
      "name": "expressAdoptionInterestCustomerPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "expressAdoptionInterest",
        "direction": "input",
        "field": "customerPhone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.adoptionGallery.output.expressAdoptionInterest",
      "name": "expressAdoptionInterestOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "expressAdoptionInterest",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.adoptionGallery.action.expressAdoptionInterest.error",
      "name": "expressAdoptionInterestError",
      "kind": "actionError",
      "actionRef": "expressAdoptionInterest",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseAdoptablePets",
      "kind": "query",
      "commandRef": "browseAdoptablePets",
      "routeKey": "petShop.browseAdoptablePets.browseAdoptablePets",
      "purpose": "Navegar na galeria de adoção",
      "methodName": "loadBrowseAdoptablePets",
      "handlerName": "handleBrowseAdoptablePetsClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.adoptionGallery.data.browseAdoptablePets"
      ],
      "statusStateKey": "ui.adoptionGallery.action.browseAdoptablePets.status"
    },
    {
      "actionId": "viewAdoptablePetDetails",
      "kind": "query",
      "commandRef": "viewAdoptablePetDetails",
      "routeKey": "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails",
      "purpose": "Ver detalhes do pet para adoção",
      "methodName": "loadViewAdoptablePetDetails",
      "handlerName": "handleViewAdoptablePetDetailsClick",
      "inputStateKeys": [
        "ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId"
      ],
      "routeParamInputStateKeys": [
        "ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.adoptionGallery.data.viewAdoptablePetDetails"
      ],
      "statusStateKey": "ui.adoptionGallery.action.viewAdoptablePetDetails.status"
    },
    {
      "actionId": "expressAdoptionInterest",
      "kind": "command",
      "commandRef": "expressAdoptionInterest",
      "routeKey": "petShop.expressAdoptionInterest.expressAdoptionInterest",
      "purpose": "Manifestar interesse em adoção",
      "methodName": "expressAdoptionInterest",
      "handlerName": "handleExpressAdoptionInterestClick",
      "inputStateKeys": [
        "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerName",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId"
      ],
      "outputStateKeys": [
        "ui.adoptionGallery.output.expressAdoptionInterest"
      ],
      "statusStateKey": "ui.adoptionGallery.action.expressAdoptionInterest.status",
      "errorStateKey": "ui.adoptionGallery.action.expressAdoptionInterest.error",
      "feedback": {
        "successMessageKey": "action.expressAdoptionInterest.success",
        "errorMessageKey": "action.expressAdoptionInterest.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerName",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone"
      ],
      "refreshActionIds": [
        "browseAdoptablePets",
        "viewAdoptablePetDetails"
      ]
    },
    {
      "actionId": "set.viewAdoptablePetDetailsAdoptablePetId",
      "kind": "stateSetter",
      "stateKey": "ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId",
      "methodName": "setViewAdoptablePetDetailsAdoptablePetId",
      "handlerName": "handleViewAdoptablePetDetailsAdoptablePetIdChange"
    },
    {
      "actionId": "set.expressAdoptionInterestAdoptablePetId",
      "kind": "stateSetter",
      "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId",
      "methodName": "setExpressAdoptionInterestAdoptablePetId",
      "handlerName": "handleExpressAdoptionInterestAdoptablePetIdChange"
    },
    {
      "actionId": "set.expressAdoptionInterestCustomerName",
      "kind": "stateSetter",
      "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerName",
      "methodName": "setExpressAdoptionInterestCustomerName",
      "handlerName": "handleExpressAdoptionInterestCustomerNameChange"
    },
    {
      "actionId": "set.expressAdoptionInterestCustomerEmail",
      "kind": "stateSetter",
      "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail",
      "methodName": "setExpressAdoptionInterestCustomerEmail",
      "handlerName": "handleExpressAdoptionInterestCustomerEmailChange"
    },
    {
      "actionId": "set.expressAdoptionInterestCustomerPhone",
      "kind": "stateSetter",
      "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone",
      "methodName": "setExpressAdoptionInterestCustomerPhone",
      "handlerName": "handleExpressAdoptionInterestCustomerPhoneChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseAdoptablePets",
      "stateKey": "ui.adoptionGallery.data.browseAdoptablePets"
    },
    {
      "actionId": "viewAdoptablePetDetails",
      "stateKey": "ui.adoptionGallery.data.viewAdoptablePetDetails"
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
    "adoptionGallery.section.title": "Galeria de adoção",
    "adoptionGallery.browse.title": "Pets disponíveis para adoção",
    "adoptionGallery.browse.empty": "Nenhum pet disponível para adoção no momento. Volte em breve!",
    "adoptionGallery.details.title": "Detalhes do pet",
    "adoptionGallery.details.empty": "Selecione um pet na galeria para ver os detalhes.",
    "adoptionGallery.interestForm.title": "Manifestar interesse em adoção",
    "adoptionGallery.interestForm.empty": "Selecione um pet disponível para manifestar interesse na adoção.",
    "adoptionGallery.summary.title": "Interesse registrado",
    "adoptionGallery.summary.empty": "Após manifestar interesse, você verá a confirmação aqui.",
    "adoptionGallery.field.photoUrl": "Foto",
    "adoptionGallery.field.name": "Nome",
    "adoptionGallery.field.age": "Idade",
    "adoptionGallery.field.description": "Descrição",
    "adoptionGallery.field.status": "Status",
    "adoptionGallery.field.adoptablePetId": "Pet selecionado",
    "adoptionGallery.field.customerName": "Seu nome completo",
    "adoptionGallery.field.customerEmail": "Seu e-mail",
    "adoptionGallery.field.customerPhone": "Seu telefone (opcional)",
    "adoptionGallery.field.adoptionInterestId": "Protocolo de interesse",
    "adoptionGallery.field.interestStatus": "Situação",
    "adoptionGallery.field.createdAt": "Registrado em",
    "adoptionGallery.action.viewDetails": "Ver detalhes",
    "adoptionGallery.action.expressInterest": "Quero adotar",
    "adoptionGallery.action.submitInterest": "Enviar manifestação de interesse",
    "action.expressAdoptionInterest.success": "Seu interesse em adoção foi registrado com sucesso! A finalização acontece presencialmente na loja com verificação e documentação.",
    "action.expressAdoptionInterest.error": "Não foi possível registrar seu interesse em adoção. Tente novamente em instantes.",
    "org.browse.adoptable.pets.title": "Navegar na galeria de adoção exibindo pets disponíveis com foto, nome, idade e descrição",
    "org.view.pet.details.title": "Exibir detalhes completos do pet selecionado na galeria, incluindo foto ampliada e status de disponibilidade",
    "org.express.interest.title": "Formulário para o cliente manifestar interesse em adotar o pet selecionado, informando nome, e mail e telefone",
    "org.adoption.summary.title": "Exibir confirmação do registro de interesse e informar que a finalização da adoção acontece presencialmente na loja"
  },
  "automation": {
    "statePrefix": "ui.adoptionGallery",
    "stateKeys": [
      "ui.adoptionGallery.status",
      "ui.adoptionGallery.action.browseAdoptablePets.status",
      "ui.adoptionGallery.data.browseAdoptablePets",
      "ui.adoptionGallery.action.viewAdoptablePetDetails.status",
      "ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId",
      "ui.adoptionGallery.data.viewAdoptablePetDetails",
      "ui.adoptionGallery.action.expressAdoptionInterest.status",
      "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerName",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone",
      "ui.adoptionGallery.output.expressAdoptionInterest",
      "ui.adoptionGallery.action.expressAdoptionInterest.error"
    ],
    "actionIds": [
      "browseAdoptablePets",
      "viewAdoptablePetDetails",
      "expressAdoptionInterest",
      "set.viewAdoptablePetDetailsAdoptablePetId",
      "set.expressAdoptionInterestAdoptablePetId",
      "set.expressAdoptionInterestCustomerName",
      "set.expressAdoptionInterestCustomerEmail",
      "set.expressAdoptionInterestCustomerPhone"
    ]
  }
};

export const pipeline = [
  {
    "id": "adoptionGallery__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/adoptionGallery.ts",
    "defPath": "_102049_/l2/petShop/web/shared/adoptionGallery.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/adoptionGallery.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "adoptionGallery__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
