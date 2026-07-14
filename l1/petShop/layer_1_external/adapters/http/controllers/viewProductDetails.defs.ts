/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewProductDetails.defs.ts" enhancement="_blank"/>

export const viewProductDetailsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewProductDetails",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewProductDetails",
    "controllerName": "ViewProductDetailsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopViewProductDetailsHandler",
        "command": "viewProductDetails",
        "usecaseRef": "viewProductDetails",
        "kind": "view",
        "inputContract": [
          {
            "inputId": "productId",
            "fieldRef": "Product.productId",
            "required": true,
            "source": "routeParam",
            "description": "Identificador do produto selecionado pelo cliente para visualização dos detalhes."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Product.productId",
            "source": "routeParam",
            "originRef": "routeParam.productId",
            "description": "O backend extrai o productId do parâmetro de rota da URL para buscar o produto correspondente no catálogo."
          },
          {
            "targetRef": "ProductCategory.productCategoryId",
            "source": "previousStepOutput",
            "originRef": "Product.productCategoryId",
            "description": "O backend resolve a categoria do produto a partir do campo productCategoryId retornado na consulta do produto, buscando o registro correspondente em ProductCategory para exibir o nome da categoria."
          }
        ],
        "accessPattern": {
          "kind": "getById",
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
            "Product.status"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.viewProductDetails.viewProductDetails",
        "handlerName": "petShopViewProductDetailsHandler"
      }
    ]
  }
} as const;

export default viewProductDetailsController;

export const pipeline = [
  {
    "id": "viewProductDetails__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewProductDetails.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewProductDetails.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.d.ts"
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
