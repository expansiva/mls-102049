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
    "ports": [],
    "functions": [
      {
        "functionName": "browseProducts",
        "inputTypeName": "BrowseProductsInput",
        "outputTypeName": "BrowseProductsOutput",
        "input": [
          {
            "name": "searchName",
            "type": "string",
            "required": false
          },
          {
            "name": "petTypeId",
            "type": "string",
            "required": false
          },
          {
            "name": "categoryId",
            "type": "string",
            "required": false
          },
          {
            "name": "minPrice",
            "type": "string",
            "required": false
          },
          {
            "name": "maxPrice",
            "type": "string",
            "required": false
          },
          {
            "name": "page",
            "type": "number",
            "required": false
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false
          }
        ],
        "output": [
          {
            "name": "items",
            "type": "array",
            "required": true
          },
          {
            "name": "total",
            "type": "number",
            "required": true
          },
          {
            "name": "page",
            "type": "number",
            "required": true
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": true
          }
        ],
        "ports": [],
        "rulesApplied": [
          "catalogShowsAll",
          "combinedFilters",
          "caseInsensitiveSearch"
        ],
        "transactional": false,
        "steps": [
          "default page to 1 and pageSize to a sensible page size when omitted",
          "list all Product records via ctx.mdm.collection.listByType (catalogShowsAll: do not filter by isFeatured)",
          "apply combinedFilters in memory: optional petTypeId equality, optional categoryId equality, optional minPrice/maxPrice numeric range on price (parse string inputs), optional searchName case-insensitive partial match on name (caseInsensitiveSearch)",
          "collect distinct categoryId and petTypeId from the filtered set; bulk-load ProductCategory and PetType via ctx.mdm.collection.getMany (plural-first, no per-item get)",
          "map each product to the output item shape joining categoryName and petTypeName from the hydrated MDM maps",
          "compute total as filtered length; slice items by page/pageSize; return { items, total, page, pageSize }"
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "items",
              "type": "array",
              "required": true,
              "item": {
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
            },
            {
              "name": "total",
              "type": "number",
              "required": true
            },
            {
              "name": "page",
              "type": "number",
              "required": true
            },
            {
              "name": "pageSize",
              "type": "number",
              "required": true
            }
          ]
        }
      }
    ],
    "rulesApplied": [
      "catalogShowsAll",
      "combinedFilters",
      "caseInsensitiveSearch"
    ],
    "mdmRefs": [
      "Product",
      "ProductCategory",
      "PetType"
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
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "catalogShowsAll",
      "combinedFilters",
      "caseInsensitiveSearch"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
