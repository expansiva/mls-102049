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
    "outputSource": "usecase",
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
            "Product.imageUrl",
            "Product.productCategoryId",
            "Product.featured",
            "Product.status",
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
      "_102049_/l1/petShop/layer_2_application/usecases/updateProduct.d.ts"
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
