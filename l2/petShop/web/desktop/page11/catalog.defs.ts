/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/catalog.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "catalog",
  "pageName": "Catálogo de produtos",
  "baseClassName": "PetShopCatalogBase",
  "actor": "cliente",
  "purpose": "Executar Catálogo de produtos.",
  "capabilities": [
    "reservationLifecycle",
    "browseFeaturedProducts",
    "browseProducts",
    "viewProductDetails"
  ],
  "flowRefs": {
    "experienceFlows": [
      "reservationLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "reservationLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "catalog",
    "workspaceKind": "workflow",
    "workflowId": "reservationLifecycle",
    "actor": "cliente",
    "entity": "Product",
    "owners": [
      {
        "kind": "workflow",
        "id": "reservationLifecycle",
        "defPath": "_102049_/l4/petShop/workflows/reservationLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseFeaturedProducts",
        "defPath": "_102049_/l4/petShop/operations/browseFeaturedProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseProducts",
        "defPath": "_102049_/l4/petShop/operations/browseProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewProductDetails",
        "defPath": "_102049_/l4/petShop/operations/viewProductDetails.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createReservation",
        "defPath": "_102049_/l4/petShop/operations/createReservation.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O atendente visualiza as reservas pendentes recebidas dos clientes para saber quais precisam ser confirmadas.",
        "O atendente revisa os itens e os dados de contato do cliente e confirma a reserva, sinalizando que a loja aceitou e vai preparar os produtos.",
        "O atendente separa fisicamente os produtos reservados e verifica a disponibilidade real no estoque.",
        "O cliente chega à loja para retirada e o atendente localiza a reserva pelo número ou pelo nome e telefone do cliente.",
        "O atendente revisa os itens com o cliente, calcula o valor total e processa o pagamento presencial, marcando a reserva como paga e entregue."
      ],
      "operations": [
        {
          "operationId": "browseFeaturedProducts",
          "commandName": "browseFeaturedProducts",
          "steps": [
            "O cliente acessa a página inicial do pet shop",
            "O sistema exibe a vitrine com produtos marcados como destaque pelo processo administrativo externo",
            "O cliente pode aplicar filtros opcionais de categoria, tipo de pet, nome e faixa de preço para refinar a visualização",
            "O cliente seleciona um produto em destaque para ver seus detalhes"
          ]
        },
        {
          "operationId": "browseProducts",
          "commandName": "browseProducts",
          "steps": [
            "Acessa a listagem completa de produtos do catálogo",
            "Digita um nome ou parte do nome para pesquisar produtos",
            "Seleciona tipo de pet e/ou categoria para filtrar os resultados",
            "Define uma faixa de preço para refinar a busca",
            "Visualiza a lista paginada de produtos que atendem a todos os critérios aplicados"
          ]
        },
        {
          "operationId": "viewProductDetails",
          "commandName": "viewProductDetails",
          "steps": [
            "O cliente seleciona um produto na vitrine de destaques ou na lista filtrada do catálogo",
            "O sistema recupera o produto pelo seu identificador junto com o nome da categoria e do tipo de pet associados",
            "O sistema retorna os detalhes completos do produto incluindo nome, preço, flag de destaque, categoria, tipo de pet e datas de cadastro e atualização"
          ]
        },
        {
          "operationId": "createReservation",
          "commandName": "createReservation",
          "steps": [
            "O cliente visualiza os detalhes de um produto e decide reservá-lo para retirada presencial",
            "Informa a quantidade desejada do produto",
            "Fornece seu nome e telefone de contato para identificação na loja",
            "Revisa os itens e seus dados e confirma a reserva",
            "Recebe o número da reserva como comprovante para apresentar na retirada"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_vitrine",
      "type": "section",
      "sectionName": "sec_vitrine",
      "titleKey": "sec.vitrine.title",
      "mode": "view",
      "order": 1,
      "organisms": [
        {
          "id": "org_vitrine_cards",
          "type": "list",
          "organismName": "featuredCards",
          "titleKey": "org.vitrine.cards.title",
          "purpose": "Exibir produtos em destaque em cartões móveis",
          "userActions": [
            "featuredProducts",
            "productDetails"
          ],
          "requiredEntities": [
            "Product"
          ],
          "readsFields": [
            "productId",
            "name",
            "price",
            "isFeatured",
            "categoryId",
            "petTypeId"
          ],
          "writesFields": [],
          "rulesApplied": [
            "mobileCards"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int_vitrine_list",
              "intent": "queryList",
              "stateKey": "ui.catalog.data.featuredProducts",
              "action": "featuredProducts",
              "order": 1
            }
          ]
        },
        {
          "id": "org_vitrine_filters",
          "type": "filter",
          "organismName": "featuredFilters",
          "titleKey": "org.vitrine.filters.title",
          "purpose": "Filtrar produtos em destaque",
          "userActions": [
            "featuredProducts"
          ],
          "requiredEntities": [
            "Product"
          ],
          "readsFields": [
            "categoryId",
            "petTypeId",
            "name",
            "priceMin",
            "priceMax",
            "page",
            "pageSize"
          ],
          "writesFields": [],
          "rulesApplied": [
            "compactFilters"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "int_vitrine_filters",
              "intent": "filterForm",
              "stateKey": "ui.catalog.data.featuredProducts",
              "action": "featuredProducts",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec_catalogo",
      "type": "section",
      "sectionName": "sec_catalogo",
      "titleKey": "sec.catalogo.title",
      "mode": "view",
      "order": 2,
      "organisms": [
        {
          "id": "org_catalogo_cards",
          "type": "list",
          "organismName": "catalogCards",
          "titleKey": "org.catalogo.cards.title",
          "purpose": "Exibir catálogo completo em cartões móveis",
          "userActions": [
            "browseCatalog",
            "productDetails"
          ],
          "requiredEntities": [
            "Product",
            "ProductCategory",
            "PetType"
          ],
          "readsFields": [
            "items",
            "total",
            "page",
            "pageSize"
          ],
          "writesFields": [],
          "rulesApplied": [
            "mobileCards"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int_catalogo_list",
              "intent": "queryList",
              "stateKey": "ui.catalog.data.browseCatalog",
              "action": "browseCatalog",
              "order": 1
            }
          ]
        },
        {
          "id": "org_catalogo_filters",
          "type": "filter",
          "organismName": "catalogFilters",
          "titleKey": "org.catalogo.filters.title",
          "purpose": "Pesquisar e filtrar produtos do catálogo",
          "userActions": [
            "browseCatalog"
          ],
          "requiredEntities": [
            "Product",
            "ProductCategory",
            "PetType"
          ],
          "readsFields": [
            "searchName",
            "petTypeId",
            "categoryId",
            "minPrice",
            "maxPrice",
            "page",
            "pageSize"
          ],
          "writesFields": [],
          "rulesApplied": [
            "compactFilters"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "int_catalogo_filters",
              "intent": "filterForm",
              "stateKey": "ui.catalog.data.browseCatalog",
              "action": "browseCatalog",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec_detalhe_reserva",
      "type": "section",
      "sectionName": "sec_detalhe_reserva",
      "titleKey": "sec.detalhe.reserva.title",
      "mode": "view",
      "order": 3,
      "organisms": [
        {
          "id": "org_detalhe_card",
          "type": "detail",
          "organismName": "productDetailsCard",
          "titleKey": "org.detalhe.card.title",
          "purpose": "Mostrar detalhes do produto selecionado",
          "userActions": [
            "productDetails"
          ],
          "requiredEntities": [
            "Product",
            "ProductCategory",
            "PetType"
          ],
          "readsFields": [
            "productId",
            "name",
            "price",
            "isFeatured",
            "categoryId",
            "categoryName",
            "petTypeId",
            "petTypeName",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "readBeforeWrite"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int_detalhe_view",
              "intent": "detailView",
              "stateKey": "ui.catalog.data.productDetails",
              "action": "productDetails",
              "order": 1
            }
          ]
        },
        {
          "id": "org_reserva_form",
          "type": "form",
          "organismName": "reserveProductForm",
          "titleKey": "org.reserva.form.title",
          "purpose": "Reservar o produto para retirada na loja",
          "userActions": [
            "reserveProduct"
          ],
          "requiredEntities": [
            "Reservation",
            "ReservationItem",
            "Product"
          ],
          "readsFields": [
            "customerName",
            "customerPhone",
            "productId",
            "quantity"
          ],
          "writesFields": [
            "reservationId",
            "status"
          ],
          "rulesApplied": [
            "contextDerivedHidden",
            "confirmationOnSubmit"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "int_reserva_form",
              "intent": "commandForm",
              "submitAction": "reserveProduct",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "mobile_cards",
  "visualStyle": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status",
  "layout": {
    "id": "mobile_cards",
    "type": "page",
    "sections": [
      {
        "id": "sec_vitrine",
        "type": "section",
        "sectionName": "sec_vitrine",
        "titleKey": "sec.vitrine.title",
        "mode": "view",
        "order": 1,
        "organisms": [
          {
            "id": "org_vitrine_cards",
            "type": "list",
            "organismName": "featuredCards",
            "titleKey": "org.vitrine.cards.title",
            "purpose": "Exibir produtos em destaque em cartões móveis",
            "userActions": [
              "featuredProducts",
              "productDetails"
            ],
            "requiredEntities": [
              "Product"
            ],
            "readsFields": [
              "productId",
              "name",
              "price",
              "isFeatured",
              "categoryId",
              "petTypeId"
            ],
            "writesFields": [],
            "rulesApplied": [
              "mobileCards"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int_vitrine_list",
                "intent": "queryList",
                "order": 1,
                "titleKey": "int.vitrine.list.title",
                "action": "featuredProducts",
                "emptyKey": "int.vitrine.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "col_feat_name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.catalog.data.featuredProducts"
                  },
                  {
                    "id": "col_feat_price",
                    "field": "price",
                    "labelKey": "field.price",
                    "order": 2,
                    "required": false,
                    "stateKey": "ui.catalog.data.featuredProducts"
                  },
                  {
                    "id": "col_feat_featured",
                    "field": "isFeatured",
                    "labelKey": "field.isFeatured",
                    "order": 3,
                    "required": false,
                    "stateKey": "ui.catalog.data.featuredProducts"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "row_feat_details",
                    "action": "productDetails",
                    "labelKey": "action.productDetails",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "productDetails"
                  }
                ],
                "actions": [],
                "stateKey": "ui.catalog.data.featuredProducts"
              }
            ]
          },
          {
            "id": "org_vitrine_filters",
            "type": "filter",
            "organismName": "featuredFilters",
            "titleKey": "org.vitrine.filters.title",
            "purpose": "Filtrar produtos em destaque",
            "userActions": [
              "featuredProducts"
            ],
            "requiredEntities": [
              "Product"
            ],
            "readsFields": [
              "categoryId",
              "petTypeId",
              "name",
              "priceMin",
              "priceMax",
              "page",
              "pageSize"
            ],
            "writesFields": [],
            "rulesApplied": [
              "compactFilters"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "int_vitrine_filters",
                "intent": "filterForm",
                "order": 1,
                "titleKey": "int.vitrine.filters.title",
                "action": "featuredProducts",
                "emptyKey": "int.vitrine.filters.empty",
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt_feat_category",
                    "field": "categoryId",
                    "labelKey": "field.categoryId",
                    "order": 1,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.catalog.input.featuredProducts.categoryId"
                  },
                  {
                    "id": "flt_feat_pet",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.catalog.input.featuredProducts.petTypeId"
                  },
                  {
                    "id": "flt_feat_name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.input.featuredProducts.name"
                  },
                  {
                    "id": "flt_feat_min",
                    "field": "priceMin",
                    "labelKey": "field.priceMin",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.featuredProducts.priceMin"
                  },
                  {
                    "id": "flt_feat_max",
                    "field": "priceMax",
                    "labelKey": "field.priceMax",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.featuredProducts.priceMax"
                  },
                  {
                    "id": "flt_feat_page",
                    "field": "page",
                    "labelKey": "field.page",
                    "order": 6,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.featuredProducts.page"
                  },
                  {
                    "id": "flt_feat_pageSize",
                    "field": "pageSize",
                    "labelKey": "field.pageSize",
                    "order": 7,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.featuredProducts.pageSize"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb_feat_apply",
                    "action": "featuredProducts",
                    "labelKey": "action.applyFilters",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "featuredProducts"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.catalog.data.featuredProducts"
              }
            ]
          }
        ]
      },
      {
        "id": "sec_catalogo",
        "type": "section",
        "sectionName": "sec_catalogo",
        "titleKey": "sec.catalogo.title",
        "mode": "view",
        "order": 2,
        "organisms": [
          {
            "id": "org_catalogo_cards",
            "type": "list",
            "organismName": "catalogCards",
            "titleKey": "org.catalogo.cards.title",
            "purpose": "Exibir catálogo completo em cartões móveis",
            "userActions": [
              "browseCatalog",
              "productDetails"
            ],
            "requiredEntities": [
              "Product",
              "ProductCategory",
              "PetType"
            ],
            "readsFields": [
              "items",
              "total",
              "page",
              "pageSize"
            ],
            "writesFields": [],
            "rulesApplied": [
              "mobileCards"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int_catalogo_list",
                "intent": "queryList",
                "order": 1,
                "titleKey": "int.catalogo.list.title",
                "action": "browseCatalog",
                "emptyKey": "int.catalogo.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "col_cat_items",
                    "field": "items",
                    "labelKey": "field.items",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.catalog.data.browseCatalog"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "row_cat_details",
                    "action": "productDetails",
                    "labelKey": "action.productDetails",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "productDetails"
                  }
                ],
                "actions": [],
                "stateKey": "ui.catalog.data.browseCatalog"
              }
            ]
          },
          {
            "id": "org_catalogo_filters",
            "type": "filter",
            "organismName": "catalogFilters",
            "titleKey": "org.catalogo.filters.title",
            "purpose": "Pesquisar e filtrar produtos do catálogo",
            "userActions": [
              "browseCatalog"
            ],
            "requiredEntities": [
              "Product",
              "ProductCategory",
              "PetType"
            ],
            "readsFields": [
              "searchName",
              "petTypeId",
              "categoryId",
              "minPrice",
              "maxPrice",
              "page",
              "pageSize"
            ],
            "writesFields": [],
            "rulesApplied": [
              "compactFilters"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "int_catalogo_filters",
                "intent": "filterForm",
                "order": 1,
                "titleKey": "int.catalogo.filters.title",
                "action": "browseCatalog",
                "emptyKey": "int.catalogo.filters.empty",
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt_cat_search",
                    "field": "searchName",
                    "labelKey": "field.searchName",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.input.browseCatalog.searchName"
                  },
                  {
                    "id": "flt_cat_pet",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.catalog.input.browseCatalog.petTypeId"
                  },
                  {
                    "id": "flt_cat_category",
                    "field": "categoryId",
                    "labelKey": "field.categoryId",
                    "order": 3,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.catalog.input.browseCatalog.categoryId"
                  },
                  {
                    "id": "flt_cat_min",
                    "field": "minPrice",
                    "labelKey": "field.minPrice",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.browseCatalog.minPrice"
                  },
                  {
                    "id": "flt_cat_max",
                    "field": "maxPrice",
                    "labelKey": "field.maxPrice",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.browseCatalog.maxPrice"
                  },
                  {
                    "id": "flt_cat_page",
                    "field": "page",
                    "labelKey": "field.page",
                    "order": 6,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.browseCatalog.page"
                  },
                  {
                    "id": "flt_cat_pageSize",
                    "field": "pageSize",
                    "labelKey": "field.pageSize",
                    "order": 7,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.browseCatalog.pageSize"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb_cat_apply",
                    "action": "browseCatalog",
                    "labelKey": "action.applyFilters",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "browseCatalog"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.catalog.data.browseCatalog"
              }
            ]
          }
        ]
      },
      {
        "id": "sec_detalhe_reserva",
        "type": "section",
        "sectionName": "sec_detalhe_reserva",
        "titleKey": "sec.detalhe.reserva.title",
        "mode": "view",
        "order": 3,
        "organisms": [
          {
            "id": "org_detalhe_card",
            "type": "detail",
            "organismName": "productDetailsCard",
            "titleKey": "org.detalhe.card.title",
            "purpose": "Mostrar detalhes do produto selecionado",
            "userActions": [
              "productDetails"
            ],
            "requiredEntities": [
              "Product",
              "ProductCategory",
              "PetType"
            ],
            "readsFields": [
              "productId",
              "name",
              "price",
              "isFeatured",
              "categoryId",
              "categoryName",
              "petTypeId",
              "petTypeName",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "readBeforeWrite"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int_detalhe_view",
                "intent": "detailView",
                "order": 1,
                "titleKey": "int.detalhe.view.title",
                "action": "productDetails",
                "emptyKey": "int.detalhe.view.empty",
                "fields": [
                  {
                    "id": "fld_det_name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld_det_price",
                    "field": "price",
                    "labelKey": "field.price",
                    "order": 2,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld_det_featured",
                    "field": "isFeatured",
                    "labelKey": "field.isFeatured",
                    "order": 3,
                    "required": false,
                    "inputType": "checkbox",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld_det_category",
                    "field": "categoryName",
                    "labelKey": "field.categoryName",
                    "order": 4,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld_det_pet",
                    "field": "petTypeName",
                    "labelKey": "field.petTypeName",
                    "order": 5,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld_det_created",
                    "field": "createdAt",
                    "labelKey": "field.createdAt",
                    "order": 6,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld_det_updated",
                    "field": "updatedAt",
                    "labelKey": "field.updatedAt",
                    "order": 7,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.catalog.data.productDetails"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.catalog.data.productDetails"
              }
            ]
          },
          {
            "id": "org_reserva_form",
            "type": "form",
            "organismName": "reserveProductForm",
            "titleKey": "org.reserva.form.title",
            "purpose": "Reservar o produto para retirada na loja",
            "userActions": [
              "reserveProduct"
            ],
            "requiredEntities": [
              "Reservation",
              "ReservationItem",
              "Product"
            ],
            "readsFields": [
              "customerName",
              "customerPhone",
              "productId",
              "quantity"
            ],
            "writesFields": [
              "reservationId",
              "status"
            ],
            "rulesApplied": [
              "contextDerivedHidden",
              "confirmationOnSubmit"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "int_reserva_form",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "int.reserva.form.title",
                "submitAction": "reserveProduct",
                "emptyKey": "int.reserva.form.empty",
                "fields": [
                  {
                    "id": "fld_res_product",
                    "field": "productId",
                    "labelKey": "field.productId",
                    "order": 1,
                    "required": true,
                    "inputType": "hidden",
                    "stateKey": "ui.catalog.input.reserveProduct.productId"
                  },
                  {
                    "id": "fld_res_qty",
                    "field": "quantity",
                    "labelKey": "field.quantity",
                    "order": 2,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.reserveProduct.quantity"
                  },
                  {
                    "id": "fld_res_name",
                    "field": "customerName",
                    "labelKey": "field.customerName",
                    "order": 3,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.catalog.input.reserveProduct.customerName"
                  },
                  {
                    "id": "fld_res_phone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone",
                    "order": 4,
                    "required": true,
                    "inputType": "tel",
                    "stateKey": "ui.catalog.input.reserveProduct.customerPhone"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_res_submit",
                    "action": "reserveProduct",
                    "labelKey": "action.reserveProduct",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "reserveProduct"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "catalog__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/catalog.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/catalog.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/catalog.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "catalog__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
