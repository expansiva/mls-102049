/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productCatalog.defs.ts" enhancement="_blank"/>

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
      "id": "sec-overview",
      "type": "section",
      "sectionName": "sec-overview",
      "titleKey": "sec.overview.title",
      "mode": "summary",
      "order": 1,
      "organisms": [
        {
          "id": "org-highlights",
          "type": "organism",
          "organismName": "highlightsCards",
          "titleKey": "org.highlights.title",
          "purpose": "Display highlighted products as summary cards for at-a-glance browsing",
          "userActions": [
            "viewHighlights",
            "viewProductDetails"
          ],
          "requiredEntities": [
            "Product"
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
            "Only products with highlighted=true and status=available are shown"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-highlights-list",
              "intent": "queryList",
              "stateKey": "ui.productCatalog.data.viewHighlights",
              "action": "viewHighlights",
              "order": 1
            }
          ]
        },
        {
          "id": "org-catalog-summary",
          "type": "organism",
          "organismName": "catalogSummary",
          "titleKey": "org.catalog.summary.title",
          "purpose": "Show catalog overview metrics including total products and pagination info",
          "userActions": [
            "browseCatalog"
          ],
          "requiredEntities": [
            "Product"
          ],
          "readsFields": [
            "products",
            "total",
            "page",
            "pageSize"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Catalog returns only available products",
            "Results are paginated"
          ],
          "order": 2,
          "intentionRefs": [
            {
              "id": "int-catalog-metrics",
              "intent": "summary",
              "stateKey": "ui.productCatalog.action.browseCatalog.status",
              "action": "browseCatalog",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec-catalog",
      "type": "section",
      "sectionName": "sec-catalog",
      "titleKey": "sec.catalog.title",
      "mode": "list",
      "order": 2,
      "organisms": [
        {
          "id": "org-catalog-browser",
          "type": "organism",
          "organismName": "catalogBrowser",
          "titleKey": "org.catalog.browser.title",
          "purpose": "Search, filter and browse products in the catalog with combined criteria",
          "userActions": [
            "browseCatalog",
            "searchProducts",
            "filterProducts",
            "viewProductDetails"
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
            "maxPrice",
            "productId",
            "name",
            "description",
            "price",
            "petTypeName",
            "categoryName",
            "highlighted",
            "status"
          ],
          "writesFields": [],
          "rulesApplied": [
            "All filters apply simultaneously",
            "Only available products are returned",
            "Search is case-insensitive with partial matching"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-browse-filter",
              "intent": "filterForm",
              "stateKey": "ui.productCatalog.data.browseCatalog",
              "submitAction": "browseCatalog",
              "order": 1
            },
            {
              "id": "int-search-filter",
              "intent": "filterForm",
              "stateKey": "ui.productCatalog.data.searchProducts",
              "submitAction": "searchProducts",
              "order": 2
            },
            {
              "id": "int-filter-filter",
              "intent": "filterForm",
              "stateKey": "ui.productCatalog.data.filterProducts",
              "submitAction": "filterProducts",
              "order": 3
            },
            {
              "id": "int-search-results",
              "intent": "queryList",
              "stateKey": "ui.productCatalog.data.searchProducts",
              "action": "searchProducts",
              "order": 4
            },
            {
              "id": "int-filter-results",
              "intent": "queryList",
              "stateKey": "ui.productCatalog.data.filterProducts",
              "action": "filterProducts",
              "order": 5
            }
          ]
        }
      ]
    },
    {
      "id": "sec-details",
      "type": "section",
      "sectionName": "sec-details",
      "titleKey": "sec.details.title",
      "mode": "detail",
      "order": 3,
      "organisms": [
        {
          "id": "org-product-details",
          "type": "organism",
          "organismName": "productDetails",
          "titleKey": "org.product.details.title",
          "purpose": "Display detailed information about a selected product including pet type and category names",
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
            "Product details include resolved pet type name and category name",
            "productId is provided via route parameter"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-product-details",
              "intent": "summary",
              "stateKey": "ui.productCatalog.action.viewProductDetails.status",
              "action": "viewProductDetails",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "status_overview",
  "visualStyle": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja",
  "msgKeys": [
    "action.browseCatalog.label",
    "action.filterProducts.label",
    "action.searchProducts.label",
    "action.viewHighlights.label",
    "action.viewProductDetails.label",
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
    "intention.browseCatalogFilter.title",
    "intention.browseCatalogSummary.empty",
    "intention.browseCatalogSummary.title",
    "intention.filterProductsFilter.title",
    "intention.filterProductsList.empty",
    "intention.filterProductsList.title",
    "intention.searchProductsFilter.title",
    "intention.searchProductsList.empty",
    "intention.searchProductsList.title",
    "intention.viewHighlights.empty",
    "intention.viewHighlights.title",
    "intention.viewProductDetails.empty",
    "intention.viewProductDetails.title",
    "org.catalog.browser.title",
    "org.catalog.summary.title",
    "org.highlights.title",
    "org.product.details.title",
    "organism.catalogBrowser.title",
    "organism.catalogSummary.title",
    "organism.highlightsCards.title",
    "organism.productDetails.title",
    "page.productCatalog.title",
    "sec.catalog.title",
    "sec.details.title",
    "sec.overview.title",
    "section.catalog.title",
    "section.details.title",
    "section.overview.title"
  ],
  "layout": {
    "id": "status_overview",
    "type": "page",
    "sections": [
      {
        "id": "sec-overview",
        "type": "section",
        "sectionName": "sec-overview",
        "titleKey": "sec.overview.title",
        "mode": "summary",
        "order": 1,
        "organisms": [
          {
            "id": "org-highlights",
            "type": "organism",
            "organismName": "highlightsCards",
            "titleKey": "org.highlights.title",
            "purpose": "Display highlighted products as summary cards for at-a-glance browsing",
            "userActions": [
              "viewHighlights",
              "viewProductDetails"
            ],
            "requiredEntities": [
              "Product"
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
              "Only products with highlighted=true and status=available are shown"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-highlights-list",
                "intent": "queryList",
                "order": 1,
                "titleKey": "intention.viewHighlights.title",
                "source": "ui.productCatalog.data.viewHighlights",
                "binding": "viewHighlights",
                "action": "viewHighlights",
                "emptyKey": "intention.viewHighlights.empty",
                "displayHint": "cards",
                "stateKey": "ui.productCatalog.data.viewHighlights",
                "fields": [],
                "columns": [
                  {
                    "id": "col-hl-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 2,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 3,
                    "required": false,
                    "format": "currency",
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 5,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 6,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  },
                  {
                    "id": "col-hl-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 7,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.viewHighlights"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra-hl-details",
                    "action": "viewProductDetails",
                    "labelKey": "action.viewProductDetails.label",
                    "order": 1,
                    "displayHint": "link",
                    "actionKey": "viewProductDetails"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org-catalog-summary",
            "type": "organism",
            "organismName": "catalogSummary",
            "titleKey": "org.catalog.summary.title",
            "purpose": "Show catalog overview metrics including total products and pagination info",
            "userActions": [
              "browseCatalog"
            ],
            "requiredEntities": [
              "Product"
            ],
            "readsFields": [
              "products",
              "total",
              "page",
              "pageSize"
            ],
            "writesFields": [],
            "rulesApplied": [
              "Catalog returns only available products",
              "Results are paginated"
            ],
            "order": 2,
            "intentions": [
              {
                "id": "int-catalog-metrics",
                "intent": "summary",
                "order": 1,
                "titleKey": "intention.browseCatalogSummary.title",
                "source": "ui.productCatalog.data.browseCatalog",
                "binding": "browseCatalog",
                "action": "browseCatalog",
                "emptyKey": "intention.browseCatalogSummary.empty",
                "displayHint": "metrics",
                "stateKey": "ui.productCatalog.action.browseCatalog.status",
                "fields": [
                  {
                    "id": "fld-cs-total",
                    "field": "total",
                    "labelKey": "field.total.label",
                    "order": 1,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.browseCatalog"
                  },
                  {
                    "id": "fld-cs-page",
                    "field": "page",
                    "labelKey": "field.page.label",
                    "order": 2,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.browseCatalog"
                  },
                  {
                    "id": "fld-cs-pageSize",
                    "field": "pageSize",
                    "labelKey": "field.pageSize.label",
                    "order": 3,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.browseCatalog"
                  },
                  {
                    "id": "fld-cs-products",
                    "field": "products",
                    "labelKey": "field.products.label",
                    "order": 4,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.browseCatalog"
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
        "sectionName": "sec-catalog",
        "titleKey": "sec.catalog.title",
        "mode": "list",
        "order": 2,
        "organisms": [
          {
            "id": "org-catalog-browser",
            "type": "organism",
            "organismName": "catalogBrowser",
            "titleKey": "org.catalog.browser.title",
            "purpose": "Search, filter and browse products in the catalog with combined criteria",
            "userActions": [
              "browseCatalog",
              "searchProducts",
              "filterProducts",
              "viewProductDetails"
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
              "maxPrice",
              "productId",
              "name",
              "description",
              "price",
              "petTypeName",
              "categoryName",
              "highlighted",
              "status"
            ],
            "writesFields": [],
            "rulesApplied": [
              "All filters apply simultaneously",
              "Only available products are returned",
              "Search is case-insensitive with partial matching"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-browse-filter",
                "intent": "filterForm",
                "order": 1,
                "titleKey": "intention.browseCatalogFilter.title",
                "binding": "browseCatalog",
                "submitAction": "browseCatalog",
                "displayHint": "inline",
                "stateKey": "ui.productCatalog.data.browseCatalog",
                "fields": [
                  {
                    "id": "fld-bc-search",
                    "field": "searchTerm",
                    "labelKey": "field.searchTerm.label",
                    "order": 1,
                    "required": false,
                    "inputType": "text",
                    "source": "set.browseCatalogSearchTerm",
                    "stateKey": "ui.productCatalog.input.browseCatalog.searchTerm"
                  },
                  {
                    "id": "fld-bc-petType",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "source": "set.browseCatalogPetTypeId",
                    "stateKey": "ui.productCatalog.input.browseCatalog.petTypeId"
                  },
                  {
                    "id": "fld-bc-category",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 3,
                    "required": false,
                    "inputType": "select",
                    "source": "set.browseCatalogCategoryId",
                    "stateKey": "ui.productCatalog.input.browseCatalog.categoryId"
                  },
                  {
                    "id": "fld-bc-minPrice",
                    "field": "minPrice",
                    "labelKey": "field.minPrice.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.browseCatalogMinPrice",
                    "stateKey": "ui.productCatalog.input.browseCatalog.minPrice"
                  },
                  {
                    "id": "fld-bc-maxPrice",
                    "field": "maxPrice",
                    "labelKey": "field.maxPrice.label",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.browseCatalogMaxPrice",
                    "stateKey": "ui.productCatalog.input.browseCatalog.maxPrice"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-bc-submit",
                    "action": "browseCatalog",
                    "labelKey": "action.browseCatalog.label",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "browseCatalog"
                  }
                ]
              },
              {
                "id": "int-search-filter",
                "intent": "filterForm",
                "order": 2,
                "titleKey": "intention.searchProductsFilter.title",
                "binding": "searchProducts",
                "submitAction": "searchProducts",
                "displayHint": "inline",
                "stateKey": "ui.productCatalog.data.searchProducts",
                "fields": [
                  {
                    "id": "fld-sp-search",
                    "field": "searchTerm",
                    "labelKey": "field.searchTerm.label",
                    "order": 1,
                    "required": true,
                    "inputType": "text",
                    "source": "set.searchProductsSearchTerm",
                    "stateKey": "ui.productCatalog.input.searchProducts.searchTerm"
                  },
                  {
                    "id": "fld-sp-petType",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "source": "set.searchProductsPetTypeId",
                    "stateKey": "ui.productCatalog.input.searchProducts.petTypeId"
                  },
                  {
                    "id": "fld-sp-category",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 3,
                    "required": false,
                    "inputType": "select",
                    "source": "set.searchProductsCategoryId",
                    "stateKey": "ui.productCatalog.input.searchProducts.categoryId"
                  },
                  {
                    "id": "fld-sp-minPrice",
                    "field": "minPrice",
                    "labelKey": "field.minPrice.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.searchProductsMinPrice",
                    "stateKey": "ui.productCatalog.input.searchProducts.minPrice"
                  },
                  {
                    "id": "fld-sp-maxPrice",
                    "field": "maxPrice",
                    "labelKey": "field.maxPrice.label",
                    "order": 5,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.searchProductsMaxPrice",
                    "stateKey": "ui.productCatalog.input.searchProducts.maxPrice"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-sp-submit",
                    "action": "searchProducts",
                    "labelKey": "action.searchProducts.label",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "searchProducts"
                  }
                ]
              },
              {
                "id": "int-filter-filter",
                "intent": "filterForm",
                "order": 3,
                "titleKey": "intention.filterProductsFilter.title",
                "binding": "filterProducts",
                "submitAction": "filterProducts",
                "displayHint": "inline",
                "stateKey": "ui.productCatalog.data.filterProducts",
                "fields": [
                  {
                    "id": "fld-fp-petType",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 1,
                    "required": false,
                    "inputType": "select",
                    "source": "set.filterProductsPetTypeId",
                    "stateKey": "ui.productCatalog.input.filterProducts.petTypeId"
                  },
                  {
                    "id": "fld-fp-category",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 2,
                    "required": false,
                    "inputType": "select",
                    "source": "set.filterProductsCategoryId",
                    "stateKey": "ui.productCatalog.input.filterProducts.categoryId"
                  },
                  {
                    "id": "fld-fp-minPrice",
                    "field": "minPrice",
                    "labelKey": "field.minPrice.label",
                    "order": 3,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.filterProductsMinPrice",
                    "stateKey": "ui.productCatalog.input.filterProducts.minPrice"
                  },
                  {
                    "id": "fld-fp-maxPrice",
                    "field": "maxPrice",
                    "labelKey": "field.maxPrice.label",
                    "order": 4,
                    "required": false,
                    "inputType": "number",
                    "format": "currency",
                    "source": "set.filterProductsMaxPrice",
                    "stateKey": "ui.productCatalog.input.filterProducts.maxPrice"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-fp-submit",
                    "action": "filterProducts",
                    "labelKey": "action.filterProducts.label",
                    "order": 1,
                    "displayHint": "primary",
                    "actionKey": "filterProducts"
                  }
                ]
              },
              {
                "id": "int-search-results",
                "intent": "queryList",
                "order": 4,
                "titleKey": "intention.searchProductsList.title",
                "source": "ui.productCatalog.data.searchProducts",
                "binding": "searchProducts",
                "action": "searchProducts",
                "emptyKey": "intention.searchProductsList.empty",
                "displayHint": "table",
                "stateKey": "ui.productCatalog.data.searchProducts",
                "fields": [],
                "columns": [
                  {
                    "id": "col-sp-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sp-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 2,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sp-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 3,
                    "required": false,
                    "format": "currency",
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sp-petTypeName",
                    "field": "petTypeName",
                    "labelKey": "field.petTypeName.label",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sp-categoryName",
                    "field": "categoryName",
                    "labelKey": "field.categoryName.label",
                    "order": 5,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sp-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 6,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sp-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 7,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  },
                  {
                    "id": "col-sp-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 8,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.searchProducts"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra-sp-details",
                    "action": "viewProductDetails",
                    "labelKey": "action.viewProductDetails.label",
                    "order": 1,
                    "displayHint": "link",
                    "actionKey": "viewProductDetails"
                  }
                ],
                "actions": []
              },
              {
                "id": "int-filter-results",
                "intent": "queryList",
                "order": 5,
                "titleKey": "intention.filterProductsList.title",
                "source": "ui.productCatalog.data.filterProducts",
                "binding": "filterProducts",
                "action": "filterProducts",
                "emptyKey": "intention.filterProductsList.empty",
                "displayHint": "table",
                "stateKey": "ui.productCatalog.data.filterProducts",
                "fields": [],
                "columns": [
                  {
                    "id": "col-fp-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 1,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.filterProducts"
                  },
                  {
                    "id": "col-fp-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 2,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.filterProducts"
                  },
                  {
                    "id": "col-fp-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 3,
                    "required": false,
                    "format": "currency",
                    "stateKey": "ui.productCatalog.data.filterProducts"
                  },
                  {
                    "id": "col-fp-petTypeId",
                    "field": "petTypeId",
                    "labelKey": "field.petTypeId.label",
                    "order": 4,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.filterProducts"
                  },
                  {
                    "id": "col-fp-categoryId",
                    "field": "categoryId",
                    "labelKey": "field.categoryId.label",
                    "order": 5,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.filterProducts"
                  },
                  {
                    "id": "col-fp-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 6,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.filterProducts"
                  },
                  {
                    "id": "col-fp-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 7,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.filterProducts"
                  },
                  {
                    "id": "col-fp-productId",
                    "field": "productId",
                    "labelKey": "field.productId.label",
                    "order": 8,
                    "required": false,
                    "stateKey": "ui.productCatalog.data.filterProducts"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra-fp-details",
                    "action": "viewProductDetails",
                    "labelKey": "action.viewProductDetails.label",
                    "order": 1,
                    "displayHint": "link",
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
        "id": "sec-details",
        "type": "section",
        "sectionName": "sec-details",
        "titleKey": "sec.details.title",
        "mode": "detail",
        "order": 3,
        "organisms": [
          {
            "id": "org-product-details",
            "type": "organism",
            "organismName": "productDetails",
            "titleKey": "org.product.details.title",
            "purpose": "Display detailed information about a selected product including pet type and category names",
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
              "Product details include resolved pet type name and category name",
              "productId is provided via route parameter"
            ],
            "order": 1,
            "intentions": [
              {
                "id": "int-product-details",
                "intent": "summary",
                "order": 1,
                "titleKey": "intention.viewProductDetails.title",
                "source": "ui.productCatalog.data.viewProductDetails",
                "binding": "viewProductDetails",
                "action": "viewProductDetails",
                "emptyKey": "intention.viewProductDetails.empty",
                "displayHint": "detail",
                "stateKey": "ui.productCatalog.action.viewProductDetails.status",
                "fields": [
                  {
                    "id": "fld-pd-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 1,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 2,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 3,
                    "required": false,
                    "inputType": "readonly",
                    "format": "currency",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-petTypeName",
                    "field": "petTypeName",
                    "labelKey": "field.petTypeName.label",
                    "order": 4,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-categoryName",
                    "field": "categoryName",
                    "labelKey": "field.categoryName.label",
                    "order": 5,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-highlighted",
                    "field": "highlighted",
                    "labelKey": "field.highlighted.label",
                    "order": 6,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 7,
                    "required": false,
                    "inputType": "readonly",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt.label",
                    "order": 8,
                    "required": false,
                    "inputType": "readonly",
                    "format": "datetime",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld-pd-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "field.updatedAt.label",
                    "order": 9,
                    "required": false,
                    "inputType": "readonly",
                    "format": "datetime",
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
      "source": "ui.productCatalog.data.viewHighlights",
      "entity": "Product",
      "command": "viewHighlights",
      "description": "Highlighted products list",
      "stateKey": "ui.productCatalog.data.viewHighlights",
      "inputStateKeys": []
    },
    {
      "id": "db-browseCatalog",
      "source": "ui.productCatalog.data.browseCatalog",
      "entity": "Product",
      "command": "browseCatalog",
      "description": "Paginated catalog browse results",
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
      "source": "ui.productCatalog.data.searchProducts",
      "entity": "Product",
      "command": "searchProducts",
      "description": "Product search results",
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
      "source": "ui.productCatalog.data.filterProducts",
      "entity": "Product",
      "command": "filterProducts",
      "description": "Filtered product results",
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
      "source": "ui.productCatalog.data.viewProductDetails",
      "entity": "Product",
      "command": "viewProductDetails",
      "description": "Selected product details",
      "stateKey": "ui.productCatalog.data.viewProductDetails",
      "inputStateKeys": [
        "ui.productCatalog.input.viewProductDetails.productId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "productCatalog__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/productCatalog.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/productCatalog.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/productCatalog.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "productCatalog__l2_shared"
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
