/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "productManagement",
  "pageName": "Gestão de produtos",
  "baseClassName": "PetShopProductManagementBase",
  "actor": "admin",
  "purpose": "Executar Gestão de produtos.",
  "capabilities": [
    "browseProducts",
    "createProduct",
    "updateProduct"
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
    "actor": "admin",
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
            "O administrador acessa a tela de gestão de produtos.",
            "O sistema retorna a lista de produtos com nome, preço, categoria, flag de destaque e status.",
            "O administrador pode filtrar por nome, categoria, status ou destaque.",
            "O administrador visualiza os resultados paginados para selecionar um produto para edição ou destaque."
          ]
        },
        {
          "operationId": "createProduct",
          "commandName": "createProduct",
          "steps": [
            "O administrador acessa a tela de cadastro de produtos e preenche nome, descrição, preço, URL da imagem, categoria e flag de destaque.",
            "O sistema valida que a categoria informada existe e que, se o produto for marcado como destaque, seu status será ativo.",
            "O sistema gera um productId (UUID), define status como ativo, registra createdAt e updatedAt e persiste o produto no catálogo."
          ]
        },
        {
          "operationId": "updateProduct",
          "commandName": "updateProduct",
          "steps": [
            "O administrador seleciona um produto existente no catálogo.",
            "O sistema carrega os dados atuais do produto para edição.",
            "O administrador ajusta nome, descrição, preço, imagem, categoria e flag de destaque.",
            "O sistema valida que apenas produtos ativos podem ser marcados como destaque.",
            "O sistema persiste as alterações e atualiza o timestamp updatedAt."
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-productManagement",
      "type": "section",
      "sectionName": "Gestão de produtos",
      "titleKey": "section.productManagement",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-browseProducts",
          "type": "organism",
          "organismName": "BrowseProducts",
          "titleKey": "org.browseProducts.title",
          "purpose": "Listar produtos cadastrados com filtros e seleção para edição",
          "userActions": [
            "browseProducts"
          ],
          "requiredEntities": [
            "Product",
            "ProductCategory"
          ],
          "readsFields": [
            "productId",
            "name",
            "price",
            "imageUrl",
            "productCategoryId",
            "featured",
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "featuredProductRequiresActive"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-browseProducts-queryList",
              "intent": "queryList",
              "stateKey": "ui.productManagement.data.browseProducts",
              "action": "browseProducts",
              "submitAction": "browseProducts",
              "order": 10
            }
          ]
        },
        {
          "id": "org-createProduct",
          "type": "organism",
          "organismName": "CreateProduct",
          "titleKey": "org.createProduct.title",
          "purpose": "Cadastrar novo produto no catálogo",
          "userActions": [
            "createProduct"
          ],
          "requiredEntities": [
            "Product",
            "ProductCategory"
          ],
          "readsFields": [],
          "writesFields": [
            "name",
            "description",
            "price",
            "imageUrl",
            "productCategoryId",
            "featured"
          ],
          "rulesApplied": [
            "featuredProductRequiresActive",
            "productImageUsesPlatformStorage"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent-createProduct-commandForm",
              "intent": "commandForm",
              "action": "createProduct",
              "submitAction": "createProduct",
              "order": 10
            }
          ]
        },
        {
          "id": "org-updateProduct",
          "type": "organism",
          "organismName": "UpdateProduct",
          "titleKey": "org.updateProduct.title",
          "purpose": "Editar produto existente e definir destaque",
          "userActions": [
            "updateProduct"
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
          "writesFields": [
            "name",
            "description",
            "price",
            "imageUrl",
            "productCategoryId",
            "featured",
            "status"
          ],
          "rulesApplied": [
            "featuredProductRequiresActive",
            "productImageUsesPlatformStorage"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent-updateProduct-commandForm",
              "intent": "commandForm",
              "action": "updateProduct",
              "submitAction": "updateProduct",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec-review",
      "type": "section",
      "sectionName": "Resumo",
      "titleKey": "section.review",
      "mode": "read",
      "order": 20,
      "organisms": [
        {
          "id": "org-review",
          "type": "organism",
          "organismName": "ProductManagementReview",
          "titleKey": "org.review.title",
          "purpose": "Revisar o contexto e o resultado das ações principais da página",
          "userActions": [],
          "requiredEntities": [
            "Product"
          ],
          "readsFields": [
            "productId",
            "name",
            "price",
            "featured",
            "status",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "featuredProductRequiresActive"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-review-summary",
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
    "id": "productManagement-tabularClassic",
    "type": "page",
    "sections": [
      {
        "id": "sec-productManagement",
        "type": "section",
        "sectionName": "Gestão de produtos",
        "titleKey": "section.productManagement",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-browseProducts",
            "type": "organism",
            "organismName": "BrowseProducts",
            "titleKey": "org.browseProducts.title",
            "purpose": "Listar produtos cadastrados com filtros e seleção para edição",
            "userActions": [
              "browseProducts"
            ],
            "requiredEntities": [
              "Product",
              "ProductCategory"
            ],
            "readsFields": [
              "productId",
              "name",
              "price",
              "imageUrl",
              "productCategoryId",
              "featured",
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "featuredProductRequiresActive"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent-browseProducts-queryList",
                "intent": "queryList",
                "order": 10,
                "titleKey": "organism.browseProducts.title",
                "source": "ui.productManagement.data.browseProducts",
                "action": "browseProducts",
                "submitAction": "browseProducts",
                "emptyKey": "empty.browseProducts",
                "displayHint": "table",
                "fields": [],
                "columns": [
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "column.name",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-price",
                    "field": "price",
                    "labelKey": "column.price",
                    "order": 20,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-productCategoryId",
                    "field": "productCategoryId",
                    "labelKey": "column.productCategoryId",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-featured",
                    "field": "featured",
                    "labelKey": "column.featured",
                    "order": 40,
                    "required": false,
                    "inputType": "boolean",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "column.status",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-searchName",
                    "field": "searchName",
                    "labelKey": "filter.searchName",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productManagement.input.browseProducts.searchName"
                  },
                  {
                    "id": "flt-filterStatus",
                    "field": "filterStatus",
                    "labelKey": "filter.filterStatus",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.browseProducts.filterStatus"
                  },
                  {
                    "id": "flt-filterProductCategoryId",
                    "field": "filterProductCategoryId",
                    "labelKey": "filter.filterProductCategoryId",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.browseProducts.filterProductCategoryId"
                  },
                  {
                    "id": "flt-filterFeatured",
                    "field": "filterFeatured",
                    "labelKey": "filter.filterFeatured",
                    "order": 40,
                    "required": false,
                    "inputType": "boolean",
                    "stateKey": "ui.productManagement.input.browseProducts.filterFeatured"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-createProduct",
                    "action": "createProduct",
                    "labelKey": "action.createProduct",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createProduct"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra-updateProduct",
                    "action": "updateProduct",
                    "labelKey": "action.updateProduct",
                    "order": 10,
                    "displayHint": "inline",
                    "actionKey": "updateProduct"
                  }
                ],
                "actions": [],
                "stateKey": "ui.productManagement.data.browseProducts"
              }
            ]
          },
          {
            "id": "org-createProduct",
            "type": "organism",
            "organismName": "CreateProduct",
            "titleKey": "org.createProduct.title",
            "purpose": "Cadastrar novo produto no catálogo",
            "userActions": [
              "createProduct"
            ],
            "requiredEntities": [
              "Product",
              "ProductCategory"
            ],
            "readsFields": [],
            "writesFields": [
              "name",
              "description",
              "price",
              "imageUrl",
              "productCategoryId",
              "featured"
            ],
            "rulesApplied": [
              "featuredProductRequiresActive",
              "productImageUsesPlatformStorage"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent-createProduct-commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "organism.createProduct.title",
                "action": "createProduct",
                "submitAction": "createProduct",
                "emptyKey": "empty.createProduct",
                "displayHint": "form",
                "fields": [
                  {
                    "id": "fld-create-name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.productManagement.input.createProduct.name"
                  },
                  {
                    "id": "fld-create-description",
                    "field": "description",
                    "labelKey": "field.description",
                    "order": 20,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.productManagement.input.createProduct.description"
                  },
                  {
                    "id": "fld-create-price",
                    "field": "price",
                    "labelKey": "field.price",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "stateKey": "ui.productManagement.input.createProduct.price"
                  },
                  {
                    "id": "fld-create-imageUrl",
                    "field": "imageUrl",
                    "labelKey": "field.imageUrl",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productManagement.input.createProduct.imageUrl"
                  },
                  {
                    "id": "fld-create-productCategoryId",
                    "field": "productCategoryId",
                    "labelKey": "field.productCategoryId",
                    "order": 50,
                    "required": true,
                    "inputType": "select",
                    "source": "ProductCategory",
                    "stateKey": "ui.productManagement.input.createProduct.productCategoryId"
                  },
                  {
                    "id": "fld-create-featured",
                    "field": "featured",
                    "labelKey": "field.featured",
                    "order": 60,
                    "required": true,
                    "inputType": "boolean",
                    "stateKey": "ui.productManagement.input.createProduct.featured"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-createProduct-submit",
                    "action": "createProduct",
                    "labelKey": "action.createProduct.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createProduct"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-updateProduct",
            "type": "organism",
            "organismName": "UpdateProduct",
            "titleKey": "org.updateProduct.title",
            "purpose": "Editar produto existente e definir destaque",
            "userActions": [
              "updateProduct"
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
            "writesFields": [
              "name",
              "description",
              "price",
              "imageUrl",
              "productCategoryId",
              "featured",
              "status"
            ],
            "rulesApplied": [
              "featuredProductRequiresActive",
              "productImageUsesPlatformStorage"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent-updateProduct-commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "organism.updateProduct.title",
                "action": "updateProduct",
                "submitAction": "updateProduct",
                "emptyKey": "empty.updateProduct",
                "displayHint": "form",
                "fields": [
                  {
                    "id": "fld-update-productId",
                    "field": "productId",
                    "labelKey": "field.productId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "source": "selectedEntity",
                    "stateKey": "ui.productManagement.input.updateProduct.productId"
                  },
                  {
                    "id": "fld-update-name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.productManagement.input.updateProduct.name"
                  },
                  {
                    "id": "fld-update-description",
                    "field": "description",
                    "labelKey": "field.description",
                    "order": 30,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.productManagement.input.updateProduct.description"
                  },
                  {
                    "id": "fld-update-price",
                    "field": "price",
                    "labelKey": "field.price",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "stateKey": "ui.productManagement.input.updateProduct.price"
                  },
                  {
                    "id": "fld-update-imageUrl",
                    "field": "imageUrl",
                    "labelKey": "field.imageUrl",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productManagement.input.updateProduct.imageUrl"
                  },
                  {
                    "id": "fld-update-productCategoryId",
                    "field": "productCategoryId",
                    "labelKey": "field.productCategoryId",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "source": "ProductCategory",
                    "stateKey": "ui.productManagement.input.updateProduct.productCategoryId"
                  },
                  {
                    "id": "fld-update-featured",
                    "field": "featured",
                    "labelKey": "field.featured",
                    "order": 70,
                    "required": true,
                    "inputType": "boolean",
                    "stateKey": "ui.productManagement.input.updateProduct.featured"
                  },
                  {
                    "id": "fld-update-status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 80,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.productManagement.input.updateProduct.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-updateProduct-submit",
                    "action": "updateProduct",
                    "labelKey": "action.updateProduct.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateProduct"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "sec-review",
        "type": "section",
        "sectionName": "Resumo",
        "titleKey": "section.review",
        "mode": "read",
        "order": 20,
        "organisms": [
          {
            "id": "org-review",
            "type": "organism",
            "organismName": "ProductManagementReview",
            "titleKey": "org.review.title",
            "purpose": "Revisar o contexto e o resultado das ações principais da página",
            "userActions": [],
            "requiredEntities": [
              "Product"
            ],
            "readsFields": [
              "productId",
              "name",
              "price",
              "featured",
              "status",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "featuredProductRequiresActive"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent-review-summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "organism.review.title",
                "emptyKey": "empty.review",
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
      "id": "bind-browseProducts",
      "source": "petShop.browseProducts.browseProducts",
      "entity": "Product",
      "command": "browseProducts",
      "description": "Lista paginada de produtos com filtros por nome, categoria, status e destaque",
      "stateKey": "ui.productManagement.data.browseProducts",
      "inputStateKeys": [
        "ui.productManagement.input.browseProducts.searchName",
        "ui.productManagement.input.browseProducts.filterStatus",
        "ui.productManagement.input.browseProducts.filterProductCategoryId",
        "ui.productManagement.input.browseProducts.filterFeatured"
      ]
    },
    {
      "id": "bind-createProduct",
      "source": "petShop.createProduct.createProduct",
      "entity": "Product",
      "command": "createProduct",
      "description": "Cadastra um novo produto no catálogo",
      "stateKey": "ui.productManagement.output.createProduct",
      "inputStateKeys": [
        "ui.productManagement.input.createProduct.name",
        "ui.productManagement.input.createProduct.description",
        "ui.productManagement.input.createProduct.price",
        "ui.productManagement.input.createProduct.imageUrl",
        "ui.productManagement.input.createProduct.productCategoryId",
        "ui.productManagement.input.createProduct.featured"
      ]
    },
    {
      "id": "bind-updateProduct",
      "source": "petShop.updateProduct.updateProduct",
      "entity": "Product",
      "command": "updateProduct",
      "description": "Atualiza dados de um produto existente e define destaque",
      "stateKey": "ui.productManagement.output.updateProduct",
      "inputStateKeys": [
        "ui.productManagement.input.updateProduct.productId",
        "ui.productManagement.input.updateProduct.name",
        "ui.productManagement.input.updateProduct.description",
        "ui.productManagement.input.updateProduct.price",
        "ui.productManagement.input.updateProduct.imageUrl",
        "ui.productManagement.input.updateProduct.productCategoryId",
        "ui.productManagement.input.updateProduct.featured",
        "ui.productManagement.input.updateProduct.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "productManagement__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/productManagement.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/productManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/productManagement.defs.ts",
      "_102049_/l2/petShop/web/shared/productManagement.ts",
      "_102049_/l2/petShop/web/contracts/productManagement.defs.ts",
      "_102049_/l2/petShop/web/contracts/productManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "productManagement__l2_shared"
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
