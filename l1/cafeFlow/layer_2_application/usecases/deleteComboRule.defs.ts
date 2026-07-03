/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/deleteComboRule.defs.ts" enhancement="_blank"/>

export const deleteComboRuleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteComboRule",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteComboRule",
    "ports": [],
    "functions": [
      {
        "functionName": "deleteComboRule",
        "inputTypeName": "DeleteComboRuleInput",
        "outputTypeName": "DeleteComboRuleOutput",
        "input": [
          {
            "name": "comboRuleId",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Identificador único da regra de combo selecionada para exclusão, resolvido a partir da entidade selecionada no fluxo"
          }
        ],
        "output": [
          {
            "name": "comboRuleId",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Identificador da regra de combo excluída"
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
          "comboPriceDifference"
        ],
        "transactional": true,
        "steps": [
          "1. Resolver comboRuleId a partir da entidade selecionada no fluxo (contextResolution: selectedEntity)",
          "2. Carregar o ComboRule pelo comboRuleId via ctx.data.mdmDocument.get({ mdmId: comboRuleId })",
          "3. Validar que o ComboRule existe; se não existir, retornar erro de não encontrado",
          "4. Aplicar regra comboPriceDifference: validar que não há pedidos ativos referenciando esta regra de combo antes de permitir a exclusão",
          "5. Excluir o ComboRule via ctx.data.mdmDocument.delete({ mdmId: comboRuleId }) dentro da transação",
          "6. Retornar comboRuleId e status 'deleted' confirmando a exclusão"
        ]
      }
    ],
    "rulesApplied": [
      "comboPriceDifference"
    ],
    "mdmRefs": [
      "ComboRule"
    ]
  }
} as const;

export default deleteComboRuleUsecase;

export const pipeline = [
  {
    "id": "deleteComboRule__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteComboRule.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteComboRule.defs.ts",
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
