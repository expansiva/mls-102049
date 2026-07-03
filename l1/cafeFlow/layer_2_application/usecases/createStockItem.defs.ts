/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createStockItem.defs.ts" enhancement="_blank"/>

export const createStockItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createStockItem",
    "ports": [],
    "functions": [
      {
        "functionName": "createStockItem",
        "inputTypeName": "CreateStockItemInput",
        "outputTypeName": "CreateStockItemOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Nome do insumo",
            "ofEntity": "StockItem"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "description": "Unidade de medida do insumo (ex: kg, unidade, litro)",
            "ofEntity": "StockItem"
          },
          {
            "name": "minimumQuantity",
            "type": "number",
            "required": true,
            "description": "Quantidade mínima para alerta de estoque baixo",
            "ofEntity": "StockItem"
          }
        ],
        "output": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "description": "Identificador único gerado automaticamente",
            "ofEntity": "StockItem"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "minimumQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status do item de estoque (active/inactive)",
            "ofEntity": "StockItem"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "lowStockAlert"
        ],
        "transactional": true,
        "steps": [
          "1. Validate that name, unitOfMeasure and minimumQuantity are provided and non-empty",
          "2. Generate stockItemId via ctx.idGenerator.uuid()",
          "3. Resolve createdAt and updatedAt from ctx.clock.now()",
          "4. Set status to 'active' for newly created stock items",
          "5. Instantiate StockItem aggregate with provided name, unitOfMeasure, minimumQuantity and generated stockItemId, createdAt, updatedAt, status",
          "6. Apply lowStockAlert rule: evaluate whether the item's minimumQuantity threshold is configured for low-stock alerting",
          "7. Persist StockItem through its repository port inside a transaction",
          "8. Return projected output: stockItemId, name, unitOfMeasure, minimumQuantity, status"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default createStockItemUsecase;

export const pipeline = [
  {
    "id": "createStockItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createStockItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createStockItem.defs.ts",
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
