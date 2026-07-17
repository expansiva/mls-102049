/// <mls fileReference="_102049_/l2/petShop/web/contracts/productCatalog.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "viewHighlights",
    "bffName": "petShop.viewHighlights.viewHighlights",
    "routeKey": "petShop.viewHighlights.viewHighlights",
    "purpose": "Visualizar produtos em destaque",
    "kind": "query",
    "outputShape": "array",
    "canonicalOutputShape": {
      "kind": "list",
      "fields": [
        {
          "name": "productId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.productId"
        },
        {
          "name": "name",
          "type": "string",
          "required": true,
          "fieldRef": "Product.name"
        },
        {
          "name": "description",
          "type": "string",
          "required": false,
          "fieldRef": "Product.description"
        },
        {
          "name": "price",
          "type": "number",
          "required": true,
          "fieldRef": "Product.price"
        },
        {
          "name": "petTypeId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.petTypeId"
        },
        {
          "name": "categoryId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.categoryId"
        },
        {
          "name": "highlighted",
          "type": "boolean",
          "required": true,
          "fieldRef": "Product.highlighted"
        },
        {
          "name": "status",
          "type": "string",
          "required": true,
          "fieldRef": "Product.status"
        }
      ]
    },
    "input": [],
    "output": [
      {
        "name": "productId",
        "type": "string",
        "required": true
      },
      {
        "name": "name",
        "type": "string",
        "required": true
      },
      {
        "name": "description",
        "type": "string",
        "required": false
      },
      {
        "name": "price",
        "type": "number",
        "required": true
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": true
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": true
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": true
      },
      {
        "name": "status",
        "type": "string",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewHighlights",
      "operationId": "viewHighlights",
      "defPath": "_102049_/l4/operations/viewHighlights.defs.ts",
      "bffName": "petShop.viewHighlights.viewHighlights"
    }
  },
  {
    "commandName": "browseCatalog",
    "bffName": "petShop.browseCatalog.browseCatalog",
    "routeKey": "petShop.browseCatalog.browseCatalog",
    "purpose": "Navegar pelo catálogo completo",
    "kind": "query",
    "outputShape": "paginated",
    "canonicalOutputShape": {
      "kind": "paginated",
      "fields": [
        {
          "name": "products",
          "type": "array",
          "required": true,
          "item": {
            "fields": [
              {
                "name": "productId",
                "type": "string",
                "required": true,
                "fieldRef": "Product.productId"
              },
              {
                "name": "name",
                "type": "string",
                "required": true,
                "fieldRef": "Product.name"
              },
              {
                "name": "description",
                "type": "string",
                "required": false,
                "fieldRef": "Product.description"
              },
              {
                "name": "price",
                "type": "number",
                "required": true,
                "fieldRef": "Product.price"
              },
              {
                "name": "petTypeId",
                "type": "string",
                "required": true,
                "fieldRef": "Product.petTypeId"
              },
              {
                "name": "petTypeName",
                "type": "string",
                "required": false
              },
              {
                "name": "categoryId",
                "type": "string",
                "required": true,
                "fieldRef": "Product.categoryId"
              },
              {
                "name": "categoryName",
                "type": "string",
                "required": false
              },
              {
                "name": "highlighted",
                "type": "boolean",
                "required": true,
                "fieldRef": "Product.highlighted"
              },
              {
                "name": "status",
                "type": "string",
                "required": true,
                "fieldRef": "Product.status"
              }
            ]
          }
        },
        {
          "name": "total",
          "type": "number",
          "required": true
        },
        {
          "name": "page",
          "type": "number",
          "required": true
        },
        {
          "name": "pageSize",
          "type": "number",
          "required": true
        }
      ]
    },
    "input": [
      {
        "name": "searchTerm",
        "type": "string",
        "required": false,
        "description": "Termo de busca para filtrar produtos por nome, insensível a maiúsculas e minúsculas com correspondência parcial",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": false,
        "description": "Identificador do tipo de pet para filtrar produtos indicados para esse tipo",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": false,
        "description": "Identificador da categoria para filtrar produtos pertencentes a essa categoria",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "minPrice",
        "type": "number",
        "required": false,
        "description": "Preço mínimo da faixa de valor para filtragem por faixa de preço",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "maxPrice",
        "type": "number",
        "required": false,
        "description": "Preço máximo da faixa de valor para filtragem por faixa de preço",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "products",
        "type": "array",
        "required": true
      },
      {
        "name": "total",
        "type": "number",
        "required": true
      },
      {
        "name": "page",
        "type": "number",
        "required": true
      },
      {
        "name": "pageSize",
        "type": "number",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:browseCatalog",
      "operationId": "browseCatalog",
      "defPath": "_102049_/l4/operations/browseCatalog.defs.ts",
      "bffName": "petShop.browseCatalog.browseCatalog"
    }
  },
  {
    "commandName": "searchProducts",
    "bffName": "petShop.searchProducts.searchProducts",
    "routeKey": "petShop.searchProducts.searchProducts",
    "purpose": "Buscar produtos por nome",
    "kind": "query",
    "outputShape": "array",
    "canonicalOutputShape": {
      "kind": "list",
      "fields": [
        {
          "name": "productId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.productId"
        },
        {
          "name": "name",
          "type": "string",
          "required": true,
          "fieldRef": "Product.name"
        },
        {
          "name": "description",
          "type": "string",
          "required": false,
          "fieldRef": "Product.description"
        },
        {
          "name": "price",
          "type": "number",
          "required": true,
          "fieldRef": "Product.price"
        },
        {
          "name": "petTypeId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.petTypeId"
        },
        {
          "name": "petTypeName",
          "type": "string",
          "required": true,
          "fieldRef": "PetType.name"
        },
        {
          "name": "categoryId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.categoryId"
        },
        {
          "name": "categoryName",
          "type": "string",
          "required": true,
          "fieldRef": "Category.name"
        },
        {
          "name": "highlighted",
          "type": "boolean",
          "required": true,
          "fieldRef": "Product.highlighted"
        },
        {
          "name": "status",
          "type": "string",
          "required": true,
          "fieldRef": "Product.status"
        }
      ]
    },
    "input": [
      {
        "name": "searchTerm",
        "type": "string",
        "required": true,
        "description": "Termo de busca digitado pelo cliente para encontrar produtos por nome (correspondência parcial e insensível a caixa)",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": false,
        "description": "Filtro opcional por tipo de pet indicado para o produto",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": false,
        "description": "Filtro opcional por categoria do catálogo",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "minPrice",
        "type": "number",
        "required": false,
        "description": "Filtro opcional de preço mínimo para faixa de valor",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "maxPrice",
        "type": "number",
        "required": false,
        "description": "Filtro opcional de preço máximo para faixa de valor",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "productId",
        "type": "string",
        "required": true
      },
      {
        "name": "name",
        "type": "string",
        "required": true
      },
      {
        "name": "description",
        "type": "string",
        "required": false
      },
      {
        "name": "price",
        "type": "number",
        "required": true
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": true
      },
      {
        "name": "petTypeName",
        "type": "string",
        "required": true
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": true
      },
      {
        "name": "categoryName",
        "type": "string",
        "required": true
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": true
      },
      {
        "name": "status",
        "type": "string",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:searchProducts",
      "operationId": "searchProducts",
      "defPath": "_102049_/l4/operations/searchProducts.defs.ts",
      "bffName": "petShop.searchProducts.searchProducts"
    }
  },
  {
    "commandName": "filterProducts",
    "bffName": "petShop.filterProducts.filterProducts",
    "routeKey": "petShop.filterProducts.filterProducts",
    "purpose": "Filtrar produtos por tipo de pet, categoria e faixa de valor",
    "kind": "query",
    "outputShape": "array",
    "canonicalOutputShape": {
      "kind": "list",
      "fields": [
        {
          "name": "productId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.productId"
        },
        {
          "name": "name",
          "type": "string",
          "required": true,
          "fieldRef": "Product.name"
        },
        {
          "name": "description",
          "type": "string",
          "required": false,
          "fieldRef": "Product.description"
        },
        {
          "name": "price",
          "type": "number",
          "required": true,
          "fieldRef": "Product.price"
        },
        {
          "name": "petTypeId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.petTypeId"
        },
        {
          "name": "categoryId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.categoryId"
        },
        {
          "name": "highlighted",
          "type": "boolean",
          "required": true,
          "fieldRef": "Product.highlighted"
        },
        {
          "name": "status",
          "type": "string",
          "required": true,
          "fieldRef": "Product.status"
        }
      ]
    },
    "input": [
      {
        "name": "petTypeId",
        "type": "string",
        "required": false,
        "description": "Tipo de pet selecionado para filtrar o catálogo (ex.: cão, gato).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": false,
        "description": "Categoria selecionada para filtrar o catálogo (ex.: ração, brinquedo).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "minPrice",
        "type": "number",
        "required": false,
        "description": "Preço mínimo da faixa de valor informada pelo cliente.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "maxPrice",
        "type": "number",
        "required": false,
        "description": "Preço máximo da faixa de valor informada pelo cliente.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "productId",
        "type": "string",
        "required": true
      },
      {
        "name": "name",
        "type": "string",
        "required": true
      },
      {
        "name": "description",
        "type": "string",
        "required": false
      },
      {
        "name": "price",
        "type": "number",
        "required": true
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": true
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": true
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": true
      },
      {
        "name": "status",
        "type": "string",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:filterProducts",
      "operationId": "filterProducts",
      "defPath": "_102049_/l4/operations/filterProducts.defs.ts",
      "bffName": "petShop.filterProducts.filterProducts"
    }
  },
  {
    "commandName": "viewProductDetails",
    "bffName": "petShop.viewProductDetails.viewProductDetails",
    "routeKey": "petShop.viewProductDetails.viewProductDetails",
    "purpose": "Ver detalhes de um produto",
    "kind": "query",
    "outputShape": "object",
    "canonicalOutputShape": {
      "kind": "object",
      "fields": [
        {
          "name": "productId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.productId"
        },
        {
          "name": "name",
          "type": "string",
          "required": true,
          "fieldRef": "Product.name"
        },
        {
          "name": "description",
          "type": "string",
          "required": false,
          "fieldRef": "Product.description"
        },
        {
          "name": "price",
          "type": "number",
          "required": true,
          "fieldRef": "Product.price"
        },
        {
          "name": "petTypeId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.petTypeId"
        },
        {
          "name": "petTypeName",
          "type": "string",
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "required": true,
          "fieldRef": "Product.categoryId"
        },
        {
          "name": "categoryName",
          "type": "string",
          "required": true
        },
        {
          "name": "highlighted",
          "type": "boolean",
          "required": true,
          "fieldRef": "Product.highlighted"
        },
        {
          "name": "status",
          "type": "string",
          "required": true,
          "fieldRef": "Product.status"
        },
        {
          "name": "createdAt",
          "type": "string",
          "required": true,
          "fieldRef": "Product.createdAt"
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true,
          "fieldRef": "Product.updatedAt"
        }
      ]
    },
    "input": [
      {
        "name": "productId",
        "type": "string",
        "required": true,
        "description": "Identificador do produto selecionado pelo cliente na vitrine ou nos resultados de busca",
        "source": "routeParam",
        "presentation": "route"
      }
    ],
    "output": [
      {
        "name": "productId",
        "type": "string",
        "required": true
      },
      {
        "name": "name",
        "type": "string",
        "required": true
      },
      {
        "name": "description",
        "type": "string",
        "required": false
      },
      {
        "name": "price",
        "type": "number",
        "required": true
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": true
      },
      {
        "name": "petTypeName",
        "type": "string",
        "required": true
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": true
      },
      {
        "name": "categoryName",
        "type": "string",
        "required": true
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": true
      },
      {
        "name": "status",
        "type": "string",
        "required": true
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewProductDetails",
      "operationId": "viewProductDetails",
      "defPath": "_102049_/l4/operations/viewProductDetails.defs.ts",
      "bffName": "petShop.viewProductDetails.viewProductDetails"
    }
  }
];

export const pipeline = [
  {
    "id": "productCatalog__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/productCatalog.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/productCatalog.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
