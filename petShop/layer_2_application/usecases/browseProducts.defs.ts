/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseProducts.defs.ts" enhancement="_blank"/>

export const browseProductsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "browseProducts",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "browseProducts",
    "ports": [
      "Product"
    ],
    "functions": [
      {
        "functionName": "browseProducts",
        "inputTypeName": "BrowseProductsInput",
        "outputTypeName": "BrowseProductsOutput",
        "input": [
          {
            "name": "searchName",
            "type": "string",
            "required": false,
            "description": "Texto de busca para filtrar produtos pelo nome."
          },
          {
            "name": "filterStatus",
            "type": "string",
            "required": false,
            "description": "Filtro de situação do produto: active ou inactive."
          },
          {
            "name": "filterProductCategoryId",
            "type": "string",
            "required": false,
            "description": "Filtro por categoria de produto (MDM id)."
          },
          {
            "name": "filterFeatured",
            "type": "boolean",
            "required": false,
            "description": "Filtro para exibir apenas produtos marcados como destaque."
          }
        ],
        "output": [
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
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
            "name": "imageUrl",
            "type": "string",
            "required": false,
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
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          }
        ],
        "ports": [
          "Product"
        ],
        "rulesApplied": [
          "featuredProductRequiresActive"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve actorSession from ctx.sessionContext to verify the caller has admin scope; reject with 403 if not admin.",
          "2. Build a list query on the Product port using optional filters: searchName (LIKE on Product.name), filterStatus (exact match on Product.status), filterProductCategoryId (exact match on Product.productCategoryId), filterFeatured (exact match on Product.featured).",
          "3. Apply rule featuredProductRequiresActive: when filterFeatured is true, force an additional filter Product.status = 'active' so only active featured products are returned; also exclude any product where featured=true but status != 'active' from the result set.",
          "4. Order results by Product.createdAt descending.",
          "5. Collect all productCategoryId values from the result set and bulk-read ProductCategory MDM records via ctx.mdm.collection.getMany for hydration if needed.",
          "6. Return the projected list of products with fields productId, name, price, imageUrl, productCategoryId, featured, status, createdAt, updatedAt."
        ]
      }
    ],
    "mdmRefs": [
      "ProductCategory"
    ]
  }
} as const;

export default browseProductsUsecase;

export const pipeline = [
  {
    "id": "browseProducts__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/browseProducts.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/browseProducts.defs.ts",
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
