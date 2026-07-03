/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.defs.ts" enhancement="_blank"/>

export const deleteStockItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteStockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteStockItem",
    "ports": [],
    "functions": [
      {
        "functionName": "deleteStockItem",
        "inputTypeName": "DeleteStockItemInput",
        "outputTypeName": "DeleteStockItemOutput",
        "input": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Identificador único do item de estoque a ser removido, resolvido da entidade selecionada na jornada"
          }
        ],
        "output": [
          {
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Id do item de estoque removido"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status da operação de exclusão"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "lowStockAlert"
        ],
        "transactional": true,
        "steps": [
          "1. Resolver stockItemId a partir da entidade selecionada no contexto de navegação (selectedEntity)",
          "2. Carregar o StockItem pelo stockItemId através do port StockItem.getById",
          "3. Validar que o item existe; se não existir, retornar erro de não encontrado",
          "4. Aplicar regra lowStockAlert: verificar se o item possuía quantidade abaixo do mínimo e registrar alerta de remoção de item crítico",
          "5. Excluir permanentemente o StockItem através do port StockItem.delete dentro da mesma transação",
          "6. Retornar stockItemId e status confirmando a remoção"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default deleteStockItemUsecase;

export const pipeline = [
  {
    "id": "deleteStockItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.defs.ts",
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
