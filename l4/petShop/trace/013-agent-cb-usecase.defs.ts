{
  "savedAt": "2026-07-17T04:30:18.640Z",
  "agentName": "agentCbUsecase",
  "stepId": 13,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
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
        },
        "questions": [],
        "trace": [
          "getById Product by Product.productId",
          "mdmRefs: PetType, Category",
          "rule onlyAvailableProductsVisibleAndReservable applied"
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
