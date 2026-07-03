/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const deleteMenuItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteMenuItem",
    "ports": [],
    "functions": [
      {
        "functionName": "deleteMenuItem",
        "inputTypeName": "DeleteMenuItemInput",
        "outputTypeName": "DeleteMenuItemOutput",
        "input": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identificador único do item do cardápio a ser removido, resolvido a partir da entidade previamente selecionada na jornada"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identificador do item removido"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Status final do item após a remoção (inactive)"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "comboPriceDifference"
        ],
        "transactional": true,
        "steps": [
          "Resolver menuItemId a partir do contexto selectedEntity (entidade previamente selecionada na jornada)",
          "Carregar o MenuItem via ctx.data.mdmDocument.get({ mdmId: menuItemId }) — MenuItem é master data no store compartilhado, sem port dedicado",
          "Validar que o item existe e está atualmente ativo (status = active); se não existir, lançar erro de não encontrado",
          "Aplicar regra comboPriceDifference: verificar se o item participa de algum combo ativo e, em caso afirmativo, avaliar o impacto de preço nos combos relacionados antes de prosseguir com a remoção",
          "Executar soft-delete: definir status do item para 'inactive', tornando-o indisponível para novos pedidos",
          "Persistir o MenuItem atualizado via ctx.data.mdmDocument dentro da mesma transação",
          "Retornar menuItemId e status confirmando a remoção lógica"
        ]
      }
    ],
    "rulesApplied": [
      "comboPriceDifference"
    ],
    "mdmRefs": [
      "MenuItem"
    ]
  }
} as const;

export default deleteMenuItemUsecase;

export const pipeline = [
  {
    "id": "deleteMenuItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "comboPriceDifference"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
