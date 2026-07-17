{
  "savedAt": "2026-07-17T04:29:48.612Z",
  "agentName": "agentCbUsecase",
  "stepId": 15,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "setProductHighlights",
          "ports": [
            "Product"
          ],
          "rulesApplied": [
            "highlightRequiresAvailableProduct",
            "highlightsAreManualOnly"
          ],
          "functions": [
            {
              "functionName": "setProductHighlights",
              "inputTypeName": "SetProductHighlightsInput",
              "outputTypeName": "SetProductHighlightsOutput",
              "input": [
                {
                  "name": "productIds",
                  "type": "array",
                  "required": true,
                  "fieldRef": "Product.productId",
                  "item": {
                    "type": "string"
                  }
                },
                {
                  "name": "highlighted",
                  "type": "boolean",
                  "required": true,
                  "ofEntity": "Product",
                  "fieldRef": "Product.highlighted"
                }
              ],
              "output": [
                {
                  "name": "updatedCount",
                  "type": "number",
                  "required": true
                },
                {
                  "name": "products",
                  "type": "array",
                  "required": true
                }
              ],
              "ports": [
                "Product"
              ],
              "rulesApplied": [
                "highlightRequiresAvailableProduct",
                "highlightsAreManualOnly"
              ],
              "transactional": true,
              "steps": [
                "Resolve actorId from ctx.sessionContext.actorId; if missing, reject as manual operation only (rule highlightsAreManualOnly).",
                "Load Products by ids via Product port.",
                "If highlighted=true, validate all loaded products have status != 'unavailable'; if any unavailable, reject with rule highlightRequiresAvailableProduct.",
                "Apply highlighted value to each loaded product; set updatedAt=ctx.clock.now();",
                "Persist updated products via Product port inside ctx.data transaction.",
                "Return updatedCount and products projection (productId,name,highlighted,status)."
              ],
              "outputShape": {
                "kind": "object",
                "fields": [
                  {
                    "name": "updatedCount",
                    "type": "number",
                    "required": true
                  },
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
                ]
              }
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": []
      }
    },
    "status": "completed",
    "stepId": 23,
    "interaction": null,
    "nextSteps": null
  }
}
