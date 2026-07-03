/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/deleteTable.defs.ts" enhancement="_blank"/>

export const deleteTableUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteTable",
    "ports": [],
    "functions": [
      {
        "functionName": "deleteTable",
        "inputTypeName": "DeleteTableInput",
        "outputTypeName": "DeleteTableOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identificador único da mesa a ser removida, obtido da seleção prévia no fluxo"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identificador da mesa removida"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status da operação de exclusão"
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "1. Receber tableId resolvido da seleção prévia no fluxo (contextResolution: selectedEntity)",
          "2. Carregar o aggregate Table pelo tableId através do port Table",
          "3. Validar que a mesa existe; se não existir, retornar erro de não encontrado",
          "4. Verificar pré-condição de confirmação do gerente (garantida pela camada de apresentação antes da chamada)",
          "5. Executar a remoção do registro da mesa no aggregate Table",
          "6. Persistir a exclusão através do port Table dentro da mesma transação",
          "7. Retornar tableId e status indicando sucesso da exclusão"
        ]
      }
    ],
    "rulesApplied": [],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default deleteTableUsecase;

export const pipeline = [
  {
    "id": "deleteTable__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteTable.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteTable.defs.ts",
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
