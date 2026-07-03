/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.defs.ts" enhancement="_blank"/>

export const adjustStockLevelUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "adjustStockLevel",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "adjustStockLevel",
    "ports": [
      "StockLevel"
    ],
    "functions": [
      {
        "functionName": "adjustStockLevel",
        "inputTypeName": "AdjustStockLevelInput",
        "outputTypeName": "AdjustStockLevelOutput",
        "input": [
          {
            "name": "stockLevelId",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Identificador do nível de estoque selecionado para ajuste"
          },
          {
            "name": "movementType",
            "type": "string",
            "required": true,
            "ofEntity": "StockMovementEvent",
            "description": "Tipo da movimentação: baixa (decremento) ou reposicao (incremento)"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockMovementEvent",
            "description": "Quantidade movimentada no ajuste"
          },
          {
            "name": "reason",
            "type": "string",
            "required": true,
            "ofEntity": "StockMovementEvent",
            "description": "Motivo do ajuste de estoque"
          }
        ],
        "output": [
          {
            "name": "stockLevelId",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Identificador do nível de estoque ajustado"
          },
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Identificador do item de estoque vinculado"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockLevel",
            "description": "Quantidade atual após o ajuste"
          },
          {
            "name": "lowStockAlert",
            "type": "boolean",
            "required": true,
            "description": "Indica se a quantidade atual ficou abaixo do mínimo do item"
          },
          {
            "name": "stockMovementEventId",
            "type": "string",
            "required": true,
            "ofEntity": "StockMovementEvent",
            "description": "Identificador do registro de movimentação gerado"
          }
        ],
        "ports": [
          "StockLevel"
        ],
        "rulesApplied": [
          "stockDecrementOnPreparing",
          "lowStockAlert"
        ],
        "transactional": true,
        "steps": [
          "1. Resolver stockLevelId a partir da entidade selecionada (contextResolution.selectedEntity)",
          "2. Carregar StockLevel pelo stockLevelId através do port StockLevel.getById",
          "3. Ler StockItem do MDM via ctx.data.mdmDocument.get({ mdmId: stockLevel.stockItemId }) para obter minimumQuantity e validar status ativo",
          "4. Validar que o StockItem está ativo (status === 'active'); se inativo, rejeitar operação",
          "5. Aplicar regra stockDecrementOnPreparing: se movementType === 'baixa', decrementar currentQuantity pela quantity informada; se movementType === 'reposicao', incrementar currentQuantity pela quantity",
          "6. Validar que currentQuantity resultante não é negativo (baixa não pode exceder o saldo disponível)",
          "7. Gerar stockMovementEventId via ctx.idGenerator e createdAt via ctx.clock.now",
          "8. Construir registro StockMovementEvent { stockMovementEventId, stockItemId: stockLevel.stockItemId, movementType, quantity, reason, createdAt, updatedAt } e anexá-lo ao aggregate StockLevel através do port na mesma transação",
          "9. Atualizar StockLevel: currentQuantity (novo saldo), lastMovementAt = ctx.clock.now, updatedAt = ctx.clock.now",
          "10. Aplicar regra lowStockAlert: comparar currentQuantity com StockItem.minimumQuantity; se currentQuantity < minimumQuantity, marcar lowStockAlert = true",
          "11. Salvar StockLevel (com o evento de movimentação anexado) através do port StockLevel.save dentro da mesma transação",
          "12. Retornar { stockLevelId, stockItemId, currentQuantity, lowStockAlert, stockMovementEventId }"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default adjustStockLevelUsecase;

export const pipeline = [
  {
    "id": "adjustStockLevel__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.defs.ts",
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
