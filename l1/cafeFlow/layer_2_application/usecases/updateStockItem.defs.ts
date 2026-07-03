/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.defs.ts" enhancement="_blank"/>

export const updateStockItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateStockItem",
    "ports": [],
    "functions": [
      {
        "functionName": "updateStockItem",
        "inputTypeName": "UpdateStockItemInput",
        "outputTypeName": "UpdateStockItemOutput",
        "input": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Identificador único do item de estoque a ser editado, obtido da entidade selecionada no journey"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Nome do insumo"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Unidade de medida do insumo (ex: kg, unidade, litro)"
          },
          {
            "name": "minimumQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Quantidade mínima para alerta de estoque baixo"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Status do item de estoque (active ou inactive)"
          }
        ],
        "output": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Identificador do item de estoque atualizado"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Nome atualizado do insumo"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Unidade de medida atualizada"
          },
          {
            "name": "minimumQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Quantidade mínima atualizada"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Status atualizado do item de estoque"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Data e hora da última atualização gerada automaticamente pelo sistema"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "lowStockAlert"
        ],
        "transactional": true,
        "steps": [
          "1. Load StockItem aggregate by stockItemId via StockItem port (getById)",
          "2. Validate that the StockItem exists; throw not-found error if absent",
          "3. Validate that status is one of 'active' or 'inactive'",
          "4. Validate that minimumQuantity is a non-negative number",
          "5. Apply updated fields (name, unitOfMeasure, minimumQuantity, status) to the StockItem aggregate",
          "6. Set updatedAt to ctx.clock.now() (system-generated, not user input)",
          "7. Evaluate lowStockAlert rule: if the item's current quantity is at or below the new minimumQuantity threshold and status is 'active', flag the item for low-stock alert",
          "8. Save the StockItem aggregate via StockItem port within the transaction",
          "9. Return the updated StockItem projection (stockItemId, name, unitOfMeasure, minimumQuantity, status, updatedAt)"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default updateStockItemUsecase;

export const pipeline = [
  {
    "id": "updateStockItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.defs.ts",
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
