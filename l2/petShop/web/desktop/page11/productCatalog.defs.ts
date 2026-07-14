/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productCatalog.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "productCatalog",
  "pageName": "Catálogo de produtos e pedido para retirada",
  "baseClassName": "PetShopProductCatalogBase",
  "actor": "cliente",
  "purpose": "Executar Catálogo de produtos e pedido para retirada.",
  "capabilities": [
    "browseProductCatalog",
    "viewProductDetails",
    "placeStorePickupOrder"
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
        "id": "browseProductCatalog",
        "defPath": "_102049_/l4/operations/browseProductCatalog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewProductDetails",
        "defPath": "_102049_/l4/operations/viewProductDetails.defs.ts"
      },
      {
        "kind": "operation",
        "id": "placeStorePickupOrder",
        "defPath": "_102049_/l4/operations/placeStorePickupOrder.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseProductCatalog",
          "commandName": "browseProductCatalog",
          "steps": [
            "O cliente abre a página de catálogo de produtos",
            "O sistema lista os produtos ativos com nome, preço, imagem e categoria",
            "O cliente pode filtrar por categoria ou buscar pelo nome do produto",
            "O cliente visualiza os resultados paginados do catálogo"
          ]
        },
        {
          "operationId": "viewProductDetails",
          "commandName": "viewProductDetails",
          "steps": [
            "O cliente seleciona um produto no catálogo ou na página inicial.",
            "O sistema carrega os detalhes completos do produto incluindo imagem, descrição, preço e categoria.",
            "O cliente avalia as informações para decidir se deseja prosseguir com a compra para retirada na loja."
          ]
        },
        {
          "operationId": "placeStorePickupOrder",
          "commandName": "placeStorePickupOrder",
          "steps": [
            "O cliente revisa os itens do carrinho de compras e o valor total",
            "O cliente informa seu nome e, opcionalmente, seu telefone de contato",
            "O cliente confirma a finalização do pedido para retirada na loja física",
            "O sistema valida que o carrinho contém ao menos um item e registra o pedido com status 'registered'",
            "O sistema associa os itens do carrinho ao novo pedido como OrderItems"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_catalog",
      "type": "section",
      "sectionName": "sec_catalog",
      "titleKey": "sec.catalog.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_browse_catalog",
          "type": "organism",
          "organismName": "BrowseProductCatalog",
          "titleKey": "org.browse.catalog.title",
          "purpose": "Navegar no catálogo de produtos com filtros de busca e categoria",
          "userActions": [
            "browseProductCatalog"
          ],
          "requiredEntities": [
            "Product",
            "ProductCategory"
          ],
          "readsFields": [
            "searchName",
            "productCategoryId",
            "productId",
            "name",
            "price",
            "imageUrl",
            "featured"
          ],
          "writesFields": [],
          "rulesApplied": [
            "featuredProductRequiresActive",
            "productImageUsesPlatformStorage"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_browse_products",
              "intent": "queryList",
              "stateKey": "ui.productCatalog.data.browseProductCatalog",
              "order": 10
            }
          ]
        },
        {
          "id": "org_product_details",
          "type": "organism",
          "organismName": "ViewProductDetails",
          "titleKey": "org.product.details.title",
          "purpose": "Exibir detalhes completos do produto selecionado para decisão de compra",
          "userActions": [
            "viewProductDetails"
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
          "order": 20,
          "intentionRefs": [
            {
              "id": "int_product_details",
              "intent": "queryList",
              "stateKey": "ui.productCatalog.data.viewProductDetails",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec_checkout",
      "type": "section",
      "sectionName": "Carrinho e Finalização do Pedido",
      "titleKey": "section.checkout.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org_cart_and_checkout",
          "type": "organism",
          "organismName": "PlaceStorePickupOrder",
          "titleKey": "org.cart.and.checkout.title",
          "purpose": "Revisar itens do carrinho, informar dados do cliente e finalizar pedido para retirada na loja",
          "userActions": [
            "placeStorePickupOrder"
          ],
          "requiredEntities": [
            "Order",
            "Product",
            "OrderItem"
          ],
          "readsFields": [
            "productId",
            "quantity",
            "unitPrice",
            "customerName",
            "customerPhone"
          ],
          "writesFields": [
            "orderId",
            "status",
            "customerName",
            "customerPhone",
            "createdAt"
          ],
          "rulesApplied": [
            "paymentInStoreOnly",
            "pickupInStoreOnly",
            "orderRequiresAtLeastOneItem"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_cart_items",
              "intent": "queryList",
              "order": 10
            },
            {
              "id": "int_checkout_form",
              "intent": "commandForm",
              "stateKey": "ui.productCatalog.output.placeStorePickupOrder",
              "action": "placeStorePickupOrder",
              "submitAction": "placeStorePickupOrder",
              "order": 20
            }
          ]
        },
        {
          "id": "org_order_result",
          "type": "organism",
          "organismName": "PlaceStorePickupOrder",
          "titleKey": "org.order.result.title",
          "purpose": "Exibir o resumo do pedido registrado para confirmação do cliente",
          "userActions": [
            "placeStorePickupOrder"
          ],
          "requiredEntities": [
            "Order"
          ],
          "readsFields": [
            "orderId",
            "status",
            "customerName",
            "customerPhone",
            "createdAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentInStoreOnly",
            "pickupInStoreOnly"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "int_order_summary",
              "intent": "summary",
              "stateKey": "ui.productCatalog.output.placeStorePickupOrder",
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
    "id": "page11_pos_workspace",
    "type": "page",
    "sections": [
      {
        "id": "sec_catalog",
        "type": "section",
        "sectionName": "sec_catalog",
        "titleKey": "sec.catalog.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_browse_catalog",
            "type": "organism",
            "organismName": "BrowseProductCatalog",
            "titleKey": "org.browse.catalog.title",
            "purpose": "Navegar no catálogo de produtos com filtros de busca e categoria",
            "userActions": [
              "browseProductCatalog"
            ],
            "requiredEntities": [
              "Product",
              "ProductCategory"
            ],
            "readsFields": [
              "searchName",
              "productCategoryId",
              "productId",
              "name",
              "price",
              "imageUrl",
              "featured"
            ],
            "writesFields": [],
            "rulesApplied": [
              "featuredProductRequiresActive",
              "productImageUsesPlatformStorage"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int_browse_products",
                "intent": "queryList",
                "order": 10,
                "titleKey": "organism.browse.title",
                "source": "petShop.browseProductCatalog.browseProductCatalog",
                "binding": "query",
                "emptyKey": "empty.browse",
                "stateKey": "ui.productCatalog.data.browseProductCatalog",
                "fields": [],
                "columns": [
                  {
                    "id": "col_browse_image",
                    "field": "imageUrl",
                    "labelKey": "column.imageUrl",
                    "order": 10,
                    "required": false,
                    "inputType": "image",
                    "format": "image",
                    "stateKey": "ui.productCatalog.data.browseProductCatalog"
                  },
                  {
                    "id": "col_browse_name",
                    "field": "name",
                    "labelKey": "column.name",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.data.browseProductCatalog"
                  },
                  {
                    "id": "col_browse_price",
                    "field": "price",
                    "labelKey": "column.price",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.productCatalog.data.browseProductCatalog"
                  },
                  {
                    "id": "col_browse_category",
                    "field": "productCategoryId",
                    "labelKey": "column.productCategoryId",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.data.browseProductCatalog"
                  },
                  {
                    "id": "col_browse_featured",
                    "field": "featured",
                    "labelKey": "column.featured",
                    "order": 50,
                    "required": false,
                    "inputType": "boolean",
                    "stateKey": "ui.productCatalog.data.browseProductCatalog"
                  }
                ],
                "filters": [
                  {
                    "id": "flt_search_name",
                    "field": "searchName",
                    "labelKey": "field.searchName",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.input.browseProductCatalog.searchName"
                  },
                  {
                    "id": "flt_category",
                    "field": "productCategoryId",
                    "labelKey": "field.productCategoryId",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.productCatalog.input.browseProductCatalog.productCategoryId"
                  }
                ],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra_view_details",
                    "action": "viewProductDetails",
                    "labelKey": "action.viewProductDetails",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "viewProductDetails"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org_product_details",
            "type": "organism",
            "organismName": "ViewProductDetails",
            "titleKey": "org.product.details.title",
            "purpose": "Exibir detalhes completos do produto selecionado para decisão de compra",
            "userActions": [
              "viewProductDetails"
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
            "order": 20,
            "intentions": [
              {
                "id": "int_product_details",
                "intent": "queryList",
                "order": 10,
                "titleKey": "organism.details.title",
                "source": "petShop.viewProductDetails.viewProductDetails",
                "binding": "query",
                "emptyKey": "empty.details",
                "stateKey": "ui.productCatalog.data.viewProductDetails",
                "fields": [
                  {
                    "id": "fld_details_productId",
                    "field": "productId",
                    "labelKey": "field.productId",
                    "order": 10,
                    "required": true,
                    "inputType": "hidden",
                    "stateKey": "ui.productCatalog.input.viewProductDetails.productId"
                  },
                  {
                    "id": "fld_details_name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld_details_description",
                    "field": "description",
                    "labelKey": "field.description",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld_details_price",
                    "field": "price",
                    "labelKey": "field.price",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld_details_image",
                    "field": "imageUrl",
                    "labelKey": "field.imageUrl",
                    "order": 50,
                    "required": false,
                    "inputType": "image",
                    "format": "image",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld_details_category",
                    "field": "productCategoryId",
                    "labelKey": "field.productCategoryId",
                    "order": 60,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld_details_featured",
                    "field": "featured",
                    "labelKey": "field.featured",
                    "order": 70,
                    "required": false,
                    "inputType": "boolean",
                    "stateKey": "ui.productCatalog.data.viewProductDetails"
                  },
                  {
                    "id": "fld_details_status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 80,
                    "required": false,
                    "inputType": "text",
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
        "id": "sec_checkout",
        "type": "section",
        "sectionName": "Carrinho e Finalização do Pedido",
        "titleKey": "section.checkout.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org_cart_and_checkout",
            "type": "organism",
            "organismName": "PlaceStorePickupOrder",
            "titleKey": "org.cart.and.checkout.title",
            "purpose": "Revisar itens do carrinho, informar dados do cliente e finalizar pedido para retirada na loja",
            "userActions": [
              "placeStorePickupOrder"
            ],
            "requiredEntities": [
              "Order",
              "Product",
              "OrderItem"
            ],
            "readsFields": [
              "productId",
              "quantity",
              "unitPrice",
              "customerName",
              "customerPhone"
            ],
            "writesFields": [
              "orderId",
              "status",
              "customerName",
              "customerPhone",
              "createdAt"
            ],
            "rulesApplied": [
              "paymentInStoreOnly",
              "pickupInStoreOnly",
              "orderRequiresAtLeastOneItem"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int_cart_items",
                "intent": "queryList",
                "order": 10,
                "titleKey": "organism.cart.title",
                "emptyKey": "empty.cart",
                "displayHint": "repeatableSubForm",
                "fields": [],
                "columns": [
                  {
                    "id": "col_cart_product",
                    "field": "productId",
                    "labelKey": "column.productId",
                    "order": 10,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_cart_quantity",
                    "field": "quantity",
                    "labelKey": "column.quantity",
                    "order": 20,
                    "required": false,
                    "inputType": "number"
                  },
                  {
                    "id": "col_cart_unit_price",
                    "field": "unitPrice",
                    "labelKey": "column.unitPrice",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "format": "money"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int_checkout_form",
                "intent": "commandForm",
                "order": 20,
                "titleKey": "organism.checkout.title",
                "source": "petShop.placeStorePickupOrder.placeStorePickupOrder",
                "binding": "command",
                "action": "placeStorePickupOrder",
                "submitAction": "placeStorePickupOrder",
                "emptyKey": "empty.cart",
                "displayHint": "composedPayload",
                "stateKey": "ui.productCatalog.output.placeStorePickupOrder",
                "fields": [
                  {
                    "id": "fld_customer_name",
                    "field": "customerName",
                    "labelKey": "field.customerName",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.input.placeStorePickupOrder.customerName"
                  },
                  {
                    "id": "fld_customer_phone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.input.placeStorePickupOrder.customerPhone"
                  },
                  {
                    "id": "fld_item_product",
                    "field": "productId",
                    "labelKey": "field.productId",
                    "order": 30,
                    "required": true,
                    "inputType": "select"
                  },
                  {
                    "id": "fld_item_quantity",
                    "field": "quantity",
                    "labelKey": "field.quantity",
                    "order": 40,
                    "required": true,
                    "inputType": "number"
                  },
                  {
                    "id": "fld_item_unit_price",
                    "field": "unitPrice",
                    "labelKey": "field.unitPrice",
                    "order": 50,
                    "required": true,
                    "inputType": "number",
                    "format": "money"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_submit_order",
                    "action": "placeStorePickupOrder",
                    "labelKey": "action.placeStorePickupOrder",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "placeStorePickupOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_order_result",
            "type": "organism",
            "organismName": "PlaceStorePickupOrder",
            "titleKey": "org.order.result.title",
            "purpose": "Exibir o resumo do pedido registrado para confirmação do cliente",
            "userActions": [
              "placeStorePickupOrder"
            ],
            "requiredEntities": [
              "Order"
            ],
            "readsFields": [
              "orderId",
              "status",
              "customerName",
              "customerPhone",
              "createdAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentInStoreOnly",
              "pickupInStoreOnly"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "int_order_summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "organism.summary.title",
                "emptyKey": "empty.summary",
                "stateKey": "ui.productCatalog.output.placeStorePickupOrder",
                "fields": [
                  {
                    "id": "fld_summary_order_id",
                    "field": "orderId",
                    "labelKey": "field.orderId",
                    "order": 10,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld_summary_status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 20,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld_summary_customer_name",
                    "field": "customerName",
                    "labelKey": "field.customerName",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.input.placeStorePickupOrder.customerName"
                  },
                  {
                    "id": "fld_summary_customer_phone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.productCatalog.input.placeStorePickupOrder.customerPhone"
                  },
                  {
                    "id": "fld_summary_created_at",
                    "field": "createdAt",
                    "labelKey": "field.createdAt",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "format": "datetime"
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
      "id": "bind_browse",
      "source": "petShop.browseProductCatalog.browseProductCatalog",
      "entity": "Product",
      "command": "browseProductCatalog",
      "description": "Lista produtos ativos do catálogo com filtros de busca e categoria",
      "stateKey": "ui.productCatalog.data.browseProductCatalog",
      "inputStateKeys": [
        "ui.productCatalog.input.browseProductCatalog.searchName",
        "ui.productCatalog.input.browseProductCatalog.productCategoryId"
      ]
    },
    {
      "id": "bind_details",
      "source": "petShop.viewProductDetails.viewProductDetails",
      "entity": "Product",
      "command": "viewProductDetails",
      "description": "Carrega detalhes completos do produto selecionado",
      "stateKey": "ui.productCatalog.data.viewProductDetails",
      "inputStateKeys": [
        "ui.productCatalog.input.viewProductDetails.productId"
      ]
    },
    {
      "id": "bind_order",
      "source": "petShop.placeStorePickupOrder.placeStorePickupOrder",
      "entity": "Order",
      "command": "placeStorePickupOrder",
      "description": "Registra pedido de retirada com itens do carrinho e dados do cliente",
      "stateKey": "ui.productCatalog.output.placeStorePickupOrder",
      "inputStateKeys": [
        "ui.productCatalog.input.placeStorePickupOrder.customerName",
        "ui.productCatalog.input.placeStorePickupOrder.customerPhone"
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
      "_102049_/l2/petShop/web/shared/productCatalog.defs.ts",
      "_102049_/l2/petShop/web/shared/productCatalog.ts",
      "_102049_/l2/petShop/web/contracts/productCatalog.defs.ts",
      "_102049_/l2/petShop/web/contracts/productCatalog.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "productCatalog__l2_shared"
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
