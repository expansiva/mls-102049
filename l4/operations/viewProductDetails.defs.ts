/// <mls fileReference="_102049_/l4/operations/viewProductDetails.defs.ts" enhancement="_blank"/>

export const operationViewProductDetails = {
  "operationId": "viewProductDetails",
  "title": "Ver detalhes de um produto",
  "actor": "cliente",
  "entity": "Product",
  "kind": "view",
  "reads": [
    "Product",
    "PetType",
    "Category"
  ],
  "writes": [],
  "rulesApplied": [
    "onlyAvailableProductsVisibleAndReservable"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Visualizar os detalhes completos de um produto selecionado na vitrine para decidir se deseja reservá-lo",
    "steps": [
      "O cliente seleciona um produto na vitrine ou nos resultados de busca",
      "O sistema recupera o produto pelo seu identificador junto com o nome do tipo de pet e da categoria",
      "O sistema exibe nome, descrição, preço, tipo de pet indicado, categoria e flag de destaque do produto"
    ],
    "outcome": "O cliente vê todos os detalhes do produto e pode decidir se deseja prosseguir com a reserva"
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
      "Product.description",
      "Product.price",
      "Product.petTypeId",
      "Product.categoryId",
      "Product.highlighted",
      "Product.status",
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
  "inputs": [
    {
      "inputId": "productId",
      "fieldRef": "Product.productId",
      "required": true,
      "source": "routeParam",
      "description": "Identificador do produto selecionado pelo cliente na vitrine ou nos resultados de busca"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Product.productId",
      "source": "routeParam",
      "originRef": "routeParam.productId",
      "description": "O identificador do produto é extraído do parâmetro de rota da página de detalhes do produto"
    },
    {
      "targetRef": "PetType.name",
      "source": "selectedEntity",
      "originRef": "Product.petTypeId",
      "description": "O nome do tipo de pet é resolvido consultando a entidade PetType pelo petTypeId do produto"
    },
    {
      "targetRef": "Category.name",
      "source": "selectedEntity",
      "originRef": "Product.categoryId",
      "description": "O nome da categoria é resolvido consultando a entidade Category pelo categoryId do produto"
    }
  ],
  "acceptanceAssertions": [
    "A operação retorna um único produto com todos os campos obrigatórios preenchidos: productId, name, price, petTypeId, categoryId, highlighted e status",
    "A operação retorna o nome do tipo de pet (petTypeName) correspondente ao petTypeId do produto",
    "A operação retorna o nome da categoria (categoryName) correspondente ao categoryId do produto",
    "Produtos com status unavailable não são retornados por esta operação na vitrine pública",
    "O campo highlighted só é verdadeiro quando o produto está com status available"
  ],
  "pageId": "viewProductDetails",
  "commandName": "viewProductDetails",
  "bffName": "petShop.viewProductDetails.viewProductDetails",
  "capability": {
    "capabilityId": "viewProductDetails",
    "title": "Ver detalhes de um produto",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewProductDetails;
