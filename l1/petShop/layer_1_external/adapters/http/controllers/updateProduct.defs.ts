/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateProduct.defs.ts" enhancement="_blank"/>

export const updateProductController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateProduct",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateProduct",
    "controllerName": "UpdateProductController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "UpdateProductResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/updateProduct.js",
    "usecaseOutputTypeName": "UpdateProductOutput",
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
        "handlerName": "petShopUpdateProductHandler",
        "command": "updateProduct",
        "usecaseRef": "updateProduct",
        "inputTypeName": "UpdateProductInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "productId",
            "fieldRef": "Product.productId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do produto que está sendo editado"
          },
          {
            "inputId": "name",
            "fieldRef": "Product.name",
            "required": false,
            "source": "userInput",
            "description": "Novo nome do produto, se alterado"
          },
          {
            "inputId": "description",
            "fieldRef": "Product.description",
            "required": false,
            "source": "userInput",
            "description": "Nova descrição do produto, se alterada"
          },
          {
            "inputId": "price",
            "fieldRef": "Product.price",
            "required": false,
            "source": "userInput",
            "description": "Novo preço do produto, se alterado"
          },
          {
            "inputId": "petTypeId",
            "fieldRef": "Product.petTypeId",
            "required": false,
            "source": "userInput",
            "description": "Novo tipo de pet indicado para o produto, se alterado"
          },
          {
            "inputId": "categoryId",
            "fieldRef": "Product.categoryId",
            "required": false,
            "source": "userInput",
            "description": "Nova categoria do produto, se alterada"
          },
          {
            "inputId": "highlighted",
            "fieldRef": "Product.highlighted",
            "required": false,
            "source": "userInput",
            "description": "Nova flag de destaque do produto, se alterada"
          },
          {
            "inputId": "status",
            "fieldRef": "Product.status",
            "required": false,
            "source": "userInput",
            "description": "Nova disponibilidade do produto (available ou unavailable), se alterada"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Product.productId",
            "source": "selectedEntity",
            "originRef": "Product.productId",
            "description": "O productId é obtido do produto atualmente selecionado pela loja na tela de edição do catálogo"
          },
          {
            "targetRef": "Product.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O campo updatedAt é preenchido automaticamente com a data e hora atuais no momento da persistência da alteração"
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
        "key": "petShop.updateProduct.updateProduct",
        "handlerName": "petShopUpdateProductHandler"
      }
    ]
  }
} as const;

export default updateProductController;

export const pipeline = [
  {
    "id": "updateProduct__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateProduct.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateProduct.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/updateProduct.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/updateProduct.d.ts"
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
