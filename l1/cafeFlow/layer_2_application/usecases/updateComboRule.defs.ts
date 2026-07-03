/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateComboRule.defs.ts" enhancement="_blank"/>

export const updateComboRuleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateComboRule",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateComboRule",
    "ports": [],
    "functions": [
      {
        "functionName": "updateComboRule",
        "inputTypeName": "UpdateComboRuleInput",
        "outputTypeName": "UpdateComboRuleOutput",
        "input": [
          {
            "name": "comboRuleId",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Identificador único da regra de combo, resolvido da entidade selecionada no contexto da jornada"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Nome descritivo da regra"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "ComboRule",
            "description": "Detalhamento da regra e condições de aplicação"
          },
          {
            "name": "priceDifference",
            "type": "number",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Diferença de preço aplicada no combo ou substituição"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Situação da regra no ciclo de vida (active | inactive)"
          }
        ],
        "output": [
          {
            "name": "comboRuleId",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Identificador da regra atualizada"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Nome atualizado da regra"
          },
          {
            "name": "priceDifference",
            "type": "number",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Diferença de preço atualizada"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Situação atualizada da regra"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ComboRule",
            "description": "Data e hora da última atualização"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "comboPriceDifference"
        ],
        "transactional": true,
        "steps": [
          "1. Carregar ComboRule pelo comboRuleId (resolvido do contexto de entidade selecionada) através do ComboRulePort.getById",
          "2. Validar que a ComboRule existe; se não existir, lançar erro de não encontrado",
          "3. Ler o MenuItem referenciado pela ComboRule.menuItemId via ctx.data.mdmDocument.get({ mdmId: comboRule.menuItemId }) para obter o preço base",
          "4. Aplicar a regra comboPriceDifference: validar que o priceDifference informado é consistente com o preço do MenuItem (não negativo, dentro de limites aceitáveis)",
          "5. Atualizar os campos name, description, priceDifference e status na entidade ComboRule carregada",
          "6. Definir updatedAt = ctx.clock.now()",
          "7. Salvar a ComboRule atualizada através do ComboRulePort.save dentro da mesma transação",
          "8. Retornar comboRuleId, name, priceDifference, status e updatedAt"
        ]
      }
    ],
    "mdmRefs": [
      "ComboRule",
      "MenuItem"
    ]
  }
} as const;

export default updateComboRuleUsecase;

export const pipeline = [
  {
    "id": "updateComboRule__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateComboRule.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateComboRule.defs.ts",
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
