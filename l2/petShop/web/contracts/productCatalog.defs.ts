/// <mls fileReference="_102049_/l2/petShop/web/contracts/productCatalog.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseProductCatalog",
    "bffName": "petShop.browseProductCatalog.browseProductCatalog",
    "routeKey": "petShop.browseProductCatalog.browseProductCatalog",
    "purpose": "Navegar no catálogo de produtos",
    "kind": "query",
    "outputShape": "paginated",
    "input": [
      {
        "name": "searchName",
        "type": "string",
        "required": false,
        "description": "Texto de busca para filtrar produtos pelo nome",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "productCategoryId",
        "type": "string",
        "required": false,
        "description": "Identificador da categoria para filtrar os produtos do catálogo",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "productId",
        "type": "string",
        "description": "Identificador único do produto no catálogo."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do produto exibido no catálogo e na página inicial."
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição detalhada do produto para o cliente."
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço do produto cobrado na retirada presencial na loja."
      },
      {
        "name": "imageUrl",
        "type": "string",
        "description": "URL da imagem do produto armazenada no armazenamento de mídia da plataforma."
      },
      {
        "name": "productCategoryId",
        "type": "string",
        "description": "Referência à categoria de produto à qual o produto pertence."
      },
      {
        "name": "featured",
        "type": "boolean",
        "description": "Indica se o produto deve ser exibido em destaque na página inicial."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:browseProductCatalog",
      "operationId": "browseProductCatalog",
      "defPath": "_102049_/l4/operations/browseProductCatalog.defs.ts",
      "bffName": "petShop.browseProductCatalog.browseProductCatalog"
    }
  },
  {
    "commandName": "viewProductDetails",
    "bffName": "petShop.viewProductDetails.viewProductDetails",
    "routeKey": "petShop.viewProductDetails.viewProductDetails",
    "purpose": "Ver detalhes do produto",
    "kind": "query",
    "outputShape": "object",
    "input": [
      {
        "name": "productId",
        "type": "string",
        "required": true,
        "description": "Identificador do produto selecionado pelo cliente para visualização dos detalhes.",
        "source": "routeParam",
        "presentation": "route"
      }
    ],
    "output": [
      {
        "name": "productId",
        "type": "string",
        "description": "Identificador único do produto no catálogo."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do produto exibido no catálogo e na página inicial."
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição detalhada do produto para o cliente."
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço do produto cobrado na retirada presencial na loja."
      },
      {
        "name": "imageUrl",
        "type": "string",
        "description": "URL da imagem do produto armazenada no armazenamento de mídia da plataforma."
      },
      {
        "name": "productCategoryId",
        "type": "string",
        "description": "Referência à categoria de produto à qual o produto pertence."
      },
      {
        "name": "featured",
        "type": "boolean",
        "description": "Indica se o produto deve ser exibido em destaque na página inicial."
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação do produto no catálogo: ativo ou inativo."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewProductDetails",
      "operationId": "viewProductDetails",
      "defPath": "_102049_/l4/operations/viewProductDetails.defs.ts",
      "bffName": "petShop.viewProductDetails.viewProductDetails"
    }
  },
  {
    "commandName": "placeStorePickupOrder",
    "bffName": "petShop.placeStorePickupOrder.placeStorePickupOrder",
    "routeKey": "petShop.placeStorePickupOrder.placeStorePickupOrder",
    "purpose": "Finalizar pedido para retirada na loja",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "customerName",
        "type": "string",
        "required": true,
        "description": "Nome do cliente que está finalizando o pedido de retirada",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "customerPhone",
        "type": "string",
        "required": false,
        "description": "Telefone de contato opcional do cliente para confirmação da retirada",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "orderId",
        "type": "string",
        "description": "Identificador único do pedido de retirada."
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "registered",
          "completed",
          "cancelled"
        ],
        "description": "Situação atual do pedido: registrado, concluído ou cancelado."
      },
      {
        "name": "customerName",
        "type": "string",
        "description": "Nome do cliente que realizou o pedido de retirada."
      },
      {
        "name": "customerPhone",
        "type": "string",
        "description": "Telefone de contato do cliente para confirmação da retirada."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora em que o pedido foi registrado."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:placeStorePickupOrder",
      "operationId": "placeStorePickupOrder",
      "defPath": "_102049_/l4/operations/placeStorePickupOrder.defs.ts",
      "bffName": "petShop.placeStorePickupOrder.placeStorePickupOrder"
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
