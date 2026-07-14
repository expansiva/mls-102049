/// <mls fileReference="_102049_/l2/petShop/web/contracts/productManagement.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseProducts",
    "bffName": "petShop.browseProducts.browseProducts",
    "routeKey": "petShop.browseProducts.browseProducts",
    "purpose": "Listar produtos cadastrados",
    "kind": "query",
    "outputShape": "paginated",
    "input": [
      {
        "name": "searchName",
        "type": "string",
        "required": false,
        "description": "Texto de busca para filtrar produtos pelo nome.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "filterStatus",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Filtro de situação do produto: ativo ou inativo.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "filterProductCategoryId",
        "type": "string",
        "required": false,
        "description": "Filtro por categoria de produto.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "filterFeatured",
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
        "description": "Identificador único do produto no catálogo."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do produto exibido no catálogo e na página inicial."
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
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de cadastro do produto."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do produto."
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
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do produto exibido no catálogo e na página inicial.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição detalhada do produto para o cliente.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço do produto cobrado na retirada presencial na loja.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "imageUrl",
        "type": "string",
        "required": false,
        "description": "URL da imagem do produto no armazenamento de mídia da plataforma.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "productCategoryId",
        "type": "string",
        "required": true,
        "description": "Categoria do produto selecionada pelo administrador.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "featured",
        "type": "boolean",
        "required": true,
        "description": "Indica se o produto deve ser exibido em destaque na página inicial.",
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
        "name": "price",
        "type": "number",
        "description": "Preço do produto cobrado na retirada presencial na loja."
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
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de cadastro do produto."
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
    "purpose": "Editar produto e definir destaque",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "productId",
        "type": "string",
        "required": true,
        "description": "Identificador do produto selecionado para edição.",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome atualizado do produto exibido no catálogo.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição detalhada atualizada do produto.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço atualizado do produto cobrado na retirada presencial.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "imageUrl",
        "type": "string",
        "required": false,
        "description": "URL da imagem do produto no armazenamento de mídia da plataforma.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "productCategoryId",
        "type": "string",
        "required": true,
        "description": "Categoria do produto selecionada na lista de categorias cadastradas.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "featured",
        "type": "boolean",
        "required": true,
        "description": "Indica se o produto deve ser exibido em destaque na página inicial.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação do produto: ativo ou inativo.",
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
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação do produto no catálogo: ativo ou inativo."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do produto."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateProduct",
      "operationId": "updateProduct",
      "defPath": "_102049_/l4/operations/updateProduct.defs.ts",
      "bffName": "petShop.updateProduct.updateProduct"
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
