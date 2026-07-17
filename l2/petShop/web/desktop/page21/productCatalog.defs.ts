/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/productCatalog.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "productCatalog",
  "pageName": "Catálogo de Produtos",
  "baseClassName": "PetShopProductCatalogBase",
  "actor": "cliente",
  "purpose": "Executar Catálogo de Produtos.",
  "capabilities": [
    "viewHighlights",
    "browseCatalog",
    "searchProducts",
    "filterProducts",
    "viewProductDetails"
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
    "workspaceId": "productCatalog",
    "workspaceKind": "operation",
    "actor": "cliente",
    "entity": "Product",
    "owners": [
      {
        "kind": "operation",
        "id": "viewHighlights",
        "defPath": "_102049_/l4/operations/viewHighlights.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseCatalog",
        "defPath": "_102049_/l4/operations/browseCatalog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "searchProducts",
        "defPath": "_102049_/l4/operations/searchProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "filterProducts",
        "defPath": "_102049_/l4/operations/filterProducts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewProductDetails",
        "defPath": "_102049_/l4/operations/viewProductDetails.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewHighlights",
          "commandName": "viewHighlights",
          "steps": [
            "O cliente acessa a página inicial do site",
            "O sistema consulta produtos marcados como destaque e disponíveis",
            "O sistema retorna a lista de produtos em destaque com nome, descrição, preço, tipo de pet e categoria",
            "O cliente navega pelos produtos destacados para encontrar algo de seu interesse"
          ]
        },
        {
          "operationId": "browseCatalog",
          "commandName": "browseCatalog",
          "steps": [
            "O cliente acessa a página do catálogo de produtos",
            "O sistema retorna a lista paginada de produtos com status available",
            "O cliente pode buscar por nome (insensível a caixa, correspondência parcial) e filtrar por tipo de pet, categoria e faixa de preço",
            "O sistema aplica todos os filtros simultaneamente e retorna os resultados correspondentes"
          ]
        },
        {
          "operationId": "searchProducts",
          "commandName": "searchProducts",
          "steps": [
            "O cliente digita um termo de busca no campo de pesquisa da vitrine",
            "O sistema busca produtos cujo nome corresponde parcialmente e de forma insensível a maiúsculas e minúsculas",
            "O sistema filtra automaticamente para exibir apenas produtos com status available",
            "O cliente pode opcionalmente combinar filtros de tipo de pet, categoria e faixa de preço",
            "O sistema retorna a lista de produtos correspondentes com nome, preço, tipo de pet e categoria"
          ]
        },
        {
          "operationId": "filterProducts",
          "commandName": "filterProducts",
          "steps": [
            "O cliente acessa a vitrine de produtos disponíveis",
            "O cliente seleciona um ou mais filtros: tipo de pet, categoria e/ou faixa de valor (preço mínimo e máximo)",
            "O sistema aplica os filtros simultaneamente e retorna apenas produtos disponíveis que correspondem aos critérios"
          ]
        },
        {
          "operationId": "viewProductDetails",
          "commandName": "viewProductDetails",
          "steps": [
            "O cliente seleciona um produto na vitrine ou nos resultados de busca",
            "O sistema recupera o produto pelo seu identificador junto com o nome do tipo de pet e da categoria",
            "O sistema exibe nome, descrição, preço, tipo de pet indicado, categoria e flag de destaque do produto"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-highlights",
      "type": "section",
      "sectionName": "highlights",
      "titleKey": "section.highlights.title",
      "mode": "view",
      "order": 1,
      "organisms": [
        {
          "id": "org-highlights-board",
          "type": "organism",
          "organismName": "highlightsBoard",
          "titleKey": "section.highlights.title",
          "purpose": "Exibir produtos em destaque como cards para descoberta rápida",
          "userActions": [
            "viewHighlights",
            "viewProductDetails"
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
          "writesFields": [],
          "rulesApplied": [
            "Produtos destacados e disponíveis apenas"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-highlights-view",
              "intent": "load-featured-products",
              "stateKey": "ui.productCatalog.data.viewHighlights",
              "action": "viewHighlights",
              "order": 1
            },
            {
              "id": "int-highlights-detail",
              "intent": "view-detail-from-highlight",
              "stateKey": "ui.productCatalog.data.viewProductDetails",
              "action": "viewProductDetails",
              "order": 2
            }
          ]
        }
      ]
    },
    {
      "id": "sec-catalog",
      "type": "section",
      "sectionName": "catalog",
      "titleKey": "section.catalog.title",
      "mode": "query",
      "order": 2,
      "organisms": [
        {
          "id": "org-catalog-controls",
          "type": "organism",
          "organismName": "catalogControls",
          "titleKey": "section.catalog.title",
          "purpose": "Barra de busca e filtros para narrowing down do catálogo",
          "userActions": [
            "searchProducts",
            "filterProducts",
            "browseCatalog"
          ],
          "requiredEntities": [
            "Product",
            "PetType",
            "Category"
          ],
          "readsFields": [
            "searchTerm",
            "petTypeId",
            "categoryId",
            "minPrice",
            "maxPrice"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Filtros aplicados simultaneamente",
            "Busca insensível a caixa e correspondência parcial"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-search-products",
              "intent": "search-products-by-name",
              "stateKey": "ui.productCatalog.action.searchProducts.status",
              "submitAction": "searchProducts",
              "order": 1
            },
            {
              "id": "int-filter-products",
              "intent": "filter-products-by-attributes",
              "stateKey": "ui.productCatalog.action.filterProducts.status",
              "submitAction": "filterProducts",
              "order": 2
            },
            {
              "id": "int-browse-catalog",
              "intent": "browse-catalog-paginated",
              "stateKey": "ui.productCatalog.action.browseCatalog.status",
              "submitAction": "browseCatalog",
              "order": 3
            }
          ]
        },
        {
          "id": "org-catalog-results",
          "type": "organism",
          "organismName": "catalogResults",
          "titleKey": "section.catalog.title",
          "purpose": "Lista de produtos do catálogo com opção de ver detalhes",
          "userActions": [
            "searchProducts",
            "filterProducts",
            "browseCatalog",
            "viewProductDetails"
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
            "products",
            "total",
            "page",
            "pageSize"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Apenas produtos com status available",
            "Filtros aplicados simultaneamente"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "int-search-results",
              "intent": "display-search-results",
              "stateKey": "ui.productCatalog.data.searchProducts",
              "order": 1
            },
            {
              "id": "int-filter-results",
              "intent": "display-filter-results",
              "stateKey": "ui.productCatalog.data.searchProducts",
              "order": 2
            },
            {
              "id": "int-browse-results",
              "intent": "display-browse-results",
              "stateKey": "ui.productCatalog.data.searchProducts",
              "order": 3
            }
          ]
        }
      ]
    },
    {
      "id": "sec-detail",
      "type": "section",
      "sectionName": "detail",
      "titleKey": "section.detail.title",
      "mode": "view",
      "order": 3,
      "organisms": [
        {
          "id": "org-product-detail",
          "type": "organism",
          "organismName": "productDetailPanel",
          "titleKey": "section.detail.title",
          "purpose": "Exibir detalhes completos do produto selecionado",
          "userActions": [
            "viewProductDetails"
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
            "productId derivado de parâmetro de rota"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-product-detail",
              "intent": "display-product-detail",
              "stateKey": "ui.productCatalog.data.viewProductDetails",
              "action": "viewProductDetails",
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
    "actor": "Cliente do pet shop navegando no catálogo online",
    "jobToBeDone": "Encontrar e avaliar produtos de interesse no catálogo do pet shop",
    "primaryDecision": "Qual produto explorar em detalhes",
    "decisiveInfo": [
      "name",
      "price",
      "description",
      "petTypeName",
      "categoryName",
      "highlighted",
      "status"
    ],
    "usageFrequency": "Ocasional, sessão de compra/navegação",
    "criticalActions": [
      {
        "action": "viewHighlights",
        "presentation": "card-board"
      },
      {
        "action": "searchProducts",
        "presentation": "primary-button"
      },
      {
        "action": "filterProducts",
        "presentation": "inline-filter-bar"
      },
      {
        "action": "browseCatalog",
        "presentation": "paginated-list"
      },
      {
        "action": "viewProductDetails",
        "presentation": "inline-row-command"
      }
    ],
    "informationHierarchy": [
      "Produtos em destaque (curadoria, entrada rápida)",
      "Controles de busca e filtro (narrowing down)",
      "Lista de resultados do catálogo (browseable)",
      "Painel de detalhes do produto selecionado"
    ],
    "successCriteria": "O cliente encontra produtos relevantes rapidamente através de destaques, busca ou filtros, e pode ver detalhes sem perder o contexto da lista",
    "antiPatterns": [
      "Formulários separados para cada ação de query",
      "Digitação manual de IDs de produto",
      "Mostrar campos de sistema (createdAt, updatedAt) como informação primária",
      "Tratar como tela de gerenciamento CRUD"
    ]
  },
  "msgKeys": [
    "action.browseCatalog.label",
    "action.filterProducts.label",
    "action.searchProducts.label",
    "action.viewHighlights.label",
    "action.viewProductDetails.label",
    "empty.catalog",
    "empty.detail",
    "empty.highlights",
    "field.categoryId.label",
    "field.categoryName.label",
    "field.createdAt.label",
    "field.description.label",
    "field.highlighted.label",
    "field.maxPrice.label",
    "field.minPrice.label",
    "field.name.label",
    "field.page.label",
    "field.pageSize.label",
    "field.petTypeId.label",
    "field.petTypeName.label",
    "field.price.label",
    "field.productId.label",
    "field.products.label",
    "field.searchTerm.label",
    "field.status.label",
    "field.total.label",
    "field.updatedAt.label",
    "page.title",
    "section.catalog.title",
    "section.detail.title",
    "section.highlights.title"
  ],
  "layout": {
    "id": "page21",
    "type": "page",
    "sections": [
      {
        "id": "sec-highlights",
        "type": "section",
        "sectionName": "highlights",
        "titleKey": "section.highlights.title",
        "mode": "view",
        "order": 1,
        "organisms": [
          {
            "id": "org-highlights-board",
            "type": "organism",
            "organismName": "highlightsBoard",
            "titleKey": "section.highlights.title",
            "purpose": "Exibir produtos em destaque como cards para descoberta rápida",
            "userActions": [
              "viewHighlights",
              "viewProductDetails"
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
            "writesFields": [],
            "rulesApplied": [
              "Produtos destacados e disponíveis apenas"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-highlights-view",
                "intent": "load-featured-products",
                "order": 1,
                "titleKey": "section.highlights.title",
                "source": "query",
                "binding": "viewHighlights",
                "action": "viewHighlights",
                "emptyKey": "empty.highlights",
                "stateKey": "ui.productCatalog.data.viewHighlights",
                "fields": [],
                "columns": [
                  {
                    "id": "col-hl-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 5,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 6,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 7,
                    "required": false,
                    "inputType": "checkbox",
                    "format": "boolean",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 8,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra-hl-viewDetail",
                    "action": "viewProductDetails",
                    "labelKey": "action.viewProductDetails.label",
                    "order": 1,
                    "displayHint": "inline-row-command",
                    "actionKey": "viewProductDetails"
                  }
                ],
                "actions": []
              },
              {
                "id": "int-highlights-detail",
                "intent": "view-detail-from-highlight",
                "order": 2,
                "titleKey": "section.detail.title",
                "source": "query",
                "binding": "viewProductDetails",
                "action": "viewProductDetails",
                "emptyKey": "empty.detail",
                "stateKey": "ui.productCatalog.data.viewProductDetails",
                "fields": [
                  {
                    "id": "fld-hd-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "route",
                    "stateKey": "ui.productCatalog.input.viewProductDetails.productId"
                  },
                  {
                    "id": "fld-hd-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 3,
                    "required": false,
                    "inputType": "textarea",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 5,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-petTypeName",
                    "field": "petTypeName",
                    "labelKey": "field.petTypeName.label",
                    "order": 6,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 7,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-categoryName",
                    "field": "categoryName",
                    "labelKey": "field.categoryName.label",
                    "order": 8,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 9,
                    "required": false,
                    "inputType": "checkbox",
                    "format": "boolean",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt.label",
                    "order": 11,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-hd-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "field.updatedAt.label",
                    "order": 12,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
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
        "id": "sec-catalog",
        "type": "section",
        "sectionName": "catalog",
        "titleKey": "section.catalog.title",
        "mode": "query",
        "order": 2,
        "organisms": [
          {
            "id": "org-catalog-controls",
            "type": "organism",
            "organismName": "catalogControls",
            "titleKey": "section.catalog.title",
            "purpose": "Barra de busca e filtros para narrowing down do catálogo",
            "userActions": [
              "searchProducts",
              "filterProducts",
              "browseCatalog"
            ],
            "requiredEntities": [
              "Product",
              "PetType",
              "Category"
            ],
            "readsFields": [
              "searchTerm",
              "petTypeId",
              "categoryId",
              "minPrice",
              "maxPrice"
            ],
            "writesFields": [],
            "rulesApplied": [
              "Filtros aplicados simultaneamente",
              "Busca insensível a caixa e correspondência parcial"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-search-products",
                "intent": "search-products-by-name",
                "order": 1,
                "titleKey": "action.searchProducts.label",
                "source": "form",
                "binding": "searchProducts",
                "submitAction": "searchProducts",
                "stateKey": "ui.productCatalog.action.searchProducts.status",
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt-search-term",
                    "field": "searchTerm",
                    "labelKey": "field.searchTerm.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.searchProducts.searchTerm"
                  },
                  {
                    "id": "flt-search-petType",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.searchProducts.petTypeId"
                  },
                  {
                    "id": "flt-search-category",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 3,
                    "required": false,
                    "inputType": "select",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.searchProducts.categoryId"
                  },
                  {
                    "id": "flt-search-minPrice",
                    "field": "minPrice",
                    "labelKey": "field.minPrice.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.searchProducts.minPrice"
                  },
                  {
                    "id": "flt-search-maxPrice",
                    "field": "maxPrice",
                    "labelKey": "field.maxPrice.label",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.searchProducts.maxPrice"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-search-submit",
                    "action": "searchProducts",
                    "labelKey": "action.searchProducts.label",
                    "order": 1,
                    "displayHint": "primary-button",
                    "actionKey": "searchProducts"
                  }
                ]
              },
              {
                "id": "int-filter-products",
                "intent": "filter-products-by-attributes",
                "order": 2,
                "titleKey": "action.filterProducts.label",
                "source": "form",
                "binding": "filterProducts",
                "submitAction": "filterProducts",
                "stateKey": "ui.productCatalog.action.filterProducts.status",
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt-filter-petType",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 1,
                    "required": false,
                    "inputType": "select",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.filterProducts.petTypeId"
                  },
                  {
                    "id": "flt-filter-category",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.filterProducts.categoryId"
                  },
                  {
                    "id": "flt-filter-minPrice",
                    "field": "minPrice",
                    "labelKey": "field.minPrice.label",
                    "order": 3,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.filterProducts.minPrice"
                  },
                  {
                    "id": "flt-filter-maxPrice",
                    "field": "maxPrice",
                    "labelKey": "field.maxPrice.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.filterProducts.maxPrice"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-filter-submit",
                    "action": "filterProducts",
                    "labelKey": "action.filterProducts.label",
                    "order": 1,
                    "actionKey": "filterProducts"
                  }
                ]
              },
              {
                "id": "int-browse-catalog",
                "intent": "browse-catalog-paginated",
                "order": 3,
                "titleKey": "action.browseCatalog.label",
                "source": "form",
                "binding": "browseCatalog",
                "submitAction": "browseCatalog",
                "stateKey": "ui.productCatalog.action.browseCatalog.status",
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt-browse-term",
                    "field": "searchTerm",
                    "labelKey": "field.searchTerm.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.browseCatalog.searchTerm"
                  },
                  {
                    "id": "flt-browse-petType",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.browseCatalog.petTypeId"
                  },
                  {
                    "id": "flt-browse-category",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 3,
                    "required": false,
                    "inputType": "select",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.browseCatalog.categoryId"
                  },
                  {
                    "id": "flt-browse-minPrice",
                    "field": "minPrice",
                    "labelKey": "field.minPrice.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.browseCatalog.minPrice"
                  },
                  {
                    "id": "flt-browse-maxPrice",
                    "field": "maxPrice",
                    "labelKey": "field.maxPrice.label",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "state",
                    "stateKey": "ui.productCatalog.input.browseCatalog.maxPrice"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-browse-submit",
                    "action": "browseCatalog",
                    "labelKey": "action.browseCatalog.label",
                    "order": 1,
                    "actionKey": "browseCatalog"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-catalog-results",
            "type": "organism",
            "organismName": "catalogResults",
            "titleKey": "section.catalog.title",
            "purpose": "Lista de produtos do catálogo com opção de ver detalhes",
            "userActions": [
              "searchProducts",
              "filterProducts",
              "browseCatalog",
              "viewProductDetails"
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
              "products",
              "total",
              "page",
              "pageSize"
            ],
            "writesFields": [],
            "rulesApplied": [
              "Apenas produtos com status available",
              "Filtros aplicados simultaneamente"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "int-search-results",
                "intent": "display-search-results",
                "order": 1,
                "titleKey": "action.searchProducts.label",
                "source": "query",
                "binding": "searchProducts",
                "emptyKey": "empty.catalog",
                "stateKey": "ui.productCatalog.data.searchProducts",
                "fields": [],
                "columns": [
                  {
                    "id": "col-sr-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 5,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-petTypeName",
                    "field": "petTypeName",
                    "labelKey": "field.petTypeName.label",
                    "order": 6,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 7,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-categoryName",
                    "field": "categoryName",
                    "labelKey": "field.categoryName.label",
                    "order": 8,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 9,
                    "required": false,
                    "inputType": "checkbox",
                    "format": "boolean",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sr-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra-sr-viewDetail",
                    "action": "viewProductDetails",
                    "labelKey": "action.viewProductDetails.label",
                    "order": 1,
                    "displayHint": "inline-row-command",
                    "actionKey": "viewProductDetails"
                  }
                ],
                "actions": []
              },
              {
                "id": "int-filter-results",
                "intent": "display-filter-results",
                "order": 2,
                "titleKey": "action.filterProducts.label",
                "source": "query",
                "binding": "filterProducts",
                "emptyKey": "empty.catalog",
                "stateKey": "ui.productCatalog.data.searchProducts",
                "fields": [],
                "columns": [
                  {
                    "id": "col-fr-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-fr-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-fr-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 3,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-fr-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-fr-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 5,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-fr-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 6,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-fr-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 7,
                    "required": false,
                    "inputType": "checkbox",
                    "format": "boolean",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-fr-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 8,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra-fr-viewDetail",
                    "action": "viewProductDetails",
                    "labelKey": "action.viewProductDetails.label",
                    "order": 1,
                    "displayHint": "inline-row-command",
                    "actionKey": "viewProductDetails"
                  }
                ],
                "actions": []
              },
              {
                "id": "int-browse-results",
                "intent": "display-browse-results",
                "order": 3,
                "titleKey": "action.browseCatalog.label",
                "source": "query",
                "binding": "browseCatalog",
                "emptyKey": "empty.catalog",
                "stateKey": "ui.productCatalog.data.searchProducts",
                "fields": [],
                "columns": [
                  {
                    "id": "col-br-products",
                    "field": "products",
                    "labelKey": "field.products.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.browseCatalog"
                  },
                  {
                    "id": "col-br-total",
                    "field": "total",
                    "labelKey": "field.total.label",
                    "order": 2,
                    "required": false,
                    "inputType": "number",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.browseCatalog"
                  },
                  {
                    "id": "col-br-page",
                    "field": "page",
                    "labelKey": "field.page.label",
                    "order": 3,
                    "required": false,
                    "inputType": "number",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.browseCatalog"
                  },
                  {
                    "id": "col-br-pageSize",
                    "field": "pageSize",
                    "labelKey": "field.pageSize.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.browseCatalog"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra-br-viewDetail",
                    "action": "viewProductDetails",
                    "labelKey": "action.viewProductDetails.label",
                    "order": 1,
                    "displayHint": "inline-row-command",
                    "actionKey": "viewProductDetails"
                  }
                ],
                "actions": []
              }
            ]
          }
        ]
      },
      {
        "id": "sec-detail",
        "type": "section",
        "sectionName": "detail",
        "titleKey": "section.detail.title",
        "mode": "view",
        "order": 3,
        "organisms": [
          {
            "id": "org-product-detail",
            "type": "organism",
            "organismName": "productDetailPanel",
            "titleKey": "section.detail.title",
            "purpose": "Exibir detalhes completos do produto selecionado",
            "userActions": [
              "viewProductDetails"
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
              "productId derivado de parâmetro de rota"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-product-detail",
                "intent": "display-product-detail",
                "order": 1,
                "titleKey": "section.detail.title",
                "source": "query",
                "binding": "viewProductDetails",
                "action": "viewProductDetails",
                "emptyKey": "empty.detail",
                "stateKey": "ui.productCatalog.data.viewProductDetails",
                "fields": [
                  {
                    "id": "fld-pd-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "route",
                    "stateKey": "ui.productCatalog.input.viewProductDetails.productId"
                  },
                  {
                    "id": "fld-pd-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 2,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 3,
                    "required": false,
                    "inputType": "textarea",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 5,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-petTypeName",
                    "field": "petTypeName",
                    "labelKey": "field.petTypeName.label",
                    "order": 6,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 7,
                    "required": false,
                    "inputType": "select",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-categoryName",
                    "field": "categoryName",
                    "labelKey": "field.categoryName.label",
                    "order": 8,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 9,
                    "required": false,
                    "inputType": "checkbox",
                    "format": "boolean",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt.label",
                    "order": 11,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "field.updatedAt.label",
                    "order": 12,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "source": "query",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
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
      "id": "db-viewHighlights",
      "source": "query",
      "entity": "Product",
      "command": "viewHighlights",
      "description": "Carrega produtos em destaque",
      "stateKey": "ui.productCatalog.data.viewHighlights",
      "inputStateKeys": []
    },
    {
      "id": "db-browseCatalog",
      "source": "query",
      "entity": "Product",
      "command": "browseCatalog",
      "description": "Navega pelo catálogo paginado",
      "stateKey": "ui.productCatalog.data.browseCatalog",
      "inputStateKeys": [
        "ui.productCatalog.input.browseCatalog.searchTerm",
        "ui.productCatalog.input.browseCatalog.petTypeId",
        "ui.productCatalog.input.browseCatalog.categoryId",
        "ui.productCatalog.input.browseCatalog.minPrice",
        "ui.productCatalog.input.browseCatalog.maxPrice"
      ]
    },
    {
      "id": "db-searchProducts",
      "source": "query",
      "entity": "Product",
      "command": "searchProducts",
      "description": "Busca produtos por nome com filtros",
      "stateKey": "ui.productCatalog.data.searchProducts",
      "inputStateKeys": [
        "ui.productCatalog.input.searchProducts.searchTerm",
        "ui.productCatalog.input.searchProducts.petTypeId",
        "ui.productCatalog.input.searchProducts.categoryId",
        "ui.productCatalog.input.searchProducts.minPrice",
        "ui.productCatalog.input.searchProducts.maxPrice"
      ]
    },
    {
      "id": "db-filterProducts",
      "source": "query",
      "entity": "Product",
      "command": "filterProducts",
      "description": "Filtra produtos por atributos",
      "stateKey": "ui.productCatalog.data.filterProducts",
      "inputStateKeys": [
        "ui.productCatalog.input.filterProducts.petTypeId",
        "ui.productCatalog.input.filterProducts.categoryId",
        "ui.productCatalog.input.filterProducts.minPrice",
        "ui.productCatalog.input.filterProducts.maxPrice"
      ]
    },
    {
      "id": "db-viewProductDetails",
      "source": "query",
      "entity": "Product",
      "command": "viewProductDetails",
      "description": "Carrega detalhes do produto selecionado",
      "stateKey": "ui.productCatalog.data.viewProductDetails",
      "inputStateKeys": [
        "ui.productCatalog.input.viewProductDetails.productId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "productCatalog__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page21/productCatalog.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page21/productCatalog.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/productCatalog.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "productCatalog__l2_shared"
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
