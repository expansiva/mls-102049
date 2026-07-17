/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseCatalog.defs.ts" enhancement="_blank"/>

export const browseCatalogUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "browseCatalog",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "browseCatalog",
    "ports": [
      "Product"
    ],
    "rulesApplied": [
      "onlyAvailableProductsVisibleAndReservable",
      "searchIsCaseInsensitiveAndPartial",
      "filtersCanBeCombined",
      "highlightRequiresAvailableProduct"
    ],
    "functions": [
      {
        "functionName": "browseCatalog",
        "inputTypeName": "BrowseCatalogInput",
        "outputTypeName": "BrowseCatalogOutput",
        "input": [
          {
            "name": "searchTerm",
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
            "type": "number",
            "required": false
          },
          {
            "name": "maxPrice",
            "type": "number",
            "required": false
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
        "output": [
          {
            "name": "products",
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
        "ports": [
          "Product"
        ],
        "rulesApplied": [
          "onlyAvailableProductsVisibleAndReservable",
          "searchIsCaseInsensitiveAndPartial",
          "filtersCanBeCombined",
          "highlightRequiresAvailableProduct"
        ],
        "transactional": false,
        "steps": [
          "Build filters with status='available' (onlyAvailableProductsVisibleAndReservable, highlightRequiresAvailableProduct).",
          "If searchTerm provided, apply case-insensitive partial match on Product.name (searchIsCaseInsensitiveAndPartial).",
          "Apply optional filters petTypeId, categoryId, minPrice, maxPrice together (filtersCanBeCombined).",
          "Query Product port list with filters, sort by createdAt, and required pagination (page,pageSize) to get items and total.",
          "Collect distinct petTypeId and categoryId from products; load MDM names via ctx.mdm.collection.getMany for PetType and Category (plural-first).",
          "Map products to output shape with petTypeName/categoryName, and return paginated structure {products,total,page,pageSize}."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "products",
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
                    "required": false
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
                    "required": false
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
    "mdmRefs": [
      "PetType",
      "Category"
    ]
  }
} as const;

export default browseCatalogUsecase;

export const pipeline = [
  {
    "id": "browseCatalog__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/browseCatalog.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/browseCatalog.defs.ts",
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
      "onlyAvailableProductsVisibleAndReservable",
      "searchIsCaseInsensitiveAndPartial",
      "filtersCanBeCombined",
      "highlightRequiresAvailableProduct"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
