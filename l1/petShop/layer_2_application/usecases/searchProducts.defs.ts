/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/searchProducts.defs.ts" enhancement="_blank"/>

export const searchProductsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "searchProducts",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "searchProducts",
    "ports": [
      "Product"
    ],
    "functions": [
      {
        "functionName": "searchProducts",
        "inputTypeName": "SearchProductsInput",
        "outputTypeName": "SearchProductsOutput",
        "input": [
          {
            "name": "searchTerm",
            "type": "string",
            "required": true,
            "description": "Termo de busca digitado pelo cliente para encontrar produtos por nome (correspondência parcial e insensível a caixa)"
          },
          {
            "name": "petTypeId",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Filtro opcional por tipo de pet indicado para o produto"
          },
          {
            "name": "categoryId",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Filtro opcional por categoria do catálogo"
          },
          {
            "name": "minPrice",
            "type": "number",
            "required": false,
            "description": "Filtro opcional de preço mínimo para faixa de valor"
          },
          {
            "name": "maxPrice",
            "type": "number",
            "required": false,
            "description": "Filtro opcional de preço máximo para faixa de valor"
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
            "required": true,
            "ofEntity": "PetType"
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
            "ofEntity": "Category"
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
          }
        ],
        "ports": [
          "Product"
        ],
        "rulesApplied": [
          "searchIsCaseInsensitiveAndPartial",
          "onlyAvailableProductsVisibleAndReservable",
          "filtersCanBeCombined"
        ],
        "transactional": false,
        "steps": [
          "1. Validate searchTerm is non-empty; throw validation error with rule 'searchIsCaseInsensitiveAndPartial' if blank.",
          "2. Load all products from the Product port (productPort.list).",
          "3. Apply rule 'onlyAvailableProductsVisibleAndReservable': filter to products where status === 'available'.",
          "4. Apply rule 'searchIsCaseInsensitiveAndPartial': keep products whose name, lowercased, includes searchTerm lowercased (partial, case-insensitive match).",
          "5. Apply rule 'filtersCanBeCombined': if petTypeId provided, filter products where petTypeId === input.petTypeId; if categoryId provided, filter where categoryId === input.categoryId; if minPrice provided, filter where price >= minPrice; if maxPrice provided, filter where price <= maxPrice. All filters AND together without mutual exclusion.",
          "6. Collect unique petTypeId values and unique categoryId values from the filtered products.",
          "7. Bulk-fetch PetType MDM records via ctx.mdm.collection.getMany({ mdmIds: petTypeIds }) and Category MDM records via ctx.mdm.collection.getMany({ mdmIds: categoryIds }). Build lookup maps petTypeId->name and categoryId->name.",
          "8. Map each filtered product to the output shape, enriching with petTypeName from the PetType lookup and categoryName from the Category lookup.",
          "9. Return { products: enrichedList }."
        ],
        "outputShape": {
          "kind": "list",
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
              "required": true,
              "fieldRef": "PetType.name"
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
              "fieldRef": "Category.name"
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
      }
    ],
    "mdmRefs": [
      "PetType",
      "Category"
    ]
  }
} as const;

export default searchProductsUsecase;

export const pipeline = [
  {
    "id": "searchProducts__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/searchProducts.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/searchProducts.defs.ts",
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
