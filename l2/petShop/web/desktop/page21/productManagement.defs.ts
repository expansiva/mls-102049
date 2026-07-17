/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/productManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "productManagement",
  "pageName": "Gestão de Produtos",
  "baseClassName": "PetShopProductManagementBase",
  "actor": "loja",
  "purpose": "Executar Gestão de Produtos.",
  "capabilities": [
    "browseProducts",
    "createProduct",
    "updateProduct",
    "setProductHighlights"
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
    "workspaceId": "productManagement",
    "workspaceKind": "entityManagement",
    "actor": "loja",
    "entity": "Product",
    "owners": [
      {
        "kind": "operation",
        "id": "browseProducts",
        "defPath": "_102049_/l4/operations/browseProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createProduct",
        "defPath": "_102049_/l4/operations/createProduct.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateProduct",
        "defPath": "_102049_/l4/operations/updateProduct.defs.ts"
      },
      {
        "kind": "operation",
        "id": "setProductHighlights",
        "defPath": "_102049_/l4/operations/setProductHighlights.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseProducts",
          "commandName": "browseProducts",
          "steps": [
            "A loja acessa a tela de catálogo de produtos",
            "O sistema lista os produtos cadastrados com nome, preço, tipo de pet, categoria, flag de destaque e status",
            "A loja pode buscar por nome (insensível a caixa e parcial) e combinar filtros de tipo de pet, categoria e faixa de preço",
            "A loja visualiza quais produtos estão em destaque e disponíveis, identificando produtos indisponíveis para gestão"
          ]
        },
        {
          "operationId": "createProduct",
          "commandName": "createProduct",
          "steps": [
            "A loja informa nome, descrição (opcional), preço, tipo de pet, categoria, flag de destaque e status de disponibilidade do novo produto.",
            "O sistema valida que nome, preço, tipo de pet e categoria estão presentes e que as referências a PetType e Category existem.",
            "O sistema valida que, se highlighted for verdadeiro, o status deve ser available.",
            "O sistema gera um productId, define createdAt e updatedAt e persiste o produto no catálogo.",
            "O sistema retorna o produto criado com todos os campos."
          ]
        },
        {
          "operationId": "updateProduct",
          "commandName": "updateProduct",
          "steps": [
            "A loja seleciona um produto existente no catálogo",
            "A loja modifica campos como nome, descrição, preço, tipo de pet, categoria, destaque ou disponibilidade",
            "O sistema valida que um produto só pode ser marcado como destaque se estiver disponível",
            "O sistema valida que os campos mínimos obrigatórios (nome, preço, tipo de pet e categoria) permaneçam preenchidos",
            "O sistema persiste as alterações e atualiza o campo updatedAt com a data e hora atuais"
          ]
        },
        {
          "operationId": "setProductHighlights",
          "commandName": "setProductHighlights",
          "steps": [
            "A loja seleciona um ou mais produtos do catálogo que deseja marcar ou desmarcar como destaque.",
            "A loja define o valor do destaque (true para marcar, false para remover destaque).",
            "O sistema verifica que apenas produtos disponíveis podem ser marcados como destaque.",
            "O sistema atualiza o campo highlighted dos produtos informados e retorna a confirmação com os produtos alterados."
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.catalog",
      "type": "section",
      "sectionName": "catalog",
      "titleKey": "section.catalog.title",
      "mode": "view",
      "order": 1,
      "organisms": [
        {
          "id": "organism.productList",
          "type": "queryList",
          "organismName": "productList",
          "titleKey": "organism.productList.title",
          "purpose": "Listar e filtrar produtos para seleção e edição.",
          "userActions": [
            "browseProducts"
          ],
          "requiredEntities": [
            "Product",
            "PetType",
            "Category"
          ],
          "readsFields": [
            "productId",
            "name",
            "description",
            "price",
            "petTypeId",
            "petTypeName",
            "categoryId",
            "categoryName",
            "highlighted",
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Renderizar lista mestre com filtros principais",
            "Evitar edição de ids"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent.productList",
              "intent": "browseProducts",
              "stateKey": "ui.productManagement.data.browseProducts",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "section.detail",
      "type": "section",
      "sectionName": "detail",
      "titleKey": "section.detail.title",
      "mode": "edit",
      "order": 2,
      "organisms": [
        {
          "id": "organism.updateProductForm",
          "type": "commandForm",
          "organismName": "updateProductForm",
          "titleKey": "organism.updateProductForm.title",
          "purpose": "Editar produto selecionado sem perder o contexto da lista.",
          "userActions": [
            "updateProduct"
          ],
          "requiredEntities": [
            "Product",
            "PetType",
            "Category"
          ],
          "readsFields": [
            "productId",
            "name",
            "description",
            "price",
            "petTypeId",
            "categoryId",
            "highlighted",
            "status"
          ],
          "writesFields": [
            "name",
            "description",
            "price",
            "petTypeId",
            "categoryId",
            "highlighted",
            "status"
          ],
          "rulesApplied": [
            "Campos obrigatórios mantidos preenchidos",
            "Status como transição contextual"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent.updateProduct",
              "intent": "updateProduct",
              "order": 1
            }
          ]
        },
        {
          "id": "organism.createProductForm",
          "type": "commandForm",
          "organismName": "createProductForm",
          "titleKey": "organism.createProductForm.title",
          "purpose": "Cadastrar um novo produto no catálogo.",
          "userActions": [
            "createProduct"
          ],
          "requiredEntities": [
            "Product",
            "PetType",
            "Category"
          ],
          "readsFields": [
            "name",
            "description",
            "price",
            "petTypeId",
            "categoryId",
            "highlighted",
            "status"
          ],
          "writesFields": [
            "name",
            "description",
            "price",
            "petTypeId",
            "categoryId",
            "highlighted",
            "status"
          ],
          "rulesApplied": [
            "Campos obrigatórios mínimos",
            "Status disponível quando destaque"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "intent.createProduct",
              "intent": "createProduct",
              "order": 1
            }
          ]
        },
        {
          "id": "organism.setHighlightsForm",
          "type": "commandForm",
          "organismName": "setHighlightsForm",
          "titleKey": "organism.setHighlightsForm.title",
          "purpose": "Definir destaque em massa para produtos selecionados.",
          "userActions": [
            "setProductHighlights"
          ],
          "requiredEntities": [
            "Product"
          ],
          "readsFields": [
            "productIds",
            "highlighted"
          ],
          "writesFields": [
            "highlighted"
          ],
          "rulesApplied": [
            "Apenas produtos disponíveis podem ser destacados"
          ],
          "order": 3,
          "intentionRefs": [
            {
              "id": "intent.setHighlights",
              "intent": "setProductHighlights",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "goal_first",
  "visualStyle": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja",
  "pageObjective": {
    "actor": "Operador/gestor da loja",
    "jobToBeDone": "Gerenciar o catálogo de produtos, encontrando itens rapidamente e criando ou editando produtos com destaque e disponibilidade corretos.",
    "primaryDecision": "Qual produto selecionar para editar ou criar um novo produto no catálogo.",
    "decisiveInfo": [
      "name",
      "price",
      "petTypeName",
      "categoryName",
      "highlighted",
      "status"
    ],
    "usageFrequency": "Uso ocasional/operacional em back-office.",
    "criticalActions": [
      {
        "action": "browseProducts",
        "presentation": "primary-search-and-filter"
      },
      {
        "action": "updateProduct",
        "presentation": "contextual-detail-primary-button"
      },
      {
        "action": "createProduct",
        "presentation": "primary-button"
      },
      {
        "action": "setProductHighlights",
        "presentation": "bulk-form-inline"
      }
    ],
    "informationHierarchy": [
      "Lista filtrável de produtos",
      "Detalhe/edição do produto selecionado",
      "Cadastro de novo produto",
      "Ação em massa de destaque"
    ],
    "successCriteria": [
      "Produtos são encontrados por busca/filtros em poucos passos",
      "Edição ocorre sem perder o contexto da lista",
      "Cadastro é concluído com validações claras",
      "Destaques em massa são aplicados com confirmação visual"
    ],
    "antiPatterns": [
      "formulário de transição de status separado",
      "edição de id manual",
      "expor timestamps como campos editáveis",
      "select livre para status sem contexto"
    ]
  },
  "msgKeys": [
    "action.browseProducts",
    "action.createProduct",
    "action.createProduct.error",
    "action.createProduct.success",
    "action.selectForEdit",
    "action.setProductHighlights",
    "action.setProductHighlights.error",
    "action.setProductHighlights.success",
    "action.updateProduct",
    "action.updateProduct.error",
    "action.updateProduct.success",
    "field.product.categoryId",
    "field.product.categoryName",
    "field.product.description",
    "field.product.highlighted",
    "field.product.name",
    "field.product.petTypeId",
    "field.product.petTypeName",
    "field.product.price",
    "field.product.priceMax",
    "field.product.priceMin",
    "field.product.productIds",
    "field.product.searchTerm",
    "field.product.status",
    "intent.createProduct.title",
    "intent.productList.title",
    "intent.setHighlights.title",
    "intent.updateProduct.title",
    "organism.createProductForm.title",
    "organism.productList.title",
    "organism.setHighlightsForm.title",
    "organism.updateProductForm.title",
    "section.catalog.title",
    "section.detail.title"
  ],
  "layout": {
    "id": "productManagement_goal_first_page21",
    "type": "page",
    "sections": [
      {
        "id": "section.catalog",
        "type": "section",
        "sectionName": "catalog",
        "titleKey": "section.catalog.title",
        "mode": "view",
        "order": 1,
        "organisms": [
          {
            "id": "organism.productList",
            "type": "queryList",
            "organismName": "productList",
            "titleKey": "organism.productList.title",
            "purpose": "Listar e filtrar produtos para seleção e edição.",
            "userActions": [
              "browseProducts"
            ],
            "requiredEntities": [
              "Product",
              "PetType",
              "Category"
            ],
            "readsFields": [
              "productId",
              "name",
              "description",
              "price",
              "petTypeId",
              "petTypeName",
              "categoryId",
              "categoryName",
              "highlighted",
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "Renderizar lista mestre com filtros principais",
              "Evitar edição de ids"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent.productList",
                "intent": "browseProducts",
                "order": 1,
                "titleKey": "intent.productList.title",
                "displayHint": "master-detail",
                "fields": [],
                "columns": [
                  {
                    "id": "col.product.name",
                    "field": "name",
                    "labelKey": "field.product.name",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col.product.price",
                    "field": "price",
                    "labelKey": "field.product.price",
                    "order": 2,
                    "required": false,
                    "format": "currency",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col.product.petTypeName",
                    "field": "petTypeName",
                    "labelKey": "field.product.petTypeName",
                    "order": 3,
                    "required": false,
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col.product.categoryName",
                    "field": "categoryName",
                    "labelKey": "field.product.categoryName",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col.product.highlighted",
                    "field": "highlighted",
                    "labelKey": "field.product.highlighted",
                    "order": 5,
                    "required": false,
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col.product.status",
                    "field": "status",
                    "labelKey": "field.product.status",
                    "order": 6,
                    "required": false,
                    "stateKey": "ui.productManagement.data.browseProducts"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.searchTerm",
                    "field": "searchTerm",
                    "labelKey": "field.product.searchTerm",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productManagement.input.browseProducts.searchTerm"
                  },
                  {
                    "id": "filter.petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.product.petTypeId",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.browseProducts.petTypeId"
                  },
                  {
                    "id": "filter.categoryId",
                    "field": "categoryId",
                    "labelKey": "field.product.categoryId",
                    "order": 3,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.browseProducts.categoryId"
                  },
                  {
                    "id": "filter.priceMin",
                    "field": "priceMin",
                    "labelKey": "field.product.priceMin",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.productManagement.input.browseProducts.priceMin"
                  },
                  {
                    "id": "filter.priceMax",
                    "field": "priceMax",
                    "labelKey": "field.product.priceMax",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.productManagement.input.browseProducts.priceMax"
                  },
                  {
                    "id": "filter.status",
                    "field": "status",
                    "labelKey": "field.product.status",
                    "order": 6,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.browseProducts.status"
                  },
                  {
                    "id": "filter.highlighted",
                    "field": "highlighted",
                    "labelKey": "field.product.highlighted",
                    "order": 7,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.browseProducts.highlighted"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb.browse",
                    "action": "browseProducts",
                    "labelKey": "action.browseProducts",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "browseProducts"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.productManagement.data.browseProducts"
              }
            ]
          }
        ]
      },
      {
        "id": "section.detail",
        "type": "section",
        "sectionName": "detail",
        "titleKey": "section.detail.title",
        "mode": "edit",
        "order": 2,
        "organisms": [
          {
            "id": "organism.updateProductForm",
            "type": "commandForm",
            "organismName": "updateProductForm",
            "titleKey": "organism.updateProductForm.title",
            "purpose": "Editar produto selecionado sem perder o contexto da lista.",
            "userActions": [
              "updateProduct"
            ],
            "requiredEntities": [
              "Product",
              "PetType",
              "Category"
            ],
            "readsFields": [
              "productId",
              "name",
              "description",
              "price",
              "petTypeId",
              "categoryId",
              "highlighted",
              "status"
            ],
            "writesFields": [
              "name",
              "description",
              "price",
              "petTypeId",
              "categoryId",
              "highlighted",
              "status"
            ],
            "rulesApplied": [
              "Campos obrigatórios mantidos preenchidos",
              "Status como transição contextual"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent.updateProduct",
                "intent": "updateProduct",
                "order": 1,
                "titleKey": "intent.updateProduct.title",
                "displayHint": "contextual-transition-actions",
                "fields": [
                  {
                    "id": "field.update.name",
                    "field": "name",
                    "labelKey": "field.product.name",
                    "order": 1,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.productManagement.input.updateProduct.name"
                  },
                  {
                    "id": "field.update.description",
                    "field": "description",
                    "labelKey": "field.product.description",
                    "order": 2,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.productManagement.input.updateProduct.description"
                  },
                  {
                    "id": "field.update.price",
                    "field": "price",
                    "labelKey": "field.product.price",
                    "order": 3,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "stateKey": "ui.productManagement.input.updateProduct.price"
                  },
                  {
                    "id": "field.update.petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.product.petTypeId",
                    "order": 4,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.updateProduct.petTypeId"
                  },
                  {
                    "id": "field.update.categoryId",
                    "field": "categoryId",
                    "labelKey": "field.product.categoryId",
                    "order": 5,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.updateProduct.categoryId"
                  },
                  {
                    "id": "field.update.highlighted",
                    "field": "highlighted",
                    "labelKey": "field.product.highlighted",
                    "order": 6,
                    "required": false,
                    "inputType": "switch",
                    "stateKey": "ui.productManagement.input.updateProduct.highlighted"
                  },
                  {
                    "id": "field.update.status",
                    "field": "status",
                    "labelKey": "field.product.status",
                    "order": 7,
                    "required": false,
                    "inputType": "segmented",
                    "stateKey": "ui.productManagement.input.updateProduct.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act.updateProduct",
                    "action": "updateProduct",
                    "labelKey": "action.updateProduct",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "updateProduct"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.createProductForm",
            "type": "commandForm",
            "organismName": "createProductForm",
            "titleKey": "organism.createProductForm.title",
            "purpose": "Cadastrar um novo produto no catálogo.",
            "userActions": [
              "createProduct"
            ],
            "requiredEntities": [
              "Product",
              "PetType",
              "Category"
            ],
            "readsFields": [
              "name",
              "description",
              "price",
              "petTypeId",
              "categoryId",
              "highlighted",
              "status"
            ],
            "writesFields": [
              "name",
              "description",
              "price",
              "petTypeId",
              "categoryId",
              "highlighted",
              "status"
            ],
            "rulesApplied": [
              "Campos obrigatórios mínimos",
              "Status disponível quando destaque"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "intent.createProduct",
                "intent": "createProduct",
                "order": 1,
                "titleKey": "intent.createProduct.title",
                "fields": [
                  {
                    "id": "field.create.name",
                    "field": "name",
                    "labelKey": "field.product.name",
                    "order": 1,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.productManagement.input.createProduct.name"
                  },
                  {
                    "id": "field.create.description",
                    "field": "description",
                    "labelKey": "field.product.description",
                    "order": 2,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.productManagement.input.createProduct.description"
                  },
                  {
                    "id": "field.create.price",
                    "field": "price",
                    "labelKey": "field.product.price",
                    "order": 3,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "stateKey": "ui.productManagement.input.createProduct.price"
                  },
                  {
                    "id": "field.create.petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.product.petTypeId",
                    "order": 4,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.createProduct.petTypeId"
                  },
                  {
                    "id": "field.create.categoryId",
                    "field": "categoryId",
                    "labelKey": "field.product.categoryId",
                    "order": 5,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.createProduct.categoryId"
                  },
                  {
                    "id": "field.create.highlighted",
                    "field": "highlighted",
                    "labelKey": "field.product.highlighted",
                    "order": 6,
                    "required": false,
                    "inputType": "switch",
                    "stateKey": "ui.productManagement.input.createProduct.highlighted"
                  },
                  {
                    "id": "field.create.status",
                    "field": "status",
                    "labelKey": "field.product.status",
                    "order": 7,
                    "required": false,
                    "inputType": "segmented",
                    "stateKey": "ui.productManagement.input.createProduct.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act.createProduct",
                    "action": "createProduct",
                    "labelKey": "action.createProduct",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "createProduct"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.setHighlightsForm",
            "type": "commandForm",
            "organismName": "setHighlightsForm",
            "titleKey": "organism.setHighlightsForm.title",
            "purpose": "Definir destaque em massa para produtos selecionados.",
            "userActions": [
              "setProductHighlights"
            ],
            "requiredEntities": [
              "Product"
            ],
            "readsFields": [
              "productIds",
              "highlighted"
            ],
            "writesFields": [
              "highlighted"
            ],
            "rulesApplied": [
              "Apenas produtos disponíveis podem ser destacados"
            ],
            "order": 3,
            "intentions": [
              {
                "id": "intent.setHighlights",
                "intent": "setProductHighlights",
                "order": 1,
                "titleKey": "intent.setHighlights.title",
                "fields": [
                  {
                    "id": "field.highlights.productIds",
                    "field": "productIds",
                    "labelKey": "field.product.productIds",
                    "order": 1,
                    "required": true,
                    "inputType": "multi-select",
                    "stateKey": "ui.productManagement.input.setProductHighlights.productIds"
                  },
                  {
                    "id": "field.highlights.highlighted",
                    "field": "highlighted",
                    "labelKey": "field.product.highlighted",
                    "order": 2,
                    "required": true,
                    "inputType": "switch",
                    "stateKey": "ui.productManagement.input.setProductHighlights.highlighted"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act.setHighlights",
                    "action": "setProductHighlights",
                    "labelKey": "action.setProductHighlights",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "setProductHighlights"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "bind.browseProducts",
      "source": "ui.productManagement.data.browseProducts",
      "entity": "Product",
      "description": "Lista de produtos do catálogo",
      "stateKey": "ui.productManagement.data.browseProducts"
    }
  ]
};

export const pipeline = [
  {
    "id": "productManagement__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page21/productManagement.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page21/productManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/productManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "productManagement__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
