/// <mls fileReference="_102049_/l4/operations/updateProduct.defs.ts" enhancement="_blank"/>

export const operationUpdateProduct = {
  "operationId": "updateProduct",
  "title": "Editar produto e definir destaque",
  "actor": "admin",
  "entity": "Product",
  "kind": "update",
  "reads": [
    "Product",
    "ProductCategory"
  ],
  "writes": [
    "Product"
  ],
  "rulesApplied": [
    "featuredProductRequiresActive",
    "productImageUsesPlatformStorage"
  ],
  "story": {
    "actor": "admin",
    "goal": "Atualizar informações de um produto já cadastrado e definir se ele deve aparecer em destaque na página inicial.",
    "steps": [
      "O administrador seleciona um produto existente no catálogo.",
      "O sistema carrega os dados atuais do produto para edição.",
      "O administrador ajusta nome, descrição, preço, imagem, categoria e flag de destaque.",
      "O sistema valida que apenas produtos ativos podem ser marcados como destaque.",
      "O sistema persiste as alterações e atualiza o timestamp updatedAt."
    ],
    "outcome": "O produto é atualizado no catálogo com os novos dados e a flag de destaque respeita a regra de produto ativo."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Product",
    "keyField": "Product.productId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Product.productId",
      "Product.name",
      "Product.description",
      "Product.price",
      "Product.imageUrl",
      "Product.productCategoryId",
      "Product.featured",
      "Product.status",
      "Product.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "productId",
      "fieldRef": "Product.productId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador do produto selecionado para edição."
    },
    {
      "inputId": "name",
      "fieldRef": "Product.name",
      "required": true,
      "source": "userInput",
      "description": "Nome atualizado do produto exibido no catálogo."
    },
    {
      "inputId": "description",
      "fieldRef": "Product.description",
      "required": false,
      "source": "userInput",
      "description": "Descrição detalhada atualizada do produto."
    },
    {
      "inputId": "price",
      "fieldRef": "Product.price",
      "required": true,
      "source": "userInput",
      "description": "Preço atualizado do produto cobrado na retirada presencial."
    },
    {
      "inputId": "imageUrl",
      "fieldRef": "Product.imageUrl",
      "required": false,
      "source": "userInput",
      "description": "URL da imagem do produto no armazenamento de mídia da plataforma."
    },
    {
      "inputId": "productCategoryId",
      "fieldRef": "Product.productCategoryId",
      "required": true,
      "source": "userInput",
      "description": "Categoria do produto selecionada na lista de categorias cadastradas."
    },
    {
      "inputId": "featured",
      "fieldRef": "Product.featured",
      "required": true,
      "source": "userInput",
      "description": "Indica se o produto deve ser exibido em destaque na página inicial."
    },
    {
      "inputId": "status",
      "fieldRef": "Product.status",
      "required": true,
      "source": "userInput",
      "description": "Situação do produto: ativo ou inativo."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Product.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp da última atualização, gerado automaticamente pelo sistema."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Product.productId",
      "source": "selectedEntity",
      "originRef": "Product.productId",
      "description": "O backend resolve o productId a partir do produto atualmente selecionado na tela de gestão de produtos."
    },
    {
      "targetRef": "Product.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define updatedAt com o timestamp atual no momento da persistência da atualização."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, o produto existe com os campos name, price, productCategoryId e status atualizados conforme os valores informados.",
    "Se featured for definido como true, o produto deve ter status igual a active; caso contrário a operação é rejeitada.",
    "Se o produto for alterado para status inactive, o campo featured deve ser definido como false.",
    "O campo updatedAt é atualizado para o timestamp atual após a persistência.",
    "O productCategoryId informado deve corresponder a uma categoria existente em ProductCategory.",
    "A imagem do produto, quando informada, utiliza uma URL do armazenamento de mídia da plataforma."
  ],
  "pageId": "updateProduct",
  "commandName": "updateProduct",
  "bffName": "petShop.updateProduct.updateProduct",
  "capability": {
    "capabilityId": "updateProduct",
    "title": "Editar produto e definir destaque",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateProduct;
