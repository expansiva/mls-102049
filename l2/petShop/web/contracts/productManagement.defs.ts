/// <mls fileReference="_102049_/l2/petShop/web/contracts/productManagement.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseProducts",
    "bffName": "petShop.browseProducts.browseProducts",
    "routeKey": "petShop.browseProducts.browseProducts",
    "purpose": "Listar produtos do catálogo",
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
        "name": "searchTerm",
        "type": "string",
        "required": false,
        "description": "Termo de busca para filtrar produtos por nome com correspondência parcial e insensível a maiúsculas e minúsculas.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": false,
        "description": "Filtro por tipo de pet indicado para o produto.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": false,
        "description": "Filtro por categoria do catálogo.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "priceMin",
        "type": "number",
        "required": false,
        "description": "Filtro de faixa de preço — valor mínimo (inclusive).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "priceMax",
        "type": "number",
        "required": false,
        "description": "Filtro de faixa de preço — valor máximo (inclusive).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "available",
          "unavailable"
        ],
        "description": "Filtro por status de disponibilidade do produto (available ou unavailable).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": false,
        "description": "Filtro para exibir apenas produtos marcados como destaque.",
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
      "ownerId": "operation:browseProducts",
      "operationId": "browseProducts",
      "defPath": "_102049_/l4/operations/browseProducts.defs.ts",
      "bffName": "petShop.browseProducts.browseProducts"
    }
  },
  {
    "commandName": "createProduct",
    "bffName": "petShop.createProduct.createProduct",
    "routeKey": "petShop.createProduct.createProduct",
    "purpose": "Cadastrar produto",
    "kind": "command",
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
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do produto informado pela loja.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição detalhada do produto (opcional).",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço do produto informado pela loja.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": true,
        "description": "Referência ao tipo de pet indicado para o produto.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": true,
        "description": "Referência à categoria do catálogo à qual o produto pertence.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": true,
        "description": "Indica se o produto deve ser marcado como destaque pela loja.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "available",
          "unavailable"
        ],
        "description": "Disponibilidade do produto: available ou unavailable.",
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
      "ownerId": "operation:createProduct",
      "operationId": "createProduct",
      "defPath": "_102049_/l4/operations/createProduct.defs.ts",
      "bffName": "petShop.createProduct.createProduct"
    }
  },
  {
    "commandName": "updateProduct",
    "bffName": "petShop.updateProduct.updateProduct",
    "routeKey": "petShop.updateProduct.updateProduct",
    "purpose": "Editar produto",
    "kind": "command",
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
        "description": "Identificador do produto que está sendo editado",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "description": "Novo nome do produto, se alterado",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Nova descrição do produto, se alterada",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "price",
        "type": "number",
        "required": false,
        "description": "Novo preço do produto, se alterado",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "petTypeId",
        "type": "string",
        "required": false,
        "description": "Novo tipo de pet indicado para o produto, se alterado",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "categoryId",
        "type": "string",
        "required": false,
        "description": "Nova categoria do produto, se alterada",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": false,
        "description": "Nova flag de destaque do produto, se alterada",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "available",
          "unavailable"
        ],
        "description": "Nova disponibilidade do produto (available ou unavailable), se alterada",
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
      "ownerId": "operation:updateProduct",
      "operationId": "updateProduct",
      "defPath": "_102049_/l4/operations/updateProduct.defs.ts",
      "bffName": "petShop.updateProduct.updateProduct"
    }
  },
  {
    "commandName": "setProductHighlights",
    "bffName": "petShop.setProductHighlights.setProductHighlights",
    "routeKey": "petShop.setProductHighlights.setProductHighlights",
    "purpose": "Definir produtos em destaque",
    "kind": "command",
    "outputShape": "object",
    "canonicalOutputShape": {
      "kind": "object",
      "fields": [
        {
          "name": "updatedCount",
          "type": "number",
          "required": true
        },
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
        }
      ]
    },
    "input": [
      {
        "name": "productIds",
        "type": "string[]",
        "required": true,
        "description": "Lista de IDs dos produtos que terão o destaque alterado.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "highlighted",
        "type": "boolean",
        "required": true,
        "description": "Valor do destaque a ser aplicado: true para marcar como destaque, false para remover o destaque.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "updatedCount",
        "type": "number",
        "required": true
      },
      {
        "name": "products",
        "type": "array",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:setProductHighlights",
      "operationId": "setProductHighlights",
      "defPath": "_102049_/l4/operations/setProductHighlights.defs.ts",
      "bffName": "petShop.setProductHighlights.setProductHighlights"
    }
  }
];

export const pipeline = [
  {
    "id": "productManagement__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/productManagement.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/productManagement.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
