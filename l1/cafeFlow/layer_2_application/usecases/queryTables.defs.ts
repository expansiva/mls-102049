/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryTables.defs.ts" enhancement="_blank"/>

export const queryTablesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryTables",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryTables",
    "ports": [],
    "functions": [
      {
        "functionName": "queryTables",
        "inputTypeName": "QueryTablesInput",
        "outputTypeName": "QueryTablesOutput",
        "input": [
          {
            "name": "statusFilter",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Filtro opcional por situação da mesa (active ou inactive)"
          },
          {
            "name": "numberFilter",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Filtro opcional pelo número ou código visual da mesa"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identificador único da mesa, chave primária para seleção"
          },
          {
            "name": "number",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Número ou código visual da mesa"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Nome descritivo da mesa, se definido"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Situação da mesa (active ou inactive)"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Data e hora de criação da mesa"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Data e hora da última atualização da mesa"
          },
          {
            "name": "total",
            "type": "number",
            "required": false,
            "description": "Total de registros correspondentes aos filtros (para paginação)"
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Resolver workspaceId a partir do RequestContext (currentWorkspace) para escopo e segurança",
          "Construir critério de filtro com statusFilter e numberFilter opcionais, sempre escopado por workspaceId",
          "Consultar TableRepository aplicando filtros, ordenação por number e createdAt, e paginação opcional",
          "Projetar resultado em lista de mesas com tableId, number, name, status, createdAt, updatedAt",
          "Retornar coleção paginada com total de registros correspondentes"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default queryTablesUsecase;

export const pipeline = [
  {
    "id": "queryTables__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryTables.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryTables.defs.ts",
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
