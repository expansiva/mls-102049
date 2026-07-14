/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/adoptionGallery.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "adoptionGallery",
  "pageName": "Galeria de adoção",
  "baseClassName": "PetShopAdoptionGalleryBase",
  "actor": "cliente",
  "purpose": "Executar Galeria de adoção.",
  "capabilities": [
    "browseAdoptablePets",
    "viewAdoptablePetDetails",
    "expressAdoptionInterest"
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "adoptionGallery_section",
      "type": "section",
      "sectionName": "Galeria de adoção",
      "titleKey": "adoptionGallery.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_browse_adoptable_pets",
          "type": "organism",
          "organismName": "BrowseAdoptablePets",
          "titleKey": "org.browse.adoptable.pets.title",
          "purpose": "Navegar na galeria de adoção exibindo pets disponíveis com foto, nome, idade e descrição",
          "userActions": [
            "browseAdoptablePets"
          ],
          "requiredEntities": [
            "AdoptablePet"
          ],
          "readsFields": [
            "adoptablePetId",
            "name",
            "age",
            "description",
            "photoUrl"
          ],
          "writesFields": [],
          "rulesApplied": [
            "onlyAvailablePetsShownInGallery",
            "petImageUsesPlatformStorage"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent_browse_gallery",
              "intent": "queryList",
              "stateKey": "ui.adoptionGallery.data.browseAdoptablePets",
              "order": 10
            }
          ]
        },
        {
          "id": "org_view_pet_details",
          "type": "organism",
          "organismName": "ViewAdoptablePetDetails",
          "titleKey": "org.view.pet.details.title",
          "purpose": "Exibir detalhes completos do pet selecionado na galeria, incluindo foto ampliada e status de disponibilidade",
          "userActions": [
            "viewAdoptablePetDetails"
          ],
          "requiredEntities": [
            "AdoptablePet"
          ],
          "readsFields": [
            "name",
            "age",
            "description",
            "photoUrl",
            "status"
          ],
          "writesFields": [],
          "rulesApplied": [
            "onlyAvailablePetsShownInGallery"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent_view_pet_details",
              "intent": "queryList",
              "stateKey": "ui.adoptionGallery.action.viewAdoptablePetDetails.status",
              "order": 10
            }
          ]
        },
        {
          "id": "org_express_interest",
          "type": "organism",
          "organismName": "ExpressAdoptionInterest",
          "titleKey": "org.express.interest.title",
          "purpose": "Formulário para o cliente manifestar interesse em adotar o pet selecionado, informando nome, e-mail e telefone",
          "userActions": [
            "expressAdoptionInterest"
          ],
          "requiredEntities": [
            "AdoptionInterest",
            "AdoptablePet"
          ],
          "readsFields": [
            "adoptablePetId",
            "customerName",
            "customerEmail",
            "customerPhone"
          ],
          "writesFields": [
            "adoptionInterestId",
            "status",
            "adoptablePetId",
            "customerName",
            "createdAt"
          ],
          "rulesApplied": [
            "adoptionStartedOnlineFinishedInStore"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent_express_interest_form",
              "intent": "commandForm",
              "stateKey": "ui.adoptionGallery.action.expressAdoptionInterest.status",
              "submitAction": "expressAdoptionInterest",
              "order": 10
            }
          ]
        },
        {
          "id": "org_adoption_summary",
          "type": "organism",
          "organismName": "AdoptionInterestSummary",
          "titleKey": "org.adoption.summary.title",
          "purpose": "Exibir confirmação do registro de interesse e informar que a finalização da adoção acontece presencialmente na loja",
          "userActions": [
            "expressAdoptionInterest"
          ],
          "requiredEntities": [
            "AdoptionInterest"
          ],
          "readsFields": [
            "adoptionInterestId",
            "status",
            "customerName",
            "createdAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "adoptionStartedOnlineFinishedInStore"
          ],
          "order": 40,
          "intentionRefs": [
            {
              "id": "intent_adoption_summary",
              "intent": "summary",
              "stateKey": "ui.adoptionGallery.action.expressAdoptionInterest.status",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "pos_workspace",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "adoptionGallery_page11_pos_workspace",
    "type": "page",
    "sections": [
      {
        "id": "adoptionGallery_section",
        "type": "section",
        "sectionName": "Galeria de adoção",
        "titleKey": "adoptionGallery.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_browse_adoptable_pets",
            "type": "organism",
            "organismName": "BrowseAdoptablePets",
            "titleKey": "org.browse.adoptable.pets.title",
            "purpose": "Navegar na galeria de adoção exibindo pets disponíveis com foto, nome, idade e descrição",
            "userActions": [
              "browseAdoptablePets"
            ],
            "requiredEntities": [
              "AdoptablePet"
            ],
            "readsFields": [
              "adoptablePetId",
              "name",
              "age",
              "description",
              "photoUrl"
            ],
            "writesFields": [],
            "rulesApplied": [
              "onlyAvailablePetsShownInGallery",
              "petImageUsesPlatformStorage"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent_browse_gallery",
                "intent": "queryList",
                "order": 10,
                "titleKey": "adoptionGallery.browse.title",
                "source": "browseAdoptablePets",
                "binding": "ui.adoptionGallery.data.browseAdoptablePets",
                "emptyKey": "adoptionGallery.browse.empty",
                "displayHint": "gallery",
                "stateKey": "ui.adoptionGallery.data.browseAdoptablePets",
                "fields": [],
                "columns": [
                  {
                    "id": "col_pet_photo",
                    "field": "photoUrl",
                    "labelKey": "adoptionGallery.field.photoUrl",
                    "order": 10,
                    "required": false,
                    "inputType": "image",
                    "format": "image",
                    "stateKey": "ui.adoptionGallery.data.browseAdoptablePets"
                  },
                  {
                    "id": "col_pet_name",
                    "field": "name",
                    "labelKey": "adoptionGallery.field.name",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.adoptionGallery.data.browseAdoptablePets"
                  },
                  {
                    "id": "col_pet_age",
                    "field": "age",
                    "labelKey": "adoptionGallery.field.age",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "format": "years",
                    "stateKey": "ui.adoptionGallery.data.browseAdoptablePets"
                  },
                  {
                    "id": "col_pet_description",
                    "field": "description",
                    "labelKey": "adoptionGallery.field.description",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.adoptionGallery.data.browseAdoptablePets"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "row_view_details",
                    "action": "viewAdoptablePetDetails",
                    "labelKey": "adoptionGallery.action.viewDetails",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "viewAdoptablePetDetails"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org_view_pet_details",
            "type": "organism",
            "organismName": "ViewAdoptablePetDetails",
            "titleKey": "org.view.pet.details.title",
            "purpose": "Exibir detalhes completos do pet selecionado na galeria, incluindo foto ampliada e status de disponibilidade",
            "userActions": [
              "viewAdoptablePetDetails"
            ],
            "requiredEntities": [
              "AdoptablePet"
            ],
            "readsFields": [
              "name",
              "age",
              "description",
              "photoUrl",
              "status"
            ],
            "writesFields": [],
            "rulesApplied": [
              "onlyAvailablePetsShownInGallery"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent_view_pet_details",
                "intent": "queryList",
                "order": 10,
                "titleKey": "adoptionGallery.details.title",
                "source": "viewAdoptablePetDetails",
                "binding": "ui.adoptionGallery.data.viewAdoptablePetDetails",
                "emptyKey": "adoptionGallery.details.empty",
                "displayHint": "detailCard",
                "stateKey": "ui.adoptionGallery.action.viewAdoptablePetDetails.status",
                "fields": [
                  {
                    "id": "field_detail_name",
                    "field": "name",
                    "labelKey": "adoptionGallery.field.name",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "viewAdoptablePetDetails",
                    "stateKey": "ui.adoptionGallery.data.viewAdoptablePetDetails"
                  },
                  {
                    "id": "field_detail_age",
                    "field": "age",
                    "labelKey": "adoptionGallery.field.age",
                    "order": 20,
                    "required": false,
                    "inputType": "number",
                    "format": "years",
                    "source": "viewAdoptablePetDetails",
                    "stateKey": "ui.adoptionGallery.data.viewAdoptablePetDetails"
                  },
                  {
                    "id": "field_detail_description",
                    "field": "description",
                    "labelKey": "adoptionGallery.field.description",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "source": "viewAdoptablePetDetails",
                    "stateKey": "ui.adoptionGallery.data.viewAdoptablePetDetails"
                  },
                  {
                    "id": "field_detail_photo",
                    "field": "photoUrl",
                    "labelKey": "adoptionGallery.field.photoUrl",
                    "order": 40,
                    "required": false,
                    "inputType": "image",
                    "format": "image",
                    "source": "viewAdoptablePetDetails",
                    "stateKey": "ui.adoptionGallery.data.viewAdoptablePetDetails"
                  },
                  {
                    "id": "field_detail_status",
                    "field": "status",
                    "labelKey": "adoptionGallery.field.status",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "source": "viewAdoptablePetDetails",
                    "stateKey": "ui.adoptionGallery.data.viewAdoptablePetDetails"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_express_interest",
                    "action": "expressAdoptionInterest",
                    "labelKey": "adoptionGallery.action.expressInterest",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "expressAdoptionInterest"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_express_interest",
            "type": "organism",
            "organismName": "ExpressAdoptionInterest",
            "titleKey": "org.express.interest.title",
            "purpose": "Formulário para o cliente manifestar interesse em adotar o pet selecionado, informando nome, e-mail e telefone",
            "userActions": [
              "expressAdoptionInterest"
            ],
            "requiredEntities": [
              "AdoptionInterest",
              "AdoptablePet"
            ],
            "readsFields": [
              "adoptablePetId",
              "customerName",
              "customerEmail",
              "customerPhone"
            ],
            "writesFields": [
              "adoptionInterestId",
              "status",
              "adoptablePetId",
              "customerName",
              "createdAt"
            ],
            "rulesApplied": [
              "adoptionStartedOnlineFinishedInStore"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent_express_interest_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "adoptionGallery.interestForm.title",
                "source": "expressAdoptionInterest",
                "binding": "ui.adoptionGallery.output.expressAdoptionInterest",
                "submitAction": "expressAdoptionInterest",
                "emptyKey": "adoptionGallery.interestForm.empty",
                "displayHint": "formPanel",
                "stateKey": "ui.adoptionGallery.action.expressAdoptionInterest.status",
                "fields": [
                  {
                    "id": "field_interest_pet_id",
                    "field": "adoptablePetId",
                    "labelKey": "adoptionGallery.field.adoptablePetId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "source": "selectedEntity",
                    "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId"
                  },
                  {
                    "id": "field_interest_customer_name",
                    "field": "customerName",
                    "labelKey": "adoptionGallery.field.customerName",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "source": "userInput",
                    "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerName"
                  },
                  {
                    "id": "field_interest_customer_email",
                    "field": "customerEmail",
                    "labelKey": "adoptionGallery.field.customerEmail",
                    "order": 30,
                    "required": true,
                    "inputType": "email",
                    "source": "userInput",
                    "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail"
                  },
                  {
                    "id": "field_interest_customer_phone",
                    "field": "customerPhone",
                    "labelKey": "adoptionGallery.field.customerPhone",
                    "order": 40,
                    "required": false,
                    "inputType": "tel",
                    "source": "userInput",
                    "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_submit_interest",
                    "action": "expressAdoptionInterest",
                    "labelKey": "adoptionGallery.action.submitInterest",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "expressAdoptionInterest"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_adoption_summary",
            "type": "organism",
            "organismName": "AdoptionInterestSummary",
            "titleKey": "org.adoption.summary.title",
            "purpose": "Exibir confirmação do registro de interesse e informar que a finalização da adoção acontece presencialmente na loja",
            "userActions": [
              "expressAdoptionInterest"
            ],
            "requiredEntities": [
              "AdoptionInterest"
            ],
            "readsFields": [
              "adoptionInterestId",
              "status",
              "customerName",
              "createdAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "adoptionStartedOnlineFinishedInStore"
            ],
            "order": 40,
            "intentions": [
              {
                "id": "intent_adoption_summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "adoptionGallery.summary.title",
                "source": "expressAdoptionInterest",
                "binding": "ui.adoptionGallery.output.expressAdoptionInterest",
                "emptyKey": "adoptionGallery.summary.empty",
                "displayHint": "summaryCard",
                "stateKey": "ui.adoptionGallery.action.expressAdoptionInterest.status",
                "fields": [
                  {
                    "id": "field_summary_interest_id",
                    "field": "adoptionInterestId",
                    "labelKey": "adoptionGallery.field.adoptionInterestId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "expressAdoptionInterest"
                  },
                  {
                    "id": "field_summary_status",
                    "field": "status",
                    "labelKey": "adoptionGallery.field.interestStatus",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "expressAdoptionInterest"
                  },
                  {
                    "id": "field_summary_customer_name",
                    "field": "customerName",
                    "labelKey": "adoptionGallery.field.customerName",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "source": "expressAdoptionInterest",
                    "stateKey": "ui.adoptionGallery.input.expressAdoptionInterest.customerName"
                  },
                  {
                    "id": "field_summary_created_at",
                    "field": "createdAt",
                    "labelKey": "adoptionGallery.field.createdAt",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "format": "datetime",
                    "source": "expressAdoptionInterest"
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
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding_browse_adoptable_pets",
      "source": "petShop.browseAdoptablePets.browseAdoptablePets",
      "entity": "AdoptablePet",
      "command": "browseAdoptablePets",
      "description": "Lista paginada de pets disponíveis para adoção",
      "stateKey": "ui.adoptionGallery.data.browseAdoptablePets",
      "inputStateKeys": []
    },
    {
      "id": "binding_view_pet_details",
      "source": "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails",
      "entity": "AdoptablePet",
      "command": "viewAdoptablePetDetails",
      "description": "Detalhes completos do pet selecionado",
      "stateKey": "ui.adoptionGallery.data.viewAdoptablePetDetails",
      "inputStateKeys": [
        "ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId"
      ]
    },
    {
      "id": "binding_express_interest",
      "source": "petShop.expressAdoptionInterest.expressAdoptionInterest",
      "entity": "AdoptionInterest",
      "command": "expressAdoptionInterest",
      "description": "Cria registro de manifestação de interesse em adoção",
      "stateKey": "ui.adoptionGallery.output.expressAdoptionInterest",
      "inputStateKeys": [
        "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerName",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail",
        "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "adoptionGallery__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/adoptionGallery.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/adoptionGallery.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/adoptionGallery.defs.ts",
      "_102049_/l2/petShop/web/shared/adoptionGallery.ts",
      "_102049_/l2/petShop/web/contracts/adoptionGallery.defs.ts",
      "_102049_/l2/petShop/web/contracts/adoptionGallery.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "adoptionGallery__l2_shared"
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
