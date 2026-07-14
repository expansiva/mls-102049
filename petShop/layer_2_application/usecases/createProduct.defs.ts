/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createProduct.defs.ts" enhancement="_blank"/>

export const createProductUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createProduct",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createProduct",
    "ports": [
      "Product"
    ],
    "functions": [
      {
        "functionName": "createProduct",
        "inputTypeName": "CreateProductInput",
        "outputTypeName": "CreateProductOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Nome do produto exibido no catálogo e na página inicial."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Descrição detalhada do produto para o cliente."
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product",
            "description": "Preço do produto cobrado na retirada presencial na loja."
          },
          {
            "name": "imageUrl",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "URL da imagem do produto no armazenamento de mídia da plataforma."
          },
          {
            "name": "productCategoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Categoria do produto selecionada pelo administrador."
          },
          {
            "name": "featured",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product",
            "description": "Indica se o produto deve ser exibido em destaque na página inicial."
          }
        ],
        "output": [
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Identificador único do produto gerado automaticamente."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "productCategoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "featured",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          }
        ],
        "ports": [
          "Product"
        ],
        "rulesApplied": [
          "featuredProductRequiresActive",
          "productImageUsesPlatformStorage"
        ],
        "transactional": true,
        "steps": [
          "1. Resolve system defaults: productId = ctx.idGenerator.uuid(), status = 'active', createdAt = updatedAt = ctx.clock.now().",
          "2. Validate that productCategoryId refers to an existing ProductCategory in MDM via ctx.mdm.entity.get({ mdmId: productCategoryId }). If not found, throw validation error 'productCategoryId does not correspond to an existing ProductCategory'.",
          "3. Apply rule featuredProductRequiresActive: if featured === true and status !== 'active', throw validation error 'featuredProductRequiresActive: a featured product must have status active'. Since status is always 'active' on create, this passes; the guard still runs to enforce the invariant.",
          "4. Apply rule productImageUsesPlatformStorage: if imageUrl is provided, validate that it points to the platform media storage domain (e.g. starts with the configured platform media base URL or matches the platform storage URL pattern). If it does not, throw validation error 'productImageUsesPlatformStorage: imageUrl must point to platform media storage, not module-local storage'.",
          "5. Build the Product aggregate with all fields (userInput + system defaults) and persist via ProductPort.save inside a single transaction (ctx.data transaction wrapper).",
          "6. Return the created product projection: productId, name, price, productCategoryId, featured, status, createdAt."
        ]
      }
    ],
    "mdmRefs": [
      "ProductCategory"
    ]
  }
} as const;

export default createProductUsecase;

export const pipeline = [
  {
    "id": "createProduct__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/createProduct.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/createProduct.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/productRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/product.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
