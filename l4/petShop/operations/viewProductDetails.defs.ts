/// <mls fileReference="_102049_/l4/petShop/operations/viewProductDetails.defs.ts" enhancement="_blank"/>

export const operationViewProductDetails = {
  "operationId": "viewProductDetails",
  "title": "Visualizar detalhes do produto",
  "actors": [
    "cliente"
  ],
  "entity": "Product",
  "kind": "view",
  "reads": [
    "Product",
    "ProductCategory",
    "PetType"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "cliente",
    "goal": "Ver os detalhes completos de um produto do catálogo para decidir se deve reservá-lo",
    "steps": [
      "O cliente seleciona um produto na vitrine de destaques ou na lista filtrada do catálogo",
      "O sistema recupera o produto pelo seu identificador junto com o nome da categoria e do tipo de pet associados",
      "O sistema retorna os detalhes completos do produto incluindo nome, preço, flag de destaque, categoria, tipo de pet e datas de cadastro e atualização"
    ],
    "outcome": "O cliente visualiza todos os detalhes do produto e pode decidir se deseja reservá-lo para retirada na loja"
  },
  "accessPattern": {
    "kind": "getById",
    "entity": "Product",
    "keyField": "Product.productId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Product.productId",
      "Product.name",
      "Product.price",
      "Product.isFeatured",
      "Product.categoryId",
      "ProductCategory.name",
      "Product.petTypeId",
      "PetType.name",
      "Product.createdAt",
      "Product.updatedAt"
    ]
  },
  "outputShape": {
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
        "name": "price",
        "type": "number",
        "required": true,
        "fieldRef": "Product.price"
      },
      {
        "name": "isFeatured",
        "type": "boolean",
        "required": true,
        "fieldRef": "Product.isFeatured"
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
        "fieldRef": "ProductCategory.name"
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
  "inputs": [
    {
      "inputId": "productId",
      "fieldRef": "Product.productId",
      "required": true,
      "source": "routeParam",
      "description": "Identificador do produto selecionado pelo cliente na vitrine ou na lista do catálogo"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Product.productId",
      "source": "routeParam",
      "originRef": "routeParam.productId",
      "description": "O identificador do produto é obtido do parâmetro de rota da URL quando o cliente clica em um produto na vitrine ou na lista filtrada do catálogo"
    }
  ],
  "acceptanceAssertions": [
    "O sistema retorna o produto correspondente ao productId informado com nome, preço e flag de destaque",
    "O sistema retorna o nome da categoria (categoryName) associada ao produto consultando ProductCategory pelo categoryId",
    "O sistema retorna o nome do tipo de pet (petTypeName) associado ao produto consultando PetType pelo petTypeId",
    "O sistema retorna as datas de cadastro (createdAt) e última atualização (updatedAt) do produto",
    "Quando o productId não corresponde a nenhum produto cadastrado, o sistema retorna erro indicando produto não encontrado"
  ],
  "pageId": "viewProductDetails",
  "commandName": "viewProductDetails",
  "bffName": "petShop.viewProductDetails.viewProductDetails",
  "capability": {
    "capabilityId": "viewProductDetails",
    "title": "Visualizar detalhes do produto",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewProductDetails;
