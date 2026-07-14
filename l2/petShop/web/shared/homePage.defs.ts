/// <mls fileReference="_102049_/l2/petShop/web/shared/homePage.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "homePage",
  "pageName": "Página inicial",
  "moduleName": "petShop",
  "baseClassName": "PetShopHomePageBase",
  "routePattern": "/petShop/homePage",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseHomePage"
  ],
  "operationIds": [
    "browseHomePage"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "homePage",
    "workspaceKind": "operation",
    "actor": "cliente",
    "entity": "Product",
    "owners": [
      {
        "kind": "operation",
        "id": "browseHomePage",
        "defPath": "_102049_/l4/operations/browseHomePage.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseHomePage",
          "commandName": "browseHomePage",
          "steps": [
            "O cliente acessa a página inicial do site",
            "Visualiza os produtos em destaque com imagem, nome e preço",
            "Visualiza a lista de serviços oferecidos com descrição e preço",
            "Percebe a seção de pets disponíveis para adoção na galeria"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/homePage.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/homePage.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/homePage.defs.ts",
    "layoutId": "homePage-split-detail-v1"
  },
  "states": [
    {
      "stateKey": "ui.homePage.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.homePage.action.browseHomePage.status",
      "name": "browseHomePageState",
      "kind": "actionStatus",
      "actionRef": "browseHomePage",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.homePage.data.browseHomePage",
      "name": "browseHomePageData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseHomePage",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    }
  ],
  "actions": [
    {
      "actionId": "browseHomePage",
      "kind": "query",
      "commandRef": "browseHomePage",
      "routeKey": "petShop.browseHomePage.browseHomePage",
      "purpose": "Explorar página inicial",
      "methodName": "loadBrowseHomePage",
      "handlerName": "handleBrowseHomePageClick",
      "inputStateKeys": [],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.homePage.data.browseHomePage"
      ],
      "statusStateKey": "ui.homePage.action.browseHomePage.status"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseHomePage",
      "stateKey": "ui.homePage.data.browseHomePage"
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
    "homePage.title": "Página Inicial",
    "homePage.section.featuredProducts": "Produtos em Destaque",
    "homePage.section.services": "Serviços Oferecidos",
    "homePage.section.adoptablePets": "Pets para Adoção",
    "homePage.productList.title": "Produtos em Destaque",
    "homePage.productList.empty": "Nenhum produto em destaque disponível no momento. Volte mais tarde.",
    "homePage.productDetail.title": "Detalhes do Produto",
    "homePage.productDetail.empty": "Selecione um produto na lista para ver seus detalhes.",
    "homePage.productDetail.imageUrl": "Imagem",
    "homePage.productDetail.name": "Nome",
    "homePage.productDetail.description": "Descrição",
    "homePage.productDetail.price": "Preço",
    "homePage.product.productId": "ID do Produto",
    "homePage.product.name": "Nome",
    "homePage.product.description": "Descrição",
    "homePage.product.price": "Preço",
    "homePage.product.imageUrl": "Imagem",
    "homePage.product.featured": "Destaque",
    "homePage.product.status": "Situação",
    "homePage.servicesList.title": "Serviços Oferecidos",
    "homePage.servicesList.empty": "Nenhum serviço disponível no momento.",
    "homePage.service.serviceId": "ID do Serviço",
    "homePage.service.name": "Nome",
    "homePage.service.description": "Descrição",
    "homePage.service.estimatedDurationMinutes": "Duração Estimada (min)",
    "homePage.service.price": "Preço",
    "homePage.service.status": "Situação",
    "homePage.petsGallery.title": "Pets para Adoção",
    "homePage.petsGallery.empty": "Nenhum pet disponível para adoção no momento. Volte em breve!",
    "homePage.pet.adoptablePetId": "ID do Pet",
    "homePage.pet.name": "Nome",
    "homePage.pet.age": "Idade (anos)",
    "homePage.pet.description": "Descrição",
    "homePage.pet.photoUrl": "Foto",
    "homePage.pet.status": "Disponibilidade",
    "homePage.action.browseHomePage": "Explorar Página Inicial",
    "homePage.action.browseHomePage.success": "Página inicial carregada com sucesso.",
    "homePage.action.browseHomePage.error": "Não foi possível carregar a página inicial. Tente novamente.",
    "org.featured.products.title": "Explorar página inicial",
    "org.services.title": "Visualizar serviços oferecidos",
    "org.adoptable.pets.title": "Visualizar pets disponíveis para adoção"
  },
  "automation": {
    "statePrefix": "ui.homePage",
    "stateKeys": [
      "ui.homePage.status",
      "ui.homePage.action.browseHomePage.status",
      "ui.homePage.data.browseHomePage"
    ],
    "actionIds": [
      "browseHomePage"
    ]
  }
};

export const pipeline = [
  {
    "id": "homePage__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/homePage.ts",
    "defPath": "_102049_/l2/petShop/web/shared/homePage.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/homePage.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "homePage__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
