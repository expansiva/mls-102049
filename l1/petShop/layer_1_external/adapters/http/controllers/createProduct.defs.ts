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
    "outputSource": "usecase",
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
            "description": "Nome do produto exibido no catálogo e na página inicial."
          },
          {
            "inputId": "description",
            "fieldRef": "Product.description",
            "required": false,
            "source": "userInput",
            "description": "Descrição detalhada do produto para o cliente."
          },
          {
            "inputId": "price",
            "fieldRef": "Product.price",
            "required": true,
            "source": "userInput",
            "description": "Preço do produto cobrado na retirada presencial na loja."
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
            "description": "Categoria do produto selecionada pelo administrador."
          },
          {
            "inputId": "featured",
            "fieldRef": "Product.featured",
            "required": true,
            "source": "userInput",
            "description": "Indica se o produto deve ser exibido em destaque na página inicial."
          },
          {
            "inputId": "productId",
            "fieldRef": "Product.productId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único do produto gerado automaticamente."
          },
          {
            "inputId": "status",
            "fieldRef": "Product.status",
            "required": true,
            "source": "systemDefault",
            "description": "Status inicial do produto, definido como ativo no cadastro."
          },
          {
            "inputId": "createdAt",
            "fieldRef": "Product.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora de cadastro do produto."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Product.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização do produto."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Product.productId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O backend gera um UUID para o novo produto antes da persistência."
          },
          {
            "targetRef": "Product.status",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define o status inicial do produto como 'active' no momento do cadastro."
          },
          {
            "targetRef": "Product.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra a data e hora atuais no campo createdAt ao criar o produto."
          },
          {
            "targetRef": "Product.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra a data e hora atuais no campo updatedAt ao criar o produto."
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
            "Product.price",
            "Product.productCategoryId",
            "Product.featured",
            "Product.status",
            "Product.createdAt"
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
      "_102049_/l1/petShop/layer_2_application/usecases/createProduct.d.ts"
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
