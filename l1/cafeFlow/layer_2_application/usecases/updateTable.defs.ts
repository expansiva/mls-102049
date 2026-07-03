/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateTable.defs.ts" enhancement="_blank"/>

export const updateTableUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateTable",
    "ports": [],
    "functions": [
      {
        "functionName": "updateTable",
        "inputTypeName": "UpdateTableInput",
        "outputTypeName": "UpdateTableOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identificador único da mesa a ser editada, resolvido a partir da entidade selecionada na jornada"
          },
          {
            "name": "number",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Número ou código de identificação visual da mesa"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Nome ou descrição opcional da mesa"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Situação da mesa no sistema (active ou inactive)"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identificador único da mesa atualizada"
          },
          {
            "name": "number",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Número da mesa após atualização"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Nome da mesa após atualização"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Status da mesa após atualização"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Timestamp de atualização ajustado pelo sistema"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "tableId é resolvido a partir da entidade selecionada na jornada, nunca digitado manualmente",
          "A mesa deve existir no cadastro para ser atualizada — caso contrário a operação falha",
          "updatedAt é definido pelo sistema via ctx.clock.now(), nunca informado pelo usuário",
          "status deve ser um dos valores permitidos: active ou inactive",
          "createdAt é preservado e nunca sobrescrito durante a atualização"
        ],
        "transactional": true,
        "steps": [
          "Resolver tableId a partir do contexto da entidade selecionada (selectedEntity)",
          "Carregar o agregado Table pelo tableId através do port Table",
          "Validar que a mesa existe; se não existir, falhar a operação",
          "Aplicar os novos valores de number, name e status na entidade Table",
          "Definir updatedAt com ctx.clock.now() preservando createdAt original",
          "Persistir o agregado Table através do port Table na mesma transação",
          "Retornar tableId, number, name, status e updatedAt da mesa atualizada"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default updateTableUsecase;

export const pipeline = [
  {
    "id": "updateTable__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateTable.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateTable.defs.ts",
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
