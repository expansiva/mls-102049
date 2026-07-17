/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/filterProducts.defs.ts" enhancement="_blank"/>

export const filterProductsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "filterProducts",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "filterProducts",
    "ports": [
      "Product"
    ],
    "functions": [
      {
        "functionName": "filterProducts",
        "inputTypeName": "FilterProductsInput",
        "outputTypeName": "FilterProductsOutput",
        "input": [
          {
            "name": "petTypeId",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Tipo de pet selecionado para filtrar o catálogo (ex.: cão, gato)."
          },
          {
            "name": "categoryId",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Categoria selecionada para filtrar o catálogo (ex.: ração, brinquedo)."
          },
          {
            "name": "minPrice",
            "type": "number",
            "required": false,
            "description": "Preço mínimo da faixa de valor informada pelo cliente."
          },
          {
            "name": "maxPrice",
            "type": "number",
            "required": false,
            "description": "Preço máximo da faixa de valor informada pelo cliente."
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
            "name": "categoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
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
          "onlyAvailableProductsVisibleAndReservable",
          "filtersCanBeCombined"
        ],
        "transactional": false,
        "steps": [
          "1. Load all products from the Product port (productPort.findAll or equivalent list query).",
          "2. Apply rule 'onlyAvailableProductsVisibleAndReservable': filter the collection to keep only products where status === 'available'; products with status 'unavailable' are excluded from results unconditionally.",
          "3. Apply rule 'filtersCanBeCombined': combine all provided filter criteria using AND logic — they are never mutually exclusive.",
          "4. If petTypeId is provided, keep only products whose petTypeId equals the supplied value.",
          "5. If categoryId is provided, keep only products whose categoryId equals the supplied value.",
          "6. If minPrice is provided, keep only products whose price >= minPrice (inclusive).",
          "7. If maxPrice is provided, keep only products whose price <= maxPrice (inclusive).",
          "8. If no filters are provided, return all available products (the status filter from step 2 still applies).",
          "9. Project each remaining product to the output shape: productId, name, description, price, petTypeId, categoryId, highlighted, status.",
          "10. Return the projected list as 'products'."
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
              "name": "categoryId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.categoryId"
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
    "mdmRefs": []
  }
} as const;

export default filterProductsUsecase;

export const pipeline = [
  {
    "id": "filterProducts__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/filterProducts.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/filterProducts.defs.ts",
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
