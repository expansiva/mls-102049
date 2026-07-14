/// <mls fileReference="_102049_/l2/petShop/web/contracts/homePage.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseHomePage",
    "bffName": "petShop.browseHomePage.browseHomePage",
    "routeKey": "petShop.browseHomePage.browseHomePage",
    "purpose": "Explorar página inicial",
    "kind": "query",
    "outputShape": "paginated",
    "input": [],
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
      "ownerId": "operation:browseHomePage",
      "operationId": "browseHomePage",
      "defPath": "_102049_/l4/operations/browseHomePage.defs.ts",
      "bffName": "petShop.browseHomePage.browseHomePage"
    }
  }
];

export const pipeline = [
  {
    "id": "homePage__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/homePage.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/homePage.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
