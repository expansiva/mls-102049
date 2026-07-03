/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createTable.defs.ts" enhancement="_blank"/>

export const createTableUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createTable",
    "ports": [],
    "functions": [
      {
        "functionName": "createTable",
        "inputTypeName": "CreateTableInput",
        "outputTypeName": "CreateTableOutput",
        "input": [
          {
            "name": "number",
            "type": "string",
            "required": true,
            "description": "Número ou código de identificação visual da mesa (ex: 01, 12, A3)",
            "ofEntity": "Table"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')",
            "ofEntity": "Table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Situação da mesa no sistema (active ou inactive)",
            "ofEntity": "Table"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "description": "Identificador único da mesa gerado pelo sistema",
            "ofEntity": "Table"
          },
          {
            "name": "number",
            "type": "string",
            "required": true,
            "description": "Número ou código de identificação visual da mesa",
            "ofEntity": "Table"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "description": "Nome ou descrição da mesa",
            "ofEntity": "Table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Situação da mesa no sistema",
            "ofEntity": "Table"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "description": "Data e hora de criação do registro",
            "ofEntity": "Table"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "description": "Data e hora da última atualização do registro",
            "ofEntity": "Table"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "tableId gerado automaticamente via ctx.idGenerator",
          "createdAt e updatedAt definidos automaticamente via ctx.clock",
          "status deve ser um dos valores permitidos: active | inactive",
          "number é obrigatório e informado pelo gerente"
        ],
        "transactional": true,
        "steps": [
          "1. Validar que number não é vazio e status é 'active' ou 'inactive'",
          "2. Gerar tableId automaticamente via ctx.idGenerator",
          "3. Definir createdAt e updatedAt com o timestamp atual via ctx.clock",
          "4. Construir a entidade Table com os dados de entrada e os valores gerados pelo sistema",
          "5. Persistir a nova mesa através do TablePort dentro de uma transação",
          "6. Retornar os dados da mesa criada (tableId, number, name, status, createdAt, updatedAt)"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default createTableUsecase;

export const pipeline = [
  {
    "id": "createTable__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createTable.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createTable.defs.ts",
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
