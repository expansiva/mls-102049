/// <mls fileReference="_102049_/l4/operations/createProduct.defs.ts" enhancement="_blank"/>

export const operationCreateProduct = {
  "operationId": "createProduct",
  "title": "Cadastrar produto",
  "actor": "loja",
  "entity": "Product",
  "kind": "create",
  "reads": [
    "Product",
    "PetType",
    "Category"
  ],
  "writes": [
    "Product"
  ],
  "rulesApplied": [
    "productRequiresMinimumFields",
    "highlightRequiresAvailableProduct",
    "highlightsAreManualOnly"
  ],
  "story": {
    "actor": "loja",
    "goal": "Adicionar um novo produto ao catálogo com nome, descrição, preço, tipo de pet indicado, categoria, flag de destaque e disponibilidade.",
    "steps": [
      "A loja informa nome, descrição (opcional), preço, tipo de pet, categoria, flag de destaque e status de disponibilidade do novo produto.",
      "O sistema valida que nome, preço, tipo de pet e categoria estão presentes e que as referências a PetType e Category existem.",
      "O sistema valida que, se highlighted for verdadeiro, o status deve ser available.",
      "O sistema gera um productId, define createdAt e updatedAt e persiste o produto no catálogo.",
      "O sistema retorna o produto criado com todos os campos."
    ],
    "outcome": "O produto é criado no catálogo com status definido e aparece na vitrine pública se estiver disponível."
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
  "inputs": [
    {
      "inputId": "name",
      "fieldRef": "Product.name",
      "required": true,
      "source": "userInput",
      "description": "Nome do produto informado pela loja."
    },
    {
      "inputId": "description",
      "fieldRef": "Product.description",
      "required": false,
      "source": "userInput",
      "description": "Descrição detalhada do produto (opcional)."
    },
    {
      "inputId": "price",
      "fieldRef": "Product.price",
      "required": true,
      "source": "userInput",
      "description": "Preço do produto informado pela loja."
    },
    {
      "inputId": "petTypeId",
      "fieldRef": "Product.petTypeId",
      "required": true,
      "source": "userInput",
      "description": "Referência ao tipo de pet indicado para o produto."
    },
    {
      "inputId": "categoryId",
      "fieldRef": "Product.categoryId",
      "required": true,
      "source": "userInput",
      "description": "Referência à categoria do catálogo à qual o produto pertence."
    },
    {
      "inputId": "highlighted",
      "fieldRef": "Product.highlighted",
      "required": true,
      "source": "userInput",
      "description": "Indica se o produto deve ser marcado como destaque pela loja."
    },
    {
      "inputId": "status",
      "fieldRef": "Product.status",
      "required": true,
      "source": "userInput",
      "description": "Disponibilidade do produto: available ou unavailable."
    },
    {
      "inputId": "productId",
      "fieldRef": "Product.productId",
      "required": true,
      "source": "systemDefault",
      "description": "Identificador único gerado automaticamente para o novo produto."
    },
    {
      "inputId": "createdAt",
      "fieldRef": "Product.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora de criação definidas automaticamente."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Product.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização, igual à de criação no cadastro."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Product.productId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O backend gera um UUID para o novo produto antes de persistir."
    },
    {
      "targetRef": "Product.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define a data e hora atuais no momento da criação."
    },
    {
      "targetRef": "Product.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define a data e hora atuais, iguais ao createdAt no cadastro."
    }
  ],
  "acceptanceAssertions": [
    "O produto criado possui nome, preço, petTypeId e categoryId preenchidos — campos mínimos obrigatórios.",
    "Se highlighted for verdadeiro, o status do produto criado é available.",
    "O productId gerado é um UUID único e não nulo.",
    "Os campos createdAt e updatedAt são preenchidos com a data e hora atuais.",
    "O petTypeId informado corresponde a um PetType existente.",
    "O categoryId informado corresponde a uma Category existente.",
    "O produto criado aparece na vitrine pública somente se status for available."
  ],
  "pageId": "createProduct",
  "commandName": "createProduct",
  "bffName": "petShop.createProduct.createProduct",
  "capability": {
    "capabilityId": "createProduct",
    "title": "Cadastrar produto",
    "actor": "loja",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateProduct;
