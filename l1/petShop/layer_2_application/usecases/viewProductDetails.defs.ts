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
    "ports": [],
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
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "isFeatured",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product"
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
            "required": true,
            "ofEntity": "ProductCategory"
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
            "required": true,
            "ofEntity": "PetType"
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
        "ports": [],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Load Product by input.productId via ctx.mdm.entity.get({ mdmId: productId })",
          "If product is not found, return not-found error indicating produto não encontrado",
          "Collect categoryId and petTypeId from the product; bulk-read ProductCategory and PetType via ctx.mdm.collection.getMany({ mdmIds: [categoryId, petTypeId] })",
          "Resolve categoryName from the ProductCategory record and petTypeName from the PetType record",
          "Return productId, name, price, isFeatured, categoryId, categoryName, petTypeId, petTypeName, createdAt, updatedAt"
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
              "name": "price",
              "type": "number",
              "required": true,
              "fieldRef": "Product.price"
            },
            {
              "name": "isFeatured",
              "type": "boolean",
              "required": true,
              "fieldRef": "Product.isFeatured"
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
              "required": true,
              "fieldRef": "ProductCategory.name"
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
              "required": true,
              "fieldRef": "PetType.name"
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
      "Product",
      "ProductCategory",
      "PetType"
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
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
