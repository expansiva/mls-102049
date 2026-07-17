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
            "name": "searchTerm",
            "type": "string",
            "required": false,
            "description": "Termo de busca para filtrar produtos por nome com correspondência parcial e insensível a maiúsculas e minúsculas."
          },
          {
            "name": "petTypeId",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Filtro por tipo de pet indicado para o produto."
          },
          {
            "name": "categoryId",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Filtro por categoria do catálogo."
          },
          {
            "name": "priceMin",
            "type": "number",
            "required": false,
            "description": "Filtro de faixa de preço — valor mínimo (inclusive)."
          },
          {
            "name": "priceMax",
            "type": "number",
            "required": false,
            "description": "Filtro de faixa de preço — valor máximo (inclusive)."
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Filtro por status de disponibilidade do produto (available ou unavailable)."
          },
          {
            "name": "highlighted",
            "type": "boolean",
            "required": false,
            "ofEntity": "Product",
            "description": "Filtro para exibir apenas produtos marcados como destaque."
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Número da página solicitada (base 1)."
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Quantidade de itens por página."
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
          "searchIsCaseInsensitiveAndPartial",
          "filtersCanBeCombined",
          "highlightRequiresAvailableProduct"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve actorId from ctx.sessionContext for catalog access authorization (contextResolution: actorSession.actorId).",
          "2. Build a filter object from user inputs: searchTerm, petTypeId, categoryId, priceMin, priceMax, status, highlighted — all optional.",
          "3. Apply rule searchIsCaseInsensitiveAndPartial: if searchTerm is provided, query the Product port filtering by name using case-insensitive partial match (name ILIKE '%searchTerm%' or equivalent). If no searchTerm, skip name filter.",
          "4. Apply rule filtersCanBeCombined: combine all provided filters with AND logic — petTypeId (exact), categoryId (exact), priceMin (>=), priceMax (<=), status (exact), highlighted (exact). No filter excludes another; all are AND-joined.",
          "5. Query the Product port (list/find) with the combined filter criteria. If page and pageSize are provided, apply pagination (offset = (page-1)*pageSize, limit = pageSize); otherwise return all matching products.",
          "6. Apply rule highlightRequiresAvailableProduct: iterate over results — for each product where highlighted=true AND status='unavailable', set the output highlighted field to false (the product stays in the list but is not presented as a valid highlight). If the user explicitly filtered highlighted=true, additionally exclude any product whose status='unavailable' from the result set entirely.",
          "7. Collect unique petTypeId values and unique categoryId values from the filtered product list.",
          "8. Bulk-fetch PetType MDM records via ctx.mdm.collection.getMany({ mdmIds: petTypeIds }) and Category MDM records via ctx.mdm.collection.getMany({ mdmIds: categoryIds }). Build lookup maps: petTypeId -> name and categoryId -> name.",
          "9. For each product in the result list, enrich with petTypeName (from PetType lookup) and categoryName (from Category lookup). If a lookup misses (e.g. inactive MDM record), set the name to null or empty string.",
          "10. Return the enriched list as the products array with all fields: productId, name, description, price, petTypeId, petTypeName, categoryId, categoryName, highlighted (effective), status, createdAt, updatedAt."
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
