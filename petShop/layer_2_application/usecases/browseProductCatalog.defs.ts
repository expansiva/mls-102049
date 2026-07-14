/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseProductCatalog.defs.ts" enhancement="_blank"/>

export const browseProductCatalogUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "browseProductCatalog",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "browseProductCatalog",
    "ports": [
      "Product"
    ],
    "functions": [
      {
        "functionName": "browseProductCatalog",
        "inputTypeName": "BrowseProductCatalogInput",
        "outputTypeName": "BrowseProductCatalogOutput",
        "input": [
          {
            "name": "searchName",
            "type": "string",
            "required": false,
            "description": "Texto de busca para filtrar produtos pelo nome"
          },
          {
            "name": "productCategoryId",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Identificador da categoria para filtrar os produtos do catálogo"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Número da página para paginação opcional"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Quantidade de itens por página para paginação opcional"
          }
        ],
        "output": [
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Identificador do produto"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Nome do produto"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Descrição do produto"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product",
            "description": "Preço do produto"
          },
          {
            "name": "imageUrl",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "URL da imagem do produto"
          },
          {
            "name": "productCategoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Identificador da categoria do produto"
          },
          {
            "name": "featured",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product",
            "description": "Indica se o produto está em destaque"
          },
          {
            "name": "totalCount",
            "type": "number",
            "required": false,
            "description": "Total de produtos encontrados para suporte à paginação"
          }
        ],
        "ports": [
          "Product"
        ],
        "rulesApplied": [
          "featuredProductRequiresActive",
          "productImageUsesPlatformStorage"
        ],
        "transactional": false,
        "steps": [
          "1. Build a list query on the Product port with an automatic filter status=active (systemDefault from contextResolution) so only active products appear in the catalog",
          "2. If searchName is provided, add a case-insensitive contains filter on Product.name",
          "3. If productCategoryId is provided, add an equality filter on Product.productCategoryId",
          "4. If page and pageSize are provided, apply pagination (offset = (page-1)*pageSize, limit = pageSize); otherwise return all matching products",
          "5. Execute the list query through the Product port and collect matching Product records",
          "6. Apply rule featuredProductRequiresActive: any product with featured=true must have status=active; since the query already filters status=active this invariant is satisfied — if a featured product is found with status!=active, exclude it from results",
          "7. Apply rule productImageUsesPlatformStorage: for each returned product, ensure imageUrl (when present) references the platform storage URL pattern; if it does not, set imageUrl to null to avoid exposing non-platform URLs",
          "8. Hydrate ProductCategory names via ctx.mdm.collection.getMany using the distinct productCategoryId values from the results (plural-first, no loop-per-item calls)",
          "9. Project each product to the output fields: productId, name, description, price, imageUrl, productCategoryId, featured",
          "10. Return the projected collection along with totalCount for pagination support"
        ]
      }
    ],
    "mdmRefs": [
      "ProductCategory"
    ]
  }
} as const;

export default browseProductCatalogUsecase;

export const pipeline = [
  {
    "id": "browseProductCatalog__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/browseProductCatalog.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/browseProductCatalog.defs.ts",
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
