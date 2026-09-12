/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/catalog.defs.ts" enhancement="_blank"/>

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
      "id": "sec-vitrine",
      "type": "section",
      "sectionName": "vitrine",
      "titleKey": "section.vitrine.title",
      "mode": "view",
      "order": 1,
      "organisms": [
        {
          "id": "org-vitrine-featured",
          "type": "organism",
          "organismName": "vitrineDestaques",
          "titleKey": "organism.vitrine.featured.title",
          "purpose": "Exibir produtos em destaque na vitrine com filtros opcionais para o cliente explorar rapidamente",
          "userActions": [
            "featuredProducts"
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
            "petTypeId",
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
            "recognition-over-recall",
            "read-before-write",
            "smart-defaults"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-featured-list",
              "intent": "queryList",
              "stateKey": "ui.catalog.data.featuredProducts",
              "action": "featuredProducts",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec-catalogo",
      "type": "section",
      "sectionName": "catalogo",
      "titleKey": "section.catalogo.title",
      "mode": "view",
      "order": 2,
      "organisms": [
        {
          "id": "org-catalogo-browse",
          "type": "organism",
          "organismName": "catalogoCompleto",
          "titleKey": "organism.catalogo.browse.title",
          "purpose": "Permitir pesquisa e filtragem de todos os produtos do catálogo com listagem paginada",
          "userActions": [
            "browseCatalog"
          ],
          "requiredEntities": [
            "Product"
          ],
          "readsFields": [
            "searchName",
            "petTypeId",
            "categoryId",
            "minPrice",
            "maxPrice",
            "page",
            "pageSize",
            "items",
            "total",
            "name",
            "price",
            "isFeatured",
            "productId"
          ],
          "writesFields": [],
          "rulesApplied": [
            "recognition-over-recall",
            "smart-defaults",
            "field-triage"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-browse-list",
              "intent": "queryList",
              "stateKey": "ui.catalog.data.browseCatalog",
              "action": "browseCatalog",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec-detalhe-reserva",
      "type": "section",
      "sectionName": "detalheReserva",
      "titleKey": "section.detalheReserva.title",
      "mode": "edit",
      "order": 3,
      "organisms": [
        {
          "id": "org-product-details",
          "type": "organism",
          "organismName": "detalheProduto",
          "titleKey": "organism.detalhe.product.title",
          "purpose": "Mostrar os detalhes completos do produto selecionado para apoiar a decisão de reserva",
          "userActions": [
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
            "categoryName",
            "petTypeId",
            "petTypeName",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "read-before-write",
            "summary-first",
            "field-triage"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-product-details",
              "intent": "queryDetail",
              "stateKey": "ui.catalog.data.productDetails",
              "action": "productDetails",
              "order": 1
            }
          ]
        },
        {
          "id": "org-reserve-product",
          "type": "organism",
          "organismName": "reservarProduto",
          "titleKey": "organism.detalhe.reserve.title",
          "purpose": "Permitir que o cliente reserve o produto selecionado informando quantidade e dados de contato",
          "userActions": [
            "reserveProduct"
          ],
          "requiredEntities": [
            "Reservation",
            "Product",
            "ReservationItem"
          ],
          "readsFields": [
            "productId",
            "name",
            "price",
            "quantity",
            "customerName",
            "customerPhone"
          ],
          "writesFields": [
            "customerName",
            "customerPhone",
            "productId",
            "quantity"
          ],
          "rulesApplied": [
            "field-triage",
            "error-prevention",
            "smart-defaults",
            "context-derived-hidden"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "int-reserve-form",
              "intent": "commandForm",
              "submitAction": "reserveProduct",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "goal_first",
  "visualStyle": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status",
  "layout": {
    "id": "catalog-page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "sec-vitrine",
        "type": "section",
        "sectionName": "vitrine",
        "titleKey": "section.vitrine.title",
        "mode": "view",
        "order": 1,
        "organisms": [
          {
            "id": "org-vitrine-featured",
            "type": "organism",
            "organismName": "vitrineDestaques",
            "titleKey": "organism.vitrine.featured.title",
            "purpose": "Exibir produtos em destaque na vitrine com filtros opcionais para o cliente explorar rapidamente",
            "userActions": [
              "featuredProducts"
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
              "petTypeId",
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
              "recognition-over-recall",
              "read-before-write",
              "smart-defaults"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-featured-list",
                "intent": "queryList",
                "order": 1,
                "titleKey": "section.vitrine.featured.title",
                "source": "ui.catalog.data.featuredProducts",
                "binding": "ui.catalog.data.featuredProducts",
                "action": "featuredProducts",
                "emptyKey": "section.vitrine.featured.empty",
                "displayHint": "card-board",
                "stateKey": "ui.catalog.data.featuredProducts",
                "fields": [],
                "columns": [
                  {
                    "id": "col-feat-name",
                    "field": "name",
                    "labelKey": "field.product.name",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.catalog.data.featuredProducts"
                  },
                  {
                    "id": "col-feat-price",
                    "field": "price",
                    "labelKey": "field.product.price",
                    "order": 2,
                    "required": false,
                    "format": "currency",
                    "stateKey": "ui.catalog.data.featuredProducts"
                  },
                  {
                    "id": "col-feat-featured",
                    "field": "isFeatured",
                    "labelKey": "field.product.isFeatured",
                    "order": 3,
                    "required": false,
                    "stateKey": "ui.catalog.data.featuredProducts"
                  },
                  {
                    "id": "col-feat-category",
                    "field": "categoryId",
                    "labelKey": "field.product.categoryId",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.catalog.data.featuredProducts"
                  },
                  {
                    "id": "col-feat-petType",
                    "field": "petTypeId",
                    "labelKey": "field.product.petTypeId",
                    "order": 5,
                    "required": false,
                    "stateKey": "ui.catalog.data.featuredProducts"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-feat-category",
                    "field": "categoryId",
                    "labelKey": "filter.featured.categoryId",
                    "order": 1,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.catalog.input.featuredProducts.categoryId"
                  },
                  {
                    "id": "flt-feat-petType",
                    "field": "petTypeId",
                    "labelKey": "filter.featured.petTypeId",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.catalog.input.featuredProducts.petTypeId"
                  },
                  {
                    "id": "flt-feat-name",
                    "field": "name",
                    "labelKey": "filter.featured.name",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.input.featuredProducts.name"
                  },
                  {
                    "id": "flt-feat-priceMin",
                    "field": "priceMin",
                    "labelKey": "filter.featured.priceMin",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.featuredProducts.priceMin"
                  },
                  {
                    "id": "flt-feat-priceMax",
                    "field": "priceMax",
                    "labelKey": "filter.featured.priceMax",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.featuredProducts.priceMax"
                  }
                ],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "row-feat-details",
                    "action": "productDetails",
                    "labelKey": "action.productDetails",
                    "order": 1,
                    "displayHint": "inline-row-command",
                    "actionKey": "productDetails"
                  }
                ],
                "actions": []
              }
            ]
          }
        ]
      },
      {
        "id": "sec-catalogo",
        "type": "section",
        "sectionName": "catalogo",
        "titleKey": "section.catalogo.title",
        "mode": "view",
        "order": 2,
        "organisms": [
          {
            "id": "org-catalogo-browse",
            "type": "organism",
            "organismName": "catalogoCompleto",
            "titleKey": "organism.catalogo.browse.title",
            "purpose": "Permitir pesquisa e filtragem de todos os produtos do catálogo com listagem paginada",
            "userActions": [
              "browseCatalog"
            ],
            "requiredEntities": [
              "Product"
            ],
            "readsFields": [
              "searchName",
              "petTypeId",
              "categoryId",
              "minPrice",
              "maxPrice",
              "page",
              "pageSize",
              "items",
              "total",
              "name",
              "price",
              "isFeatured",
              "productId"
            ],
            "writesFields": [],
            "rulesApplied": [
              "recognition-over-recall",
              "smart-defaults",
              "field-triage"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-browse-list",
                "intent": "queryList",
                "order": 1,
                "titleKey": "section.catalogo.browse.title",
                "source": "ui.catalog.data.browseCatalog",
                "binding": "ui.catalog.data.browseCatalog",
                "action": "browseCatalog",
                "emptyKey": "section.catalogo.browse.empty",
                "displayHint": "master-detail",
                "stateKey": "ui.catalog.data.browseCatalog",
                "fields": [],
                "columns": [
                  {
                    "id": "col-browse-name",
                    "field": "name",
                    "labelKey": "field.product.name",
                    "order": 1,
                    "required": false
                  },
                  {
                    "id": "col-browse-price",
                    "field": "price",
                    "labelKey": "field.product.price",
                    "order": 2,
                    "required": false,
                    "format": "currency"
                  },
                  {
                    "id": "col-browse-featured",
                    "field": "isFeatured",
                    "labelKey": "field.product.isFeatured",
                    "order": 3,
                    "required": false
                  },
                  {
                    "id": "col-browse-category",
                    "field": "categoryId",
                    "labelKey": "field.product.categoryId",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.catalog.input.browseCatalog.categoryId"
                  },
                  {
                    "id": "col-browse-petType",
                    "field": "petTypeId",
                    "labelKey": "field.product.petTypeId",
                    "order": 5,
                    "required": false,
                    "stateKey": "ui.catalog.input.browseCatalog.petTypeId"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-browse-searchName",
                    "field": "searchName",
                    "labelKey": "filter.browse.searchName",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.input.browseCatalog.searchName"
                  },
                  {
                    "id": "flt-browse-petType",
                    "field": "petTypeId",
                    "labelKey": "filter.browse.petTypeId",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.catalog.input.browseCatalog.petTypeId"
                  },
                  {
                    "id": "flt-browse-category",
                    "field": "categoryId",
                    "labelKey": "filter.browse.categoryId",
                    "order": 3,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.catalog.input.browseCatalog.categoryId"
                  },
                  {
                    "id": "flt-browse-minPrice",
                    "field": "minPrice",
                    "labelKey": "filter.browse.minPrice",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.browseCatalog.minPrice"
                  },
                  {
                    "id": "flt-browse-maxPrice",
                    "field": "maxPrice",
                    "labelKey": "filter.browse.maxPrice",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.browseCatalog.maxPrice"
                  }
                ],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "row-browse-details",
                    "action": "productDetails",
                    "labelKey": "action.productDetails",
                    "order": 1,
                    "displayHint": "inline-row-command",
                    "actionKey": "productDetails"
                  }
                ],
                "actions": []
              }
            ]
          }
        ]
      },
      {
        "id": "sec-detalhe-reserva",
        "type": "section",
        "sectionName": "detalheReserva",
        "titleKey": "section.detalheReserva.title",
        "mode": "edit",
        "order": 3,
        "organisms": [
          {
            "id": "org-product-details",
            "type": "organism",
            "organismName": "detalheProduto",
            "titleKey": "organism.detalhe.product.title",
            "purpose": "Mostrar os detalhes completos do produto selecionado para apoiar a decisão de reserva",
            "userActions": [
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
              "categoryName",
              "petTypeId",
              "petTypeName",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "read-before-write",
              "summary-first",
              "field-triage"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-product-details",
                "intent": "queryDetail",
                "order": 1,
                "titleKey": "section.detalhe.product.title",
                "source": "ui.catalog.data.productDetails",
                "binding": "ui.catalog.data.productDetails",
                "action": "productDetails",
                "emptyKey": "section.detalhe.product.empty",
                "displayHint": "summary-first",
                "stateKey": "ui.catalog.data.productDetails",
                "fields": [
                  {
                    "id": "fld-det-name",
                    "field": "name",
                    "labelKey": "field.product.name",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld-det-price",
                    "field": "price",
                    "labelKey": "field.product.price",
                    "order": 2,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld-det-featured",
                    "field": "isFeatured",
                    "labelKey": "field.product.isFeatured",
                    "order": 3,
                    "required": false,
                    "inputType": "boolean",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld-det-categoryName",
                    "field": "categoryName",
                    "labelKey": "field.product.categoryName",
                    "order": 4,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.data.productDetails"
                  },
                  {
                    "id": "fld-det-petTypeName",
                    "field": "petTypeName",
                    "labelKey": "field.product.petTypeName",
                    "order": 5,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.catalog.data.productDetails"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          },
          {
            "id": "org-reserve-product",
            "type": "organism",
            "organismName": "reservarProduto",
            "titleKey": "organism.detalhe.reserve.title",
            "purpose": "Permitir que o cliente reserve o produto selecionado informando quantidade e dados de contato",
            "userActions": [
              "reserveProduct"
            ],
            "requiredEntities": [
              "Reservation",
              "Product",
              "ReservationItem"
            ],
            "readsFields": [
              "productId",
              "name",
              "price",
              "quantity",
              "customerName",
              "customerPhone"
            ],
            "writesFields": [
              "customerName",
              "customerPhone",
              "productId",
              "quantity"
            ],
            "rulesApplied": [
              "field-triage",
              "error-prevention",
              "smart-defaults",
              "context-derived-hidden"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "int-reserve-form",
                "intent": "commandForm",
                "order": 1,
                "titleKey": "section.detalhe.reserve.title",
                "submitAction": "reserveProduct",
                "emptyKey": "section.detalhe.reserve.empty",
                "displayHint": "contextual-transition-actions",
                "fields": [
                  {
                    "id": "fld-res-quantity",
                    "field": "quantity",
                    "labelKey": "field.reserve.quantity",
                    "order": 1,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.catalog.input.reserveProduct.quantity"
                  },
                  {
                    "id": "fld-res-customerName",
                    "field": "customerName",
                    "labelKey": "field.reserve.customerName",
                    "order": 2,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.catalog.input.reserveProduct.customerName"
                  },
                  {
                    "id": "fld-res-customerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.reserve.customerPhone",
                    "order": 3,
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
                    "id": "act-reserve-submit",
                    "action": "reserveProduct",
                    "labelKey": "action.reserveProduct",
                    "order": 1,
                    "displayHint": "primary-button",
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
  "dataBindings": [
    {
      "id": "bind-featured",
      "source": "featuredProducts",
      "entity": "Product",
      "description": "Lista de produtos em destaque da vitrine",
      "stateKey": "ui.catalog.data.featuredProducts"
    },
    {
      "id": "bind-browse",
      "source": "browseCatalog",
      "entity": "Product",
      "description": "Resultado paginado da busca no catálogo",
      "stateKey": "ui.catalog.data.browseCatalog"
    },
    {
      "id": "bind-details",
      "source": "productDetails",
      "entity": "Product",
      "description": "Detalhes do produto selecionado",
      "stateKey": "ui.catalog.data.productDetails",
      "inputStateKeys": [
        "ui.catalog.input.productDetails.productId"
      ]
    },
    {
      "id": "bind-reserve",
      "source": "reserveProduct",
      "entity": "Reservation",
      "command": "reserveProduct",
      "description": "Comando de reserva do produto para retirada",
      "stateKey": "ui.catalog.output.reserveProduct",
      "inputStateKeys": [
        "ui.catalog.input.reserveProduct.customerName",
        "ui.catalog.input.reserveProduct.customerPhone",
        "ui.catalog.input.reserveProduct.productId",
        "ui.catalog.input.reserveProduct.quantity"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "catalog__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page21/catalog.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page21/catalog.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/catalog.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "catalog__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
