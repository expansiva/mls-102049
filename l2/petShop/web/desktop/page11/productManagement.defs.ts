/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productManagement.defs.ts" enhancement="_blank"/>

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
      "id": "section-product-list",
      "type": "section",
      "sectionName": "section-product-list",
      "titleKey": "section.product.list.title",
      "mode": "list",
      "order": 1,
      "organisms": [
        {
          "id": "org-product-table",
          "type": "organism",
          "organismName": "productTable",
          "titleKey": "org.product.table.title",
          "purpose": "Listar, buscar e filtrar produtos do catálogo com ações de criação, edição e destaque",
          "userActions": [
            "browseProducts",
            "createProduct",
            "updateProduct",
            "setProductHighlights"
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
          "rulesApplied": [],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-browse-products",
              "intent": "queryList",
              "stateKey": "ui.productManagement.data.browseProducts",
              "action": "browseProducts",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "section-create-product",
      "type": "section",
      "sectionName": "section-create-product",
      "titleKey": "section.create.product.title",
      "mode": "form",
      "order": 2,
      "organisms": [
        {
          "id": "org-create-form",
          "type": "organism",
          "organismName": "createProductForm",
          "titleKey": "org.create.form.title",
          "purpose": "Cadastrar novo produto no catálogo com nome, descrição, preço, tipo de pet, categoria, destaque e status",
          "userActions": [
            "createProduct"
          ],
          "requiredEntities": [
            "Product",
            "PetType",
            "Category"
          ],
          "readsFields": [],
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
            "name, price, petTypeId, categoryId are required",
            "highlighted requires status=available"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-create-product",
              "intent": "commandForm",
              "stateKey": "ui.productManagement.action.createProduct.status",
              "submitAction": "createProduct",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "section-update-product",
      "type": "section",
      "sectionName": "section-update-product",
      "titleKey": "section.update.product.title",
      "mode": "form",
      "order": 3,
      "organisms": [
        {
          "id": "org-update-form",
          "type": "organism",
          "organismName": "updateProductForm",
          "titleKey": "org.update.form.title",
          "purpose": "Editar produto existente selecionado na lista, com preenchimento automático dos campos",
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
            "productId sourced from selectedEntity, not manual input",
            "name, price, petTypeId, categoryId are required",
            "highlighted requires status=available"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-update-product",
              "intent": "commandForm",
              "stateKey": "ui.productManagement.action.updateProduct.status",
              "submitAction": "updateProduct",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "section-set-highlights",
      "type": "section",
      "sectionName": "section-set-highlights",
      "titleKey": "section.set.highlights.title",
      "mode": "form",
      "order": 4,
      "organisms": [
        {
          "id": "org-highlights-form",
          "type": "organism",
          "organismName": "setHighlightsForm",
          "titleKey": "org.highlights.form.title",
          "purpose": "Marcar ou desmarcar produtos como destaque, verificando que apenas produtos disponíveis podem ser destacados",
          "userActions": [
            "setProductHighlights"
          ],
          "requiredEntities": [
            "Product"
          ],
          "readsFields": [],
          "writesFields": [
            "productIds",
            "highlighted"
          ],
          "rulesApplied": [
            "only available products can be highlighted"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-set-highlights",
              "intent": "commandForm",
              "stateKey": "ui.productManagement.action.setProductHighlights.status",
              "submitAction": "setProductHighlights",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "tabular_classic",
  "visualStyle": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja",
  "msgKeys": [
    "action.browseProducts.label",
    "action.createProduct.error",
    "action.createProduct.label",
    "action.createProduct.success",
    "action.setProductHighlights.error",
    "action.setProductHighlights.label",
    "action.setProductHighlights.success",
    "action.updateProduct.error",
    "action.updateProduct.label",
    "action.updateProduct.success",
    "column.categoryName.label",
    "column.highlighted.label",
    "column.name.label",
    "column.petTypeName.label",
    "column.price.label",
    "column.status.label",
    "empty.productList",
    "field.categoryId.label",
    "field.description.label",
    "field.highlighted.label",
    "field.name.label",
    "field.petTypeId.label",
    "field.price.label",
    "field.priceMax.label",
    "field.priceMin.label",
    "field.productId.label",
    "field.productIds.label",
    "field.searchTerm.label",
    "field.status.label",
    "org.create.form.title",
    "org.highlights.form.title",
    "org.product.table.title",
    "org.update.form.title",
    "page.productManagement.title",
    "section.create.product.title",
    "section.createProduct.title",
    "section.product.list.title",
    "section.productList.title",
    "section.set.highlights.title",
    "section.setHighlights.title",
    "section.update.product.title",
    "section.updateProduct.title"
  ],
  "layout": {
    "id": "page11-tabular_classic",
    "type": "page",
    "sections": [
      {
        "id": "section-product-list",
        "type": "section",
        "sectionName": "section-product-list",
        "titleKey": "section.product.list.title",
        "mode": "list",
        "order": 1,
        "organisms": [
          {
            "id": "org-product-table",
            "type": "organism",
            "organismName": "productTable",
            "titleKey": "org.product.table.title",
            "purpose": "Listar, buscar e filtrar produtos do catálogo com ações de criação, edição e destaque",
            "userActions": [
              "browseProducts",
              "createProduct",
              "updateProduct",
              "setProductHighlights"
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
            "rulesApplied": [],
            "order": 1,
            "intentions": [
              {
                "id": "intent-browse-products",
                "intent": "queryList",
                "order": 1,
                "titleKey": "section.productList.title",
                "source": "ui.productManagement.data.browseProducts",
                "binding": "db-browseProducts",
                "action": "browseProducts",
                "emptyKey": "empty.productList",
                "displayHint": "visible",
                "stateKey": "ui.productManagement.data.browseProducts",
                "fields": [],
                "columns": [
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "column.name.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-price",
                    "field": "price",
                    "labelKey": "column.price.label",
                    "order": 2,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-petTypeName",
                    "field": "petTypeName",
                    "labelKey": "column.petTypeName.label",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-categoryName",
                    "field": "categoryName",
                    "labelKey": "column.categoryName.label",
                    "order": 4,
                    "required": false,
                    "inputType": "text",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-highlighted",
                    "field": "highlighted",
                    "labelKey": "column.highlighted.label",
                    "order": 5,
                    "required": false,
                    "inputType": "checkbox",
                    "format": "boolean",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "column.status.label",
                    "order": 6,
                    "required": false,
                    "inputType": "text",
                    "format": "enum:available,unavailable",
                    "source": "ui.productManagement.data.browseProducts",
                    "stateKey": "ui.productManagement.data.browseProducts"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-searchTerm",
                    "field": "searchTerm",
                    "labelKey": "field.searchTerm.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "set.browseProductsSearchTerm",
                    "stateKey": "ui.productManagement.input.browseProducts.searchTerm"
                  },
                  {
                    "id": "flt-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "source": "set.browseProductsPetTypeId",
                    "stateKey": "ui.productManagement.input.browseProducts.petTypeId"
                  },
                  {
                    "id": "flt-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 3,
                    "required": false,
                    "inputType": "select",
                    "source": "set.browseProductsCategoryId",
                    "stateKey": "ui.productManagement.input.browseProducts.categoryId"
                  },
                  {
                    "id": "flt-priceMin",
                    "field": "priceMin",
                    "labelKey": "field.priceMin.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.browseProductsPriceMin",
                    "stateKey": "ui.productManagement.input.browseProducts.priceMin"
                  },
                  {
                    "id": "flt-priceMax",
                    "field": "priceMax",
                    "labelKey": "field.priceMax.label",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.browseProductsPriceMax",
                    "stateKey": "ui.productManagement.input.browseProducts.priceMax"
                  },
                  {
                    "id": "flt-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 6,
                    "required": false,
                    "inputType": "select",
                    "format": "enum:available,unavailable",
                    "source": "set.browseProductsStatus",
                    "stateKey": "ui.productManagement.input.browseProducts.status"
                  },
                  {
                    "id": "flt-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 7,
                    "required": false,
                    "inputType": "select",
                    "format": "boolean",
                    "source": "set.browseProductsHighlighted",
                    "stateKey": "ui.productManagement.input.browseProducts.highlighted"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-create",
                    "action": "createProduct",
                    "labelKey": "action.createProduct.label",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "createProduct"
                  },
                  {
                    "id": "tb-highlights",
                    "action": "setProductHighlights",
                    "labelKey": "action.setProductHighlights.label",
                    "order": 2,
                    "displayHint": "secondary",
                    "actionKey": "setProductHighlights"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra-edit",
                    "action": "updateProduct",
                    "labelKey": "action.updateProduct.label",
                    "order": 1,
                    "displayHint": "icon",
                    "actionKey": "updateProduct"
                  }
                ],
                "actions": [
                  {
                    "id": "act-search",
                    "action": "browseProducts",
                    "labelKey": "action.browseProducts.label",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "browseProducts"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "section-create-product",
        "type": "section",
        "sectionName": "section-create-product",
        "titleKey": "section.create.product.title",
        "mode": "form",
        "order": 2,
        "organisms": [
          {
            "id": "org-create-form",
            "type": "organism",
            "organismName": "createProductForm",
            "titleKey": "org.create.form.title",
            "purpose": "Cadastrar novo produto no catálogo com nome, descrição, preço, tipo de pet, categoria, destaque e status",
            "userActions": [
              "createProduct"
            ],
            "requiredEntities": [
              "Product",
              "PetType",
              "Category"
            ],
            "readsFields": [],
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
              "name, price, petTypeId, categoryId are required",
              "highlighted requires status=available"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-create-product",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "section.createProduct.title",
                "binding": "db-createProduct",
                "submitAction": "createProduct",
                "displayHint": "hidden",
                "stateKey": "ui.productManagement.action.createProduct.status",
                "fields": [
                  {
                    "id": "fld-create-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 1,
                    "required": true,
                    "inputType": "text",
                    "source": "set.createProductName",
                    "stateKey": "ui.productManagement.input.createProduct.name"
                  },
                  {
                    "id": "fld-create-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 2,
                    "required": false,
                    "inputType": "textarea",
                    "source": "set.createProductDescription",
                    "stateKey": "ui.productManagement.input.createProduct.description"
                  },
                  {
                    "id": "fld-create-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 3,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.createProductPrice",
                    "stateKey": "ui.productManagement.input.createProduct.price"
                  },
                  {
                    "id": "fld-create-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 4,
                    "required": true,
                    "inputType": "select",
                    "source": "set.createProductPetTypeId",
                    "stateKey": "ui.productManagement.input.createProduct.petTypeId"
                  },
                  {
                    "id": "fld-create-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 5,
                    "required": true,
                    "inputType": "select",
                    "source": "set.createProductCategoryId",
                    "stateKey": "ui.productManagement.input.createProduct.categoryId"
                  },
                  {
                    "id": "fld-create-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 6,
                    "required": false,
                    "inputType": "checkbox",
                    "format": "boolean",
                    "source": "set.createProductHighlighted",
                    "stateKey": "ui.productManagement.input.createProduct.highlighted"
                  },
                  {
                    "id": "fld-create-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 7,
                    "required": false,
                    "inputType": "select",
                    "format": "enum:available,unavailable",
                    "source": "set.createProductStatus",
                    "stateKey": "ui.productManagement.input.createProduct.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-submit-create",
                    "action": "createProduct",
                    "labelKey": "action.createProduct.label",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "createProduct"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "section-update-product",
        "type": "section",
        "sectionName": "section-update-product",
        "titleKey": "section.update.product.title",
        "mode": "form",
        "order": 3,
        "organisms": [
          {
            "id": "org-update-form",
            "type": "organism",
            "organismName": "updateProductForm",
            "titleKey": "org.update.form.title",
            "purpose": "Editar produto existente selecionado na lista, com preenchimento automático dos campos",
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
              "productId sourced from selectedEntity, not manual input",
              "name, price, petTypeId, categoryId are required",
              "highlighted requires status=available"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-update-product",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "section.updateProduct.title",
                "binding": "db-updateProduct",
                "submitAction": "updateProduct",
                "displayHint": "hidden",
                "stateKey": "ui.productManagement.action.updateProduct.status",
                "fields": [
                  {
                    "id": "fld-update-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 1,
                    "required": true,
                    "inputType": "hidden",
                    "source": "set.updateProductProductId",
                    "stateKey": "ui.productManagement.input.updateProduct.productId"
                  },
                  {
                    "id": "fld-update-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 2,
                    "required": true,
                    "inputType": "text",
                    "source": "set.updateProductName",
                    "stateKey": "ui.productManagement.input.updateProduct.name"
                  },
                  {
                    "id": "fld-update-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 3,
                    "required": false,
                    "inputType": "textarea",
                    "source": "set.updateProductDescription",
                    "stateKey": "ui.productManagement.input.updateProduct.description"
                  },
                  {
                    "id": "fld-update-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 4,
                    "required": true,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.updateProductPrice",
                    "stateKey": "ui.productManagement.input.updateProduct.price"
                  },
                  {
                    "id": "fld-update-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 5,
                    "required": true,
                    "inputType": "select",
                    "source": "set.updateProductPetTypeId",
                    "stateKey": "ui.productManagement.input.updateProduct.petTypeId"
                  },
                  {
                    "id": "fld-update-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 6,
                    "required": true,
                    "inputType": "select",
                    "source": "set.updateProductCategoryId",
                    "stateKey": "ui.productManagement.input.updateProduct.categoryId"
                  },
                  {
                    "id": "fld-update-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 7,
                    "required": false,
                    "inputType": "checkbox",
                    "format": "boolean",
                    "source": "set.updateProductHighlighted",
                    "stateKey": "ui.productManagement.input.updateProduct.highlighted"
                  },
                  {
                    "id": "fld-update-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 8,
                    "required": false,
                    "inputType": "select",
                    "format": "enum:available,unavailable",
                    "source": "set.updateProductStatus",
                    "stateKey": "ui.productManagement.input.updateProduct.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-submit-update",
                    "action": "updateProduct",
                    "labelKey": "action.updateProduct.label",
                    "order": 1,
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
        "id": "section-set-highlights",
        "type": "section",
        "sectionName": "section-set-highlights",
        "titleKey": "section.set.highlights.title",
        "mode": "form",
        "order": 4,
        "organisms": [
          {
            "id": "org-highlights-form",
            "type": "organism",
            "organismName": "setHighlightsForm",
            "titleKey": "org.highlights.form.title",
            "purpose": "Marcar ou desmarcar produtos como destaque, verificando que apenas produtos disponíveis podem ser destacados",
            "userActions": [
              "setProductHighlights"
            ],
            "requiredEntities": [
              "Product"
            ],
            "readsFields": [],
            "writesFields": [
              "productIds",
              "highlighted"
            ],
            "rulesApplied": [
              "only available products can be highlighted"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "intent-set-highlights",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "section.setHighlights.title",
                "binding": "db-setProductHighlights",
                "submitAction": "setProductHighlights",
                "displayHint": "hidden",
                "stateKey": "ui.productManagement.action.setProductHighlights.status",
                "fields": [
                  {
                    "id": "fld-highlights-productIds",
                    "field": "productIds",
                    "labelKey": "field.productIds.label",
                    "order": 1,
                    "required": true,
                    "inputType": "text",
                    "source": "set.setProductHighlightsProductIds",
                    "stateKey": "ui.productManagement.input.setProductHighlights.productIds"
                  },
                  {
                    "id": "fld-highlights-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 2,
                    "required": true,
                    "inputType": "select",
                    "format": "boolean",
                    "source": "set.setProductHighlightsHighlighted",
                    "stateKey": "ui.productManagement.input.setProductHighlights.highlighted"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-submit-highlights",
                    "action": "setProductHighlights",
                    "labelKey": "action.setProductHighlights.label",
                    "order": 1,
                    "displayHint": "primary",
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
      "id": "db-browseProducts",
      "source": "query",
      "entity": "Product",
      "command": "browseProducts",
      "description": "Lista produtos do catálogo com filtros de busca",
      "stateKey": "ui.productManagement.data.browseProducts",
      "inputStateKeys": [
        "ui.productManagement.input.browseProducts.searchTerm",
        "ui.productManagement.input.browseProducts.petTypeId",
        "ui.productManagement.input.browseProducts.categoryId",
        "ui.productManagement.input.browseProducts.priceMin",
        "ui.productManagement.input.browseProducts.priceMax",
        "ui.productManagement.input.browseProducts.status",
        "ui.productManagement.input.browseProducts.highlighted"
      ]
    },
    {
      "id": "db-createProduct",
      "source": "command",
      "entity": "Product",
      "command": "createProduct",
      "description": "Cadastra um novo produto no catálogo",
      "stateKey": "ui.productManagement.output.createProduct",
      "inputStateKeys": [
        "ui.productManagement.input.createProduct.name",
        "ui.productManagement.input.createProduct.description",
        "ui.productManagement.input.createProduct.price",
        "ui.productManagement.input.createProduct.petTypeId",
        "ui.productManagement.input.createProduct.categoryId",
        "ui.productManagement.input.createProduct.highlighted",
        "ui.productManagement.input.createProduct.status"
      ]
    },
    {
      "id": "db-updateProduct",
      "source": "command",
      "entity": "Product",
      "command": "updateProduct",
      "description": "Edita um produto existente no catálogo",
      "stateKey": "ui.productManagement.output.updateProduct",
      "inputStateKeys": [
        "ui.productManagement.input.updateProduct.productId",
        "ui.productManagement.input.updateProduct.name",
        "ui.productManagement.input.updateProduct.description",
        "ui.productManagement.input.updateProduct.price",
        "ui.productManagement.input.updateProduct.petTypeId",
        "ui.productManagement.input.updateProduct.categoryId",
        "ui.productManagement.input.updateProduct.highlighted",
        "ui.productManagement.input.updateProduct.status"
      ]
    },
    {
      "id": "db-setProductHighlights",
      "source": "command",
      "entity": "Product",
      "command": "setProductHighlights",
      "description": "Marca ou desmarca produtos como destaque",
      "stateKey": "ui.productManagement.output.setProductHighlights",
      "inputStateKeys": [
        "ui.productManagement.input.setProductHighlights.productIds",
        "ui.productManagement.input.setProductHighlights.highlighted"
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
      "_102049_/l2/petShop/web/shared/productManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "productManagement__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
