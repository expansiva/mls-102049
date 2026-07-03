/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createStockMovement.defs.ts" enhancement="_blank"/>

export const createStockMovementUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createStockMovement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createStockMovement",
    "ports": [
      "StockLevel"
    ],
    "functions": [
      {
        "functionName": "createStockMovement",
        "inputTypeName": "CreateStockMovementInput",
        "outputTypeName": "CreateStockMovementOutput",
        "input": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Identificador do item de estoque (insumo) selecionado para baixa"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "description": "Quantidade consumida do insumo"
          },
          {
            "name": "reason",
            "type": "string",
            "required": true,
            "description": "Motivo da movimentação de estoque"
          },
          {
            "name": "movementType",
            "type": "string",
            "required": true,
            "description": "Tipo da movimentação: baixa ou reposicao"
          }
        ],
        "output": [
          {
            "name": "stockMovementEventId",
            "type": "string",
            "required": true,
            "ofEntity": "StockMovementEvent",
            "description": "UUID gerado para o evento de movimentação"
          },
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Item de estoque associado ao evento"
          },
          {
            "name": "movementType",
            "type": "string",
            "required": true,
            "description": "Tipo da movimentação registrada"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "description": "Quantidade movimentada"
          },
          {
            "name": "reason",
            "type": "string",
            "required": true,
            "description": "Motivo da movimentação"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "description": "Data/hora de criação do evento"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "description": "Data/hora de atualização do evento"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Quantidade atual do nível de estoque após a movimentação"
          }
        ],
        "ports": [
          "StockLevel"
        ],
        "rulesApplied": [
          "stockDecrementOnPreparing"
        ],
        "transactional": true,
        "steps": [
          "1. Gerar stockMovementEventId via ctx.idGenerator e timestamps createdAt/updatedAt via ctx.clock",
          "2. Validar que quantity > 0 e movementType pertence ao enum [baixa, reposicao]",
          "3. Carregar StockLevel pelo stockItemId através da porta StockLevel (lookup por stockItemId)",
          "4. Aplicar regra stockDecrementOnPreparing: se movementType = 'baixa', decrementar currentQuantity pela quantity; se 'reposicao', incrementar currentQuantity pela quantity",
          "5. Validar que o novo currentQuantity não fica negativo quando movementType = 'baixa'",
          "6. Atualizar StockLevel: currentQuantity recalculado, lastMovementAt = now, updatedAt = now — salvar via porta StockLevel",
          "7. Criar registro StockMovementEvent com stockMovementEventId, stockItemId, movementType, quantity, reason, createdAt, updatedAt — salvar via porta StockMovementEvent",
          "8. Retornar o evento criado e o currentQuantity atualizado do StockLevel"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default createStockMovementUsecase;

export const pipeline = [
  {
    "id": "createStockMovement__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createStockMovement.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createStockMovement.defs.ts",
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
