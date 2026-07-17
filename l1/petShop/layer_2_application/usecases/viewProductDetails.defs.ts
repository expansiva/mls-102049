/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.defs.ts" enhancement="_blank"/>

export const viewProductDetailsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewProductDetails",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewProductDetails",
    "ports": [
      "Product"
    ],
    "rulesApplied": [
      "onlyAvailableProductsVisibleAndReservable"
    ],
    "functions": [
      {
        "functionName": "viewProductDetails",
        "inputTypeName": "ViewProductDetailsInput",
        "outputTypeName": "ViewProductDetailsOutput",
        "input": [
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "fieldRef": "Product.productId"
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
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "Product"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "petTypeId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "petTypeName",
            "type": "string",
            "required": true
          },
          {
            "name": "categoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "categoryName",
            "type": "string",
            "required": true
          },
          {
            "name": "highlighted",
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
          "onlyAvailableProductsVisibleAndReservable"
        ],
        "transactional": false,
        "steps": [
          "Load Product by productId via Product port.",
          "Apply rule onlyAvailableProductsVisibleAndReservable: if product.status !== 'available', return not found/validation error with rule id; if product.highlighted is true while status != 'available', return validation error with rule id (defensive).",
          "Resolve petTypeName via ctx.mdm.entity.get({ mdmId: product.petTypeId }) for PetType; resolve categoryName via ctx.mdm.entity.get({ mdmId: product.categoryId }) for Category.",
          "Return output shape with product fields plus petTypeName and categoryName."
        ],
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
              "name": "petTypeName",
              "type": "string",
              "required": true
            },
            {
              "name": "categoryId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.categoryId"
            },
            {
              "name": "categoryName",
              "type": "string",
              "required": true
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
        }
      }
    ],
    "mdmRefs": [
      "PetType",
      "Category"
    ]
  }
} as const;

export default viewProductDetailsUsecase;

export const pipeline = [
  {
    "id": "viewProductDetails__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.defs.ts",
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
    "rulesApplied": [
      "onlyAvailableProductsVisibleAndReservable"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
