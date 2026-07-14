/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateProduct.defs.ts" enhancement="_blank"/>

export const updateProductUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateProduct",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateProduct",
    "ports": [
      "Product"
    ],
    "functions": [
      {
        "functionName": "updateProduct",
        "inputTypeName": "UpdateProductInput",
        "outputTypeName": "UpdateProductOutput",
        "input": [
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Identificador do produto selecionado para edição."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Nome atualizado do produto exibido no catálogo."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Descrição detalhada atualizada do produto."
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product",
            "description": "Preço atualizado do produto cobrado na retirada presencial."
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
            "description": "Categoria do produto selecionada na lista de categorias cadastradas."
          },
          {
            "name": "featured",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product",
            "description": "Indica se o produto deve ser exibido em destaque na página inicial."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Situação do produto: ativo ou inativo."
          }
        ],
        "output": [
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Identificador do produto atualizado."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Nome atualizado do produto."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Descrição atualizada do produto."
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product",
            "description": "Preço atualizado do produto."
          },
          {
            "name": "imageUrl",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "URL da imagem do produto."
          },
          {
            "name": "productCategoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Categoria do produto atualizada."
          },
          {
            "name": "featured",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product",
            "description": "Indicador de destaque do produto."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Situação do produto após atualização."
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Timestamp da última atualização."
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
          "1. Load the existing Product aggregate from the Product port by productId; reject if not found.",
          "2. Validate productCategoryId against MDM: call ctx.mdm.entity.get({ mdmId: productCategoryId }) to confirm the ProductCategory exists; reject if not found.",
          "3. Apply rule featuredProductRequiresActive: if featured === true and status !== 'active', reject with validation error. If status === 'inactive', force featured = false.",
          "4. Apply rule productImageUsesPlatformStorage: if imageUrl is provided, validate that it starts with the platform media storage base URL pattern; reject otherwise.",
          "5. Set updatedAt = ctx.clock.now() (systemDefault, not user input).",
          "6. Mutate the Product aggregate with the validated fields (name, description, price, imageUrl, productCategoryId, featured, status, updatedAt).",
          "7. Save the Product aggregate through the Product port inside a single transaction (ctx.data transaction wrapper).",
          "8. Return the updated product fields: productId, name, description, price, imageUrl, productCategoryId, featured, status, updatedAt."
        ]
      }
    ],
    "mdmRefs": [
      "ProductCategory"
    ]
  }
} as const;

export default updateProductUsecase;

export const pipeline = [
  {
    "id": "updateProduct__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/updateProduct.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/updateProduct.defs.ts",
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
