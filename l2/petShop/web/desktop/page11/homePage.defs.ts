/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/homePage.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "homePage",
  "pageName": "Página inicial",
  "baseClassName": "PetShopHomePageBase",
  "actor": "cliente",
  "purpose": "Executar Página inicial.",
  "capabilities": [
    "browseHomePage"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-featured-products",
      "type": "section",
      "sectionName": "Produtos em Destaque",
      "titleKey": "homePage.section.featuredProducts",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-featured-products",
          "type": "organism",
          "organismName": "BrowseHomePage",
          "titleKey": "org.featured.products.title",
          "purpose": "Explorar página inicial",
          "userActions": [
            "browseHomePage"
          ],
          "requiredEntities": [
            "Product",
            "ProductCategory"
          ],
          "readsFields": [
            "productId",
            "name",
            "description",
            "price",
            "imageUrl",
            "productCategoryId",
            "featured",
            "status"
          ],
          "writesFields": [],
          "rulesApplied": [
            "featuredProductRequiresActive",
            "productImageUsesPlatformStorage"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-product-list",
              "intent": "queryList",
              "stateKey": "ui.homePage.data.browseHomePage",
              "order": 10
            },
            {
              "id": "int-product-detail",
              "intent": "summary",
              "stateKey": "ui.homePage.data.browseHomePage",
              "order": 20
            }
          ]
        }
      ]
    },
    {
      "id": "sec-services",
      "type": "section",
      "sectionName": "Serviços Oferecidos",
      "titleKey": "homePage.section.services",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "org-services",
          "type": "organism",
          "organismName": "BrowseHomePage",
          "titleKey": "org.services.title",
          "purpose": "Visualizar serviços oferecidos",
          "userActions": [
            "browseHomePage"
          ],
          "requiredEntities": [
            "Service"
          ],
          "readsFields": [
            "serviceId",
            "name",
            "description",
            "estimatedDurationMinutes",
            "price",
            "status"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-services-list",
              "intent": "queryList",
              "stateKey": "ui.homePage.data.browseHomePage",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec-adoptable-pets",
      "type": "section",
      "sectionName": "Pets para Adoção",
      "titleKey": "homePage.section.adoptablePets",
      "mode": "view",
      "order": 30,
      "organisms": [
        {
          "id": "org-adoptable-pets",
          "type": "organism",
          "organismName": "BrowseHomePage",
          "titleKey": "org.adoptable.pets.title",
          "purpose": "Visualizar pets disponíveis para adoção",
          "userActions": [
            "browseHomePage"
          ],
          "requiredEntities": [
            "AdoptablePet"
          ],
          "readsFields": [
            "adoptablePetId",
            "name",
            "age",
            "description",
            "photoUrl",
            "status"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-pets-gallery",
              "intent": "queryList",
              "stateKey": "ui.homePage.data.browseHomePage",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "split_detail",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "homePage-split-detail-v1",
    "type": "page",
    "sections": [
      {
        "id": "sec-featured-products",
        "type": "section",
        "sectionName": "Produtos em Destaque",
        "titleKey": "homePage.section.featuredProducts",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-featured-products",
            "type": "organism",
            "organismName": "BrowseHomePage",
            "titleKey": "org.featured.products.title",
            "purpose": "Explorar página inicial",
            "userActions": [
              "browseHomePage"
            ],
            "requiredEntities": [
              "Product",
              "ProductCategory"
            ],
            "readsFields": [
              "productId",
              "name",
              "description",
              "price",
              "imageUrl",
              "productCategoryId",
              "featured",
              "status"
            ],
            "writesFields": [],
            "rulesApplied": [
              "featuredProductRequiresActive",
              "productImageUsesPlatformStorage"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int-product-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "homePage.productList.title",
                "source": "petShop.browseHomePage.browseHomePage",
                "binding": "ui.homePage.data.browseHomePage",
                "emptyKey": "homePage.productList.empty",
                "displayHint": "gallery",
                "stateKey": "ui.homePage.data.browseHomePage",
                "fields": [],
                "columns": [
                  {
                    "id": "col-product-id",
                    "field": "productId",
                    "labelKey": "homePage.product.productId",
                    "order": 10,
                    "required": false,
                    "inputType": "hidden",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-product-image",
                    "field": "imageUrl",
                    "labelKey": "homePage.product.imageUrl",
                    "order": 20,
                    "required": false,
                    "inputType": "image",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-product-name",
                    "field": "name",
                    "labelKey": "homePage.product.name",
                    "order": 30,
                    "required": true,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-product-price",
                    "field": "price",
                    "labelKey": "homePage.product.price",
                    "order": 40,
                    "required": true,
                    "format": "money",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-product-description",
                    "field": "description",
                    "labelKey": "homePage.product.description",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-product-featured",
                    "field": "featured",
                    "labelKey": "homePage.product.featured",
                    "order": 60,
                    "required": true,
                    "inputType": "boolean",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-product-status",
                    "field": "status",
                    "labelKey": "homePage.product.status",
                    "order": 70,
                    "required": true,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  }
                ],
                "filters": [],
                "toolbar": [
                  {
                    "id": "tb-browse-products",
                    "action": "browseHomePage",
                    "labelKey": "homePage.action.browseHomePage",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "browseHomePage"
                  }
                ],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int-product-detail",
                "intent": "summary",
                "order": 20,
                "titleKey": "homePage.productDetail.title",
                "source": "petShop.browseHomePage.browseHomePage",
                "binding": "ui.homePage.data.browseHomePage",
                "emptyKey": "homePage.productDetail.empty",
                "displayHint": "detailPanel",
                "stateKey": "ui.homePage.data.browseHomePage",
                "fields": [
                  {
                    "id": "fld-detail-image",
                    "field": "imageUrl",
                    "labelKey": "homePage.productDetail.imageUrl",
                    "order": 10,
                    "required": false,
                    "inputType": "image",
                    "source": "petShop.browseHomePage.browseHomePage",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "fld-detail-name",
                    "field": "name",
                    "labelKey": "homePage.productDetail.name",
                    "order": 20,
                    "required": true,
                    "source": "petShop.browseHomePage.browseHomePage",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "fld-detail-description",
                    "field": "description",
                    "labelKey": "homePage.productDetail.description",
                    "order": 30,
                    "required": false,
                    "source": "petShop.browseHomePage.browseHomePage",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "fld-detail-price",
                    "field": "price",
                    "labelKey": "homePage.productDetail.price",
                    "order": 40,
                    "required": true,
                    "format": "money",
                    "source": "petShop.browseHomePage.browseHomePage",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      },
      {
        "id": "sec-services",
        "type": "section",
        "sectionName": "Serviços Oferecidos",
        "titleKey": "homePage.section.services",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "org-services",
            "type": "organism",
            "organismName": "BrowseHomePage",
            "titleKey": "org.services.title",
            "purpose": "Visualizar serviços oferecidos",
            "userActions": [
              "browseHomePage"
            ],
            "requiredEntities": [
              "Service"
            ],
            "readsFields": [
              "serviceId",
              "name",
              "description",
              "estimatedDurationMinutes",
              "price",
              "status"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "int-services-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "homePage.servicesList.title",
                "source": "petShop.browseHomePage.browseHomePage",
                "binding": "ui.homePage.data.browseHomePage",
                "emptyKey": "homePage.servicesList.empty",
                "displayHint": "list",
                "stateKey": "ui.homePage.data.browseHomePage",
                "fields": [],
                "columns": [
                  {
                    "id": "col-service-id",
                    "field": "serviceId",
                    "labelKey": "homePage.service.serviceId",
                    "order": 10,
                    "required": false,
                    "inputType": "hidden"
                  },
                  {
                    "id": "col-service-name",
                    "field": "name",
                    "labelKey": "homePage.service.name",
                    "order": 20,
                    "required": true,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-service-description",
                    "field": "description",
                    "labelKey": "homePage.service.description",
                    "order": 30,
                    "required": true,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-service-duration",
                    "field": "estimatedDurationMinutes",
                    "labelKey": "homePage.service.estimatedDurationMinutes",
                    "order": 40,
                    "required": true,
                    "format": "number"
                  },
                  {
                    "id": "col-service-price",
                    "field": "price",
                    "labelKey": "homePage.service.price",
                    "order": 50,
                    "required": true,
                    "format": "money",
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-service-status",
                    "field": "status",
                    "labelKey": "homePage.service.status",
                    "order": 60,
                    "required": true,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      },
      {
        "id": "sec-adoptable-pets",
        "type": "section",
        "sectionName": "Pets para Adoção",
        "titleKey": "homePage.section.adoptablePets",
        "mode": "view",
        "order": 30,
        "organisms": [
          {
            "id": "org-adoptable-pets",
            "type": "organism",
            "organismName": "BrowseHomePage",
            "titleKey": "org.adoptable.pets.title",
            "purpose": "Visualizar pets disponíveis para adoção",
            "userActions": [
              "browseHomePage"
            ],
            "requiredEntities": [
              "AdoptablePet"
            ],
            "readsFields": [
              "adoptablePetId",
              "name",
              "age",
              "description",
              "photoUrl",
              "status"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "int-pets-gallery",
                "intent": "queryList",
                "order": 10,
                "titleKey": "homePage.petsGallery.title",
                "source": "petShop.browseHomePage.browseHomePage",
                "binding": "ui.homePage.data.browseHomePage",
                "emptyKey": "homePage.petsGallery.empty",
                "displayHint": "gallery",
                "stateKey": "ui.homePage.data.browseHomePage",
                "fields": [],
                "columns": [
                  {
                    "id": "col-pet-id",
                    "field": "adoptablePetId",
                    "labelKey": "homePage.pet.adoptablePetId",
                    "order": 10,
                    "required": false,
                    "inputType": "hidden"
                  },
                  {
                    "id": "col-pet-photo",
                    "field": "photoUrl",
                    "labelKey": "homePage.pet.photoUrl",
                    "order": 20,
                    "required": true,
                    "inputType": "image"
                  },
                  {
                    "id": "col-pet-name",
                    "field": "name",
                    "labelKey": "homePage.pet.name",
                    "order": 30,
                    "required": true,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-pet-age",
                    "field": "age",
                    "labelKey": "homePage.pet.age",
                    "order": 40,
                    "required": true,
                    "format": "number"
                  },
                  {
                    "id": "col-pet-description",
                    "field": "description",
                    "labelKey": "homePage.pet.description",
                    "order": 50,
                    "required": true,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  },
                  {
                    "id": "col-pet-status",
                    "field": "status",
                    "labelKey": "homePage.pet.status",
                    "order": 60,
                    "required": true,
                    "stateKey": "ui.homePage.data.browseHomePage"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "db-browse-home-page",
      "source": "petShop.browseHomePage.browseHomePage",
      "entity": "Product",
      "command": "browseHomePage",
      "description": "Carrega produtos em destaque, serviços e pets disponíveis para a página inicial",
      "stateKey": "ui.homePage.data.browseHomePage",
      "inputStateKeys": []
    }
  ]
};

export const pipeline = [
  {
    "id": "homePage__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/homePage.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/homePage.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/homePage.defs.ts",
      "_102049_/l2/petShop/web/shared/homePage.ts",
      "_102049_/l2/petShop/web/contracts/homePage.defs.ts",
      "_102049_/l2/petShop/web/contracts/homePage.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "homePage__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
