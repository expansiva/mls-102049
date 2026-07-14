/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/petManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "petManagement",
  "pageName": "Gestão de pets para adoção",
  "baseClassName": "PetShopPetManagementBase",
  "actor": "admin",
  "purpose": "Executar Gestão de pets para adoção.",
  "capabilities": [
    "browseAdoptablePetsAdmin",
    "createAdoptablePet",
    "updateAdoptablePet"
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_pet_management",
      "type": "section",
      "sectionName": "Gestão de pets para adoção",
      "titleKey": "petManagement.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_browse_pets",
          "type": "organism",
          "organismName": "BrowseAdoptablePetsAdmin",
          "titleKey": "org.browse.pets.title",
          "purpose": "Listar pets para adoção cadastrados com filtros de status e ações por linha",
          "userActions": [
            "browseAdoptablePetsAdmin"
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
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [
            "statusFilter"
          ],
          "rulesApplied": [
            "onlyAvailablePetsShownInGallery"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_pet_list",
              "intent": "queryList",
              "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin",
              "order": 10
            }
          ]
        },
        {
          "id": "org_create_pet",
          "type": "organism",
          "organismName": "CreateAdoptablePet",
          "titleKey": "org.create.pet.title",
          "purpose": "Cadastrar novo pet para adoção com nome, idade, descrição e foto",
          "userActions": [
            "createAdoptablePet"
          ],
          "requiredEntities": [
            "AdoptablePet"
          ],
          "readsFields": [],
          "writesFields": [
            "name",
            "age",
            "description",
            "photoUrl"
          ],
          "rulesApplied": [
            "onlyAvailablePetsShownInGallery",
            "petImageUsesPlatformStorage"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "int_create_pet",
              "intent": "commandForm",
              "stateKey": "ui.petManagement.action.createAdoptablePet.status",
              "submitAction": "createAdoptablePet",
              "order": 10
            }
          ]
        },
        {
          "id": "org_update_pet",
          "type": "organism",
          "organismName": "UpdateAdoptablePet",
          "titleKey": "org.update.pet.title",
          "purpose": "Editar dados do pet selecionado e controlar disponibilidade na galeria pública",
          "userActions": [
            "updateAdoptablePet"
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
          "writesFields": [
            "name",
            "age",
            "description",
            "photoUrl",
            "status"
          ],
          "rulesApplied": [
            "onlyAvailablePetsShownInGallery",
            "petImageUsesPlatformStorage"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "int_update_pet",
              "intent": "commandForm",
              "stateKey": "ui.petManagement.action.updateAdoptablePet.status",
              "submitAction": "updateAdoptablePet",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec_pet_summary",
      "type": "section",
      "sectionName": "Resumo da gestão",
      "titleKey": "petManagement.summary.sectionTitle",
      "mode": "read",
      "order": 20,
      "organisms": [
        {
          "id": "org_pet_summary",
          "type": "organism",
          "organismName": "PetManagementSummary",
          "titleKey": "org.pet.summary.title",
          "purpose": "Revisar o contexto e o resultado das ações principais da página",
          "userActions": [],
          "requiredEntities": [
            "AdoptablePet"
          ],
          "readsFields": [
            "adoptablePetId",
            "name",
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "onlyAvailablePetsShownInGallery"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_pet_summary",
              "intent": "summary",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "tabular_classic",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "page11_tabular_classic",
    "type": "page",
    "sections": [
      {
        "id": "sec_pet_management",
        "type": "section",
        "sectionName": "Gestão de pets para adoção",
        "titleKey": "petManagement.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_browse_pets",
            "type": "organism",
            "organismName": "BrowseAdoptablePetsAdmin",
            "titleKey": "org.browse.pets.title",
            "purpose": "Listar pets para adoção cadastrados com filtros de status e ações por linha",
            "userActions": [
              "browseAdoptablePetsAdmin"
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
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [
              "statusFilter"
            ],
            "rulesApplied": [
              "onlyAvailablePetsShownInGallery"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int_pet_list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "petManagement.list.title",
                "source": "browseAdoptablePetsAdmin",
                "binding": "browseAdoptablePetsAdmin",
                "emptyKey": "petManagement.list.empty",
                "displayHint": "table",
                "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin",
                "fields": [],
                "columns": [
                  {
                    "id": "col_name",
                    "field": "name",
                    "labelKey": "petManagement.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin"
                  },
                  {
                    "id": "col_age",
                    "field": "age",
                    "labelKey": "petManagement.field.age",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin"
                  },
                  {
                    "id": "col_description",
                    "field": "description",
                    "labelKey": "petManagement.field.description",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin"
                  },
                  {
                    "id": "col_photoUrl",
                    "field": "photoUrl",
                    "labelKey": "petManagement.field.photoUrl",
                    "order": 40,
                    "required": true,
                    "inputType": "text",
                    "format": "image",
                    "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin"
                  },
                  {
                    "id": "col_status",
                    "field": "status",
                    "labelKey": "petManagement.field.status",
                    "order": 50,
                    "required": true,
                    "inputType": "text",
                    "format": "badge",
                    "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin"
                  },
                  {
                    "id": "col_createdAt",
                    "field": "createdAt",
                    "labelKey": "petManagement.field.createdAt",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "format": "datetime",
                    "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin"
                  }
                ],
                "filters": [
                  {
                    "id": "flt_statusFilter",
                    "field": "statusFilter",
                    "labelKey": "petManagement.filter.statusFilter",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb_create",
                    "action": "createAdoptablePet",
                    "labelKey": "petManagement.action.create",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createAdoptablePet"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra_update",
                    "action": "updateAdoptablePet",
                    "labelKey": "petManagement.action.update",
                    "order": 10,
                    "displayHint": "inline",
                    "actionKey": "updateAdoptablePet"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org_create_pet",
            "type": "organism",
            "organismName": "CreateAdoptablePet",
            "titleKey": "org.create.pet.title",
            "purpose": "Cadastrar novo pet para adoção com nome, idade, descrição e foto",
            "userActions": [
              "createAdoptablePet"
            ],
            "requiredEntities": [
              "AdoptablePet"
            ],
            "readsFields": [],
            "writesFields": [
              "name",
              "age",
              "description",
              "photoUrl"
            ],
            "rulesApplied": [
              "onlyAvailablePetsShownInGallery",
              "petImageUsesPlatformStorage"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "int_create_pet",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "petManagement.create.title",
                "submitAction": "createAdoptablePet",
                "emptyKey": "petManagement.create.empty",
                "displayHint": "form",
                "stateKey": "ui.petManagement.action.createAdoptablePet.status",
                "fields": [
                  {
                    "id": "fld_create_name",
                    "field": "name",
                    "labelKey": "petManagement.field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.petManagement.input.createAdoptablePet.name"
                  },
                  {
                    "id": "fld_create_age",
                    "field": "age",
                    "labelKey": "petManagement.field.age",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.petManagement.input.createAdoptablePet.age"
                  },
                  {
                    "id": "fld_create_description",
                    "field": "description",
                    "labelKey": "petManagement.field.description",
                    "order": 30,
                    "required": true,
                    "inputType": "textarea",
                    "stateKey": "ui.petManagement.input.createAdoptablePet.description"
                  },
                  {
                    "id": "fld_create_photoUrl",
                    "field": "photoUrl",
                    "labelKey": "petManagement.field.photoUrl",
                    "order": 40,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.petManagement.input.createAdoptablePet.photoUrl"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_create_submit",
                    "action": "createAdoptablePet",
                    "labelKey": "petManagement.action.create.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createAdoptablePet"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_update_pet",
            "type": "organism",
            "organismName": "UpdateAdoptablePet",
            "titleKey": "org.update.pet.title",
            "purpose": "Editar dados do pet selecionado e controlar disponibilidade na galeria pública",
            "userActions": [
              "updateAdoptablePet"
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
            "writesFields": [
              "name",
              "age",
              "description",
              "photoUrl",
              "status"
            ],
            "rulesApplied": [
              "onlyAvailablePetsShownInGallery",
              "petImageUsesPlatformStorage"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "int_update_pet",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "petManagement.update.title",
                "submitAction": "updateAdoptablePet",
                "emptyKey": "petManagement.update.empty",
                "displayHint": "form",
                "stateKey": "ui.petManagement.action.updateAdoptablePet.status",
                "fields": [
                  {
                    "id": "fld_update_adoptablePetId",
                    "field": "adoptablePetId",
                    "labelKey": "petManagement.field.adoptablePetId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "source": "selectedEntity",
                    "stateKey": "ui.petManagement.input.updateAdoptablePet.adoptablePetId"
                  },
                  {
                    "id": "fld_update_name",
                    "field": "name",
                    "labelKey": "petManagement.field.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.petManagement.input.updateAdoptablePet.name"
                  },
                  {
                    "id": "fld_update_age",
                    "field": "age",
                    "labelKey": "petManagement.field.age",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.petManagement.input.updateAdoptablePet.age"
                  },
                  {
                    "id": "fld_update_description",
                    "field": "description",
                    "labelKey": "petManagement.field.description",
                    "order": 40,
                    "required": true,
                    "inputType": "textarea",
                    "stateKey": "ui.petManagement.input.updateAdoptablePet.description"
                  },
                  {
                    "id": "fld_update_photoUrl",
                    "field": "photoUrl",
                    "labelKey": "petManagement.field.photoUrl",
                    "order": 50,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.petManagement.input.updateAdoptablePet.photoUrl"
                  },
                  {
                    "id": "fld_update_status",
                    "field": "status",
                    "labelKey": "petManagement.field.status",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.petManagement.input.updateAdoptablePet.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_update_submit",
                    "action": "updateAdoptablePet",
                    "labelKey": "petManagement.action.update.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateAdoptablePet"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec_pet_summary",
        "type": "section",
        "sectionName": "Resumo da gestão",
        "titleKey": "petManagement.summary.sectionTitle",
        "mode": "read",
        "order": 20,
        "organisms": [
          {
            "id": "org_pet_summary",
            "type": "organism",
            "organismName": "PetManagementSummary",
            "titleKey": "org.pet.summary.title",
            "purpose": "Revisar o contexto e o resultado das ações principais da página",
            "userActions": [],
            "requiredEntities": [
              "AdoptablePet"
            ],
            "readsFields": [
              "adoptablePetId",
              "name",
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "onlyAvailablePetsShownInGallery"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int_pet_summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "petManagement.summary.title",
                "emptyKey": "petManagement.summary.empty",
                "displayHint": "summary",
                "fields": [],
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
      "id": "bind_browse",
      "source": "petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin",
      "entity": "AdoptablePet",
      "command": "browseAdoptablePetsAdmin",
      "description": "Lista paginada de pets para adoção cadastrados",
      "stateKey": "ui.petManagement.data.browseAdoptablePetsAdmin",
      "inputStateKeys": [
        "ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter"
      ]
    },
    {
      "id": "bind_create",
      "source": "petShop.createAdoptablePet.createAdoptablePet",
      "entity": "AdoptablePet",
      "command": "createAdoptablePet",
      "description": "Cadastra um novo pet para adoção com status disponível",
      "stateKey": "ui.petManagement.output.createAdoptablePet",
      "inputStateKeys": [
        "ui.petManagement.input.createAdoptablePet.name",
        "ui.petManagement.input.createAdoptablePet.age",
        "ui.petManagement.input.createAdoptablePet.description",
        "ui.petManagement.input.createAdoptablePet.photoUrl"
      ]
    },
    {
      "id": "bind_update",
      "source": "petShop.updateAdoptablePet.updateAdoptablePet",
      "entity": "AdoptablePet",
      "command": "updateAdoptablePet",
      "description": "Atualiza dados e disponibilidade de um pet selecionado",
      "stateKey": "ui.petManagement.output.updateAdoptablePet",
      "inputStateKeys": [
        "ui.petManagement.input.updateAdoptablePet.adoptablePetId",
        "ui.petManagement.input.updateAdoptablePet.name",
        "ui.petManagement.input.updateAdoptablePet.age",
        "ui.petManagement.input.updateAdoptablePet.description",
        "ui.petManagement.input.updateAdoptablePet.photoUrl",
        "ui.petManagement.input.updateAdoptablePet.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "petManagement__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/petManagement.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/petManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/petManagement.defs.ts",
      "_102049_/l2/petShop/web/shared/petManagement.ts",
      "_102049_/l2/petShop/web/contracts/petManagement.defs.ts",
      "_102049_/l2/petShop/web/contracts/petManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "petManagement__l2_shared"
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
