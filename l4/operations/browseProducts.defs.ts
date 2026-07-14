/// <mls fileReference="_102049_/l4/operations/browseProducts.defs.ts" enhancement="_blank"/>

export const operationBrowseProducts = {
  "operationId": "browseProducts",
  "title": "Listar produtos cadastrados",
  "actor": "admin",
  "entity": "Product",
  "kind": "query",
  "reads": [
    "Product",
    "ProductCategory"
  ],
  "writes": [],
  "rulesApplied": [
    "featuredProductRequiresActive"
  ],
  "story": {
    "actor": "admin",
    "goal": "Visualizar todos os produtos cadastrados no catálogo do pet shop para gerenciar, editar ou marcar como destaque.",
    "steps": [
      "O administrador acessa a tela de gestão de produtos.",
      "O sistema retorna a lista de produtos com nome, preço, categoria, flag de destaque e status.",
      "O administrador pode filtrar por nome, categoria, status ou destaque.",
      "O administrador visualiza os resultados paginados para selecionar um produto para edição ou destaque."
    ],
    "outcome": "O administrador obtém uma lista paginada de produtos do catálogo, podendo filtrar e ordenar para localizar produtos específicos."
  },
  "accessPattern": {
    "kind": "list",
    "entity": "Product",
    "keyField": "Product.productId",
    "pagination": "optional",
    "selection": "multiple",
    "output": [
      "Product.productId",
      "Product.name",
      "Product.price",
      "Product.imageUrl",
      "Product.productCategoryId",
      "Product.featured",
      "Product.status",
      "Product.createdAt",
      "Product.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "searchName",
      "fieldRef": "Product.name",
      "required": false,
      "source": "userInput",
      "description": "Texto de busca para filtrar produtos pelo nome."
    },
    {
      "inputId": "filterStatus",
      "fieldRef": "Product.status",
      "required": false,
      "source": "userInput",
      "description": "Filtro de situação do produto: ativo ou inativo."
    },
    {
      "inputId": "filterProductCategoryId",
      "fieldRef": "Product.productCategoryId",
      "required": false,
      "source": "userInput",
      "description": "Filtro por categoria de produto."
    },
    {
      "inputId": "filterFeatured",
      "fieldRef": "Product.featured",
      "required": false,
      "source": "userInput",
      "description": "Filtro para exibir apenas produtos marcados como destaque."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "actorSession.actorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O backend resolve o identificador do administrador a partir da sessão ativa para autorizar o acesso à lista de produtos."
    },
    {
      "targetRef": "actorSession.scope",
      "source": "actorSession",
      "originRef": "actorSession.scope",
      "description": "O backend resolve o escopo da sessão do administrador para garantir que apenas usuários com perfil admin possam consultar o catálogo."
    }
  ],
  "acceptanceAssertions": [
    "A lista retornada contém apenas produtos pertencentes ao catálogo do pet shop, com os campos productId, name, price, productCategoryId, featured e status.",
    "Quando o filtro de status é aplicado, apenas produtos com a situação correspondente (active ou inactive) são retornados.",
    "Quando o filtro de categoria é aplicado, apenas produtos cujo productCategoryId corresponde ao valor informado são retornados.",
    "Quando o filtro de destaque é aplicado, apenas produtos com featured=true são retornados e todos eles possuem status active.",
    "A lista suporta paginação opcional, retornando os produtos ordenados por createdAt em ordem decrescente quando nenhum critério de ordenação é fornecido.",
    "O endpoint rejeita requisições de usuários que não possuam o perfil de administrador."
  ],
  "pageId": "browseProducts",
  "commandName": "browseProducts",
  "bffName": "petShop.browseProducts.browseProducts",
  "capability": {
    "capabilityId": "browseProducts",
    "title": "Listar produtos cadastrados",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseProducts;
