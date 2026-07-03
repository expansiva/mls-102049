/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockLevels.defs.ts" enhancement="_blank"/>

export const queryStockLevelsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryStockLevels",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryStockLevels",
    "ports": [
      "StockLevel"
    ],
    "functions": [
      {
        "functionName": "queryStockLevels",
        "inputTypeName": "QueryStockLevelsInput",
        "outputTypeName": "QueryStockLevelsOutput",
        "input": [],
        "output": [
          {
            "name": "stockLevelId",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Unique identifier of the stock level record"
          },
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Reference to the StockItem master data entity"
          },
          {
            "name": "itemName",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Name of the stock item resolved from MDM"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Unit of measure of the stock item resolved from MDM"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Current quantity available in stock"
          },
          {
            "name": "minimumQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Minimum quantity threshold for low stock alert, resolved from MDM"
          },
          {
            "name": "lastMovementAt",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Timestamp of the last stock movement"
          },
          {
            "name": "isLowStock",
            "type": "boolean",
            "required": true,
            "description": "Computed flag: true when currentQuantity is below minimumQuantity (lowStockAlert rule)"
          }
        ],
        "ports": [
          "StockLevel"
        ],
        "rulesApplied": [
          "stockDecrementOnPreparing",
          "lowStockAlert"
        ],
        "transactional": false,
        "steps": [
          "Load all StockLevel records via the StockLevel port (list operation)",
          "For each StockLevel, resolve the referenced StockItem master data by id via ctx.data.mdmDocument.get({ mdmId: stockItemId })",
          "Enrich each StockLevel projection with StockItem.name, StockItem.unitOfMeasure, and StockItem.minimumQuantity",
          "Apply the lowStockAlert rule: compute isLowStock = (currentQuantity < minimumQuantity) for each item",
          "Return the enriched list of stock levels including the isLowStock flag so items below minimum are identifiable",
          "This operation is read-only and does not alter stock state"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default queryStockLevelsUsecase;

export const pipeline = [
  {
    "id": "queryStockLevels__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockLevels.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockLevels.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.d.ts"
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
