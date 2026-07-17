{
  "savedAt": "2026-07-17T01:33:34.462Z",
  "agentName": "agentCbUsecase",
  "stepId": 30,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "searchProducts",
          "ports": [
            "Product"
          ],
          "rulesApplied": [
            "searchIsCaseInsensitiveAndPartial",
            "onlyAvailableProductsVisibleAndReservable",
            "filtersCanBeCombined"
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
                  "description": "Termo de busca digitado pelo cliente para encontrar produtos por nome (correspondência parcial e insensível a caixa)",
                  "ofEntity": "Product.name"
                },
                {
                  "name": "petTypeId",
                  "type": "string",
                  "required": false,
                  "description": "Filtro opcional por tipo de pet indicado para o produto",
                  "ofEntity": "Product.petTypeId"
                },
                {
                  "name": "categoryId",
                  "type": "string",
                  "required": false,
                  "description": "Filtro opcional por categoria do catálogo",
                  "ofEntity": "Product.categoryId"
                },
                {
                  "name": "minPrice",
                  "type": "number",
                  "required": false,
                  "description": "Filtro opcional de preço mínimo para faixa de valor",
                  "ofEntity": "Product.price"
                },
                {
                  "name": "maxPrice",
                  "type": "number",
                  "required": false,
                  "description": "Filtro opcional de preço máximo para faixa de valor",
                  "ofEntity": "Product.price"
                }
              ],
              "output": [
                {
                  "name": "productId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Product.productId"
                },
                {
                  "name": "name",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Product.name"
                },
                {
                  "name": "description",
                  "type": "string",
                  "required": false,
                  "ofEntity": "Product.description"
                },
                {
                  "name": "price",
                  "type": "number",
                  "required": true,
                  "ofEntity": "Product.price"
                },
                {
                  "name": "petTypeId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Product.petTypeId"
                },
                {
                  "name": "petTypeName",
                  "type": "string",
                  "required": true,
                  "ofEntity": "PetType.name"
                },
                {
                  "name": "categoryId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Product.categoryId"
                },
                {
                  "name": "categoryName",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Category.name"
                },
                {
                  "name": "highlighted",
                  "type": "boolean",
                  "required": true,
                  "ofEntity": "Product.highlighted"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Product.status"
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
                "Validate searchTerm is provided; apply rule searchIsCaseInsensitiveAndPartial by normalizing searchTerm to lower case and using partial match on Product.name.",
                "Build filters from optional petTypeId, categoryId, minPrice, maxPrice; combine filters per filtersCanBeCombined and always constrain Product.status = 'available' per onlyAvailableProductsVisibleAndReservable.",
                "Query Product port list/search with composed filters and pagination when provided by access layer.",
                "Collect unique petTypeId and categoryId from results; fetch names in bulk via ctx.mdm.collection.getMany for PetType and Category.",
                "Map each product to output shape including petTypeName and categoryName; return list."
              ]
            }
          ]
        },
        "questions": [],
        "trace": [
          "repair attempt: added usecase defs for searchProducts"
        ]
      }
    },
    "status": "completed",
    "stepId": 13,
    "interaction": null,
    "nextSteps": null
  }
}
