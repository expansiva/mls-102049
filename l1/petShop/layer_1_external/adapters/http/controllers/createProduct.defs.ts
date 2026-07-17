/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createProduct.defs.ts" enhancement="_blank"/>

export const createProductController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createProduct",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createProduct",
    "controllerName": "CreateProductController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "CreateProductResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/createProduct.js",
    "usecaseOutputTypeName": "CreateProductOutput",
    "responseShape": {
      "kind": "object",
      "fields": [
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
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopCreateProductHandler",
        "command": "createProduct",
        "usecaseRef": "createProduct",
        "inputTypeName": "CreateProductInput",
        "kind": "create",
        "inputContract": [
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
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
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
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.createProduct.createProduct",
        "handlerName": "petShopCreateProductHandler"
      }
    ]
  }
} as const;

export default createProductController;

export const pipeline = [
  {
    "id": "createProduct__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createProduct.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createProduct.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/createProduct.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/createProduct.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
