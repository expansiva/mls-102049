/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/catalog.defs.ts" enhancement="_blank"/>

export const catalogController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "catalog",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "catalog",
    "controllerName": "CatalogController",
    "ownerKind": "workspace",
    "workspaceId": "catalog",
    "actors": [
      "cliente"
    ],
    "allowedScopes": [
      "petShop:cliente"
    ],
    "handlers": [
      {
        "handlerName": "catalogFeaturedProductsHandler",
        "command": "featuredProducts",
        "bffId": "featuredProducts",
        "route": "petShop.catalog.featuredProducts",
        "kind": "query",
        "usecaseRef": "browseFeaturedProducts",
        "usecaseRefs": [
          "browseFeaturedProducts"
        ],
        "inputTypeName": "BrowseFeaturedProductsInput",
        "inputContract": [
          {
            "inputId": "categoryId",
            "fieldRef": "Product.categoryId",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional por categoria do produto"
          },
          {
            "inputId": "petTypeId",
            "fieldRef": "Product.petTypeId",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional por tipo de pet associado ao produto"
          },
          {
            "inputId": "name",
            "fieldRef": "Product.name",
            "required": false,
            "source": "userInput",
            "description": "Termo de pesquisa opcional para filtrar produtos por nome (insensível a caixa)"
          },
          {
            "inputId": "priceMin",
            "fieldRef": "Product.price",
            "required": false,
            "source": "userInput",
            "description": "Valor mínimo opcional para filtrar produtos por faixa de preço"
          },
          {
            "inputId": "priceMax",
            "fieldRef": "Product.price",
            "required": false,
            "source": "userInput",
            "description": "Valor máximo opcional para filtrar produtos por faixa de preço"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Número da página para paginação opcional dos resultados"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Quantidade de itens por página para paginação opcional dos resultados"
          }
        ],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "productId",
              "operationId": "browseFeaturedProducts",
              "path": [
                "productId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "browseFeaturedProducts",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "price",
              "operationId": "browseFeaturedProducts",
              "path": [
                "price"
              ],
              "fromItems": true
            },
            {
              "name": "isFeatured",
              "operationId": "browseFeaturedProducts",
              "path": [
                "isFeatured"
              ],
              "fromItems": true
            },
            {
              "name": "categoryId",
              "operationId": "browseFeaturedProducts",
              "path": [
                "categoryId"
              ],
              "fromItems": true
            },
            {
              "name": "petTypeId",
              "operationId": "browseFeaturedProducts",
              "path": [
                "petTypeId"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "catalogBrowseCatalogHandler",
        "command": "browseCatalog",
        "bffId": "browseCatalog",
        "route": "petShop.catalog.browseCatalog",
        "kind": "query",
        "usecaseRef": "browseProducts",
        "usecaseRefs": [
          "browseProducts"
        ],
        "inputTypeName": "BrowseProductsInput",
        "inputContract": [
          {
            "inputId": "searchName",
            "fieldRef": "",
            "type": "string",
            "required": false,
            "source": "userInput",
            "description": "Texto parcial do nome do produto para pesquisa insensível a caixa"
          },
          {
            "inputId": "petTypeId",
            "fieldRef": "",
            "type": "string",
            "required": false,
            "source": "userInput",
            "description": "Identificador do tipo de pet para filtrar produtos adequados"
          },
          {
            "inputId": "categoryId",
            "fieldRef": "",
            "type": "string",
            "required": false,
            "source": "userInput",
            "description": "Identificador da categoria para filtrar produtos"
          },
          {
            "inputId": "minPrice",
            "fieldRef": "",
            "type": "string",
            "required": false,
            "source": "userInput",
            "description": "Valor mínimo da faixa de preço para filtrar produtos dentro do orçamento"
          },
          {
            "inputId": "maxPrice",
            "fieldRef": "",
            "type": "string",
            "required": false,
            "source": "userInput",
            "description": "Valor máximo da faixa de preço para filtrar produtos dentro do orçamento"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Número da página atual para paginação dos resultados"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Quantidade de itens por página"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "items",
          "itemFields": [
            {
              "name": "productId",
              "operationId": "browseProducts",
              "path": [
                "productId"
              ],
              "fromItems": true
            },
            {
              "name": "name",
              "operationId": "browseProducts",
              "path": [
                "name"
              ],
              "fromItems": true
            },
            {
              "name": "price",
              "operationId": "browseProducts",
              "path": [
                "price"
              ],
              "fromItems": true
            },
            {
              "name": "isFeatured",
              "operationId": "browseProducts",
              "path": [
                "isFeatured"
              ],
              "fromItems": true
            },
            {
              "name": "categoryId",
              "operationId": "browseProducts",
              "path": [
                "categoryId"
              ],
              "fromItems": true
            },
            {
              "name": "categoryName",
              "operationId": "browseProducts",
              "path": [
                "categoryName"
              ],
              "fromItems": true
            },
            {
              "name": "petTypeId",
              "operationId": "browseProducts",
              "path": [
                "petTypeId"
              ],
              "fromItems": true
            },
            {
              "name": "petTypeName",
              "operationId": "browseProducts",
              "path": [
                "petTypeName"
              ],
              "fromItems": true
            },
            {
              "name": "createdAt",
              "operationId": "browseProducts",
              "path": [
                "createdAt"
              ],
              "fromItems": true
            },
            {
              "name": "updatedAt",
              "operationId": "browseProducts",
              "path": [
                "updatedAt"
              ],
              "fromItems": true
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "browseProducts",
              "path": [
                "total"
              ],
              "fromItems": false
            },
            {
              "name": "page",
              "operationId": "browseProducts",
              "path": [
                "page"
              ],
              "fromItems": false
            },
            {
              "name": "pageSize",
              "operationId": "browseProducts",
              "path": [
                "pageSize"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "catalogProductDetailsHandler",
        "command": "productDetails",
        "bffId": "productDetails",
        "route": "petShop.catalog.productDetails",
        "kind": "query",
        "usecaseRef": "viewProductDetails",
        "usecaseRefs": [
          "viewProductDetails"
        ],
        "inputTypeName": "ViewProductDetailsInput",
        "inputContract": [
          {
            "inputId": "productId",
            "fieldRef": "Product.productId",
            "required": true,
            "source": "routeParam",
            "description": "Identificador do produto selecionado pelo cliente na vitrine ou na lista do catálogo"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "productId",
              "operationId": "viewProductDetails",
              "path": [
                "productId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "viewProductDetails",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "price",
              "operationId": "viewProductDetails",
              "path": [
                "price"
              ],
              "fromItems": false
            },
            {
              "name": "isFeatured",
              "operationId": "viewProductDetails",
              "path": [
                "isFeatured"
              ],
              "fromItems": false
            },
            {
              "name": "categoryId",
              "operationId": "viewProductDetails",
              "path": [
                "categoryId"
              ],
              "fromItems": false
            },
            {
              "name": "categoryName",
              "operationId": "viewProductDetails",
              "path": [
                "categoryName"
              ],
              "fromItems": false
            },
            {
              "name": "petTypeId",
              "operationId": "viewProductDetails",
              "path": [
                "petTypeId"
              ],
              "fromItems": false
            },
            {
              "name": "petTypeName",
              "operationId": "viewProductDetails",
              "path": [
                "petTypeName"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "viewProductDetails",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "viewProductDetails",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "catalogReserveProductHandler",
        "command": "reserveProduct",
        "bffId": "reserveProduct",
        "route": "petShop.catalog.reserveProduct",
        "kind": "command",
        "usecaseRef": "createReservation",
        "usecaseRefs": [
          "createReservation"
        ],
        "inputTypeName": "CreateReservationInput",
        "inputContract": [
          {
            "inputId": "customerName",
            "fieldRef": "Reservation.customerName",
            "required": true,
            "source": "userInput",
            "description": "Nome do cliente que está fazendo a reserva"
          },
          {
            "inputId": "customerPhone",
            "fieldRef": "Reservation.customerPhone",
            "required": true,
            "source": "userInput",
            "description": "Telefone de contato do cliente para identificação na loja"
          },
          {
            "inputId": "productId",
            "fieldRef": "Product.productId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do produto selecionado na tela de detalhes que o cliente deseja reservar"
          },
          {
            "inputId": "quantity",
            "fieldRef": "",
            "type": "number",
            "required": true,
            "source": "userInput",
            "description": "Quantidade de unidades do produto que o cliente deseja reservar"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "reservationId",
              "operationId": "createReservation",
              "path": [
                "reservationId"
              ],
              "fromItems": false
            },
            {
              "name": "customerName",
              "operationId": "createReservation",
              "path": [
                "customerName"
              ],
              "fromItems": false
            },
            {
              "name": "customerPhone",
              "operationId": "createReservation",
              "path": [
                "customerPhone"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createReservation",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "expiresAt",
              "operationId": "createReservation",
              "path": [
                "expiresAt"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createReservation",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "items",
              "operationId": "createReservation",
              "path": [
                "items"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "petShop.catalog.featuredProducts",
        "handlerName": "catalogFeaturedProductsHandler"
      },
      {
        "key": "petShop.catalog.browseCatalog",
        "handlerName": "catalogBrowseCatalogHandler"
      },
      {
        "key": "petShop.catalog.productDetails",
        "handlerName": "catalogProductDetailsHandler"
      },
      {
        "key": "petShop.catalog.reserveProduct",
        "handlerName": "catalogReserveProductHandler"
      }
    ]
  }
} as const;

export default catalogController;

export const pipeline = [
  {
    "id": "catalog__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/catalog.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/catalog.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseFeaturedProducts.d.ts",
      "_102049_/l4/petShop/contracts/catalog.featuredProducts.defs.ts",
      "_102049_/l1/petShop/layer_2_application/usecases/browseProducts.d.ts",
      "_102049_/l4/petShop/contracts/catalog.browseCatalog.defs.ts",
      "_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.d.ts",
      "_102049_/l4/petShop/contracts/catalog.productDetails.defs.ts",
      "_102049_/l1/petShop/layer_2_application/usecases/createReservation.d.ts",
      "_102049_/l4/petShop/contracts/catalog.reserveProduct.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
